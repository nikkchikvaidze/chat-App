export interface User {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

export interface UserComment extends User {
  replies: Reply[];
}

export interface Reply extends User {
  replyingTo: string;
}

export interface CurrentUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

// export interface UserCommentTwo {
//   id: number;
//   content: string;
//   createdAt: string;
//   score: number;
//   user: User;
//   replies: Reply[];
// }

// export interface User {
//   image: {
//     png: string;
//     webp: string;
//   };
//   username: string;
// }

// type ReplyTwo = Omit<UserComment, 'replies'> & { replyingTo: string };
