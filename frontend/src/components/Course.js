import React from 'react';
import { loadProgressBar } from "axios-progress-bar";
import axios from 'axios'
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";
import jwtDecode from 'jwt-decode';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import frLocale from '@fullcalendar/core/locales/fr';

export default class Course extends React.Component {

    state = {
        courses: [],
        events: [],
        options: {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultView: 'timeGridWeek',
            defaultDate: '2017-02-01',
            header: {
                left: 'prev,next',
                center: 'title',
                // right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true,
            locale: frLocale,
        }

    }

    componentDidMount() {
        loadProgressBar()
        axios.get('courses')
            .then(({data}) => {
                const events = data.data.confirmed.map(event => {
                    return  {
                        id: event.id,
                        start: event.meeting_date,
                        title: `courses_${event.id}`,
                        end: event.end,
                    }
                })
                this.setState({courses: data.data.waiting, events})
            })
            .catch(() => {
                alert('not ok')
            })
    }

    render() {
        const token = localStorage.getItem('token')
        const {is_student} = jwtDecode(token)
        let content = null
        if (!is_student){
            content = (
            <React.Fragment>
                <DataTable value={this.state.courses}
                           header="Courses"
                           paginatorPosition="both"
                           selectionMode="single"
                           paginator={true}
                            className="mb-5">
                    <Column field="id" header="ID" sortable={true} />
                    <Column field="meeting_date" header="Date" sortable={true} />
                    <Column field="is_done" header="Done" sortable={true} />
                    <Column field="teacher_id" header="teacher" sortable={true} />
                    <Column field="student_id" header="student" sortable={true} />
                </DataTable>
                <hr/>
               <div className="container mt-5">
                   <FullCalendar events={this.state.events} options={this.state.options} />
               </div>
            </React.Fragment>
            )
        } else {
            content = (
                <div>Etudiant</div>
            )
        }
        return (
            <div className="container-fluid">
                <div className="p-grid">
                    <div className="p-col-12">
                        <div className="card card-w-title">
                            <h1>Courses</h1>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}