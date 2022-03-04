import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Movie__c.Name';
import getMovies from '@salesforce/apex/MovieController.getMovies';
const COLUMNS = [
    { label: 'Movie Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' }
    
];
export default class MovieList extends LightningElement {
    columns = COLUMNS;
    @wire(getMovies)
    movies;
}
