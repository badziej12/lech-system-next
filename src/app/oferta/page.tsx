import "../../scss/pages/Offer.scss";
import Title from "@/templates/components/Title";
import SimpleSection from "@/templates/components/SimpleSection";
import ProductBox from "@/templates/components/ProductBox";
import BannerSection from "@/templates/components/BannerSection";

import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.lech-system.pl/oferta",
  },
};

export default function Oferta() {
    const product_1_image = "/assets/images/offer/zaluzje-poziome-pokoj.jpg";
    const product_2_image = "/assets/images/offer/zaluzje-pionowe-1.jpg";
    const product_3_image = "/assets/images/offer/moskitiery.jpg";
    const product_4_image = "/assets/images/offer/rolety-dachowe.jpg";
    const product_5_image = "/assets/images/offer/roleta-dzien-noc.jpg";
    const product_6_image = "/assets/images/offer/rolety-wolnowiszace-1.jpeg";
    const product_7_image = "/assets/images/offer/rolety-kasetowe.jpg";
    const product_8_image = "/assets/images/offer/moskitiera-drzwiowa-2.jpg";
    const banner_image = "url(assets/images/offer/stworz-idealne-okno.jpg)";

    return (
        <main className={"Offer flex flex-col"}>
            <SimpleSection sectionClass={"product-section"}>
                <div className="center-xs product-section__title">
                    <Title heading_text={"Oferta"}/>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <ProductBox heading={"Rolety dachowe"}
                                    image={product_4_image}
                                    imageAlt={"Rolety dachowe"}
                                    paragraphCopy={"Funkcjonalne rolety dachowe, które skutecznie ograniczają dostęp światła i zapewniają komfort termiczny na poddaszu. Idealne do każdego rodzaju okien dachowych."}/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ProductBox heading={"Rolety wolnowiszące"}
                                    image={product_6_image}
                                    imageAlt={"Rolety wolnowiszące"}
                                    paragraphCopy={"Uniwersalne rolety wolnowiszące, które doskonale sprawdzą się zarówno w domach, jak i w biurach. Dostępne w szerokiej gamie kolorów i materiałów."}/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ProductBox heading={"Rolety kasetowe"}
                                    image={product_7_image}
                                    imageAlt={"Rolety kasetowe"}
                                    paragraphCopy={"Eleganckie rolety kasetowe zintegrowane z ramą okienną, które gwarantują estetyczny wygląd oraz skuteczną ochronę przed światłem."}/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ProductBox heading={"Moskitiery drzwiowe"}
                                    image={product_8_image}
                                    imageAlt={"Moskitiery drzwiowe"}
                                    paragraphCopy={"Praktyczne moskitiery drzwiowe chroniące wnętrza przed owadami, a jednocześnie zapewniające odpowiednią cyrkulację powietrza."}/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ProductBox heading={"Rolety dzień/noc"}
                                    image={product_5_image}
                                    imageAlt={"Rolety dachowe"}
                                    paragraphCopy={"Nowoczesne rolety dzień/noc pozwalające precyzyjnie kontrolować ilość światła wpadającego do pomieszczeń. Idealne połączenie funkcjonalności i designu."}/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ProductBox heading={"Moskitiery okienne"}
                                    image={product_3_image}
                                    imageAlt={"Moskitiery"}
                                    paragraphCopy={"Wytrzymałe moskitiery okienne, które efektywnie zabezpieczają przed insektami, jednocześnie nie ograniczając widoczności i dopływu świeżego powietrza."}/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ProductBox heading={"Żaluzje poziome"}
                                    image={product_1_image}
                                    imageAlt={"Żaluzje poziome"}
                                    paragraphCopy={"Klasyczne żaluzje poziome, które umożliwiają regulację ilości światła oraz zapewniają prywatność w każdym pomieszczeniu."}/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ProductBox heading={"Żaluzje pionowe"}
                                    image={product_2_image}
                                    imageAlt={"Żaluzje pionowe"}
                                    paragraphCopy={"Stylowe żaluzje pionowe, idealne do dużych przeszkleń i biur, oferujące łatwą regulację światła i nowoczesny wygląd."}/>
                    </div>
                </div>
            </SimpleSection>
            <BannerSection backgroundImg={banner_image} bannerCopy={"Stwórz idealne okno z nami!"} buttonCopy={"Kontakt"} buttonLink={"/kontakt"} />
        </main>
    );
}