import React, { Component } from 'react';


class Covid extends Component {

    constructor(props) {
        super(props)
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        fetch('https://api.covidindiatracker.com/state_data.json')
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }

    renderListing() {
        let recordList = []
        this.state.records.map((record, i) => {
            return recordList.push(
                <div className="col-xs-12 col-sm-3">
                    <div key={i} className={"card_" + i}>
                        <div className="card-body">
                            
                            <h5 class="card-title">{record.state}</h5>
                        <br />Confirmed: {record.confirmed}
                        <br />Active: {record.active}
                        <br />Recovered: {record.recovered}
                            <br />Deaths: {record.deaths}
                            <br />Deaths: {record.aChanges}
                        </div>
                        <div className="districtData">
                            <h6>DistrictData</h6>  
                            {
                                record.districtData.map((dis, n) => {
                                    return (
                                        <div id={dis.key} className={"card_" + n}>
                                            <h3>{dis.name} <span className="covid19active">{dis.confirmed}</span></h3>
                                        </div>
                                    )
                                })
                            }
                        </div>                            
                    </div>
                </div>
            )
        })

        return recordList;
    }

    render() {
        return (
            <div>
                {this.renderListing()}
            </div>
        );
    }
}

export default Covid;