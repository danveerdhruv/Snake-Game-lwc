public class ForEachDemo {
    @AuraEnabled(cacheable=true)
    public static List<Campaign> getCampaignDetails(){
         List<Campaign> listCam=[select Id, Name, Description from Campaign];
        return listCam;
    } 
}