---
marp: true
theme: uncover
_class: lead
backgroundColor: #fff
# backgroundImage: url('https://marp.app/assets/hero-background.svg')

header:  'Playful 2022'
footer: 'Teamprojekt ...'
---

<!-- theme gaia -->

<!-- paginate: false -->

# Teamprojekt - Playful
![width:200px height:200px](./images/playful_logo_dark_grey.svg)

---

<!-- paginate: true -->

![bg left:40% height:90%](./images/colors_greyscale.svg)
# Design
## *Barrierefreiheit*

<!-- 
Schwarz-Weiß
Farbschwächen
etc.
-->

---

# Ausblick
## *Neue Features*

<!-- 
Freundeslisten + Einladungen
-->

---

![bg left:40% height:90%](./images/new_game_noBackground_withText.svg)
# Ausblick 
## *Extensibility*

<!-- 
Automatisieren der Einbindung von Spielen
Alle wichtigen Verknüpfungen werden erstellt
Alle Template Dateien werden erstellt
User muss nur an wenigen Stellen eigenen Code einfügen
-->

---

![bg right:42%](./images/code_interface_cut.png)
# Ausblick
## *Maintainability*
## *Testibility*

<!--  
Interfaces zu den UIs von den Spielen
- Um tests schreiben zu können mit dummy UIs
- Um sich auf bestimmte Dinge verlassen zu können
  - Funktionen
  - Andere Elemente

refactoring, dass alles auf einer html-Seite ist
- Man lädt immer eine neue UI, wenn man die Seite wechseln möchte
- Die URL bleibt immer gleich
- Vorteile:
  - Variablen müssen nicht unter verschiedenen Seiten ausgetauscht werden, sondern sind immer bekannt
  - Man könnte aus einem Spiel raustabben und sich die Achievements anschauen ohne, dass das aktuelle Spiel unterbrochen wird
- Wieso bisher nicht gemacht?
  - Mit anderem Ansatz angefangen
  - Im laufe der Zeit gemerkt, dass anderer Ansatz einige Dinge einfacher macht
  - Zeit hat gefehlt, das ganze Projekt umzustrukturieren
-->

---

<!-- ---

# Ablauf 1/3

1. Teaser
   - webseite auf Server erstellen
     - Clone Repo
     - Datenbank
     - npm install
     - npm run build-dev+serve
   - Kurz die Seite zeigen

---

# Ablauf 2/3

2. ...
3. ...
4. ...

---

# Ablauf 3/3

5. Was haben wir weggelassen und was sollte/kann man in Zukunft noch als Feature hinzufügen?
6. Live-Demo

--- -->