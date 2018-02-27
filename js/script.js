(function(){
    "use strict";
    $(document).ready(function(){
        $(window).bind('beforeunload', function() {
            window.open("third.html", "_blank","width=1200,height-628");
        });
    });
})();
