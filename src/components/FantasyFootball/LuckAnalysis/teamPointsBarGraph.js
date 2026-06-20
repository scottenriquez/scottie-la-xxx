import { Component } from 'react';
import BarChart from '../../Shared/d3/barChart';

class TeamPointsBarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.teamPointsData,
    };
  }

  render() {
    return (
      <div>
        <BarChart data={this.state.data} xAxisName={'team'} yAxisName={'points'} />
      </div>
    );
  }
}

export default TeamPointsBarGraph;
