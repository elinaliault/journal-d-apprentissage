import ButtonNext from "../ButtonNext";
import FootnoteLink from "../FootnoteLink"

export default function DocOverview() {
    return (
    <>
        <h1>Documentation overview</h1>
        <h2><i>19 Janvier</i></h2>
        <p>Depuis la semaine dernière, j'ai continué d'utiliser les lignes de commandes git plutôt que les actions graphiques. </p>
        <p>J'ai aussi appris quelques commandes bash<sup><FootnoteLink id="footnote-1">1</FootnoteLink></sup> pour se déplacer et manipuler des fichiers comme : </p>
        <ul>
            <li><code>cd</code> : se déplacer dans l'arbre de fichiers</li>
            <li><code>mkdir</code> : créer un dossier</li>
            <li><code>mv</code> : déplacer (ou renommer) un/des fichiers</li>
            <li><code>touch</code> : créer un fichier</li>
        </ul>
        <p>J'ai aussi commencé à réfléchir aux projets que je compte intégrer dans mon portfolio et lesquels seraient stratégiquement les plus percutants et les plus alignés avec le type de postes que je vise.</p>
        <p>En lisant la documentation React quand j'ai fait mes premiers essais, j'ai eu beaucoup de mal à comprendre la partie setup et j'ai eu l'impression que cela était compliqué et que j'allais avoir du mal à le faire en plus d'avoir du mal à comprendre. Cependant, en lisant l'article <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started">Getting started with React</a> de MDN, j'ai compris sans problème particulier. Je pense que la différence majeure est que MDN assume un niveau de départ plus bas (et renvoie vers les articles des prérequis, etc...) et potentiellement aussi que la manière d'expliquer me convient juste mieux. Quoi qu'il en soit, faire le setup react et commencer à suivre le tuto d'apprentissage des bases est mon objectif pour les jours à venir.</p>
        <p>J'ai profité du momentum que j'avais par rapport à la lecture de documentation pour lire <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview">JavaScript language overview</a>. Mon objectif était de rafraîchir mes connaissances en JavaScript, mais surtout d'acquérir une connaissance (au moins de surface) des sujets que je n'ai pas encore rencontrés.
        <br/>Mes notes :</p>
        <ul>
            <li>Opérateurs logiques avec un comportement de court-circuit<sup><FootnoteLink id="footnote-2">2</FootnoteLink> <FootnoteLink id="footnote-3">3</FootnoteLink></sup>
                <pre><code>const a = 0 &amp;&amp; &quot;Hello&quot;; // 0 because 0 is &quot;falsy&quot;
                <br/>const b = &quot;Hello&quot; || &quot;world&quot;; // &quot;Hello&quot; because both &quot;Hello&quot; and &quot;world&quot; are &quot;truthy&quot;</code></pre>
            </li>
            <li><code>if...else</code> syntaxe en utilisant des opérateurs<sup><FootnoteLink id="footnote-4">4</FootnoteLink></sup>
            <pre><code>condition ? exprIfTrue : exprIfFalse</code></pre>
            </li>
            <li><code>try...catch</code><sup><FootnoteLink id="footnote-5">5</FootnoteLink></sup> and <code>throw</code><sup><FootnoteLink id="footnote-6">6</FootnoteLink></sup></li>
            <li>Arrow fonctions<sup><FootnoteLink id="footnote-7">7</FootnoteLink></sup></li>
            <li>Classes<sup><FootnoteLink id="footnote-8">8</FootnoteLink></sup></li>
            <li>Asynchronous programming<sup><FootnoteLink id="footnote-9">9</FootnoteLink></sup></li>
        </ul>
        <ButtonNext />
        <div id="footnotes">
            <hr/>
            <p id="footnote-1">1. Étant sur Windows, j'utilise git bash comme terminal afin d'éviter de faire la conversion entre bash et powershell et d'apprendre les commandes dans un language plus standard.</p>
            <p id="footnote-2">2. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators">Binary logical operators</a></p>
            <p id="footnote-3">3. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Logical AND (&amp;&amp;)</a></p>
            <p id="footnote-4">4. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator">Conditional (ternary) operator</a></p>
            <p id="footnote-5">5. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">try...catch</a></p>
            <p id="footnote-6">6. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw">throw</a></p>
            <p id="footnote-7">7. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow function expressions</a></p>
            <p id="footnote-8">8. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">Classes</a></p>
            <p id="footnote-9">9. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview#asynchronous_programming">Asynchronous programming</a></p>
        </div>
    </>
    )
}