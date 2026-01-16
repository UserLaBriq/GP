# Site Web - Cabinet Georges Parastatis

Site web moderne et responsive pour le Cabinet de Maître Georges Parastatis, avocat au barreau de Paris.

## 🎯 Caractéristiques

- **Design épuré et professionnel** inspiré du site jplouton-avocat.fr
- **Responsive** : compatible mobile, tablette et desktop
- **7 pages complètes** avec navigation fluide
- **Tailwind CSS** pour un design moderne
- **SEO optimisé** avec meta tags appropriés
- **Formulaire de contact** (statique, backend à implémenter)

## 📁 Structure du projet

```
gp-site/
├── index.html                          # Page d'accueil
├── le-cabinet.html                     # Présentation du cabinet
├── droit-penal.html                    # Droit pénal et international
├── droit-international-famille.html    # Droit de la famille
├── responsabilite-medicale.html        # Responsabilité médicale
├── presse.html                         # Articles de presse
├── contact.html                        # Page de contact
├── assets/
│   ├── css/
│   │   └── input.css                   # Styles personnalisés Tailwind
│   ├── js/
│   │   └── main.js                     # JavaScript (menu mobile, etc.)
│   └── images/                         # Dossier pour les images
├── package.json                        # Configuration npm
├── tailwind.config.js                  # Configuration Tailwind
└── README.md                           # Ce fichier
```

## 🚀 Installation et utilisation

### Option 1 : Utilisation directe (avec CDN Tailwind)

Le site utilise Tailwind CSS via CDN, donc **aucune installation n'est nécessaire** pour le tester.

1. Ouvrez simplement `index.html` dans votre navigateur
2. Ou utilisez XAMPP :
   - Placez le dossier dans `/Applications/XAMPP/xamppfiles/htdocs/`
   - Accédez à `http://localhost/gp-site/`

### Option 2 : Compilation Tailwind CSS (optionnel, pour production)

Pour optimiser le CSS en production :

1. **Installer les dépendances** :
```bash
npm install
```

2. **Compiler le CSS** :
```bash
npm run build
```

3. **Mode développement avec watch** :
```bash
npm run watch
```

4. **Mettre à jour les fichiers HTML** pour utiliser le CSS compilé :
   Remplacez la ligne CDN :
   ```html
   <script src="https://cdn.tailwindcss.com"></script>
   ```
   Par :
   ```html
   <link rel="stylesheet" href="assets/css/styles.css">
   ```

## 🎨 Design

### Palette de couleurs

