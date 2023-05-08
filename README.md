# Zadatak 1 - kreiranje aplikacije
### Potrebno je otvoriti Windows Command Prompt ili Visual Studio Code Terminal te utipkati sljedeće naredbe:
   1. npx create-react-app moja-prva-aplikacija
   2. cd moja-prva-aplikacija
   3. npm start
   4. Otvoriti internet preglednik na stranici http://localhost:3000
### Potom je potrebno:
   5. promijeniti favicon aplikacije
   6. promijeniti naziv aplikacije
   7. ispisati "Moja prva aplikacija" na web stranici

# Zadatak 2 - Dependency Management
### Početno stanje: npx creat-react-app (Zadatak 1)
	 1.	Napraviti novu react aplikaciju
	 2.	Na npmjs.com pronaći neki paket za generiranje random stringa
	 3.	Instalirati taj paket u novokreiranu aplikaciju, osigurati da je paket naveden i pod dependencies
	 4.	Iskoristiti instalirani paket za generiranje random stringa

# Zadatak 3 - Import/Export
### Potrebno napraviti React aplikaciju koja će imati slijedeće:
	1.	Napraviti novu React aplikaciju. (Zadatak 1, ili nastavljamo na postojećoj aplikaciji)
	2.	Napraviti jednu datoteku s default export modulom (Person.js)
	3.	Napraviti novu datoteku s tri named export modula (Utility.js)
	4.	Unutar App.js-a importati sve export-ane modele
	5.	Iskoristiti sve importane module
	
# Zadatak 4 - Index.js
### Početno stanje: Početno stanje u mapi src/Components su napravljene četiri komponente.
### Potrebno napraviti React aplikaciju koja će raditi slijedeće:
	1. Unutar App.js-a u jednoj programskoj naredbi importati sve četiri komponente.
	2. Prikazati sve četiri komponente na ekranu.
	
# Zadatak 5 - JSX
### U ovoj vježbi, potrebno je napraviti sljedeće:
	1.	Napraviti novu React aplikaciju
	2.	Unutar App komponente napraviti dvije varijable koje sadrže neki string
	3.	Napraviti JSX element koji će prikazati neki tekst na ekranu
	4.	Napraviti JSX element koji će prikazati neki tekst na ekranu + vrijednost jedne od varijabli
	5.	Napraviti JSX element koji će prikazati obje varijable odvojene razmakom

# Zadatak 6 - Conditional rendering
### Potrebno napraviti React aplikaciju koja će imati slijedeće:
	1.	Napraviti novu React aplikaciju.
	2.	Potrebno je napraviti dvije komponente
	3.	Glavna komponenta poziva drugu komponentu ConditionalRendering sa svojstvom (props) number
	4.	U ovisnusti o poslanom broju treba ispisati drukčiji tekst
	5.	Ako se pošalje nedefinirani broj, komponenta ConditionalRendering ništa ne ispisuje

# Zadatak 7 - Komponente
### Potrebno napraviti React aplikaciju koja će imati slijedeće:
	1	Napraviti novu aplikaciju
	2.	Unutar App.js datoteke napraviti jednu komponentu definiranu funkcijom koja vraća JSX s tekstom.
	    Unutar App komponente potrebno je prikazati komponentu.
	3.	Unutar App.js datoteke napraviti jednu komponentu definiranu klasom koja vraća JSX s tekstom.
	    Unutar App komponente potrebno je prikazati komponentu.
	4.	Potrebno je prebaciti svaku komponentu unutar svoje datoteke. Prikazati ih unutar App komponente.

