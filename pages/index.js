import { useRef } from 'react'
import Head from 'next/head'

import Card from '../components/Card'
import useGsapRevealAnimation from '../hooks/useGsapRevealAnimation'

export default function Home() {

  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const gsapRevealAnimation  = useGsapRevealAnimation(ref, [500,500], [0,0]);
  const gsapRevealAnimation2  = useGsapRevealAnimation(ref2, [500,500], [0,0]);
  const gsapRevealAnimation3  = useGsapRevealAnimation(ref3, [500,500], [0,0]);
  const gsapRevealAnimation4  = useGsapRevealAnimation(ref4, [500,500], [0,0]);
  const gsapRevealAnimation5  = useGsapRevealAnimation(ref5, [500,500], [0,0]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div style={{width:'100%', height:'100vh', backgroundColor:'transparent'}}>
          <h1 className='text-2xl'>HOLI</h1>
      </div>

      <main style={{width:'21cm', height:'29.7cm'}} className='container mx-auto bg-white'>
        <section className='grid md:grid-cols-1 lg:grid-cols-2 gap-10 '>
          <Card ref={ref} />
          <Card ref={ref2} />
          <Card ref={ref3} />
          <Card ref={ref4} />
          <Card ref={ref5} />
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
