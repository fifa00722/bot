function hexToRgb(e) {
    var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(a, function(e, a, t, i) {
        return a + a + t + t + i + i
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}
function clamp(e, a, t) {
    return Math.min(Math.max(e, a), t)
}
function isInArray(e, a) {
    return a.indexOf(e) > -1
}


Object.deepExtend = function(e, a) {
    for (var t in a)
        a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {},
        arguments.callee(e[t], a[t])) : e[t] = a[t];
    return e
}
,
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(),
window.cancelRequestAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(),
window.pJSDom = [],
window.particlesJS = function(e, a) {
    "string" != typeof e && (a = e,
    e = "particles-js"),
    e || (e = "particles-js");
    var t = document.getElementById(e)
      , i = "particles-js-canvas-el"
      , s = t.getElementsByClassName(i);
    if (s.length)
        for (; s.length > 0; )
            t.removeChild(s[0]);
    var n = document.createElement("canvas");
    n.className = i,
    n.style.width = "100%",
    n.style.height = "100%";
    var r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e,a))
}
,
window.particlesJS.load = function(e, a, t) {
    var i = new XMLHttpRequest;
    i.open("GET", a),
    i.onreadystatechange = function(a) {
        if (4 == i.readyState)
            if (200 == i.status) {
                var s = JSON.parse(a.currentTarget.response);
                window.particlesJS(e, s),
                t && t()
            } else
                console.log("Error pJS - XMLHttpRequest status: " + i.status),
                console.log("Error pJS - File config not found")
    }
    ,
    i.send()
}
;
