import "./status.scss"

export default function Alien({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Alien
        </div>
    </div>
  )
}
