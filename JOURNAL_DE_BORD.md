# JOURNAL DE BORD — Portfolio Ayoub Marzouq

> Fichier de memoire persistante entre les sessions de travail.
> Mis a jour automatiquement apres chaque tache importante.

---

## SESSION 1 — Fondations du projet

### Ce qui a ete accompli

1. **Initialisation du projet Next.js 16** (App Router, React 19)
2. **Installation des dependances** :
   - `next@16.1.6`, `react@19.2.3`, `react-dom@19.2.3`
   - `framer-motion@^12.36.0` (animations)
   - `lucide-react@^0.577.0` (icones)
   - `tailwindcss@^4` + `@tailwindcss/postcss@^4` (CSS framework)
   - `eslint@^9` + `eslint-config-next@16.1.6`
3. **Design System configure** dans `globals.css` :
   - `@theme inline` avec palette complete (midnight, accent, glow, neutral)
   - Classes glassmorphism (`glass`, `glass-hover`, `glass-card`)
   - Keyframes custom (`pulse-slow`, `float`)
   - Scrollbar custom + styles de selection
4. **Layout racine** (`layout.js`) : Inter + JetBrains Mono, metadata SEO complete
5. **Fichiers de donnees crees** :
   - `src/data/personal.js` — infos personnelles d'Ayoub
   - `src/data/projects.js` — 4 projets (Garantia 360, PeoplePulse, Biais IA, Storytelling)
   - `src/data/skills.js` — 4 categories de competences
6. **Utilitaire** : `src/lib/utils.js` — helper `cn()` pour combiner les classes CSS
7. **Page d'accueil placeholder** : affiche nom + titre depuis `personal.js`

### Etat actuel du projet

- **Phase 1 en cours** — Les fondations sont posees
- **Prochaine etape** : Composants layout (Navbar, Footer) puis sections de la page d'accueil
- **Aucun composant UI/section n'a encore ete cree**
- **Dossiers `src/components/` et `src/hooks/` non encore crees**

---

## SESSION 2 — Layout & Hero (15 mars 2026)

### Ce qui a ete accompli

1. **NetworkBackground** (`src/components/animations/NetworkBackground.jsx`)
   - Canvas 2D avec 45 noeuds connectes, vitesse lente, glow cyan
   - Connexions dynamiques sous 140px de distance
   - Responsive (resize listener), cleanup propre (cancelAnimationFrame)

2. **Navbar** (`src/components/layout/Navbar.jsx`)
   - Navigation fixe avec effet `.glass` au scroll (transparent → glassmorphism)
   - 5 liens : Accueil, A propos, Competences, Projets, Contact
   - Menu hamburger mobile (Menu/X icons Lucide)
   - Animation d'entree Framer Motion (slide down)
   - Underline glow au hover des liens

3. **Footer** (`src/components/layout/Footer.jsx`)
   - Liens GitHub, LinkedIn, Mail recuperes depuis `personal.js`
   - Icones Lucide avec effet hover scale + couleur accent
   - Annee dynamique via `new Date().getFullYear()`

4. **HeroSection** (`src/components/sections/HeroSection.jsx`)
   - Nom avec gradient (accent → cyan → purple) sur le nom de famille
   - Titre en font mono avec separateurs stylises
   - Bio complete depuis `personal.js`
   - Badge "Disponible pour une opportunite" avec ping animation
   - CTA "Voir mes projets" avec glass-hover + glow cyan
   - CTA secondaire "Me contacter"
   - Orbes ambiantes (accent + purple) avec pulsation
   - Indicateur de scroll anime en bas

5. **Assemblage**
   - `layout.js` : Navbar + Footer wrappent le contenu
   - `page.js` : HeroSection integre comme premiere section

### Etat actuel du projet

- **Phase 1 en cours** — Layout + Hero termines, sections restantes a faire
- **Prochaine etape** : Sections AboutSection, SkillsSection, ProjectsSection, ContactSection
- **Composants crees** : 4 (NetworkBackground, Navbar, Footer, HeroSection)

---

## SESSION 2 (suite) — Sections About & Skills (15 mars 2026)

### Ce qui a ete accompli

1. **SectionTitle** (`src/components/ui/SectionTitle.jsx`)
   - Composant reutilisable pour les titres de section
   - Label mono accent + titre h2 + description optionnelle
   - Animation fadeInUp au scroll (whileInView)

2. **AboutSection** (`src/components/sections/AboutSection.jsx`)
   - Layout 2 colonnes : photo a gauche, texte a droite (empile sur mobile)
   - Photo via `next/image` avec bordure glass + glow gradient au hover (cyan → purple)
   - Gradient overlay en bas de la photo pour integration au fond sombre
   - Bio importee de `personal.js`
   - Localisation avec indicateur vert
   - Soft Skills en tags avec bordure subtile + hover purple
   - Animations stagger sur chaque bloc

