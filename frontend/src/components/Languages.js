import React from 'react';
import { loadProgressBar } from "axios-progress-bar";
import axios from 'axios'
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";
import {Button} from "primereact/button";

export default class Languages extends React.Component {

    state = {
        languages: [],
        creationMode: false,
        editingMode: false,
        language:'',
        editingObject: null,
    }

    componentDidMount() {
        loadProgressBar()
        axios.get('languages')
            .then(({data}) => {
                console.log(data.data)
                this.setState({languages: data.data})
            })
            .catch(() => {
                alert('not ok')
            })
    }

    onClickHandler = e => {
        const url = this.state.editingMode ? `languages/${this.state.editingObject.id}` : 'languages'
        const method = this.state.editingMode ? 'PUT' : 'POST'
        e.preventDefault()
        axios({
            url,
            method,
            data: {
                name: this.state.language
            }
        }).then(({data}) => {
            const languages = [...this.state.languages]
            if (this.state.editingMode){
                const index = this.state.languages.findIndex((item) => {
                    return item.id === this.state.editingObject.id
                })
                languages[index].name = this.state.language
            } else {
                languages.push(data.data)
            }
            this.setState({languages,language:''})
        }). catch(() => {
            alert('not ok')
        })
        /*axios.post('languages',{
            name: this.state.language
             })
            .then(({data}) => {
                const languages = [...this.state.languages]
                languages.push(data.data)
                this.setState({languages,language:''})
            })
            . catch(() => {
                alert('not ok')
            })*/
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    actionTemplate = (rowData, column) => {
        return <div className="d-flex justify-content-center">
            <Button type="button" icon="pi pi-pencil" label="edit" className="p-button-success" onClick={() => {
                this.setState({editingObject:rowData,language:rowData.name,editingMode:true})

            }}/>
            <Button type="button" icon="pi pi-pencil" label="delete" className="p-button-danger ml-2"
            onClick={() => {
                axios.delete('languages/'+ rowData.id)
                    .then(() => {
                        const index = this.state.languages.findIndex((item) => {
                            return item.id === rowData.id
                        })
                        const languages = [...this.state.languages]
                        languages.splice(index,1)
                        this.setState({languages})
                    })
                    .catch((e) => {
                        alert('cannot find the language to delete')
                    })
            }}
            />
        </div>;
    }

    render() {
        const footer = (<Button label="create" onClick={ () => this.setState({ creationMode: !this.state.creationMode }) } icon="pi pi-plus" />)
        const formulaire = (
            <React.Fragment>
                <label htmlFor="language" className="text-secondary">Create Language :</label>
                <input type="text" name="language" onChange={this.onChangeHandler} value={this.state.language} id="language" className="form-control" placeholder="Enter the name of the language"/>
                <button className="btn btn-success btn-xs mt-1" type="button" onClick={this.onClickHandler}>Submit The Language</button>
            </React.Fragment>
        )
        return (
            <div className="container-fluid">
                <div className="p-grid">
                    <div className="p-col-12">
                        <div className="card card-w-title">
                            <h1>Languages</h1>
                            <DataTable footer={footer} value={this.state.languages}
                                       header="Languages"
                                       paginatorPosition="both"
                                       selectionMode="single"
                                       paginator={true}>
                                <Column field="id" className="text-center" header="ID" sortable={true} />
                                <Column field="name" value={this.state.languages} className="text-center"  header="Name" sortable={true} />
                                <Column body={this.actionTemplate} header="Action" />
                            </DataTable>
                        </div>
                    </div>
                </div>
                { this.state.creationMode || this.state.editingMode ? formulaire : null}
            </div>
        )
    }
}