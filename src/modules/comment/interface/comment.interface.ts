export interface Comment {
  id: string;
  content: string;
  postId: string;
  profileId: string;
  likes: number;
}

export type UpdateComment = Omit<Partial<Comment>, 'likes' | 'postId'>