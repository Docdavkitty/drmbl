# DrMBL — Artist Page 🎵

Site web statique personnel pour **DrMBL** : musique, découvertes et newsletter.

## 🚀 Déploiement sur GitHub Pages

### Option 1 : Nouveau dépôt

```bash
# 1. Crée un dépôt sur GitHub nommé "drmbl" ou "drmbl.github.io"
# 2. Clone-le et copie les fichiers

git clone https://github.com/TON_PSEUDO/drmbl.git
cp -r /chemin/vers/DrMBL-site/* drmbl/
cd drmbl
git add .
git commit -m "🎵 DrMBL artist page"
git push

# 3. Active GitHub Pages dans Settings → Pages → branch: main, folder: / (root)
```

### Option 2 : Pages utilisateur (drmbl.github.io)

Si tu veux que le site soit à `https://drmbl.github.io`, nomme le dépôt `drmbl.github.io`.

### Option 3 : gh-pages

```bash
npm install -g gh-pages
gh-pages -d .
```

## 📝 Personnalisation

### Musique
- Le player SoundCloud est déjà lié à ton profil (tous les morceaux apparaissent)
- Les vidéos YouTube sont en placeholder : remplace les `<div class="video-card placeholder">` par des vrais embeds YouTube

### Découvertes
Édite `index.html` — les `<article class="discovery-card">` sont faciles à modifier :
- Change le `data-category` (music, gear, tech)
- Modifie le titre, la description et le lien

### Newsletter (Buttondown)
1. Crée un compte sur [buttondown.email](https://buttondown.email)
2. Crée ta newsletter
3. Remplace l'action du formulaire par ton URL Buttondown personnelle

### Email de contact
Change `drmbl@proton.me` dans la section Contact.

## 🎨 Palette

| Rôle | Couleur |
|------|---------|
| Fond | `#0a0a0a` |
| Accent | `#f97316` (orange) |
| Accent secondaire | `#a855f7` (violet) |
| Texte | `#e8e8e8` |

## 📄 Licence

MIT — fais ce que tu veux.
