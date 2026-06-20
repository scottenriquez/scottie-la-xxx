import { select } from 'd3-selection';
import { sum } from 'd3-array';
import { scaleOrdinal } from 'd3-scale';
import { pie as d3pie, arc as d3arc } from 'd3-shape';
import React, { Component } from 'react';

class PieChart extends Component {
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
    const width = 480;
    const height = 480;
    const radius = Math.min(width, height) / 2 - 20;

    // Everforest Dark Hard color palette
    const colors = [
      '#a7c080', // green
      '#e67e80', // red
      '#dbbc7f', // yellow
      '#7fbbb3', // aqua
    ];

    // Sort data by value and take top 3, group rest as "Others"
    const sortedData = [...this.props.data].sort((a, b) => b[this.props.valueName] - a[this.props.valueName]);
    const top3 = sortedData.slice(0, 3);
    const others = sortedData.slice(3);

    const processedData = [...top3];
    if (others.length > 0) {
      const othersSum = sum(others, (d) => d[this.props.valueName]);
      processedData.push({
        [this.props.labelName]: 'Others',
        [this.props.valueName]: othersSum,
      });
    }

    const colorScale = scaleOrdinal()
      .domain(processedData.map((d) => d[this.props.labelName]))
      .range(colors);

    const pie = d3pie()
      .value((d) => d[this.props.valueName])
      .sort(null);

    const arc = d3arc().innerRadius(0).outerRadius(radius);

    const labelArc = d3arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius * 0.6);

    const pieGroup = svg.select('.pie-area');

    const pieData = pie(processedData);

    // Draw pie slices
    pieGroup
      .selectAll('.slice')
      .data(pieData)
      .join('path')
      .attr('class', 'slice')
      .attr('d', arc)
      .attr('fill', (d) => colorScale(d.data[this.props.labelName]))
      .attr('stroke', '#2d353b')
      .attr('stroke-width', 2);

    // Draw labels
    pieGroup
      .selectAll('.label')
      .data(pieData)
      .join('text')
      .attr('class', 'label')
      .attr('transform', (d) => `translate(${labelArc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('fill', '#4b5263')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text((d) => d.data[this.props.labelName]);

    // Draw percentage labels
    pieGroup
      .selectAll('.percentage')
      .data(pieData)
      .join('text')
      .attr('class', 'percentage')
      .attr('transform', (d) => {
        const [x, y] = labelArc.centroid(d);
        return `translate(${x}, ${y + 20})`;
      })
      .attr('text-anchor', 'middle')
      .attr('fill', '#4b5263')
      .style('font-size', '14px')
      .text((d) => {
        const total = sum(processedData, (item) => item[this.props.valueName]);
        const percentage = ((d.data[this.props.valueName] / total) * 100).toFixed(1);
        return `${percentage}%`;
      });
  };

  render() {
    return (
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <svg
          ref={this.ref}
          style={{
            height: '100%',
            width: '100%',
            marginRight: '0px',
            marginLeft: '0px',
          }}
          viewBox="0 0 480 480"
        >
          <g className="pie-area" transform="translate(240, 240)" />
        </svg>
      </div>
    );
  }
}

export default PieChart;
