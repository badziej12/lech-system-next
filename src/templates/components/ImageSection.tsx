import React from 'react';

import '@/scss/components/ImageSection.scss';
import Parallax from "@/templates/components/Parallax";
import Image from "next/image";

export function ImageSection(
    {
        image_webp_2x,
        children,
    }: Readonly<{
      image_webp_2x: string;
      children?: React.ReactNode;
    }>
) {


    return (
        <section className="ImageSection">
            <div className="ImageSection__bg-img">
                <Parallax speed={5} id={"parallax"}>
                    <Image src={image_webp_2x}
                       alt="Hero"
                       quality="100"
                       height="1624"
                       width="1080"
                       sizes="100vw"
                       style={{objectFit: "cover", height: "100vh", width: "100%", position: "absolute", bottom: "0"}} priority />
                </Parallax>
            </div>
            <div className="container-fluid wrapper ImageSection__content">
                <div className="ImageSection__content">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default ImageSection;