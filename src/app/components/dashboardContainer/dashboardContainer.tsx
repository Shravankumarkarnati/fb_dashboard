import React from 'react';
import './dashboardContainer.styles.scss';

interface DashboardContainerProps {}

const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  // useEffect(() => {
  //   fetchData().then((res) => console.log(res));
  // }, []);
  return (
    <div className="dashboard-container">
      <div className="dashboard-container-1">1</div>
      <div className="dashboard-container-2">2</div>
      <div className="dashboard-container-3">3</div>
      <div className="dashboard-container-4">4</div>
    </div>
  );
};

export default DashboardContainer;
