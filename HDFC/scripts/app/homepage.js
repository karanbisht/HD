var app = app || {};

app.homepage = (function(){
    
    var homepageViewModel = (function(){
        var business_ID;
        var customer_ID;
        
        var show = function(){
            localStorage.setItem("loginStatus", 1);     
            
            localStorage.setItem("shareDoc1_ITR", 'styles/images/save-pic.png');
            localStorage.setItem("shareDoc2_ITR", 'styles/images/save-pic.png');
                        
            localStorage.setItem("shareDoc1_BST", 'styles/images/save-pic.png');
            localStorage.setItem("shareDoc2_BST", 'styles/images/save-pic.png');
            
            localStorage.setItem("shareDoc1_PAN", 'styles/images/save-pic.png');
            localStorage.setItem("shareDoc2_PAN", 'styles/images/save-pic.png');
                       
            localStorage.setItem("shareDoc1_PL", 'styles/images/save-pic.png');
            localStorage.setItem("shareDoc2_PL", 'styles/images/save-pic.png');
            
            localStorage.setItem("shareDoc1_AP", 'styles/images/save-pic.png');
            localStorage.setItem("shareDoc2_AP", 'styles/images/save-pic.png');
            
            //getIDFmDB();
            

            localStorage.setItem("CUSTOMER_ID", 1000000);
            localStorage.setItem("BUSINESS_ID", 1000000);
            
            deleteDB();
        };
        
        function deleteDB(){
            var db = app.getDb();
            db.transaction(deleteaTableData, app.errorCB,app.successCB);            
        }
        
        function deleteaTableData(tx){
            var query = "DELETE FROM CUSTOMER_DETAIL";
        	app.deleteQuery(tx, query);

        	var query1 = "DELETE FROM BUSINESS_DETAIL";
        	app.deleteQuery(tx, query1);

        	var query2 = "DELETE FROM CUST_ATTACH_DOC";
	        app.deleteQuery(tx, query2);

        	var query3 = "DELETE FROM LOAN_REQ_DETAIL";
	        app.deleteQuery(tx, query3);            
        }
        
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
