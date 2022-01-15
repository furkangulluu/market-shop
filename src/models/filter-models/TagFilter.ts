import { Tag } from './../Tag';

export type TagFilter = {
  type: string;
  payload: string[];
};

export type TagSearchFilter = {
  type: string;
  payload: string;
};
