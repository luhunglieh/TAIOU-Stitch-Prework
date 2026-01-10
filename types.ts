
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  authorImage: string;
  isFeatured?: boolean;
  content?: string;
  tags?: string[];
}

export interface Category {
  name: string;
  count: number;
}

export interface PopularPost {
  id: string;
  rank: string;
  title: string;
  date: string;
}
