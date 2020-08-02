!(function (e, t, i) {
    let n = {
        HIGHSCORE: "highscore.xml?category=1&type=3",
        PLAYERS: "players.xml",
        PLANETS: "universe.xml",
        ALLIANCES: "alliances.xml",
        SERVER: "serverData.xml",
        LOCALE: "localization.xml",
        checkXML: function (e, t, i) {
            new a({
                url: (i || window.location.origin) + "/api/" + t,
                method: "head",
                response: "xml",
                onStop: function () {
                    e.call(null, this);
                },
                onError: function () {
                    console.warn("Couldn't check " + t + " head");
                },
            });
        },
        fetchXML: function (e, t, i, n) {
            new a({
                cache: "boolean" == typeof i && i,
                url: (n || window.location.origin) + "/api/" + t,
                method: "get",
                response: "xml",
                onReceived: function (t) {
                    e.call(null, t);
                },
                onError: function () {
                    console.warn("Couldn't fetch " + t + " xml data");
                },
            });
        },
        fetch: function (e, t, i, n) {
            this.fetchXML(t, e, i, n);
        },
        check: function (e, t, i) {
            this.checkXML(t, e, i);
        },
    };
    !(function () {
        let e = document.getElementById("stt_Cloud") || document.createElement("div"),
            t = 0,
            i = {
                position: "bottom",
                open: "hover",
                close: "outside",
                showTooltip: function () {
                    a(this);
                },
            },
            n = function (e) {
                let t = {};
                for (let e in i) t[e] = i[e];
                if ("object" == typeof e) for (let i in e) t[i] = e[i];
                return t;
            },
            a = function (e) {
                let t = document.getElementById(e.getAttribute("stt-id"));
                if ("visible" !== t.style.visibility || t.getAttribute("caller") !== e.id) {
                    let i = n(JSON.parse(t.getAttribute("stt-opt"))),
                        a = t.children[0];
                    s(e, t, a, i), "outside" !== i.close || t.classList.contains("stt-close") || t.classList.add("stt-close"), t.setAttribute("caller", e.id), (t.style.visibility = "visible");
                }
            },
            s = function (e, t, i, n) {
                let a = t.offsetWidth,
                    s = t.offsetHeight,
                    o = e.offsetWidth,
                    r = e.offsetHeight,
                    l = (function (e) {
                        let t = 0,
                            i = 0,
                            n = 0,
                            a = 0;
                        for (; e && "BODY" !== e.nodeName; ) (t += e.offsetLeft), (i += e.offsetTop), (n += e.scrollLeft), (a += e.scrollTop), (e = e.parentNode);
                        return { left: t, top: i, scrollLeft: n, scrollTop: a };
                    })(e),
                    d = n.position;
                if ("right" === d || "left" === d) {
                    (t.style.left = ("right" === d ? l.left + o + 10 : l.left - a - 10) + "px"), i.classList.add("arrow-stt-" + d);
                    let e = l.top - (s / 2 - r / 2);
                    e < 0 && ((i.style.marginTop = -(i.offsetHeight / 2 - e) + "px"), (e = 0)), (e -= l.scrollTop), (e += "px"), (t.style.top = e);
                } else (t.style.top = ("bottom" === d ? l.top + r + 10 : l.top - s - 10) + "px"), i.classList.add("arrow-stt-" + d), (t.style.left = l.left - (a / 2 - o / 2) + "px");
            },
            o = function (e) {
                if (void 0 !== e) document.getElementById(e).style.visibility = "hidden";
                else {
                    let e = document.getElementsByClassName("stt-close");
                    for (let t = 0, i = e.length; t < i; t++) e[t].style.visibility = "hidden";
                }
            };
    })();
    function a(e) {
        this.xhr = new XMLHttpRequest();
        let t = !1,
            i = ["GET", "POST", "HEAD"],
            n = "GET",
            a = "",
            s = ["json", "xml", "html", "text"],
            o = "text",
            r = {},
            l = !0,
            d = !0,
            c = !0,
            u = function () {},
            h = function () {},
            p = function () {},
            m = function () {},
            f = function (e) {},
            g = function (e) {
                u.call(this);
            },
            b = function (e) {},
            v = function (e) {
                h.call(this);
            },
            y = function (e) {},
            E = function (e) {
                if (200 === this.status) {
                    let e = "";
                    (e = "json" === o ? JSON.parse(this.responseText) : "xml" === o || (l && "html" === o) ? this.responseXML : this.responseText), p.call(this, e);
                } else h.call(this);
            },
            A = function (e) {
                m.call(this);
            };
        !0 !== t &&
            ((t = !0),
            function (e) {
                if ("string" == typeof e.method) {
                    let t = i.indexOf(e.method.toUpperCase());
                    -1 !== t && (n = i[t]);
                }
                if ("string" == typeof e.response) {
                    let t = s.indexOf(e.response.toLowerCase());
                    -1 !== t && (o = s[t]);
                }
                "string" == typeof e.url && (a = e.url),
                    "object" == typeof e.data && (r = e.data),
                    "boolean" == typeof e.cache && (d = e.cache),
                    "boolean" == typeof e.async && (c = e.async),
                    "function" == typeof e.onStart && (u = e.onStart),
                    "function" == typeof e.onError && (h = e.onError),
                    "function" == typeof e.onReceived && (p = e.onReceived),
                    "function" == typeof e.onStop && (m = e.onStop);
            }.call(this, e),
            function () {
                (this.xhr.onreadystatechange = f),
                    this.xhr.addEventListener("loadstart", g, !1),
                    this.xhr.addEventListener("progress", b, !1),
                    this.xhr.addEventListener("error", v, !1),
                    this.xhr.addEventListener("abort", y, !1),
                    this.xhr.addEventListener("load", E, !1),
                    this.xhr.addEventListener("loadend", A, !1);
            }.call(this),
            function () {
                let e = !1,
                    t = "";
                !(function i(n, a) {
                    for (let s in n) {
                        let o = n[s],
                            r = null == a ? s : a + "[" + s + "]";
                        "object" == typeof o ? i(o, r) : (e ? (t += "&") : (e = !0), (t += r + "=" + o));
                    }
                })(r),
                    (r = t);
            }.call(this),
            function () {
                if (
                    ("GET" === n && r.length > 0 && (a += "?" + r),
                    d || (a += (/\?/.test(a) ? "&" : "?") + "__" + new Date().getTime()),
                    this.xhr.open(n, a, c),
                    "POST" === n && this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    "html" === o)
                )
                    try {
                        this.xhr.responseType = "document";
                    } catch (e) {
                        l = !1;
                    }
            }.call(this),
            function () {
                "POST" === n ? this.xhr.send(r) : this.xhr.send();
            }.call(this));
    }
    var s = function (e, t) {
            (this.url = e), (this.communities = t);
        },
        o = {
            version: "4.1.4",
            debug: !1,
            board: "https://board.en.ogame.gameforge.com/index.php?thread/716794-universeview/",
            apps: {
                ogotcha: new s("https://ogotcha.universeview.be/", {
                    cz: "cs",
                    de: "de",
                    dk: "da",
                    en: "en",
                    es: "es",
                    fr: "fr",
                    gr: "el",
                    hr: "hr",
                    hu: "hu",
                    it: "it",
                    nl: "nl",
                    pl: "pl",
                    br: "pt-BR",
                    pt: "pt",
                    ro: "ro",
                    ru: "ru",
                    se: "sv",
                    sk: "sk",
                    tr: "tr",
                    tw: "zh",
                }),
                trashsim: new s("https://trashsim.universeview.be/", {
                    cz: "cs",
                    de: "de",
                    dk: "da",
                    en: "en",
                    es: "es",
                    fr: "fr",
                    gr: "el",
                    hr: "hr",
                    hu: "hu",
                    it: "it",
                    nl: "nl",
                    pl: "pl",
                    br: "pt-BR",
                    pt: "pt",
                    ro: "ro",
                    ru: "ru",
                    se: "sv",
                    tr: "tr",
                    tw: "zh",
                }),
                website: new s("https://universeview.be/", { dk: "da", en: "en", es: "es", hr: "hr" }),
            },
            type:
                navigator.userAgent.indexOf(" Edge/") >= 0
                    ? "EDGE"
                    : navigator.userAgent.indexOf(" OPR/") >= 0
                    ? "NEX"
                    : navigator.userAgent.indexOf(" Firefox/") >= 0
                    ? "XPI"
                    : navigator.userAgent.indexOf(" Chrome/") >= 0
                    ? "CRX"
                    : "undefined",
            helloVersion: "2.0.0",
            googleAnalyticsCode: "UA-64502186-2",
            googleAnalyticsEnabled: !0,
            notifications: { defaultOffset: 60 },
            ogameURL: "s{UID}.ogame.gameforge.com",
        };
    i.ft = {};
    var r,
        l,
        d,
        c = function (e, t, i, n, a, s, o, r, l, d, c) {
            (this.id = e), (this.type = t), (this.arrival = i), (this.arrivalOriginal = n), (this.returning = a), (this.relation = s), (this.flightData = o), (this.offset = r), (this.serverID = l), (this.tabID = d), (this.windowID = c);
        };
    (c.prototype.getNotificationTitle = function (e) {
        return e[this.serverID].dict.title.replace("{community}", e[this.serverID].community.toUpperCase()).replace("{universe}", e[this.serverID].universe);
    }),
        (c.prototype.getNotificationContent = function (e) {
            const t =
                !0 === e[this.serverID].useComputerTime
                    ? new Date(this.arrival).toLocaleTimeString() + " " + new Date(this.arrival).toLocaleDateString()
                    : new Date(this.arrivalOriginal).toLocaleTimeString(void 0, { timeZone: e[this.serverID].timezone }) + " " + new Date(this.arrivalOriginal).toLocaleDateString(void 0, { timeZone: e[this.serverID].timezone });
            return (this.returning ? e[this.serverID].dict.returning : e[this.serverID].dict.arriving[this.relation])
                .replace("{mission}", e[this.serverID].dict.missions[this.type])
                .replace("{coords}", this.returning ? this.flightData.originCoords + " " + this.flightData.originFleet : this.flightData.destCoords + " " + this.flightData.destFleet)
                .replace("{time}", t);
        }),
        (c.prototype.getNotificationIcon = function () {
            var e = "chrome/content/img/";
            switch (this.type) {
                case 1:
                    e += "dn-type-1";
                    break;
                case 2:
                    e += "dn-type-2";
                    break;
                case 3:
                    e += "dn-type-3";
                    break;
                case 4:
                    e += "dn-type-4";
                    break;
                case 5:
                    e += "dn-type-5";
                    break;
                case 6:
                    e += "dn-type-6";
                    break;
                case 7:
                    e += "dn-type-7";
                    break;
                case 8:
                    e += "dn-type-8";
                    break;
                case 9:
                    e += "dn-type-9";
                    break;
                case 15:
                    e += "dn-type-15";
                    break;
                default:
                    e += "logo-48";
            }
            return 2 != this.relation || (1 != this.type && 2 != this.type && 6 != this.type && 9 != this.type) || (e += "-h"), e + ".png";
        }),
        (c.prototype.getNotificationOpen = function (e) {
            return e[this.serverID].dict.open.replace("{community}", e[this.serverID].community.toUpperCase()).replace("{universe}", e[this.serverID].universe);
        }),
        (c.prototype.getNotificationUniverseURL = function (e) {
            return `https://${this.getUniverseDomain(e)}/game/index.php?page=overview`;
        }),
        (c.prototype.getUniverseDomain = function (e) {
            return `s${e[this.serverID].universe}-${e[this.serverID].community}.ogame.gameforge.com`;
        }),
        (i.ft.EventNotification = (function () {
            var t = {},
                i = {},
                n = function (n) {
                    if (void 0 !== typeof t[n]) {
                        var a = t[n];
                        e.tabs.get(a.tabID, function (t) {
                            void 0 === t
                                ? e.tabs.create({ url: a.getNotificationUniverseURL(i) })
                                : e.tabs.update(a.tabID, { active: !0, highlighted: !0 }, function (t) {
                                      void 0 === t ? e.tabs.create({ windowId: a.windowID, url: a.getNotificationUniverseURL(i) }) : e.windows.update(a.windowID, { focused: !0 });
                                  });
                        }),
                            e.notifications.clear(n);
                    }
                };
            e.alarms.clearAll(),
                e.alarms.onAlarm.addListener(function (n) {
                    var a = t[n.name],
                        s = { type: "basic", title: a.getNotificationTitle(i), message: a.getNotificationContent(i), iconUrl: a.getNotificationIcon(), priority: 2 };
                    "CRX" === o.type && (s.buttons = [{ title: a.getNotificationOpen(i) }]),
                        e.tabs.get(a.tabID, function (t) {
                            if (void 0 === t) {
                                var o = "https://" + a.getUniverseDomain(i) + "/game/*";
                                e.tabs.query({ url: o }, function (t) {
                                    void 0 !== t && t.length > 0 && e.notifications.create(n.name, s);
                                });
                            } else e.notifications.create(n.name, s);
                        });
                }),
                e.notifications.onButtonClicked.addListener(function (e, t) {
                    0 === t && n.call(this, e);
                }),
                e.notifications.onClicked.addListener(n);
            var a = function (i, n, a, s) {
                var o = (t[i.id] = new c(i.id, i.type, i.arrival, i.arrivalOriginal, i.returning, i.relation, i.flightData, i.offset, n, a, s));
                e.alarms.create(o.id, { when: o.arrival - 1e3 * i.offset });
            };
            return {
                updateEvents: function (n, s, o) {
                    for (var r in (void 0 === i[n.server.id] && (i[n.server.id] = n.server), i[n.server.id].useComputerTime !== n.server.useComputerTime && (i[n.server.id].useComputerTime = n.server.useComputerTime), t))
                        void 0 === n.events[r] ? (e.alarms.clear(r), delete t[r]) : (t[r].arrival != n.events[r].arrival && a(n.events[r], n.server.id, s, o), delete n.events[r]);
                    for (var r in n.events) a(n.events[r], n.server.id, s, o);
                },
            };
        })()),
        (i.ft.IdleTimer = (function () {
            const t = "https://" + o.ogameURL.replace("s{UID}", "*") + "/*";
            let i = {},
                n = {};
            const a = function () {
                    e.tabs.query({ url: t }, function (t) {
                        for (let i of t) e.tabs.sendMessage(i.id, { action: "idleTimer:UpdateTimers", data: r() });
                    }),
                        setTimeout(a, 500);
                },
                s = function (e) {
                    i[e.ID] = { type: e.type, coords: e.coords, timeStamp: e.timeStamp };
                },
                r = () => ({ objects: i, events: n });
            return {
                init: function () {
                    a();
                },
                updateObject: s,
                registerObjects: (e) => {
                    for (let t = 0, n = e.length; t < n; t++) void 0 === i[e[t].ID] && s(e[t]);
                },
                updateEvents: (e) => {
                    n = e;
                },
                getData: r,
            };
        })()),
        ("NEX" !== o.type && "CRX" !== o.type) ||
            ((i.AGO =
                ((r = ["kfaofnlkooiapdmkbppmpgmjmhkolaeb", "ldbahlcmhmlpomdepooifmhnalokdhgm", "afdknninkegjlagjcacgicphekiaamde"]),
                (l = {}),
                (d = function (e) {
                    return -1 !== r.indexOf(e.id);
                }),
                {
                    isEnabled: function (e) {
                        for (var t in l) if (l[t].enabled) return !0;
                        return !1;
                    },
                    monitor: function () {
                        e.management.onInstalled.addListener(function (e) {
                            d(e) && (l[e.id] = e);
                        }),
                            e.management.onUninstalled.addListener(function (e) {
                                d(e) && l[e.id] && delete l[e.id];
                            }),
                            e.management.onEnabled.addListener(function (e) {
                                d(e) && (l[e.id].enabled = !0);
                            }),
                            e.management.onDisabled.addListener(function (e) {
                                d(e) && (l[e.id].enabled = !1);
                            }),
                            e.management.getAll(function (e) {
                                for (var t = e.length; t--; ) {
                                    var i = e[t];
                                    d(i) && (l[i.id] = i);
                                }
                            });
                    },
                })),
            i.AGO.monitor());
    var u = null;
    "XPI" === o.type &&
        ((o.googleAnalyticsEnabled = !1),
        browser.storage.local.get("UV_gaOptin", function (e) {
            void 0 === e.UV_gaOptin
                ? browser.tabs.create({ url: "chrome/popup/index.html" }, function (e) {
                      u = e;
                  })
                : (o.googleAnalyticsEnabled = e.UV_gaOptin);
        }),
        (i.AGO = (function () {
            var e = {};
            return {
                isEnabled: function (t) {
                    for (var i in e) if (e[i].enabled) return !0;
                    return !1;
                },
                monitor: function () {},
            };
        })()),
        i.AGO.monitor());
    let h = {
        universe: new (class {
            constructor() {
                (this.data = {}), (this.buildCache = {}), (this.changeCache = {}), (this.updateCache = {}), (this.origin = {});
            }
            initialize(t) {
                let i = this;
                (this.buildCache[t] = { players: null, planets: null }),
                    (this.origin[t] = "https://" + o.ogameURL.replace("{UID}", t)),
                    void 0 === this.data[t]
                        ? (e.storage.local.get("UNIVERSE_XML_" + t, function (e) {
                              if (void 0 === e["UNIVERSE_XML_" + t]) i.buildXML(t);
                              else {
                                  let n = new DOMParser().parseFromString(e["UNIVERSE_XML_" + t], "application/xml");
                                  n.getElementsByTagName("parsererror").length > 0 ? i.buildXML(t) : ((i.data[t] = n), i.checkForUpdates(t));
                              }
                          }),
                          (this.changeCache[t] = !1))
                        : this.checkForUpdates(t),
                    this.checkForChanges(t);
            }
            createDocument(e, t, i) {
                let n = document.implementation.createDocument("", "universe", null);
                (n.documentElement.id = e), n.documentElement.setAttribute("playersTimestamp", t), n.documentElement.setAttribute("planetsTimestamp", i), (this.data[e] = n), (this.updateCache[e] = new Date().getTime());
            }
            buildXML(e) {
                let t = this;
                this.buildCache[e] = { players: null, planets: null };
                let i = function () {
                    null !== t.buildCache[e].players &&
                        null !== t.buildCache[e].planets &&
                        (console.time("buildXML"),
                        t.createDocument(e, t.buildCache[e].players.documentElement.getAttribute("timestamp"), t.buildCache[e].planets.documentElement.getAttribute("timestamp")),
                        t.updatePlayers(e),
                        t.updatePlanets(e),
                        console.timeEnd("buildXML"));
                };
                n.fetch(
                    n.PLAYERS,
                    function (n) {
                        (t.buildCache[e].players = n), i();
                    },
                    !1,
                    this.origin[e]
                ),
                    n.fetch(
                        n.PLANETS,
                        function (n) {
                            (t.buildCache[e].planets = n), i();
                        },
                        !1,
                        this.origin[e]
                    );
            }
            async updatePlayers(e) {
                if (null !== this.buildCache[e].players) {
                    let t = this.buildCache[e].players.getElementsByTagName("player"),
                        i = this.buildCache[e].players.documentElement.getAttribute("timestamp");
                    for (let n = 0, a = t.length; n < a; n++) {
                        let a = this.data[e].getElementById(t[n].id);
                        null === a && (((a = this.data[e].createElement("player")).id = t[n].id), this.data[e].documentElement.appendChild(a)),
                            a.setAttribute("name", t[n].getAttribute("name")),
                            a.setAttribute("status", t[n].getAttribute("status") || ""),
                            a.setAttribute("alliance", t[n].getAttribute("alliance") || ""),
                            a.setAttribute("updated", i);
                    }
                    this.buildCache[e].players = null;
                    let n = this.data[e].querySelectorAll('player:not([updated="' + i + '"])');
                    for (let e = 0, t = n.length; e < t; e++) n[e].parentNode.removeChild(n[e]);
                    this.data[e].documentElement.setAttribute("playersTimestamp", i), this.saveChangesForUID(e);
                }
            }
            updatePlayersXML(e) {
                let t = this;
                n.fetch(
                    n.PLAYERS,
                    function (i) {
                        i.documentElement.getAttribute("timestamp") > t.data[e].documentElement.getAttribute("playersTimestamp") && ((t.buildCache[e].players = i), t.updatePlayers(e));
                    },
                    !1,
                    this.origin[e]
                );
            }
            async updatePlanets(e) {
                if (null !== this.buildCache[e].planets) {
                    let t = this.buildCache[e].planets.getElementsByTagName("planet"),
                        i = this.buildCache[e].planets.documentElement.getAttribute("timestamp");
                    for (let n = 0, a = t.length; n < a; n++) {
                        let a = this.data[e].getElementById("p" + t[n].id);
                        if (null === a) {
                            (a = this.data[e].createElement("planet")).id = "p" + t[n].id;
                            let i = this.data[e].getElementById(t[n].getAttribute("player"));
                            i && i.appendChild(a);
                        }
                        a.setAttribute("name", t[n].getAttribute("name")), a.setAttribute("coords", t[n].getAttribute("coords")), a.setAttribute("updated", i);
                        let s = a.firstElementChild;
                        t[n].hasChildNodes()
                            ? (null === s && ((s = this.data[e].createElement("moon")), a.appendChild(s)),
                              (s.id = "m" + t[n].childNodes[0].id),
                              s.setAttribute("name", t[n].childNodes[0].getAttribute("name")),
                              s.setAttribute("size", t[n].childNodes[0].getAttribute("size")))
                            : null !== s && a.removeChild(a.firstElementChild);
                    }
                    this.buildCache[e].planets = null;
                    let n = this.data[e].querySelectorAll('planet:not([updated="' + i + '"])');
                    for (let e = 0, t = n.length; e < t; e++) n[e].parentNode.removeChild(n[e]);
                    this.data[e].documentElement.setAttribute("planetsTimestamp", i), this.saveChangesForUID(e);
                }
            }
            updatePlanetsXML(e) {
                let t = this;
                n.fetch(
                    n.PLANETS,
                    function (i) {
                        i.documentElement.getAttribute("timestamp") > t.data[e].documentElement.getAttribute("planetsTimestamp") && ((t.buildCache[e].planets = i), t.updatePlanets(e));
                    },
                    !1,
                    this.origin[e]
                );
            }
            checkForUpdates(e) {
                let t = new Date().getTime();
                if (void 0 === this.updateCache[e] || this.updateCache[e] + 18e5 <= t) {
                    let i = new Date(1e3 * this.data[e].documentElement.getAttribute("playersTimestamp")),
                        a = new Date(1e3 * this.data[e].documentElement.getAttribute("planetsTimestamp")),
                        s = this;
                    n.check(
                        n.PLAYERS,
                        function (t) {
                            200 === t.status && new Date(t.getResponseHeader("Last-Modified")).getTime() > i.getTime() && s.updatePlayersXML(e);
                        },
                        this.origin[e]
                    ),
                        n.check(
                            n.PLANETS,
                            function (t) {
                                200 === t.status && new Date(t.getResponseHeader("Last-Modified")).getTime() > a.getTime() && s.updatePlanetsXML(e);
                            },
                            this.origin[e]
                        ),
                        (this.updateCache[e] = t);
                }
            }
            checkForChanges(e) {
                !1 !== this.changeCache[e] && this.saveChangesForUID(e);
            }
            clearDatabase(t) {
                e.storage.local.remove("UNIVERSE_XML_" + t), delete this.data[t], delete this.buildCache[t];
            }
            updatePlayerResearch(e, t, i, n) {
                let a = this.data[e].querySelector('player[name="' + i + '"]');
                a && (a.setAttribute("technologies", JSON.stringify(n)), (this.changeCache[e] = new Date().getTime()));
            }
            updatePlanetsForSystem(e, t) {
                let i = this;
                function n(t, n) {
                    if (t.hasChildNodes()) !1 === n ? t.removeChild(t.firstElementChild) : (t.firstElementChild.setAttribute("name", n.name), t.firstElementChild.setAttribute("size", n.size));
                    else if (!1 !== n) {
                        let a = i.data[e].createElement("moon");
                        (a.id = "m" + n.id), a.setAttribute("name", n.name), a.setAttribute("size", n.size), t.appendChild(a);
                    }
                }
                void 0 === this.data[e] && this.createDocument(e, 0, 0);
                for (let i = 0, a = t.planets.length; i < a; i++) {
                    let a = this.data[e].querySelector('[coords="' + t.planets[i].coords + '"]');
                    if (
                        (a &&
                            ("99999" === t.planets[i].pid || (null === t.planets[i].pid && null === t.planets[i].id) || t.planets[i].pid !== a.parentNode.id
                                ? (a.parentElement.removeChild(a), (a = null))
                                : (n(a, t.planets[i].moon), a.setAttribute("name", t.planets[i].name), a.setAttribute("coords", t.planets[i].coords))),
                        null === a && null !== t.planets[i].id && null !== t.planets[i].pid && "99999" !== t.planets[i].pid)
                    ) {
                        let a = this.data[e].createElement("planet");
                        (a.id = "p" + t.planets[i].id), a.setAttribute("name", t.planets[i].name), a.setAttribute("coords", t.planets[i].coords), n(a, t.planets[i].moon);
                        let s = t.planets[i].pid,
                            o = this.data[e].getElementById(s);
                        null === o &&
                            (((o = this.data[e].createElement("player")).id = s),
                            o.setAttribute("name", t.players[s].name),
                            o.setAttribute("status", t.players[s].status || ""),
                            o.setAttribute("alliance", t.players[s].alliance || ""),
                            this.data[e].documentElement.appendChild(o)),
                            o.appendChild(a);
                    }
                }
                this.changeCache[e] = new Date().getTime();
            }
            findPlanetsByPlayers(e, t, i, n, a) {
                function s(e, t) {
                    let i = e.getAttribute("coords").split(":");
                    return { id: e.getAttribute("id").substr(1), moon: e.hasChildNodes(), coords: e.getAttribute("coords"), galaxy: i[0], system: i[1], position: i[2], pid: t };
                }
                for (let t in i)
                    if (((i[t].planets = []), void 0 !== this.data[e])) {
                        let n = this.data[e].getElementById(t);
                        if (n) {
                            for (let e = 0, a = n.childNodes.length; e < a; e++) i[t].planets.push(s(n.childNodes[e], t));
                            i[t].technologies = n.hasAttribute("technologies") ? JSON.parse(n.getAttribute("technologies")) : {};
                        }
                    }
                t({ players: i, galaxy: n, system: a });
            }
            findAndUpdatePlanetsBySystemInfo(e, t, i) {
                this.updatePlanetsForSystem(e, i), this.findPlanetsByPlayers(e, t, i.players, i.galaxy, i.system);
            }
            saveChanges() {
                for (let e in this.changeCache) !1 !== this.changeCache[e] && this.saveChangesForUID(e);
            }
            saveChangesForUID(t) {
                (this.changeCache[t] = !1), e.storage.local.set({ ["UNIVERSE_XML_" + t]: new XMLSerializer().serializeToString(this.data[t]) });
            }
        })(),
    };
    t.onMessage.addListener(function (e, t, n) {
        var a = /s(\d+)-(\w+)\.ogame\.gameforge\.com/.exec(t.url),
            s = a[1] + "-" + a[2];
        if (
            ("launch" === e.action && ((o.ago = i.AGO.isEnabled()), n({ config: o }), h.universe.initialize(s)),
            "events" === e.action && i.ft.EventNotification.updateEvents(e.data, t.tab.id, t.tab.windowId),
            "idleTimer:updateObject" === e.action && i.ft.IdleTimer.updateObject(e.data),
            "idleTimer:registerObjects" === e.action && i.ft.IdleTimer.registerObjects(e.data),
            "idleTimer:updateEvents" === e.action && i.ft.IdleTimer.updateEvents(e.data),
            "idleTimer:getData" === e.action && n(i.ft.IdleTimer.getData()),
            "googleAnalytics" === e.action && n(o.googleAnalyticsEnabled),
            "googleAnalyticsPopup" === e.action && ((o.googleAnalyticsEnabled = e.accepted), null !== u && browser.tabs.remove(u.id)),
            "API" === e.action)
        ) {
            let t = e.call.split(":"),
                i = e.parameters || [];
            return (
                i.unshift(s, n),
                setTimeout(
                    function (e, t, i) {
                        h[e][t].apply(h[e], i);
                    },
                    0,
                    t[0],
                    t[1],
                    i
                ),
                !0
            );
        }
    }),
        void 0 !== t.onSuspend &&
            t.onSuspend.addListener(function (e, t, i) {
                h.universe.saveChanges();
            }),
        i.ft.IdleTimer.init();
})(chrome, chrome.runtime, {});
