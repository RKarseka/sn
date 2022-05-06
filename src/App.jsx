import { Route, Routes } from 'react-router-dom';
import { Friends } from './pages/friends';
import { FriendsC } from './pages/friends/friends-c';
import { Layout } from './pages/layout';
import { MainPage } from './pages/main';
import { Messages } from './pages/messages';
import { TimelineContainer } from './pages/timeline/timeline-container';
import { store } from './state';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        {/* <Route
          path="messages/*"
          element={<Messages messages={msgs} users={users} />}
        /> */}
        <Route path="timeline" element={<TimelineContainer />} />
        <Route path="friends" element={<FriendsC />} />
      </Route>
    </Routes>
  );
}

export default App;
