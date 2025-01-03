import React from 'react';

import '../../scss/components/Button.scss';

type ButtonProps = {
  button_copy: string;
  button_link: string;
};

function Button(
  {
    button_copy = '',
    button_link = '',
  }: ButtonProps,
) {

  return (
    <div className="Button">
        <a href={button_link}>
            {button_copy}
        </a>
    </div>
  );
}

export default Button;