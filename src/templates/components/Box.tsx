import React from 'react';

import '../../scss/components/Box.scss';

import Title from "./Title";

type BoxProps = {
  heading_tag?: keyof JSX.IntrinsicElements,
  heading_text: string,
  secondary_text: string,
  heading_size?: string,
  position?: string,
  custom_class?: string
};

function Box(
  {
    heading_tag = 'h1',
    heading_text = '',
    secondary_text = '',
    heading_size = '60',
    position = 'middle-right',
    custom_class = ''
  }: BoxProps,
) {
  const boxClass = `Box ${custom_class} Box--${position}`;

  return (
    <div className={boxClass}>
      <div className="Box__content flex-column">
        <Title heading_size={heading_size}
               heading_tag={heading_tag}
               heading_text={heading_text}
               secondary_text={secondary_text}/>
      </div>
    </div>
  );
}

export default Box;