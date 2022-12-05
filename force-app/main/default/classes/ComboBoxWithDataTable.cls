public class ComboBoxWithDataTable {
    @AuraEnabled//This method will return Accounts to LWC ComboBox
    public static List<Account> getAccounts(){
        List<Account> listAcc = [select id, name from Account];
        return listAcc;
    }
    //This method will return related Contacts to LWC DataTable
        @AuraEnabled
        public static list<Contact> getContacts(String AccId){
                   List<Contact> listContacts = [Select Id,Name,Email,AccountId from Contact where AccountId =:AccId];
            return listContacts;
                   
    }
}