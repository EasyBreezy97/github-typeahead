import { UserSearchResponse } from "@/utils/types";

export async function fetchUsers(
  query: string,
): Promise<UserSearchResponse | null> {
  try {
    if (!query) {
      return null;
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/search/users?q=${query}`,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
