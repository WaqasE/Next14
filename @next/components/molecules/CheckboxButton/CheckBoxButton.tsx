import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonType } from '../../atoms/Button/Button.type';
import { Checkbox } from '../../atoms';

const CheckBoxButton = ({
  title,
  fontWeight,
  color,
  border,
  borderRadius,
  width,
  height,
  isChecked,
  onCheck,
  ...props
}: ButtonType & { onCheck: () => any; isChecked: boolean }) => {
  return (
    <AntdButton
      {...props}
      style={{
        fontWeight: fontWeight,
        color: color,
        border: border,
        borderRadius: borderRadius,
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      {title}

      <Checkbox checked={isChecked} onChange={() => onCheck()} />
    </AntdButton>
  );
};

export default CheckBoxButton;
