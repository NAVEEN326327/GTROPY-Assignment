import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DonutChart from 'react-donut-chart';
import './DonutChartCard.css';
import LineChart from 'react-linechart';

export class DonutChartCard extends Component {
    state = {
        covid_data: null,
    }
    componentDidMount() {
        // alert('hello')
        alert(this.props.covid_data)
        console.log(this.props)
       
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props !== prevProps) {
           this.state.covid_data = this.props.covid_data
           alert(this.props.covid_data)
           console.log(this.props)
        }
      }

    render() {
        
        let active = 7198;
        let deceased = 617
        let recovered=24832;
        let total = 382920

        const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}, {x:9,y:8}] 
            }
        ];

        return (
            <div className="donut__card container row">
                <div class="col-md-7 col-sm-12" >
                    <DonutChart
                        data={[{
                            label: 'Active',
                            value: active,

                        },
                        {
                            label: 'Deceased',
                            value: deceased,
                           
                        },
                        {
                            label: 'Recovered',
                            value: recovered,
                            
                        },
                        
                        
                        ]}
                        arrayOf={ '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b' }
                         height={130}
                         width={200}
                         emptyColor={'#ffffff'}
                         
                         outerRadius={0.75}
                        />
                </div>

                <div class="col-md-5 col-sm-12" >
                     <LineChart 
                        width={200}
                        height={150}
                        data={data}
                    />
                    <LineChart 
                        width={200}
                        height={150}
                        data={data}
                    />
                </div>
            </div>
        )
    }
}

export default DonutChartCard
