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
            
            $("#datetimepicker").removeAttr('disabled');
            $("#datetimepicker").removeClass("k-input");
            
            $('#addremove').hide();
                                    
            $("#datetimepicker").kendoDatePicker({
                                                         value: new Date(),
                                                         position: "bottom left",
                                                         animation: {
                                                         open: {
                                                                     effects: "slideIn:up"
                                                                 }                
                },
                                                         open: function(e) {
                                                             $(".disabledDay").parent().removeClass("k-link")
                                                             $(".disabledDay").parent().removeAttr("href")
                                                         },

                 
                                                         change: function() {
                                                             var value = this.value();
                                                         }
                                                     }).data("kendoDatePicker");
            
                        $('#datetimepicker').attr('disabled', 'disabled');
            
                        $("#date_birth").kendoDatePicker({
                                                         value: new Date(),
                                                         position: "bottom left",
                                                         animation: {
                                                         open: {
                                                                     effects: "slideIn:up"
                                                                 }                
                                                          },
                                                         open: function(e) {
                                                             $(".disabledDay").parent().removeClass("k-link")
                                                             $(".disabledDay").parent().removeAttr("href")
                                                         },

                 
                                                         change: function() {
                                                             var value = this.value();
                                                         }
                                                     }).data("kendoDatePicker");
        
                         $('#date_birth').attr('disabled', 'disabled');
            
            if(typeof index === 'undefined')
            {
                 index = 0;
                 removeVal = 0;
            }
            
            $('.addmore').on("click",function(){
                removeVal++;
                
                $("#mainAdd").hide();
                $('#addremove').show();
                var form = getForm(++index);
                $('.rptBoxmain').append(form);
            });
            
            $('.remove').on("click", function () {
                console.log(removeVal);
                $(".rptBox"+removeVal).remove();
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
            });
        };
        
        
        var getForm = function(index)
        {
            console.log(index);
            return $('<div class="rptBox' + index + ' second"><hr><div class="rwfil clearfix"><p><input type="text" class="IN1 ipsm3" name="Name" id="name' + index + '" placeholder="Name" ></p><p><input type="text" class="IN1 ipsm3" name="Office Address" id="office_address'+index+'" placeholder="Office Address" ></p><p><input type="text" class="IN1 ipsm3 noMgRt" name="Mobile No" id="mobile_no'+index+'" placeholder="Mobile No" ></p></div><div class="rwfil clearfix"><p><select original-title="Select State" class="IN1 ipsm3" id="state1'+index+'" name="state" required=""><option value="">State</option><option value="">State</option></select></p><p><select original-title="City" class="IN1 ipsm3" id="city'+index+'" name="city1" required=""><option value="">City</option><option value="">City</option></select></p><p><input type="text" class="IN1 ipsm3 noMgRt" name="Email Id" id="email'+index+'" placeholder="Email Id" ></p></div><div class="rwfil blking clearfix"><p><input type="text" class="IN1 ipsm3 clndr" name="Date of Birth" id="date_birth'+index+'" placeholder="Date of Birth" ></p><p><input type="text" class="IN1 ipsm3" name="PAN No" id="pan_no1'+index+'" placeholder="PAN No" ></p><p><input type="text" class="IN1 ipsm3 noMgRt" name="Designation" id="designation'+index+'" placeholder="Designation" ></p></div><div class="rwfil clearfix"><p><select original-title="Owner Ship %" class="IN1 ipsm4" id="owner_ship'+index+'" name="owner ship" required=""><option value="">Owner Ship %</option><option value="">Owner Ship %</option></select></p></div></div>');
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
            $(".km-scroll-container").css("-webkit-transform", ""); 
            $("#attachUpdateDiv").show();
            $("#attachUpdateMoreDiv").hide();
            numberDocUpload=0;
            attachDocArray=[];
        }
        
        var clickToUploadDiv = function(){            
           $(".km-scroll-container").css("-webkit-transform", ""); 
           app.mobileApp.navigate('#attachDocViewPhotoTab'); 
           //$("#screenfor").hide(); 
           //$("#Screenfive").show();
           attachDocArray=[];
           numberDocUpload=0;  
        }
        
        var takeAttachDocPhoto = function(){
             navigator.camera.getPicture(attachDocSuccess, onFail, { 
                                            quality: 50,
                                            targetWidth: 300,
                                            targetHeight: 300,
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
            imgDocShow.src = imageURI;
            //profileImagePath = imageURI;             
            attachDocArray.push(imageURI);
        }
        
        function onFail(message) {
            //console.log('Failed because: ' + message);
            
        }   
        
        function insertDocItems(tx) {       
            for(var i=0;i<attachDocArray.length;i++){            
                var query = 'INSERT INTO CUST_ATTACH_DOC(CUST_ID ,ATTACH_DOC) VALUES ("'
                        + customer_ID
                        + '","'                        
                        + attachDocArray[i] + '")';
                
                app.insertQuery(tx, query);
             }   

            /*"' DESC LIMIT 2 "*/            
        }
        

        var saveAttachDoc = function(){          

           //$("#screenfor").show(); 
           //$("#Screenfive").hide();
                        
           $(".km-scroll-container").css("-webkit-transform", "");   
           var db = app.getDb();
           db.transaction(insertDocItems, app.errorCB, showSaveDoc);               
        }
        
        function showSaveDoc(){
           var db = app.getDb();
           db.transaction(getSaveDocVal, app.errorCB, app.successCB);     
        }
        
        function getSaveDocVal(tx){         
            var query = "SELECT ATTACH_DOC FROM CUST_ATTACH_DOC WHERE CUST_ID='"+customer_ID+"' ORDER BY ID DESC LIMIT 2 ";
            app.selectQuery(tx, query, attachDocData);
        }
        
        function attachDocData(tx, results){               
           var count = results.rows.length;          
           app.mobileApp.navigate('#attachDocView');  
           $("#attachUpdateDiv").hide();
           $("#attachUpdateMoreDiv").show();            

            console.log('count Value from DB-'+count);
            if (count !== 0) {                 
                var attachDoc1 =results.rows.item(0).ATTACH_DOC;
                var attachDoc2 =results.rows.item(1).ATTACH_DOC;                
                
                var imgDocShow = document.getElementById('showSaveDoc1');
                imgDocShow.src = attachDoc1;
                
                var imgDocShow1 = document.getElementById('showSaveDoc2');
                imgDocShow1.src = attachDoc2;             
            }   
        }
        
        
        var cancelAttachDoc = function(){        
          while(numberDocUpload>=1){  
            var imgDocShow = document.getElementById('attachDoc'+numberDocUpload);
            imgDocShow.src = 'styles/images/pic.gif';      
            numberDocUpload--;
          }                   
           
           $("#screenfor").show(); 
           $("#Screenfive").hide();                    
        }
        
        var goToBankStm = function(){
            $(".km-scroll-container").css("-webkit-transform", "");  
            app.mobileApp.navigate('#bankStmView');
        }
        
        var attachSave = function(){
           app.showAlert("Data Save successfully","HDFC"); 
           app.mobileApp.navigate('index.html');   
        }
        
        var photoUplShow = function(){            
            for(var i=1;i<=5;i++){
                var imgDocShow = document.getElementById('attachDoc'+i);
                imgDocShow.src = 'styles/images/pic.gif';
            }  
        }
        
        return{
            int:int,
            show:show,
            goToBankStm:goToBankStm,
            photoUplShow:photoUplShow,
            clickToUploadDiv:clickToUploadDiv,
            attachSave:attachSave,
            takeAttachDocPhoto:takeAttachDocPhoto,
            attachshow:attachshow,
            saveAttachDoc:saveAttachDoc,
            cancelAttachDoc:cancelAttachDoc,
            saveFormDetail:saveFormDetail
            
        };
    }());
    return dashboardViewModel;
}());
