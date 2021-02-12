import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DonutChart from 'react-donut-chart';
import './DonutChartCard.css';

export class DonutChartCard extends Component {
    state = {

    }

    render() {
        return (
            <div className="donut__card">
                <div class="container">
                    <DonutChart
                        data={[{
                            label: 'Give you up',
                            value: 25
                        },
                        {
                            value: 100,
                            label: 'Confirmed',
                            isEmpty: true
                        }]}
                        height={200}
                        width={200}
                    />
                </div>
            </div>
        )
    }
}

export default DonutChartCard
