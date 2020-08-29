import React from "react";
import Head from "next/head";

function HeadConfig(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Lizehen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Premium Bootstrap 4 Landing Page Template"
        />
        <meta
          name="keywords"
          content="bootstrap 4, premium, marketing, multipurpose"
        />
        <meta content="Themesdesign" name="author" />
      </Head>
    </>
  );
}

export default HeadConfig;
