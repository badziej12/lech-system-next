import "../../scss/pages/Kontakt.scss";
import SimpleSection from "@/templates/components/SimpleSection";
import Title from "@/templates/components/Title";
import ExpandItems from "@/templates/components/ExpandItems";
import ContactForm from "@/templates/components/ContactForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.lech-system.pl/kontakt",
  },
};

type Question = {
    key: string;
    heading: string;
    paragraph: string;
}

export default function Kontakt() {
    const questions: Question[] = [
        {
            key: "1",
            heading: "Jaki jest termin realizacji zamówienia?",
            paragraph: "Termin realizacji zamówienia zależy od indywidualnych potrzeb klienta oraz dostępności produktów. Po dokonaniu pomiarów i wyborze odpowiednich rolet, żaluzji lub moskitier, firma ustala termin montażu wspólnie z klientem.",
        },
        {
            key: "2",
            heading: "Jakie usługi obejmuje bezpłatny dojazd i pomiar?",
            paragraph: "Bezpłatny dojazd i pomiar obejmuje wstępną wizytę u klienta, podczas której dokonuję pomiarów okna oraz udzielam doradztwa w wyborze odpowiednich rolet, żaluzji lub moskitier. Cały proces jest bezpłatny i niezobowiązujący.",
        },
        {
            key: "3",
            heading: "Jaka jest gwarancja na wykonane prace?",
            paragraph: "Na wszystkie wykonane prace firma \"Lech-System\" udziela 2-letniej gwarancji. Gwarancja obejmuje zarówno montaż rolet, żalucji i moskitier, jak i ich funkcjonalność. W razie jakichkolwiek problemów z produktami lub usługami, klient może skontaktować się z firmą, która szybko i sprawnie rozwiąże ewentualne kwestie.",
        },
        {
            key: "4",
            heading: "Czy oferujecie serwis pogwarancyjny?",
            paragraph: "Tak, naszym klientom zapewniamy serwis pogwarancyjny, który obejmuje profesjonalne wsparcie w przypadku konieczności naprawy, konserwacji lub regulacji zamontowanych rolet. Dokładamy wszelkich starań, aby przedłużyć trwałość naszych produktów i zapewnić pełną satysfakcję z ich użytkowania. W przypadku problemów prosimy o kontakt, aby umówić wizytę serwisową.",
        },
        {
            key: "5",
            heading: "Czy serwis pogwarancyjny jest płatny?",
            paragraph: "Koszt serwisu pogwarancyjnego ustalany jest indywidualnie w zależności od zakresu prac. Przed podjęciem działań zawsze informujemy klienta o przewidywanych kosztach i uzgadniamy szczegóły.",
        },
    ]

    return (
        <main className={"Kontakt flex flex-col"}>
            <SimpleSection sectionClass={"contact-section"}>
                <div className="center-xs contact-section__title">
                    <Title heading_text={"Kontakt"}/>
                </div>
                <div className={"contact-section__faq"}>
                    <div className="contact-section__faq__title">
                        <Title heading_text={"FAQ"} heading_tag={"h2"} heading_size={"42"} />
                    </div>
                    <div className="contact-section__faq__questions">
                        <ExpandItems questions={questions} />
                    </div>
                </div>
            </SimpleSection>
            <SimpleSection sectionClass={"contact-form-section"}>
                <div className="center-xs contact-form-section__title">
                    <Title heading_text={"Nie znalazłeś odpowiedzi?<br> Skontaktuj się z nami!"} heading_size={"42"} heading_tag={"h2"}/>
                </div>
                <div className="contact-form-section__container">
                    <ContactForm/>
                </div>
            </SimpleSection>
        </main>
    );
}