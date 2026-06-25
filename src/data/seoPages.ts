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
    h1: 'AEVO Prüfung 2026: Ablauf, Inhalte und Vorbereitung',
    intro:
      'Die AEVO Prüfung weist deine berufs- und arbeitspädagogische Eignung nach. Hier findest du einen kompakten Überblick über Aufbau, Inhalte und eine sinnvolle Vorbereitung.',
    updatedDate: '2026-06-22',
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
        title: 'Wie läuft die schriftliche AEVO Prüfung ab?',
        body: [
          'Im schriftlichen Teil beantwortest du Aufgaben zu typischen Ausbildungssituationen. Dabei geht es nicht nur um Begriffe, sondern darum, Regeln, Methoden und Entscheidungen auf einen konkreten Fall anzuwenden.',
          'Trainiere deshalb mit Fragen aus allen vier Handlungsfeldern. Lies nach jeder Antwort die Erklärung und halte Themen fest, bei denen du wiederholt unsicher bist. Das macht aus einer Übungsrunde einen belastbaren Lernfortschritt.',
        ],
        bullets: [
          'Ausbildungsplanung und rechtliche Grundlagen',
          'Auswahl und Einstellung von Auszubildenden',
          'Lernmethoden, Motivation und Konflikte',
          'Beurteilung, Abschluss und Übernahme',
        ],
      },
      {
        title: 'Was erwartet dich im praktischen Prüfungsteil?',
        body: [
          'Der praktische Teil prüft, wie du eine Ausbildungssituation planst und begründest. Je nach zuständiger Stelle kann eine Unterweisung oder die Präsentation einer Ausbildungssituation mit anschließendem Fachgespräch vorgesehen sein.',
          'Kläre die konkrete Form, Fristen und Vorgaben immer bei deiner zuständigen Kammer. Für deine Vorbereitung hilft es, eine reale Lernsituation auszuwählen, Lernziel und Methode nachvollziehbar zu begründen und den Ablauf klar zu strukturieren.',
        ],
      },
      {
        title: 'Wie bereitest du dich sinnvoll vor?',
        body: [
          'Eine gute Vorbereitung kombiniert Verständnis, Wiederholung und realistische Tests. Starte mit den Grundbegriffen, lerne die Handlungsfelder systematisch und prüfe deinen Stand regelmäßig mit AEVO Fragen.',
          'AEVO Ada unterstützt dich dabei mit Prüfungsfragen, Erklärungen, Statistik und Prüfungssimulation. So trainierst du nicht nur einzelne Antworten, sondern erkennst auch deine schwächeren Themenbereiche.',
        ],
      },
      {
        title: 'Dein Lernplan für die AEVO Prüfung 2026',
        body: [
          'Beginne mit einem Überblick über die vier Handlungsfelder. Arbeite danach Themenblock für Themenblock und nutze kurze tägliche Wiederholungen, statt alles in den letzten Tagen vor dem Termin nachzuholen.',
          'In den letzten Wochen vor der Prüfung solltest du regelmäßig im Testmodus üben. Aus Fehlern entstehen dann konkrete Wiederholungsaufgaben. Die praktische Prüfung bereitest du parallel vor, damit Konzept, Lernziel und Begründung rechtzeitig sitzen.',
        ],
        bullets: [
          'Woche 1: Handlungsfelder und Grundbegriffe ordnen',
          'Woche 2: Fragen nach Themenbereich trainieren',
          'Woche 3: Fehler gezielt wiederholen und simulieren',
          'Woche 4: Praktischen Teil proben und Prüfungsstand testen',
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
      'Strukturierte AEVO Prüfungsvorbereitung online und digital: Lernplan, AEVO Test, Karteikarten-Prinzip und App-gestützte Wiederholung.',
    keywords:
      'AEVO Prüfungsvorbereitung, AEVO Online, AEVO Digital, AEVO Test, AEVO Karteikarten, AEVO Lernen, Ausbildung der Ausbilder',
    eyebrow: 'Lernen mit System',
    h1: 'AEVO Prüfungsvorbereitung: so lernst du effizient',
    intro:
      'Eine starke AEVO Prüfungsvorbereitung braucht klare Prioritäten: verstehen, wiederholen, testen und gezielt nacharbeiten - am besten mit einer digitalen Routine, die in deinen Alltag passt.',
    updatedDate: '2026-06-25',
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
          'Plane feste Lernblöcke ein. Für viele Kandidaten funktionieren kurze tägliche Einheiten besser als wenige lange Sitzungen kurz vor dem Termin. Genau hier hilft eine AEVO Online- oder Digital-Routine, weil du auch unterwegs wiederholen kannst.',
        ],
      },
      {
        title: 'AEVO online und digital vorbereiten',
        body: [
          'AEVO online zu lernen bedeutet nicht, planlos Fragen am Bildschirm zu klicken. Entscheidend ist, dass du Lernstand, Fehler und Wiederholungen sichtbar machst und daraus konkrete nächste Schritte ableitest.',
          'Eine digitale AEVO Prüfungsvorbereitung ist besonders stark, wenn sie kurze tägliche Lernphasen, thematische Fragen und Prüfungssimulationen kombiniert. So bleibt die Vorbereitung flexibel, ohne beliebig zu werden.',
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
    title: 'AEVO Prüfungsfragen: Fragetypen, Test & Simulation | AEVO Ada',
    description:
      'AEVO Prüfungsfragen und Fragetypen verstehen: typische Aufgaben, Fehleranalyse, Testmodus und Prüfungssimulation mit AEVO Ada.',
    keywords:
      'AEVO Prüfungsfragen, AEVO Fragen, AEVO Fragetypen, AEVO Test, AEVO App, AEVO Prüfung',
    eyebrow: 'Fragen gezielt üben',
    h1: 'AEVO Prüfungsfragen: welche Fragetypen dich erwarten',
    intro:
      'AEVO Prüfungsfragen helfen dir nur dann wirklich, wenn du nicht bloß Antworten auswendig lernst, sondern die Logik hinter typischen Aufgaben und Ausbildungssituationen verstehst.',
    updatedDate: '2026-06-25',
    heroPoints: [
      'Über 700 Fragen in AEVO Ada',
      'Fragetypen und Denkwege statt reines Auswendiglernen',
      'Realistische Simulation für die schriftliche Prüfung',
    ],
    sections: [
      {
        title: 'Welche AEVO Fragetypen sind wichtig?',
        body: [
          'In der AEVO Vorbereitung begegnen dir Wissensfragen, anwendungsbezogene Fragen und Aufgaben zu konkreten Ausbildungssituationen. Viele Fragen prüfen nicht nur, ob du einen Begriff kennst, sondern ob du als Ausbilder eine passende Entscheidung treffen kannst.',
          'Typische Themen sind Recht, Ausbildungsplanung, Lernmethoden, Motivation, Konflikte, Beurteilung und Abschluss der Ausbildung. Je stärker du die Situation hinter der Frage erkennst, desto leichter findest du die fachlich sinnvolle Antwort.',
        ],
        bullets: [
          'Begriffs- und Grundlagenfragen zu AEVO, BBiG und Ausbildungspraxis',
          'Situationsfragen aus dem Alltag eines Ausbilders',
          'Methodenfragen zu Unterweisung, Motivation und Feedback',
          'Beurteilungs- und Abschlussfragen rund um Prüfung und Zeugnis',
        ],
      },
      {
        title: 'Warum Situationsfragen besonders wichtig sind',
        body: [
          'Viele AEVO Fragen beschreiben eine konkrete Situation: ein Auszubildender ist unsicher, eine Leistung fällt ab, ein Lernziel wurde nicht erreicht oder ein Konflikt entsteht im Betrieb. In solchen Aufgaben zählt nicht nur Fachwissen, sondern pädagogisches Urteilsvermögen.',
          'Achte beim Üben darauf, wer handelt, welches Ziel verfolgt wird und welche rechtlichen oder didaktischen Grenzen gelten. So trainierst du nicht nur einzelne Antworten, sondern eine prüfungstaugliche Denkweise.',
        ],
      },
      {
        title: 'So nutzt du Erklärungen nach jeder Frage',
        body: [
          'Die Erklärung ist oft wertvoller als die richtige Antwort selbst. Wenn du verstehst, warum eine Option falsch ist, erkennst du Muster und tappst beim nächsten ähnlichen Fragetyp seltener in dieselbe Falle.',
          'Notiere dir wiederkehrende Fehler: verwechselt du Begriffe, übersiehst du rechtliche Hinweise oder interpretierst du die Rolle des Ausbilders zu passiv? Genau diese Beobachtungen machen deine AEVO Prüfungsvorbereitung messbar besser.',
        ],
      },
      {
        title: 'AEVO Fragen nach Handlungsfeldern lernen',
        body: [
          'Eine gute Übungsroutine deckt alle vier Handlungsfelder ab. Wenn du nur deine Lieblingsthemen übst, entstehen blinde Flecken, die in der Prüfung teuer werden können.',
          'AEVO Ada zeigt dir deinen Fortschritt nach Themenbereichen und hilft dir, schwierige Bereiche gezielt zu wiederholen. Besonders sinnvoll ist ein Wechsel aus thematischem Lernen, Wiederholung falscher Antworten und regelmäßigen Tests.',
        ],
        bullets: [
          'Fragen nach Thema üben',
          'Fehler mit Erklärung nacharbeiten',
          'Schwierige Fragen wiederholen',
          'Prüfungsmodus regelmäßig testen',
        ],
      },
      {
        title: 'AEVO Test und Prüfungssimulation richtig einsetzen',
        body: [
          'Einzelne Fragen sind gut für den Aufbau. Ein AEVO Test und eine Prüfungssimulation trainieren zusätzlich Zeitgefühl, Konzentration und Entscheidungsdruck.',
          'Nutze Simulationen erst, wenn du die Grundlagen kennst. Danach werden sie zum besten Werkzeug, um deinen echten Prüfungsstand einzuschätzen. Prüfe nach jedem Test nicht nur die Punktzahl, sondern auch, welche Fragetypen dir noch schwerfallen.',
        ],
      },
      {
        title: 'Wichtig: keine Garantie für echte Prüfungsfragen',
        body: [
          'Seriöse Prüfungsvorbereitung sollte nicht versprechen, dass du echte oder identische Prüfungsfragen auswendig lernst. Besser ist es, prüfungsnahe Fragen zu nutzen, die Inhalte, Denkwege und typische Situationen abbilden.',
          'Informiere dich zusätzlich bei deiner zuständigen Stelle über Ablauf, Termine und formale Vorgaben. AEVO Ada unterstützt dich als unabhängige Lern-App bei der inhaltlichen Vorbereitung.',
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
      'Ausbilderschein, ADA-Schein, AEVO und IHK Ausbilderschein einfach erklärt. Erfahre, was die Begriffe bedeuten und wie du dich online vorbereitest.',
    keywords:
      'Ausbilderschein, Ausbilderschein online, IHK Ausbilderschein, ADA Schein, ADA-Schein, ADA Schein online machen, AEVO ADA-Schein, AEVO IHK App ADA-Schein',
    eyebrow: 'Begriffe einfach erklärt',
    h1: 'Ausbilderschein und ADA-Schein: was ist der Unterschied?',
    intro:
      'Ausbilderschein, ADA-Schein und AEVO werden im Alltag oft ähnlich verwendet. Gemeint ist meist der Nachweis der berufs- und arbeitspädagogischen Eignung, auf den du dich auch digital vorbereiten kannst.',
    updatedDate: '2026-06-25',
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
      {
        title: 'ADA-Schein online machen: was bedeutet das?',
        body: [
          'Wer nach ADA-Schein online machen oder Ausbilderschein online sucht, meint häufig eine flexible Vorbereitung auf die AEVO Inhalte. Die eigentliche Prüfung, Anmeldung und Anerkennung richten sich weiterhin nach den Vorgaben der zuständigen Stelle.',
          'Online lernen kann dir aber helfen, die Theorie strukturiert aufzubauen: mit Fragen, Erklärungen, Wiederholung und Simulation. Prüfe zusätzlich immer, welche formalen Schritte deine Kammer für Prüfung und praktischen Teil verlangt.',
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
