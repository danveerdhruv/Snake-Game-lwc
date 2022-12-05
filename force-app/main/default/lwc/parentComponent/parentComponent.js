import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    title='Parent Component'

    handleChange(){
        this.template.querySelector("c-child-component").changeValue();
    }
}