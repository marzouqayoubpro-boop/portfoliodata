# CLAUDE.md — Portfolio Ayoub Marzouq | Master Blueprint

## 1. IDENTITE DU PROJET

- **Nom :** Portfolio Data & IA — Ayoub Marzouq
- **Tagline :** Data Analyst | Data Engineer | IA
- **URL cible :** portfoliodata.vercel.app (ou domaine custom)
- **Repo :** https://github.com/marzouqayoubpro-boop/portfoliodata.git
- **Stack :** Next.js 16 (App Router) - React 19 - Tailwind CSS 4 - Framer Motion 12 - Vercel

---

## 2. ARCHITECTURE DU PROJET

### 2.1 Pattern : SPA + Routes dynamiques

La page d'accueil est une Single Page Application avec scroll fluide entre les sections.
Chaque projet possede une page de detail accessible via `/projects/[slug]`.

### 2.2 Arborescence

```
portfoliodata/
├── public/
│   ├── images/
│   │   ├── projects/          # Thumbnails des projets (600x400 WebP)
│   │   └── tools/             # Icones des outils (SVG)
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.js          # Layout racine (metadata, fonts, body)
│   │   ├── page.js            # Page d'accueil SPA (assemble les sections)
│   │   ├── globals.css        # Styles globaux + @theme Tailwind v4
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.js    # Page de detail projet (dynamique)
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, ScrollToTop
│   │   ├── sections/          # HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection
│   │   ├── ui/                # ProjectCard, SkillBadge, StatusBadge, SectionTitle, GlassCard
│   │   └── animations/        # NetworkBackground, FadeInOnScroll, FloatingNodes
│   ├── data/                  # projects.js, skills.js, personal.js
│   ├── lib/                   # utils.js (cn helper)
│   └── hooks/                 # useScrollSpy.js
├── CLAUDE.md
├── next.config.js
├── postcss.config.mjs
└── package.json
```

### 2.3 Principes architecturaux

- **Separation donnees / affichage :** Tout le contenu est dans `src/data/`. Les composants ne contiennent JAMAIS de texte en dur.
- **Composants atomiques :** Chaque composant fait UNE chose.
- **Pas de state global :** Aucun contexte React ou state manager. Les donnees sont importees directement.
- **App Router Next.js :** Exclusivement le dossier `app/`.
- **Tailwind CSS v4 :** Configuration via `@theme inline` dans globals.css (pas de tailwind.config.js).

---

## 3. DESIGN SYSTEM

### 3.1 Palette de couleurs

| Token           | Hex       | Usage                        |
|-----------------|-----------|------------------------------|
| midnight-950    | #020617   | Fond principal               |
| midnight-900    | #0f172a   | Fond sections alternees      |
| midnight-800    | #1e293b   | Fond des cartes              |
| midnight-700    | #334155   | Bordures subtiles            |
| accent-400      | #38bdf8   | Accents principaux           |
| accent-500      | #0ea5e9   | Hover states                 |
| accent-600      | #0284c7   | Etats actifs                 |
| glow-cyan       | #22d3ee   | Effets de lueur              |
| glow-purple     | #a78bfa   | Accents secondaires          |
| glow-emerald    | #34d399   | Badges "Termine"             |
| neutral-100     | #f1f5f9   | Texte principal              |
| neutral-300     | #cbd5e1   | Texte secondaire             |
| neutral-500     | #64748b   | Texte tertiaire              |

### 3.2 Typographies

- Headings : Inter 700/800
- Body : Inter 400/500
- Code/Data : JetBrains Mono 400

### 3.3 Glassmorphism

Classes custom definies dans globals.css :
- `.glass` — fond translucide + blur + bordure subtile
- `.glass-hover` — transition au hover
- `.glass-card` — combine glass + hover avec glow shadow

### 3.4 Animations Framer Motion

- `fadeInUp` : apparition au scroll (opacity 0→1, y 40→0)
- `staggerContainer` : delai sequentiel entre enfants (0.15s)
- `cardHover` : scale 1→1.02 au hover
- `NetworkBackground` : Canvas 2D, max 50 noeuds, desactive sur mobile si besoin

---

## 4. DONNEES

Les 4 projets sont dans `src/data/projects.js` avec les statuts "Termine" et "En cours".
Les competences sont dans `src/data/skills.js` organisees par categorie.
Les infos personnelles sont dans `src/data/personal.js`.

---

## 5. WORKFLOW GIT

### Branches
- `main` : production (deploy auto Vercel)
- `dev` : developpement
- `feat/xxx` : feature branches

### Convention de commits
Format : `type(scope): description`
Types : feat | fix | style | docs | refactor | chore | perf

---

## 6. FEUILLE DE ROUTE

### Phase 1 — Fondations
- [x] Architecture validee
- [x] CLAUDE.md redige
- [x] Projet Next.js initialise
- [x] Design System configure (globals.css + @theme)
- [x] Fichiers de donnees crees
- [ ] Composants layout (Navbar, Footer)
- [ ] Page d'accueil (toutes les sections)

### Phase 2 — Pages de detail projets (sessions dediees)
- [ ] Template `/projects/[slug]`
- [ ] Contenu Garantia 360
- [ ] Contenu PeoplePulse
- [ ] Contenu Detection de Biais IA
- [ ] Contenu Storytelling

### Phase 3 — Polish & Deploy
- [ ] Section "A propos" finalisee
- [ ] Formulaire de contact
- [ ] Optimisation images + SEO
- [ ] Tests responsive
- [ ] Deploiement Vercel + domaine custom
