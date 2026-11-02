import ButtonNext from "../ButtonNext";
import FootnoteLink from "../FootnoteLink"

export default function Tuto() {
    return (
    <>
        <h1>Tutoriel</h1>
        <h2>Ou comment j'apprendrais à faire un site si je recommençais</h2>
        <p>Je vais essayer de détailler comment j'apprendrais toutes les compétences qui m'ont amené ici si je devais repartir de zéro.
            Je tiens à rappeler cependant que j'ai une préférence pour les tutoriels écrits et pour des explications de comment
            les choses fonctionnent, cela sera donc reflété dans les recommandations ci-dessous.
        </p>
        <h3>HTML et CSS</h3>
        <p className="underH3">Si je devais complètement recommencer, je commencerais par le HTML puis le CSS étant donné que beaucoup des compétences
            suivantes s'appuient sur ces bases et que cela me semble aussi un début relativement simple (en comparaison à d'autres
            langages par exemple). J'ai personnellement appris ces langages avec le site du <a target="blank_" href="https://developer.mozilla.org/en-US/">MDN</a>.
            Le site a évolué depuis, mais je pense tout de même que c'est la ressource majeure que je conseillerais pour apprendre ces langages.
            <br />Et surtout, de faire des essais, des petits projets pour s'entraîner !
        </p>
        <h3>Javascript basique</h3>
        <p className="underH3">Je continuerai en apprenant les bases du Javascript pour commencer à ajouter de l'interactivité.
            En plus de MDN, je recommanderai de trouver un projet JS à répliquer pour bien prendre en main la logique. 
            Cela peut être un générateur de couleur aléatoire, un site to-do liste ou tout autre projet qui vous motive un tant soit peu.
        </p>
        <h3>Version Control</h3>
        <p className="underH3"> Git est un version control system qui permet du suivre et de gérer les modifications de code. 
            GitHub, de son côté, est une plateforme qui permet d'héberger le code de projets et de faciliter la collaboration.
            <br />Il me semble important de commencer à manipuler ses sujets/outils quand on commence à bien maîtriser les bases
            et à monter en difficultés. En effet, ce ne serait pas la première fois que l'on ne retrouve plus la dernière version 
            d'un projet et qu'on doit deviner où on en était et ce qui avait été fait après... C'est donc à ce moment-là que git 
            devient un outil particulièrement pratique pour traquer les versions d'un projet. Associé à GitHub par exemple, cela permet
            d'avoir toutes ces versions enregistrées en ligne et accessible de partout. 
            <br />Je conseillerais de commencer par la partie qui semble la plus intuitive. J'ai personnellement commencé git en même temps que GitHub, 
            mais je sais que certains préfèrent apprendre git d'abord et ajouter GitHub après. Dans tous les cas, il me semble important de bien comprendre
            les concepts fondamentaux comme les branches, commit, staging changes et pull request. Selon sa volonté d'apprentissage et 
            son niveau de confort avec le terminal, il est possible de faire les actions de bases graphiquement avec GitHub Desktop. Je 
            recommanderai cependant quand même d'installer git, ne serait-ce que pour pouvoir faire certaines actions graphiquement dans 
            l'éditeur de code (VS Code par exemple). 
        </p>
        <h3>Terminal</h3>
        <p className="underH3">
            Et si vous vous sentez à l'aise avec le terminal (ou que vous avez envie de l'être), alors let's go !
            <br />Je vous conseillerais d'apprendre les commandes git au fur et mesure de vos besoins et de votre apprentissage des concepts associés.
            Je recommanderai aussi de vous familiariser avec quelques commandes basiques comme <code>cd</code>, <code>touch</code> et <code>mkdir</code>, ne serait-ce que 
            parce qu'elles fluidifieront votre flow de travail. Si vous utilisez Windows, vous pouvez appendre les commandes PowerShell équivalentes, mais je vous suggérerais 
            plutôt d'utiliser git bash (inclus dans le package d'installation git) ou <a target="_blank" href="https://learn.microsoft.com/en-us/windows/wsl/">WSL</a> {" "}
            afin de pouvoir apprendre les commandes standard et debugger plus facilement.
            <br />De plus, pour aider à l'intégration des commandes dans le flow de travail (et soyons honnête, pour se rassurer qu'on ne va pas tout casser), 
            je vous conseillerais de vous appuyer sur la documentation, notamment intégrée dans votre terminal afin de ne pas s'interrompre à chaque fois qu'on a un doute.
            Si vous êtes sur Linux ou Mac, vous devriez avoir accès aux <a target="blank_" href="https://en.wikipedia.org/wiki/Man_page">man pages</a>, {" "}
            accessibles via la commande <code>man</code> suivit du nom de l'article cherché. Vous pouvez aussi installer <a target="blank_" href="https://tldr.sh/">tldr pages</a> {" "}
            qui se veut une version simplifier des man pages, est aussi disponible pour Windows et accessible de la même manière via la commande <code>tldr</code>.
        </p>
        <h3>React</h3>
        <p className="underH3">
            Arrivé ici, vous devriez déjà avoir un bon niveau de HTML, CSS et Javascript. Les différences sont majoritairement
            la syntaxe, le découpage en composants et les hooks. Pour cette raison, il me semble plus utile de commencer par apprendre
            en faisant et de consolider les parties nécessaires au fur et à mesure. Personnellement, je préfère les explications de MDN et recommanderai
            donc <a target="blank_" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started">leur tuto</a> {" "}
            mais vous pouvez en trouver d'autres notamment sur <a target="blank_" href="https://react.dev/learn/tutorial-tic-tac-toe">la documentation de React</a>. 
            <br />Encore une fois, suivant votre aise avec le terminal, vous pouvez soit faire tout faire dans une sandbox pour commencer (bac à sable ne nécessitant pas de ligne de commande), soit 
            en installant <a target="blank_" href="https://nodejs.org/en/download">Node.js</a> et en créant votre projet sur la base d'un modèle par exemple<sup><FootnoteLink id="footnote-1">1</FootnoteLink></sup>.
            <br />Une fois que vous avez bien compris les concepts de bases, je suggérerais, comme pour Javascript, de trouver un projet et 
            de le réaliser soi-même pour s'entraîner (comme j'ai pu le faire avec ce site).
        </p>
        <h3>Déploiement</h3>
        <p className="underH3">
            Le déploiement est peut-être l'élément que je maîtrise le moins de cette liste. En effet, suivant quels packages vous utilisez dans votre projet,
            la mise en place du déploiement sera plus ou moins difficile. Cependant, si votre projet est très basique, vous ne devrez pas avoir trop de problèmes.
            Je vous recommanderais simplement de trouver un tutoriel pour la solution d'hébergement que vous aurez choisi et les packages (dont React) utilisés dans votre projet.
            Et de ne surtout pas hésiter à en lire plusieurs, à essayer diverses solutions et à lire les entrées de forums liées à votre problème.
        </p>
        {/* fin */}
        <p>Pour toute information complémentaire, je vous renvoie vers les documentations de tous ses éléments et les ressources que j'ai pu mentionner au cours de ce journal.</p>
        <p>Bon apprentissage !</p>
        <ButtonNext />
        <div id="footnotes">
            <hr/>
            <p id="footnote-1">1. Je parle ici de la commande <code>npm create vite@latest moz-todo-react -- --template react</code> (<a target="blank_" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started#initializing_your_app">pour plus d'informations</a>)</p>
        </div>
    </>
    )
}