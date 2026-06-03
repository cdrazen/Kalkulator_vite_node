# Projekt: React Vite Kalkulator s Backend Spremanjem
# Autor: DČ

Ovaj projekt se sastoji od React frontend aplikacije i jednostavnog Node.js backend-a.

## Arhitektura
- **/client**: React (Vite) aplikacija pisana u TypeScript-u. Koristi se za UI, login i kalkulator.
- **/server**: Node.js Express server koji omogućuje spremanje podataka u lokalnu tekstualnu datoteku.

## Tehnologije
- Frontend: React, Vite, TypeScript, CSS (Vanilla)
- Backend: Node.js, Express, CORS

## Pravila Razvoja
1. **TypeScript**: Obavezno koristiti tipove za sve komponente i funkcije.
2. **Kalkulator**: Logika kalkulatora treba podržavati decimalne brojeve i osnovne matematičke operacije.
3. **Spremanje podataka**: Podaci se šalju na `/api/save` endpoint backend servera koji ih zapisuje u `server/data.txt`.
4. **Stil**: Koristiti jednostavan i moderan CSS bez vanjskih UI biblioteka (poput Tailwind-a ili Bootstrap-a) kako bi se zadržala jednostavnost koda, osim ako nije drugačije zatraženo.

## Pokretanje
1. **Server**: `cd server && npm install && node server.js`
2. **Client**: `cd client && npm install && npm run dev`

## GitHub
https://github.com/cdrazen/Kalkulator_vite_node

## Url
beckend: https://t4cc4cgg8o0oso0k4csow0c8.46.225.181.185.sslip.io
frontend: https://vkwkc8kcw084osw0ocwk4wcc.46.225.181.185.sslip.io