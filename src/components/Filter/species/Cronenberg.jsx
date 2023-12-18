import "./status.scss"

export default function Cronenberg({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Cronenberg
        </div>
    </div>
  )
}
