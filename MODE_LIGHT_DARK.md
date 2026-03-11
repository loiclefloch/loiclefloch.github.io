# Mode Light/Dark - Documentation

## Vue d'ensemble

Le site dispose maintenant d'un système de basculement entre mode sombre (dark) et mode clair (light) utilisant CSS Variables et localStorage pour la persistance.

## Fichiers modifiés/créés

### 1. Nouveau fichier de couleurs Stylus

- **`themes/cactus/source/css/_colors/custom-light.styl`**
  - Définit la palette de couleurs pour le mode clair
  - Basé sur la palette de marque personnalisée fournie

### 2. Fichier CSS de basculement de thème

- **`themes/cactus/source/css/theme-toggle.css`**
  - Contient les CSS Variables pour les deux thèmes
  - Utilise l'attribut `[data-theme="custom-light"]` pour le mode clair
  - Par défaut (`:root`), utilise le mode sombre

### 3. Modifications JavaScript

- **`themes/cactus/source/js/main.js`**
  - Ajout d'un IIFE (Immediately Invoked Function Expression) pour gérer le thème
  - Fonctions principales :
    - `initTheme()` : Initialise le thème au chargement de la page
    - `toggleTheme()` : Bascule entre dark et custom-light
    - `updateToggleIcon()` : Met à jour l'icône du bouton (soleil/lune)
  - Stocke la préférence dans `localStorage`

### 4. Modifications du header

- **`themes/cactus/layout/_partial/header.ejs`**
  - Ajout d'un bouton de basculement dans le menu de navigation
  - Icône Font Awesome qui change selon le thème actif

### 5. Modifications du head

- **`themes/cactus/layout/_partial/head.ejs`**
  - Inclusion du fichier `theme-toggle.css`

## Utilisation

### Pour l'utilisateur

1. Cliquer sur l'icône soleil/lune dans le menu de navigation
2. Le thème bascule immédiatement
3. La préférence est sauvegardée et persiste entre les sessions

### Palette de couleurs

#### Mode Sombre (Dark - par défaut)

- Background: `#040D12`
- Text: `#c9cacc`
- Accent primaire: `#93BEAE` (vert)
- Link: `#ff7e70` (corail)

#### Mode Clair (Light)

- Background: `#fdf9f3` (warm bg)
- Text: `#1a1a1a`
- Accent primaire: `#93beae` (vert)
- Link: `#93beae` (vert)

## Architecture technique

### CSS Variables

Les couleurs sont définies via CSS Variables (`--color-*`) ce qui permet :

- Un basculement instantané sans rechargement de page
- Une maintenance facile des couleurs
- Une performance optimale

### Attribut data-theme

L'attribut `data-theme` sur `<html>` détermine le thème actif :

```html
<html data-theme="dark">
  <!-- Mode sombre -->
  <html data-theme="custom-light">
    <!-- Mode clair -->
  </html>
</html>
```

### LocalStorage

La préférence est stockée avec la clé `"theme"` :

```javascript
localStorage.setItem("theme", "dark"); // ou 'custom-light'
```

## Développement futur

### Pour ajouter un nouveau thème :

1. Ajouter une nouvelle section dans `theme-toggle.css` :

```css
[data-theme="nouveau-theme"] {
  --color-background: ...;
  --color-text: ...;
  /* etc. */
}
```

2. Modifier `toggleTheme()` dans `main.js` pour inclure le nouveau thème

### Pour modifier les couleurs :

Éditer directement les CSS Variables dans `theme-toggle.css`

## Build et déploiement

Après modification :

1. `hexo clean` - Nettoie le cache
2. `hexo generate` - Génère le site statique
3. `hexo server` - Teste localement
4. Déployer normalement

## Notes

- Le mode par défaut est "dark" (sombre)
- Le premier chargement sans préférence utilisera le mode sombre
- L'icône du toggle : 🌞 (soleil) en mode sombre, 🌙 (lune) en mode clair
