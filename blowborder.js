(function( $ ){ 
    $.fn.blow = function( options ) {
       
        var settings = $.extend( {
            'Radius'    : '5',
            'color'       : '#ef0230'
        }, options);
        
        var rgb = hexToRgb(settings.color);
      
       
        return this.each(function() {
            $(this).css('box-shadow', '0px 0px 3px'+" " + settings.Radius+"px "+ 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0.9)');
            var obj = $(this);

            function borderblow() {
                var  opasit= obj.css('box-shadow');
                var arr= opasit.split(/\s*,\s*/);
                var reduse= parseFloat( arr[3].substring(0, arr[3].length - 17)) - 0.01
                

                if (reduse < 0.01) {
                    reduse= 0.99;
                }

                var koef=","+reduse+")";
                var op ="rgba("+ rgb.r + ',' + rgb.g + ',' + rgb.b + koef+'0px 0px 3px' + " " + settings.Radius+"px ";
            
                obj.css('box-shadow', op);
            }
             
            move = setInterval(borderblow, 50);
        });
    };
    $(".btn-play-icon").blow({color:"#026FB3", Radius: '5'})
    $('a[title="Расписание"]').blow({color:"#33ff00", Radius: '5'}); 
    $(".button-base.green.popup-open-demostand").blow({color:"#026FB3", Radius: '5'}) //////////  bordeshadow animate  button "Связаться с менеджером"
    
})( jQuery );

function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}





























