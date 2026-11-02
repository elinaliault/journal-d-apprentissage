import ButtonNext from "../ButtonNext";
import FootnoteLink from "../FootnoteLink"

export default function SuiteDev() {
    return (
    <>
        <h1>Suite du développement</h1>
        <h2><i>5 Mars</i></h2>
        <p>Cette semaine, j'ai fixé les quelques bugs que j'avais et j'ai développé les fonctionnalités qu'il me manquait pour arriver au rendu que je voulais. </p>
        <p>J'ai commencé par faire en sorte que le navigateur réinitialiser le scroll (remette en haut) à chaque changement de route<sup><FootnoteLink id="footnote-1">1</FootnoteLink></sup>. 
        J'en ai aussi profité pour faire des améliorations sur le design et le style du site.</p>
        <p>Ensuite, j'ai développé un composant <code>Sommaire</code> pour permettre de naviguer entre les différents articles dans n'importe quel ordre. Pour cela, je me suis appuyée sur le tableau d'objets créé pour <code>BoutonNext</code>. </p>
        <p>Enfin, j'ai voulu rendre ma page d'accueil un peu plus intéressante. Je souhaitais réaliser une animation inspirée du logo DVD qui rebondit sur les coins de l'écran, mais avec le logo React. Pour cela, je me suis inspirée de l'article <a target="_blank" href="https://dev.to/thormeier/old-school-tech-how-to-animate-the-classic-dvd-logo-bouncing-11d9">Old School Tech: How to Animate The Classic DVD Logo Bouncing</a>, que j'ai adapté à React. J'ai utilisé <code>useRef()</code> pour récupérer les éléments dans le DOM et <code>useEffect()</code> pour effectuer l'animation une fois le DOM généré. J'ai ajouté une partie pour détecter l'élément qui contient le texte et faire rebondir le logo sur ces bords aussi. Voilà, voilà, ça bouge !</p>
        <ButtonNext />
        <div id="footnotes">
            <hr/>
            <p id="footnote-1">1. Je me suis appuyée sur l'article <a target="_blank" href="https://www.matthewhoelter.com/2022/04/02/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6.html">How to Scroll to Top on Route Change With React Router Dom v6</a></p>
        </div>
    </>
    )
}