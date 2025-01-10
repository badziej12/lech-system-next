'use client'

import {Gallery, Item} from "react-photoswipe-gallery";
import Image from "next/image";
import 'photoswipe/dist/photoswipe.css'

type GallerySectionProps = {
    images: {
        key: string,
        id: string,
        original: string,
        thumbnail: string,
        alt: string,
        width: number,
        height: number,
    }[]
}

export function GallerySection(
    {
        images
    }: GallerySectionProps
) {
    return (
        <Gallery>
            {images.map((image) => {
                return(
                  <Item
                      key={image.key}
                      id={image.id}
                      original={image.original}
                      thumbnail={image.thumbnail}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                  >
                      {({ref, open}) => (
                          <div className={"image-container"}>
                              <div>
                                  <Image
                                      ref={ref}
                                      src={image.original}
                                      alt={image.alt}
                                      placeholder={"blur"}
                                      blurDataURL={image.thumbnail}
                                      onClick={open}
                                      width={image.width}
                                      height={image.height} />
                              </div>
                          </div>
                      )}
                  </Item>
                );
            })}
        </Gallery>
    )
}

export default GallerySection;