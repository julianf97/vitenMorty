import "./status.scss"

export default function Poopybutthole({onClick}) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Poopybutthole
        </div>
    </div>
  )
}
