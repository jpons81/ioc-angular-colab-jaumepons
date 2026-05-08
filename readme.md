1. Descripció del projecte

COLAB és una plataforma d’intercanvi de serveis entre particulars.

2. Mapa de rutes

/ --> Redirecciona a /cataleg --> Accés Públic
/cataleg --> Carrega CatalegPageComponent --> Accés Públic
/cerca --> Carrega CercaPageComponent --> Accés Públic
/detall/:id --> Carrega DetallComponent --> Accés Públic
/preferits --> Carrega PreferitsPageComponent --> Accés PRIVAT (AtuhGuard)
/login --> Carrega LoginComponent --> --> Accés Públic
\*\* (wildcard) --> Redirecciona a /cataleg --> Accés Públic

3. Instruccions d'execució en local:

a. descarregar l'aplicació desde el repositori GitHub
git clone https://github.com/jpons81/ioc-angular-colab-jaumepons

b. entrem a la carpeta de l'aplicació
cd ioc-angular-colab-jaumepons

c. instal·lem l'aplicació
npm install

d. arranquem l'aplicació
ng serve

e. arranquem la bd
json-server --watch db.json

f. accedim a l'aplicació amb la següent URL

http://localhost:4200

4. Build de producció — Instruccions i mida aproximada del bundle obtinguda.

El build de producció es genera amb la comanda:
ng build --configuration production

RAW size: 371,36kB
Transfer size: 98,45kB

5. Credencials de prova — Email i contrasenya per accedir a la secció protegida.

usuari: jaume@colab.net
password: 1234
