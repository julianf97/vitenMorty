import "./status.scss"

export default function Male({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Male
        </div>
    </div>
  )
}
