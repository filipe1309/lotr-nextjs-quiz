import { default as NextHead } from 'next/head'

function Head({ title, image, description }) {
  return (
    <NextHead>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="pt_BR" />

        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="LOTR Quiz" />
        <meta property="og:description" content={description} />
        
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:type" content="website"></meta>
        
        <meta charSet="utf-8" />

        <link rel="canonical" href="https://lotr-quiz.filipe1309.vercel.app/" />
    </NextHead>
  )
}

export default Head;