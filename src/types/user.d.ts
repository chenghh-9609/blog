export interface Menu {
  name: string;
  key: number;
  path: string;
  children?: Menu[];
}

export interface User {
  id: number;
  name: string;
  articles?: string;
  followers?: User[];
  followings?: User[];
  totalStars: number;
  totalWatch: number;
  weights: number;
  avatar?: string;
  desc?: string;
}

export interface Article {
  id: number;
  user: User;
  title: string;
  desc: string;
  paragraphs: string[];
  date: Date;
  tags: string[];
  watchNum: number;
  commentNum: number;
  starNum: number;
}
