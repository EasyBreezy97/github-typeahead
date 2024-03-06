import classes from "./index.module.css";

interface IInputProps {
  label: string;
}

export default function Input({
  label,
  placeholder,
  ...rest
}: IInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={classes.container}>
      <label>{label}</label>
      <input placeholder={placeholder} {...rest} />
    </div>
  );
}
