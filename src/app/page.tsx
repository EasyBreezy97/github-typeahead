"use client";
import Input from "@/components/Input";
import classes from "./page.module.css";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import { IUser } from "@/utils/types";
import FeedbackMessage from "@/components/FeedbackMessage";
import Image from "next/image";
import peopleImg from "/public/people.png";
import useFetchUsers from "@/hooks/useFetchUsers";

export default function Home() {
  const { setQuery, error, users, setError, loading } = useFetchUsers();

  return (
    <div className={classes.main}>
      <div className={classes.search}>
        <Input
          label="Search user"
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
            setError(null);
          }}
          placeholder="Search user..."
        />
      </div>

      {loading && <Spinner />}
      {error && <FeedbackMessage message={String(error)} variant="error" />}

      {users?.length === 0 && !loading && !error && (
        <div className={classes.img}>
          <h3>Github users...</h3>
          <Image
            src={peopleImg}
            width={400}
            height={300}
            alt={"search placeholder"}
            layout="responsive"
          />
        </div>
      )}
      <div className={classes.content}>
        {users?.map((user: IUser) => (
          <Card
            key={user.id}
            onClick={() => window.open(user.html_url, "_blank")}
            title={user.login}
            description={"Type: " + user.type}
            picture={user.avatar_url}
          />
        ))}
      </div>
    </div>
  );
}
