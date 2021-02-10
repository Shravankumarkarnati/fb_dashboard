import React, { useEffect, useRef } from 'react';
import {
  arc,
  pie,
  PieArcDatum,
  scaleOrdinal,
  schemeCategory10,
  select,
} from 'd3';
import styled from 'styled-components';
import Summary from '../../Summary';
import Title from '../../Title';
import { PieChartD3Props } from './PieChart.utils';
import uniqueId from '../../../utils/getUid';
import Legend from '../../../Library/Legend/Legend';

const PieChartContainer = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid ${(props) => (props.theme !== 'dark' ? 'black' : 'white')};
  background-color: ${(props) => (props.theme === 'dark' ? 'black' : 'white')};
`;

const PieChartD3: React.FC<PieChartD3Props> = ({
  data,
  height = 500,
  width = 500,
  outerRadius = 200,
  innerRadius = 100,
  theme = 'light',
  legend = true,
}) => {
  const primaryColor = theme === 'light' ? 'black' : 'white';
  const pieChartSvgRef = useRef(null);

  const colors = scaleOrdinal<number, string>()
    .domain(data.map((cur) => cur.value))
    .range(schemeCategory10);

  const pieChart = pie().value((d: any) => d.value)(data as any);

  const getLabelCords = (
    d: PieArcDatum<
      | number
      | {
          valueOf(): number;
        }
    >,
    index: 0 | 1
  ) => {
    const r = outerRadius * 1.1;
    const a = (d.startAngle + d.endAngle - Math.PI) / 2;
    const ans = [Math.cos(a) * r, Math.sin(a) * r];
    return ans[index];
  };

  useEffect(() => {
    const svg = select(pieChartSvgRef.current);
    const arcGenerator = arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius) as any;

    svg.attr('width', width).attr('height', height);

    const pieElement = svg
      .selectAll('.pie')
      .data([uniqueId()])
      .join(
        (enter) =>
          enter
            .append('g')
            .attr('class', 'pie')
            .attr('transform', `translate(${width / 2},${height / 2})`),
        (update) => update,
        (exit) => exit.remove()
      );

    const dataSelection = () => {
      return uniqueId();
    };

    pieElement
      .selectAll('.arcs')
      .data(pieChart, dataSelection)
      .join(
        (enter) => {
          return enter
            .append('g')
            .attr('class', 'arcs')
            .call((arcs) =>
              arcs
                .append('path')
                .attr('d', arcGenerator)
                .attr('fill', (d) => colors(d.value))
                .attr('stroke', primaryColor)
                .style('stroke-width', '2px')
            )
            .call((arcs) =>
              arcs
                .append('text')
                .text((d) => d.value)
                .attr('class', 'arcs-text--value')
                .attr('x', (d) => getLabelCords(d, 0))
                .attr('y', (d) => getLabelCords(d, 1))
                .attr('stroke', primaryColor)
                .attr('stroke-width', 1)
                .attr('text-anchor', 'middle')
            );
        },
        (update) => {
          return update;
        },
        (exit) => exit.remove()
      );
  }, [data]);

  return (
    <PieChartContainer theme={theme}>
      <div className="inner-container" style={{ display: 'flex' }}>
        <svg className="svg" ref={pieChartSvgRef} />
        {legend && (
          <Legend
            theme={theme}
            labels={data.map((cur) => cur.name)}
            colors={data.map((cur) => colors(cur.value))}
            shape="circle"
          />
        )}
      </div>
      <Title theme={theme} text="Pie Chart" />
      <Summary theme={theme} text="Shravan Kumar Karnati" />
    </PieChartContainer>
  );
};

export default PieChartD3;
