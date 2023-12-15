import "./status.scss"

export default function StatusAlive({ onClick }) {
  return (
    <div className="statusAlive" onClick={() => onClick()}>
      <div className="selectAlive">
        Alive
      </div>
    </div>
  );
}