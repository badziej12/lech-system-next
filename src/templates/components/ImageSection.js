import React from 'react';

import '../../scss/components/ImageSection.scss';

function ImageSection(
    {
        image_webp,
        image_webp_2x,
        children,
    },
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