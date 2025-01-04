import React from 'react';

import '../../scss/components/BannerSection.scss';
import Title from "@/templates/components/Title";
import Button from "@/templates/components/Button";

type BannerSectionProps = {
    backgroundImg: string;
    bannerCopy: string;
    buttonCopy: string;
    buttonLink: string;
};

function BannerSection(
    {
        backgroundImg = '',
        bannerCopy = '',
        buttonCopy = '',
        buttonLink = '',
    }: BannerSectionProps,
) {

    return (
        <section className="BannerSection" style={{backgroundImage: backgroundImg}}>
            <div className="container-fluid wrapper">
                <div className="BannerSection__content flex center-xs">
                    <div>
                        <Title heading_text={bannerCopy} heading_tag="h2" heading_size="42" />
                        <Button button_copy={buttonCopy} button_link={buttonLink} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;