import "./status.scss"

export default function Unknown({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Unknown
        </div>
    </div>
  )
}
