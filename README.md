# Ruuhka

Neljän pelaajan selainpeli, jonka voi asentaa PWA-sovelluksena. Sisältää kaksi pelitasoa, AI-pelaajat ja valinnaisen 30 sekunnin ajastimen.

## Julkaisu

GitHub Pages: https://ymouse91.github.io/ruuhka/

Päähaaran muutokset julkaistaan GitHub Actionsilla. Julkaisu rakennetaan komennolla node scripts/build.mjs. Vain dist-kansion tiedostot julkaistaan. Alkuperäinen skannattu sääntökirja ja työmuistiinpanot eivät kuulu julkaisuun.

## Asentaminen

iPad/iPhone: avaa osoite Safarissa ja valitse Jaa-valikosta Lisää Koti-valikkoon. Android/Chrome: Asenna-painike tai selaimen asennusvalikko.

Ensimmäinen verkkokäynti lataa pelin ja kuvat offline-välimuistiin. Uusi versio tarjotaan Päivitä peli -painikkeella; käynnissä olevaa peliä ei ladata uudelleen automaattisesti. Offline-käyttö ei tallenna keskeneräistä peliä sivun sulkemisen yli.

## Paikallinen kokeilu

Aja node scripts/build.mjs ja tarjoile dist-kansio paikallisella HTTP-palvelimella. Service worker vaatii localhostin tai HTTPS-yhteyden; file://-avaus toimii ilman PWA-asennusta ja offline-tukea.
