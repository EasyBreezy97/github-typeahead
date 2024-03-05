import classes from "./index.module.css";

export default function Spinner() {
  return (
    <div className={classes.container}>
      <span className={classes.spinner}></span>
    </div>
  );
}
