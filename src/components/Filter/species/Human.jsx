import "./status.scss"

export default function Human({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Human
        </div>
    </div>
  )
}
