## validadors síncrons

El termeCerca està validat síncronament per MinLenghtValidator (mínim 2 caràcters) i MaxLenghtValidator (max 50 caràcters).

Com indica el nom s'executen inmediatament quan el valor del camp canvía (input).

## validadors asíncrons

codiDisponibleValidator es una funció asíncrona que simula una consulta amb retard de 500ms, l'objectiu es comprovar si existeixen resultats per el termeCerca, sinó retorna error.

## comportament del debounce

implementem debounce de 400ms sobre la variable valueChanges del formulari per evitar cercar mentres el usuari està escrivint així evitem crides innecessàries.

## Formularis reactius i FormArray

El projecte utilitza formularis reactius per gestionar:

- El formulari de cerca
- El formulari de notes als preferits

## Formulari dinàmic amb FormArray

Cada servei preferit té un conjunt de notes gestionades amb un `FormArray`.

##

## VAlidadors

Validators.minLength(3) "logintud mínima de la nota"
