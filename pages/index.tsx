import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Tony Blog</title>
        <meta
          name='description'
          content='Anthony Michael blog created using nextjs and sanity.io'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  )
}
