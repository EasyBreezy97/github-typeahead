import React, { MouseEventHandler } from "react";
import classes from "./index.module.css";
import Image from "next/image";

interface ICard {
  picture: string;
  title: string;
  description: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default function Card({ picture, title, description, onClick }: ICard) {
  return (
    <div onClick={onClick} className={classes.card}>
      <Image
        className={classes.picture}
        src={picture}
        width={50}
        height={50}
        alt="Profile"
      />
      <div className={classes.info}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}
