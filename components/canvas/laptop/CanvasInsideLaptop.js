import React, { useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Stars, Box } from '@react-three/drei'
import * as THREE from 'three'

function Scene({}) {
    
    const { gl } = useThree()
    useEffect(()=>{
        // gl.domElement.style.width='300px'
        // console.log(gl.domElement.style)
    },[])

    return (
        <>
        <ambientLight />
        <Stars />
        <Box />
        </>
    )
}

export default function CanvasInsideLaptop({}) {

    const [renderer, setRenderer] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            const canvas_laptop = document.getElementById('canvas_laptop')
            console.log(canvas_laptop)
            if(canvas_laptop) {

                const renderer = new THREE.WebGLRenderer( { antialias: true, canvas: canvas_laptop } );
                renderer.setPixelRatio( window.devicePixelRatio );
                setRenderer(renderer)

                clearInterval(interval)
            }  
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    
    if(renderer) {
        return (
            <Canvas gl={renderer} style={{width:'300px', height:'150px'}} >
                <Scene />
            </Canvas>
        )
    } else {
        return null
    }
  }