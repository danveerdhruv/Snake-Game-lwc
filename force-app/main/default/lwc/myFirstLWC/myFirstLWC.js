import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class MyFirstLWC extends LightningElement {
    myTitle="First LWC component";
    // connectedCallback(){
    //     console.log("working");
    //     var show="display visible";
    //     window.alert("show: "+show);
    // }
    //1st Function
    handleClick(){
        //window.alert("Hello Salesforce");
        this.showToast(this.myTitle);
    }
    //2nd Function
    showToast(myTitle){
        const event=new ShowToastEvent({
            title: myTitle,
            message: 'simple toast message show',
            variant: 'success'
        })
        this.dispatchEvent(event);
    }
}