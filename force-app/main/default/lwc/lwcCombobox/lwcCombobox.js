import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBox.getAccounts'

export default class LwcCombobox extends LightningElement {
    value='';
    @track accOption = [];
    get options(){
        return this.accOption;
    }

    connectedCallback(){
        getAccounts()
        .then(response=>{
            let arr = [];
            for(var i=0; i<response.length;i++){
                arr.push({label:response[i].Name, value:response[i].Id});
            }
            this.accOption=arr;
        })
    }

    handleChange(event){
        this.value=event.detail.value;
    }
}