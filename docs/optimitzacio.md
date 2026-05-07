1. Components amb OnPush

DetallComponent i ServeiCardComponent

Angular per defecte busca canvis en tots els components davant qualsevol event, amb el OnPush Angular tan sols actualitza quan realment fa falta (si canvia un input, un signal, salta un event o arriba resposta d'una promise)

Ho he implementat en aquests components perquè tenen una lògica petita i fan servir signals (DetallComponent) i @input (ServeiCardComponent) les quals són compatibles amb OnPush.

2. Configuració de la virtualització
   Valor d’itemSize ="350"

Cada targeta del catàleg té una alçada aprox de 320 px.
Afegint marges i espaiat aprox 350 px.

Aquest valor garanteix que el cdk-virtual-scroll-viewport pugui calcular correctament la mida total de la llista i renderitzar només els elements visibles.

Nombre d’elements de la llista
El catàleg de serveis l'he ampliat de 10 a 50 serveis .
El format escollit inicialment per a la meva aplicació era un grid, el qual no es compatible actualment amb cdk-virtual-scroll-viewport
El fet que els servies es publiquin en targetes i no en format llista fa que el scroll es molt gran.
