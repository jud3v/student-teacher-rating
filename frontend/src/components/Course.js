import React from 'react';
import { loadProgressBar } from "axios-progress-bar";
import axios from 'axios'
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";
import {FullCalendar} from 'primereact/fullcalendar';

export default class Course extends React.Component {

    state = {
        courses: [],
    }

    componentDidMount() {
        loadProgressBar()
        axios.get('courses')
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
                            <DataTable value={this.state.courses}
                                       header="Courses"
                                       paginatorPosition="both"
                                       selectionMode="single"
                                        paginator={true}
                            >
                                <Column field="id" header="ID" sortable={true} />
                                <Column field="meeting_date" header="Date" sortable={true} />
                                <Column field="is_done" header="Done" sortable={true} />
                                <Column field="teacher_id" header="teacher" sortable={true} />
                                <Column field="student_id" header="student" sortable={true} />
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}