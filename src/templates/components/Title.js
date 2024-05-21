import React from 'react';

import '../../scss/components/Title.scss';

function Title(
    {
        heading_tag='h1',
        secondary_tag='p',
        heading_text='',
        secondary_text='',
        heading_size='60',
        secondary_size='16',
        custom_class=''
    },
) {
    const HeadingTag = heading_tag;
    const SecondaryTag = secondary_tag;
    const headingClass = `Title__heading Title__heading--${heading_size}`;
    const secondaryClass = `Title__secondary Title__secondary--${secondary_size}`;
    const titleClass = `Title ${custom_class}`;

    return (
        <div className={titleClass}>
            <HeadingTag className={headingClass} dangerouslySetInnerHTML={{ __html: heading_text}}></HeadingTag>
            <SecondaryTag className={secondaryClass}>{secondary_text}</SecondaryTag>
        </div>
    );
}

export default Title;