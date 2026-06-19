export interface SeoRelatedLink {
  href: string;
  label: string;
  desc: string;
}

export interface SeoSection {
  title: string;
  body: string[];
  bullets?: string[];
}

export interface SeoPage {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  intro: string;
  updatedDate: string;
  heroPoints: string[];
  sections: SeoSection[];
  ctaTitle: string;
  ctaText: string;
  relatedLinks: SeoRelatedLink[];
  disclaimer?: string;
}

export const seoPages: SeoPage[] = [
  {
    slug: 'aevo-pruefung',
    title: 'AEVO Prüfung 2026: Ablauf, Inhalte & Vorbereitung | AEVO Ada',
    description:
      'Alles zur AEVO Prüfung 2026: schriftliche Prüfung, praktische Prüfung, Handlungsfelder und strukturierte Vorbereitung mit AEVO Ada.',
    keywords:
      'AEVO Prüfung, ADA Prüfung, Ausbildereignungsprüfung, AEVO Prüfung 2026, Ausbilder-Eignungsverordnung',
    eyebrow: 'AEVO Prüfung 2026',
    h1: 'AEVO Prüfung: Ablauf, Inhalte und Vorbereitung',
    intro:
      'Die AEVO Prüfung weist deine berufs- und arbeitspädagogische Eignung nach. Hier findest du einen kompakten Überblick über Aufbau, Inhalte und eine sinnvolle Vorbereitung.',
    updatedDate: '2026-06-19',
    heroPoints: [
      'Schriftlicher und praktischer Prüfungsteil verständlich erklärt',
      'Alle vier AEVO-Handlungsfelder im Überblick',
      'Lernstrategie für angehende Ausbilder in Deutschland',
    ],
    sections: [
      {
        title: 'Was ist die AEVO Prüfung?',
        body: [
          'Die AEVO Prüfung, oft auch ADA Prüfung oder Ausbildereignungsprüfung genannt, prüft, ob du Auszubildende fachgerecht begleiten kannst. Sie konzentriert sich auf pädagogische, rechtliche und organisatorische Aufgaben in der betrieblichen Ausbildung.',
          'Wer die Prüfung besteht, weist die berufs- und arbeitspädagogische Eignung nach. Für die tatsächliche Ausbildung im Betrieb können zusätzlich fachliche und persönliche Voraussetzungen relevant sein.',
        ],
      },
      {
        title: 'Welche Inhalte kommen vor?',
        body: [
          'Die Prüfung orientiert sich an vier Handlungsfeldern: Ausbildungsvoraussetzungen prüfen, Ausbildung vorbereiten, Ausbildung durchführen und Ausbildung abschließen. Besonders umfangreich ist in der Regel das Handlungsfeld Durchführung der Ausbildung.',
          'Typische Themen sind Ausbildungsplanung, Auswahl von Auszubildenden, Lernmethoden, Motivation, Konfliktgespräche, Beurteilung und Prüfungsvorbereitung.',
        ],
        bullets: [
          'Handlungsfeld 1: Voraussetzungen prüfen und Ausbildung planen',
          'Handlungsfeld 2: Ausbildung vorbereiten und bei der Einstellung mitwirken',
          'Handlungsfeld 3: Ausbildung durchführen',
          'Handlungsfeld 4: Ausbildung abschließen',
        ],
      },
      {
        title: 'Wie bereitest du dich sinnvoll vor?',
        body: [
          'Eine gute Vorbereitung kombiniert Verständnis, Wiederholung und realistische Tests. Starte mit den Grundbegriffen, lerne die Handlungsfelder systematisch und prüfe deinen Stand regelmäßig mit AEVO Fragen.',
          'AEVO Ada unterstützt dich dabei mit Prüfungsfragen, Erklärungen, Statistik und Prüfungssimulation. So trainierst du nicht nur einzelne Antworten, sondern erkennst auch deine schwächeren Themenbereiche.',
        ],
      },
    ],
    ctaTitle: 'AEVO Prüfung gezielt üben',
    ctaText:
      'Starte mit AEVO Ada auf iPhone oder iPad und trainiere mit Fragen, Erklärungen und realistischer Simulation. Die Android-Version ist demnächst verfügbar.',
    relatedLinks: [
      {
        href: '/aevo-pruefungsvorbereitung/',
        label: 'AEVO Prüfungsvorbereitung',
        desc: 'Lernplan, Tagesroutine und Wiederholungssystem.',
      },
      {
        href: '/aevo-pruefungsfragen/',
        label: 'AEVO Prüfungsfragen',
        desc: 'Fragetypen, Übungslogik und Simulation.',
      },
      {
        href: '/ausbilderschein-ada-schein/',
        label: 'Ausbilderschein / ADA-Schein',
        desc: 'Begriffe und Unterschiede verständlich erklärt.',
      },
    ],
  },
  {
    slug: 'aevo-pruefungsvorbereitung',
    title: 'AEVO Prüfungsvorbereitung: Lernplan, Test & Karteikarten | AEVO Ada',
    description:
      'Strukturierte AEVO Prüfungsvorbereitung mit Lernplan, AEVO Test, Karteikarten-Prinzip und App-gestützter Wiederholung.',
    keywords:
      'AEVO Prüfungsvorbereitung, AEVO Test, AEVO Karteikarten, AEVO Lernen, Ausbildung der Ausbilder',
    eyebrow: 'Lernen mit System',
    h1: 'AEVO Prüfungsvorbereitung: so lernst du effizient',
    intro:
      'Eine starke AEVO Prüfungsvorbereitung braucht klare Prioritäten: verstehen, wiederholen, testen und gezielt nacharbeiten.',
    updatedDate: '2026-06-19',
    heroPoints: [
      'Lernplan statt zufälligem Pauken',
      'AEVO Test zur realistischen Standortbestimmung',
      'Karteikarten-Prinzip mit wiederkehrender Wiederholung',
    ],
    sections: [
      {
        title: 'Der beste Start: Überblick vor Detailwissen',
        body: [
          'Beginne nicht mit isolierten Begriffen. Verschaffe dir zuerst einen Überblick über die vier Handlungsfelder und ordne jedes Thema einem Prüfungskontext zu. So erkennst du schneller, warum eine Antwort richtig oder falsch ist.',
          'Plane feste Lernblöcke ein. Für viele Kandidaten funktionieren kurze tägliche Einheiten besser als wenige lange Sitzungen kurz vor dem Termin.',
        ],
      },
      {
        title: 'AEVO Test und Prüfungssimulation',
        body: [
          'Ein AEVO Test zeigt dir, welche Themen bereits sitzen und wo du noch Lücken hast. Besonders wertvoll sind Tests, wenn du die Auswertung nicht nur als Punktzahl siehst, sondern daraus konkrete Wiederholungsaufgaben ableitest.',
          'Die Prüfungssimulation in AEVO Ada bildet den Zeitdruck nach und hilft dir, die schriftliche Prüfung nicht nur inhaltlich, sondern auch mental vorzubereiten.',
        ],
      },
      {
        title: 'Karteikarten-Prinzip für nachhaltige Wiederholung',
        body: [
          'AEVO Karteikarten funktionieren gut, wenn sie regelmäßig und nach Schwierigkeit wiederholt werden. Noch besser ist eine App, die erkennt, welche Fragen du häufiger brauchst.',
          'Mit AEVO Ada wiederholst du schwierige Inhalte gezielter und kannst deinen Fortschritt nach Themenbereich verfolgen.',
        ],
        bullets: [
          'Täglich kurze Lernphasen planen',
          'Falsche Antworten direkt nacharbeiten',
          'Regelmäßig Prüfungssimulationen einbauen',
          'Schwache Handlungsfelder priorisieren',
        ],
      },
    ],
    ctaTitle: 'Dein AEVO Lernplan in der App',
    ctaText:
      'AEVO Ada verbindet Fragen, Erklärungen, Wiederholung und Simulation in einer mobilen Lernroutine. Für iOS verfügbar, Android-Version demnächst verfügbar.',
    relatedLinks: [
      {
        href: '/aevo-pruefung/',
        label: 'AEVO Prüfung',
        desc: 'Ablauf und Inhalte der Prüfung verstehen.',
      },
      {
        href: '/aevo-pruefungsfragen/',
        label: 'AEVO Fragen',
        desc: 'Mit passenden Fragetypen gezielt üben.',
      },
      {
        href: '/aevo-ihk/',
        label: 'AEVO IHK',
        desc: 'IHK-Bezug und Prüfungsvorbereitung einordnen.',
      },
    ],
  },
  {
    slug: 'aevo-pruefungsfragen',
    title: 'AEVO Prüfungsfragen: Fragen, Test & Simulation | AEVO Ada',
    description:
      'AEVO Prüfungsfragen verstehen und gezielt üben: Fragetypen, Erklärungen, Testmodus und Prüfungssimulation mit AEVO Ada.',
    keywords: 'AEVO Prüfungsfragen, AEVO Fragen, AEVO Test, AEVO App, AEVO Prüfung',
    eyebrow: 'Fragen gezielt üben',
    h1: 'AEVO Prüfungsfragen: richtig üben und verstehen',
    intro:
      'AEVO Prüfungsfragen helfen dir nur dann wirklich, wenn du nicht bloß Antworten auswendig lernst, sondern die Logik hinter den Lösungen verstehst.',
    updatedDate: '2026-06-19',
    heroPoints: [
      'Über 700 Fragen in AEVO Ada',
      'Erklärungen statt reines Auswendiglernen',
      'Realistische Simulation für die schriftliche Prüfung',
    ],
    sections: [
      {
        title: 'Welche Fragetypen sind wichtig?',
        body: [
          'In der AEVO Vorbereitung begegnen dir Fragen zu Recht, Planung, Methodik, Motivation, Beurteilung und Abschluss der Ausbildung. Viele Aufgaben prüfen, ob du eine Situation aus Sicht eines Ausbilders richtig bewertest.',
          'Deshalb ist es wichtig, nach jeder Frage die Begründung zu lesen. So lernst du nicht nur die richtige Option, sondern auch den Denkweg dahinter.',
        ],
      },
      {
        title: 'AEVO Fragen nach Handlungsfeldern lernen',
        body: [
          'Eine gute Übungsroutine deckt alle vier Handlungsfelder ab. Wenn du nur deine Lieblingsthemen übst, entstehen blinde Flecken, die in der Prüfung teuer werden können.',
          'AEVO Ada zeigt dir deinen Fortschritt nach Themenbereichen und hilft dir, schwierige Bereiche gezielt zu wiederholen.',
        ],
        bullets: [
          'Fragen nach Thema üben',
          'Fehler mit Erklärung nacharbeiten',
          'Schwierige Fragen wiederholen',
          'Prüfungsmodus regelmäßig testen',
        ],
      },
      {
        title: 'Warum Simulationen wichtig sind',
        body: [
          'Einzelne Fragen sind gut für den Aufbau. Eine Prüfungssimulation trainiert zusätzlich Zeitgefühl, Konzentration und Entscheidungsdruck.',
          'Nutze Simulationen erst, wenn du die Grundlagen kennst. Danach werden sie zum besten Werkzeug, um deinen echten Prüfungsstand einzuschätzen.',
        ],
      },
    ],
    ctaTitle: 'AEVO Prüfungsfragen mobil trainieren',
    ctaText:
      'Lerne mit AEVO Ada unterwegs, wiederhole schwierige Fragen und simuliere die Prüfung unter realistischen Bedingungen.',
    relatedLinks: [
      {
        href: '/aevo-pruefungsvorbereitung/',
        label: 'AEVO Prüfungsvorbereitung',
        desc: 'Aus Fragen eine klare Lernroutine machen.',
      },
      {
        href: '/aevo-pruefung/',
        label: 'AEVO Prüfung 2026',
        desc: 'Ablauf, Inhalte und Prüfungsteile.',
      },
      {
        href: '/ausbilderschein-ada-schein/',
        label: 'ADA-Schein',
        desc: 'Warum die Prüfung oft so genannt wird.',
      },
    ],
  },
  {
    slug: 'aevo-ihk',
    title: 'AEVO IHK Vorbereitung: App, Training & Prüfung | AEVO Ada',
    description:
      'AEVO IHK Vorbereitung verständlich erklärt: IHK AEVO Prüfung, Übung mit App, Prüfungsfragen und wichtige Hinweise ohne offizielle IHK-Zugehörigkeit.',
    keywords: 'AEVO IHK, IHK AEVO, AEVO IHK App, AEVO IHK App trainieren, IHK Ausbilder',
    eyebrow: 'IHK-Bezug verstehen',
    h1: 'AEVO IHK Vorbereitung mit App-Unterstützung',
    intro:
      'Viele Kandidaten suchen nach AEVO IHK, weil die Prüfung häufig über die zuständige Kammer organisiert wird. AEVO Ada hilft dir bei der Vorbereitung, ist aber kein offizielles Angebot der IHK.',
    updatedDate: '2026-06-19',
    heroPoints: [
      'IHK-Begriffe und AEVO Vorbereitung einordnen',
      'Prüfungsfragen und Simulation für dein Training',
      'Klare Abgrenzung: keine offizielle IHK-Zugehörigkeit',
    ],
    sections: [
      {
        title: 'Was bedeutet AEVO IHK?',
        body: [
          'Mit AEVO IHK meinen viele Suchende die Ausbildereignungsprüfung im Umfeld der Industrie- und Handelskammern. Die konkrete Anmeldung, Termine und formale Anforderungen hängen von deiner zuständigen Stelle ab.',
          'Für die Vorbereitung sind die Inhalte der Ausbilder-Eignungsverordnung entscheidend: pädagogische Grundlagen, rechtliche Rahmenbedingungen und typische Ausbildungssituationen.',
        ],
      },
      {
        title: 'Wie hilft eine AEVO IHK App beim Trainieren?',
        body: [
          'Eine Lern-App ersetzt keine offizielle Prüfungsinformation, kann deine Vorbereitung aber deutlich strukturieren. Du kannst Fragen wiederholen, Fortschritte sehen und Simulationen durchführen.',
          'AEVO Ada ist besonders hilfreich, wenn du regelmäßig kurze Lernphasen nutzen möchtest und deine Schwächen nach Themengebiet erkennen willst.',
        ],
        bullets: [
          'Üben mit AEVO Fragen',
          'Erklärungen zu falschen Antworten',
          'Fortschritt nach Lernbereichen',
          'Prüfungssimulation unter Zeitdruck',
        ],
      },
      {
        title: 'Worauf solltest du zusätzlich achten?',
        body: [
          'Prüfe immer die aktuellen Informationen deiner zuständigen Kammer, vor allem zu Anmeldung, Prüfungsort, Gebühren und praktischer Prüfung. AEVO Ada konzentriert sich auf die Lern- und Übungsvorbereitung.',
          'So kombinierst du offizielle organisatorische Informationen mit einem klaren Lernsystem für die Inhalte.',
        ],
      },
    ],
    ctaTitle: 'AEVO IHK Inhalte gezielt trainieren',
    ctaText:
      'Nutze AEVO Ada für Fragen, Erklärungen und Simulation. Die App ist unabhängig und nicht mit der IHK verbunden.',
    relatedLinks: [
      {
        href: '/aevo-pruefung/',
        label: 'AEVO Prüfung',
        desc: 'Die Prüfungsteile und Inhalte im Überblick.',
      },
      {
        href: '/aevo-pruefungsfragen/',
        label: 'AEVO Prüfungsfragen',
        desc: 'Fragen und Simulation gezielt nutzen.',
      },
      {
        href: '/ausbilder-werden/',
        label: 'Ausbilder werden',
        desc: 'Der breitere Weg zur Ausbilderrolle.',
      },
    ],
    disclaimer:
      'AEVO Ada ist ein unabhängiges Lernangebot und steht in keiner offiziellen Verbindung zur IHK.',
  },
  {
    slug: 'ausbilderschein-ada-schein',
    title: 'Ausbilderschein, ADA-Schein & AEVO: Unterschied erklärt | AEVO Ada',
    description:
      'Ausbilderschein, ADA-Schein, AEVO und IHK Ausbilderschein einfach erklärt. Erfahre, was die Begriffe bedeuten und wie du dich vorbereitest.',
    keywords:
      'Ausbilderschein, IHK Ausbilderschein, ADA Schein, ADA-Schein, AEVO ADA-Schein, AEVO IHK App ADA-Schein',
    eyebrow: 'Begriffe einfach erklärt',
    h1: 'Ausbilderschein und ADA-Schein: was ist der Unterschied?',
    intro:
      'Ausbilderschein, ADA-Schein und AEVO werden im Alltag oft ähnlich verwendet. Gemeint ist meist der Nachweis der berufs- und arbeitspädagogischen Eignung.',
    updatedDate: '2026-06-19',
    heroPoints: [
      'ADA-Schein und Ausbilderschein verständlich einordnen',
      'AEVO als Grundlage der Vorbereitung verstehen',
      'Mit App-Fragen gezielt für den Nachweis lernen',
    ],
    sections: [
      {
        title: 'Was ist der ADA-Schein?',
        body: [
          'ADA steht für Ausbildung der Ausbilder. Der Begriff ADA-Schein wird häufig umgangssprachlich für den Nachweis der Ausbildereignung verwendet.',
          'In der Praxis geht es darum, dass du zeigen kannst, wie du Ausbildung planst, vorbereitest, durchführst und abschließt.',
        ],
      },
      {
        title: 'Was bedeutet Ausbilderschein?',
        body: [
          'Auch Ausbilderschein ist ein geläufiger Suchbegriff. Er meint meist denselben Kontext: die Eignung, Auszubildende pädagogisch und organisatorisch korrekt zu begleiten.',
          'Wichtig ist: Das Bestehen der AEVO Prüfung ist ein zentraler Baustein, aber die tatsächliche Ausbilderrolle kann weitere betriebliche und fachliche Voraussetzungen haben.',
        ],
      },
      {
        title: 'Wie lernst du für den IHK Ausbilderschein?',
        body: [
          'Für Suchende nach IHK Ausbilderschein ist eine strukturierte Vorbereitung entscheidend. Lerne erst die vier Handlungsfelder, übe danach mit Fragen und teste dich regelmäßig unter Prüfungsbedingungen.',
          'AEVO Ada unterstützt dich mit einer mobilen Lernroutine, die besonders für kurze, wiederholte Übungseinheiten geeignet ist.',
        ],
        bullets: [
          'Grundbegriffe der AEVO verstehen',
          'Fragen je Handlungsfeld üben',
          'Fehler mit Erklärungen nacharbeiten',
          'Mit Simulationen Prüfungssicherheit aufbauen',
        ],
      },
    ],
    ctaTitle: 'Für ADA-Schein und Ausbilderschein üben',
    ctaText:
      'Bereite dich mit AEVO Ada auf die AEVO Inhalte vor. Die App ist für iOS verfügbar; Android-Version demnächst verfügbar.',
    relatedLinks: [
      {
        href: '/aevo-pruefung/',
        label: 'AEVO Prüfung',
        desc: 'Der Prüfungsrahmen hinter dem Nachweis.',
      },
      {
        href: '/aevo-ihk/',
        label: 'AEVO IHK',
        desc: 'IHK-Bezug und Vorbereitung einordnen.',
      },
      {
        href: '/ausbilder-werden/',
        label: 'Ausbilder werden',
        desc: 'Was zur Ausbilderrolle dazugehört.',
      },
    ],
  },
  {
    slug: 'ausbilder-werden',
    title: 'Ausbilder werden: IHK Ausbilder & Ausbildung der Ausbilder | AEVO Ada',
    description:
      'Ausbilder werden in Deutschland: Rolle, Voraussetzungen, Ausbildung der Ausbilder und AEVO Vorbereitung mit AEVO Ada erklärt.',
    keywords: 'Ausbilder, IHK Ausbilder, Ausbildung der Ausbilder, AEVO, Ausbilderschein',
    eyebrow: 'Karriere in der Ausbildung',
    h1: 'Ausbilder werden: der Weg zur Ausbilderrolle',
    intro:
      'Wer Ausbilder werden möchte, übernimmt Verantwortung für fachliches Lernen, Motivation und Entwicklung von Auszubildenden.',
    updatedDate: '2026-06-19',
    heroPoints: [
      'Rolle und Aufgaben eines Ausbilders verstehen',
      'AEVO als wichtiger Nachweis der Eignung',
      'Vorbereitung mit Fragen und Simulation strukturieren',
    ],
    sections: [
      {
        title: 'Was macht ein Ausbilder?',
        body: [
          'Ein Ausbilder plant Lernziele, begleitet Auszubildende im Betrieb, gibt Feedback und unterstützt bei Schwierigkeiten. Neben Fachwissen zählen Kommunikation, Geduld und rechtliches Grundverständnis.',
          'Die AEVO Vorbereitung hilft dir, diese Aufgaben nicht nur intuitiv, sondern methodisch und prüfungssicher zu verstehen.',
        ],
      },
      {
        title: 'Welche Rolle spielt die Ausbildung der Ausbilder?',
        body: [
          'Ausbildung der Ausbilder beschreibt die Vorbereitung auf die berufs- und arbeitspädagogische Eignung. Viele Kandidaten verbinden damit Kurse, Bücher, Karteikarten oder eine AEVO App.',
          'AEVO Ada eignet sich als täglicher Begleiter, weil du Fragen, Erklärungen und Simulationen in kurzen Einheiten wiederholen kannst.',
        ],
      },
      {
        title: 'Wie gehst du praktisch vor?',
        body: [
          'Kläre zuerst die formalen Anforderungen bei der zuständigen Stelle. Danach solltest du die vier Handlungsfelder systematisch lernen und früh mit Übungsfragen beginnen.',
          'Plane eine Mischung aus Theorie, Anwendung und Prüfungssimulation. So baust du Schritt für Schritt Sicherheit auf.',
        ],
        bullets: [
          'Prüfungstermin und Anforderungen klären',
          'Handlungsfelder durcharbeiten',
          'AEVO Fragen regelmäßig üben',
          'Praktische Prüfung separat vorbereiten',
        ],
      },
    ],
    ctaTitle: 'Bereit für deine AEVO Vorbereitung?',
    ctaText:
      'Mit AEVO Ada trainierst du die wichtigsten Inhalte mobil und behältst deinen Lernfortschritt im Blick.',
    relatedLinks: [
      {
        href: '/ausbilderschein-ada-schein/',
        label: 'Ausbilderschein / ADA-Schein',
        desc: 'Die wichtigsten Begriffe erklärt.',
      },
      {
        href: '/aevo-pruefungsvorbereitung/',
        label: 'AEVO Prüfungsvorbereitung',
        desc: 'So baust du deinen Lernplan auf.',
      },
      {
        href: '/aevo-pruefung/',
        label: 'AEVO Prüfung',
        desc: 'Ablauf und Inhalte der Prüfung.',
      },
    ],
  },
];

export const findSeoPage = (slug: string) => seoPages.find((page) => page.slug === slug);
