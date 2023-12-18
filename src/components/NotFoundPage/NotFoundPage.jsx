import "./_notfoundpage.scss"
import mortyCriying from "../../assets/mortyCriying.png"

export default function NotFoundPage() {
  return (
    <div className="contenedorPrincipalNotFound">
        <div className="contenedorTitulo">
           <h1>No Characters Found</h1>
        </div>
        <div className="contenedorSubTitulo">
            <h3>Something went Wubba lubba dub dub! Please try again</h3>
        </div>
        <div className="imgContainer">
            <img src={mortyCriying} alt="Not Found image"></img>
        </div>
    </div>
  )
}
