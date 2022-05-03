import { Route, Routes } from 'react-router-dom';
import { Friends } from './pages/friends';
import { Layout } from './pages/layout';
import { MainPage } from './pages/main';
import { Messages } from './pages/messages';
import { Timeline } from './pages/timeline';
import { addPost } from './state';

function App({ state }) {
  const { msgs, users, profilePage } = state;

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
          element={<Timeline profilePage={profilePage} addPost={addPost} />}
        />
        <Route path="friends" element={<Friends friends={users} />} />
      </Route>
    </Routes>
  );
}

export default App;
