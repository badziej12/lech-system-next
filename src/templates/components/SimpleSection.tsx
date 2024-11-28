import React from 'react';

import '@/scss/components/SimpleSection.scss';

export function ImageSection(
    {
        children,
    }: Readonly<{
      children?: React.ReactNode;
    }>
) {


    return (
        <section className="SimpleSection">
          <div className="container-fluid">
            {children}
          </div>
        </section>
    );
}

export default ImageSection;