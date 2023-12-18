import "./status.scss"


export default function Humanoide({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Humanoid
        </div>
    </div>
  )
}
