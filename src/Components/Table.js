import { map } from 'jquery';
import React, { Component } from 'react'
import './Table.css';

import axios from 'axios';

export class Table extends Component {

    state = {
        state_data: [],

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
                    this.setState({ state_data: data.slice(1)});
                })
        }
        catch {
            console.log("Wrong with url")
        }

    }

    componentDidUpdate() {

    }

    render() {

        const state_data = this.state.state_data;
        console.log(state_data)
        return (
            <div className="table__outer__container container row">
                <div className="table__container table__container_heading container row ">
                    <div>STATE/UT</div>
                    <div>CONFIRMED</div>
                    <div>ACTIVE</div>
                    <div>RECOVERED</div>
                    <div>DECEASED</div>
                </div>
                {state_data.map((data, index) => (
                    <div className="table__container container row ">
                        <div>{data.state}</div>
                        <div>{data.confirmed}</div>
                        <div>{data.active}</div>
                        <div>{data.recovered}</div>
                        <div>{data.deaths}</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Table
