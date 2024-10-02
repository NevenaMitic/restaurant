"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

//Izgled za Search bar
const SearchNav = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <div className="flex bg-black border text-gold-1 font-montserrat border-gold px-3
      py-1 w-full max-w-[700px]">
      <input
        className="outline-none bg-black w-full max-w-[100%]"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && query !== "") {
            router.push(`/search/${query}`);
          }
        }}
      />
      <button
        disabled={query === ""}
        onClick={() => router.push(`/search/${query}`)}
      >
        <Search className="cursor-pointer h-4 w-4 hover:text-beige-1" />
      </button>
    </div>
  );
};

export default SearchNav;
