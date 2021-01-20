import React from 'react';
import DashboardContainer from '../../components/dashboardContainer/dashboardContainer';
import Header from '../../components/Header/header';
import './App.styles.scss';

function App() {
  // reportWebVitals(console.log);
  return (
    <div className="App" data-testid="App">
      <div className="App-container">
        <Header />
        <DashboardContainer />
      </div>
    </div>
  );
}

export default App;
