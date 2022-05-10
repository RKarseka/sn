import { Route, Routes } from 'react-router-dom';
import { FriendsC } from './pages/friends/friends-c';
import { Layout } from './pages/layout';
import { MainPage } from './pages/main';
import { Messages } from './pages/messages';
import { TimelineContainer } from './pages/timeline/timeline-container';
import 'bootstrap/dist/css/bootstrap.min.css';

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
