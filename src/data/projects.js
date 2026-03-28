export const projects = [
  {
    id: 1,
    slug: "garantia-360",
    title: "Garantia 360",
    subtitle: "Vision Client 360\u00b0 \u2014 Assurance",
    type: "Data Engineering",
    status: "Termin\u00e9",
    summary:
      "Pipeline data complet (ingestion, nettoyage, transformation, mod\u00e9lisation) pour unifier les donn\u00e9es client silot\u00e9es et alimenter un dashboard d\u00e9cisionnel Power BI.",
    problematics:
      "Donn\u00e9es silot\u00e9es entre diff\u00e9rents services, emp\u00eachant une vue d\u2019ensemble du client.",
    tools: ["Python", "Airflow", "DBT", "BigQuery", "DrawDB", "SQL", "Power BI", "DAX"],
    detailedContent: {
      aiApproach: "Pour garantir un code d\u2019une qualit\u00e9 optimale et acc\u00e9l\u00e9rer le d\u00e9veloppement de cette architecture complexe, j\u2019ai int\u00e9gr\u00e9 Gemini Pro \u00e0 mon flux de travail. L\u2019utilisation avanc\u00e9e de ce mod\u00e8le IA m\u2019a permis d\u2019optimiser mes scripts Python, mes mod\u00e8les dbt et mes requ\u00eates SQL, d\u00e9montrant ma capacit\u00e9 \u00e0 allier expertise data humaine et puissance de l\u2019Intelligence Artificielle pour un maximum de ROI et d\u2019efficacit\u00e9.",
      intro: {
        title: "Projet Garantia : La Data au service de l\u2019Assurance de demain",
        storytelling:
          "Aujourd\u2019hui, le secteur de l\u2019assurance est assis sur une mine d\u2019or : la donn\u00e9e. Pourtant, beaucoup de compagnies peinent encore \u00e0 relier les informations de leurs clients, de leurs sinistres et de leur support client. R\u00e9sultat ? Une vision fragment\u00e9e qui co\u00fbte cher et d\u00e9grade l\u2019exp\u00e9rience utilisateur. C\u2019est de ce constat qu\u2019est n\u00e9 le projet Garantia. L\u2019objectif n\u2019\u00e9tait pas seulement de faire de jolis graphiques, mais de construire une Modern Data Stack compl\u00e8te, de A \u00e0 Z. De la g\u00e9n\u00e9ration de la donn\u00e9e brute jusqu\u2019\u00e0 la restitution d\u2019indicateurs strat\u00e9giques, Garantia est un projet innovant qui prouve qu\u2019avec la bonne architecture, on peut obtenir une vue 360\u00b0 parfaitement claire sur la rentabilit\u00e9, les risques et la satisfaction client.",
      },
      pipelineImage: "/images/projects/images_garantia/visuel-pipeline.png",
      stack: [
        { tool: "Python", role: "G\u00e9n\u00e9ration" },
        { tool: "Google BigQuery", role: "Data Warehouse" },
        { tool: "dbt & SQL", role: "Transformation" },
        { tool: "GitHub", role: "Versionning" },
        { tool: "Power BI", role: "Visualisation" },
        { tool: "Apache Airflow", role: "Orchestration" },
      ],
      steps: [
        {
          label: "\u00c9tape 1 \u2014 G\u00e9n\u00e9ration de donn\u00e9es r\u00e9alistes",
          description:
            "Pour que le projet soit pertinent et r\u00e9plicable en entreprise, j\u2019ai utilis\u00e9 une biblioth\u00e8que Python sp\u00e9cifiquement con\u00e7ue pour g\u00e9n\u00e9rer des jeux de donn\u00e9es fictifs mais ultra-r\u00e9alistes. Noms, adresses, contrats, montants de sinistres, tickets de support... Ces donn\u00e9es simulent parfaitement le chaos et la complexit\u00e9 d\u2019une vraie base de donn\u00e9es d\u2019assurance.",
          image: null,
        },
        {
          label: "\u00c9tape 2 \u2014 Stockage & Nettoyage",
          description:
            "Ingestion des donn\u00e9es brutes dans BigQuery. Nettoyage et anonymisation avec dbt : standardisation des emails, s\u00e9curisation des donn\u00e9es sensibles. Enrichissement par calcul dynamique de l\u2019\u00e2ge via SQL.",
          image: null,
        },
        {
          label: "\u00c9tape 3 \u2014 Mod\u00e9lisation",
          description:
            "Conception d\u2019un sch\u00e9ma en \u00e9toile optimis\u00e9 (Tables de Faits et Dimensions) garantissant des performances maximales pour l\u2019analyse.",
          comparison: {
            before: {
              label: "Avant dbt : Donn\u00e9es brutes et silot\u00e9es",
              image: "/images/projects/images_garantia/schema-initiale.png",
            },
            after: {
              label: "Apr\u00e8s dbt : Mod\u00e8le en \u00e9toile optimis\u00e9",
              image: "/images/projects/images_garantia/modele-constellation.png",
            },
          },
        },
        {
          label: "\u00c9tape 4 \u2014 Transformation & Tests",
          description:
            "Transformation des donn\u00e9es avec dbt : mat\u00e9rialisation des vues et tables, versionning GitHub, ex\u00e9cution de dbt build pour valider la qualit\u00e9 du pipeline.",
          image: "/images/projects/images_garantia/bigquery-tables.png",
          imageAlt: "R\u00e9sultat dbt \u2014 tables mat\u00e9rialis\u00e9es dans BigQuery",
          extraImages: [
            {
              src: "/images/projects/images_garantia/dbt-build-success.png",
              alt: "dbt build ex\u00e9cut\u00e9 avec succ\u00e8s",
            },
            {
              src: "/images/projects/images_garantia/dbt-lineage.png",
              alt: "Lin\u00e9age dbt \u2014 flux de donn\u00e9es",
            },
          ],
        },
        {
          label: "\u00c9tape 5 \u2014 Business Intelligence",
          description:
            "Connexion de Power BI pour un Dashboard interactif structur\u00e9 autour de 4 axes : Global, Profil Client, Sinistres & Risques, Support.",
          image: null,
        },
      ],
      perspectives:
        "Bien que statiques pour la d\u00e9mo, ce pipeline est pens\u00e9 pour \u00eatre orchestrable (CRON via Apache Airflow) pour une actualisation quotidienne sans intervention humaine.",
      powerbiEmbed: "https://app.powerbi.com/view?r=eyJrIjoiYzVlOWMxZDAtMjBjZC00ZTYzLWFhYmItMDQzOGNmMWFkN2UwIiwidCI6IjgwODc1MGQ0LWE3OGYtNDE1OC1hOTk0LThhMmYxNTkzZTMzZiJ9",
    },
    logo: "/images/projects/images_garantia/logo-garantia.png",
    thumbnail: "/images/projects/images_garantia/garantia-thumbnail.png",
  },
  {
    id: 2,
    slug: "peoplepulse",
    title: "PeoplePulse",
    subtitle: "Pr\u00e9diction du Turnover \u2014 RH",
    type: "Data Science",
    status: "Termin\u00e9",
    summary:
      "Pipeline data de A \u00e0 Z aboutissant \u00e0 un mod\u00e8le ML pr\u00e9dictif pour anticiper les d\u00e9parts des employ\u00e9s (churn prediction RH).",
    problematics:
      "Hausse inexpliqu\u00e9e du taux de rotation du personnel (turnover).",
    tools: ["Python", "Apache Airflow", "dbt", "Google BigQuery", "XGBoost", "Power BI", "Seaborn / Matplotlib"],
    githubUrl: "https://github.com/PeoplePulse75015/PeoplePulse",
    thumbnail: "/images/projects/images_peoplepulse/peoplepulse-overview.png",
    logo: "/images/projects/images_peoplepulse/logo-peoplepulse.png",
    detailedContent: {
      aiApproach:
        "Pour optimiser le développement de ce pipeline complexe et la calibration du modèle XGBoost, j'ai intégré Gemini Pro à mon workflow. L'IA m'a permis d'affiner mes scripts Python, mes modèles dbt et la sélection des features, démontrant ma capacité à allier expertise Data Science et Intelligence Artificielle pour maximiser la précision prédictive.",
      intro: {
        title: "PeoplePulse : De la réaction à la prédiction RH",
        storytelling:
          "Le turnover coûte extrêmement cher aux entreprises : recrutement, formation, perte de savoir-faire... Face à une crise d'attrition chez un client, ma mission n'était pas de constater les départs après coup dans un tableau de bord. Il fallait construire une pipeline complète d'analyse et de Machine Learning capable de prédire qui allait partir dans les 6 prochains mois — pour permettre aux RH d'agir en amont, avant que la démission ne soit posée.",
      },
      pipelineImage: "/images/projects/images_peoplepulse/pipeline-schema.png",
      stack: [
        { tool: "Apache Airflow", role: "Orchestration" },
        { tool: "Google BigQuery", role: "Data Warehouse" },
        { tool: "dbt", role: "Transformation" },
        { tool: "Python / Colab", role: "Data Mining" },
        { tool: "XGBoost", role: "Machine Learning" },
        { tool: "Power BI", role: "Reporting RH" },
        { tool: "Seaborn / Matplotlib", role: "Dataviz exploratoire" },
      ],
      steps: [
        {
          label: "Étape 1 — Ingénierie & Architecture des Données",
          description:
            "Point de départ : consolidation de multiples sources de données (internes et externes). Des DAGs Python ont été créés dans Airflow pour automatiser l'extraction et le flux de données. Les données brutes sont envoyées dans BigQuery puis transformées via dbt. Un travail rigoureux a été mené pour nettoyer les données et surtout éviter le data leakage — écarter les variables « parasites » qui auraient permis au modèle de tricher (ex : une variable indiquant une fin de contrat déjà programmée).",
          image: "/images/projects/images_peoplepulse/airflow-dag-definition.png",
          imageAlt: "Définition du DAG Airflow — orchestration du pipeline",
          extraImages: [
            {
              src: "/images/projects/images_peoplepulse/airflow-dag-tasks.png",
              alt: "Tâches du DAG Airflow",
            },
            {
              src: "/images/projects/images_peoplepulse/airflow-interface.png",
              alt: "Interface Airflow — exécution réussie",
            },
            {
              src: "/images/projects/images_peoplepulse/drawdb-avant.png",
              alt: "Modélisation base de données — avant dbt",
            },
            {
              src: "/images/projects/images_peoplepulse/drawdb-apres.png",
              alt: "Modélisation base de données — après dbt",
            },
          ],
        },
        {
          label: "Étape 2 — Data Mining & Recherche de Corrélations",
          description:
            "Une fois la donnée propre, elle a été ingérée dans Google Colab. L'objectif : comprendre pourquoi les employés partaient. À l'aide de Seaborn et Matplotlib, des analyses visuelles poussées ont permis d'identifier les corrélations cachées entre l'âge, le salaire, la distance domicile-travail, le niveau de satisfaction et le risque de départ.",
          image: "/images/projects/images_peoplepulse/heatmap-global.png",
          imageAlt: "Heatmap — corrélations entre variables RH et risque de départ",
        },
        {
          label: "Étape 3 — Machine Learning (XGBoost)",
          description:
            "Un modèle XGBoost a été entraîné sur le jeu de données préparé, après encodage des variables catégorielles et sélection des features les plus pertinentes. Ce modèle calcule une probabilité de départ pour chaque collaborateur actif. Sa fiabilité a été validée par une matrice de confusion.",
          image: "/images/projects/images_peoplepulse/confusion-matrix.png",
          imageAlt: "Matrice de Confusion — validation du modèle XGBoost",
        },
        {
          label: "Étape 4 — Résultats Business : Vue 360° & Alertes Proactives",
          description:
            "Le pipeline se divise en deux flux : un Dashboard Power BI global pour la direction (taux de rotation historique, motifs de départ) et un Système d'Alerte automatisé. À chaque mise à jour des données, le modèle scanne les profils et notifie les managers RH si un talent clé est identifié comme « à haut risque de départ ». Les RH ne subissent plus les démissions — elles organisent des entretiens de rétention ciblés avant que le préavis ne soit posé.",
          image: "/images/projects/images_peoplepulse/powerbi-dashboard.png",
          imageAlt: "Dashboard Power BI — suivi de la santé sociale de l'entreprise",
          extraImages: [
            {
              src: "/images/projects/images_peoplepulse/alerte-xgboost.png",
              alt: "Système d'alerte XGBoost — notification automatisée aux managers RH",
            },
          ],
        },
      ],
      impact: {
        cards: [
          {
            icon: "TrendingDown",
            color: "cyan",
            label: "Le Point de Rupture",
            highlight: "La Restructuration",
            description:
              "La Dataviz a révélé un pic de turnover anormal, identifié comme la conséquence directe d'une restructuration interne ayant fortement dégradé la culture d'entreprise et la motivation des équipes.",
          },
          {
            icon: "Target",
            color: "purple",
            label: "La Cible",
            highlight: "Le Cycle sans fin des Juniors",
            description:
              "Le modèle a identifié que les profils Juniors étaient les plus exposés. L'entreprise est enfermée dans un cercle vicieux : Recrutement → Formation → Démission prématurée → Nouveau Recrutement.",
          },
          {
            icon: "DollarSign",
            color: "emerald",
            label: "Le Coût Financier",
            highlight: "-15% de productivité par départ",
            description:
              "Chaque départ entraîne une perte sèche de 15% de productivité. Les juniors quittant l'entreprise avant d'être opérationnels, le ROI de leur recrutement est systématiquement négatif.",
          },
        ],
        recommendation:
          "Plutôt que d'investir massivement dans le recrutement pour combler les trous, la donnée prouve qu'il faut réallouer le budget sur la rétention. La recommandation principale apportée à la direction : refondre totalement le processus d'Onboarding des juniors et restaurer la culture managériale pour briser ce cycle de démissions.",
        confusionImage: null,
        confusionImageAlt: null,
      },
      perspectives:
        "Ce pipeline est conçu pour être entièrement automatisé via Apache Airflow (CRON). À chaque mise à jour des données RH, le modèle XGBoost se réexécute automatiquement et les alertes sont envoyées aux managers sans intervention humaine. La prochaine étape : déploiement en production avec intégration directe aux outils SIRH de l'entreprise.",
      powerbiEmbed: null,
    },
  },
  {
    id: 3,
    slug: "detection-biais-ia",
    title: "D\u00e9tection de Biais IA",
    subtitle: "\u00c9thique IA \u2014 Conformit\u00e9 EU AI Act",
    type: "Intelligence Artificielle",
    status: "En cours",
    summary:
      "D\u00e9veloppement d\u2019un mod\u00e8le ML avec preuve math\u00e9matique et statistique de l\u2019absence de biais discriminatoire.",
    objective:
      "Prouver qu\u2019une IA d\u2019octroi de pr\u00eat bancaire respecte les exigences du EU AI Act en mati\u00e8re de non-discrimination.",
    tools: ["Python", "Scikit-learn"],
    thumbnail: null,
  },
  {
    id: 4,
    slug: "storytelling-experience-client",
    title: "Storytelling & Exp\u00e9rience Client",
    subtitle: "Data Analysis \u2014 Cas r\u00e9el",
    type: "Data Analysis",
    status: "En cours",
    summary:
      "D\u00e9monstration par la donn\u00e9e de la r\u00e9solution d\u2019un probl\u00e8me d\u2019organisation interne impactant l\u2019exp\u00e9rience client.",
    objective:
      "Analyser les failles de communication interne d\u2019une entreprise et proposer des solutions data-driven.",
    tools: ["Python", "Pandas", "Power BI", "SQL"],
    thumbnail: null,
  },
];
