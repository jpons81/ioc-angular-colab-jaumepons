# Documentació dels serveis

## Servei HTTP del catàleg

El projecte utilitza un servei HTTP encarregat de recuperar els serveis del catàleg

## Endpoints utilitzats

GET `/serveis` Retorna tots els serveis disponibles. Actualment no hi ha cap métode implementat ja que per defecte l'aplicació carrega tan sols els populars
GET `/serveis/populars` Retorna serveis popular=true mitjançant la funció obtenirPopulars(): void

## Estats gestionats

carregant: petició està en curs.
error: conté un missatge d’error si la petició falla.
serveis: llista final de serveis adaptats.

## Servei de preferits

Aquest servei gestiona:

- La llista de preferits
- La persistència al `localStorage`
- Les notes associades a cada servei preferit

## Mètodes del servei

`carregarPreferits()` Carrega els preferits des del `localStorage`
`guardarPreferits()` Desa l’estat actual al `localStorage`
`esPreferit(id)` Retorna si un servei és preferit
`afegirPreferit(servei)` Afegeix un servei a preferits i inicialitza `notes: []`
`eliminarPreferit(id)` Elimina un servei de preferits
`actualitzarNotes(id, notes)` Desa les notes d’un servei preferit
