/*
Example:
    $.load('/index.php'+ $.queryString({ year: 2014, make : 'Nissan', color : 'red'}, '?')

    Will return:
        /index.php?year=2014&make=Nissan&color=red
        
NOTE: This utility function doesn't encodes values.
*/
(function($) {
    $.queryString = function(params, start) {
        if (params !== undefined) {
            var queryString = new Array();
            for (var name in params) {
                queryString.push([name, params[name]].join('='));
            }
            return ((start === undefined) ? '' : start) + queryString.join('&');
        }
        return '';
    };
})(jQuery);
