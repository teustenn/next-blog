import { PostData } from '@/types/post';

interface FetchOptions {
  revalidate?: number | false;
  tags?: string[];
  cache?: 'force-cache' | 'no-store';
}

interface GetAllParams {
  searchTerm?: string;
  options?: FetchOptions;
}

interface GetOneParams {
  id: string;
  searchTerm?: string;
  options?: FetchOptions;
}

export const PostsService = {
  async getAll({ searchTerm, options }: GetAllParams = {}): Promise<PostData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}?${searchTerm}`, {
      next: {
        revalidate: options?.revalidate,
        tags: options?.tags,
      },
      cache: options?.cache,
    });

    const data = await response.json();
    return data.data || [];
  },

  async getOne({ id, searchTerm, options }: GetOneParams): Promise<PostData> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}/${id}?${searchTerm}`, {
      next: {
        revalidate: options?.revalidate,
        tags: options?.tags,
      },
      cache: options?.cache,
    });

    const data = await response.json();
    return data.data || [];
  },
};
