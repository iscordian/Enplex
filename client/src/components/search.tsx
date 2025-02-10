import { useState } from "react";
import { Input } from "@/components/ui/input";
import { sections } from "@/lib/content";

export function Search() {
  const [query, setQuery] = useState("");

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search documentation..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full"
      />
      {query && (
        <div className="absolute mt-2 w-full rounded-md bg-popover shadow-lg">
          {filteredSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block px-4 py-2 text-sm hover:bg-accent"
              onClick={() => setQuery("")}
            >
              {section.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