- **Fond principal** : Blanc (#FFFFFF)
- **Texte principal** : Gris très foncé (#1F2937)
- **Texte secondaire** : Gris moyen (#6B7280)
- **Couleur d'accentuation** : Bleu professionnel (#1E40AF)
- **Bordures** : Gris très clair (#E5E7EB)

### Typographie

- **Titres** : Roboto Condensed (Google Fonts)
- **Corps de texte** : Open Sans (Google Fonts)
- **Taille** : Texte petit (14-15px) pour un look épuré

## 📄 Pages du site

### 1. Accueil (index.html)
- Hero section avec présentation du cabinet
- 4 domaines d'intervention en grille
- Valeurs et approche du cabinet

### 2. Le Cabinet (le-cabinet.html)
- Parcours de Me Georges Parastatis
- Photos du cabinet (placeholders à remplacer)
- Expertise et engagement

### 3. Droit Pénal (droit-penal.html)
- Expertise en droit pénal général
- Accompagnement à tous les stades
- Droit pénal international et extradition
- Procédure d'extradition détaillée

### 4. Droit International de la Famille (droit-international-famille.html)
- Droit international privé
- Divorces internationaux
- Enlèvements d'enfants
- Services détaillés

### 5. Responsabilité Médicale (responsabilite-medicale.html)
- Cas traités (erreurs médicales, infections, etc.)
- Voies de recours (judiciaire et amiable/CRCI)
- Accompagnement du cabinet

### 6. Presse (presse.html)
- Articles et interventions médiatiques
- Grille de cartes avec extraits
- Expertise médiatique

### 7. Contact (contact.html)
- Formulaire de contact (statique)
- Coordonnées complètes
- Carte Google Maps

## 🔧 Personnalisation

### Ajouter des images

1. Placez vos images dans `assets/images/`
2. Formats recommandés :
   - Logo : SVG ou PNG (transparent)
   - Photos : JPG ou WebP
   - Optimisez vos images avant upload

3. Remplacez les placeholders dans les pages :
   - Page "Le Cabinet" : photo de l'avocat et photos du cabinet
   - Logo dans le header (optionnel)

### Modifier le contenu

Éditez directement les fichiers HTML. Le contenu est structuré de manière claire avec des commentaires.

### Personnaliser les couleurs

Modifiez le fichier `tailwind.config.js` :

```javascript
colors: {
    'primary': '#VotreCouleur',
    'text-dark': '#VotreCouleur',
    // ...
}
```

## 📱 Fonctionnalités JavaScript

Le fichier `assets/js/main.js` inclut :

- **Menu mobile responsive** : toggle au clic
- **Navigation active** : mise en évidence de la page actuelle
- **Formulaire de contact** : gestion basique (à connecter au backend)
- **Smooth scroll** : défilement fluide pour les ancres
- **Lazy loading** : chargement différé des images (si activé)

## 🔄 Prochaines étapes

### Backend du formulaire de contact

Pour rendre le formulaire fonctionnel, vous pouvez :

**Option A - PHP (recommandé pour XAMPP)** :

Créez un fichier `contact-handler.php` :

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $telephone = htmlspecialchars($_POST['telephone']);
    $objet = htmlspecialchars($_POST['objet']);
    $message = htmlspecialchars($_POST['message']);

    $to = "ge@parastatisavocat.com";
    $subject = "Nouveau message : " . $objet;
    $body = "Nom: $nom\nEmail: $email\nTéléphone: $telephone\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

Puis modifiez `assets/js/main.js` pour envoyer via AJAX.

**Option B - Service tiers** :
- Formspree.io
- Netlify Forms
- EmailJS

### Ajout d'un CMS (optionnel)

Pour gérer facilement le contenu :
- WordPress (avec thème personnalisé)
- Strapi (headless CMS)
- Netlify CMS

### Optimisations supplémentaires

- [ ] Ajouter Google Analytics
- [ ] Implémenter Schema.org pour le SEO local
- [ ] Compresser et optimiser les images
- [ ] Ajouter un certificat SSL (HTTPS)
- [ ] Créer un sitemap.xml
- [ ] Ajouter un robots.txt

## 📊 SEO

Le site est optimisé pour le SEO avec :

- Meta tags title, description, keywords sur chaque page
- Structure HTML sémantique (h1, h2, h3)
- URLs descriptives
- Alt text pour les images (à compléter avec vraies images)
- Open Graph tags pour le partage social
- Attribut lang="fr"

### Amélioration SEO recommandée

1. Créez un fichier `sitemap.xml`
2. Créez un fichier `robots.txt`
3. Inscrivez le site sur Google Search Console
4. Ajoutez Google My Business pour le référencement local

## 🌐 Hébergement

### Options d'hébergement recommandées :

1. **Hébergement web classique** :
   - OVH
   - O2Switch
   - Hostinger

2. **Hébergement statique** (si pas de backend PHP) :
   - Netlify (gratuit)
   - Vercel (gratuit)
   - GitHub Pages

3. **Avec XAMPP local** :
   - Accès local : `http://localhost/gp-site/`
   - Parfait pour les tests

## 📞 Support

Pour toute question sur le site :
- Contactez le développeur
- Consultez la documentation Tailwind CSS : https://tailwindcss.com/docs

## 📝 Notes importantes

1. **Formulaire de contact** : Actuellement statique, nécessite une intégration backend
2. **Images** : Les placeholders doivent être remplacés par de vraies images
3. **Google Maps** : L'iframe utilise une URL générique, vérifiez qu'elle fonctionne correctement
4. **Liens presse** : Les liens "#" doivent être remplacés par les URLs réelles des articles

## ✅ Checklist avant mise en ligne

- [ ] Remplacer toutes les images placeholder
- [ ] Configurer le formulaire de contact avec backend
- [ ] Vérifier tous les liens
- [ ] Tester sur mobile, tablette et desktop
- [ ] Optimiser les images
- [ ] Configurer le SSL (HTTPS)
- [ ] Soumettre le sitemap à Google
- [ ] Tester la vitesse de chargement (Google PageSpeed)
- [ ] Vérifier l'accessibilité (WCAG)

## 🎉 Crédits

- **Design** : Inspiré de jplouton-avocat.fr
- **Framework CSS** : Tailwind CSS
- **Polices** : Google Fonts (Roboto Condensed, Open Sans)
- **Développement** : Site créé pour le Cabinet Georges Parastatis

---

**Version** : 1.0.0
**Date** : Janvier 2026
**Statut** : Prêt pour les tests et ajout d'images
