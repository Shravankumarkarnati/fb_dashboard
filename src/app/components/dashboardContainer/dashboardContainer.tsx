import React, { useContext, useEffect, useState } from 'react';
import AppContext, {
  metricsDataType,
  stockDataType,
} from '../../utils/context';
import fetchData from '../../utils/fetchData';
// import Legend from '../Legend/Legend';
import PieChartD3 from '../PieChart/d3/PieChart';
import './dashboardContainer.styles.scss';

interface DashboardContainerProps {}

const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const { changeContext } = useContext(AppContext);
  const [dataset, changeDataset] = useState(true);
  const d1 = [
    { name: 'Photo', value: 426 },
    { name: 'Status', value: 45 },
    { name: 'Link', value: 22 },
    { name: 'Video', value: 7 },
  ];
  const d2 = [
    { name: 'Photo', value: 426 },
    { name: 'Music', value: 200 },
    { name: 'Zip', value: 108 },
    { name: 'Status', value: 45 },
    { name: 'Link', value: 22 },
    { name: 'Video', value: 7 },
  ];

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

  const changeData = () => {
    changeDataset(!dataset);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-container--1">
        <PieChartD3 data={dataset ? d1 : d2} />
      </div>
      <button type="button" onClick={changeData}>
        Change Data
      </button>
    </div>
  );
};

export default DashboardContainer;
