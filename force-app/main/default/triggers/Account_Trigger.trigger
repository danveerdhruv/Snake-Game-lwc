trigger Account_Trigger on Account (before insert, after insert, before update, after update, before delete, after delete, after undelete) {
    //This is the trigger code
    /*AFTER UNDELETE LOGIC TO BE WRITTEN IN THIS BELOW BLOCK*/
    if(Trigger.isAfter && Trigger.isUndelete){
        AccountTriggerHandler.sendEmailOnUndelete(Trigger.new);
    }
    /*AFTER DELETE LOGIC TO BE WRITTEN IN THIS BELOW BLOCK*/
    if(Trigger.isAfter && Trigger.isDelete){
        AccountTriggerHandler.sendEmailOnAfterDelete(Trigger.old);
    }
    /*BEFORE DELETE LOGIC IS TO BEWRITTEN IN BELOW BLOCK*/
    if(Trigger.isBefore && Trigger.isDelete){
        for(Account acc:Trigger.old){
            if(acc.Active__c == 'Yes'){
                acc.addError('You cannot delete an active account');
            }
        }
    }
    /*AFTER UPDATE LOGIC IS TO BE WRITTEN IN BELOW BLOCK*/
    if(Trigger.isAfter && Trigger.isUpdate){
        set<Id> accWithChangedBillingAddress = new set<Id>();
        for(Account accNew:Trigger.new){
            Account accOld = Trigger.OldMap.get(accNew.Id);
            if(accOld.BillingCity != accNew.BillingCity){
                accWithChangedBillingAddress.add(accNew.Id);
            }
        }
            List<Account> accWithContacts = [Select id, name, billingcity, billingstate, billingcountry, billingstreet, (select id, name from contacts) from account WHERE id IN :accWithChangedBillingAddress];
            List<Contact> con = new List<Contact>();
            for(Account acc:accWithContacts){
                List<Contact> conToBeUpdated = acc.contacts;
                for(Contact c:conToBeUpdated){
                    c.MailingCity=acc.BillingCity;
                    c.MailingCountry=acc.BillingCountry;
                    c.MailingState=acc.BillingState;
                    c.MailingStreet=acc.BillingStreet;
                    con.add(c);
                }
            }
        if(con.size()>0)
        {
            update con;}
    }
    /*BEFORE UPDATE LOGIC IS TO BE WRITTEN IN BELOW BLOCK*/
    if(Trigger.isBefore && Trigger.isUpdate){
        for(Account acc:Trigger.new){
            if(Trigger.OldMap.get(acc.Id).Name!=acc.Name){
                acc.addError('Account Name cannot be modified once it is created');
            }
        }
    }
    /*AFTER INSERT LOGIC IS TO BE WRITTEN IN BELOW BLOCK*/
    if(Trigger.isAfter && Trigger.isInsert){
        /*scenario 3->create a contact on creation of account*/
        List<Contact> conToInsert = new List<Contact>();
        for(Account acc:Trigger.new){
            Contact con = new Contact();
            con.LastName = acc.Name;
            con.AccountId=acc.Id;
            conToInsert.add(con);
        }
        if(conToInsert.size()>0){
            insert conToInsert;
        }
    }
        
        /*BEFORE INSERT LOGIC IS TO BE WRITTEN IN BELOW BLOCK*/
        if(Trigger.isBefore && Trigger.isInsert){
        for(Account acc:Trigger.new){
        /*scenario 2->throw error if annual revenue is less than 1000*/
        if(acc.AnnualRevenue<1000){
            acc.addError('Annual revenue cannot be less than 1000');
        }
        /*scenario 1->copy billing address to shipping address if all the address fields of shipping address is blank*/
        if(acc.ShippingStreet==null && acc.ShippingState==null && acc.ShippingPostalCode==null && acc.ShippingCountry==null && acc.ShippingCity==null){
            acc.ShippingStreet=acc.BillingStreet;
            acc.ShippingState=acc.BillingState;
            acc.ShippingPostalCode=acc.BillingPostalCode;
            acc.ShippingCountry=acc.BillingCountry;
            acc.ShippingCity=acc.BillingCity;
        }
       }
    }
}