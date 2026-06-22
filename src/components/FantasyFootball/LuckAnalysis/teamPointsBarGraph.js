import { Component } from 'react';
import BarChart from '../../Shared/d3/barChart';

class TeamPointsBarGraph extends Component {
  render() {
    return (
      <div>
        <BarChart data={this.props.teamPointsData} xAxisName={'team'} yAxisName={'points'} />
      </div>
    );
  }
}

export default TeamPointsBarGraph;
