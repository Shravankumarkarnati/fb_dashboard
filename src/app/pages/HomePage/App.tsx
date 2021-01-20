import React from 'react';
import DashboardContainer from '../../components/dashboardContainer/dashboardContainer';
import Header from '../../components/Header/header';

function App() {
  // reportWebVitals(console.log);
  return (
    <div className="App h-full w-full flex-col" data-testid="App">
      <Header />
      <DashboardContainer />
    </div>
  );
}

export default App;
