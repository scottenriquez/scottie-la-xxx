import { Component } from 'react';
import BarChartWithConditionalColors from '../../Shared/d3/barChartWithConditionalColors';

class WeeklyWinsBarGraph extends Component {
  render() {
    return (
      <div>
        <BarChartWithConditionalColors data={this.props.weeklyWinsData} xAxisName={'week'} yAxisName={'wins'} />
      </div>
    );
  }
}

export default WeeklyWinsBarGraph;
