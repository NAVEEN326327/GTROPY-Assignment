import './App.css';
import React, { Component } from 'react'
import DonutChartCard from './Components/DonutChartCard';
import Table from './Components/Table';
import DonutChart from 'react-donut-chart';
import LineChart from 'react-linechart';

import axios from 'axios';

export class App extends Component {

  state = {
    state_data: [],
    total_cases: [],
    current_state: null


  }
  componentDidMount() {
    this.getStateData();
  }

  getStateData = () => {

    var url = `https://api.covid19india.org/data.json`;

    try {
      axios.get(url)
        .then(res => {
          // console.log(res.data.statewise)
          let data = res.data.statewise;
          this.setState({
            state_data: data.slice(1),
            total_cases: data[0]

          });
          console.log(this.state.total_cases)
        })

    }
    catch {
      console.log("Wrong with url")
    }

  }

  componentDidUpdate() {

  }

  currentRow = (a, b, c, d, s) => {
     document.getElementById("confirmed").innerHTML = a;
     document.getElementById("active").innerHTML = b;
     document.getElementById("recovered").innerHTML = c;
     document.getElementById("deceased").innerHTML = d;
     document.getElementById("current_state").innerHTML = s
  }

  render() {
    let active = 7198;
    let deceased = 617
    let recovered = 24832;
    let total = 382920

    const data = [
      {
        color: "steelblue",
        points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }, { x: 9, y: 8 }]
      }
    ];
    console.log(this.state.state_data)
    return (
      <div class="container" >
        <div class="row">

          {/* Left part */}
          <div class="col-sm-12 col-md-6">
            <h3>INDIA COVIE-19 Tracker</h3>
            <p>Let's all pray to make our Earth Covid-19
            free soon, Stay Safe and do TheLocate
           </p>

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
                  arrayOf={'#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b'}
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

              </div>
            </div>

            {/*      Table              */}
            <div className="table__outer__container container row">
              <div className="table__container table__container_heading container row ">
                <div>STATE/UT</div>
                <div>CONFIRMED</div>
                <div>ACTIVE</div>
                <div>RECOVERED</div>
                <div>DECEASED</div>
              </div>
              {this.state.state_data.map((data, index) => (
                <div id="table__container" className="table__container container row" onMouseOver={() => { this.currentRow(data.confirmed, data.active, data.recovered, data.deaths, data.state) }}>
                  <div className="table__state">{data.state}</div>
                  <div className="table__confirmed">{data.confirmed}</div>
                  <div className="table__active">{data.active}</div>
                  <div className="table__recovered">{data.recovered}</div>
                  <div className="table__deaths">{data.deaths}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right part */}
          <div class="col-sm-12 col-md-6">
            <h3>INDIA MAP</h3>
            <p> HOVER OVER A STATE FOR MORE DETAILS
           </p>
            <div className="map__card container">
              <div className="total___cases__card row">
                <div className="confirmed col-md-3 col-sm-6">
                  <div>
                    Confirmed
                  </div>
                  <div id="confirmed">
                    {this.state.total_cases.confirmed}
                  </div>
                </div>
                <div className="active col-md-3 col-sm-6">
                  <div >
                    Active
                  </div>
                  <div id="active">
                    {this.state.total_cases.active}
                  </div>
                </div>
                <div className="recovered col-md-3 col-sm-6">
                  <div>
                    Recovered
                  </div>
                  <div id="recovered">
                    {this.state.total_cases.recovered}
                  </div>
                </div>
                <div className="deceased col-md-3 col-sm-6">
                  <div>
                    Deceased
                  </div>
                  <div id="deceased">
                    {this.state.total_cases.deaths}
                  </div>
                </div>
              </div>

              <div className="last__updated">
              <div id="current_state" className="current__state">
                 {this.state.current_state}
              </div>
                <div>
                  <div className="first">LAST UPDATED</div>
                  <div className="second">{this.state.total_cases.lastupdatedtime}</div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div >
    );
  }
}

export default App;
