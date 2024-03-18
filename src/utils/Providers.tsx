"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProviders {
  children: React.ReactNode;
}

export default function Providers({ children }: IProviders) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
