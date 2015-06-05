var app = app || {};

app.homepage = (function(){
    
    var homepageViewModel = (function(){
        
        var show = function(){
            localStorage.setItem("loginStatus", 1);    
        };
        
        var contToFillBtn = function()
        {
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
