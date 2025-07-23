export type PostID = number;

export interface Data {
  data: PostData[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface PostData {
  id: PostID;
  documentId: string;
  title: string;
  content: PostContent[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: PostCover;
  author: PostAuthor;
  category: PostCategory;
}

export interface PostContent {
  type: string;
  text: string;
  level: number;
  bold: boolean;
  format: string;
  children: PostContent[];
}

export type PostCover = PostCoverFormat & {
  id: PostID;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  formats: {
    large: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    thumbnail: PostCoverFormat;
  };
  provider: string;
};

export interface PostCoverFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

export interface PostAuthor {
  id: PostID;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostCategory {
  id: PostID;
  documentId: string;
  createdAt: string;
  updatedAt: string;
}
