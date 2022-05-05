import { Route, Routes } from 'react-router-dom';
import { Friends } from './pages/friends';
import { Layout } from './pages/layout';
import { MainPage } from './pages/main';
import { Messages } from './pages/messages';
import { Timeline } from './pages/timeline';

function App({ store }) {
  const { dispatch } = store;

  const { msgs, users, profilePage } = store.getState();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route
          path="messages/*"
          element={<Messages messages={msgs} users={users} />}
        />
        <Route
          path="timeline"
          element={
            <Timeline
              profilePage={profilePage}
              dispatch={dispatch.bind(store)}
            />
          }
        />
        <Route path="friends" element={<Friends friends={users} />} />
      </Route>
    </Routes>
  );
}

export default App;
