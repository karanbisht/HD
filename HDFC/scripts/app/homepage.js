var app = app || {};

app.homepage = (function(){
    
    var homepageViewModel = (function(){
        var business_ID;
        var customer_ID;
        
        var show = function(){
            localStorage.setItem("loginStatus", 1);                
            getIDFmDB();
        };
        
        function getIDFmDB(){
             var db = app.getDb();
             db.transaction(getValuesFmDB, app.errorCB, app.successCB);
        }
        
        function getValuesFmDB(tx){
            var query = 'SELECT MAX(BUSINESS_ID) as businessID FROM BUSINESS_DETAIL';
            app.selectQuery(tx, query, businessID);
             
            var query = 'SELECT MAX(CUST_ID) as customerID FROM CUSTOMER_DETAIL';
            app.selectQuery(tx, query, customerID);
        }
        
        function businessID(tx, results){
           var count = results.rows.length;              	
            if (count !== 0) {   
                business_ID =results.rows.item(0).businessID;
                if(business_ID==='null'){
                 business_ID=100000;   
                }else{
                 business_ID=business_ID+1;   
                }              
             }else{
                 business_ID=100000;
             }   
        }
        
        function customerID(tx, results){
           var count = results.rows.length;              	
            if (count !== 0) {   
                customer_ID =results.rows.item(0).customerID;                
                if(customer_ID==='null'){
                 customer_ID=100000;   
                }else{
                 customer_ID=customer_ID+1;   
                }                
             }else{
                customer_ID = 100000;
             }            
        }
        
        var contToFillBtn = function()
        {                       
            localStorage.setItem("CUSTOMER_ID", customer_ID);
            localStorage.setItem("BUSINESS_ID", business_ID);
            
            sessionStorage.setItem("SourceName",$('#sourceName').val());
            sessionStorage.setItem("constitutionType",$('#selectopt').text());            
            app.mobileApp.navigate('views/Dashboard.html');
        };
        
        return{
            contToFillBtn:contToFillBtn,
            show:show
        };
    }());
    return homepageViewModel;
}());
