"use client"
import {useEffect, useState} from 'react';
import '@/scss/header-footer/header.scss';

import {usePathname} from 'next/navigation';
import Link from 'next/link'
import Image from "next/image";

export function Header() {
    const pathname = usePathname();

    const [isActive, setIsActive] = useState(false);

    const logoImage = "/assets/images/lech-system-logo.svg";

    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        setIsActive(false);
    }, [pathname]);

    return (
        <header className="Header">
            <div className="wrapper">
                <div className="Header__content flex">
                    <Link className="Header__logo" href="/">
                        <Image src={logoImage} alt={"Logo Lech-System"} width={291} height={60} />
                    </Link>
                    <div className={`Header__burger-btn ${isActive ? 'active' : ''}`} onClick={handleClick}>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <ul className={`Header__navigation flex ${isActive ? 'active' : ''}`}>
                        <li className="Header__navigation__item">
                            <Link className={`${pathname === '/' ? 'active' : ''}`} href="/">
                                Strona główna
                            </Link>
                        </li>
                        <li className="Header__navigation__item">
                            <Link className={`${pathname === '/o-nas' ? 'active' : ''}`} href="/o-nas">
                                O nas
                            </Link>
                        </li>
                        <li className="Header__navigation__item">
                            <Link className={`${pathname === '/oferta' ? 'active' : ''}`} href="/oferta">
                                Oferta
                            </Link>
                        </li>
                        <li className="Header__navigation__item">
                            <Link className={`${pathname === '/galeria' ? 'active' : ''}`} href="/galeria">
                                Galeria
                            </Link>
                        </li>
                        <li className="Header__navigation__item">
                            <Link className={`${pathname === '/kontakt' ? 'active' : ''}`} href="/kontakt">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`Header__overlay ${isActive ? 'active' : ''}`} onClick={handleClick}></div>
        </header>
    );
}