"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";
import { Navigation } from "./_components/Navigation";
import Navbar from "../(marketing)/_components/Navbar";
import { SearchCommand } from "@/components/search-command";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className='h-full flex items-center justify-center dark:bg-[#1F1F1F]'>
        <Spinner size='lg' />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className='h-full flex bg-background dark:bg-[#1F1F1F]'>
      <Navigation />
      <main className='flex-1 pt-10 h-full overflow-y-auto'>
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
