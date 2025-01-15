'use client'

import React, {useEffect, useRef} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ParallaxProps = {
    className?: string,
    children?: React.ReactNode,
    speed: number,
    id: string,
};

function Parallax(
    {
        className = '',
        children,
        speed = 1,
        id = 'parallax'
    }: ParallaxProps,
) {
    const trigger = useRef<HTMLDivElement | null>(null);
    const target = useRef<HTMLDivElement | null>(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const y = 442 * speed * 0.1;

        const setY = gsap.quickSetter(target.current, "y", "px");

        timeline.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                scrub: true,
                start: "top 96px",
                end: "bottom -50%",
                onUpdate: (e) => {
                    setY(e.progress * y);
                }
            }
        })

        return () => {
            timeline?.current?.kill();
        }
    }, [speed]);

    return (
        <div ref={trigger} className={className} style={{position: "absolute", width: "100%", height:"100%"}}>
            <div ref={target} style={{position: "absolute", width: "100%", height:"100%"}}>{children}</div>
        </div>
    );
}

export default Parallax;