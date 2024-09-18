import { Input as AntdInput } from 'antd';
import { InputType } from './Input.type';
export default function Input({
  label,
  isPassword,
  outerClassName,
  isRequired,
  ...props
}: InputType) {
  return (
    <div className={outerClassName}>
      <label
        className={`mb-4 text-xs font-semibold text-black ${
          isRequired && 'required'
        }`}
      >
        {label}
      </label>
      {isPassword ? (
        <AntdInput.Password {...props} />
      ) : (
        <AntdInput {...props} />
      )}
    </div>
  );
}
