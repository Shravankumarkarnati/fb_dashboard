import { group } from 'd3';
import { useContext } from 'react';
import AppContext from '../../utils/context';

export interface dataType {
  type: string;
  number: number;
}

const groupData = () => {
  const {
    data: {
      fb: { metrics },
    },
  } = useContext(AppContext);
  if (metrics === null) return null;

  const groupedData = group(metrics, (d) => d.Type);
  const data: dataType[] = [];
  groupedData.forEach((key, value) => {
    const cur: dataType = { type: value, number: key.length };
    data.push(cur);
  });
  return data;
};

export default groupData;
