# Abderrahman El Ouali - Portfolio 

Site portfolio personnel statique deploye avec GitHub Pages.

## Apercu

Ce repository contient le code source du site web de presentation professionnelle:
- profil
- experiences
- articles
- projets (Data, Cloud, Dev)

Le site est concu en HTML/CSS/JS.

## URL de publication

Le site est publie via GitHub Pages sur:

`https://elouali.github.io`

## Structure du projet

```text
.
|- index.html (point d entree GitHub Pages, redirection)
|- pages/
|  |- index.html
|  |- about.html
|  |- experiences.html
|  |- articles.html
|  |- projects-hub.html
|  |- projects-data.html
|  |- projects-archi.html
|  |- projects-dev.html
|  |- projects/
|     |- project-*.html
|     |- data_analyse_ocp.html
|     |- project-template.html
|- assets/
|  |- css/
|  |  |- main.css
|  |  |- project-template.css
|  |- js/
|     |- main.js
|     |- project-template.js
|- assets/images/
|- assets/docs/Cv_EL_OUALI_2025.pdf
```

## Stack technique

- HTML5
- CSS3
- JavaScript
- jQuery (scripts existants)
- Font Awesome
- Google Fonts

### Ajouter un nouveau projet

1. Dupliquer `pages/projects/project-template.html` vers `pages/projects/project-<nom>.html`.
2. Remplir les sections (hero, meta, slider, contexte, solution, resultats).
3. Ajouter la carte/lien du projet dans la page categorie correspondante:
   - `pages/projects-data.html`
   - `pages/projects-archi.html`
   - `pages/projects-dev.html`
4. Verifier l affichage desktop + mobile.

## Developpement local

Ce site est statique: aucun build requis.

Option simple avec Python:

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.


## Licence

Voir `LICENSE.txt`.





