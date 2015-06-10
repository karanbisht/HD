var app = app || {};

app.dashboard = (function(){
     var business_ID;
     var customer_ID;
    
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
            customer_ID = localStorage.getItem("CUSTOMER_ID");
            business_ID = localStorage.getItem("BUSINESS_ID");
            
            //$("#datetimepicker").removeAttr('disabled');
            //$("#datetimepicker").removeClass("k-input");
            
            applicationtabActive(); // call the navbar tab for active status.
                                    
            $("#datetimepicker").kendoDatePicker({
                                                         value: new Date(),
                                                         position: "bottom left",
                                                         value:'Date of Incorp',
                                                         animation: {
                                                         open: {
                                                                     effects: "slideIn:up"
                                                                 }                
                },
                                                         open: function(e) {
                                                             //$(".disabledDay").parent().removeClass("k-link")
                                                             //$(".disabledDay").parent().removeAttr("href")
                                                         },

                 
                                                         change: function() {
                                                             var value = this.value();
                                                         }
                                                     }).data("kendoDatePicker");
            
                        //$('#datetimepicker').attr('disabled', 'disabled');
            
                        $("#date_birth").kendoDatePicker({
                                                         value: new Date(),
                                                         position: "bottom left",
                                                         value:'D.O.B',
                                                         animation: {
                                                         open: {
                                                                     effects: "slideIn:up"
                                                                 }                
                                                          },
                                                         open: function(e) {
                                                             //$(".disabledDay").parent().removeClass("k-link")
                                                             //$(".disabledDay").parent().removeAttr("href")
                                                         },

                 
                                                         change: function() {
                                                             var value = this.value();
                                                         }
                                                     }).data("kendoDatePicker");
        
                         //$('#date_birth').attr('disabled', 'disabled');
            
            if(typeof index === 'undefined')
            {
                 index = 0;
                 removeVal = 0;
            }
            
            $(".addmore").unbind('.myPlugin');
            $(".remove").unbind();
            
           $('.addmore').on("click.myPlugin",function(){
                removeVal++;
                $("#mainAdd").hide();
                $('#addremove').show();
                var form = getForm(++index);
                console.log("index : "+index);
                $('.rptBoxmain').append(form);
               
               $("#dynCalander"+index).kendoDatePicker({
                    value:new Date(),
                    format: "yyyy/MM/dd",
                    value:'D.O.B'
                });
            });
            
            $('.remove').on("click", function () {
                console.log("Delete Value "+removeVal);
                $(".rptBox"+removeVal).remove();
                index--;
                if(removeVal>1)
                {
                    $("#mainAdd").hide();
                }
                else
                {
                    $('#addremove').hide();
                    $("#mainAdd").show();
                }
                removeVal--;
                $(".km-scroll-container").css("-webkit-transform", "");
            });
        };
        
        
        var getForm = function(index)
        {
            return $('<div class="rptBox' + index + ' second"><hr><div class="rwfil clearfix"><p><input type="text" class="IN1 ipsm3" name="Name" id="name' + index + '" placeholder="Name" ></p><p><input type="text" class="IN1 ipsm3" name="Office Address" id="office_address'+index+'" placeholder="Office Address" ></p><p><input type="number" pattern="[0-9]*" step="0.01" class="IN1 ipsm3 noMgRt" name="Mobile No" id="mobile_no'+index+'" placeholder="Mobile No" ></p></div><div class="rwfil clearfix"><p>'+getState(index)+'</p><p>'+getCity(index)+'</p><p><input type="text" class="IN1 ipsm3 noMgRt" name="Email Id" id="email'+index+'" placeholder="Email Id" ></p></div><div class="rwfil blking clearfix"><p>'+getCalander(index)+'</p><p><input type="text" class="IN1 ipsm3" name="PAN No" id="pan_no1'+index+'" placeholder="PAN No" ></p><p><input type="text" class="IN1 ipsm3 noMgRt" name="Designation" id="designation'+index+'" placeholder="Designation" ></p></div><div class="rwfil clearfix"><p>'+getOwnerShip(index)+'</p></div></div>');
        };
        
        var getState = function(index)
        {
            var str ='';
            str = '<select original-title="Select State" class="IN1 ipsm3" id="state1'+index+'" name="state" required=""><option value="">State</option>';
            str+='<option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Delhi"s>Delhi</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu and Kashmir">Jammu and Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Odisha">Odisha</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Sikkim">Sikkim</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="Uttarakhand">Uttarakhand</option><option value="Tripura">Tripura</option><option value="West Bengal">West Bengal</option><option value="Andaman and Nicobar">Andaman and Nicobar</option><option value="Chandigarh">Chandigarh</option><option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option><option value="Daman and Diu">Daman and Diu</option><option value="Lakshadweep">Lakshadweep</option><option value="Puducherry">Puducherry</option>';
            str+='</select>';
            return str;
        };
        
        var getCity = function(index)
        {
            var str ='';
            str+='<select original-title="City" class="IN1 ipsm3" id="city'+index+'" name="city1" required=""><option value="">City</option>';
            str+='<option>Ahmedabad </option><option>Bangalore </option><option>Chennai </option><option>New Delhi</option><option>Hyderabad </option><option>Jaipur </option><option>Kochi </option><option>Kolkata </option><option>Mumbai </option><option>Noida</option><option>Pune </option><option>Surat </option>';
            str+='</select>';
            return str;
        };
        
        var getOwnerShip = function(index)
        {
            var str = "";
            str ='<select original-title="Owner Ship %" class="IN1 ipsm4" id="owner_ship'+index+'" name="owner ship" required="">'; 
            str+='<option value="">Owner Ship %</option>';
            for (i=100; i >= 1;i--) {
            	str +='<option value=' + i + '>' + i + '</option>';
            }
            str +='</select>';
            return str;
        };
        
        var getCalander = function(index)
        {
            var str = '';
            str = '<input id="dynCalander'+index+'" placeholder="Date of Birth" class="IN1 ipsm3">';
            return str;
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
           $(".km-scroll-container").css("-webkit-transform", "");  
           app.mobileApp.navigate('#bankStmView');  
        }
        
        function insertFormData(tx){

            var queryBusi = 'INSERT INTO BUSINESS_DETAIL(BUSINESS_ID ,BUSI_NAME,BUSI_OFF_ADDRESS,BUSI_STATE, BUSI_CONTACT_NO, BUSI_CITY,  BUSI_DOI , BUSI_PAN_NO, BUSI_BANK_AC_NO, BUSI_ACC_TYPE, BUSI_BANK_NAME,BUSI_NATURE, BUSI_DESC) VALUES ("'
                        + business_ID
                        + '","'
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
         
 
            var queryCust = 'INSERT INTO CUSTOMER_DETAIL(CUST_ID ,BUSINESS_ID , CUST_NAME ,CUST_OFF_ADDRESS ,CUST_STATE, CUST_MOBILE , CUST_CITY , CUST_EMAIL , CUST_DOB, CUST_PAN_NO, CUST_DESIG , CUST_OWNERSHIP) VALUES ("'
                        + customer_ID
                        + '","'
                        + business_ID
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
                        + customer_ID
                        + '" ,"'            
                        + business_ID + '")';

            app.insertQuery(tx, queryBusi);
            app.insertQuery(tx, queryCust);
            app.insertQuery(tx, queryloan);
        }
        
        var numberDocUpload=0;
        var attachshow = function(){            
            attachDoctabActive(); // call the navbar tab for active status.            
            $(".km-scroll-container").css("-webkit-transform", ""); 
            $("#attachUpdateDiv").show();
            $("#attachUpdateDivAP").show();
            $("#attachUpdateDivPL").show();
            $("#attachUpdateDivPAN").show();
            $("#attachUpdateDivITR").show();
            $("#attachUpdateDivBSTM").show();
            
            $("#attachUpdateMoreDiv").hide();
            $("#attachUpdateMoreDivAP").hide();
            $("#attachUpdateMoreDivPL").hide();
            $("#attachUpdateMoreDivPAN").hide();
            $("#attachUpdateMoreDivITR").hide();
            $("#attachUpdateMoreDivBSTM").hide();
            numberDocUpload=0;
            attachDocArray=[];
            
            
        }
        
        var goBackTo=0;
        var dbName;
        var clickToUploadDiv = function(e){            
           $(".km-scroll-container").css("-webkit-transform", ""); 
           app.mobileApp.navigate('#attachDocViewPhotoTab'); 
           var docName = e.sender.element[0].attributes['data-title'].value; 
           $("#docIdName").html(docName);            
           dbName = e.sender.element[0].attributes['data-DBtitle'].value;
         
           if(e.sender.element[0].attributes['data-from'].value==="1"){
              goBackTo=1;
           }else{
              goBackTo=2;  
           }    
           attachDocArray=[];
           numberDocUpload=0;  
        }
                       
        var clickToViewUploadDiv = function(){
             $(".km-scroll-container").css("-webkit-transform", ""); 
             app.mobileApp.navigate('#attachDocViewSavePhotoTab'); 
 
        }
        
        var takeAttachDocPhoto = function(){
             navigator.camera.getPicture(attachDocSuccess, onFail, { 
                                            quality: 50,
                                            destinationType: navigator.camera.DestinationType.FILE_URI,
                                            sourceType: navigator.camera.PictureSourceType.CAMERA,
                                            correctOrientation: true
                                        });
        }
        
        //var profileImagePath;                
        var attachDocArray=[];
        function attachDocSuccess(imageURI) {
            numberDocUpload++;            
            var imgDocShow = document.getElementById('attachDoc'+numberDocUpload);
            $("#listAttach"+numberDocUpload).addClass("active");
            imgDocShow.src = imageURI;
            //profileImagePath = imageURI;             
            attachDocArray.push(imageURI);
        }
        
        function onFail(message) {
            //console.log('Failed because: ' + message);
            
        }   
        
        function insertDocItems(tx) {  
            
            for(var i=0;i<attachDocArray.length;i++){            
                var query = 'INSERT INTO CUST_ATTACH_DOC'+dbName+'(CUST_ID ,ATTACH_DOC) VALUES ("'
                        + customer_ID
                        + '","'                        
                        + attachDocArray[i] + '")';
                                
                app.insertQuery(tx, query);
                
             }  
            
            var arrLength1 = attachDocArray.length-1;
            var arrLength2 = attachDocArray.length-2;
            
            if(attachDocArray.length===1){
                
                 if(localStorage.getItem("shareDoc1_"+dbName) ==='styles/images/save-pic.png'){
                       localStorage.setItem("shareDoc1_"+dbName, attachDocArray[arrLength1]);
                 }else if((localStorage.getItem("shareDoc1_"+dbName) !=='styles/images/save-pic.png') && localStorage.getItem("shareDoc2_"+dbName) ==='styles/images/save-pic.png'){                 
                      localStorage.setItem("shareDoc2_"+dbName, attachDocArray[arrLength1]);                     
                 }else{
                      localStorage.setItem("shareDoc1_"+dbName, attachDocArray[arrLength1]);
                 }   
                              
            }else{
                 localStorage.setItem("shareDoc1_"+dbName, attachDocArray[arrLength1]);
                 localStorage.setItem("shareDoc2_"+dbName, attachDocArray[arrLength2]);                  
            }
             
        }
        

        var saveAttachDoc = function(){          
            $(".km-scroll-container").css("-webkit-transform", "");             
            if(attachDocArray.length!==0){
               var db = app.getDb();
               db.transaction(insertDocItems, app.errorCB, showSaveDoc);               
            }else{
                app.showAlert("Please attach Document","HDFC");
            }    
        }
        
        function showSaveDoc(){
           var db = app.getDb();
           db.transaction(getSaveDocVal, app.errorCB, app.successCB);     
        }
        
        function getSaveDocVal(tx){         
            var query = "SELECT ATTACH_DOC FROM CUST_ATTACH_DOC WHERE CUST_ID='"+customer_ID+"' ORDER BY ID DESC LIMIT 2 ";
            app.selectQuery(tx, query, attachDocData);
        }
        
        function getAllSaveDocVal(tx){         
            var query = "SELECT ATTACH_DOC FROM CUST_ATTACH_DOC WHERE CUST_ID="+customer_ID;
            app.selectQuery(tx, query, attachAllDocData);
        }
        
        
        function attachDocData(tx, results){               
           var count = results.rows.length;   
           app.mobileApp.navigate('#attachDocView');  
            
            $("#attachUpdateDiv").hide();
            $("#attachUpdateDivAP").hide();
            $("#attachUpdateDivPL").hide();
            $("#attachUpdateDivPAN").hide();
            $("#attachUpdateDivITR").hide();
            $("#attachUpdateDivBSTM").hide();
            
            $("#attachUpdateMoreDiv").show();
            $("#attachUpdateMoreDivAP").show();
            $("#attachUpdateMoreDivPL").show();
            $("#attachUpdateMoreDivPAN").show();
            $("#attachUpdateMoreDivITR").show();
            $("#attachUpdateMoreDivBSTM").show(); 
            
            var ITR_doc1 = localStorage.getItem("shareDoc1_ITR");
            var ITR_doc2 = localStorage.getItem("shareDoc2_ITR");
            
            var BST_doc1 = localStorage.getItem("shareDoc1_BST");
            var BST_doc2 = localStorage.getItem("shareDoc2_BST");
            
            var PAN_doc1 = localStorage.getItem("shareDoc1_PAN");
            var PAN_doc2 = localStorage.getItem("shareDoc2_PAN");
                        
            var PL_doc1 = localStorage.getItem("shareDoc1_PL");
            var PL_doc2 = localStorage.getItem("shareDoc2_PL");
                        
            var AP_doc1 = localStorage.getItem("shareDoc1_AP");            
            var AP_doc2 = localStorage.getItem("shareDoc2_AP");
            
                     
            if(ITR_doc1===null || ITR_doc1==='null' ){
                ITR_doc1='styles/images/save-pic.png';
            }else if(ITR_doc2===null || ITR_doc2==='null' ){
                ITR_doc2='styles/images/save-pic.png';
            }else if(BST_doc1===null || BST_doc1==='null'){
                BST_doc1='styles/images/save-pic.png';
            }else if(BST_doc2===null || BST_doc2==='null'){
                BST_doc2='styles/images/save-pic.png';
            }else if(PAN_doc1===null || PAN_doc1==='null'){
                PAN_doc1='styles/images/save-pic.png';
            }else if(PAN_doc2===null || PAN_doc2==='null'){
                PAN_doc2='styles/images/save-pic.png';
            }else if(PL_doc1===null || PL_doc1==='null'){
                PL_doc1='styles/images/save-pic.png';
            }else if(PL_doc2===null || PL_doc2==='null'){
                PL_doc2='styles/images/save-pic.png';
            }else if(AP_doc1===null || AP_doc1==='null'){
                AP_doc1='styles/images/save-pic.png';
            }else if(AP_doc2===null || AP_doc2==='null'){
                AP_doc2='styles/images/save-pic.png';
            }
            
            var imgDocShowITR = document.getElementById('showSaveDocITR1');
              imgDocShowITR.src = ITR_doc1;
                
            var imgDocShowITR1 = document.getElementById('showSaveDocITR2');
              imgDocShowITR1.src = ITR_doc2;
            
            var imgDocShowBSTM = document.getElementById('showSaveDocBSTM1');
              imgDocShowBSTM.src = BST_doc1;
                
            var imgDocShowBSTM1 = document.getElementById('showSaveDocBSTM2');
              imgDocShowBSTM1.src = BST_doc2;
            
            var imgDocShowPAN = document.getElementById('showSaveDocPAN1');
              imgDocShowPAN.src = PAN_doc1;
                
            var imgDocShowPAN1 = document.getElementById('showSaveDocPAN2');
                imgDocShowPAN1.src = PAN_doc2;
            
            
            var imgDocShowPL = document.getElementById('showSaveDocPL1');
                imgDocShowPL.src = PL_doc1;
                
            var imgDocShowPL1 = document.getElementById('showSaveDocPL2');
                imgDocShowPL1.src = PL_doc2;
            
            
            var imgDocShowAP = document.getElementById('showSaveDocAP1');
                imgDocShowAP.src = AP_doc1;
                
            var imgDocShowAP1 = document.getElementById('showSaveDocAP2');
                imgDocShowAP1.src = AP_doc2;
            
            
            if (count !== 0){
                if(count ===1){
                    var attachDoc1 =results.rows.item(0).ATTACH_DOC;
                    var imgDocShow = document.getElementById('showSaveDoc1');
                    imgDocShow.src = attachDoc1;
                    
                    var imgDocShowNO = document.getElementById('showSaveDoc2');
                    imgDocShowNO.src = 'styles/images/save-pic.png';
                
                }else{
                    var attachDoc1 =results.rows.item(0).ATTACH_DOC;
                    var attachDoc2 =results.rows.item(1).ATTACH_DOC;                
                
                    var imgDocShow = document.getElementById('showSaveDoc1');
                    imgDocShow.src = attachDoc1;
                
                    var imgDocShow1 = document.getElementById('showSaveDoc2');
                    imgDocShow1.src = attachDoc2;             
                }     
            }   
        }
        
        function attachAllDocData(tx, results){           
           var count = results.rows.length;
           document.getElementById("containerUL").innerHTML = "";    
               if (count !== 0){
                   for(var i=1;i<=count;i++){
                      var dbIndex = i-1; 
                      var url =results.rows.item(dbIndex).ATTACH_DOC;
                      document.getElementById("containerUL").innerHTML += '<li id="listAttachDB"'+i+'" class="active"><span><img id="attachDocDB"'+i+'" src="'+url+'" alt="img"></span></li>'
                      $("#goBackFrmView").hide();
                   }                   
               }else{
                 document.getElementById("containerUL").innerHTML = "No Document Uploaded.";
                 $("#goBackFrmView").hide();  
               }
            
        }
        
        
        var cancelAttachDoc = function(){                    
          while(numberDocUpload>=1){  
            var imgDocShow = document.getElementById('attachDoc'+numberDocUpload);
            imgDocShow.src = 'styles/images/pic.gif';      
            $("#listAttach"+numberDocUpload).removeClass("active");  
            numberDocUpload--;
          }                   
           
           app.mobileApp.navigate("#attachDocView"); 
           
            if(goBackTo===1){
                 //$("#attachUpdateDiv").show();                
                 //$("#attachUpdateMoreDiv").hide();  
                
                    $("#attachUpdateDiv").show();
                    $("#attachUpdateDivAP").show();
                    $("#attachUpdateDivPL").show();
                    $("#attachUpdateDivPAN").show();
                    $("#attachUpdateDivITR").show();
                    $("#attachUpdateDivBSTM").show();
            
                    $("#attachUpdateMoreDiv").hide();
                    $("#attachUpdateMoreDivAP").hide();
                    $("#attachUpdateMoreDivPL").hide();
                    $("#attachUpdateMoreDivPAN").hide();
                    $("#attachUpdateMoreDivITR").hide();
                    $("#attachUpdateMoreDivBSTM").hide(); 
            }else{
                 //$("#attachUpdateDiv").hide();
                 //$("#attachUpdateMoreDiv").show();  
                
                    $("#attachUpdateDiv").hide();
                    $("#attachUpdateDivAP").hide();
                    $("#attachUpdateDivPL").hide();
                    $("#attachUpdateDivPAN").hide();
                    $("#attachUpdateDivITR").hide();
                    $("#attachUpdateDivBSTM").hide();
            
                    $("#attachUpdateMoreDiv").show();
                    $("#attachUpdateMoreDivAP").show();
                    $("#attachUpdateMoreDivPL").show();
                    $("#attachUpdateMoreDivPAN").show();
                    $("#attachUpdateMoreDivITR").show();
                    $("#attachUpdateMoreDivBSTM").show(); 
            }     
            
           //$("#screenfor").show(); 
           //$("#Screenfive").hide();                    
        }
        
        var goToBankStm = function(){
            $(".km-scroll-container").css("-webkit-transform", "");  
            app.mobileApp.navigate('#bankStmView');
        }
        
        var attachSave = function(){
           app.showAlert("Data Save successfully","HDFC"); 
           app.mobileApp.navigate('#welcomeToHDFC');               
        }
        
        var photoUplShow = function(){
            for(var i=1;i<=6;i++){
                var imgDocShow = document.getElementById('attachDoc'+i);
                imgDocShow.src = 'styles/images/pic.gif';
                $("#listAttach"+i).removeClass("active");
            }  
        }
        
        var showPhotoUplShow = function(){
            var db = app.getDb();
            db.transaction(getAllSaveDocVal, app.errorCB, app.successCB);     
        }
        
        var submitBnkStm = function(){
            attachDoctabActive();
            app.mobileApp.navigate('#attachDocView');  
        }
        
        var clickOnImg = function(e){
            var device = app.devicePlatform();
            console.log(e.sender.element[0].attributes.src.value);            
            var imgUrl = e.sender.element[0].attributes.src.value;
            
             if(device==="iOS"){
                    window.open(imgUrl, '_blank' , 'location=no,enableViewportScale=yes,closebuttoncaption=Close');
             }else{
                    window.open(imgUrl, '_system' , 'location=no,enableViewportScale=yes,closebuttoncaption=Close');
             }
        }
        
        var clickOnAttachImg = function(e){
            if(attachDocArray.length!==0){
                var index = e.sender.element[0].attributes['data-index'].value;                
                if(index >= attachDocArray.length){
                }else{
                    
                     navigator.notification.confirm("Are you sure you want to delete this.", function (confirmed) {           
                           if (confirmed === true || confirmed === 1) {
                                attachDocArray.splice(index, 1);                                 
                               
                                if(attachDocArray.lenght!==0){
                                    
                                    for(var i=1;i<=6;i++){
                                        var imgDocShow = document.getElementById('attachDoc'+i);
                                        imgDocShow.src = 'styles/images/pic.gif';
                                        $("#listAttach"+i).removeClass("active");
                                    }
                                    
                                    
                                    for(var j=1;j<=attachDocArray.length;j++){
                                           var imgDocShowNew = document.getElementById('attachDoc'+j);
                                           $("#listAttach"+j).addClass("active");
                                           var newIndex = j-1; 
                                           imgDocShowNew.src = attachDocArray[newIndex];
                                           
                                    }
                                    
                                    numberDocUpload = attachDocArray.length;
                                    
                                }
                               
                                
                             }
                     },"HDFC", ['Yes', 'No']);    
                    
                }
            }    
        }
        
        var bnkStmShow = function(){
            bankStatmentTabActive();  // call the navbar tab for active status.
        };
        
        var applicationtabActive = function()
        {
            $(".appFormTab").addClass("selected");
            $(".bankStmTab").removeClass("selected");
            $(".attachDocTab").removeClass("selected");
        };
        
        var bankStatmentTabActive = function()
        {
            $(".appFormTab").removeClass("selected");
            $(".bankStmTab").addClass("selected");
            $(".attachDocTab").removeClass("selected");
        };
        
        var attachDoctabActive = function()
        {
            $(".appFormTab").removeClass("selected");
            $(".bankStmTab").removeClass("selected");
            $(".attachDocTab").addClass("selected");
        };
        
        var goBackAgain = function(){
            
            app.mobileApp.navigate('#attachDocView'); 
        }
        
        
        return{
            int:int,
            show:show,
            goToBankStm:goToBankStm,
            photoUplShow:photoUplShow,
            clickOnImg:clickOnImg,
            goBackAgain:goBackAgain,
            showPhotoUplShow:showPhotoUplShow,
            bnkStmShow:bnkStmShow,
            submitBnkStm:submitBnkStm,
            clickToUploadDiv:clickToUploadDiv,
            clickToViewUploadDiv:clickToViewUploadDiv,
            attachSave:attachSave,
            clickOnAttachImg:clickOnAttachImg,
            takeAttachDocPhoto:takeAttachDocPhoto,
            attachshow:attachshow,
            saveAttachDoc:saveAttachDoc,
            cancelAttachDoc:cancelAttachDoc,
            saveFormDetail:saveFormDetail            
        };
    }());
    return dashboardViewModel;
}());
