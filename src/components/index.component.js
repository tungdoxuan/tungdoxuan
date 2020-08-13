import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {patient: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/patient')
            .then(response => {
                console.log(response.data);
                this.setState({patient: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.patient.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Danh Sách Bệnh Nhân</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Bệnh Nhân</th>
                        <th>Bệnh Viện</th>
                        <th>Số Giường Bệnh</th>
                        <th colSpan="2">Hành Động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}