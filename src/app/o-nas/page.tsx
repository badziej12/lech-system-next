import "../../scss/pages/ONas.scss";
import SimpleSection from "@/templates/components/SimpleSection";
import Title from "@/templates/components/Title";
import Image from "next/image";
import BannerSection from "@/templates/components/BannerSection";
import ScrollTracker from "@/templates/components/ScrollTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.lech-system.pl/o-nas",
  },
};

export default function ONas() {
    const aboutImage1 = "/assets/images/about/o-firmie.jpg";
    const aboutImage2 = "/assets/images/about/moje-wartosci.jpg";
    const aboutImage3 = "/assets/images/about/szeroki-asortyment.jpg";
    const bannerImage = "url(assets/images/about/skontaktuj-sie.jpg)";

    return (
        <main className={"ONas flex flex-col"}>
            <SimpleSection sectionClass={"about-section"}>
                <div className="center-xs about-section__title">
                    <Title heading_text={"Poznajmy się"}/>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="about-section__image-container">
                            <div className="about-section__image">
                                <Image src={aboutImage1}
                                       alt={"O mnie"}
                                       fill
                                       sizes="(max-width: 767px) 90vw, 50vw"
                                       priority
                                       style={{objectFit: "cover"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-section__text-container">
                        <Title heading_text={"O mnie"}
                                   secondary_text={"Nazywam się Leszek Tondel i prowadzę firmę Lech-System, oferującą montaż rolet, żaluzji i moskitier. Od lat pomagam mieszkańcom Kątów Wrocławskich i okolic tworzyć wygodne i funkcjonalne wnętrza, dbając o każdy szczegół realizacji. Stawiam na jakość, lokalność i zaufanie – od pierwszego kontaktu, przez darmowy pomiar i doradztwo, aż po montaż objęty 2-letnią gwarancją. "}
                                   heading_tag={"h2"}
                                   heading_size={"42"}
                                   secondary_size={"18"} />
                        </div>
                    </div>
                </div>
                <div className="row reverse">
                    <div className="col-xs-12 col-md-6">
                        <div className={"about-section__image-container"}>
                            <div className="about-section__image about-section__image--observed observed-element">
                                <Image src={aboutImage2}
                                       alt={"Indywidualne Podejście"}
                                       fill
                                       sizes="(max-width: 767px) 90vw, 50vw"
                                       style={{objectFit: "cover"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-section__text-container about-section__text-container--observed observed-element">
                            <Title heading_text={"Indywidualne Podejście"}
                                   secondary_text={"Każde zlecenie traktuję indywidualnie. Chętnie podejmuję się realizacji nietypowych projektów, takich jak osłony do okien o niestandardowych kształtach czy rozwiązania wymagające szczególnej precyzji. Dzięki temu mogę zapewnić rozwiązania idealnie dopasowane do Twoich potrzeb i oczekiwań. Każdy projekt traktuję jako okazję do zaoferowania najlepszego rozwiązania, które będzie zarówno funkcjonalne, jak i estetyczne."}
                                   heading_tag={"h2"}
                                   heading_size={"42"}
                                   secondary_size={"18"}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className={"about-section__image-container"}>
                            <div className="about-section__image about-section__image--observed observed-element">
                                <Image src={aboutImage3}
                                       alt={"Szeroki Asortyment"}
                                       fill
                                       sizes="(max-width: 767px) 90vw, 50vw"
                                       style={{objectFit: "cover"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-section__text-container about-section__text-container--observed observed-element">
                            <Title heading_text={"Szeroki Asortyment"}
                                   secondary_text={"Oferuję szeroką gamę produktów, które doskonale odpowiadają na różnorodne potrzeby i preferencje klientów. W ofercie znajdziesz rolety, żaluzje oraz moskitiery w różnych kolorach, materiałach i wzorach, które pasują do każdego wnętrza. Dbam o to, aby wszystkie produkty charakteryzowały się najwyższą jakością i trwałością, co zapewnia ich niezawodność przez długi czas."}
                                   heading_tag={"h2"}
                                   heading_size={"42"}
                                   secondary_size={"18"}/>
                        </div>
                    </div>
                </div>
            </SimpleSection>
            <BannerSection backgroundImg={bannerImage} bannerCopy={"Stwórz idealne rozwiązanie dla Twojego okna!"}
                           buttonCopy={"Kontakt"} buttonLink={"/kontakt"}/>
            <ScrollTracker />
        </main>
    );
}