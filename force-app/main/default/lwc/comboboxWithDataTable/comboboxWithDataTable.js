import { LightningElement, track} from 'lwc';
import getAccounts from '@salesforce/apex/ComboBoxWithDataTable.getAccounts'
import getContacts from '@salesforce/apex/ComboBoxWithDataTable.getContacts'

//define columns for datatable
const columns =[
    {label:'contact Name', fieldName:'Name'},//fieldName is taken from object Manager in org
    {label:'Contact Email', fieldName:'Email'}
];
export default class ComboboxWithDataTable extends LightningElement {
    @track value= '';
    @track optionsArr = [];//array to store the accounts retrieved
    @track cardVisible=false;//To perform show/hide functionality
    @track data = []; //used for storing contact data in datatable
    @track columns = columns;

    get options(){ //get funtion to return values of optionsArr in options property
        return this.optionsArr;
    }
    //call apex method to get all accounts stored in org database
    connectedCallback(){
        getAccounts() //calling apex method
        .then(response=>{
            let arr = [];
            for(var i=0;i<response.length;i++){
                arr.push({label:response[i].Name, value:response[i].Id});
            }
            this.optionsArr = arr;
        }).catch(error=>{
            window.alert('Error is '+error);
        })
    }

    //function to handle onselect any option
    handleChange(event){
        //Show/Hide functionality
        this.cardVisible=true;

        this.value = event.detail.value;
        //calling getcontacts method

    getContacts({AccId: this.value})
    .then(result=>{
        this.data=result;
    }).catch(error=>{
        window.alert('error is '+error);
    })
    }

}