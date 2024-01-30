import { useEffect, useState } from 'react';
import { Game } from '@nxexp/api-interfaces';

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return games;
}
