import { useState, useEffect } from 'react';
import './_characterCard.scss';

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
  const [episodeName, setEpisodeName] = useState('N/A');

  useEffect(() => {
    const fetchEpisodeData = async () => {
      try {
        if (episode && episode[0]) {
          const episodeResponse = await fetch(episode[0]);
          const episodeData = await episodeResponse.json();
          setEpisodeName(episodeData.name || 'N/A');
        }
      } catch (error) {
        console.error('Error fetching episode data:', error);
      }
    };

    fetchEpisodeData();
  }, [episode]);

  return (
    <div className="characterCard">
      <div
        className="imageCard"
        style={{
          width: '100%',
          height: '225px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          transition: 'all 0.5s ease',
          backgroundImage: `url(${image})`
        }}
      >
        <div className="statusContainer">
          {status === "Alive" ? (
            <div className="status-alive">
              <span>{status}</span>
            </div>
          ) : status === "Dead" ? (
            <div className="status-dead">
              <span>{status}</span>
            </div>
          ) : (
            <div className="status-unknown">
              <span>{status}</span>
            </div>
          )}
        </div>
      </div>
      <div className="statusContainer-Hover">
        {status === "Alive" ? (
          <div className="status-alive">
            <span>{status}</span>
          </div>
        ) : status === "Dead" ? (
          <div className="status-dead">
            <span>{status}</span>
          </div>
        ) : (
          <div className="status-unknown">
            <span>{status}</span>
          </div>
        )}
      </div>
      <div className="infoCard">
        <div className="titleContainer">
          <h2>{name && name}</h2>
        </div>
        <div className="firstSeenContainer">
          <h6>First Seen At: </h6>
          <h2>{episodeName}</h2>
        </div>
        <div className="lastKnowLocationContainer">
          <h6>Last Known Location: </h6>
          <h2>{location.name && location.name}</h2>
          <div className="arrowContainer"></div>
        </div>
      </div>
    </div>
  );
}