import { LightningElement } from 'lwc';

import login from '@salesforce/apex/LoginUser.login'
export default class AmazonClone extends LightningElement {
    username;
    password;
    isError=false;
    errorMessage='';
    handleUserName(event){
        this.username=event.target.value;
    }
    handlePassword(event){
        this.password=event.target.value;
    }

    handleLogin(){
        if(this.username!=null && this.password!=null){
            login({username:this.username,password:this.password})
            .then(result=>{
                this.isError=false;
                console.log('result is: '+result);
            }).catch(error=>{
                console.log('error is: '+JSON.stringify(error));
                this.error=true;
                this.errorMessage=error.body.message;
            })
        }
        console.log("On Login");
        console.log("Username is: ",this.username);
        console.log("Password is: ",this.password);
    }
}