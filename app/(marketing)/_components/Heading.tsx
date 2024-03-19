"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas, Documents, & Plans. Unified.{" "}
        <span className='underline'>Welcome</span>
        {/* <span className='underline'>Sotion</span> */}.
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        A connected workspace where <br /> great work happens.
      </h3>
      {isLoading && (
        <div className='flex w-full items-center justify-center'>
          <Spinner size='lg' />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            {/* Enter Jotion  */}
            Enter Board
            <ChevronRight className='h-4 w-4 ml-2' />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        // <Button asChild>
        //   <Link href='/documents'>
        //     Enter Jotion <ChevronRight className='h-4 w-4 ml-2' />
        //   </Link>
        // </Button>
        <SignUpButton mode='modal'>
          <Button>
            {/* Get Jotion Free */}
            Get Free Access
            <ChevronRight className='h-4 w-4 ml-2' />
          </Button>
        </SignUpButton>
        // <Button asChild>
        //   <Link href='/documents'>
        //     Enter Jotion <ChevronRight className='h-4 w-4 ml-2' />
        //   </Link>
        // </Button>
      )}
    </div>
  );
};
