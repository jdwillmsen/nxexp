import styles from './tile.module.scss';
import { Game } from '@nxexp/api-interfaces';

export interface TileProps {
  game: Game;
}

export const currencyFormat = (amount: number) => '$' + amount.toFixed(2);
export const ratingFormat = (rating: number | undefined) =>
  (rating === undefined ? '?' : rating.toFixed(0)) + '/5';

export function Tile(props: TileProps) {
  const game = props.game;
  return (
    <div className={styles.tile}>
      {game.image && (
        <div className={styles.imageContainer}>
          <img src={game.image} alt={game.name} className={styles.gameImage} />
        </div>
      )}
      <div className={styles.gameName}>{game.name}</div>
      <div className={styles.gameRating}>{ratingFormat(game.rating)}</div>
      <div className={styles.gamePrice}>{currencyFormat(game.price)}</div>
    </div>
  );
}

export default Tile;
