import "./status.scss"

export default function StatusDead({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Dead
        </div>
    </div>
  )
}
