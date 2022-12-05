public class WireDemo {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        List<Account> accList= [Select Id, Name from Account];
        return accList;
    }
}