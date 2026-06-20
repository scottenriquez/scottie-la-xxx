import { chartGreen } from '@site/src/theme/colors';
import { select } from 'd3-selection';
import { max, ticks, extent } from 'd3-array';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import React, { Component } from 'react';

class BarChartTickValues extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.updateSVG();
  }

  componentDidUpdate() {
    this.updateSVG();
  }

  updateSVG = () => {
    const svg = select(this.ref.current);
    const height = 400;
    const width = 800;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const x = scaleBand()
      .domain(this.props.data.map((d) => d[this.props.xAxisName]))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);
    const y1 = scaleLinear()
      .domain([0, max(this.props.data, (d) => d[this.props.yAxisName])])
      .rangeRound([height - margin.bottom, margin.top]);
    const xAxis = (g) =>
      g
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(
          axisBottom(x)
            .tickValues(ticks(...extent(x.domain()), width / 40).filter((v) => x(v) !== undefined))
            .tickSizeOuter(0)
        )
        .style('color', chartGreen);
    const y1Axis = (g) =>
      g
        .attr('transform', `translate(${margin.left},0)`)
        .style('color', chartGreen)
        .call(axisLeft(y1).ticks(null, 's'))
        .call((g) => g.select('.domain').remove())
        .call((g) =>
          g
            .append('text')
            .attr('x', -margin.left)
            .attr('y', 10)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'start')
            .text(this.props.data.y1)
        );
    svg.select('.x-axis').call(xAxis);
    svg.select('.y-axis').call(y1Axis);
    svg
      .select('.plot-area')
      .attr('fill', chartGreen)
      .selectAll('.bar')
      .data(this.props.data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d[this.props.xAxisName]))
      .attr('width', x.bandwidth())
      .attr('y', (d) => y1(d[this.props.yAxisName]))
      .attr('height', (d) => y1(0) - y1(d[this.props.yAxisName]));
  };

  render() {
    return (
      <div>
        <svg
          ref={this.ref}
          style={{
            height: '100%',
            width: '100%',
            marginRight: '0px',
            marginLeft: '0px',
          }}
          viewBox={'0 0 800 400'}
        >
          <g className="plot-area" />
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    );
  }
}

export default BarChartTickValues;
