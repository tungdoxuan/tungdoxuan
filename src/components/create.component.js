import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            company: '',
            age:''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCompany(e) {
        this.setState({
            company: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            company: this.state.company,
            age: this.state.age
        };
        axios.post('http://localhost:4000/patient/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            company: '',
            age: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Thêm Bệnh Nhân</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên Bệnh Nhân: </label>
                        <input type="text" className="form-control"
                               value={this.state.name}
                               onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Thêm Bệnh Viên: </label>
                        <input type="text" className="form-control" value={this.state.hospital}
                               onChange={this.onChangeHospital}/>
                    </div>
                    <div className="form-group">
                        <label>Số Giường Bệnh: </label>
                        <input type="text" className="form-control" value={this.state.bednumber}
                               onChange={this.onChangeBednumber}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Gửi Thông Tin" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}