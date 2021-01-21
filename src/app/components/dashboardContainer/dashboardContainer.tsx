import React, { useContext, useEffect } from 'react';
import AppContext, {
  metricsDataType,
  stockDataType,
} from '../../utils/context';
import fetchData from '../../utils/fetchData';
import PieChart from '../PieChart/PieChart';
import './dashboardContainer.styles.scss';

interface DashboardContainerProps {}

const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const { changeContext } = useContext(AppContext);

  useEffect(() => {
    fetchData().then((res) => {
      changeContext({
        fb: {
          metrics: res.metricData as metricsDataType[],
          stocks: res.stockData as stockDataType[],
        },
      });
    });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-container-1">
        <PieChart />
      </div>
      {/* <div className="dashboard-container-2">2</div>
      <div className="dashboard-container-3">3</div>
      <div className="dashboard-container-4">4</div> */}
    </div>
  );
};

export default DashboardContainer;
