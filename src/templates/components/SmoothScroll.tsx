'use client'

import {ReactLenis, useLenis} from '@studio-freight/react-lenis'

export function SmoothScroll(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <ReactLenis root options={{
            lerp: 0.1,
            duration: 1.5
        }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;