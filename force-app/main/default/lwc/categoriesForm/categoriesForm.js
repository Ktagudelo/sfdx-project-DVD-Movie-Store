import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CATEGORY_OBJECT from '@salesforce/schema/Category__c';
import CATEGORY_NAME from '@salesforce/schema/Category__c.Name';

export default class CategoriesForm extends LightningElement {
    objectApiName = CATEGORY_OBJECT;
    fields = [CATEGORY_NAME];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Category created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}