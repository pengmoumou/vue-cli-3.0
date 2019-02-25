//设置rem
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.offsetWidth;
            if (!clientWidth) {
                return;
            }
            if (clientWidth >= 750) {
                docEl.style.fontSize = "200px";
            } else {
                docEl.style.fontSize = 200 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) {
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc()
})(document, window)