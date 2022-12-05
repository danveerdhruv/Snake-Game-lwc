global class LoginUser {
    @AuraEnabled
    global static String login(String username, String password){
        String homeURL='https://39com-dev-ed.my.site.com/s/';
        ApexPages.PageReference PageRef=Site.login(username,password,homeURL);
        return pageRef.getURL();
    }
}