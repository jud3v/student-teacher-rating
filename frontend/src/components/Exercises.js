import React from 'react';
import { loadProgressBar } from "axios-progress-bar";
import axios from 'axios'
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";

export default class Exercises extends React.Component {

    state = {
        exercises: [],
    }

    componentDidMount() {
        loadProgressBar()
        axios.get('exercises?token='+localStorage.getItem('token'))
            .then(({data}) => {
                console.log(data.data)
                this.setState({exercises: data.data})
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
                            <h1>Exercises</h1>
                            <DataTable value={this.state.exercises}
                                       header="Exercises"
                                       paginatorPosition="both"
                                       selectionMode="single"
                                       paginator={true}
                            >
                                <Column field="id" header="ID" sortable={true} />
                                <Column field="limit_date" header="Limit" sortable={true} />
                                <Column field="is_done" header="Done" sortable={true} />
                                <Column field="rating" header="Rating" sortable={true} />
                                <Column field="student_id" header="student" sortable={true} />
                                <Column field="teacher_id" header="teacher" sortable={true} />
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}