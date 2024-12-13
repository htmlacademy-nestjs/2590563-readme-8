export interface BasePost {
  id?: string;
  authorId: string;
  repostId: string;
  tags?: string[]
  createDate: Date;
  publicationDate: Date;
}

export interface VidePost extends BasePost {
  name: string;
  url: string;
}

export interface TextPost extends BasePost {
  name: string;
  preview: string;
  text: string;
}

export interface QuotePost extends BasePost {
  quoteAuthorId: string;
  quoteText: string
}

export interface PhotoPost extends BasePost {
  url: string;
}

export interface LinkPost extends BasePost {
  description: string;
  url: string;
}

export interface Post extends VidePost, LinkPost, TextPost, QuotePost, PhotoPost{}