3. **SkillsSection** (`src/components/sections/SkillsSection.jsx`)
   - Grille 2 colonnes (desktop) / 1 colonne (mobile)
   - 4 cartes `.glass-card` (une par categorie de `skills.js`)
   - Chaque outil affiche icone SVG + nom en badge horizontal
   - StaggerChildren (0.15s) pour les cartes + stagger interne pour les outils
   - Hover sur les badges (bordure + fond plus clair)

4. **Assemblage**
   - `page.js` : Hero → About → Skills (dans cet ordre)
   - Photo de profil ajoutee dans `public/images/profil/`

### Etat actuel du projet

- **Phase 1 quasi terminee** — Il reste ProjectsSection + ContactSection
- **Composants crees** : 7 (NetworkBackground, Navbar, Footer, HeroSection, SectionTitle, AboutSection, SkillsSection)
- **Prochaine etape** : ProjectsSection et ContactSection

---

## SESSION 2 (suite 2) — Projects, Contact & Corrections (15 mars 2026)

### Corrections appliquees

1. **HeroSection** : Bio (`personal.bio`) supprimee du Hero pour eviter la repetition avec AboutSection
2. **SkillsSection** : Suppression de `next/image` pour les icones d'outils. Remplacement par des badges textuels. Ajout d'icones Lucide par categorie (Terminal, Database, BarChart3, Wrench)

### Ce qui a ete cree

1. **ProjectCard** (`src/components/ui/ProjectCard.jsx`)
   - Carte avec thumbnail placeholder (gradient + icone Lucide selon le type de projet)
   - Differenciation visuelle par statut :
     - "Termine" → badge emeraude, glow emeraude au hover, affiche `summary`
     - "En cours" → badge ambre, glow ambre au hover, affiche `objective`
   - Outils affiches en micro-badges
   - Lien "Voir le projet" vers `/projects/[slug]`

2. **ProjectsSection** (`src/components/sections/ProjectsSection.jsx`)
   - Grille 2 colonnes, stagger animation
   - Fond alterne (midnight-900/50)

3. **ContactSection** (`src/components/sections/ContactSection.jsx`)
   - 3 cartes glass empilees : Email, GitHub, LinkedIn
   - Donnees importees de `personal.js`
   - Hover avec glow cyan sur la carte email
   - Fleche ArrowUpRight animee au hover

4. **Assemblage final**
   - `page.js` : Hero → About → Skills → Projects → Contact
   - Page d'accueil complete (Phase 1 terminee)

### Etat actuel du projet

- **Phase 1 TERMINEE** — Page d'accueil complete avec toutes les sections
- **Composants crees** : 10 (NetworkBackground, Navbar, Footer, HeroSection, SectionTitle, AboutSection, SkillsSection, ProjectCard, ProjectsSection, ContactSection)
- **Prochaine etape** : Phase 2 — Pages de detail projets (`/projects/[slug]`)

---

## SESSION 3 — Phase 2 : Template page projet (15 mars 2026)

### Ce qui a ete accompli

1. **Structure de donnees `detailedContent`** dans `projects.js`
   - Ajout pour Garantia 360 (id: 1) avec donnees placeholder :
     - `context` : titre + paragraphes (probleme initial)
     - `architecture` : titre + steps[] (label + description pour chaque etape pipeline)
     - `results` : titre + metrics[] (value + label) + conclusion
   - Les 3 autres projets conservent `detailedContent: null` (fallback prevu)

2. **Page dynamique `/projects/[slug]/page.js`**
   - Route dynamique Next.js App Router avec `useParams()`
   - **Page 404 custom** si le slug ne correspond a aucun projet
   - **Hero projet** : type + badge statut (emeraude/ambre) + titre + subtitle + tools en badges + summary
   - **Bouton retour** : lien vers `/#projets` avec fleche animee
   - **3 sections glass** pour le contenu detaille :
     - Contexte : paragraphes avec accent bar bleue
     - Architecture : timeline verticale numerotee (1→4) avec ligne gradient
     - Resultats : grille de metriques en JetBrains Mono + conclusion
   - **Fallback** : message "contenu disponible prochainement" si `detailedContent` est null

### Choix de design

- **Timeline pipeline** : Ligne verticale gradient (accent → purple → transparent) avec pastilles numerotees. Plus lisible qu'une grille pour montrer un processus sequentiel.
- **Metriques** : Grille 4 colonnes avec valeurs en `font-mono text-2xl text-accent-400` pour un impact visuel fort.
- **Accent bars** dans les titres h2 : bleu (contexte), violet (architecture), emeraude (resultats) — coherent avec la palette du Design System.

### Etat actuel du projet

- **Phase 2 en cours** — Template pret, contenu reel a rediger
- **Composants crees** : 11 total
- **Prochaine etape** : Redaction du contenu reel Garantia 360, puis PeoplePulse, Biais IA, Storytelling

---

## SESSION 3 (suite) — Rollback Spline 3D (15 mars 2026)

- Integration Spline 3D tentee puis annulee (decision utilisateur)
- Packages `@splinetool/react-spline` + `@splinetool/runtime` desinstalles
- HeroSection restaure a la version centree (pre-Spline)
- Hero propre et fonctionnel

