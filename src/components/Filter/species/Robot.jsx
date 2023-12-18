import "./status.scss"


export default function Robot({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Robot
        </div>
    </div>
  )
}
