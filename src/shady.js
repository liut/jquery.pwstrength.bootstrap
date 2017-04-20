
try {
    if (!jQuery && module && module.exports) {
        var jQuery = require("jquery"),
            jsdom = require("jsdom").jsdom;
        jQuery = jQuery(jsdom().defaultView);
    }
} catch (ignore) {}
