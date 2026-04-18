import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Education from './pages/Education';
import Medical from './pages/Medical';
import Network from './pages/Network';
import Tracking from './pages/Tracking';
import Wellness from './pages/Wellness';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout otacza wszystkie podstrony */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="education" element={<Education />} />
          <Route path="medical" element={<Medical />} />
          <Route path="network" element={<Network />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="wellness" element={<Wellness />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;