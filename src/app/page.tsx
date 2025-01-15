import "../scss/pages/Home.scss";
import ImageSection from '@/templates/components/ImageSection';
import SimpleSection from '@/templates/components/SimpleSection';
import Title from '@/templates/components/Title';
import Button from "@/templates/components/Button";
import BannerSection from "@/templates/components/BannerSection";
import ReviewsSection from "@/templates/components/ReviewsSection";
import ScrollTracker from "@/templates/components/ScrollTracker";
import Image from "next/image";

export default function Home() {
    const imageMainMobile = "/assets/images/home/home-main-image-m.jpg";
    const imageMainDesktop = "/assets/images/home/home-main-image.jpg";
    const image_section_2 = "/assets/images/home/home-image-2.jpg";
    const image_section_3 = "/assets/images/home/home-image-3.jpg";
    const bg_image_section_4_jpg = "url('assets/images/home/home-image-4.jpg')";

    const featurableAPIKey = process.env.FEATURABLE_API_KEY as string;

    return (
        <main className="Home flex flex-col">
            <ImageSection imageSrc={imageMainDesktop}
                          imageSrcMobile={imageMainMobile}>
                <div className="row">
                    <div className="col-xs-12">
                        <Title heading_text="<span>LECH-SYSTEM</span> <br>Profesjonalne rolety"
                               secondary_text="Profesjonalne rolety i montaż w twoim domu! <br>Darmowe doradztwo, pomiar i gwarancja na 2 lata."
                               custom_class="mb-24"/>
                        <Button button_copy={"Sprawdź ofertę"} button_link={"/oferta"}/>
                    </div>
                </div>
            </ImageSection>
            <SimpleSection sectionClass="about-section observed-element">
                <div className="py-48">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="about-section__image-container">
                                <div className={"about-section__image"}>
                                    <Image src={image_section_2}
                                           alt={"O Nas"}
                                           width={1080}
                                           height={1080}
                                           sizes={"(max-width: 1024px) 90vw, 557px"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="pt-12">
                                <Title heading_text="O Nas"
                                       secondary_text="Lech-System to firma z wieloletnim doświadczeniem w doradztwie
                    i montażu rolet okiennych, żaluzji oraz moskitier na terenie Kątów Wrocławskich i okolic.
                     Jako mała rodzinna firma oferujemy profesjonalną obsługę,
                      indywidualne podejście do każdego klienta oraz wysoką jakość usług.
                       Na mojej stronie znajdziesz bogatą ofertę różnorodnych rolet oraz moskitier,
                        które zapewnią Ci prywatność, komfort i ochronę przed insektami. Działam z pasją i zaangażowaniem,
                         dbając o satysfakcję każdego klienta. Zapewniam darmowy dojazd, pomiar, doradztwo i wycenę,
                          a na wykonane prace udzielam 2-letniej gwarancji. Skontaktuj się ze mną, aby stworzyć estetyczne
                           i funkcjonalne rozwiązania dopasowane do Twoich potrzeb."
                                       heading_size="42"
                                       heading_tag="h2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </SimpleSection>
            <SimpleSection sectionClass="statistic-section">
                <div className="statistic-section__container row">
                    <div className="col-xs-12 col-md-4 col-lg-4">
                        <p><span>25</span> Lat doświadczenia</p>
                    </div>
                    <div className="col-xs-12 col-md-4 col-lg-4">
                        <p><span>90</span> Klientów obsługiwanych rocznie</p>
                    </div>
                    <div className="col-xs-12 col-md-4 col-lg-4">
                        <p><span>8</span> Lata doświadczenia</p>
                    </div>
                </div>
            </SimpleSection>
            <SimpleSection sectionClass="why-us-section">
                <Title heading_text="Dlaczego my?" heading_size="42" heading_tag="h2"/>
                <div className="row">
                    <div
                        className="why-us-section__container why-us-section__container--hide-to-lg col-xs-12 col-md-6 col-lg-4">
                        <div className="why-us-section__item observed-element">
                            <div className="why-us-section__item__content">
                                <h3>Projesjonalizm i doświadczenie</h3>
                                <p>Bogate doświadczenie w branży i gwarancja wysokiej jakości świadczonych
                                    usług.</p>
                            </div>
                        </div>
                        <div className="why-us-section__item observed-element">
                            <div className="why-us-section__item__content">
                                <h3>Gwarancja 2-letnia</h3>
                                <p>Długa gwarancja i serwis pogwarancyjny, dające klientom większe poczucie
                                    bezpieczeństwa.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="why-us-section__image-container">
                            <Image src={image_section_3} alt={"Dlaczego my?"} width={711} height={1079} sizes={"(max-width: 768px) 364px, (max-width: 1024px) 416px, 394px"} />
                        </div>
                    </div>
                    <div className="why-us-section__container col-xs-12 col-md-6 col-lg-4">
                        <div className="why-us-section__item why-us-section__item--hide-from-lg observed-element">
                            <div className="why-us-section__item__content">
                                <h3>Projesjonalizm i doświadczenie</h3>
                                <p>Bogate doświadczenie w branży i gwarancja wysokiej jakości świadczonych
                                    usług.</p>
                            </div>
                        </div>
                        <div className="why-us-section__item why-us-section__item--hide-from-lg observed-element">
                            <div className="why-us-section__item__content">
                                <h3>Gwarancja 2-letnia</h3>
                                <p>Długa gwarancja i serwis pogwarancyjny, dające klientom większe poczucie
                                    bezpieczeństwa.</p>
                            </div>
                        </div>
                        <div className="why-us-section__item observed-element">
                            <div className="why-us-section__item__content">
                                <h3>Bezpłatne wsparcie klientom</h3>
                                <p>Kompleksowe doradztwo, pomiary oraz wycena bez dodatkowych opłat
                                    dla klientów.</p>
                            </div>
                        </div>
                        <div className="why-us-section__item observed-element">
                            <div className="why-us-section__item__content">
                                <h3>Galeria realizacji</h3>
                                <p>Klienci mogą zobaczyć przykłady prac, co ułatwia podjęcie decyzji o współpracy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SimpleSection>
            <BannerSection backgroundImg={bg_image_section_4_jpg} bannerCopy="Zadzwoń teraz" buttonCopy="Kontakt"
                           buttonLink="/kontakt"/>
            <SimpleSection sectionClass="reviews-section">
                <div className="center-xs">
                    <Title heading_text="Recenzje" heading_tag="h2" heading_size="42"/>
                </div>
                <ReviewsSection featurableAPIKey={featurableAPIKey} />
            </SimpleSection>
            <ScrollTracker />
        </main>
    );
}
