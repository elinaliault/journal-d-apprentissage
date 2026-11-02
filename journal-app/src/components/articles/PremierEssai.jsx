import ButtonNext from "../ButtonNext"

export default function PremierEssai() {
    return (
    <>
        <h1 id="introduction">React : premier essai</h1>
        <h2><i>2 Octobre</i></h2>
        <p>J'ai parcouru la documentation React avec pour intention de me familiariser avec la syntaxe et l'idée générale. J'aime bien tester en apprenant pour être sûre que j'ai bien compris avant de continuer. J'ai donc testé et bidouillé dans une sandbox (fork de la documentation) ma compréhension de la syntaxe et de l'intégration du style (voir ci-dessous ou en suivant {" "}
            <a target="_blank" href="https://codesandbox.io/p/sandbox/react-dev-forked-nh4867">ce lien</a>).</p>
        <iframe title="Page web de la sandbox" src="https://codesandbox.io/p/sandbox/react-dev-forked-nh4867"></iframe>
        <ButtonNext />
    </>
    )
}