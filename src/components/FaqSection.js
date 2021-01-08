
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle';
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";


const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} initial="hidden" animate={controls}>
            <h2>Mein Lebenslauf <span>FAQ</span>  </h2>
            <AnimateSharedLayout>
                <Toggle title='Mein Werdegang als Web-Entwickler' >


                    <div className="answer">
                        <div className="beschreibung">
                            <p>07/2020 - aktuelle Tätigkeit</p>
                            <h2>TRAINER WEB-ENTWICKLUNG FULL-STACK</h2>
                            <p>SuperCode Gmbh & Co. KG, Düsseldorf</p>
                            <p>MongoDB, Express, Node.js, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, Design & UX</p>
                        </div>
                        <div className="linie"></div>
                        <div className="beschreibung">
                            <p>01/2020 - 04/2020</p>
                            <h2>BOOTCAMP</h2>
                            <p>SuperCode Gmbh & Co. KG, Düsseldorf</p>
                            <p>Essentials, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, CMS, Design & UX</p>
                        </div>

                    </div>


                </Toggle>
                <Toggle title='Studium'>


                    <div className="answer">
                        <div className="beschreibung">
                            <p>09/2016 - 08/2019</p>
                            <h2>BACHELOR DEGREE MEDIA MANAGEMENT</h2>
                            <p>Studium Bachelor of Arts (B.A.) Media Management Rheinische Fachhochschule Köln</p>
                        </div>
                        <div className="linie"></div>
                        <div className="beschreibung">
                            <h2>BACHELOR THESIS NOTE 1,3</h2>
                            <p>Thema: Implementierungsbarrieren moderner Innovationmethoden durch traditionelle Unternehmenswerte in Deutschland</p>
                        </div>
                        <div className="linie"></div>
                        <div className="beschreibung">
                            <h2>BACHELOR OF ARTS DURCHSCHNITTSNOTE 1,6</h2>
                        </div>
                    </div>


                </Toggle>
                <Toggle title='Praktikum' >


                    <div className="answer">
                        <div className="beschreibung">
                            <p>10/2019 - 01/2020</p>
                            <h2>PRAKTIKUM MARKETING/SALES</h2>
                            <p>Fa. MyOlav  <a href="https://myolav.com/de" target="__blank">( https://myolav.com/de )</a> Start-Up, Düsseldorf Online Marketing, SEO, Sales.</p>

                        </div>
                    </div>


                </Toggle>
                <Toggle title='Berufserfahrung'>

                    <div className="answer">
                        <div className="beschreibung">
                            <p>06/2013 - 08/2016</p>
                            <p>08/1995 - 06/2003</p>
                            <h2>DRUCKER/ TSB BAGEL IN MÖNCHENGLADBACH</h2>
                            <p>Fa. Tiefdruck Schwann-Bagel GmbH & Co. KG, Mönchengladbach Drucker Fachrichtung Tiefdruck/Illustrationsdruck</p>
                            <p>Tätigkeiten:</p>
                            <ul>
                                <li>Ein- und Ausrichten von Druckmaschinen</li>
                                <li>Durchführung aller Einstellungs- und Überwachungsarbeiten an Regel- und Steuerungsanlage</li>
                                <li>Laufende Beobachtung und Kontrolle der gedruckten Exemplare</li>
                                <li>Beseitigung von Störungen</li>
                                <li>Wartungs- und Reparaturarbeiten</li>
                            </ul>
                        </div>
                        <div className="linie"></div>
                        <div className="beschreibung">
                            <p>11/2007 - 05/2013</p>
                            <h2>BETRIEBSASSISTENT/ BAKA DRUCK IN RATINGEN</h2>
                            <p>Fa. Baka Druck GmbH & Co KG, Ratingen Betriebsassistent</p>
                            <p>Tätigkeiten:</p>
                            <ul>
                                <li>Koordination zwischen der Auftragssachbearbeitung und der Produktion</li>
                                <li>Kontrolle und Änderung der Auftragsunterlagen</li>
                                <li>Materialbestellung und Kontrolle </li>
                                <li>Rechnungskontrolle</li>
                                <li>Ansprechpartner zu Fragen der Nachkalkulation</li>
                            </ul>

                        </div>
                        <div className="linie"></div>
                        <div className="beschreibung">
                            <p>07/2006 - 12/2006</p>
                            <h2>CALL AGENT / LUFTHANSA IN ISTANBUL</h2>
                            <p>Lufthansa Global Tele Sales, Istanbul (Türkei) Call Agent</p>
                            <p>Tätigkeiten:</p>
                            <ul>
                                <li>Ticketing</li>
                                <li>Check In/Out</li>
                                <li>Ticket Sales </li>
                                <li>Training zum Call Agent Dauer 3 Monate</li>

                            </ul>

                        </div>
                    </div>



                </Toggle>
            </AnimateSharedLayout>
        </Faq >)
};

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height: .2rem;
    margin: 2rem 0rem;
    width: 100%;

}
.linie{
    background: #9e0606;
    height: .2rem;
    margin: 2rem 0rem;
    width: 80%;
    @media (max-width: 1300px){
        width: 100%;
    }
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
    h2{
        font-size:2rem;
        color: #9e0606;
    }
}
.beschreibung{
    a{
        text-decoration: none;
        color: white;
        font-family: 'Inter', sans-serif;
        font-size:1.5rem;
    }
}

`

export default FaqSection;