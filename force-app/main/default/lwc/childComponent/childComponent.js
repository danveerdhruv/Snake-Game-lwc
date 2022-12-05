import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api itemTitle="Child Component";

    @api changeValue(){
        this.itemTitle="Value is changed from Child to Parent";
    }
}