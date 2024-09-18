import { ButtonProps } from 'antd';
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
type ButtonType = {
  title?: string;
  fontWeight?: FontWeight;
  color?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  backgroundColor ?: string
  customIcon ?: any
} & ButtonProps;
export type { ButtonType };
