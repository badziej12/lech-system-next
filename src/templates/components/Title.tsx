import React from 'react';

import '../../scss/components/Title.scss';

type TitleProps = {
  heading_tag?: keyof JSX.IntrinsicElements,
  secondary_tag?: keyof JSX.IntrinsicElements,
  heading_text: string,
  secondary_text?: string,
  heading_size?: string,
  secondary_size?: string,
  custom_class?: string
};

function Title(
  {
    heading_tag = 'h1',
    secondary_tag = 'p',
    heading_text = '',
    secondary_text = '',
    heading_size = '64',
    secondary_size = '18',
    custom_class = ''
  }: TitleProps,
) {
  const HeadingTag = heading_tag;
  const SecondaryTag = secondary_tag;
  const headingClass = `Title__heading Title__heading--${heading_size}`;
  const secondaryClass = `Title__secondary Title__secondary--${secondary_size}`;
  const titleClass = `Title ${custom_class}`;

  return (
    <div className={titleClass}>
      <HeadingTag className={headingClass} dangerouslySetInnerHTML={{ __html: heading_text }}></HeadingTag>
      <SecondaryTag className={secondaryClass} dangerouslySetInnerHTML={{ __html: secondary_text }}></SecondaryTag>
    </div>
  );
}

export default Title;