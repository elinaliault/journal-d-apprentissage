import ButtonNext from "../ButtonNext";

export default function Deploy() {
    return (
    <>
        <h1>Déploiement</h1>
        <h2><i>5 Mars</i></h2>
        <p>J'avais un peu peur du déploiement et de trouver ça très compliqué, mais au final ça n'a pas du tout été mon ressenti. J'ai décidé de déployer mon site sur <a target="_blank" href="https://docs.github.com/fr/pages">GitHub Pages</a>. </p>
        <p>Dans un premier temps, j'ai testé le déploiement avec le projet <a target="_blank" href="https://elinaliault.github.io/tic-tac-toe/">Tic Tac Toe</a> (réalisé il y a quelques articles pour vous et quelques semaines pour moi). J'ai suivi deux articles<sup><a href="#footnote-1">1</a></sup> expliquant le process et eu très peu de problème. </p>
        <p>Dans un second temps, j'ai réalisé ce même procédé sur le projet Journal d'apprentissage (hey). J'avais anticipé que React Router allait nécessiter des changements et j'ai donc été peu surprise des erreurs de routing. J'ai échangé <code>BrowserRouter</code> pour <code>HashRouter</code><sup><a href="#footnote-2">2</a></sup> et modifier les fichiers utilisant les URLs. </p>
        <p>Avec ces quelques changements, mon site est enfin en ligne !</p>
        <ButtonNext />
        <div id="footnotes">
            <hr/>
            <p id="footnote-1">1. <a target="_blank" href="https://medium.com/@amh03160/deploying-a-react-app-on-github-pages-with-a-custom-url-fee94f3be82c">Deploying a React App on Github Pages With a Custom URL</a>, <a target="_blank" href="https://levelup.gitconnected.com/deploy-your-vite-app-to-github-pages-a-lazy-devs-guide-37b0b472fa35">Vite to live in 5 minutes! The Lazy Dev's Guide to GitHub Pages</a></p>
            <p id="footnote-2">2. Idée issue de l'article <a target="_blank" href="https://medium.com/@faithnjah5/react-router-on-github-pages-fix-deployment-issues-in-6-simple-steps-ec8c1b358e76">React Router on GitHub Pages: Fix Deployment Issues in 6 Simple Steps</a></p>
        </div>
    </>
    )
}