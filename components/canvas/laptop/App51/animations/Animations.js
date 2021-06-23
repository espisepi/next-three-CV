import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { HTML } from '@react-three/drei'

// import useScroll from '../../../drei-espinaco/hooks/useScroll';
// import Curve from '../../../drei-espinaco/Curve';
// import Camera from '../../../components/Camera';

import HelicopterCurveAnimation from './HelicopterCurveAnimation'
import { pathTest, path, pathWalk } from '../paths'

import { HelicopterInstanced } from '../components/Prefab';

import { Helicopter } from '../components/Prefab';

export function AnimationsSimple() {
    const { camera } = useThree()
    useEffect(()=>{
        camera.rotation.set(0,0,0)
        camera.position.set(-0.00677610794082284, 22.35056495666504, -5.594905853271484)
    },[])
    return (
        <>
        <HelicopterCurveAnimation pointsDefault={path} />
        </>
    );
}

