import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

interface Props {
  slug: string[];
}

export default function StaticPage({ slug }: Props) {
  const filePath = path.join(process.cwd(), 'public', 'pages', ...slug) + '.html';
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const file = fs.readFileSync(filePath, 'utf8');
  const body = file.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? file;
  return <div dangerouslySetInnerHTML={{ __html: body }} />;
}
