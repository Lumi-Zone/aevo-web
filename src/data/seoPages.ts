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

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoSource {
  href: string;
  label: string;
  publisher: string;
}

export interface SeoPage {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  intro: string;
  publishedDate?: string;
  updatedDate: string;
  heroPoints: string[];
  sections: SeoSection[];
  ctaTitle: string;
  ctaText: string;
  relatedLinks: SeoRelatedLink[];
  faqs?: SeoFaq[];
  sources?: SeoSource[];
  disclaimer?: string;
}

export const seoPages: SeoPage[] = [
  {
    slug: 'aevo-app',
    title: 'AEVO App für IHK, ADA-Schein & Ausbilderschein | AEVO Ada',
    description:
      'AEVO Ada ist eine unabhängige AEVO App für die Prüfungsvorbereitung: 700+ Fragen, Erklärungen, Lernfortschritt und 90-Minuten-Training für iPhone und iPad.',
    keywords:
      'AEVO, IHK AEVO App, AEVO App, Ausbilderschein App, Ausbildereignung, Ausbilder, ADA, ADA Schein, AdA-Schein App',
    eyebrow: 'AEVO App im Überblick',
    h1: 'AEVO App für IHK-Prüfung, ADA-Schein und Ausbilderschein',
    intro:
      'AEVO Ada ist eine deutschsprachige Lern-App für Menschen, die sich auf die Ausbildereignungsprüfung vorbereiten und Fragen aus den vier Handlungsfeldern regelmäßig mobil üben möchten.',
    updatedDate: '2026-10-08',
    heroPoints: [
      '700+ prüfungsnahe Fragen mit verständlichen Erklärungen',
      'Lernfortschritt, Wiederholungen und 90-Minuten-Training',
      'Für iPhone und iPad; unabhängig von IHK und Kammern',
    ],
    sections: [
      {
        title: 'Kurzantwort: Was ist AEVO Ada?',
        body: [
          'AEVO Ada ist eine mobile Prüfungsvorbereitungs-App für die Ausbilder-Eignungsverordnung. Sie bündelt über 700 Fragen, Erklärungen, thematische Auswertungen und eine 90-minütige Trainingssimulation in einer deutschsprachigen iOS App.',
          'Die App ist eine Lernhilfe und kein offizielles Angebot der IHK. Verbindliche Angaben zu Anmeldung, Prüfungstermin, Gebühren und Durchführung erhältst du immer bei deiner zuständigen Kammer oder Stelle.',
        ],
      },
      {
        title: 'Für wen eignet sich die AEVO App?',
        body: [
          'Die App richtet sich an angehende Ausbilderinnen und Ausbilder, Teilnehmende an AdA-Kursen und alle, die für AEVO, ADA-Schein oder Ausbilderschein flexibel üben möchten. Sie eignet sich besonders für kurze tägliche Lernphasen und gezielte Wiederholungen.',
          'Wer ausschließlich offizielle Termin- oder Zulassungsinformationen sucht, sollte direkt die zuständige Kammer aufrufen. AEVO Ada konzentriert sich auf das Lernen und Trainieren der Inhalte.',
        ],
        bullets: [
          'Vorbereitung auf die schriftlichen AEVO-Inhalte',
          'Wiederholung nach allen vier Handlungsfeldern',
          'Fehleranalyse mit Erklärungen',
          'Mobiles Lernen auf iPhone und iPad',
        ],
      },
      {
        title: 'Was bietet AEVO Ada konkret?',
        body: [
          'Die App enthält mehr als 700 prüfungsnahe Fragen. Nach einer Antwort helfen Erklärungen dabei, nicht nur die Lösung, sondern auch den fachlichen Zusammenhang zu verstehen. Statistiken zeigen, welche Themen bereits sicher sitzen und wo Wiederholung sinnvoll ist.',
          'Die 90-Minuten-Simulation ist ein fokussiertes Training unter Zeitdruck. Sie ist nicht mit der in der AEVO geregelten Dauer des offiziellen schriftlichen Prüfungsteils gleichzusetzen; dieser soll nach § 4 AusbEignV drei Stunden dauern.',
        ],
      },
      {
        title: 'Woran erkennst du eine passende AEVO Lern-App?',
        body: [
          'Eine gute AEVO App sollte alle vier Handlungsfelder abdecken, Antworten erklären, Lernfortschritt sichtbar machen und klar zwischen eigener Lernhilfe und offiziellen Prüfungsinformationen unterscheiden.',
          'Prüfe außerdem Plattform, Aktualität, Datenschutz und Kostenmodell. AEVO Ada ist aktuell für iPhone und iPad verfügbar, kann kostenlos getestet werden und bietet optionale In-App-Käufe.',
        ],
        bullets: [
          'Abdeckung der vier AEVO-Handlungsfelder',
          'Erklärungen statt reiner Lösungsschlüssel',
          'Transparente Anbieter- und IHK-Abgrenzung',
          'Nachvollziehbare Plattform- und Preisangaben',
        ],
      },
      {
        title: 'AEVO, ADA und Ausbilderschein: warum diese Begriffe zusammengehören',
        body: [
          'AEVO bezeichnet die Ausbilder-Eignungsverordnung. ADA steht für Ausbildung der Ausbilder. ADA-Schein und Ausbilderschein sind gebräuchliche Bezeichnungen für den Nachweis der berufs- und arbeitspädagogischen Eignung.',
          'Darum ist AEVO Ada für Suchanfragen wie AEVO App, IHK AEVO App, ADA-Schein App, Ausbilderschein App, Ausbildereignung oder Ausbilder lernen relevant. Die Begriffe beschreiben unterschiedliche Perspektiven auf denselben Vorbereitungskontext.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Welche AEVO App eignet sich zur Prüfungsvorbereitung?',
        answer:
          'AEVO Ada eignet sich für Lernende, die auf iPhone oder iPad mit 700+ Fragen, Erklärungen, Fortschrittsauswertung und einer 90-Minuten-Trainingssimulation üben möchten. Die App ist unabhängig und keine offizielle IHK App.',
      },
      {
        question: 'Ist AEVO Ada eine offizielle IHK AEVO App?',
        answer:
          'Nein. AEVO Ada ist eine unabhängige Lern-App und steht in keiner offiziellen Verbindung zur IHK oder anderen Kammern. Offizielle Angaben zu Anmeldung, Terminen und Prüfungsdurchführung kommen von der zuständigen Stelle.',
      },
      {
        question: 'Hilft die App auch für ADA-Schein und Ausbilderschein?',
        answer:
          'Ja. ADA-Schein und Ausbilderschein sind gebräuchliche Begriffe im Umfeld des Nachweises der Ausbildereignung. AEVO Ada trainiert die Inhalte der vier Handlungsfelder der Ausbilder-Eignungsverordnung.',
      },
      {
        question: 'Auf welchen Geräten ist AEVO Ada verfügbar?',
        answer:
          'AEVO Ada ist derzeit im Apple App Store für iPhone und iPad verfügbar. Eine Android-Version wird auf der Website als geplant ausgewiesen.',
      },
    ],
    ctaTitle: 'AEVO Ada auf iPhone oder iPad testen',
    ctaText:
      'Starte kostenlos mit Fragen und Erklärungen. Zusätzliche Inhalte und Funktionen sind über optionale In-App-Käufe verfügbar.',
    relatedLinks: [
      {
        href: '/ios-app/',
        label: 'AEVO Ada iOS App',
        desc: 'Geräte, Funktionen und Download im Überblick.',
      },
      {
        href: '/aevo-pruefung/',
        label: 'AEVO Prüfung',
        desc: 'Offiziellen Prüfungsrahmen und Handlungsfelder verstehen.',
      },
      {
        href: '/ausbilderschein-ada-schein/',
        label: 'ADA-Schein und Ausbilderschein',
        desc: 'Die wichtigsten Begriffe sauber unterscheiden.',
      },
      {
        href: '/aevo-pruefungsvorbereitung/',
        label: 'AEVO Prüfungsvorbereitung',
        desc: 'Lernplan, Wiederholung und Tests strukturieren.',
      },
    ],
    disclaimer:
      'Stand: 8. Oktober 2026. Produktangaben basieren auf der aktuellen Website und dem Apple-App-Store-Eintrag. AEVO Ada ist unabhängig und nicht mit der IHK verbunden.',
  },
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
        href: '/aevo-praktische-pruefung/',
        label: 'AEVO praktische Prüfung',
        desc: 'Präsentation, Durchführung und Fachgespräch vorbereiten.',
      },
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
    slug: 'aevo-praktische-pruefung',
    title: 'AEVO praktische Prüfung: Präsentation & Fachgespräch | AEVO Ada',
    description:
      'AEVO praktische Prüfung vorbereiten: Ablauf, 15-Minuten-Präsentation, praktische Durchführung, Fachgespräch, Themenwahl und Checkliste verständlich erklärt.',
    keywords:
      'AEVO praktische Prüfung, AEVO Präsentation, AEVO Fachgespräch, AEVO Unterweisung, praktische Ausbildereignungsprüfung, ADA praktische Prüfung',
    eyebrow: 'Praktischer Prüfungsteil',
    h1: 'AEVO praktische Prüfung: Präsentation und Fachgespräch vorbereiten',
    intro:
      'Im praktischen Teil zeigst du, wie du eine berufstypische Ausbildungssituation planst, gestaltest und fachlich begründest. Dieser Leitfaden verbindet den gesetzlichen Rahmen mit einer konkreten Vorbereitung.',
    publishedDate: '2026-10-30',
    updatedDate: '2026-10-30',
    heroPoints: [
      'Präsentation oder praktische Durchführung sinnvoll auswählen',
      'Lernziel, Methode und Lernerfolg nachvollziehbar begründen',
      'Fachgespräch mit typischen Begründungsfragen vorbereiten',
    ],
    sections: [
      {
        title: 'Kurzantwort: Wie läuft die praktische AEVO Prüfung ab?',
        body: [
          'Nach § 4 Ausbilder-Eignungsverordnung besteht der praktische Teil aus der Präsentation einer berufstypischen Ausbildungssituation und einem Fachgespräch. Beides dauert zusammen höchstens 30 Minuten; die Präsentation soll 15 Minuten nicht überschreiten. Anstelle der Präsentation kann die Ausbildungssituation praktisch durchgeführt werden.',
          'Die genaue Organisation, einzureichende Unterlagen und örtlichen Vorgaben legt die zuständige Stelle fest. Prüfe deshalb zusätzlich immer die aktuelle Einladung und die Hinweise deiner Kammer.',
        ],
      },
      {
        title: 'Präsentation oder praktische Durchführung?',
        body: [
          'Bei einer Präsentation erklärst du dem Prüfungsausschuss, wie du eine konkrete Ausbildungssituation gestalten würdest. Das eignet sich, wenn du Planung, Zielgruppe, Methode, Ablauf und Lernkontrolle übersichtlich mit Medien darstellen kannst.',
          'Bei der praktischen Durchführung zeigst du die Ausbildungssituation unmittelbar. Diese Form kann sinnvoll sein, wenn sich ein klar abgegrenzter Lernschritt sicher, anschaulich und innerhalb der verfügbaren Zeit vermitteln lässt. Entscheidend ist nicht die spektakulärste Methode, sondern eine begründete, zur Zielgruppe und zum Lernziel passende Entscheidung.',
        ],
        bullets: [
          'Präsentation: Planung und didaktische Entscheidungen strukturiert erläutern',
          'Durchführung: Lernprozess in einer konkreten Situation sichtbar machen',
          'Beide Wege: Lernziel, Zielgruppe, Methode und Erfolgskontrolle begründen',
          'Örtliche Vorgaben der zuständigen Stelle vorab prüfen',
        ],
      },
      {
        title: 'So wählst du eine geeignete Ausbildungssituation',
        body: [
          'Wähle eine berufstypische Situation mit einem klaren, realistischen Lernziel. Der geplante Lernschritt sollte zur Vorerfahrung der auszubildenden Person passen und in der vorgesehenen Zeit nachvollziehbar bearbeitet werden können.',
          'Beschreibe nicht nur, was gelernt werden soll, sondern auch, woran du den Lernerfolg erkennst. Berücksichtige außerdem Arbeitssicherheit, benötigte Materialien, mögliche Fehler und eine passende Form der Rückmeldung.',
        ],
        bullets: [
          'Ausgangssituation und Zielgruppe konkret benennen',
          'Feinlernziel beobachtbar und überprüfbar formulieren',
          'Methode aus Lernziel und Lernvoraussetzungen ableiten',
          'Lernerfolg und Transfer in den Arbeitsalltag prüfen',
        ],
      },
      {
        title: 'Auf das Fachgespräch vorbereiten',
        body: [
          'Im Fachgespräch erläuterst du die Auswahl und Gestaltung deiner Ausbildungssituation. Bereite dich darauf vor, nicht nur deinen Ablauf zu beschreiben, sondern Alternativen abzuwägen und deine Entscheidungen fachlich zu begründen.',
          'Übe kurze Antworten auf Fragen wie: Warum passt diese Methode zur Zielgruppe? Wie gehst du mit unterschiedlichen Vorkenntnissen um? Wie stellst du Arbeitssicherheit sicher? Wie reagierst du auf einen Fehler? Welche andere Methode wäre möglich und warum hast du sie nicht gewählt?',
        ],
        bullets: [
          'Didaktische Entscheidung mit Lernziel und Zielgruppe verknüpfen',
          'Methodische Alternativen nennen und abwägen',
          'Motivation, Feedback und Lernkontrolle erklären',
          'Rechtliche und sicherheitsrelevante Aspekte einordnen',
        ],
      },
      {
        title: 'Checkliste für die letzten sieben Tage',
        body: [
          'Probiere deinen vollständigen Ablauf mehrmals unter realistischen Zeitbedingungen. Bitte eine andere Person, Verständnisfragen zu stellen und unklare Übergänge zu markieren. Kürze alles, was nicht direkt zum Lernziel oder zur Begründung beiträgt.',
          'Kontrolliere am Vortag deine Unterlagen, Medien und gegebenenfalls benötigten Materialien. Plane außerdem eine einfache Alternative ein, falls Technik oder ein Hilfsmittel ausfällt.',
        ],
        bullets: [
          'Ablauf laut und mit Stoppuhr proben',
          'Lernziel und Erfolgskontrolle in einem Satz erklären können',
          'Fünf typische Fachgesprächsfragen beantworten',
          'Unterlagen, Technik und Plan B prüfen',
        ],
      },
      {
        title: 'Wie AEVO Ada die Vorbereitung ergänzt',
        body: [
          'AEVO Ada trainiert vor allem das Fachwissen aus den vier Handlungsfeldern mit Fragen, Erklärungen und Lernstatistiken. Dieses Wissen hilft dir, Entscheidungen im Fachgespräch sicherer einzuordnen.',
          'Die praktische Prüfung solltest du zusätzlich mit einer eigenen Ausbildungssituation, realistischen Probeläufen und den konkreten Vorgaben deiner zuständigen Stelle vorbereiten.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Wie lange dauert die praktische AEVO Prüfung?',
        answer:
          'Präsentation und Fachgespräch dauern nach § 4 AusbEignV zusammen höchstens 30 Minuten. Die Präsentation soll 15 Minuten nicht überschreiten. Für Landwirtschaft und Hauswirtschaft gelten besondere Regelungen.',
      },
      {
        question: 'Muss ich präsentieren oder kann ich eine Unterweisung durchführen?',
        answer:
          'Anstelle der Präsentation kann eine Ausbildungssituation praktisch durchgeführt werden. Welche organisatorischen Vorgaben gelten, solltest du in den aktuellen Hinweisen deiner zuständigen Stelle prüfen.',
      },
      {
        question: 'Was wird im Fachgespräch gefragt?',
        answer:
          'Im Fachgespräch erläuterst du Auswahl und Gestaltung der Ausbildungssituation. Typisch sind Fragen zu Lernziel, Zielgruppe, Methodenwahl, Alternativen, Motivation, Lernkontrolle, Arbeitssicherheit und dem Umgang mit Schwierigkeiten.',
      },
      {
        question: 'Reicht die App allein für die praktische Prüfung?',
        answer:
          'Nein. AEVO Ada stärkt das Fachwissen für die vier Handlungsfelder. Für den praktischen Teil brauchst du zusätzlich eine eigene Ausbildungssituation, Probeläufe und die Vorgaben deiner zuständigen Stelle.',
      },
    ],
    ctaTitle: 'Fachwissen für das Fachgespräch festigen',
    ctaText:
      'Trainiere die vier AEVO-Handlungsfelder mit Fragen, Erklärungen und Fortschrittsauswertung auf iPhone und iPad.',
    relatedLinks: [
      {
        href: '/aevo-pruefung/',
        label: 'AEVO Prüfung im Überblick',
        desc: 'Schriftlichen und praktischen Prüfungsteil einordnen.',
      },
      {
        href: '/aevo-pruefungsvorbereitung/',
        label: 'AEVO Prüfungsvorbereitung',
        desc: 'Lernplan, Wiederholung und Testmodus strukturieren.',
      },
      {
        href: '/aevo-pruefungsfragen/',
        label: 'AEVO Prüfungsfragen',
        desc: 'Fachwissen mit Fragen und Erklärungen festigen.',
      },
      {
        href: '/aevo-unterweisung-themen-beispiele/',
        label: 'Unterweisung: Themen und Beispiele',
        desc: 'Feinlernziel, Methode und Thema konkret auswählen.',
      },
      {
        href: '/ausbilderschein-ada-schein/',
        label: 'ADA-Schein und Ausbilderschein',
        desc: 'Begriffe und Nachweis der Ausbildereignung verstehen.',
      },
    ],
    disclaimer:
      'Stand: 30. Oktober 2026. Maßgeblich sind die Ausbilder-Eignungsverordnung und die aktuellen organisatorischen Vorgaben deiner zuständigen Stelle.',
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
        href: '/aevo-online/',
        label: 'AEVO online',
        desc: 'Digital lernen mit App, Fragen und Simulation.',
      },
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
        href: '/aevo-lernplan-4-wochen/',
        label: 'AEVO Lernplan für 4 Wochen',
        desc: 'Lerneinheiten und Simulation konkret terminieren.',
      },
      {
        href: '/aevo-ihk/',
        label: 'AEVO IHK',
        desc: 'IHK-Bezug und Prüfungsvorbereitung einordnen.',
      },
    ],
  },
  {
    slug: 'aevo-online',
    title: 'AEVO online lernen: digitale Prüfungsvorbereitung | AEVO Ada',
    description:
      'AEVO online lernen mit AEVO Ada: digitale Prüfungsvorbereitung, App, Lernplan, Prüfungsfragen, Testmodus und Simulation für angehende Ausbilder.',
    keywords:
      'AEVO online, AEVO digital, AEVO Prüfungsvorbereitung online, digitale AEVO Prüfungsvorbereitung, AEVO App, Ausbilderschein online, ADA Schein online machen',
    eyebrow: 'Digital lernen',
    h1: 'AEVO online lernen: digitale Prüfungsvorbereitung mit App',
    intro:
      'Wenn du AEVO online lernen möchtest, brauchst du mehr als lose Fragen: ein klares System aus Lernplan, Wiederholung, Testmodus und realistischen Prüfungssimulationen.',
    updatedDate: '2026-06-25',
    heroPoints: [
      'Digitale AEVO Prüfungsvorbereitung für kurze Lernphasen',
      'Prüfungsfragen, Erklärungen und Simulation in einer App',
      'Für iOS verfügbar, Android-Version demnächst verfügbar',
    ],
    sections: [
      {
        title: 'Was bedeutet AEVO online lernen?',
        body: [
          'AEVO online lernen bedeutet, dass du die Inhalte der Ausbilder-Eignungsverordnung flexibel und digital vorbereitest. Wichtig ist dabei nicht nur der Zugriff auf Fragen, sondern ein nachvollziehbarer Lernweg.',
          'AEVO Ada verbindet prüfungsnahe Fragen, Erklärungen, Wiederholung und Simulation. So kannst du auch kurze freie Momente nutzen, ohne den Überblick über deinen Fortschritt zu verlieren.',
        ],
      },
      {
        title: 'Digitale AEVO Prüfungsvorbereitung statt zufälligem Pauken',
        body: [
          'Eine digitale Vorbereitung ist dann stark, wenn sie Struktur schafft. Du solltest erkennen können, welche Handlungsfelder gut laufen, wo Fehler entstehen und welche Themen du gezielt wiederholen musst.',
          'Gerade bei der AEVO Prüfung hilft ein Wechsel aus thematischem Lernen, Wiederholung falscher Antworten und regelmäßigen Tests. So trainierst du nicht nur Wissen, sondern auch Prüfungssicherheit.',
        ],
        bullets: [
          'Fragen nach Handlungsfeld üben',
          'Erklärungen direkt nach der Antwort lesen',
          'Schwierige Fragen gezielt wiederholen',
          'Regelmäßig Testmodus und Simulation nutzen',
        ],
      },
      {
        title: 'Ausbilderschein online vorbereiten',
        body: [
          'Wer nach Ausbilderschein online oder ADA-Schein online machen sucht, meint oft die flexible Vorbereitung auf die AEVO Inhalte. Die eigentliche Anmeldung, Prüfung und Anerkennung laufen weiterhin über die zuständige Stelle.',
          'Online lernen kann dir helfen, die Theorie planbar aufzubauen und deinen Lernstand realistisch einzuschätzen. Prüfe zusätzlich immer die aktuellen Vorgaben deiner Kammer, besonders für Termine, Gebühren und den praktischen Prüfungsteil.',
        ],
      },
      {
        title: 'Warum eine App für AEVO online sinnvoll ist',
        body: [
          'Eine AEVO App passt besonders gut zu kurzen, wiederkehrenden Lerneinheiten. Statt lange Unterlagen nur einmal durchzuarbeiten, kannst du Fragen mehrfach beantworten, Fehler analysieren und deinen Fortschritt verfolgen.',
          'AEVO Ada ist ein unabhängiges Lernangebot für angehende Ausbilder. Die App ersetzt keine offiziellen Informationen der Kammern, unterstützt dich aber bei der inhaltlichen Vorbereitung.',
        ],
      },
    ],
    ctaTitle: 'AEVO online mit App vorbereiten',
    ctaText:
      'Starte mit AEVO Ada auf iPhone oder iPad und lerne digital mit Fragen, Erklärungen, Statistik und Simulation. Die Android-Version ist demnächst verfügbar.',
    relatedLinks: [
      {
        href: '/aevo-pruefungsvorbereitung/',
        label: 'AEVO Prüfungsvorbereitung',
        desc: 'Lernplan, Test und Wiederholungssystem.',
      },
      {
        href: '/aevo-pruefungsfragen/',
        label: 'AEVO Prüfungsfragen',
        desc: 'Fragetypen und Simulation verstehen.',
      },
      {
        href: '/ausbilderschein-ada-schein/',
        label: 'Ausbilderschein online',
        desc: 'ADA-Schein und Ausbilderschein einordnen.',
      },
      {
        href: '/aevo-ihk/',
        label: 'AEVO IHK',
        desc: 'IHK-Bezug ohne offizielle Zugehörigkeit.',
      },
    ],
    disclaimer:
      'AEVO Ada ist ein unabhängiges Lernangebot und steht in keiner offiziellen Verbindung zur IHK oder anderen Kammern.',
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
        href: '/aevo-online/',
        label: 'AEVO online lernen',
        desc: 'Digitale Vorbereitung mit App und Testmodus.',
      },
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
        href: '/aevo-online/',
        label: 'AEVO online',
        desc: 'Digitale Prüfungsvorbereitung mit AEVO Ada.',
      },
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
    title: 'ADA-Schein oder Ausbilderschein: Unterschied erklärt | AEVO Ada',
    description:
      'ADA-Schein oder Ausbilderschein? Erfahre den Unterschied, was die AEVO Prüfung damit zu tun hat und wie du dich online vorbereitest.',
    keywords:
      'Ausbilderschein, Ausbilderschein online, IHK Ausbilderschein, ADA Schein, ADA-Schein, ADA Schein online machen, AEVO ADA-Schein, AEVO IHK App ADA-Schein',
    eyebrow: 'Begriffe einfach erklärt',
    h1: 'ADA-Schein oder Ausbilderschein: was ist der Unterschied?',
    intro:
      'ADA-Schein, Ausbilderschein und AEVO werden im Alltag oft ähnlich verwendet. Gemeint ist meist der Nachweis der berufs- und arbeitspädagogischen Eignung, den du für die Ausbilderrolle brauchst.',
    updatedDate: '2026-06-25',
    heroPoints: [
      'ADA-Schein und Ausbilderschein verständlich einordnen',
      'AEVO als Grundlage der Vorbereitung verstehen',
      'Mit App-Fragen gezielt für den Nachweis lernen',
    ],
    sections: [
      {
        title: 'Kurz gesagt: ADA-Schein und Ausbilderschein meinen meist dasselbe',
        body: [
          'Wenn Menschen vom ADA-Schein oder Ausbilderschein sprechen, meinen sie in der Regel den Nachweis der Ausbildereignung nach der Ausbilder-Eignungsverordnung. Der Begriff ADA kommt von Ausbildung der Ausbilder.',
          'Streng genommen ist AEVO die rechtliche Grundlage und die Prüfung weist deine berufs- und arbeitspädagogische Eignung nach. ADA-Schein und Ausbilderschein sind dagegen geläufige Begriffe aus der Alltagssprache.',
        ],
        bullets: [
          'AEVO: rechtlicher Rahmen der Ausbildereignung',
          'ADA-Schein: umgangssprachlicher Begriff für den Nachweis',
          'Ausbilderschein: ebenfalls geläufige Bezeichnung',
          'IHK Ausbilderschein: häufige Suche nach Prüfung über die zuständige Kammer',
        ],
      },
      {
        title: 'Was ist der ADA-Schein?',
        body: [
          'ADA steht für Ausbildung der Ausbilder. Der Begriff ADA-Schein wird häufig umgangssprachlich für den Nachweis der Ausbildereignung verwendet.',
          'In der Praxis geht es darum, dass du zeigen kannst, wie du Ausbildung planst, vorbereitest, durchführst und abschließt. Genau diese Themen werden in den vier AEVO-Handlungsfeldern abgebildet.',
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
        title: 'Was ist der Unterschied zur AEVO Prüfung?',
        body: [
          'Die AEVO Prüfung ist der Prüfungsvorgang. Der ADA-Schein oder Ausbilderschein ist das, wonach viele Menschen suchen, wenn sie den bestandenen Nachweis meinen. Deshalb tauchen die Begriffe oft gemeinsam auf.',
          'Für deine Vorbereitung ist entscheidend, dass du die Inhalte der AEVO lernst: rechtliche Grundlagen, Ausbildungsplanung, Lernmethoden, Motivation, Beurteilung und Abschluss der Ausbildung.',
        ],
      },
      {
        title: 'Reicht der Ausbilderschein allein aus?',
        body: [
          'Der Nachweis der berufs- und arbeitspädagogischen Eignung ist wichtig, aber nicht immer die einzige Voraussetzung. Je nach Betrieb, Beruf und zuständiger Stelle können fachliche, persönliche oder organisatorische Anforderungen zusätzlich relevant sein.',
          'Prüfe deshalb immer die offiziellen Informationen deiner zuständigen Kammer oder Stelle. AEVO Ada unterstützt dich bei der Lernvorbereitung, ersetzt aber keine verbindliche Rechts- oder Prüfungsberatung.',
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
      {
        title: 'Welche Begriffe solltest du bei der Suche kennen?',
        body: [
          'Je nach Region, Anbieter oder Kammer begegnen dir unterschiedliche Formulierungen. Für Google und für deine eigene Recherche ist hilfreich, die Begriffe auseinanderhalten zu können, ohne dich davon verwirren zu lassen.',
          'Wenn du Lernmaterial suchst, sind AEVO Prüfung, AEVO Prüfungsvorbereitung, ADA-Schein, Ausbilderschein und IHK Ausbilderschein meist eng miteinander verbunden. Achte trotzdem darauf, ob eine Quelle Lernhilfe, Kursanbieter oder offizielle Prüfungsinformation ist.',
        ],
        bullets: [
          'AEVO Prüfung: Ablauf und Prüfungsteile',
          'AEVO Prüfungsvorbereitung: Lernplan, Fragen und Simulation',
          'ADA-Schein: umgangssprachlich für den Nachweis',
          'Ausbilderschein online: flexible digitale Vorbereitung',
        ],
      },
    ],
    ctaTitle: 'Für ADA-Schein und Ausbilderschein üben',
    ctaText:
      'Bereite dich mit AEVO Ada auf die AEVO Inhalte vor. Die App ist für iOS verfügbar; Android-Version demnächst verfügbar.',
    relatedLinks: [
      {
        href: '/aevo-online/',
        label: 'Ausbilderschein online',
        desc: 'Online und digital für die AEVO Inhalte lernen.',
      },
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
      {
        href: '/ausbilderschein-kosten-dauer-gueltigkeit/',
        label: 'Kosten, Dauer und Gültigkeit',
        desc: 'Budget, Zeitaufwand und Gültigkeit einordnen.',
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
  {
    slug: 'ausbilderschein-kosten-dauer-gueltigkeit',
    title: 'Ausbilderschein: Kosten, Dauer & Gültigkeit | AEVO Ada',
    description:
      'Was kostet der Ausbilderschein, wie lange dauert die Vorbereitung und wie lange ist er gültig? Gebühren, Zeitbedarf und Voraussetzungen verständlich erklärt.',
    keywords:
      'Ausbilderschein Kosten, AEVO Prüfung Kosten, ADA Schein Kosten, Ausbilderschein Dauer, Ausbilderschein Gültigkeit, AEVO Kurs Kosten',
    eyebrow: 'Kosten und Zeitaufwand',
    h1: 'Ausbilderschein: Kosten, Dauer und Gültigkeit im Überblick',
    intro:
      'Für den Ausbilderschein gibt es keinen bundesweit einheitlichen Gesamtpreis. Prüfung, Vorbereitung und Lernmaterial werden getrennt kalkuliert; die bestandene AEVO-Prüfung ist grundsätzlich unbefristet gültig.',
    publishedDate: '2026-11-02',
    updatedDate: '2026-11-02',
    heroPoints: [
      'Prüfungsgebühr und Vorbereitung getrennt betrachten',
      'Zeitaufwand passend zu Vorwissen und Lernform planen',
      'Unbefristeter Nachweis, aber weitere Eignungsvoraussetzungen beachten',
    ],
    sections: [
      {
        title: 'Kurzantwort: Was kostet der Ausbilderschein?',
        body: [
          'Einen einheitlichen Preis für den Ausbilderschein gibt es nicht. Deine Gesamtkosten setzen sich typischerweise aus der Gebühr der zuständigen Kammer, einem optionalen Vorbereitungskurs, Lernmaterialien und gegebenenfalls Fahrt- oder Übernachtungskosten zusammen.',
          'Die Gebühren unterscheiden sich nach Kammer und Anbieter. Als konkretes Beispiel nennt die IHK Nord Westfalen mit Stand Juli 2026 eine Prüfungsgebühr von 234 Euro und für ihren Vorbereitungskurs 585 Euro zusätzlich. Dieses Beispiel ist keine bundesweite Preisliste: Prüfe den aktuellen Gebührentarif deiner zuständigen Stelle, bevor du dich anmeldest.',
        ],
      },
      {
        title: 'Welche Kostenblöcke solltest du einplanen?',
        body: [
          'Vergleiche Angebote nicht nur anhand des Kurspreises. Entscheidend ist, welche Leistungen enthalten sind: Unterricht, Skripte, Betreuung für den praktischen Teil, Probedurchläufe oder digitale Übungen können separat berechnet werden.',
          'Frage außerdem frühzeitig, ob dein Arbeitgeber die Kosten ganz oder teilweise übernimmt. Für Betriebe kann die Qualifizierung eigener Ausbilder ein direktes Interesse sein; einen automatischen Anspruch auf Kostenübernahme gibt es daraus jedoch nicht.',
        ],
        bullets: [
          'Prüfungsgebühr der zuständigen Kammer oder Stelle',
          'Präsenz-, Online- oder Selbstlernkurs',
          'Bücher, App, Skripte und Übungsmaterial',
          'Anfahrt, Übernachtung und Freistellung',
        ],
      },
      {
        title: 'Wie lange dauert der Weg zum Ausbilderschein?',
        body: [
          'Die Vorbereitungsdauer ist nicht gesetzlich als feste Kurslänge vorgeschrieben. Sie hängt von deinem Vorwissen, deiner Lernform, dem nächsten Prüfungstermin und der Zeit ab, die du pro Woche investieren kannst. Kompaktkurse bündeln den Stoff in wenigen Tagen; berufsbegleitende Angebote verteilen ihn häufig über mehrere Wochen.',
          'Plane neben der Theorie eigene Zeit für Übungsfragen und die praktische Prüfung ein. Ein vierwöchiger Lernplan kann bei soliden Vorkenntnissen funktionieren; wenn rechtliche und pädagogische Grundlagen neu sind, ist ein größerer Puffer meist sinnvoller.',
        ],
      },
      {
        title: 'Wie lange dauert die AEVO-Prüfung selbst?',
        body: [
          'Nach § 4 Ausbilder-Eignungsverordnung soll der schriftliche Prüfungsteil drei Stunden dauern. Er umfasst fallbezogene Aufgaben aus allen vier Handlungsfeldern.',
          'Der praktische Teil besteht aus der Präsentation einer berufstypischen Ausbildungssituation und einem Fachgespräch und dauert zusammen höchstens 30 Minuten. Die Präsentation soll 15 Minuten nicht überschreiten; an ihrer Stelle kann eine Ausbildungssituation praktisch durchgeführt werden.',
        ],
        bullets: [
          'Schriftlicher Teil: laut Verordnung drei Stunden',
          'Praktischer Teil: insgesamt höchstens 30 Minuten',
          'Präsentation: höchstens 15 Minuten',
          'Konkrete Organisation: Hinweise der zuständigen Stelle prüfen',
        ],
      },
      {
        title: 'Ist der Ausbilderschein unbegrenzt gültig?',
        body: [
          'Der bestandene Nachweis der berufs- und arbeitspädagogischen Eignung ist grundsätzlich unbefristet gültig und muss üblicherweise nicht verlängert werden. Bewahre das Prüfungszeugnis deshalb dauerhaft auf.',
          'Der Nachweis allein berechtigt dich aber nicht automatisch, in jedem Betrieb und jedem Beruf auszubilden. Zusätzlich müssen unter anderem persönliche und fachliche Eignung sowie die Eignung der Ausbildungsstätte vorliegen. Die zuständige Kammer berät und prüft den konkreten Einzelfall.',
        ],
      },
      {
        title: 'So vergleichst du Kursangebote sinnvoll',
        body: [
          'Wähle die Lernform nach deinem Alltag und nicht allein nach dem niedrigsten Preis. Ein günstiger Selbstlernkurs kann gut passen, wenn du strukturiert und eigenständig lernst. Wer Rückmeldung zur Präsentation oder praktische Probeläufe braucht, profitiert eher von persönlicher Betreuung.',
          'Lass dir vor der Buchung den Leistungsumfang, mögliche Zusatzkosten, Stornobedingungen und die Unterstützung für den praktischen Teil schriftlich nennen. Die Prüfungsanmeldung erfolgt je nach Angebot separat oder wird organisatorisch begleitet.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Wie viel kostet der Ausbilderschein insgesamt?',
        answer:
          'Es gibt keinen bundesweit einheitlichen Gesamtpreis. Rechne mit der regionalen Prüfungsgebühr sowie – je nach Lernweg – Kosten für Kurs, Lernmaterial und Anreise. Frage deine zuständige Kammer und den Kursanbieter nach einer vollständigen Aufstellung.',
      },
      {
        question: 'Kann ich den Ausbilderschein ohne Kurs machen?',
        answer:
          'Die AEVO schreibt keinen bestimmten Vorbereitungskurs als Prüfungsvoraussetzung vor. Ob Selbststudium für dich sinnvoll ist, hängt von Vorwissen, Lernroutine und der Vorbereitung auf den praktischen Teil ab. Verbindliche Anmeldebedingungen nennt die zuständige Stelle.',
      },
      {
        question: 'Wie lange ist der Ausbilderschein gültig?',
        answer:
          'Der bestandene AEVO-Nachweis ist grundsätzlich unbefristet gültig. Für die tatsächliche Tätigkeit als Ausbilder müssen zusätzlich die persönliche und fachliche Eignung sowie die Eignung des Betriebs erfüllt sein.',
      },
      {
        question: 'Wie lange sollte ich für die Vorbereitung einplanen?',
        answer:
          'Je nach Vorwissen und Lernform reichen die Modelle von kompakten Intensivkursen bis zu mehreren berufsbegleitenden Wochen. Plane neben der Theorie ausreichend Zeit für Übungsfragen, Wiederholung und den praktischen Prüfungsteil ein.',
      },
    ],
    sources: [
      {
        href: 'https://www.ihk.de/nordwestfalen/wirtschaftsspiegel-online/praxis-und-ratgeber/ausbilderschein-aevo-pruefung-ablauf-kosten-7139206',
        label: 'Ausbilderschein: Ablauf, Kosten und Anmeldung',
        publisher: 'IHK Nord Westfalen – Preisbeispiel und Hinweise, Stand Juli 2026',
      },
    ],
    ctaTitle: 'Flexibel und ohne Kursbindung üben',
    ctaText:
      'Ergänze deinen Lernweg mit 700+ Fragen, Erklärungen und Fortschrittsauswertung auf iPhone und iPad.',
    relatedLinks: [
      {
        href: '/ausbilderschein-ada-schein/',
        label: 'ADA-Schein und Ausbilderschein',
        desc: 'Begriffe und Nachweis richtig einordnen.',
      },
      {
        href: '/aevo-lernplan-4-wochen/',
        label: 'AEVO Lernplan für 4 Wochen',
        desc: 'Die verfügbare Zeit konkret aufteilen.',
      },
      {
        href: '/aevo-pruefung/',
        label: 'AEVO Prüfung',
        desc: 'Ablauf und Inhalte beider Prüfungsteile.',
      },
      {
        href: '/aevo-praktische-pruefung/',
        label: 'Praktische AEVO-Prüfung',
        desc: 'Präsentation und Fachgespräch vorbereiten.',
      },
    ],
    disclaimer:
      'Stand: 2. November 2026. Gebühren und organisatorische Vorgaben können sich regional ändern. Verbindlich sind die Angaben deiner zuständigen Kammer oder Stelle.',
  },
  {
    slug: 'aevo-lernplan-4-wochen',
    title: 'AEVO Lernplan: In 4 Wochen zur Prüfung | AEVO Ada',
    description:
      'AEVO Lernplan für vier Wochen: Tagesroutine, Handlungsfelder, Wiederholung, Prüfungssimulation und praktische Prüfung konkret strukturieren.',
    keywords:
      'AEVO Lernplan, AEVO in 4 Wochen, AEVO lernen, AEVO Vorbereitung Zeitplan, Ausbilderschein Lernplan, ADA Prüfung lernen',
    eyebrow: '4-Wochen-Lernplan',
    h1: 'AEVO Lernplan: in 4 Wochen strukturiert zur Prüfung',
    intro:
      'Dieser Vier-Wochen-Plan verbindet die vier Handlungsfelder mit aktiver Wiederholung, Übungsfragen und Probeläufen. Passe den Umfang an dein Vorwissen und deinen tatsächlichen Prüfungstermin an.',
    publishedDate: '2026-11-02',
    updatedDate: '2026-11-02',
    heroPoints: [
      '30 bis 60 Minuten an fünf Lerntagen pro Woche',
      'Jede Woche Wissen aufbauen und aktiv testen',
      'Praktischen Teil von Anfang an parallel vorbereiten',
    ],
    sections: [
      {
        title: 'Kurzantwort: Wie lerne ich in vier Wochen für AEVO?',
        body: [
          'Plane fünf Lerneinheiten pro Woche mit jeweils etwa 30 bis 60 Minuten. Nutze die ersten beiden Wochen für Grundlagen und Handlungsfelder, die dritte für Anwendung und Fehleranalyse und die vierte für Simulation, Wiederholung und den praktischen Teil.',
          'Vier Wochen sind kein garantierter Zeitraum für jede Person. Wenn dir rechtliche Grundlagen, Ausbildungspraxis oder didaktische Begriffe noch völlig neu sind, beginne früher oder erhöhe den Umfang behutsam. Entscheidend ist, ob du Inhalte erklären und auf Situationen anwenden kannst – nicht nur, ob du alle Seiten gelesen hast.',
        ],
      },
      {
        title: 'Vor dem Start: Lernstand in 30 Minuten prüfen',
        body: [
          'Mache zuerst einen gemischten Test ohne Hilfsmittel. Markiere jede Antwort nicht nur als richtig oder falsch, sondern zusätzlich als sicher, unsicher oder geraten. So erkennst du Wissenslücken, die eine reine Punktzahl verdeckt.',
          'Lege danach feste Lernzeiten, einen Ort und ein einfaches Fehlerprotokoll fest. Notiere pro Fehler den Themenbereich, die Ursache und einen Merksatz. Diese Liste wird in Woche drei und vier zu deinem wichtigsten Wiederholungsplan.',
        ],
        bullets: [
          'Ausgangstest mit allen vier Handlungsfeldern',
          'Fehler nach Wissen, Lesen oder Anwendung unterscheiden',
          'Fünf feste Lernfenster im Kalender reservieren',
          'Thema für den praktischen Teil grob auswählen',
        ],
      },
      {
        title: 'Woche 1: Voraussetzungen prüfen und Ausbildung vorbereiten',
        body: [
          'Starte mit Handlungsfeld 1 und 2. Ordne Ausbildungsordnung, Ausbildungsrahmenplan, betriebliche Planung, Auswahl von Auszubildenden und Ausbildungsvertrag in einen gemeinsamen Ablauf ein. Ziel ist ein verständliches Gesamtbild statt einer Sammlung isolierter Begriffe.',
          'Beende jede Einheit mit zehn bis zwanzig Fragen. Lies die Erklärungen auch bei richtigen Antworten, wenn du geraten hast. Formuliere am fünften Lerntag eine eigene Zusammenfassung und wiederhole anschließend nur die noch unsicheren Themen.',
        ],
        bullets: [
          'Tag 1: Überblick und Handlungsfeld 1',
          'Tag 2: rechtliche und betriebliche Voraussetzungen',
          'Tag 3: Handlungsfeld 2 und Ausbildungsplanung',
          'Tag 4: Auswahl, Vertrag und beteiligte Stellen',
          'Tag 5: gemischter Test und Fehlerprotokoll',
        ],
      },
      {
        title: 'Woche 2: Ausbildung durchführen und abschließen',
        body: [
          'Widme den größten Teil der Woche Handlungsfeld 3: Lernziele, Methodenwahl, Motivation, Feedback, Konflikte, Beurteilung und Förderung. Übe an konkreten Situationen, weil du in der Prüfung Entscheidungen begründen musst.',
          'Bearbeite anschließend Handlungsfeld 4 mit Prüfungsvorbereitung, Zeugnissen und Abschluss der Ausbildung. Entwickle parallel dein Feinlernziel und die Methode für die praktische Prüfung weiter.',
        ],
        bullets: [
          'Tag 1: Lernziele und Lernvoraussetzungen',
          'Tag 2: Ausbildungsmethoden und Medieneinsatz',
          'Tag 3: Motivation, Feedback und Konflikte',
          'Tag 4: Beurteilung, Prüfung und Abschluss',
          'Tag 5: Fallfragen aus Handlungsfeld 3 und 4',
        ],
      },
      {
        title: 'Woche 3: Anwenden, erklären und Schwächen schließen',
        body: [
          'Wechsle jetzt von Stoffaufnahme zu aktiver Anwendung. Bearbeite gemischte Situationsfragen unter Zeitdruck und erkläre bei jeder unsicheren Aufgabe laut, warum eine Antwort passt und die Alternativen weniger geeignet sind.',
          'Gruppiere dein Fehlerprotokoll nach Ursache. Wissenslücken schließt du mit einer kurzen Wiederholung; Lesefehler mit einer festen Prüfroutine; Anwendungsfehler mit zusätzlichen Fällen. Probiere außerdem deine Präsentation oder Unterweisung erstmals vollständig mit Stoppuhr.',
        ],
      },
      {
        title: 'Woche 4: Simulieren und prüfungsreif werden',
        body: [
          'Führe zu Wochenbeginn eine vollständige Simulation durch und werte sie am selben Tag aus. Wiederhole danach gezielt nur die schwachen Bereiche. Eine zweite Simulation gegen Ende der Woche zeigt, ob deine Korrekturen greifen.',
          'Für den praktischen Teil brauchst du mindestens zwei vollständige Probeläufe mit anschließendem Fachgespräch. Bitte eine andere Person, kritische Warum-Fragen zu Lernziel, Methode, Zielgruppe, Sicherheit und Lernkontrolle zu stellen.',
        ],
        bullets: [
          'Eine vollständige Simulation zu Wochenbeginn',
          'Zwei fokussierte Tage für Schwachstellen',
          'Mindestens zwei praktische Probeläufe',
          'Letzter Tag: leicht wiederholen, Material prüfen, schlafen',
        ],
      },
      {
        title: 'Die tägliche 45-Minuten-Routine',
        body: [
          'Beginne mit fünf Minuten Abruf ohne Unterlagen: Was weißt du noch von gestern? Nutze danach zwanzig Minuten für ein neues oder schwaches Thema und fünfzehn Minuten für Fragen. Die letzten fünf Minuten gehören dem Fehlerprotokoll und dem nächsten konkreten Lernziel.',
          'Wenn du nur zwanzig Minuten hast, streiche nicht die aktive Abfrage. Zehn konzentrierte Fragen mit sauberer Auswertung bringen häufig mehr als passives Lesen ohne Kontrolle. An längeren Tagen kannst du einen zusätzlichen Fall oder einen Abschnitt der praktischen Prüfung bearbeiten.',
        ],
      },
      {
        title: 'Woran erkennst du, dass du prüfungsbereit bist?',
        body: [
          'Eine einzelne gute Punktzahl reicht nicht. Du solltest über mehrere gemischte Tests stabil abschneiden, Antworten begründen und typische Fehlerursachen kennen. Bei neuen Situationen musst du das passende Handlungsfeld und den pädagogischen oder rechtlichen Kern erkennen können.',
          'Für den praktischen Teil solltest du deinen Ablauf innerhalb der Zeit sicher präsentieren, das Lernziel präzise benennen und Alternativen erklären können. Prüfe formale Details immer anhand der aktuellen Einladung deiner zuständigen Stelle.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Reichen vier Wochen für die AEVO-Prüfung?',
        answer:
          'Vier Wochen können bei regelmäßigem Lernen und passenden Vorkenntnissen ausreichen, sind aber keine Garantie. Prüfe deinen Lernstand früh und plane mehr Zeit ein, wenn rechtliche, pädagogische oder praktische Grundlagen neu sind.',
      },
      {
        question: 'Wie viele Stunden pro Woche sollte ich lernen?',
        answer:
          'Als praktikabler Ausgangspunkt dienen fünf Einheiten mit je 30 bis 60 Minuten. Passe den Umfang an Vorwissen und Testresultate an. Aktives Üben und Fehlerauswertung sind wichtiger als eine starre Stundenzahl.',
      },
      {
        question: 'Wann sollte ich mit Prüfungssimulationen beginnen?',
        answer:
          'Nutze kurze Tests von Anfang an. Vollständige Simulationen sind besonders in Woche drei und vier sinnvoll, wenn du die Grundlagen aller vier Handlungsfelder kennst und die Ergebnisse gezielt nacharbeiten kannst.',
      },
      {
        question: 'Wie integriere ich die praktische Prüfung in den Lernplan?',
        answer:
          'Wähle das Thema in der ersten Woche, formuliere in Woche zwei Lernziel und Methode, mache in Woche drei den ersten vollständigen Probelauf und in Woche vier mindestens zwei weitere Proben mit Fachgespräch.',
      },
    ],
    ctaTitle: 'Deinen Lernplan täglich umsetzen',
    ctaText:
      'Nutze Fragen, Erklärungen, Wiederholungen und Simulation, um aus dem Zeitplan eine messbare Lernroutine zu machen.',
    relatedLinks: [
      {
        href: '/aevo-pruefungsvorbereitung/',
        label: 'AEVO Prüfungsvorbereitung',
        desc: 'Lernmethoden und Wiederholungssystem vertiefen.',
      },
      {
        href: '/aevo-pruefungsfragen/',
        label: 'AEVO Prüfungsfragen',
        desc: 'Fragetypen sinnvoll in den Plan einbauen.',
      },
      {
        href: '/aevo-unterweisung-themen-beispiele/',
        label: 'Unterweisung: Themen und Beispiele',
        desc: 'Den praktischen Teil konkret planen.',
      },
      {
        href: '/ausbilderschein-kosten-dauer-gueltigkeit/',
        label: 'Kosten, Dauer und Gültigkeit',
        desc: 'Zeit und Budget für den Ausbilderschein einordnen.',
      },
    ],
    disclaimer:
      'Der Lernplan ist eine Orientierung und keine Bestehensgarantie. Passe Umfang und Reihenfolge an deinen Lernstand sowie die Vorgaben deiner zuständigen Stelle an.',
  },
  {
    slug: 'aevo-unterweisung-themen-beispiele',
    title: 'AEVO Unterweisung: Themen, Beispiele & Auswahl | AEVO Ada',
    description:
      'Thema für die AEVO-Unterweisung finden: 12 Beispiele, Auswahlkriterien, Feinlernziel, Methodenwahl und Checkliste für die praktische Prüfung.',
    keywords:
      'AEVO Unterweisung Themen, AEVO praktische Prüfung Themen, AEVO Unterweisung Beispiele, AdA Unterweisung, AEVO Präsentation Thema, Feinlernziel AEVO',
    eyebrow: 'Themen für die Unterweisung',
    h1: 'AEVO Unterweisung: Themen und Beispiele richtig auswählen',
    intro:
      'Ein gutes Thema ist berufstypisch, klar begrenzt und in der verfügbaren Zeit vermittelbar. Entscheidend sind ein beobachtbares Feinlernziel, die passende Methode und eine nachvollziehbare Lernerfolgskontrolle.',
    publishedDate: '2026-11-02',
    updatedDate: '2026-11-02',
    heroPoints: [
      '12 übertragbare Themenbeispiele aus verschiedenen Berufen',
      'Thema nach Lernziel, Zielgruppe und Zeit auswählen',
      'Methodenwahl und Fachgespräch schlüssig begründen',
    ],
    sections: [
      {
        title: 'Kurzantwort: Welches Thema eignet sich für die AEVO-Unterweisung?',
        body: [
          'Geeignet ist eine konkrete berufstypische Tätigkeit, die zu den Vorkenntnissen der lernenden Person passt und einen sichtbaren Lernerfolg ermöglicht. Das Thema sollte klein genug für die Prüfungszeit sein, aber genügend didaktische Entscheidungen für das Fachgespräch bieten.',
          'Wähle nicht zuerst eine beliebte Methode und suche danach ein Thema. Formuliere zunächst Zielgruppe und Feinlernziel; entscheide anschließend, ob etwa Lehrgespräch, Vier-Stufen-Methode, Leittext oder eine andere Form den Lernprozess am besten unterstützt.',
        ],
      },
      {
        title: 'Fünf Kriterien für ein prüfungstaugliches Thema',
        body: [
          'Ein Thema überzeugt nicht durch besondere Komplexität, sondern durch eine klare didaktische Begründung. Der Prüfungsausschuss muss erkennen können, was die auszubildende Person am Ende selbstständig wissen, erklären oder ausführen kann.',
          'Prüfe außerdem, ob Material und Umgebung sicher handhabbar sind und ob du eine technische Alternative hast. Ein Thema mit hohem Aufbauaufwand oder schwer kontrollierbaren Risiken ist für eine kurze Prüfungssituation oft unnötig anspruchsvoll.',
        ],
        bullets: [
          'Berufstypisch und der Ausbildungsordnung zuordenbar',
          'In der Prüfungszeit realistisch abgrenzbar',
          'Feinlernziel beobachtbar und überprüfbar',
          'Zur Zielgruppe und ihren Vorkenntnissen passend',
          'Sicher, materialseitig beherrschbar und mit Plan B',
        ],
      },
      {
        title: '12 Themenbeispiele aus verschiedenen Berufen',
        body: [
          'Die folgenden Beispiele sind Ausgangspunkte, keine fertigen Prüfungskonzepte. Passe sie an Ausbildungsberuf, Ausbildungsordnung, Ausbildungsstand und örtliche Vorgaben an. Formuliere jeweils nur einen klaren Lernschritt.',
          'Kaufmännisch eignen sich etwa eine Rechnung sachlich prüfen, einen Wareneingang dokumentieren oder ein kundenorientiertes Telefongespräch vorbereiten. In IT-Berufen kommen ein sicheres Passwortkonzept erklären, ein Netzwerkkabel prüfen oder ein Ticket vollständig dokumentieren infrage.',
        ],
        bullets: [
          'Kaufleute: Rechnung prüfen oder Wareneingang erfassen',
          'Einzelhandel: Reklamationsgespräch strukturiert vorbereiten',
          'IT: Support-Ticket vollständig dokumentieren',
          'IT: Netzwerkkabel mit Prüfgerät kontrollieren',
          'Lager: Ware kennzeichnen oder Versandstück sichern',
          'Metall: Messschieber korrekt ablesen und pflegen',
          'Elektro: Sicherheitsregeln einer Tätigkeit zuordnen',
          'Gastronomie: Arbeitsplatz hygienisch vorbereiten',
          'Hotellerie: Gästeanfrage datenschutzgerecht erfassen',
          'Büro: Datenschutzgerechten Aktenversand vorbereiten',
          'Logistik: Lieferdokumente auf Vollständigkeit prüfen',
          'Handwerk: Werkzeug auswählen, prüfen und sicher übergeben',
        ],
      },
      {
        title: 'Vom Thema zum präzisen Feinlernziel',
        body: [
          'Ein Thema wie „Rechnungsprüfung“ ist noch kein Lernziel. Ein überprüfbares Feinlernziel beschreibt, wer was unter welchen Bedingungen und in welcher Qualität tun kann. Beispiel: Die auszubildende Person prüft nach der Unterweisung eine Eingangsrechnung anhand von Bestellung und Lieferschein selbstständig auf sachliche Richtigkeit und dokumentiert Abweichungen fehlerfrei.',
          'Vermeide unklare Verben wie kennen, verstehen oder wissen, wenn du den Erfolg nicht beobachten kannst. Besser sind prüfen, auswählen, erklären, durchführen, dokumentieren oder begründen. Im Fachgespräch kannst du dann zeigen, wie die Lernkontrolle direkt aus dem Ziel folgt.',
        ],
      },
      {
        title: 'Welche Methode passt zu welchem Lernziel?',
        body: [
          'Für eine klar strukturierte praktische Fertigkeit kann die Vier-Stufen-Methode passen: vorbereiten, vormachen und erklären, nachmachen und erklären lassen, selbstständig üben. Sie ist jedoch keine automatische Standardantwort für jedes Thema.',
          'Ein Lehrgespräch eignet sich eher, wenn die lernende Person Vorwissen aktiv einbringen und Zusammenhänge erarbeiten soll. Für komplexere, selbstständige Aufgaben können Leittext, Fallmethode oder Lernauftrag sinnvoll sein. Begründe die Wahl immer aus Lernziel, Zielgruppe, Zeit und Situation.',
        ],
        bullets: [
          'Praktische Fertigkeit: häufig Vier-Stufen-Methode',
          'Zusammenhänge erarbeiten: fragend-entwickelndes Lehrgespräch',
          'Entscheidungen abwägen: Fallmethode',
          'Selbstständiges Planen: Leittext oder Lernauftrag',
        ],
      },
      {
        title: 'Beispiel für einen vollständigen roten Faden',
        body: [
          'Ausgangssituation: Eine Auszubildende im ersten Ausbildungsjahr kennt Bestellung und Lieferschein, hat aber noch keine Eingangsrechnung selbstständig geprüft. Feinlernziel: Sie gleicht die drei Dokumente ab, erkennt Abweichungen und dokumentiert diese korrekt.',
          'Ablauf: Vorwissen aktivieren, Prüfschritte gemeinsam strukturieren, ein Beispiel bearbeiten lassen und anschließend mit einer neuen Rechnung kontrollieren. Lernerfolg: Die Auszubildende erklärt den Ablauf und prüft den zweiten Fall selbstständig. Transfer: Sie wendet die Checkliste im nächsten realen Vorgang an.',
        ],
      },
      {
        title: 'Typische Fehler bei Themenwahl und Durchführung',
        body: [
          'Zu große Themen führen zu oberflächlichen Abläufen. „Kunden beraten“ oder „Arbeitssicherheit erklären“ sollte daher auf eine konkrete Situation und ein einzelnes Feinlernziel reduziert werden. Ein zweiter häufiger Fehler ist eine Methode, die auswendig beschrieben, aber nicht aus der Zielgruppe begründet wird.',
          'Vermeide außerdem lange Unternehmensvorstellungen, überladene Folien und Lernkontrollen, die nicht zum Ziel passen. Plane stattdessen einen klaren Einstieg, aktive Lernzeit, konkretes Feedback, Erfolgskontrolle und einen kurzen Ausblick auf den Transfer.',
        ],
      },
      {
        title: 'Checkliste vor der endgültigen Entscheidung',
        body: [
          'Sprich dein Konzept laut durch und stoppe die Zeit. Bitte eine fachfremde Person, nach Ziel, Methode und Lernerfolg zu fragen. Wenn du diese drei Punkte nicht in wenigen klaren Sätzen erklären kannst, ist das Thema wahrscheinlich noch zu breit.',
          'Prüfe abschließend die Einladung und Hinweise deiner zuständigen Stelle. Form, Unterlagen, erlaubte Medien und organisatorische Anforderungen können regional unterschiedlich gehandhabt werden.',
        ],
        bullets: [
          'Feinlernziel in einem Satz formulierbar',
          'Methode aus Ziel und Zielgruppe begründbar',
          'Erfolg während der Prüfung sichtbar prüfbar',
          'Zeitpuffer und technische Alternative vorhanden',
          'Örtliche Vorgaben vollständig kontrolliert',
        ],
      },
    ],
    faqs: [
      {
        question: 'Welches AEVO-Thema ist besonders einfach?',
        answer:
          'Ein Thema ist dann gut handhabbar, wenn es zu deinem Beruf und deiner Erfahrung passt, klar begrenzt ist und einen sichtbaren Lernerfolg ermöglicht. Eine vermeintlich einfache Standardunterweisung ist nicht automatisch die beste Wahl.',
      },
      {
        question: 'Muss ich die Vier-Stufen-Methode verwenden?',
        answer:
          'Nein. Die Methode muss zu Lernziel, Zielgruppe und Situation passen. Die Vier-Stufen-Methode kann für praktische Fertigkeiten geeignet sein; für kognitive oder entscheidungsorientierte Ziele können andere Methoden überzeugender sein.',
      },
      {
        question: 'Wie formuliere ich ein Feinlernziel?',
        answer:
          'Beschreibe beobachtbar, was die lernende Person nach der Unterweisung unter welchen Bedingungen und in welcher Qualität selbstständig kann. Nutze konkrete Verben wie prüfen, durchführen, dokumentieren oder begründen.',
      },
      {
        question: 'Darf ich ein Thema aus dem Internet übernehmen?',
        answer:
          'Du kannst dich inspirieren lassen, musst das Konzept aber auf deinen Ausbildungsberuf, die Zielgruppe und die Vorgaben deiner zuständigen Stelle zuschneiden. Ein übernommenes Standardskript ohne eigene Begründung erschwert besonders das Fachgespräch.',
      },
    ],
    ctaTitle: 'Fachwissen für die Begründung festigen',
    ctaText:
      'Trainiere Lernziele, Methoden, Motivation, Beurteilung und rechtliche Grundlagen mit prüfungsnahen Fragen.',
    relatedLinks: [
      {
        href: '/aevo-praktische-pruefung/',
        label: 'AEVO praktische Prüfung',
        desc: 'Ablauf, Präsentation und Fachgespräch im Überblick.',
      },
      {
        href: '/aevo-lernplan-4-wochen/',
        label: 'AEVO Lernplan für 4 Wochen',
        desc: 'Praktischen und schriftlichen Teil parallel planen.',
      },
      {
        href: '/aevo-pruefungsfragen/',
        label: 'AEVO Prüfungsfragen',
        desc: 'Theorie für das Fachgespräch festigen.',
      },
      {
        href: '/aevo-pruefung/',
        label: 'AEVO Prüfung',
        desc: 'Gesamten Prüfungsrahmen verstehen.',
      },
    ],
    disclaimer:
      'Die Beispiele sind allgemeine Lernideen und keine verbindlichen Prüfungsvorgaben. Maßgeblich sind Ausbildungsordnung, Einladung und Hinweise deiner zuständigen Stelle.',
  },
];

export const findSeoPage = (slug: string) => seoPages.find((page) => page.slug === slug);
