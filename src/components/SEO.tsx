import Head from 'next/head';

// https://ogp.me/
interface IOgProps {
  type?: string;
  title?: string;
  description?: string;
  siteName?: string;
  image?: string;
}

// https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
interface ITwitterProps {
  card?: 'summary' | 'summary_large_image' | 'player' | 'app';
  creator?: string;
  site?: string;
  title?: string;
  description?: string;
}

interface ISEOProps {
  title: string;
  siteTitle?: string;
  description?: string;
  og?: IOgProps;
  twitter?: ITwitterProps;
}

export const SEO = (props: ISEOProps) => {
  const { description, title, siteTitle = 'next-template', og, twitter } = props;

  // const { locale, asPath } = useRouter();

  // const resourcesIsLoaded = locale && i18n.store.data.hasOwnProperty(locale);
  // const readyTitle = resourcesIsLoaded && title.length ? `${title} | ${siteTitle}` : siteTitle;
  const readyTitle = title.length ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Head>
      <title>{readyTitle}</title>
      <meta name="description" content={description} />

      {/* <meta property="og:title" content={og?.title || readyTitle} />
      <meta property="og:description" content={og?.description || description} />
      <meta property="og:site_name" content={og?.siteName || siteTitle} />
      <meta property="og:url" content={asPath} />
      {og?.type && <meta property="og:type" content={og.type} />}
      {og?.image && <meta property="og:image" content={og.image} />}

      <meta property="twitter:title" content={twitter?.title || readyTitle} />
      <meta property="twitter:description" content={twitter?.description || description} />
      {twitter?.card && <meta property="twitter:card" content={twitter.card} />}
      {twitter?.creator && <meta property="twitter:creator" content={twitter.creator} />}
      {twitter?.site && <meta name="twitter:site" content={twitter.site} />} */}
    </Head>
  );
};
