import { chartGreen, chartSurface } from '@site/src/theme/colors';
import { Component } from 'react';
import BarChartTickValues from '../../Shared/d3/barChartTickValues';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

class RandomNormalDistribution extends Component {
  generateRandomData() {
    const datasetSize = 100;
    const maxValue = 100;
    const data = [];
    for (let index = 0; index < datasetSize; index++) {
      data[index] = {
        index: index,
        value: Math.floor(Math.random() * maxValue),
      };
    }
    return data;
  }

  handleRefreshDataClick = () => {
    this.setState({ data: this.generateRandomData() });
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.generateRandomData(),
    };
  }

  render() {
    return (
      <div>
        <button
          className={'button button--secondary button--md'}
          style={{ backgroundColor: chartGreen, color: chartSurface }}
          onClick={this.handleRefreshDataClick}
        >
          <FontAwesomeIcon icon={faRefresh} /> Generate New Data
        </button>
        <BarChartTickValues data={this.generateRandomData()} xAxisName={'index'} yAxisName={'value'} />
      </div>
    );
  }
}

export default RandomNormalDistribution;
