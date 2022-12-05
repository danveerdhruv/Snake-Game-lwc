trigger ContactTrigger on Contact (after insert) {
    if(Trigger.isAfter && Trigger.isInsert && !ContactTriggerHandler.isTriggerExecuted){
        ContactTriggerHandler.isTriggerExecuted = true;
        ContactTriggerHandler.duplicateContact(Trigger.new);
    }
}