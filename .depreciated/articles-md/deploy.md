# Déploiement
## *5 Mars*

J'avais un peu peur du déploiement et de trouver ça très compliqué, mais au final ça n'a pas du tout été mon ressenti. J'ai décidé de déployer mon site sur [GitHub Pages](https://docs.github.com/fr/pages). 

Dans un premier temps, j'ai testé le déploiement avec le project [Tic Tac Toe](https://elinaliault.github.io/tic-tac-toe/) (réalisé il y a quelques articles pour vous et quelques semaines pour moi). J'ai suivi deux articles[^3] expliquant le process et eu très peu de problème. 

Dans un second temps, j'ai réalisé ce même procédé sur le projet Journal d'apprentissage (hey). J'avais anticipé que React Router allais nécessiter des changements et ai donc été peu surprise des erreurs de routing. J'ai échanger `BrowserRouter` pour `HashRouter`[^4] et modifier les fichiers utilisant les URLs. 

Avec ces quelques changements, mon site est enfin en ligne !

[^3]: [Deploying a React App on Github Pages With a Custom URL](https://medium.com/@amh03160/deploying-a-react-app-on-github-pages-with-a-custom-url-fee94f3be82c), [Vite to live in 5 minutes! The Lazy Dev’s Guide to GitHub Pages](https://levelup.gitconnected.com/deploy-your-vite-app-to-github-pages-a-lazy-devs-guide-37b0b472fa35)
[^4]: Idée issue de l'article [React Router on GitHub Pages: Fix Deployment Issues in 6 Simple Steps](https://medium.com/@faithnjah5/react-router-on-github-pages-fix-deployment-issues-in-6-simple-steps-ec8c1b358e76)