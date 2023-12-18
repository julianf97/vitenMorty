import "./status.scss"

export default function Genderless({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
        <div className="selectAlive">
            Genderless
        </div>
    </div>
  )
}
