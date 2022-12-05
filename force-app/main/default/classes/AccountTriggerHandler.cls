public class AccountTriggerHandler {
    public static void sendEmailOnUndelete(List<Account> accounts){
        List<Messaging.SingleEmailMessage> listMessages = new List<Messaging.SingleEmailMessage>();
        for(Account acc:accounts){
            Messaging.SingleEmailMessage msg = new Messaging.SingleEmailMessage();
            List<String> emailAdd = new List<String>();
            emailAdd.add(UserInfo.getUserEmail());
            msg.setToAddresses(emailAdd);
            msg.setSubject('Following Accounts has been sucessfully restored');
            msg.setPlainTextBody('Account has been successfully restored' + acc.Name);
        listMessages.add(msg);
        }
        Messaging.sendEmail(listMessages);
    }
    
    public static void sendEmailOnAfterDelete(List<Account> accounts){
        List<Messaging.SingleEmailMessage> listMessages = new List<Messaging.SingleEmailMessage>();
        for(Account acc:accounts){
            Messaging.SingleEmailMessage msg = new Messaging.SingleEmailMessage();
            List<String> emailAdd = new List<String>();
            emailAdd.add(UserInfo.getUserEmail());
            msg.setToAddresses(emailAdd);
            msg.setSubject('Following Accounts has been sucessfully deleted');
            msg.setPlainTextBody('Account has been successfully deleted' + acc.Name);
        listMessages.add(msg);
        }
        Messaging.sendEmail(listMessages);
    }
}