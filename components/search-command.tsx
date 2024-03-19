// Importing necessary modules from React and other libraries
import { useEffect, useState } from "react";
import { File } from "lucide-react"; // Icon library
import { useQuery } from "convex/react"; // Convex API query hook
import { useRouter } from "next/navigation"; // Next.js router hook
import { useUser } from "@clerk/clerk-react"; // Clerk authentication hook

// Importing components for rendering UI elements
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"; // Custom UI components
import { useSearch } from "@/hooks/use-search"; // Custom hook for search functionality
import { api } from "@/convex/_generated/api"; // Generated Convex API endpoints

// Component for rendering search functionality
export const SearchCommand = () => {
  // Accessing user data using Clerk authentication hook
  const { user } = useUser();

  // Accessing Next.js router
  const router = useRouter();

  // Querying documents from Convex API
  const documents = useQuery(api.documents.getSearch);

  // State for tracking component mount status
  const [isMounted, setIsMounted] = useState(false);

  // Retrieving search state and functions using custom search hook
  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

  // Effect to set component mount status to true when mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Effect to handle keyboard shortcut for toggling search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle(); // Toggles the search state
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  // Function to handle document selection
  const onSelect = (id: string) => {
    router.push(`/documents/${id}`); // Redirecting to document page
    onClose(); // Closing the search dialog
  };

  // Rendering nothing if component is not mounted yet
  if (!isMounted) {
    return null;
  }

  // Rendering search dialog with search input and results
  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder={`Search ${user?.fullName}'s Board...`} />{" "}
      {/* Search input field */}
      <CommandList>
        {/* Display message if no search results */}
        <CommandEmpty>No results found.</CommandEmpty>
        {/* Displaying document search results */}
        <CommandGroup heading='Documents'>
          {documents?.map((document) => (
            <CommandItem
              key={document._id}
              value={`${document._id}-${document.title}`}
              title={document.title}
              onSelect={() => onSelect(document._id)}
            >
              {/* Displaying document icon or default file icon */}
              {document.icon ? (
                <p className='mr-2 text-[18px]'>{document.icon}</p>
              ) : (
                <File className='mr-2 h-4 w-4' />
              )}
              {/* Displaying document title */}
              <span>{document.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
