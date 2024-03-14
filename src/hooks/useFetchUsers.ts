import { useState, useEffect } from 'react';
import { fetchUsers } from '@/api/fetchUsers';
import { useDebounce } from "@/hooks/useDebounce";
import { IUser } from '@/utils/types';

const useFetchUsers = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<IUser[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const debouncedSearch = useDebounce(query);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const users = await fetchUsers(debouncedSearch);
        if (users) setUsers(users?.items);
      } catch (error: any) {
        setError(error.message || 'An error occurred while fetching users.');
      }
      setLoading(false);
    };

    if (debouncedSearch) {
      loadUsers();
    } else {
      setUsers([]);
    }
  }, [debouncedSearch]);

  return { query, setQuery, users, loading, error, setError};
};

export default useFetchUsers;
