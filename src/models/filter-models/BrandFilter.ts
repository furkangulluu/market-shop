import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { Brand } from './../Brand';

export type BrandFilter = {
  type: string;
  payload: string[];
};

export type BrandSearchFilter = {
  type: string;
  payload: string;
};
