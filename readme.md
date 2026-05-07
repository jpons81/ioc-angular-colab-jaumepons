    1. Descripció del projecte

    COLAB és una plataforma d’intercanvi de serveis entre particulars.

    2. Mapa de rutes

    / --> Redirecciona a /cataleg --> Accés Públic
    /cataleg --> Carrega CatalegPageComponent --> Accés Públic
    /cerca --> Carrega CercaPageComponent --> Accés Públic
    /detall/:id --> Carrega DetallComponent --> Accés Públic
    /preferits --> Carrega PreferitsPageComponent --> Accés PRIVAT (AtuhGuard)
    /login --> Carrega LoginComponent --> --> Accés Públic
    **  (wildcard) --> Redirecciona a /cataleg --> Accés Públic

    3. Instruccions d'execució en local:

git clone https://github.com/jpons81/ioc-angular-colab-jaumepons

cd ioc-angular-colab-jaumepons

npm install

ng serve

# Obrir http://localhost:4200

    4. Build de producció — Instruccions i mida aproximada del bundle obtinguda.
    5. Credencials de prova — Email i contrasenya per accedir a la secció protegida.
