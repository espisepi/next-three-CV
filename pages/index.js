import Head from 'next/head'
import { Reveal, Tween } from 'react-gsap';
import dynamic from 'next/dynamic'

import CardAnimation from '../components/dom/card/CardAnimation'

import useWindowDimensions from '../hooks/useWindowDimensions'

const CanvasBackground = dynamic(() => import('../components/canvas/background/CanvasBackground'), { ssr: false })
const CanvasTesellationText = dynamic(() => import('../components/canvas/tesellationText/CanvasTesellationText'), { ssr: false })
const CanvasLaptop = dynamic(() => import('../components/canvas/laptop/CanvasLaptop'), { ssr: false })
const CanvasInsideLaptop = dynamic(() => import('../components/canvas/laptop/CanvasInsideLaptop'), { ssr: false })



export default function Home() {
  const { height, width } = useWindowDimensions();
  // console.log('height ' + height + ' ||  width ' + width )

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
        {/* <div style={{width:'100%', height:'100vh', backgroundColor:'transparent'}}>

        </div> */}
        <section className='flex items-center justify-center'>
          <Reveal repeat>
            <Tween from={{ opacity: 0 }} duration={2}>
              <h1 style={{color:'white', fontSize: width >= 1160 ? '18rem' : '8rem'}}>SKILLS</h1>
            </Tween>
          </Reveal>
        </section>
        <section className='grid md:grid-cols-1 lg:grid-cols-2 gap-10 place-items-center'>
          <CardAnimation title='HTML, CSS, Javascript' />
          <CardAnimation title='React, NextJS, Gatsby' />
          <CardAnimation title='Redux, Zustand, Recoil' />
          <CardAnimation title='ThreeJS, WebGL, GLSL' />
          <CardAnimation title='Gsap, TweenJS, Tailwindcss' />
          <CardAnimation title='NodeJS, Express, MongoDB, SQL' />
          <CardAnimation title='Vercel, Heroku, Digital Ocean' />
        </section>
      </main>
    </>
  )
}
