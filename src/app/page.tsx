import ImageSection from '@/templates/components/ImageSection';
import "../scss/pages/Home.scss";
import SimpleSection from '@/templates/components/SimpleSection';
import Title from '@/templates/components/Title';
import Button from "@/templates/components/Button";


export default function Home() {
  const image_section_1_webp = "assets/images/home/home-main-image.jpg";
  const image_section_1_webp_2x = "assets/images/home/home-main-image.jpg";
  const image_section_2_webp = "assets/images/home/home-image-2.webp";
  const image_section_2_png = "assets/images/home/home-image-2.png";
  const image_section_2_webp_2x = "assets/images/home/home-image-2@2x.webp";
  const image_section_2_png_2x = "assets/images/home/home-image-2@2x.png";

  return (
    <main className="Home flex flex-col">
      <ImageSection image_webp={image_section_1_webp}
                    image_webp_2x={image_section_1_webp_2x}>
          <div className="row">
              <div className="col-xs-12">
                  <Title heading_text="<span>LECH-SYSTEM</span> <br>Profesjonalne rolety"
                         secondary_text="Profesjonalne rolety i montaż w twoim domu! <br>Darmowe doradztwo, pomiar i gwarancja na 2 lata."
                         custom_class="mb-24"/>
                  <Button button_copy={"Sprawdź ofertę"} button_link={"/oferta"}/>
              </div>
          </div>
      </ImageSection>
        <SimpleSection sectionClass="about-section">
            <div className="py-48">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="about-section__image-container">
                            <picture>
                                <source type="image/webp"
                                        srcSet={`${image_section_2_webp} 768w, ${image_section_2_webp_2x} 1368w`}
                                  sizes="(max-width: 768px) 768w, 1368w"/>
                          <img srcSet={`${image_section_2_png} 768w, ${image_section_2_png_2x} 1368w`}
                               sizes="(max-width: 768px) 768w, 1368w" alt=""/>
                      </picture>
                  </div>
              </div>
              <div className="col-md-6 col-xs-12">
                  <div className="pt-12">
                      <Title heading_text="O Nas"
                         secondary_text="Jestem specjalistą z wieloletnim doświadczeniem w doradztwie
                    i montażu rolet okiennych oraz moskitier na terenie Kątów Wrocławskich i okolic.
                     Jako jednoosobowa firma oferuję profesjonalną obsługę,
                      indywidualne podejście do każdego klienta oraz wysoką jakość usług.
                       Na mojej stronie znajdziesz bogatą ofertę różnorodnych rolet oraz moskitier,
                        które zapewnią Ci prywatność, komfort i ochronę przed insektami. Działam z pasją i zaangażowaniem,
                         dbając o satysfakcję każdego klienta. Zapewniam darmowy dojazd, pomiar, doradztwo i wycenę,
                          a na wykonane prace udzielam 2-letniej gwarancji. Skontaktuj się ze mną, aby stworzyć estetyczne
                           i funkcjonalne rozwiązania dopasowane do Twoich potrzeb."
                   heading_size="42"/>
                  </div>
              </div>
          </div>
        </div>
      </SimpleSection>
    </main>
  );
}
