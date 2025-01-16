import '@/scss/header-footer/footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen} from "@fortawesome/free-regular-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export function Footer() {
    const logoImage = "/assets/images/lech-system-logo.svg";

    return (
        <footer className="Footer">
            <div className="wrapper container-fluid">
                <div className="row">
                    <div className="col-xs-8 col-md-4">
                        <div className="row Footer__contact-container">
                            <div className="col-xs-12">
                                <h3 className="Footer__heading">Adres</h3>
                                <p className="Footer__contact-container__address">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <a href="#">ul. Dębowa 26/4 <br/>55-080 Kąty Wrocławskie</a>
                                </p>
                            </div>
                            <div className="col-xs-12">
                                <h3 className="Footer__heading">Skontaktuj się</h3>

                                <p className="Footer__contact-container__email">
                                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                                    <a href="mailto:lechsystem@wp.pl">lechsystem@wp.pl</a>
                                </p>
                                <p className="Footer__contact-container__phone">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:+48605579484">605-579-484</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <h3 className="Footer__heading">Menu</h3>
                        <ul>
                            <li><a href="/">Strona główna</a></li>
                            <li><a href="/o-nas">O nas</a></li>
                            <li><a href="/oferta">Oferta</a></li>
                            <li><a href="/galeria">Galeria</a></li>
                            <li><a href="/kontakt">Kontakt</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="row">
                            <div className="col-xs-12 Footer__socials">
                                <h3 className="Footer__heading">Social media</h3>
                                <a href="https://www.facebook.com/roletylechsystem"><FontAwesomeIcon icon={faFacebook}/></a>
                            </div>
                            <div className="col-xs-12 Footer__logo">
                                <a href="/">
                                    <Image src={logoImage} alt={"Logo Lech-System"} width={291} height={60} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
);
}