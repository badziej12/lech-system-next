import React from 'react';

import '@/scss/components/ImageSection.scss';
import Image from "next/image";

export function ImageSection(
    {
        imageSrc,
        imageSrcMobile,
        children,
    }: Readonly<{
      imageSrc: string;
      imageSrcMobile: string;
      children?: React.ReactNode;
    }>
) {


    return (
        <section className="ImageSection">
            <div className="ImageSection__bg-img">
                {/*<Parallax speed={5} id={"parallax"}>*/}
                    <Image src={imageSrc}
                       className={"ImageSection__bg-img__desktop"}
                       alt="Hero"
                       quality="100"
                       height={1624}
                       width={1080}
                       sizes="(max-width: 2560px) 100vw, 2560px"
                       style={{objectFit: "cover", height: "100vh", width: "100%", position: "absolute", bottom: "0"}} priority />
                    <Image src={imageSrcMobile}
                       className={"ImageSection__bg-img__mobile"}
                       alt="Hero"
                       quality="100"
                       height={738}
                       width={968}
                       sizes="100vw"
                       style={{objectFit: "cover", height: "100vh", width: "100%", position: "absolute", bottom: "0"}} priority />
                {/*</Parallax>*/}
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