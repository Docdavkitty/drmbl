# DrMBL — Artist Page 🎵

Site statique personnel pour **DrMBL** : production musicale (hip hop/electro), découvertes et newsletter.

→ [docdavkitty.github.io/drmbl/](https://docdavkitty.github.io/drmbl/)

## Stack

- **HTML/CSS/JS** pur — zéro dépendance, zéro build, zéro framework
- **GitHub Pages** — branche `main`, dossier racine
- **Buttondown** — newsletter
- **SoundCloud** — lecteur embedded

## Structure

```
├── index.html       ← page unique, toutes les sections
├── styles.css       ← 878 lignes, design system complet
├── script.js        ← scroll-to-top, navigation, animations
├── favicon.svg      ← icône du site
├── og-image.png     ← image Open Graph 1200×630
├── robots.txt       ← tout autorisé
└── README.md
```

## Sections du site

| Section | Description |
|---------|-------------|
| **Hero** | Logo + tagline + liens réseaux |
| **Musique** | Lecteur SoundCloud + YouTube (embeds) |
| **Découvertes** | Cards musique/gear/tech avec filtres par catégorie |
| **Newsletter** | Formulaire Buttondown intégré |
| **Contact** | Liens SoundCloud, YouTube, email |

## Ajouter un morceau (musique)

### SoundCloud
1. Va sur le morceau SoundCloud → **Partager** → **Embed**
2. Copie l'URL de l'iframe
3. Remplace le `src` dans le `<iframe>` existant dans `index.html`

### YouTube
1. Va sur la vidéo → **Partager** → **Intégrer**
2. Copie le `<iframe>`
3. Ajoute dans la section musique ou découvertes

## Ajouter une découverte

Dans `index.html`, duplique un `<article class="discovery-card">` :

```html
<article class="discovery-card" data-category="music">
  <div class="card-icon">🎧</div>
  <h3>Titre</h3>
  <p>Description courte.</p>
  <a href="https://..." target="_blank" rel="noopener">Découvrir →</a>
</article>
```

`data-category` : `music`, `gear`, `tech`

## Déploiement

Le site est pushé manuellement via git. Les fichiers modifiés sont commités et envoyés :

```bash
git add -A
git commit -m "description"
git push
```

GitHub Pages déploie automatiquement depuis la branche `main`.

## Palette

| Rôle | Couleur |
|------|---------|
| Fond | `#0a0a0a` |
| Accent | `#f97316` (orange) |
| Accent secondaire | `#a855f7` (violet) |
| Texte | `#e8e8e8` |
| Cartes | `#1a1a1a` |
| Bordures | `#2a2a2a` |

## Contact

- SoundCloud : [soundcloud.com/david-pariente-1](https://soundcloud.com/david-pariente-1)
- YouTube : [@DrMaboule](https://www.youtube.com/@DrMaboule)
- Email : [davidpariente+drmbl@gmail.com](mailto:davidpariente+drmbl@gmail.com)

## Licence

MIT — fais ce que tu veux.
