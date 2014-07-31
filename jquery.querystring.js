jQuery.fn.queryString = function(params, options) 
{
    var defaults = {
        start : ''
    };
    
    var settings = jQuery.extend({}, defaults, options);
    
    if(params !== undefined) {
        var queryString = new Array();
        for(var name in params) {
            queryString.push([name, params[name]].join('='));
        }
        return settings.start + queryString.join('&'); 
    }
};
