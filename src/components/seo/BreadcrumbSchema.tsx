import { buildBreadcrumbSchema } from '@/lib/seo';
import { JsonLd } from './JsonLd';

export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  return <JsonLd data={buildBreadcrumbSchema(items)} />;
}
