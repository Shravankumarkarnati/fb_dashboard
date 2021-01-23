import { group } from 'd3';
import { useContext } from 'react';
import AppContext from '../../utils/context';

export interface dataType {
  type: string;
  number: number;
}

const groupDataPostMonth = () => {
  const {
    data: {
      fb: { metrics },
    },
  } = useContext(AppContext);
  if (metrics === null) return null;

  const groupedData = group(metrics, (d) => d['Post Month']);
  const data: dataType[] = [];
  groupedData.forEach((key, value) => {
    const cur: dataType = {
      type: value,
      number: key.length,
    };
    data.push(cur);
  });
  data.sort((a, b) => parseInt(a.type, 10) - parseInt(b.type, 10));
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  data.forEach((cur) => {
    // eslint-disable-next-line no-param-reassign
    cur.type = months[parseInt(cur.type, 10) - 1];
  });
  return data;
};

export default groupDataPostMonth;
