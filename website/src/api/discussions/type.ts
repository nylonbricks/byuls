export interface DiscussionComment {
  id: string;
  body: string;
  createdAt: string;
  author: {
    login: string;
  };
}

export interface Discussion {
  id: string;
  title: string;
  body: string;
  url: string;
  createdAt: string;
  comments: {
    nodes: DiscussionComment[];
  };
}
