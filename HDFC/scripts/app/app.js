var app = (function (win) {
    'use strict';

    var EXIT_APP ="Press again to exit.";
    
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

        console.log(message, 'Error occured');

        return true;
    });

    // Global confirm dialog
    var showConfirm = function(message, title, callback) {
        navigator.notification.confirm(message, callback || function () {
        }, title, ['OK', 'Cancel']);
    };



    // Handle device back button tap
    var lastClickTime11 = 0;
    var backButtonClickCount=0;
    
    var onBackKeyDown = function(e) {        
        if (app.mobileApp.view()['element']['0']['id']==='welcomeToHDFC') {
            if(backButtonClickCount===0){
                window.plugins.toast.showShortBottom(app.EXIT_APP);                  
            }
            var current = new Date().getTime();
	        var delta = current - lastClickTime11;
	        lastClickTime11 = current;
	        if (delta < 3000) {
                backButtonClickCount=0;
                e.preventDefault();            
                navigator.app.exitApp();
                
	        }else {
                if(backButtonClickCount===0){
                    backButtonClickCount=1;
                }else{
                   window.plugins.toast.showShortBottom(app.EXIT_APP); 
                }                
        	}
        }else if (app.mobileApp.view()['element']['0']['id']==='dashboard') {
            app.mobileApp.navigate("index.html");   
        }else if (app.mobileApp.view()['element']['0']['id']==='bankStmView') {
            app.mobileApp.navigate("#dashboard");  
        }else if (app.mobileApp.view()['element']['0']['id']==='attachDocView') {
            app.mobileApp.navigate("#bankStmView");      
        }
    };

    var onDeviceReady = function() {
        document.addEventListener('backbutton', onBackKeyDown, false);
        navigator.splashscreen.hide();
        
        //StatusBar.overlaysWebView(false);
        //StatusBar.backgroundColorByHexString('#000000');
        
        var db = getDb();
        db.transaction(createDB, app.errorCB, app.successCB);
    };
    
    function getDb() {
        return window.openDatabase("HDFCDB", "1.0", "Cordova Demo", 50000000);
    };
                
    var createDB = function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS CUSTOMER_DETAIL(CUST_ID INTEGER , BUSINESS_ID INTEGER , CUST_NAME TEXT,CUST_OFF_ADDRESS TEXT,CUST_STATE TEXT, CUST_MOBILE INTEGER, CUST_CITY TEXT , CUST_EMAIL TEXT , CUST_DOB TEXT , CUST_PAN_NO TEXT , CUST_DESIG TEXT , CUST_OWNERSHIP INTEGER)');
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS BUSINESS_DETAIL(BUSINESS_ID INTEGER , BUSI_NAME TEXT,BUSI_OFF_ADDRESS TEXT,BUSI_STATE TEXT, BUSI_CONTACT_NO INTEGER, BUSI_CITY TEXT ,  BUSI_DOI TEXT , BUSI_PAN_NO TEXT , BUSI_BANK_AC_NO TEXT , BUSI_ACC_TYPE TEXT , BUSI_BANK_NAME TEXT ,BUSI_NATURE TEXT , BUSI_DESC TEXT)');       
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS LOAN_REQ_DETAIL(LOAN_ID INTEGER ,LOAN_AMOUNT INTEGER , LOAN_TENURE INTEGER ,CUST_ID INTEGER ,BUSINESS_ID INTEGER)');
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS CUST_ATTACH_DOC(ID INTEGER PRIMARY KEY AUTOINCREMENT ,CUST_ID INTEGER , ATTACH_DOC TEXT)');

        tx.executeSql('CREATE TABLE IF NOT EXISTS CUST_ATTACH_DOCAP(ID INTEGER PRIMARY KEY AUTOINCREMENT ,CUST_ID INTEGER , ATTACH_DOC TEXT)');

        tx.executeSql('CREATE TABLE IF NOT EXISTS CUST_ATTACH_DOCPL(ID INTEGER PRIMARY KEY AUTOINCREMENT ,CUST_ID INTEGER , ATTACH_DOC TEXT)');

        tx.executeSql('CREATE TABLE IF NOT EXISTS CUST_ATTACH_DOCPAN(ID INTEGER PRIMARY KEY AUTOINCREMENT ,CUST_ID INTEGER , ATTACH_DOC TEXT)');

        tx.executeSql('CREATE TABLE IF NOT EXISTS CUST_ATTACH_DOCITR(ID INTEGER PRIMARY KEY AUTOINCREMENT ,CUST_ID INTEGER , ATTACH_DOC TEXT)');

        tx.executeSql('CREATE TABLE IF NOT EXISTS CUST_ATTACH_DOCBST(ID INTEGER PRIMARY KEY AUTOINCREMENT ,CUST_ID INTEGER , ATTACH_DOC TEXT)');

        //tx.executeSql('ALTER TABLE CUSTOMER_DETAIL AUTO_INCREMENT = 1000'); 
        //tx.executeSql('ALTER TABLE BUSINESS_DETAIL AUTO_INCREMENT = 1000'); 
        //tx.executeSql('ALTER TABLE LOAN_REQ_DETAIL AUTO_INCREMENT = 1000'); 
     };

    // Handle "deviceready" event
    document.addEventListener('deviceready', onDeviceReady, false);



     var os = kendo.support.mobileOS,
        statusBarStyle = os.ios && os.flatVersion >= 700 ? 'black-translucent' : 'black';

    // Initialize KendoUI mobile application
    var mobileApp;
    var loginStatusCheck = localStorage.getItem("loginStatus");  
    if(loginStatusCheck==='1' || loginStatusCheck===null){
         mobileApp = new kendo.mobile.Application(document.body, {
                                                     transition: 'fade',
                                                     initial: "#welcomeToHDFC",
                                                     statusBarStyle: statusBarStyle,
                                                     skin: 'flat'
                                                 });
    }else if(loginStatusCheck==='2'){
         mobileApp = new kendo.mobile.Application(document.body, {
                                                     transition: 'fade',
                                                     initial: "#dashboard",
                                                     statusBarStyle: statusBarStyle,
                                                     skin: 'flat'
                                                 });
    }
    var errorCB = function(error){
        console.log('Error with DB');
        console.log(JSON.stringify(error));
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
    
    var devicePlatform = function() {
        return device.platform;
    };
    
    var checkSimulator = function() {
        if (window.navigator.simulator === true) {
            //alert('This plugin is not available in the simulator.');
            return true;
        } else if (window.plugins.toast === undefined) {
            //alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
            return true;
        } else {
            return false;
        }
    };
    
    return {
        showAlert: showAlert,
        showError: showError,
        getDb:getDb,
        EXIT_APP:EXIT_APP,
        errorCB:errorCB,
        devicePlatform:devicePlatform,
        successCB:successCB,
        selectQuery:selectQuery,
        insertQuery:insertQuery,
        checkSimulator:checkSimulator,
        deleteQuery:deleteQuery,
        updateQuery:updateQuery,
        showConfirm: showConfirm,
        mobileApp: mobileApp
   
    };
}(window));
