import React, { useRef } from 'react'
import Card from './Card'
import useGsapRevealAnimation from '../hooks/useGsapRevealAnimation'

/**
 * 
 * @param {Array<number>} positionInitial -> [xi, yi] -> [300, 0]
 * @param {Array<number>} positionFinal   -> [xf, xf] -> [0, 0]
 */
export default function CardAnimation({ positionInitial, positionFinal, title, description, style}) {

    const ref = useRef()
    const gsapRevealAnimation  = useGsapRevealAnimation(ref, positionInitial, positionFinal);

    return <Card ref={ref} title={title} description={description} style={style} />
}