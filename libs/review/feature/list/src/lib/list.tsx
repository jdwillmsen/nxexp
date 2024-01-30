import { useGames } from '@nxexp/games';
import { Link } from 'react-router-dom';
import { Tile } from '@nxexp/tile';

/* eslint-disable-next-line */
export interface ListProps {}

export function List(props: ListProps) {
  const games = useGames();
  return (
    <div>
      {games.map((game) => {
        return (
          <Link
            to={'/' + game.id}
            key={game.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Tile game={game}></Tile>
          </Link>
        );
      })}
    </div>
  );
}

export default List;
