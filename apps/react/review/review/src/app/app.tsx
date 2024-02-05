import styles from './app.module.scss';
import { Route, Routes, useParams } from 'react-router-dom';
import { List } from '@nxexp/list';
import { Details } from '@nxexp/details';

const Details2 = () => {
  const { game } = useParams();

  return <Details gameId={game || ''} />;
};

export function App() {
  return (
    <>
      <h1 className={styles.header}>Board Game Hoard: Reviews</h1>
      <Routes>
        <Route path={'/'} element={<List />} />
        <Route path={'/:game'} element={<Details2 />} />
      </Routes>
    </>
  );
}

export default App;
