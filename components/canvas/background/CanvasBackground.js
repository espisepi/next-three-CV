import React, { useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

import Curve from './Curve'
import Camera from './Camera'

const circleGeometry = new THREE.CircleBufferGeometry( 50, 32);
const attributePosition = circleGeometry.attributes.position.array;

const pointsDefault = [];
for(let i = 0; i < attributePosition.length - 3; i += 3) {
    pointsDefault.push( [ attributePosition[i], 0.0, attributePosition[i+1] ] )
}

function Scene() {

    return (
        <>
        <Stars radius={50} count={8000} factor={4} saturation={0} fade  />
        <Curve points={pointsDefault} velocity={0.6}>
            <Camera />
        </Curve>
        </>
    )
}

export default function CanvasBackground({style}) {
   

    return (
        <Canvas style={style}>
             <Scene />
        </Canvas>
    )
}

