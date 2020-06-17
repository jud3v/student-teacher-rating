import React from 'react';
import { loadProgressBar } from "axios-progress-bar";
import axios from 'axios'
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";
import {Button} from "primereact/button";

export default class Languages extends React.Component {

    state = {
        languages: [],
    }

    componentDidMount() {
        loadProgressBar()
        axios.get('languages?token='+localStorage.getItem('token'))
            .then(({data}) => {
                console.log(data.data)
                this.setState({languages: data.data})
            })
            .catch(() => {
                alert('not ok')
            })
    }

    actionTemplate(rowData, column) {
        return <div className="d-flex justify-content-center">
            <Button type="button" icon="pi pi-pencil" label="edit" className="p-button-success"/>
            <Button type="button" icon="pi pi-pencil" label="delete" className="p-button-danger ml-2"/>
        </div>;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="p-grid">
                    <div className="p-col-12">
                        <div className="card card-w-title">
                            <h1>Languages</h1>
                            <DataTable value={this.state.languages}
                                       header="Languages"
                                       paginatorPosition="both"
                                       selectionMode="single"
                                       paginator={true}
                            >
                                <Column field="id" className="text-center" header="ID" sortable={true} />
                                <Column field="name" className="text-center"  header="Name" sortable={true} />
                                <Column body={this.actionTemplate} header="Action" />
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}