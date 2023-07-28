import Head from "next/head";

const Metadata = ({}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>yng.blds</title>
      <link rel="icon" href="/ico.ico" />
      <link rel="apple-touch-icon" href="/ico.ico" />
      <meta name="title" content="yng.blds" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="yng.blds" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="yng.blds" />
      <meta
        property="og:site_name"
        content="yng.blds - photography & videography"
      />
      <meta property="og:url" content="https://www.yng-blds.com" />
    </Head>
  );
};
export default Metadata;
