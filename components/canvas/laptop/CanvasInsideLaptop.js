import React, { useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Stars, Box, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import { Scene } from './App51/App51'

function ScenePrincipal({}) {
    
    const { gl } = useThree()
    useEffect(()=>{
        // gl.domElement.style.width='300px'
        // console.log(gl.domElement.style)
    },[])

    return (
        <>
        <ambientLight />
        <Stars count={500} />
        <Box material-wireframe={true} material-color='green' scale={[3,3,3]} />
        <OrbitControls />
        {/* <Scene /> */}
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
            <Canvas gl={renderer} style={{width:'330px', height:'210px'}} >
                <ScenePrincipal />
            </Canvas>
        )
    } else {
        return null
    }
  }