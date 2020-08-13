import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeHospital  = this.onChangeHospital.bind(this);
        this.onChangeBednumber = this.onChangeBednumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            company: '',
            age:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/patient/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    company: response.data.company,
                    age: response.data.age });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeCompany(e) {
        this.setState({
            company: e.target.value
        })
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            company: this.state.company,
            age: this.state.age
        };
        axios.post('http://localhost:4000/patient/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Cập nhật bệnh nhân</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Patient Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tên Bệnh Viện: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.hospital}
                               onChange={this.onChangeHospital}
                        />
                    </div>
                    <div className="form-group">
                        <label>Số Giường Bệnh: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.age}
                               onChange={this.onChangeBednumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Update Patient Info"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}