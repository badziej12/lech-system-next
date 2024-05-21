import React from 'react';

import '../../scss/components/Box.scss';

import Title from "./Title";

function Box(
    {
        heading_tag='h1',
        heading_text='',
        secondary_text='',
        heading_size='60',
        position='middle-right',
        custom_class=''
    },
) {
    const boxClass = `Box ${custom_class} Box--${position}`;

    return (
        <div className={boxClass}>
            <div className="Box__content flex-column">
                <Title heading_size={heading_size} heading_tag={heading_tag} heading_text={heading_text} secondary_text={secondary_text} />
            </div>
        </div>
    );
}

export default Box;