var app = app || {};

app.homepage = (function(){
    
    var homepageViewModel = (function(){
        
        var contToFillBtn = function()
        {
            sessionStorage.setItem("SourceName",$('#sourceName').val());
            sessionStorage.setItem("constitutionType",$('#selectopt').text());
            app.mobileApp.navigate('views/Dashboard.html');
        };
        
        return{
            contToFillBtn:contToFillBtn
        };
    }());
    return homepageViewModel;
}());
