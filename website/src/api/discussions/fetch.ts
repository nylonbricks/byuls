import { graphql } from '@octokit/graphql';
import { env } from '~/constants/variable';
import type { Discussion } from './type';

/**
 * Fetch discussions from a GitHub repository.
 *
 * @param repoId - The ID of the repository.
 * @param categoryId - The ID of the discussion category.
 * @returns A promise that resolves to an array of discussions.
 */
export async function getDiscussions(repoId: string, categoryId: string): Promise<Discussion[]> {
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
