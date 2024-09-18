import { Button as AntdButton } from 'antd';
import { ButtonType } from './Button.type';
export default function Button({
  title,
  fontWeight,
  color,
  border,
  borderRadius,
  width,
  height,
  backgroundColor,
  customIcon,
  style,
  ...props
}: ButtonType) {
  return (
    <>
      {customIcon ? (
        <AntdButton
          {...props}
          style={{
            fontWeight: fontWeight,
            color: color,
            border: border,
            borderRadius: borderRadius,
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {customIcon ? customIcon : null}
          <p className={`${customIcon ? 'ml-3' : ''}`}>{title}</p>
        </AntdButton>
      ) : (
        <AntdButton
          {...props}
          style={{
            fontWeight: fontWeight,
            color: color,
            border: border,
            borderRadius: borderRadius,
            width: width,
            height: height,
            backgroundColor: backgroundColor
          }}
        >
          {title}
        </AntdButton>
      )}
    </>
  );
}
