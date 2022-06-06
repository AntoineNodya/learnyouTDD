(function (exports) {
    exports.test = function () {
        return 'Hello world!';
    };
})(typeof exports === 'undefined' ? window : exports);
