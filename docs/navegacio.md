Path / --> Redirecciona a /cataleg --> Accés Públic
Path /cataleg --> Carrega CatalegPageComponent --> Accés Públic
Path /cerca --> Carrega CercaPageComponent --> Accés Públic
Path /detall/:id --> Carrega DetallComponent --> Accés Públic
Path /preferits --> Carrega PreferitsPageComponent --> Accés PRIVAT (AtuhGuard)
Path /login --> Carrega LoginComponent --> --> Accés Públic
Path \*\* (wildcard) --> Redirecciona a /cataleg --> Accés Públic

# provideRouter

es declara a app.config.ts per registrar totes les rutes definides a app.routes.ts

import { routes } from './app.routes';
...
provideRouter(routes)
...

també vull mencionar que he afegit provideZoneChangeDetection el cual optimitza el motor de detecció de canvis a Angular. He llegit que es una bona pràctica a implementar en aplicacions web.

# RouterOutlet

el component principal app.component.html inclou els tags
<router-outlet></router-outlet>

això indica on s'han de visualitzar els diferents components inclosos en l'aplicació.
Per sobre d'aixó tenim els components "fixos" de l'aplicació, com la barra de navegació i login.

# RouterLink i RouterLinkActive

La barra de navegació principal la cual es trova a app.component.html inclou aquestes propietats.

<a routerLink="/cataleg" routerLinkActive="active">Catàleg</a>

routerLink reenvia la crida a la ruta definida al app.routes.ts i aquesta es visualitza en el apartat de <router-outlet></router-outlet>
routerLinkActive marca visualment la ruta activa (en el meu cas he afegit estil css)
