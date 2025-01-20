import "../../scss/pages/Galeria.scss";
import SimpleSection from "@/templates/components/SimpleSection";
import Title from "@/templates/components/Title";
import 'photoswipe/dist/photoswipe.css'
import GallerySection from "@/templates/components/GallerySection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.lech-system.pl/galeria",
  },
};

type GalleryImage = {
    key: string;
    id: string;
    original: string;
    thumbnail: string;
    alt: string;
    width: number;
    height: number;
};

export default function Galeria() {
    const getImageName = (name: string) => {
        if (!name) {
            throw new Error("Image name is required");
        }
        return `/assets/images/galeria/${name}.jpg`;
    }

    const images = [
        {
            name: "moskitiera-drzwiowa-1",
            alt: "Moskitiera drzwiowa",
            width: 1200,
            height: 1600
        },
        {
            name: "roleta-kaseta-wolno-wiszaca-dzien-noc",
            alt: "Roleta wonowisząca dzień/noc w kasecie",
            width: 1600,
            height: 1200
        },
        {
            name: "moskitiera-drzwiowa-2",
            alt: "Moskitiera drzwiowa",
            width: 1200,
            height: 1600
        },
        {
            name: "zaluzja-pionowa",
            alt: "Żaluzja pionowa",
            width: 1600,
            height: 1200
        },
        {
            name: "moskitiera-zwijana-w-kasecie",
            alt: "Moskitiera zwijana w kasecie",
            width: 1200,
            height: 1600
        },
        {
            name: "roleta-wolno-wiszaca-2",
            alt: "Roleta wonowisząca",
            width: 1600,
            height: 1200
        },
        {
            name: "roleta-dachowa",
            alt: "Roleta dachowa",
            width: 1200,
            height: 1600
        },
        {
            name: "roleta-kaseta-azurowa-1",
            alt: "Roleta azurowa w kasecie",
            width: 4000,
            height: 3000
        },
        {
            name: "roleta-kaseta-dzien-noc-2",
            alt: "Roleta dzień/noc w kasecie",
            width: 1200,
            height: 1600
        },
        {
            name: "roleta-kaseta-azurowa-2",
            alt: "Roleta azurowa w kasecie",
            width: 4000,
            height: 3000
        },
        {
            name: "roleta-kaseta-dzien-noc-1",
            alt: "Roleta dzień/noc w kasecie",
            width: 1200,
            height: 1600
        },
        {
            name: "roleta-kaseta-azurowa-3",
            alt: "Roleta azurowa w kasecie",
            width: 4000,
            height: 3000
        },
        {
            name: "zaluzja-pozioma-typ-amarant",
            alt: "Żaluzja pozioma typ amarant",
            width: 1200,
            height: 1600
        },
        {
            name: "roleta-kaseta-azurowa-kaseta",
            alt: "Roleta azurowa w kasecie",
            width: 1600,
            height: 1200
        },
        {
            name: "roleta-kaseta-dzien-noc-3",
            alt: "Roleta dzień/noc w kasecie",
            width: 1200,
            height: 1600
        },
        {
            name: "roleta-kaseta-dzien-noc-kolor",
            alt: "Roleta dzień/noc w kolorze",
            width: 1200,
            height: 1600
        },
        {
            name: "roleta-wolno-wiszaca-1",
            alt: "Roleta wonowisząca",
            width: 1600,
            height: 1200
        },
        {
            name: "zaluzja-pozioma-typ-amarant-1",
            alt: "Żaluzja pozioma typ amarant",
            width: 1200,
            height: 1600
        },
        {
            name: "zaluzja-pozioma-typ-amarant-2",
            alt: "Żaluzja pozioma typ amarant",
            width: 1200,
            height: 1600
        },
        {
            name: "zaluzja-pozioma-typ-amarant-3",
            alt: "Żaluzja pozioma typ amarant",
            width: 1200,
            height: 1600
        },
    ]

    const galleryImages: GalleryImage[] = images.map((image) => ({
        key: image.name,
        id: image.name,
        original: getImageName(image.name),
        thumbnail: getImageName(`${image.name}-thumb`),
        alt: image.alt,
        width: image.width,
        height: image.height,
    }));

    return (
        <main className={"Galeria flex flex-col"}>
            <SimpleSection sectionClass={"gallery-section"}>
                <div className="center-xs gallery-section__title">
                    <Title heading_text={"Galeria"}/>
                </div>
                <div className={"gallery-section__images"}>
                    <GallerySection images={galleryImages} />
                </div>
            </SimpleSection>
        </main>
    );
}