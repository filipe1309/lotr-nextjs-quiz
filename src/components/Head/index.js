import React from 'react';
import { default as NextHead } from 'next/head';

function Head({ title, image, description }) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_BR" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:type" content="website" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://lotr-quiz.filipe1309.vercel.app/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <meta charSet="utf-8" />

      <link rel="canonical" href="https://lotr-quiz.filipe1309.vercel.app/" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
}

export default Head;
