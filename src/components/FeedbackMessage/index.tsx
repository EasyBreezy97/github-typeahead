import classes from "./index.module.css";

interface IFeedbackMessage {
  variant: "error" | "success" | "info";
  message: string;
}

export default function FeedbackMessage({
  variant = "info",
  message,
}: IFeedbackMessage) {
  return <p className={classes[variant]}>{message}</p>;
}
