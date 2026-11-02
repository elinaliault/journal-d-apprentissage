import { AllLinks } from "./sommaireVariables";

export default function goToNextArticle(pathname) {
     // "/intro/" -> "intro", "/" -> ""
    const current = pathname.replace(/^\/|\/$/g, "");

    // home -> first article
    if (current === "") return AllLinks[0];

    const index = AllLinks.findIndex((link) => link.url === current);
    if (index !== -1 && index < AllLinks.length - 1) {
        return AllLinks[index + 1];
    }

    console.log("unknown route")
    return AllLinks[0]; // unknown route: fall back to home
    
}