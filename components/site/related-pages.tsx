import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { SeoPageDefinition } from "@/config/types";
import { routePath } from "@/lib/urls";

export function RelatedPages({ pages }: { pages: SeoPageDefinition[] }) {
  if (!pages.length) return null;
  return (
    <aside className="related" aria-label="Related guides">
      <p className="eyebrow">Continue exploring</p>
      <p className="mt-2 text-2xl font-black text-foreground">Related Guides</p>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {pages.map((page) => (
          <Link key={page.slug} href={routePath(page.slug)} className="group content-card">
            <span className="flex items-start justify-between gap-4">
              <span>
                <span className="block text-lg font-black text-foreground">{page.hero?.heading || page.navLabel}</span>
                <span className="mt-2 block text-sm leading-6">{page.description}</span>
              </span>
              <ArrowUpRight className="shrink-0 text-primary transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
