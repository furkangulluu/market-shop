export type Query = {
  page: string;
  limit: string;
  sort?: string;
  order?: "asc" | "desc";
  type?: string;
  itemType?: string;
  manufacturer?: string[];
  tags?: string[];
};
