import { LightningElement, track } from 'lwc';

export default class TrackDemo extends LightningElement {

    @track fullname = {firstname:"", lastname:""};

    handleEvent(event){
        const field=event.target.name;
        if(field==='firstname'){
            this.fullname.firstname=event.target.value;
        }else{
            if(field==='lastname'){
                this.fullname.lastname=event.target.value;
            }
        }
    }
}