import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/patient/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.patient}
                </td>
                <td>
                    {this.props.obj.hospital}
                </td>
                <td>
                    {this.props.obj.bednumber}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Sửa</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;