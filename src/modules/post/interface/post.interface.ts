export interface Post {

  id: string;
  title: string;
  description?: string;
  content: string;
  published?: boolean;
  authorId: string;
  comments?: Comment;
  likes: number;

}

export type UpdatePost = Omit<Partial<Post>, 'author' | 'authorId' | 'comments' |'likes'>