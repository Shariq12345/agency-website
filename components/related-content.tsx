import Link from "next/link";
import { Card } from "@/components/ui/card";

interface RelatedContent {
  title: string;
  description: string;
  href: string;
  category: string;
}

export function RelatedContent({ content }: { content: RelatedContent[] }) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Related Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <Link key={index} href={item.href}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
              <span className="text-xs text-primary mt-2 block">
                {item.category}
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
