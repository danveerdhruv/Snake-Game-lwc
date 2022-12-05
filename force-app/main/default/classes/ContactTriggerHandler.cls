public class ContactTriggerHandler {
    public static boolean isTriggerExecuted = false;
    public static void duplicateContact(List<Contact> contacts){
        List<Contact> listContact = new List<Contact>();
        for(Contact con:contacts){
             Contact duplicateContact=new Contact();
             duplicateContact.lastName = 'duplicate Contact';  
             listContact.add(duplicateContact);
        }
        insert listContact;
    }
}