import Head from "next/head"
import { attributes, react as HomeContent } from '../content/home.md';

export default function Knowledge() {
  const { title } = attributes
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
      </article>
    </>
  )
}