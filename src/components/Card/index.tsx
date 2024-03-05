import React, { MouseEventHandler } from "react";
import classes from "./index.module.css";

interface ICard {
  picture: string;
  title: string;
  description: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default function Card({ picture, title, description, onClick }: ICard) {
  return (
    <div onClick={onClick} className={classes.card}>
      <img className={classes.picture} src={picture} alt="Profile" />
      <div className={classes.info}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}
