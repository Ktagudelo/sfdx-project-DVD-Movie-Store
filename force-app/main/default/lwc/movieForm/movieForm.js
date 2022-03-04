import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import MOVIE_OBJECT from '@salesforce/schema/Movie__c';
import MOVIE_NAME from '@salesforce/schema/Movie__c.Name';

export default class MovieForm extends LightningElement {
    objectApiName = MOVIE_OBJECT;
    fields = [MOVIE_NAME];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Movie created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}