# Zadatak 8 - Props
### Potrebno napraviti React aplikaciju koja će imati sljedeće:
	1.	U vježbi je potrebno napraviti četiri komponente u četiri odvojene datoteke. Komponenta App i još jedna komponenta moraju biti definirane klasom, a dvije komponente je potrebno definirati funkcijom.
	2.	Komponenta App mora biti parent komponenta ostalima i mora sadržavati polje "korisnici" koje unutar sebe sadrži tri objekta s imenima i godinama korisnika.
	3.	Komponenta App mora pozivati ostale komponente i u pozivu preko props-a im treba proslijediti ime i godine korisnika, jednu komponentu je potrebno pozvati s "children" propsima.
	4.	Komponenta definirana funkcijom treba prikazati ime i godine korisnika.
	5.	Komponenta definirana klasom treba prikazati ime i godine korisnika.
	6.	Druga komponenta definirana funkcijom treba prikazati ime i godine korisnika, te treba ispisati proslijeđene children propse.

# Zadatak 9 - State
### Početno stanje aplikacije je završno stanje aplikacije iz prethodnog zadatka
	1. U vježbi je potrebno definirati polje korisnici iz prethodne vježbe unutar stanja (statea) komponente App
	2. Unutar stanja (statea) komponente App pored polja korisnici potrebno je definirati proizvoljnu tekstualnu varijablu
	3. Prikazati na ekranu vrijednosti iz stanja (statea), a proizvoljnu vrijednost prikazati preko children propsa.

# Zadatak 10 - setState
### Početno stanje aplikacije je završno stanje prethodnog zadatka
	1. Potrebno je dodati novu komponentu koja u sebi sadrži gumb
	2. Pritiskom na gumb potrebno je promijeniti godine korisnika
	3. Prikazati promjenu na ekranu
	4. Komponenta App smije biti jedina komponenta sa stanjima (statefull), komponenta App mora biti definirana klasom

# Zadatak 11 - useState hook
### Početno stanje aplikacije je završno stanje prethodnog zadatka
	1. Potrebno je promijeniti komponentu App - komponenta App mora biti definirana funkcijom.
	2. Za čuvanje stanja aplikacije potrebno je koristiti useState hook.

# Zadatak 12 - Events / Događaji
### Početno stanje aplikacije je završno stanje prethodnog zadatka
	1. U komponentu korisnik potrebno je dodati input za unos teksta
	2. Interakcijom s inputom za unos teksta treba mijenjati ime korisnika
	3. Trenutno ime korisnika uvijek treba pisati unutar inputa
	4. Funkcija promjena imena treba raditi samo na jednom korisniku

# Zadatak 13 - Liste
### NAPOMENA: Za početno stanje aplikacije ćemo napraviti novu AppListe.js datoteku te nju importati u index.js
	1. Potrebno je prikazati sve korisnike u stanju (stateu) pomoću liste
	2. Ukoliko se u polje korisnici doda još korisnika, oni se moraju automatski prikazati na ekranu, bez mijenjanja kôda
	3. Promjena imena preko trake za unos teksta mora raditi na svim korisnicima
	4. Radi optimizacije renderiranja kôda svaki element u listi mora imati postavljen unikatan ključ (key)

# Zadatak 14 - Forme 1
### NAPOMENA: Za početno stanje aplikacije ćemo napraviti novu AppForme1.js datoteku te nju importati u index.js
	1. Potrebno je napraviti formu koja će imati traku za unos teksta i gumb za potvrdu unosa
	2. Korisničkom interakcijom potrebno je spremati tekst u stanje (state) komponente
	3. Pritiskom Pocetno stanjena tipku, potrebno je ispisati tekst na ekranu

# Zadatak 15 - Forme 2
### NAPOMENA: Za početno stanje aplikacije ćemo napraviti novu AppForme2.js datoteku te nju importati u index.js
	1. Napraviti novu komponentu koja će sadržavati formu za unos novog korisnika
	   (traka za unos teksta za ime, traka za unos teksta za godine i tipka za potvrditi unos)
	2. Nakon pritiska na tipku forme novi korisnik se mora spremiti u stanje (state) i prikazati na ekranu
	3. Nakon pritiska na tipku forme trake za unos teksta se moraju resetirati na početno stanje
	4. Unos teksta za promjenu imena mora raditi i na novom korisniku
	5. Tipka za promjenu godina mora raditi i na novom korisniku
