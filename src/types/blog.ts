export type Post = {
    slug: string;
    title: string;
    eyecatch: string;

    body: string;

    created_at: number;
  };

  export type Category = {
    id: number;
    name: string;
  };