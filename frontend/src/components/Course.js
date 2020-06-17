import React from 'react';
import { loadProgressBar } from "axios-progress-bar";
import axios from 'axios'
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";

export default class Course extends React.Component {

    state = {
        courses: [],
    }

    componentDidMount() {
        loadProgressBar()
        axios.get('languages?token='+localStorage.getItem('token'))
            .then(({data}) => {
                console.log(data.data)
                this.setState({courses: data.data})
            })
            .catch(() => {
                alert('not ok')
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="p-grid">
                    <div className="p-col-12">
                        <div className="card card-w-title">
                            <h1>Courses</h1>
                            <DataTable value={this.state.courses}>
                                <Column field="id" header="ID" />
                                <Column field="name" header="Name" />
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}