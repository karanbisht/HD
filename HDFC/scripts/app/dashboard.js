var app = app || {};

app.dashboard = (function(){
    
    var dashboardViewModel = (function(){
            var busi_Name;
            var busi_ContNO;
            var busi_OffAdd;
            var busi_State;
            var busi_City;
            var busi_PanNo;
            var busi_DOI;
            var busi_BankAccNo;
            var busi_AccType;
            var busi_BankName;
            var busi_Nature;
            var busi_Desc;
            
            
            var cust_Name;
            var cust_ContNO;
            var cust_OffAdd;
            var cust_State;
            var cust_City;
            var cust_PanNo;
            var cust_DOB;
            var cust_Email;
            var cust_Desig;
            var cust_OwnerShip;
            
            var loan_Amount;
            var loan_Tenure;
        
        var int = function()
        {
            
        };
        
        var show = function()
        {
           
        };
        
        var saveFormDetail = function(e){
                
             busi_Name=$("#business_name").val();
             busi_ContNO=$("#contact_no").val();
             busi_OffAdd=$("#office_address").val();
             busi_State=$("#state").val();
             busi_City=$("#city").val();
             busi_PanNo=$("#pan_no").val();
             busi_DOI=$("#date_incorp").val();
             busi_BankAccNo=$("#bank_acnt").val();
             busi_AccType=$("#type_a_c").val();
             busi_BankName=$("#bank_name").val();
             busi_Nature=$("#business_name").val();
             busi_Desc=$("#descripBusiness").val();
            
            
             cust_Name=$("#name").val();
             cust_ContNO=$("#mobile_no").val();
             cust_OffAdd=$("#office_address_cust").val();
             cust_State=$("#state1").val();
             cust_City=$("#city1").val();
             cust_PanNo=$("#pan_no1").val();
             cust_DOB=$("#date_birth").val();
             cust_Email=$("#email").val();
             cust_Desig=$("#designation").val();
             cust_OwnerShip=$("#owner_ship").val();
            
             loan_Amount=$("#amount_req").val();
             loan_Tenure=$("#tenure").val();
            
             var db = app.getDb();
             
              db.transaction(insertFormData, app.errorCB, app.successCB);                               
            
            if(e.sender.element[0].attributes['data-id'].value==="1"){
                 db.transaction(insertFormData, app.errorCB, app.successCB);                                    
             }else{
                 db.transaction(insertFormData, app.errorCB, goToNextPage);
             }
        }
        
        
        function goToNextPage(){
           app.mobileApp.navigate('#bankStmView');  
        }
        
        function insertFormData(tx){

            var queryBusi = 'INSERT INTO BUSINESS_DETAIL(BUSI_NAME,BUSI_OFF_ADDRESS,BUSI_STATE, BUSI_CONTACT_NO, BUSI_CITY,  BUSI_DOI , BUSI_PAN_NO, BUSI_BANK_AC_NO, BUSI_ACC_TYPE, BUSI_BANK_NAME,BUSI_NATURE, BUSI_DESC) VALUES ("'
                        + busi_Name
                        + '","'
                        + busi_OffAdd
                        + '","'
                        + busi_State
                        + '","'
                        + busi_ContNO
                        + '","'
                        + busi_City
                        + '","'
                        + busi_DOI
                        + '","'
                        + busi_PanNo
                        + '" ,"'
                        + busi_BankAccNo
                        + '","'
                        + busi_AccType
                        + '","'
                        + busi_BankName
                        + '","'
                        + busi_Nature
                        + '" ,"'
                        + busi_Desc + '")';            
            
            var queryCust = 'INSERT INTO CUSTOMER_DETAIL(BUSINESS_ID , CUST_NAME ,CUST_OFF_ADDRESS ,CUST_STATE, CUST_MOBILE , CUST_CITY , CUST_EMAIL , CUST_DOB, CUST_PAN_NO, CUST_DESIG , CUST_OWNERSHIP) VALUES ("'
                        + '1100110022'
                        + '","'
                        + cust_Name
                        + '","'
                        + cust_OffAdd
                        + '","'
                        + cust_State
                        + '","'
                        + cust_ContNO
                        + '","'
                        + cust_City
                        + '","'
                        + cust_Email
                        + '" ,"'
                        + cust_DOB
                        + '","'
                        + cust_PanNo
                        + '","'
                        + cust_Desig
                        + '" ,"'            
                        + cust_OwnerShip + '")';
                        
            
             var queryloan = 'INSERT INTO LOAN_REQ_DETAIL(LOAN_AMOUNT , LOAN_TENURE ,CUST_ID ,BUSINESS_ID ) VALUES ("'
                        + loan_Amount
                        + '","'
                        + loan_Tenure
                        + '","'                        
                        + 123
                        + '" ,"'            
                        + 123456 + '")';


            app.insertQuery(tx, queryBusi);
            app.insertQuery(tx, queryCust);
            app.insertQuery(tx, queryloan);
        }
        
        return{
            int:int,
            show:show,
            saveFormDetail:saveFormDetail
            
        };
    }());
    return dashboardViewModel;
}());
