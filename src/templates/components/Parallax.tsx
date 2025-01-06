'use client'

import React, {useEffect, useRef} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useWindowSize} from "@darkroom.engineering/hamo";

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

    const size = useWindowSize()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        console.log("ahasoidhaos", size);
        const y = size * speed * 0.1;

        const setY = gsap.quickSetter(target.current, "y", "px");

        timeline.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (e) => {
                    setY(e.progress * y);
                    console.log(e);
                    console.log(width);
                }
            }
        })

        return () => {
            timeline?.current?.kill();
        }
    }, [speed]);

    return (
        <div ref={trigger} className={className}>
            <div ref={target}>{children}</div>
        </div>
    );
}

export default Parallax;