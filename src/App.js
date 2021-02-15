import './App.css';
import React, { Component } from 'react'

import DonutChart from 'react-donut-chart';
import {Line} from 'react-chartjs-2'

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
          // console.log(this.state.total_cases)
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

    document.getElementById("tem__confirmed__cases").innerHTML = a;
    document.getElementById("active__first").innerHTML = b;
    document.getElementById("deceased__first").innerHTML = d;
    document.getElementById("recovered__first").innerHTML = c;
   
    

  }

  render() {
    
    const data = {
      
      datasets:[
        {
          
          data: [100,234,6,3,6]
        },
        {
          
          data: [13450,2434,64,343,645]
        },
        {
          
          data: [100,4534,6,345,6]
        }
      ]
    }
 
    // console.log(this.state.state_data)
    return (
      <div class="container" >
        <div class="row">

          {/* Left part */}
          <div class="col-sm-12 col-md-6">
          <br/>
            <h3>INDIA COVIE-19 Tracker</h3>
            <p>Let's all pray to make our Earth Covid-19
            free soon, Stay Safe and do TheLocate
           </p>

            <div className="donut__card container row">
              <div className="top__outer__div col-md-8 col-sm-12" >
                <div className="mid__div">

                  <div className="outer__circle">
                    <div className="inner__circle">
                      <h5 id="tem__confirmed__cases">{this.state.total_cases.confirmed}</h5>
                      <p>Confirmed</p>
                    </div>
                  </div>
                  <div className="top__outer__div__mid">
                    <div className="first"><div className="active__dot"></div>&nbsp;<div >active:</div><div id="active__first">{this.state.total_cases.active}</div></div>
                    <div className="second"><div className="decease__dot"></div>&nbsp;<div>decease:</div><div id="deceased__first">{this.state.total_cases.deaths}</div></div>
                    <div className="third"><div className="recovered__dot"></div>&nbsp;<div>recovered:</div><div id="recovered__first">{this.state.total_cases.recovered}</div></div>
                  </div>
                </div>
              </div>


              <div className="col-md-4 col-sm-12" >
                 <Line data={data} />
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
          <div class="col-sm-12 col-md-6"> <br/>
            <h3>INDIA MAP</h3>
            <p> HOVER OVER A STATE FOR MORE DETAILS
           </p>
            <br />
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
