(function () {
    var _id = "a76cf833adab422a963845bae54fb4b7";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='margin:0; min-width:310px;height:80px;'></div>");
    var _t = document.createElement("script");
    _t.src = "//megatimer.ru/timer/timer.min.js";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {
                "currentType": "3", "params": {
                    "weekdays": [1, 1, 1, 1, 1, 1, 1],
                    "usertime": true, "time": "00:00", "tz": -180, "hours": "23", "minutes": "57"
                }
            }, "design": {
                "type": "circle", "params": {
                    "width": "4",
                    "radius": "28",
                    "line": "solid",
                    "line-color": "#facb55",
                    "background": "solid",
                    "background-color": "rgba(255,255,255,0.13)",
                    "direction": "direct",
                    "number-font-family": {
                        "family": "Open Sans",
                        "link": "<link href='//fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "19",
                    "number-font-color": "#ffffff",
                    "separator-margin": "4",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Open Sans",
                        "link": "<link href='//fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "12",
                    "text-font-color": "#ffffff"
                }
            }, "designId": 8, "theme": "black", "width": 310, "height": 80
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0]; _h.appendChild(_t);
}).call(this);