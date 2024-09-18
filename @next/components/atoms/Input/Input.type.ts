import { InputProps } from 'antd';
import React, { ReactNode } from 'react';
type InputType = {
  label?: string;
  outerClassName?: string;
  isPassword?: boolean;
  iconRender?: any;
  isRequired?: boolean;
} & InputProps;
export type { InputType };
