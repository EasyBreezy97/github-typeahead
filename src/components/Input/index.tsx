import classes from "./index.module.css";

interface IInputProps {
  label: string;
}

export default function Input({
  label,
  ...rest
}: IInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={classes.container}>
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
}
