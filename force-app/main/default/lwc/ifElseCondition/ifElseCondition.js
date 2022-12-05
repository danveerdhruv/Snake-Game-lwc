import { LightningElement,track } from 'lwc';

export default class IfElseCondition extends LightningElement {
    @track onClickButton="Show";
    myTitle="Show button will show this text"
    @track cardVisible=false;

    handleClick(event){
        const label=event.target.label;

        if(label==='Show'){
            this.onClickButton='Hide';
            this.cardVisible=true;
        }
        else{
            if(label==='Hide'){
                this.onClickButton='Show';
                this.cardVisible=false;
            }
        }
    }
}