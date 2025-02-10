import { Dialog, DialogContent } from "@/components/ui/dialog";
import { sections } from "@/lib/content";

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function MobileNav({ open, setOpen }: MobileNavProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="h-full w-full max-w-sm p-0">
        <div className="flex h-16 shrink-0 items-center px-6 border-b">
          <span className="text-xl font-semibold">Enplex.js</span>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {sections.map((section) => (
            <div key={section.id} className="py-2">
              <a
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
              >
                {section.title}
              </a>
            </div>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}
