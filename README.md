# Portfolio Isaac Onekonga (Next.js)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

- `lib/data.ts` : tout le contenu (parcours, projets, compétences). Modifiez ici pour mettre à jour le site.
- `components/` : une section = un composant. `hooks/useFrame.ts` : boucle d'animation partagée.
- `public/` : photos et logos. `app/globals.css` : design (tokens en haut du fichier).
- Déploiement : Vercel (import du dépôt Git) ou `npm run build` sur un VPS avec Nginx.
