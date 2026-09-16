import Head from 'next/head';
import { SHARE_IMAGE, SITE_TITLE, SITE_URL } from '@/constants/site';

interface PageHeadProps {
  title: string;
  description: string;
  /** Path of the page, starting with "/". */
  path: string;
}

export default function PageHead({ title, description, path }: PageHeadProps) {
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={SHARE_IMAGE.url} />
      <meta property="og:image:width" content={String(SHARE_IMAGE.width)} />
      <meta property="og:image:height" content={String(SHARE_IMAGE.height)} />
      <meta property="og:image:alt" content={SHARE_IMAGE.alt} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
