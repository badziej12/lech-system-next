import ImageSection from '@/templates/components/ImageSection';
import "../scss/pages/Home.scss";
import SimpleSection from '@/templates/components/SimpleSection';
import Title from '@/templates/components/Title';
import Button from "@/templates/components/Button";
import BannerSection from "@/templates/components/BannerSection";
import ReviewBox from "@/templates/components/ReviewBox";


export default function Home() {
    const image_section_1_webp = "assets/images/home/home-main-image.jpg";
    const image_section_1_webp_2x = "assets/images/home/home-main-image.jpg";
    const image_section_2_webp = "assets/images/home/home-image-2.webp";
    const image_section_2_png = "assets/images/home/home-image-2.png";
    const image_section_2_webp_2x = "assets/images/home/home-image-2@2x.webp";
    const image_section_2_png_2x = "assets/images/home/home-image-2@2x.png";
    const image_section_3_webp = "assets/images/home/home-image-3.webp";
    const image_section_3_png = "assets/images/home/home-image-3.png";
    const image_section_3_webp_2x = "assets/images/home/home-image-3@2x.webp";
    const image_section_3_png_2x = "assets/images/home/home-image-3@2x.png";
    const bg_image_section_4_jpg = "url('assets/images/home/home-image-4.jpg')";

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
                        <div className="col-lg-6 col-xs-12">
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
                        <div className="col-lg-6 col-xs-12">
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
                                       heading_size="42"
                                       heading_tag="h2" />
                            </div>
                        </div>
                    </div>
                </div>
            </SimpleSection>
            <SimpleSection sectionClass="statistic-section">
                <div className="statistic-section__container row">
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p><span>8</span> Lata doświadczenia</p>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p><span>8</span> Lata doświadczenia</p>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p><span>8</span> Lata doświadczenia</p>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p><span>8</span> Lata doświadczenia</p>
                    </div>
                </div>
            </SimpleSection>
            <SimpleSection sectionClass="why-us-section">
                <Title heading_text="Dlaczego my?" heading_size="42" heading_tag="h2" />
                <div className="row">
                    <div className="why-us-section__container why-us-section__container--hide-to-lg col-xs-12 col-md-6 col-lg-4">
                        <div className="why-us-section__item">
                            <div className="why-us-section__item__content">
                                <h3>Projesjonalizm i doświadczenie</h3>
                                <p>Bogate doświadczenie w branży i gwarancja wysokiej jakości świadczonych
                                    usług.</p>
                            </div>
                            </div>
                        <div className="why-us-section__item">
                            <div className="why-us-section__item__content">
                                <h3>Gwarancja 2-letnia</h3>
                                <p>Dłuższa gwarancja niż konkurencja, dająca klientom większe poczucie
                                    bezpieczeństwa.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="why-us-section__image-container">
                            <picture>
                                <source type="image/webp"
                                        srcSet={`${image_section_3_webp} 400w, ${image_section_3_webp_2x} 800w`}
                                        sizes="(max-width: 768px) 400w, 800w"/>
                                <img srcSet={`${image_section_3_png} 400w, ${image_section_3_png_2x} 800w`}
                                     sizes="(max-width: 768px) 400w, 800w" alt=""/>
                            </picture>
                        </div>
                    </div>
                    <div className="why-us-section__container col-xs-12 col-md-6 col-lg-4">
                        <div className="why-us-section__item why-us-section__item--hide-from-lg">
                            <div className="why-us-section__item__content">
                                <h3>Projesjonalizm i doświadczenie</h3>
                                <p>Bogate doświadczenie w branży i gwarancja wysokiej jakości świadczonych
                                    usług.</p>
                            </div>
                        </div>
                        <div className="why-us-section__item why-us-section__item--hide-from-lg">
                            <div className="why-us-section__item__content">
                                <h3>Gwarancja 2-letnia</h3>
                                <p>Dłuższa gwarancja niż konkurencja, dająca klientom większe poczucie
                                    bezpieczeństwa.</p>
                            </div>
                        </div>
                        <div className="why-us-section__item">
                            <div className="why-us-section__item__content">
                                <h3>Bezpłatne wsparcie klientom</h3>
                                <p>Kompleksowe doradztwo, pomiary oraz wycena bez dodatkowych opłat
                                    dla klientów.</p>
                            </div>
                        </div>
                        <div className="why-us-section__item">
                            <div className="why-us-section__item__content">
                                <h3>Galeria realizacji</h3>
                                <p>Klienci mogą zobaczyć przykłady prac, co ułatwia podjęcie decyzji o współpracy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SimpleSection>
            <BannerSection backgroundImg={bg_image_section_4_jpg} bannerCopy="Zadzwoń teraz" buttonCopy="Kontakt" buttonLink="/kontakt" />
            <SimpleSection sectionClass="reviews-section">
                <div className="center-xs">
                    <Title heading_text="Recenzje" heading_tag="h2" heading_size="42" />
                </div>
                <div className="reviews-section__row">
                    <div>
                        <ReviewBox personNickname="Kowalski" personReview="osijdaoisjdoajsdoi asojdiaosjd asoid" />
                    </div>
                    <div>
                        <ReviewBox personNickname="Kowalski" personReview="osijdaoisjdoajsdoi asojdiaosjd asoid" />
                    </div>
                    <div>
                        <ReviewBox personNickname="Kowalski" personReview="osijdaoisjdoajsdoi asojdiaosjd asoid" />
                    </div>
                </div>
            </SimpleSection>
        </main>
    );
}
