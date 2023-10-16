$(document).ready(function(){ 
    $.ajax({
        url: 'http://apilayer.net/api/live&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR',
        type: 'get',
        dataType: 'json',
        data: {
            'acces_key' : 'e8a4dee7ff5781fbb42079de27ff938c'
        },
        success: function (data) {  

         for(var i=0;i<data.length;i++){
             $('#api').append(html);


           
         }

    }
});
});
