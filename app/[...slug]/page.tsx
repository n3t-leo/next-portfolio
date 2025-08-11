import StaticPage from '@/components/StaticPage';

export default function Page({ params }: { params: { slug: string[] } }) {
  return <StaticPage slug={params.slug} />;
}
