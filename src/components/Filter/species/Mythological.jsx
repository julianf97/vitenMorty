import "./status.scss"

export default function Mythological({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Mythological
        </div>
    </div>
  )
}
