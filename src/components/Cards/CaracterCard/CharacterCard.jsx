import "./_characterCard.scss"
export default function CharacterCard({
  gender = '',
  episode = [],
  image = '',
  location = {},
  name = '',
  species = '',
  status = '',
  type = '',
}) {



  return (
    <div className="characterCard">
        <div className="imageCard">
          <div className="statusContainer">
            <div className="status">
              <span>{status}</span>
            </div>
          </div>
        </div>
        <div className="infoCard">
          <div className="titleContainer">
            <h2>{name && name}</h2>
          </div>
          <div className="firstSeenContainer">
            <h6>First Seen At: </h6>
            <h2> {episode && episode} </h2>
          </div>
          <div className="lastKnowLocationContainer">
            <h6>Last Known Location: </h6>
            <h2> {location.name && location.name} </h2>
          </div>
        </div>
    </div>
  )
}
