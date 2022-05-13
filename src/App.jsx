import { Route, Routes } from 'react-router-dom';
import { FriendsC } from './pages/friends/friends-c';
import { Layout } from './pages/layout';
import { MainPage } from './pages/main';
import { Messages } from './pages/messages';
import { TimelineC } from './pages/timeline/timeline-container';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        {/* <Route
          path="messages/*"
          element={<Messages messages={msgs} users={users} />}
        /> */}
        <Route path="timeline" element={<TimelineC />} />
        <Route path="friends" element={<FriendsC />} />
      </Route>
    </Routes>
  );
}

export default App;
