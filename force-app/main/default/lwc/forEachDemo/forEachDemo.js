import { LightningElement,wire } from 'lwc';
import getCampaignDetails from '@salesforce/apex/ForEachDemo.getCampaignDetails';

export default class ForEachDemo extends LightningElement {

    @wire(getCampaignDetails)
    Campaigns; 
}