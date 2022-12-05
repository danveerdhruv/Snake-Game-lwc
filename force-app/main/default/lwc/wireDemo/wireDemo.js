import { LightningElement,wire,track} from 'lwc';
import  getAccountList  from '@salesforce/apex/WireDemo.getAccountList';

//getAccountList is a random name given to the function getting imported from apex class

const columns =[
    {label:"Account Name", fieldName: "Name"},
    {label:"Id", fieldName:"Id"}
]
export default class WireDemo extends LightningElement {
    @track columns=columns;
    @track data=[];
// getAccountList is the imported function and is passed as parameter below
    @wire(getAccountList)
 //below function is having two parameters in which data will store all the data from retrieved by function and error will store error data if any comes   
    wireDemo({data, error}){
        if(data){
            this.data=data;
        }
        else{
            if(error){
                console.log("error occured");
            }
        }
    }
}