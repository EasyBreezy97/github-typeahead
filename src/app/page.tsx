"use client";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import classes from "./page.module.css";
import { fetchUsers } from "@/api/fetchUsers";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import { User } from "@/utils/types";
import { useDebounce } from "@/hooks/useDebounce";
import FeedbackMessage from "@/components/FeedbackMessage";

export default function Home() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const debouncedSearch = useDebounce(query);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const users = await fetchUsers(debouncedSearch);
        setUsers(users?.items);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };
    if (debouncedSearch) {
      loadUsers();
    } else {
      setUsers([]);
    }
  }, [debouncedSearch]);

  return (
    <div className={classes.main}>
      <div>
        <Input
          label="Search user"
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      {loading && <Spinner />}
      {error && <FeedbackMessage message={String(error)} variant="error" />}
      <div className={classes.content}>
        {users?.map((user: User) => (
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