### Etat actuel du projet

- **Phase 2 en cours** — Template projet pret, Hero valide
- **Composants** : 11 total
- **Prochaine etape** : Redaction contenu reel des projets (Garantia 360, PeoplePulse, Biais IA, Storytelling)

---

## SESSION 4 — Effet neon + Contenu Garantia 360 (16 mars 2026)

### Corrections visuelles Hero

1. **Couleurs neon** ajoutees dans `globals.css` (`--color-neon-cyan`, `--color-neon-magenta`)
2. **Nouveau titre** : "Transformer vos donnees en decisions strategiques." (remplace "Data Analyst | Data Engineer | IA")
3. **Degrade neon "Marzouq"** : cyan-300 → cyan-400 → blue-500 avec glow via span blur derriere (fix du bug text-transparent + drop-shadow)

### Contenu Garantia 360

1. **Refonte `detailedContent`** dans `projects.js` :
   - `intro` : titre + storytelling complet
   - `stack[]` : 6 outils avec roles
   - `steps[]` : 4 etapes avec descriptions riches + images
   - `perspectives` : orchestration Airflow
   - `powerbiEmbed` : placeholder pour iframe Power BI
2. **Images renommees** (URL-safe) dans `public/images/images_garantia/` :
   - `bigquery-tables.png`, `dbt-build-success.png`, `dbt-lineage.png`, `modele-constellation.png`, `schema-initiale.png`
3. **Refonte template** `[slug]/page.js` :
   - Sections : Intro/Storytelling, Stack technique (grille), Etapes (cartes glass numerotees avec images), Perspectives, Demo interactive Power BI
   - Composants internes : `ImagePlaceholder`, `ProjectImage`, `PowerBIPlaceholder`
   - Compatible avec ancienne structure (fallback si `detailedContent` null)

### Ajouts supplementaires (Session 4)

1. **Lightbox images** : clic pour voir en grand (overlay + fermeture Echap/X/clic fond)
2. **Logo Garantia** : image 160px a cote du titre projet (renommee `logo-garantia.png`)
3. **Iframe Power BI** : embed interactif integre (remplace le placeholder)
4. **Banniere IA Gemini Pro** : carte glass avec degrade bleu/violet, icone Sparkles, champ `aiApproach` dans les donnees. Positionnee entre le hero projet et le contenu detaille.

5. **Image pipeline** : `visuel-pipeline.png` (renommee) affichee dans une section "Architecture Globale" entre la Stack et les Etapes
6. **Bloc Avant/Apres dbt** : Etape 3 Modelisation affiche 2 colonnes cote a cote (desktop) — pastille rouge "Avant dbt" + pastille verte "Apres dbt" avec les schemas correspondants. Champ `comparison` dans les donnees.

### Etat actuel du projet

- **Phase 2 en cours** — Garantia 360 complet (contenu + images + Power BI + IA + pipeline + avant/apres), 3 projets restants
- **Composants** : 11 + 5 composants internes page projet (ImagePlaceholder, ProjectImage, PowerBIPlaceholder, Lightbox, banniere IA)
- **Prochaine etape** : Contenu PeoplePulse, Detection Biais IA, Storytelling

---

## SESSION 5 — Profil hybride, Philosophie IA & Toggle Skills (16 mars 2026)

### Ce qui a ete accompli

1. **Philosophie IA** (`personal.js` + `AboutSection.jsx`)
   - Nouveau champ `aiPhilosophy` dans les donnees personnelles
   - Carte dediee dans AboutSection avec icone Brain, bordure purple, glow hover
   - Texte en exergue sur la fusion humain/IA (Gemini, Claude, ChatGPT, n8n)

2. **Restructuration des competences** (`skills.js`)
   - Ancien export `skillCategories` remplace par deux exports distincts :
     - `dataSkills` : 4 categories (Langages, Data Engineering, Data Viz, Outils)
     - `marketingSkills` : 4 categories (Marketing Digital, Automatisation & IA, Analytics & Tracking, Strategie & Gestion)

3. **Toggle interactif Skills** (`SkillsSection.jsx`)
   - Selecteur pilule "Tech & Data" / "Strategie & Marketing"
   - Fond anime `bg-accent-600` qui glisse sur le bouton actif (spring animation)
   - Transition slider horizontal avec AnimatePresence (glisse gauche/droite)
   - Icones Lucide dediees par univers (Terminal, Database, BarChart3, Wrench / Megaphone, Bot, TrendingUp, Briefcase)

### Etat actuel du projet

- **Phase 2 en cours** — Garantia 360 complet, 3 projets restants
- **Composants modifies** : AboutSection, SkillsSection
- **Donnees modifiees** : personal.js, skills.js
- **Prochaine etape** : Contenu PeoplePulse, Detection Biais IA, Storytelling

---

## SESSION 6 — (a venir)

<!-- Sera rempli a la prochaine session de travail -->
