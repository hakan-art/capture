//Import Images
// import athlete from "./img/athlete-small.png";
// import goodtimes from "./img/goodtimes-small.png";
// import theracer from "./img/theracer-small.png";
// import athlete2 from "./img/athlete2.png";
// import goodtimes2 from "./img/good-times2.jpg";
// import theracer2 from "./img/the-racer2.jpg";
import basic1 from './img/basic-oben.png';
import basic2 from './img/basic-unten.png';
import api1 from './img/api-oben.png';
import api2 from './img/api-unten.png';
import figma from './img/figma.png';
import figma2 from './img/figma2.png';


export const MovieState = () => {
  return [
    {
      title: "Game Plattform API",
      mainImg: api1,
      secondaryImg: api2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "React Api Redux",
          description:
            "“Dieses Projekt ist in React entstanden. Dabei wird ein API benutzt die dynamisch die Inhalte liefert.Es kamm auch Redux als State-Managemant-Tool eingesetzt.”",
          link: "https://github.com/hakan-art/api-ignite"
        },
        {
          title: "Funktionen der Website.",
          description:
            "“Es kam Framer Motion animation and gesture library for React zu Einsatz um die Game-Cards zu animieren.”",
          link: "https://github.com/framer/motion"
        },
        {
          title: "Published auf der Plattform Netlify",
          description:
            "“Zur Ansicht der Website habe ich sie auf der Plattform Netlify veröffentlicht, diese Plattform bietet sich für React Projekte besonders an.”",
          link: "https://keen-brahmagupta-934b7f.netlify.app/"
        },
      ],
    },
    {
      title: "Figma Prototyping UI UX",
      mainImg: figma,
      url: "/work/good-times",
      secondaryImg: figma2,
      awards: [
        {
          title: "Wireframe Figma",
          description:
            "“Wireframe Bausteine für Aufbau und Visualisierung von Webseiten.”",
          link: "https://www.figma.com/file/KA1uiSB5icimYLO5xgr38E/Wireframing-in-Figma?node-id=0%3A1"
        },
        {
          title: "Seitenlayout SmartHome Mockup UI/UX",
          description:
            "“Seitenlayout der Website Smart Home. Kurs-Projekt bei Super Code ”",
          link: "https://www.figma.com/file/7AAq3JBd4sLDZxNKxsH449/Smart-Home?node-id=0%3A1"
        },
        {
          title: "Mockup Open Enterprise",
          description:
            "“Mockup der Website Open Enterprise, Visualisierung für das Coding ”",
          link: "https://www.figma.com/file/SuAgQt3QA7MB9gis7UNzNO/Landing-Page-Concept-(Community)?node-id=0%3A1"
        },
      ],
    },
    {
      title: "Projekt Basic Agency",
      mainImg: basic1,
      url: "/work/the-racer",
      secondaryImg: basic2,
      awards: [
        {
          title: "Html Css Javascript",
          description:
            "“Diese Website wurde mit Html, Css und Vanilla Javascript erstellt.”",
          link: "https://hakan-art.github.io/basic-agency/index.html"
        },
        {
          title: "Basic Agency Seite mit 6 Unterseiten.",
          description:
            "“Die Seite besteht aus mehreren Unterseiten. Es kamen keine Frameworks zur Einsatz. ”",
          link: "https://hakan-art.github.io/basic-agency/about.html"
        },
        {
          title: "Git Hub Page",
          description:
            "“https://hakan-art.github.io/basic-agency/index.html” Dieser Link führt zu der Git Hub Page ",
          link: "https://github.com/hakan-art/basic-agency"


        },
      ],
    },
  ];
};
