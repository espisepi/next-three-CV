import React, { useRef } from 'react'
import { Reveal, Tween } from 'react-gsap';
import Card from './Card'


/**
 * 
 * @param {Array<number>} positionInitial -> [xi, yi] -> [300, 0]
 * @param {Array<number>} positionFinal   -> [xf, xf] -> [0, 0]
 */
export default function CardAnimation({ title, description, style, className }) {

    const ref = useRef()

    return (
        <Reveal repeat>
            <Tween from={{ opacity: 0, transform:'translate(25%)' }} duration={1.25}>
                <Card ref={ref} title={title} description={description} style={style} className={className} />
            </Tween>
        </Reveal>
    ) 
}