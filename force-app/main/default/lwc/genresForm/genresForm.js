import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import GENDER_OBJECT from '@salesforce/schema/Gender__c';
import GENDER_NAME from '@salesforce/schema/Gender__c.Name';

export default class GenresForm extends LightningElement {
    objectApiName = GENDER_OBJECT;
    fieldsGender = [GENDER_NAME];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Genre created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}