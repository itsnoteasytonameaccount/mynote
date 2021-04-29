(function() {
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        } else {
            var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    }
    var h = getClientHeight();
    h = parseInt(h) * 0.8;
    var obj = document.querySelector(".markdown-body");
    if (parseInt(obj.clientHeight) > h) {
        obj.style.height = h + "px";
        var divOb = document.createElement("div");
        divOb.className = "hideSection";
        divOb.innerHTML = "<div class='button'>阅读全文</div>";
        divOb.querySelector("div").onclick = function() {
            obj.removeChild(divOb);
            obj.style.height = "";
        }
        obj.appendChild(divOb);
    }
})();