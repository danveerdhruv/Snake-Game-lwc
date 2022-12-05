public class ComboBox {
    @AuraEnabled
    public static List<Account> getAccounts(){
        List<Account> listAcc = [select Id, name from Account];
        return listAcc;
    }
}