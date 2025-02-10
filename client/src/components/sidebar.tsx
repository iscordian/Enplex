import { Link } from "wouter";
import { sections } from "@/lib/content";
import { Search } from "./search";

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r">
      <div className="flex flex-col h-full">
        <div className="flex h-16 shrink-0 items-center px-6">
          <Link href="/">
            <a className="text-xl font-semibold text-sidebar-foreground">
              Enplex.js
            </a>
          </Link>
        </div>
        <div className="px-6 py-2">
          <Search />
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {sections.map((section) => (
            <div key={section.id} className="py-2">
              <a
                href={`#${section.id}`}
                className="block rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent"
              >
                {section.title}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
