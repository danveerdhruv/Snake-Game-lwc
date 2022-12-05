import { LightningElement,track } from 'lwc';
import getContactDetails from '@salesforce/apex/ImperativeDemo.getContactDetails';

// fieldName property values are api values of fields
const columns=[
    {label: 'Contact Name' , fieldName:'Name'},
    {label: 'Account Name', fieldName:'Account.Name'}
]
export default class ImerativeMethodDemo extends LightningElement {

    @track columns=columns;
    @track data=[];

    connectedCallback(){
        getContactDetails()
        .then(result=>{
            this.data=result;
        })
        .catch(error=>{
            console.log('error Occured');
        })
    }
}