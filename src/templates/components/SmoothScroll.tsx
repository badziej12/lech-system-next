'use client'

import {ReactLenis} from 'lenis/react';

export function SmoothScroll(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <ReactLenis root options={{
            lerp: 0.4,
            duration: 1.5
        }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;