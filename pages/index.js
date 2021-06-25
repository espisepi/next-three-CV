import { useRef } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import CardAnimation from '../components/dom/card/CardAnimation'

const CanvasBackground = dynamic(() => import('../components/canvas/background/CanvasBackground'), { ssr: false })
const CanvasTesellationText = dynamic(() => import('../components/canvas/tesellationText/CanvasTesellationText'), { ssr: false })
const CanvasLaptop = dynamic(() => import('../components/canvas/laptop/CanvasLaptop'), { ssr: false })
const CanvasInsideLaptop = dynamic(() => import('../components/canvas/laptop/CanvasInsideLaptop'), { ssr: false })



export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <CanvasBackground style={{position:'fixed', top:0, width:'100%', height:'100vh', backgroundColor:'black', zIndex:-10}} />
      <CanvasTesellationText style={{position:'relative', top:0, width:'100%', height:'100vh', zIndex:5}} />
      <CanvasLaptop style={{position:'relative', top:0, width:'100%', height:'100vh', zIndex:5}} />
      <CanvasInsideLaptop />


      <main style={{width:'70%'}} className='container mx-auto bg-transparent overflow-y-hidden'>
        <div style={{width:'100%', height:'100vh', backgroundColor:'transparent'}}>

          

        </div>
        <section className='grid md:grid-cols-1 lg:grid-cols-2 gap-10 '>
          <CardAnimation positionInitial={[300,100]} positionFinal={[0,0]} />
          <CardAnimation positionInitial={[300,100]} positionFinal={[0,0]} />
          <CardAnimation positionInitial={[300,100]} positionFinal={[0,0]} />
          <CardAnimation positionInitial={[300,100]} positionFinal={[0,0]} />
          <CardAnimation positionInitial={[300,100]} positionFinal={[0,0]} />
          <CardAnimation positionInitial={[300,100]} positionFinal={[0,0]} />
          <CardAnimation positionInitial={[300,100]} positionFinal={[0,0]} />
          <CardAnimation positionInitial={[300,100]} positionFinal={[0,0]} />
          <CardAnimation positionInitial={[300,100]} positionFinal={[0,0]} />
        </section>
      </main>
    </>
  )
}
