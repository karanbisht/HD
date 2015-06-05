var app = (function (win) {
    'use strict';

    // Global error handling
    var showAlert = function(message, title, callback) {
        navigator.notification.alert(message, callback || function () {
        }, title, 'OK');
    };

    var showError = function(message) {
        showAlert(message, 'Error occured');
    };

    win.addEventListener('error', function (e) {
        e.preventDefault();

        var message = e.message + "' from " + e.filename + ":" + e.lineno;

        showAlert(message, 'Error occured');

        return true;
    });

    // Global confirm dialog
    var showConfirm = function(message, title, callback) {
        navigator.notification.confirm(message, callback || function () {
        }, title, ['OK', 'Cancel']);
    };



    // Handle device back button tap
    var onBackKeyDown = function(e) {
        e.preventDefault();

        navigator.notification.confirm('Do you really want to exit?', function (confirmed) {
            var exit = function () {
                navigator.app.exitApp();
            };

            if (confirmed === true || confirmed === 1) {
                // Stop EQATEC analytics monitor on app exit
                if (analytics.isAnalytics()) {
                    analytics.Stop();
                }
                AppHelper.logout().then(exit, exit);
            }
        }, 'Exit', ['OK', 'Cancel']);
    };

    var onDeviceReady = function() {
        document.addEventListener('backbutton', onBackKeyDown, false);
        navigator.splashscreen.hide();
        var db = getDb();
        db.transaction(createDB, app.errorCB, app.successCB);
    };
    
    function getDb() {
        return window.openDatabase("HDFCDB", "1.0", "Cordova Demo", 50000000);
    };
                
    var createDB = function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS CUSTOMER_DETAIL(CUST_ID INTEGER AUTO_INCREMENT, BUSINESS_ID INTEGER , CUST_NAME TEXT,CUST_OFF_ADDRESS TEXT,CUST_STATE TEXT, CUST_MOBILE INTEGER, CUST_CITY TEXT , CUST_EMAIL TEXT , CUST_DOB TEXT , CUST_PAN_NO TEXT , CUST_DESIG TEXT , CUST_OWNERSHIP INTEGER)');       
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS BUSINESS_DETAIL(BUSINESS_ID INTEGER AUTO_INCREMENT , BUSI_NAME TEXT,BUSI_OFF_ADDRESS TEXT,BUSI_STATE TEXT, BUSI_CONTACT_NO INTEGER, BUSI_CITY TEXT ,  BUSI_DOI TEXT , BUSI_PAN_NO TEXT , BUSI_BANK_AC_NO TEXT , BUSI_ACC_TYPE TEXT , BUSI_BANK_NAME TEXT ,BUSI_NATURE TEXT , BUSI_DESC TEXT)');       
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS LOAN_REQ_DETAIL(LOAN_ID INTEGER AUTO_INCREMENT ,LOAN_AMOUNT INTEGER , LOAN_TENURE INTEGER ,CUST_ID INTEGER ,BUSINESS_ID INTEGER)');
      
        //tx.executeSql('ALTER TABLE CUSTOMER_DETAIL AUTO_INCREMENT = 1000'); 
        //tx.executeSql('ALTER TABLE BUSINESS_DETAIL AUTO_INCREMENT = 1000'); 
        //tx.executeSql('ALTER TABLE LOAN_REQ_DETAIL AUTO_INCREMENT = 1000'); 
     };

    // Handle "deviceready" event
    document.addEventListener('deviceready', onDeviceReady, false);



    var os = kendo.support.mobileOS,
        statusBarStyle = os.ios && os.flatVersion >= 700 ? 'black-translucent' : 'black';

    // Initialize KendoUI mobile application
    var mobileApp = new kendo.mobile.Application(document.body, {
                                                     transition: 'fade',
                                                     statusBarStyle: statusBarStyle,
                                                     skin: 'flat'
                                                 });

    var errorCB = function(error){
        console.log('Error with DB');
        console.log(error);
    }
    
    var successCB = function(){
        console.log('Success with DB');    
    }
    
    var selectQuery = function(tx, query, successFunction) {
        tx.executeSql(query, [], successFunction, errorCB);
    };

    var insertQuery = function(tx, query) {
        tx.executeSql(query);	
    };
    
    var deleteQuery = function(tx, delQuery) {
        tx.executeSql(delQuery);
    };
    
    var updateQuery = function(tx, updateQue) {
        tx.executeSql(updateQue);
    };  
    
    return {
        showAlert: showAlert,
        showError: showError,
        getDb:getDb,
        errorCB:errorCB,
        successCB:successCB,
        selectQuery:selectQuery,
        insertQuery:insertQuery,
        deleteQuery:deleteQuery,
        updateQuery:updateQuery,
        showConfirm: showConfirm,
        mobileApp: mobileApp
   
    };
}(window));
