# CONTEXT.md — Projet Interbudo

> Fichier de référence décrivant la stack technique, la structure et les conventions du projet.
> À inclure dans chaque nouvelle session de contexte.

---

## 1. Présentation du projet

**Nom :** `interbudo`
**Type :** Site web d'une association d'arts martiaux (budo)
**Déploiement :** GitHub Pages → `https://<user>.github.io/interbudo/`

---

## 2. Stack technique

| Catégorie        | Outil / Librairie              | Version       |
|------------------|-------------------------------|---------------|
| Framework JS     | Vue.js                        | ^3.5.18       |
| Bundler          | Vite                          | ^7.0.6        |
| Routing          | Vue Router                    | ^4.5.1        |
| CSS Utility      | Tailwind CSS (plugin Vite)    | ^4.1.13       |
| Slider/Carousel  | Swiper                        | ^12.0.1       |
| Tests unitaires  | Vitest + @vue/test-utils      | ^3.2.4        |
| Linting          | ESLint + OXLint               | ^9.31 / ~1.8  |
| Formatage        | Prettier                      | 3.6.2         |
| Déploiement      | gh-pages                      | ^6.3.0        |
| Node requis      | ^20.19.0 ou >=22.12.0         |               |

---

## 3. Configuration Vite

- **Alias `@`** → résout vers `./src`
- **Base URL** :
  - Production : `/interbudo/`
  - Développement : `/`
- **Plugins actifs :**
  - `@vitejs/plugin-vue` — support des SFC Vue
  - `vite-plugin-vue-devtools` — DevTools Vue en dev
  - `@tailwindcss/vite` — intégration Tailwind v4 native Vite

---

## 4. Point d'entrée

**`src/main.js`**
- Crée l'application Vue avec `createApp(App)`
- Monte le router (`vue-router`)
- Importe le CSS global : `./assets/main.css`
- Importe les styles Swiper : `swiper/css`, `swiper/css/navigation`

---

## 5. Structure des pages et routing

Toutes les pages sont dans `src/pages/`. Le router utilise
`createWebHistory` avec la `BASE_URL` de Vite.

| Route                  | Composant page                  | Chargement  |
|------------------------|---------------------------------|-------------|
| `/`                    | `HomePage.vue`                  | Statique    |
| `/dojosmaps`           | `DojosMapsPage.vue`             | Statique    |
| `/photos`              | `PhotosPage.vue`                | Statique    |
| `/galerie/:slug`       | `GalerieCategoriePage.vue`      | **Lazy**    |
| `/partenaires`         | `PartenairesPage.vue`           | Statique    |
| `/dirigeants`          | `DirigeantsPage.vue`            | Statique    |
| `/professeurs`         | `ProfsPage.vue`                 | Statique    |
| `/horaires`            | `HorairesPage.vue`              | Statique    |
| `/tarifs`              | `TarifsPage.vue`                | Statique    |
| `/inscriptions`        | `InscriptionsPage.vue`          | Statique    |
| `/calendriers`         | `CalendriersPage.vue`           | Statique    |
| `/textesofficiels`     | `TextesOfficielsPage.vue`       | Statique    |

### Comportement du scroll
- Ancre (`#hash`) → scroll smooth vers l'élément
- Autre navigation → retour en haut de page (`top: 0`)

---

## 6. Structure des dossiers (déduite)

```
src/
├── assets/
│   └── main.css          # CSS global
├── pages/                # Une page par route
│   ├── HomePage.vue
│   ├── DojosMapsPage.vue
│   ├── PhotosPage.vue
│   ├── GalerieCategoriePage.vue  # Lazy loaded, reçoit prop :slug
│   ├── PartenairesPage.vue
│   ├── DirigeantsPage.vue
│   ├── ProfsPage.vue
│   ├── HorairesPage.vue
│   ├── TarifsPage.vue
│   ├── InscriptionsPage.vue
│   ├── CalendriersPage.vue
│   └── TextesOfficielsPage.vue
├── router/
│   └── index.js          # Configuration Vue Router
├── App.vue               # Composant racine
└── main.js               # Point d'entrée
```

---

## 7. Conventions du projet

### Nommage
- **Pages** : `PascalCase` suffixées par `Page` → ex. `HomePage.vue`
- **Composants** : `PascalCase` (convention Vue standard)
- **Routes** : `kebab-case` tout en minuscules → ex. `/textesofficiels`

### Import
- Alias `@` utilisé systématiquement pour les imports internes (`@/pages/...`)
- Imports CSS Swiper déclarés dans `main.js`

### Qualité de code
- Double linter : **OXLint** (rapide, correctness) + **ESLint** (règles Vue/Prettier)
- Formatage automatique via **Prettier** sur `src/`
- Scripts npm :
  - `npm run dev` → serveur de développement
  - `npm run build` → build production
  - `npm run lint` → lint ESLint + OXLint enchaînés
  - `npm run format` → formatage Prettier
  - `npm run deploy` → build + push GitHub Pages
  - `npm run test:unit` → tests Vitest

---

## 8. Points d'attention

- Tailwind CSS v4 est utilisé via le **plugin Vite natif** (pas via PostCSS classique).
- La route `/galerie/:slug` est la seule en **lazy loading** (code splitting automatique).
- Le `base` Vite est conditionnel selon `NODE_ENV` — important pour les liens assets en production.