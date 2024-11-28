import React from 'react';

import '@/scss/components/ImageSection.scss';

export function ImageSection(
    {
        image_webp,
        image_webp_2x,
        children,
    }: Readonly<{
      image_webp: string | null;
      image_webp_2x: string | null;
      children?: React.ReactNode;
    }>
) {


    return (
        <section className="ImageSection">
            <div className="ImageSection__bg-img hidden--from-lg" style={{backgroundImage: `url(${image_webp})`}}></div>
            <div className="ImageSection__bg-img hidden--to-lg" style={{backgroundImage: `url(${image_webp_2x})`}}></div>
            <div className="container-fluid wrapper ImageSection__content">
                <div className="ImageSection__content">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default ImageSection;