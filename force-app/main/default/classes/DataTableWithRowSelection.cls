public class DataTableWithRowSelection {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactDetails(Id recordId, String searchKey){
        //if search Key is available
        if(searchKey != null && searchKey != ''){
            String key = '%' + searchKey + '%';
            list<contact> searchList = [Select Id,Name,Phone,AccountId from Contact where AccountId =:recordId 
                                        AND Name LIKE :key];
            return searchList;
        }
        //If search Key is not available
        else{
            List<Contact> listCon= [Select Id,Name,Phone,AccountId from Contact where AccountId =:recordId];
            //check if list is empty
            if(!listCon.isEmpty())
            {
                return listCon;
            }
            return null;
        }
    }
}