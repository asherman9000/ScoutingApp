var pane = /** @class */ (function () {
    function pane(name) {
        this.name = name;
    }
    pane.prototype.makePane = function (id) {
        id.innerHtml = "class='div red'";
    };
    return pane;
}());
c