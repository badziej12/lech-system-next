'use client'

import '@/scss/header-footer/header.scss';

import {usePathname} from 'next/navigation';
import Link from 'next/link'

export function Header() {
    const pathname = usePathname();

    return (
        <header className="Header">
            <div className="container-fluid wrapper">
                <div className="Header__content flex">
                    <a href=""
                       className="Header__logo"></a>
                    <div className="Header__burger-btn">
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <ul className="Header__navigation flex">
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
        </header>
    );
}