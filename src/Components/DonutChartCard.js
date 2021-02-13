import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DonutChart from 'react-donut-chart';
import './DonutChartCard.css';


export class DonutChartCard extends Component {
    state = {

    }
    componentDidMount() {
        alert('hello')
    }

    componentDidUpdate() {
        alert('hi')
    }

    render() {
        return (
            <div className="donut__card container row">
                <div class="col-md-7 col-sm-12" >
                    adsf
                </div>

                <div class="col-md-5 col-sm-12" >
                    jaksdf
                </div>
            </div>
        )
    }
}

export default DonutChartCard
