import { LightningElement,track,api,wire } from 'lwc';
import getContactDetails from '@salesforce/apex/DataTableWithRowSelection.getContactDetails';

const columns=[
    {label:'Name', fieldName:'Name'},
    {label:'Phone', fieldName:'Phone'}
]
export default class DataTableWithRowSelection extends LightningElement {
    @track label='Show Details';
    @track visibility=false;
    columns=columns;
    @track data=[];
    @api recordId; //It stores the current page recordId
    @api searchKey='';

    connectedCallback(){
        //calling apex method
        getContactDetails({recordId:this.recordId})
        .then(
            response=>{
                this.data=response;
            }
        ).catch(err=>{
            console.log('error is '+err);
        })
    }
    //search funtionality
    handleChange(event){
        this.searchKey=event.target.value;
        getContactDetails({searchKey:this.searchKey, recordId:this.recordId})
        .then(response=>{
            this.data=response;
        }).catch(err=>{
            console.log('error is '+err);
        })
    }
    handleClick(event){
        const label=event.target.label;
        if(label==='Show Details'){
            this.label='Hide Details';
            this.visibility=true;
        }else{
            if(label==='Hide Details'){
                this.label='Show Details';
                this.visibility=false;
            }
        }
    }
    //get Details of selected row
    getSelectedRows(event){
        const getSelectedRowDetails = event.detail.selectedRows;
        window.alert(JSON.stringify(getSelectedRowDetails));
    }
}