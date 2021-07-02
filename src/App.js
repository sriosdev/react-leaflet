import { useState } from 'react';
import './App.css';

import MapView from './components/MapView'
import RadiusSelector from './components/RadiusSelector';

function App() {
  const [comptitorsAreaSize, setComptitorsAreaSize] = useState(2000)

  return (
    <>
      <RadiusSelector changeRadius={setComptitorsAreaSize} />
      <MapView comptitorsAreaSize={comptitorsAreaSize} />
    </>
  );
}

export default App;
