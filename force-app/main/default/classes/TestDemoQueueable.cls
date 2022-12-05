public class TestDemoQueueable implements Queueable{
    
    private List<Account> listAcc;
    
    public TestDemoQueueable (List<Account> expectingAccountsFromTrigger){
        this.listAcc=expectingAccountsFromTrigger;
    }
    
    public void execute(QueueableContext qbc){
        //Logic written here will run asynchronously.
        //System.enqueueJob(new SecondClass());
    }
}