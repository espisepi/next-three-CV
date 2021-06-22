import Head from 'next/head'

import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{width:'21cm', height:'29.7cm'}} className='container mx-auto bg-white'>
        <section className='grid md:grid-cols-1 lg:grid-cols-2 gap-10 '>
          <Card title='HTML' description='121' />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  )
}
