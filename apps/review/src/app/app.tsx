import styles from './app.module.scss';
import { useEffect, useState } from 'react';
import { Game } from '@nxexp/api-interfaces';

export const currencyFormat = (amount: number) => '$' + amount.toFixed(2);
export const ratingFormat = (rating: number | undefined) =>
  (rating === undefined ? '?' : rating.toFixed(0)) + '/5';

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Board Game Hoard: Reviews</h1>
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
              <div className={styles.tile}>
                {game.image && (
                  <div>
                    <img
                      src={game.image}
                      alt={game.name}
                      className={styles.gameImage}
                    />
                  </div>
                )}
                <div className={styles.gameName}>{game.name}</div>
                <div className={styles.gameRating}>
                  {ratingFormat(game.rating)}
                </div>
                <div className={styles.gamePrice}>
                  {currencyFormat(game.price)}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default App;
