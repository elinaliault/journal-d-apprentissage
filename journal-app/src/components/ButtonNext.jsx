import { Link } from "react-router"
import goToNextArticle from "../utils/goToNextArticle"
import { useLocation } from "react-router";


export default function ButtonNext() {
    const { pathname } = useLocation();
    const next = goToNextArticle(pathname);

    return (
        <Link to={`/${next.url}`}>
            <button>{next.titre}</button>
        </Link>
    )
}