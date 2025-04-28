import Head from "next/head";

const Metadata = ({ title, description, image }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <link rel="icon" href="/ico.ico" />
      <link rel="apple-touch-icon" href="/ico.ico" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Boris Kirov"
        href="/feed.xml"
      />
      <meta name="title" content="yng.blds" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="yng.blds" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        property="og:site_name"
        content="yng.blds - photography & videography"
      />
      <meta property="og:url" content="https://www.yng-blds.com" />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yngblds.vercel.app/" />
      <meta property="twitter:title" content="yng.blds" />
      <meta
        property="twitter:description"
        content="photography & videography"
      />
    </Head>
  );
};
export default Metadata;
