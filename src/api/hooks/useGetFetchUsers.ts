import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/api/fetchUsers";
import { useDebounce } from "@/hooks/useDebounce";
import { IUser } from "@/utils/types";

const useGetFetchUsers = () => {
  const [query, setQuery] = useState("");

  const debouncedSearch = useDebounce(query);

  const {
    data: users,
    isLoading: loading,
    error,
  } = useQuery<IUser[], Error>({
    queryKey: ["users", debouncedSearch],
    queryFn: async () => {
      try {
        const fetchedUsers = await fetchUsers(debouncedSearch);
        return fetchedUsers?.items || [];
      } catch (error: any) {
        throw new Error(
          error.message || "An error occurred while fetching users.",
        );
      }
    },
    enabled: !!debouncedSearch,
  });

  return { query, setQuery, users, loading, error };
};

export default useGetFetchUsers;
