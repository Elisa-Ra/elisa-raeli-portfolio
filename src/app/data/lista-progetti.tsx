export const projectData: Record<
  string,
  {
    description: string
    image?: string
    link?: string
    github?: string
    tec?: string[]
    gallery?: string[]
  }
> = {
  "Traveler's Notebook": {
    description:
      "Ho creato questo sito come progetto finale per il Master in Full-stack web developer di EPICODE. \nIl sito è stato pensato per il settore turistico e culturare. \nSi tratta di un taccuino del viaggiatore digitale collegato ad un sito culturale, quello della Valle dei Templi di Agrigento. \nL'utente registrato può iniziare a scrivere nel suo diario digitale, sfogliabile, collegando ogni pagina scritta ad un monumento che ha visitato nella vita reale. \nHo deciso di aggiungere anche una funzione di gamification per invogliare l'utente a visitare i monumenti ed è il sistema di medaglie digitali che vengono assegnate all'utente. \nIn questo modo, la fruizione del sito culturale da parte dell'utente non termina con la visita dello stesso, ma ha la possibilità di conservare ricordi e foto nel suo diario di viaggio per poi scaricarne il PDF e creare un ricordo indelebile. \nIl sito comprende anche una sezione di back-office per l'amministratore, che ha l'accesso al CRUD completo sui monumenti e medaglia.",
    image: "/traveller.svg",
    link: "https://travelers-notebook-valley-frontend.vercel.app/",
    github: "https://github.com/Elisa-Ra/travelers-notebook-valley-frontend",
    tec: [
      "React",
      "Java",
      "Javascript",
      "Bootstrap",
      "Vite",
      "Fetch API",
      "HTMLFlipBook",
      "Html2Canvas",
      "Jspdf",
      "Recharts",
      "Vercel",
      "Koyeb",
      "Aiven",
      "Canva",
    ],
    gallery: [
      "/gallery/TN1.png",
      "/gallery/TN2.png",
      "/gallery/TN3.png",
      "/gallery/TN4.png",
      "/gallery/TN5.png",
      "/gallery/TN6.png",
      "/gallery/TN7.png",
      "/gallery/TN8.png",
      "/gallery/TN9.png",
      "/gallery/TN10.png",
      "/gallery/TN11.png",
      "/gallery/TN12.png",
      "/gallery/TN13.png",
      "/gallery/TN14.png",
    ],
  },
  "Avventura nella Valle dei Templi": {
    description:
      "Ho creato questo videogioco come progetto per la mia tesi di laurea in Informatica Umanistica. \nLa tesi è incentrata sull'edutainment, ovvero l'intrattenimento educativo. \nHo così deciso di realizzare un videogioco educativo per bambini di genere visual novel (un genere di videogioco narrativo interattivo, che fonde la struttura di un romanzo con elementi visivi e minigiochi.) \nIl gioco è stato realizzato con Ren'py, motore di gioco open source basato su Python. \nHo curato il progetto in tutte le sue parti: dalla scrittura della storia, alla programmazione, alla realizzazione dei disegni e delle foto. \nAttualmente è possibile provare il gioco sul sito Itch.io.",
    image: "/avventura.svg",
    link: "https://elyraptor.itch.io/avventura-nella-valle-dei-templi",
    tec: [
      "Ren'py",
      "Python",
      "Procreate",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    gallery: [
      "/gallery/anvdt.png",
      "/gallery/anvdt1.png",
      "/gallery/anvdt2.jpeg",
      "/gallery/anvdt3.png",
      "/gallery/anvdt4.png",
      "/gallery/anvdt5.png",
      "/gallery/anvdt6.png",
      "/gallery/anvdt7.jpeg",
      "/gallery/anvdt8.jpeg",
      "/gallery/anvdt9.jpeg",
      "/gallery/anvdt10.jpeg",
      "/gallery/anvdt11.jpeg",
      "/gallery/anvdt12.jpeg",
    ],
  },
}
