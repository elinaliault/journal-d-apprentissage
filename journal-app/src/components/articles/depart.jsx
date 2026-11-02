import ButtonNext from "../ButtonNext"
import FootnoteLink from "../FootnoteLink"

export default function Depart() {
    return (
        <>
            <h1>D'où je pars</h1>
            <p>Pour recontextualiser mes connaissances en code avant de commencer cet apprentissage, je vous propose de faire le point sur ce que je sais déjà. </p>
            <p>J'ai appris le HTML et CSS et des débuts de JavaScript après le lycée, en utilisant majoritairement les articles sur le site du <a target="_blank" href="https://developer.mozilla.org/en-US/">MDN</a> et en m'entraînant sur des petits projets.</p>
            <p>J'ai ensuite pu approfondir ces langages, notamment le JavaScript, durant mon DNMADE<sup><FootnoteLink id="footnote-1">1</FootnoteLink></sup>. Nous avions en effet des cours de programmation durant lesquels nous développions nos projets réalisés pendant les cours de création. Suivant les projets, le développement aboutissait à un prototype, soit graphique soit fonctionnel.</p>
            <p>Cet enseignement m'a aussi donné l'occasion d'apprendre les bases de Unity et de sa programmation en C# avec pour finalité le développement d'un projet dans cette technologie.</p>
            <p>Durant cette période, j'ai réalisé un stage à la MAIF. Celui-ci m'a beaucoup appris sur le design système (le cœur de métier de l'équipe dans laquelle je travaillais) mais aussi, grâce à la pluridisciplinarité des profils de mes collègues, j'ai pu entrevoir d'autres fonctionnements et techniques de dev. En conséquence, cela m'a donné envie d'en apprendre plus. J'ai donc profité de cet été pour apprendre le Markdown, le Pug et m'exercer sur le JavaScript. J'ai notamment écrit un site de To-Do Liste pour m'entraîner sur l'utilisation du local storage et la manipulation de JSON en JavaScript.</p>
            <p>Après mon DNMADE, j'ai ainsi intégré le Master ECNI à Gobelins et l'entreprise Fidatech dans laquelle je suis en alternance. Durant ces années, je n'ai pas vraiment eu l'occasion de pratiquer le développement en cours mais j'ai participé à certains projets au travail.</p>
            <p>J'ai, par exemple, réalisé des templates HTML avec du Jinja2 (appris pour l'occasion), l'idée étant qu'elles puissent être remplies avec des données d'un dictionnaire python puis transformer en PDFs. Le CSS a d'ailleurs été un challenge car il a fallu trouver des solutions de contournement et éviter tout CSS "moderne" afin de permettre à wkhtmltopdf (le programme utilisé pour transformer les HTML en PDFs) d'interpréter correctement le style.</p>
            <p>Voilà globalement d'où je pars. Donc c'est parti !</p>
            <ButtonNext />
            <div id="footnotes">
                <hr/>
                <p id="footnote-1">1. Diplôme National des Métiers d'Art et de Design</p>
            </div>
        </>
    )
}