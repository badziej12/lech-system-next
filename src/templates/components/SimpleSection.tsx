import React from 'react';

import '@/scss/components/SimpleSection.scss';

export function ImageSection(
    {
        children,
        sectionClass = '',
    }: Readonly<{
      children?: React.ReactNode;
      sectionClass?: string;
    }>
) {


    return (
        <section className={`SimpleSection ${sectionClass}`}>
          <div className="wrapper container-fluid">
            {children}
          </div>
        </section>
    );
}

export default ImageSection;