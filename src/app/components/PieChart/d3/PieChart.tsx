import { arc, pie, PieArcDatum, select } from 'd3';
import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PieChartLegendSingle, { PieChartD3Props } from './PieChart.utils';
import './PiChart.d3.styles.scss';

const PieChartD3: React.FC<PieChartD3Props> = ({
  data,
  height = 500,
  width = 500,
  outerRadius = 200,
  innerRadius = 0,
  theme = 'light',
}) => {
  const [primaryColor, secondaryColor] =
    theme === 'light' ? ['black', 'white'] : ['white', 'black'];

  const pieChartSvgRef = useRef(null);
  const colorPallate =
    data.length === 4
      ? ['#003f5c', '#7a5195', '#ef5675', '#ffa600']
      : ['#550b5c', '#8d045f', '#be1c57', '#e34546', '#f9742e', '#ffa600'];

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
    const r = ((outerRadius + innerRadius) * 11) / 10;
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
      .data([uuidv4])
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
      return uuidv4();
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
                .attr('fill', (_, index) => colorPallate[index])
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
            )
            .call((arcs) =>
              arcs
                .append('text')
                .text((d: any) => d.data.name)
                .attr('class', 'arcs-text--name')
                .attr('x', (d) => arcGenerator.centroid(d)[0])
                .attr('y', (d) => arcGenerator.centroid(d)[1])
                .attr('stroke', secondaryColor)
                .attr('stroke-width', 1)
                .attr('visibility', 'hidden')
            );
        },
        (update) => {
          return update;
        },
        (exit) => exit.remove()
      );
  }, [data]);

  return (
    <div className="PieChartd3" style={{ backgroundColor: secondaryColor }}>
      <div className="inner-container">
        <svg className="svg" ref={pieChartSvgRef} />
      </div>
      <ul className="PieChart-legend">
        {data.map((cur, index) => (
          <PieChartLegendSingle
            height={10}
            width={10}
            color={colorPallate[index]}
            shape="square"
            text={cur.name}
            key={cur.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default PieChartD3;
