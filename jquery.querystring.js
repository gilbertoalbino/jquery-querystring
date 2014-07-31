(function($){
    $.queryString = function(params, start) {
        if(params !== undefined) {
            var queryString = new Array();
            for(var name in params) {
                queryString.push([name, params[name]].join('='));
            }
            return ((start === undefined)? '' : start) + queryString.join('&');
        }
    };
})(jQuery);
