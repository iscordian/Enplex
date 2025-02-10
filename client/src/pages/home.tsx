import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { Search } from "@/components/search";
import { sections } from "@/lib/content";
import { useMediaQuery } from "@/hooks/use-mobile";
import { CodeBlock } from "@/components/code-block";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-screen bg-background">
      {isMobile ? (
        <MobileNav open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      ) : (
        <Sidebar />
      )}

      <div className="lg:pl-64">
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-background px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-foreground lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="flex-1">
            <Search />
          </div>
        </div>

        <main className="py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-blue max-w-none">
              <h1>Enplex.js Documentation</h1>

              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-16">
                  <h2>{section.title}</h2>
                  <div className="mt-4">{section.content}</div>
                  {section.code && (
                    <CodeBlock 
                      code={section.code} 
                      language={section.language || 'javascript'}
                    />
                  )}
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
