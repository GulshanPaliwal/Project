import { LightningElement,track } from 'lwc';
import Project_OBJECT from '@salesforce/schema/Project__c';
import NAME_FIELD from '@salesforce/schema/Project__c.Name';
import Edate_FIELD from '@salesforce/schema/Project__c.End_Date__c';
import Priority_FIELD from '@salesforce/schema/Project__c.Priority__c';
import Status_FIELD from '@salesforce/schema/Project__c.Status__c';
import Project_Type_FIELD from '@salesforce/schema/Project__c.Project_Type__c';
/**
 * Creates Account records.
 */
export default class AccountCreator extends LightningElement {

    ProjectObject = Project_OBJECT;
    myFields = [NAME_FIELD, Edate_FIELD, Priority_FIELD, Status_FIELD, Project_Type_FIELD];

    handleAccountCreated(){
        // Run code when account is created.
    }

    @track openmodel = true;
    openmodal() {
        this.openmodel = true
    }
    closeModal() {
        this.openmodel = false
    } 
    saveMethod() {
        this.closeModal();
    }
}
