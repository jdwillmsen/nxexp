import styles from './app.module.scss';
import { useEffect, useState } from 'react';
import { Game } from '@nxexp/api-interfaces';
import { Tile } from '@nxexp/tile';
export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return (
    <>
      <div className={styles.centerText}>
        <h1 className={styles.header}>Board Game Hoard: Reviews</h1>
      </div>
      <div className={styles.gameContainer}>
        {games.map((game) => {
          return (
            <a
              className={styles.gameLink}
              href={'/' + game.id}
              key={game.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Tile game={game} />
            </a>
          );
        })}
      </div>
    </>
  );
}

export default App;
