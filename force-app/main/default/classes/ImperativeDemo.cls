public class ImperativeDemo {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactDetails(){
        List<Contact> listCon = [Select Name,Account.Name from Contact];
        return listCon;
    }
}