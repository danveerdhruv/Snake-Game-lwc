import { LightningElement } from 'lwc';

export default class Arrow_function extends LightningElement {
    connectedCallback(){
        let callFunction=this.myFunction(10,2);
        window.alert("result is via arrow function: "+callFunction);
    }

    // myFunction(divident, divisor){
    //     return (divident/divisor);
    // }
    /*arrow function*/
    myFunction=(divident,divisor)=>{
        return (divident/divisor);
    }
}