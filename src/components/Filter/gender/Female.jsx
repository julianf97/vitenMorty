import "./status.scss"

export default function Female({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Female
        </div>
    </div>
  )
}
