/*************************************************
 * Monitor script for web
 * 
 * 
 *************************************************/
var MeetingInfo = function(){
    var that = this;
    
    this.id            = ; // String * - UID, generated by application upon meeting creation.
    this.startTime     = ; // Number * - UTC, contains meeting planned start date, automatically adjusted by application on first monitoring session start.
    this.endTime       = ; // Number * - UTC, contains meeting planned end time, automatically adjusted by application on each monitoring session end.
    this.type          = ; // String * - Meeting type (f2f if undefined): online, f2f, remote 
    this.location      = ; // String - Where the meeting takes place.
    this.notes         = ; // String - Free form meeting notes made by sales rep.
    this.objective     = ; // String - Free form meeting objective made by sales rep.
    this.nextObjective = ; // String - Free form next meeting objective made by sales rep.
    this.presenters    = ; // Array of presenters (always 1 single item now), where each item has the presenter properties (e.g. first name, last name, email).
    this.contacts      = ; // Array * - Array of contacts, where each item has the contact properties (e.g. first name, last name, specialty).
    this.sessions      = ; // Array * - Contains monitoring data for each monitoring session. Each monitoring session is described by MonitoringSessionInfo object (see below).    
}


MeetingInfo.prototype = {

   /**************************************************
    * presentationId : int - ID of working copy viewed presentation.
    * publishingTime : int - The presentation published time used to uniquely identify the relevant published version of a presentation.
    * presentationName : String - The presentation name.
    * startTime : Number - UTC, correspondent monitoring session start time.
    * endTime : Number - UTC, correspondent monitoring session end time.
    * events : Array - Array of MonitoringEventInfo objects representing the monitoring data collected during the monitoring session. (see below) 
    **************************************************/
    MonitoringSessionInfo:function(dataObj) {
        var sData = {
            presentationId: dataObj.presentationId,
            publishingTime: dataObj.publishingTime,
            presentationName: ,
            startTime: , 
            endTime: ,
            events:
        };
    },

    /**************************************************
    *   type     : String - Type. There are two types of events: system and custom. 
    *            - System events are those registered by the viewer automatically 
    *              and custom are those submitted by the content developer (e.g. questionnaires): system, custom 
    *   category : String - Category name.
    *            - System events one of the predefined values: slideEnter, slideExit, 
    *              documentOpen, referenceOpen, documentsOrderName, documentsOrderEmail,
    *              documentsOrderDocuments, signatureCapture 
    *            - Custom events any string (e.g. form name):
    *              User defined category as a string. 
    *      label : String - Property name.
    *      value : Object - Property value.
    *  valueType : String - Complex value type identifier. For example for {x : 1, y : 2} valueType could equal "point".
    * categoryId : String - Category id. For example, the same valueId "personalInformation" could be used for values "Personal Information", "Персональная Информация", "Personlige oplysninger".
    *    labelId : String - Label id. For example, the same labelId "name" could be used for labels "Name", "Имя" or "Navn".
    *    valueId : String - Value id. For example, the same valueId "female" could be used for values "Female", "Женщина", "Kvinde".
    *       time : Number - UTC, event time.
    * slideIndex : int - specifies slide position within it's parent hierarchy.
    * parentSlideName : String - name of slide parent if any.
    * parentOfParentSlideName : String - the same for higher parent. 
    **************************************************/
    MonitoringEventInfo:function() {
        var eData = {
            type: ,
            category: ,
            label: ,
            value: ,
            valueType: ,
            categoryId: ,
            labelId: ,
            valueId: ,
            time: ,
            slideIndex: ,
            parentSlideName: ,
            parentOfParentSlideName: 
        };
        
    }
    
    
        
}