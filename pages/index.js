import { useRef } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Card from '../components/Card'
import useGsapRevealAnimation from '../hooks/useGsapRevealAnimation'

const CanvasScene = dynamic(() => import('../components/canvas/CanvasScene'))

export default function Home() {

  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const gsapRevealAnimation  = useGsapRevealAnimation(ref, [300,100], [0,0]);
  const gsapRevealAnimation2  = useGsapRevealAnimation(ref2, [300,100], [0,0]);
  const gsapRevealAnimation3  = useGsapRevealAnimation(ref3, [300,100], [0,0]);
  const gsapRevealAnimation4  = useGsapRevealAnimation(ref4, [300,100], [0,0]);
  const gsapRevealAnimation5  = useGsapRevealAnimation(ref5, [300,100], [0,0]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CanvasScene style={{position:'fixed', top:0, width:'100%', height:'100vh', backgroundColor:'black', zIndex:-10}} />

      <main style={{width:'70%'}} className='container mx-auto bg-transparent overflow-y-hidden'>
        <div style={{width:'100%', height:'100vh', backgroundColor:'transparent'}}>
            <h1 className='text-2xl'>HOLI</h1>
        </div>
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
