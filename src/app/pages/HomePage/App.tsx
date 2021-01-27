import React, { useContext } from 'react';
import DashboardContainer from '../../components/dashboardContainer/dashboardContainer';
import Header from '../../components/Header/header';
import useContextChange from '../../hooks/useContextChange';
import AppContext from '../../utils/context';
import './App.styles.scss';

function App() {
  // reportWebVitals(console.log);
  const appContext = useContext(AppContext);
  const contextValue = useContextChange(appContext.data);

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App" data-testid="App">
        <div className="App-container">
          <Header />
          <DashboardContainer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
