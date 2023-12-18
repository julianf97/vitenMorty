import "./status.scss"

export default function Disease({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Disease
        </div>
    </div>
  )
}
