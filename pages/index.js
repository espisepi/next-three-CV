import Head from 'next/head'
import { Reveal, Tween } from 'react-gsap';
import dynamic from 'next/dynamic'
import Image from 'next/image'

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
      <CanvasTesellationText size={width >= 596 ? 40 : 24} style={{position:'relative', top:0, width:'100%', height:'100vh', zIndex:5}} />
      <CanvasLaptop style={{position:'relative', top:0, width:'100%', height:'100vh', zIndex:5}} />
      <CanvasInsideLaptop />


      <main style={{width:'70%', marginTop: '-25%'}} className='container mx-auto bg-transparent overflow-y-hidden overflow-x-hidden'>
        <section className='flex items-center justify-center'>
          <Reveal repeat>
            <Tween from={{ opacity: 0 }} duration={2}>
              <h1 style={{color:'white', fontSize: width >= 1160 ? '13rem' : '3.5rem'}}>SKILLS</h1>
            </Tween>
          </Reveal>
        </section>
        <section className='grid md:grid-cols-1 lg:grid-cols-2 gap-5 place-items-center'>
          <CardAnimation title='HTML, CSS, Javascript' />
          <CardAnimation title='React, NextJS, Gatsby' />
          <CardAnimation title='Redux, Zustand, Recoil' />
          <CardAnimation title='ThreeJS, WebGL, GLSL' />
          <CardAnimation title='Gsap, TweenJS, Tailwindcss' />
          <CardAnimation title='NodeJS, Express, MongoDB, SQL, Spring, Java' />
          <CardAnimation title='Vercel, Heroku, Digital Ocean' />
          <CardAnimation title='Blender, Gimp' />
        </section>


        <section className='flex items-center justify-center'>
          <Reveal repeat>
            <Tween from={{ opacity: 0 }} duration={2}>
              <h1 style={{color:'white', fontSize: width >= 1200 ? '13rem' : '3.5rem'}}>PROJECTS</h1>
            </Tween>
          </Reveal>
        </section>

        <section className='flex items-center justify-center flex-col gap-10 mt-10'>

          <div className='flex items-center justify-center flex-row gap-10'>
            <Reveal repeat>
              <Tween from={{ opacity: 0, transform:'translate(25%)' }} duration={2}>
                
              <a href='https://react-three-espinaco-espisepi.vercel.app/' target="_blank" style={{textDecoration:'none'}}>
                <Image src='/projects/portfolio.png' height={220} width={220}  alt="Picture of the author" />
              </a>

              <a href='https://github.com/espisepi/react-three-espinaco' target="_blank" style={{textDecoration:'none'}}>
                <Image src='/Octocat.jpg' height={220} width={220} className='rounded-full' alt="Picture of the author" />
              </a>

              </Tween>
            </Reveal>
          </div>

          <div className='flex items-center justify-center flex-row gap-10'>
            <Reveal repeat>
              <Tween from={{ opacity: 0, transform:'translate(25%)' }} duration={2}>
                
              <a href='http://proshopappespi.herokuapp.com/' target="_blank" style={{textDecoration:'none'}}>
                <Image src='/projects/proshop.png' height={220} width={220}  alt="Picture of the author" />
              </a>

              <a href='https://github.com/espisepi/proshop_mern' target="_blank" style={{textDecoration:'none'}}>
                <Image src='/Octocat.jpg' height={220} width={220} className='rounded-full' alt="Picture of the author" />
              </a>

              </Tween>
            </Reveal>
          </div>
        </section>

        <div className='flex items-center justify-center flex-row gap-10 mt-10'>
            <Reveal repeat>
              <Tween from={{ opacity: 0, transform:'translate(25%)' }} duration={2}>
                
              <a href='https://next-three-cv.vercel.app/' target="_blank" style={{textDecoration:'none'}}>
                <Image src='/projects/cv.png' height={220} width={220}  alt="Picture of the author" />
              </a>

              <a href='https://github.com/espisepi/next-three-CV' target="_blank" style={{textDecoration:'none'}}>
                <Image src='/Octocat.jpg' height={220} width={220} className='rounded-full' alt="Picture of the author" />
              </a>

              </Tween>
            </Reveal>
        </div>

        <section className='flex items-center justify-center'>
          <Reveal repeat>
            <Tween from={{ opacity: 0 }} duration={2}>
              <h1 style={{color:'white', fontSize: width >= 1200 ? '13rem' : '3.5rem'}}>CONTACT</h1>
            </Tween>
          </Reveal>
        </section>
        <section className='flex items-center justify-center flex-row gap-10 mt-10'>

          <Reveal repeat>
            <Tween from={{ opacity: 0, transform:'translate(25%,25%)' }} duration={2}>
              
            <a href='https://www.linkedin.com/in/jose-%C3%A1ngel-dom%C3%ADnguez-espinaco-bba437163/' target="_blank" style={{textDecoration:'none'}}>
              <Image src='/linkedin.svg' height={220} width={220}  alt="Picture of the author" />
            </a>

            <a href='https://github.com/espisepi' target="_blank" style={{textDecoration:'none'}}>
              <Image src='/Octocat.jpg' height={220} width={220} className='rounded-full' alt="Picture of the author" />
            </a>

            </Tween>
          </Reveal>
        </section>
        
      </main>
    </>
  )
}
