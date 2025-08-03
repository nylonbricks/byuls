import { graphql } from '@octokit/graphql';
import { env } from '~/constants/variable';
import type { Discussion } from './type';

export async function getDiscussions(): Promise<Discussion[]> {
  const repoId = process.env.GITHUB_REPO_ID!;
  const categoryId = process.env.GITHUB_CATEGORY_ID!;
  const token = env.token!;

  const result = await graphql<{
    node: { discussions: { nodes: Discussion[] } };
  }>(
    `
    query($repoId: ID!, $categoryId: ID!) {
      node(id: $repoId) {
        ... on Repository {
          discussions(first: 10, categoryId: $categoryId) {
            nodes {
              id
              title
              body
              url
              createdAt
              comments(first: 5) {
                nodes {
                  id
                  body
                  createdAt
                  author {
                    login
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    {
      repoId,
      categoryId,
      headers: {
        authorization: `token ${token}`,
      },
    },
  );

  return result.node.discussions.nodes;
}
