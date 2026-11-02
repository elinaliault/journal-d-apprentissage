import ButtonNext from "../ButtonNext";
import FootnoteLink from "../FootnoteLink"

export default function TutoToDo() {
    return (
    <>
       <h1>Tutoriel React ToDoList</h1>
        <h2><i>23 Janvier</i></h2>
        <p>Cette semaine, j'ai réalisé le tutoriel React de MDN<sup><FootnoteLink id="footnote-1">1</FootnoteLink></sup>, qui visait à créer une application de to-do list basic, dans une sandbox<sup><FootnoteLink id="footnote-2">2</FootnoteLink></sup>. </p>
        <iframe title="Page web de la sandbox" src="https://codesandbox.io/p/sandbox/todo-tuto-2z7kvd"></iframe>
        <p>J'ai modifié une petite partie pour l'adapter à l'environnement de la sandbox : j'ai remplacé la librairie <code>nanoid</code> par <code>Date.now()</code><sup><FootnoteLink id="footnote-3">3</FootnoteLink></sup> pour la création d'une clé unique, car ne pouvant pas installer une librairie dans une sandbox j'ai pensé qu'un timestamp suffirait pour ce contexte d'utilisation.</p>
        <p>J'ai commencé le tuto en essayant de suivre les étapes et de comprendre les explications et j'ai fini en comprenant généralement la logique et en étant à peu près capable d'écrire le code correspondant à l'explication textuelle. </p>
        <p>Cependant, je trouve que je ne suis pas encore très à l'aise avec la logique globale au niveau de l'app et de comment séparer correctement et organiser le code, etc... C'est pour cela qu'il me semble important de continuer de pratiquer ces concepts dans un premier temps pour être bien confiante sur les bases et l'organisation avant d'avancer plus. Pour cela, je pense faire le tuto de la documentation React ensuite.</p>
        <ButtonNext />
        <div id="footnotes">
            <hr/>
            <p id="footnote-1">1. Ce que j'appelle le tutoriel React de MDN comprend, dans l'ordre, les 7 articles suivants : {" "}
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started">Getting started with React</a>, {" "}
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning">Beginning our React ToDo app</a>, {" "}
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_components">Componentizing our React app</a>, {" "}
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state">React interactivity: Events and state</a>, {" "}
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering">React interactivity: Editing, filtering, conditional rendering</a>, {" "}
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility">Accessibility in React</a>, {" "}
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_resources">React resources</a>
            </p>
            <p id="footnote-2">2. Étant donné que j'utilisais un ordinateur qui n'était pas le mien, je n'ai pas voulu activer la possibilité d'exécuter des scripts. Je ne pouvais donc pas exécuter les commandes <code>npm</code> nécessaires pour créer l'app et lancer le serveur de dev.</p>
            <p id="footnote-3">3. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now">Date.now()</a></p>
        </div> 
    </>
    )
}