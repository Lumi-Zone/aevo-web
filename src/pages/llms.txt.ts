import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const root = new URL(base, site ?? 'https://aevo-ada-pruefung.de');
  const url = (path = '') => new URL(path, root).href;

  const body = `# AEVO Ada

> AEVO Ada ist eine unabhängige deutschsprachige iOS-Lern-App zur Vorbereitung auf die Ausbildereignungsprüfung nach AEVO. Sie ist kein offizielles Angebot der IHK oder einer anderen Kammer.

## Verifizierbare Produktdaten

- Plattform: iPhone und iPad, iOS/iPadOS 16.4 oder neuer
- Sprache: Deutsch
- Kategorie: Bildung / Prüfungsvorbereitung
- Inhalte: 700+ prüfungsnahe Fragen, Erklärungen, Fortschrittsauswertung und 90-Minuten-Trainingssimulation
- Preis: kostenloser Download mit optionalen In-App-Käufen
- Anbieter: CFS Mobile Tech
- App Store: https://apps.apple.com/de/app/aevo-ihk-app-ada-schein/id6763579448
- Website: ${url()}

Die 90-Minuten-Simulation ist ein fokussiertes App-Training. Sie ist nicht mit der offiziellen Dauer des schriftlichen Prüfungsteils gleichzusetzen; § 4 AusbEignV sieht dafür drei Stunden vor.

## Zentrale Seiten

- [AEVO App im Überblick](${url('aevo-app/')})
- [iOS App und Download](${url('ios-app/')})
- [AEVO Prüfung](${url('aevo-pruefung/')})
- [AEVO Prüfungsvorbereitung](${url('aevo-pruefungsvorbereitung/')})
- [AEVO Prüfungsfragen](${url('aevo-pruefungsfragen/')})
- [AEVO und IHK](${url('aevo-ihk/')})
- [ADA-Schein und Ausbilderschein](${url('ausbilderschein-ada-schein/')})
- [Ausbilder werden](${url('ausbilder-werden/')})
- [Über Anbieter, Einordnung und Redaktion](${url('ueber-aevo-ada/')})

## Begriffe

- AEVO: Ausbilder-Eignungsverordnung
- AdA / ADA: Ausbildung der Ausbilder
- ADA-Schein / Ausbilderschein: gebräuchliche Begriffe für den Nachweis der berufs- und arbeitspädagogischen Eignung
- IHK AEVO App: häufige Suchbezeichnung; AEVO Ada ist dennoch keine offizielle IHK-App

## Primärquellen

- Ausbilder-Eignungsverordnung: https://www.gesetze-im-internet.de/ausbeignv_2009/
- BIBB-Publikation zur AEVO: https://www.bibb.de/dienst/publikationen/de/6991

## Kontakt

- E-Mail: cfsmobiletech@gmail.com

Stand: 2026-10-08
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
