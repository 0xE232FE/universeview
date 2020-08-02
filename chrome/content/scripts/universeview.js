!(function (e, t, a, n) {
    (e.initTimeStamp = Date.now()), (n.documentElement.dataset.universeview = "");
    let o = {
            HIGHSCORE: "highscore.xml?category=1&type=3",
            PLAYERS: "players.xml",
            PLANETS: "universe.xml",
            ALLIANCES: "alliances.xml",
            SERVER: "serverData.xml",
            LOCALE: "localization.xml",
            checkXML: function (e, t, i) {
var ll = new URL(document.location.href);
var tmp = ll.pathname.split('/').slice(-1)[0].split('-');
var server = tmp[0];
var lang = tmp[1];
                new l({
                    url: (i || a.location.origin) + "/api/" + server + "/" + lang + "/" + t,
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
var ll = new URL(document.location.href);
var tmp = ll.pathname.split('/').slice(-1)[0].split('-');
var server = tmp[0];
var lang = tmp[1];
                new l({
                    cache: "boolean" == typeof i && i,
                    url: (n || a.location.origin) + "/api/" + server + "/" + lang + "/" + t,
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
            fetch: function (e, t, a, i) {
                this.fetchXML(t, e, a, i);
            },
            check: function (e, t, a) {
                this.checkXML(t, e, a);
            },
        },
        s = (function () {
            let e = document.getElementById("stt_Cloud") || document.createElement("div"),
                t = 0,
                a = {
                    position: "bottom",
                    open: "hover",
                    close: "outside",
                    showTooltip: function () {
                        n(this);
                    },
                },
                i = function (e) {
                    let t = {};
                    for (let e in a) t[e] = a[e];
                    if ("object" == typeof e) for (let a in e) t[a] = e[a];
                    return t;
                },
                n = function (e) {
                    let t = document.getElementById(e.getAttribute("stt-id"));
                    if ("visible" !== t.style.visibility || t.getAttribute("caller") !== e.id) {
                        let a = i(JSON.parse(t.getAttribute("stt-opt"))),
                            n = t.children[0];
                        r(e, t, n, a), "outside" !== a.close || t.classList.contains("stt-close") || t.classList.add("stt-close"), t.setAttribute("caller", e.id), (t.style.visibility = "visible");
                    }
                },
                r = function (e, t, a, i) {
                    let n = t.offsetWidth,
                        r = t.offsetHeight,
                        o = e.offsetWidth,
                        s = e.offsetHeight,
                        l = (function (e) {
                            let t = 0,
                                a = 0,
                                i = 0,
                                n = 0;
                            for (; e && "BODY" !== e.nodeName; ) (t += e.offsetLeft), (a += e.offsetTop), (i += e.scrollLeft), (n += e.scrollTop), (e = e.parentNode);
                            return { left: t, top: a, scrollLeft: i, scrollTop: n };
                        })(e),
                        d = i.position;
                    if ("right" === d || "left" === d) {
                        (t.style.left = ("right" === d ? l.left + o + 10 : l.left - n - 10) + "px"), a.classList.add("arrow-stt-" + d);
                        let e = l.top - (r / 2 - s / 2);
                        e < 0 && ((a.style.marginTop = -(a.offsetHeight / 2 - e) + "px"), (e = 0)), (e -= l.scrollTop), (e += "px"), (t.style.top = e);
                    } else (t.style.top = ("bottom" === d ? l.top + s + 10 : l.top - r - 10) + "px"), a.classList.add("arrow-stt-" + d), (t.style.left = l.left - (n / 2 - o / 2) + "px");
                },
                o = function (e) {
                    if (void 0 !== e) document.getElementById(e).style.visibility = "hidden";
                    else {
                        let e = document.getElementsByClassName("stt-close");
                        for (let t = 0, a = e.length; t < a; t++) e[t].style.visibility = "hidden";
                    }
                };
            return {
                init: function () {
                    document.addEventListener("click", function (e) {
                        for (let t = e.target; t; t = t.parentNode) if ((t.className && t.classList.contains("stt_Tooltip")) || (t.hasAttribute && t.hasAttribute("stt-id"))) return;
                        o();
                    }),
                        "stt_Cloud" !== e.id && ((e.id = "stt_Cloud"), document.body.appendChild(e));
                },
                create: function (a, n, r) {
                    let o = document.getElementById(a),
                        s = document.getElementById(n),
                        l = document.createElement("div"),
                        d = document.createElement("div"),
                        u = "stt-" + t;
                    s.parentNode.classList.contains("stt_Tooltip")
                        ? (u = s.parentNode.id)
                        : (l.appendChild(d),
                          l.appendChild(s),
                          (l.style.position = "absolute"),
                          (l.style.visibility = "hidden"),
                          (l.style.zIndex = "99999"),
                          (l.className = "stt_Tooltip"),
                          (l.id = u),
                          (s.style.display = "block"),
                          (d.className = "arrow"),
                          t++,
                          e.appendChild(l)),
                        (r = void 0 === r ? {} : r),
                        l.setAttribute("stt-opt", JSON.stringify(r)),
                        o.setAttribute("stt-id", u),
                        "click" === (r = i(r)).open ? o.addEventListener("click", r.showTooltip) : o.addEventListener("mouseover", r.showTooltip);
                },
                show: n,
            };
        })();
    function l(e) {
        this.xhr = new XMLHttpRequest();
        let t = !1,
            a = ["GET", "POST", "HEAD"],
            i = "GET",
            n = "",
            r = ["json", "xml", "html", "text"],
            o = "text",
            s = {},
            l = !0,
            d = !0,
            u = !0,
            c = function () {},
            p = function () {},
            m = function () {},
            g = function () {},
            v = function (e) {},
            f = function (e) {
                c.call(this);
            },
            h = function (e) {},
            y = function (e) {
                p.call(this);
            },
            _ = function (e) {},
            b = function (e) {
                if (200 === this.status) {
                    let e = "";
                    (e = "json" === o ? JSON.parse(this.responseText) : "xml" === o || (l && "html" === o) ? this.responseXML : this.responseText), m.call(this, e);
                } else p.call(this);
            },
            k = function (e) {
                g.call(this);
            };
        !0 !== t &&
            ((t = !0),
            function (e) {
                if ("string" == typeof e.method) {
                    let t = a.indexOf(e.method.toUpperCase());
                    -1 !== t && (i = a[t]);
                }
                if ("string" == typeof e.response) {
                    let t = r.indexOf(e.response.toLowerCase());
                    -1 !== t && (o = r[t]);
                }
                "string" == typeof e.url && (n = e.url),
                    "object" == typeof e.data && (s = e.data),
                    "boolean" == typeof e.cache && (d = e.cache),
                    "boolean" == typeof e.async && (u = e.async),
                    "function" == typeof e.onStart && (c = e.onStart),
                    "function" == typeof e.onError && (p = e.onError),
                    "function" == typeof e.onReceived && (m = e.onReceived),
                    "function" == typeof e.onStop && (g = e.onStop);
            }.call(this, e),
            function () {
                (this.xhr.onreadystatechange = v),
                    this.xhr.addEventListener("loadstart", f, !1),
                    this.xhr.addEventListener("progress", h, !1),
                    this.xhr.addEventListener("error", y, !1),
                    this.xhr.addEventListener("abort", _, !1),
                    this.xhr.addEventListener("load", b, !1),
                    this.xhr.addEventListener("loadend", k, !1);
            }.call(this),
            function () {
                let e = !1,
                    t = "";
                !(function a(i, n) {
                    for (let r in i) {
                        let o = i[r],
                            s = null == n ? r : n + "[" + r + "]";
                        "object" == typeof o ? a(o, s) : (e ? (t += "&") : (e = !0), (t += s + "=" + o));
                    }
                })(s),
                    (s = t);
            }.call(this),
            function () {
                if (
                    ("GET" === i && s.length > 0 && (n += "?" + s),
                    d || (n += (/\?/.test(n) ? "&" : "?") + "__" + new Date().getTime()),
                    this.xhr.open(i, n, u),
                    "POST" === i && this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    "html" === o)
                )
                    try {
                        this.xhr.responseType = "document";
                    } catch (e) {
                        l = !1;
                    }
            }.call(this),
            function () {
                "POST" === i ? this.xhr.send(s) : this.xhr.send();
            }.call(this));
    }
    e.Application = (function () {
        let t,
            i = 0,
            r = 1,
            o = 2,
            l = 3,
            d = {
                universe: null,
                universeCode: null,
                universeNumber: null,
                language: null,
                languageCode: null,
                version: null,
                speed: null,
                speedFleet: null,
                playerId: null,
                playerName: null,
                versionCheck: null,
                community: null,
                allianceId: null,
                allianceName: null,
                allianceTag: null,
                planetId: null,
                planetName: null,
                planetCoords: null,
                planetType: null,
                timeStamp: null,
            },
            u = { highScore: "", tooltips: 0, loaders: 0, AGO: !1, OGAMELEGACY: !1 },
            c = null;
        const p = () => {
                (u.AGO = e.config.ago),
                    e.PageCom.init(),
                    e.Utils.timelineHit("UniverseView: Init"),
                    e.Utils.log("UniverseView Debug: Application Init start"),
                    e.Utils.log("UniverseView Debug: AGO - " + u.AGO),
                    v(),
                    e.Store.init(),
                    e.Template.init(),
                    e.Locale.init(),
                    y(),
                    _(),
                    (i = r),
                    e.Utils.timeEnd("UniverseView Debug: Application Init finished"),
                    m();
            },
            m = () => {
                e.Utils.timelineHit("UniverseView: Head"), e.Utils.log("UniverseView Debug: Application Head start");
                document.body
                    ? (n.body.classList.add("universeview"),
                      k(),
                      (c = 1e3 * e.Application.ogame.timeStamp - e.initTimeStamp),
                      b(),
                      "yes" === e.Store.data.features.idleTimer && e.ft.IdleTimer.init(d.planetId, d.planetType, d.planetCoords, d.timeStamp),
                      u.AGO || e.Style.init(),
                      s.init(),
                      "yes" === e.Store.data.features.research && e.ft.Research.init(),
                      e.Notifications.init(),
                      e.Check.ogameSettings(),
                      e.Check.ogameLocalization(),
                      (i = o),
                      e.Utils.timeEnd("UniverseView Debug: Application Head finished"),
                      g())
                    : setTimeout(m, 1);
            },
            g = () => {
                e.Utils.timelineHit("UniverseView: Body"), e.Utils.log("UniverseView Debug: Application Body start");
                "interactive" === document.readyState || "complete" === document.readyState
                    ? ((() => {
                          const t = e.GoogleAnalytics.getClientID();
                          "XPI" === e.config.type
                              ? chrome.runtime.sendMessage({ action: "googleAnalytics" }, (a) => {
                                    !0 === a && (e.PageCom.GoogleAnalytics.init(e.config.googleAnalyticsCode, t, "gameforge.com"), e.PageCom.GoogleAnalytics.sendHeartbeat());
                                })
                              : (e.PageCom.GoogleAnalytics.init(e.config.googleAnalyticsCode, t, "gameforge.com"), e.PageCom.GoogleAnalytics.sendHeartbeat()),
                              "yes" !== e.Store.data.features.fleetPage || u.AGO || ((e.Utils.checkPage("fleet2") || e.Utils.checkPage("fleetdispatch")) && e.ft.FleetPageTarget.init()),
                              e.Check.hello(),
                              e.Check.version(),
                              e.Check.statistics(),
                              e.Utils.checkPage("research") && e.Player.saveResearch(),
                              a.addEventListener("blur", () => {
                                  chrome.runtime.sendMessage({ action: "API", call: "universe:saveChanges" });
                              }),
                              (i = l);
                      })(),
                      e.Utils.timeEnd("UniverseView Debug: Application Body finished"),
                      e.Utils.log("UniverseView End"))
                    : setTimeout(g, 1);
            },
            v = () => {
                const e = /browser\/html\/s(\d+)-(\w+)/.exec(a.location.href);
                (d.universeNumber = e[1]), (d.community = e[2]);
            },
            f = (t, a) => {
                let i = /(\d+)\/\d+/.exec(n.querySelector("#countColonies span").textContent);
                i = i ? +i[1] : t.children.length;
                let r = t.getElementsByClassName("planet-koords").length;
                i === r
                    ? ((t) => {
                          try {
                              e.ft.PlanetList.hit(t), e.ft.IdleTimer.hitFromPlanetList(t);
                          } catch (e) {
                              console.log("Planet list exception"), console.log(e);
                          }
                      })(t)
                    : (console.log("PlanetList not fully loaded: " + r + "/" + i), (a = void 0 === a ? 1 : 2 * a), setTimeout(f, a, t, a));
            },
            h = (t) => {
                "yes" === e.Store.data.features.spreading && e.ft.Spreading.init(t), "yes" === e.Store.data.features.quickSearch && e.ft.QuickSearch.init(t), "yes" === e.Store.data.features.favourites && e.ft.Favourite.init(t);
            },
            y = () => {
                (t = new e.Class.Observer(document)).listenToId("info", h),
                    t.listenToId("top", h),
                    t.listenToId("menuTableTools", e.MenuButton.build),
                    t.listenToId("planetList", f),
                    "yes" === e.Store.data.features.quickSearch && u.OGAMELEGACY && t.listenToId("officers", e.ft.QuickSearch.initOfficers),
                    e.Utils.checkPage("galaxy") &&
                        (t.listenToId("mobileDiv", e.Galaxy.hit),
                        t.listenToId("galaxycontent", e.Galaxy.hit),
                        t.listenToId("phalanxWrap", e.ft.Simulate.hitFromPhalanx),
                        t.listenToId("content", (t) => {
                            let a = n.getElementById("phalanxWrap");
                            a && e.ft.Simulate.hitFromPhalanx(a);
                        })),
                    "yes" === e.Store.data.features.highScore &&
                        e.Utils.checkPage("highscore") &&
                        (t.listenToId("ranks", e.ft.HighScore.hit),
                        t.listenToId("content", (t) => {
                            let a = t.querySelector("#ranks");
                            a && e.ft.HighScore.hit(a);
                        }));
                let a = (t) => {
                    let a = t.querySelectorAll("div.msg_actions .icon_apikey");
                    for (let t = 0, i = a.length; t < i; t++) e.ft.Simulate.srRegex.test(a[t].title) && e.ft.Simulate.hitFromMessages(a[t]), e.ft.Convert.crRegex.test(a[t].title) && e.ft.Convert.hitFromMessages(a[t]);
                    e.PageCom.Tipped.create(".uv-simulate-trashsim", e.Locale.dict.trashsimsimulate, { hook: "topmiddle", radius: { size: 3 }, skin: "cloud" }),
                        e.PageCom.Tipped.create(".uv-convert-ogotcha", e.Locale.dict.ogotchaconvert, { hook: "topmiddle", radius: { size: 3 }, skin: "cloud" });
                };
                if (e.Utils.checkPage("messages")) {
                    let i = (t) => {
                        a(t), "yes" === e.Store.data.features.messagesRaid && e.ft.Raid.hitEspionagePreview(t);
                    };
                    t.listenToClass("tab_inner", i),
                        t.listenToId("fleetsgenericpage", i),
                        t.listenToId("defaultmessagespage", i),
                        t.listenToClass("detail_msg", (t) => {
                            "yes" === e.Store.data.features.research && e.ft.Research.hit(t), a(t);
                        });
                }
            },
            _ = () => {
                chrome.runtime.onMessage.addListener((t, a, i) => {
                    "idleTimer:UpdateTimers" === t.action && "yes" === e.Store.data.features.idleTimer && e.ft.IdleTimer.updateTimers(t.data);
                });
            },
            b = () => {
                t.listenToId("eventListWrap", (t) => {
                    e.ft.Simulate.hitFromEventList(t), e.Utils.checkPage("movement") || "yes" !== e.Store.data.features.eventNotification || e.ft.EventNotification.hitFromEventList(t), e.ft.IdleTimer.hitFromEventList(t);
                });
            },
            k = () => {
                (d.playerId = n.querySelector("meta[name=ogame-player-id]").getAttribute("content")),
                    (d.playerName = n.querySelector("meta[name=ogame-player-name]").getAttribute("content")),
                    (d.universe = n.querySelector("meta[name=ogame-universe]").getAttribute("content")),
                    (d.universeCode = d.universe.split(".")[0]),
                    (d.language = n.querySelector("meta[name=ogame-language]").getAttribute("content")),
                    (d.languageCode = n.documentElement.lang || n.querySelector("meta[http-equiv=Language]").getAttribute("content")),
                    (d.version = n.querySelector("meta[name=ogame-version]").getAttribute("content")),
                    (d.speed = n.querySelector("meta[name=ogame-universe-speed]").getAttribute("content")),
                    (d.speedFleet = n.querySelector("meta[name=ogame-universe-speed-fleet]").getAttribute("content")),
                    (d.versionCheck = !!n.querySelector("meta[name=ogame-version-check-url]") && n.querySelector("meta[name=ogame-version-check-url]").getAttribute("content")),
                    (d.timeStamp = n.querySelector("meta[name=ogame-timestamp]").getAttribute("content")),
                    (d.allianceId = n.querySelector("meta[name=ogame-alliance-id]") ? n.querySelector("meta[name=ogame-alliance-id]").getAttribute("content") : null),
                    (d.allianceName = n.querySelector("meta[name=ogame-alliance-name]") ? n.querySelector("meta[name=ogame-alliance-name]").getAttribute("content") : null),
                    (d.allianceTag = n.querySelector("meta[name=ogame-alliance-tag]") ? n.querySelector("meta[name=ogame-alliance-tag]").getAttribute("content") : null),
                    (d.planetId = n.querySelector("meta[name=ogame-planet-id]").getAttribute("content")),
                    (d.planetName = n.querySelector("meta[name=ogame-planet-name]").getAttribute("content")),
                    (d.planetCoords = n.querySelector("meta[name=ogame-planet-coordinates]").getAttribute("content")),
                    (d.planetType = n.querySelector("meta[name=ogame-planet-type]").getAttribute("content")),
                    (u.OGAMELEGACY = /^\d/.exec(d.version)[0] < 7);
            },
            w = (e) => chrome.extension.getURL("chrome/content/" + e);
        return {
            launch: () => {
                e.Utils.timelineHit("UniverseView: Launch"),
                    e.Utils.log("UniverseView Start"),
                    e.Utils.timeStart("UniverseView Debug: Application Init finished"),
                    e.Utils.timeStart("UniverseView Debug: Application Head finished"),
                    e.Utils.timeStart("UniverseView Debug: Application Body finished"),
                    e.Utils.log("UniverseView Debug: Application Launched"),
                    p();
            },
            preload: (e) => {
                let t = new Array(e.length);
                for (let a = e.length; a--; ) (t[a] = new Image()), (t[a].src = w("img/" + e[a]));
            },
            data: u,
            ogame: d,
            database: { planets: null, planetsName: null, players: null, playersName: null },
            getPath: w,
            getOGameVersion: () => {
                let t = e.Application.ogame.version[0];
                return !!e.Utils.isInt(t) && parseInt(t);
            },
            getTimeStampDiff: () => {
                if (null === c) throw new Error("UniverseView Exception: Only use this function after the OGame config has been set.");
                return c;
            },
        };
    })();
    var d = {
        statistics: function () {
            var t = new Date().toDateString();
            e.Store.data.stats != t &&
                (e.PageCom.GoogleAnalytics.sendPageView({
                    dp: "/universeview_daily",
                    cd1: e.config.type,
                    cd2: e.Application.ogame.universe,
                    cd3: e.Store.data.planetOption,
                    cd4: e.Application.ogame.playerId,
                    cd5: e.Application.ogame.playerName,
                    cd6: new Date().toString(),
                    cd7: e.Application.data.AGO,
                }),
                e.Store.set("stats", t));
        },
        ogameSettings: function () {
            var t = new Date(),
                a = new Date(e.Store.data.updateOgame).getTime(),
                i = (t.getTime() - a) / 6048e5;
            (0 == a || i > 7) &&
                o.fetch(o.SERVER, function (a) {
                    (e.Store.data.ogameSettings.number = e.DOM.getOne("number", a).textContent),
                        (e.Store.data.ogameSettings.language = e.DOM.getOne("language", a).textContent),
                        (e.Store.data.ogameSettings.timezone = e.DOM.getOne("timezone", a).textContent),
                        (e.Store.data.ogameSettings.domain = e.DOM.getOne("domain", a).textContent),
                        (e.Store.data.ogameSettings.version = e.DOM.getOne("version", a).textContent),
                        (e.Store.data.ogameSettings.speed = parseInt(e.DOM.getOne("speed", a).textContent)),
                        (e.Store.data.ogameSettings.speedFleet = parseInt(e.DOM.getOne("speedFleet", a).textContent)),
                        (e.Store.data.ogameSettings.galaxies = parseInt(e.DOM.getOne("galaxies", a).textContent)),
                        (e.Store.data.ogameSettings.systems = parseInt(e.DOM.getOne("systems", a).textContent)),
                        (e.Store.data.ogameSettings.acs = parseInt(e.DOM.getOne("acs", a).textContent)),
                        (e.Store.data.ogameSettings.rapidFire = parseInt(e.DOM.getOne("rapidFire", a).textContent)),
                        (e.Store.data.ogameSettings.defToTF = parseInt(e.DOM.getOne("defToTF", a).textContent)),
                        (e.Store.data.ogameSettings.debrisFactor = parseFloat(e.DOM.getOne("debrisFactor", a).textContent)),
                        (e.Store.data.ogameSettings.repairFactor = parseFloat(e.DOM.getOne("repairFactor", a).textContent)),
                        (e.Store.data.ogameSettings.newbieProtectionLimit = parseInt(e.DOM.getOne("newbieProtectionLimit", a).textContent)),
                        (e.Store.data.ogameSettings.newbieProtectionHigh = parseInt(e.DOM.getOne("newbieProtectionHigh", a).textContent)),
                        (e.Store.data.ogameSettings.bonusFields = parseInt(e.DOM.getOne("bonusFields", a).textContent)),
                        (e.Store.data.ogameSettings.donutGalaxy = parseInt(e.DOM.getOne("donutGalaxy", a).textContent)),
                        (e.Store.data.ogameSettings.donutSystem = parseInt(e.DOM.getOne("donutSystem", a).textContent)),
                        e.Store.set("ogameSettings", e.Store.data.ogameSettings, !0),
                        e.Store.set("updateOgame", t.toUTCString());
                });
        },
        ogameLocalization: function () {
            var t = new Date(),
                a = new Date(e.Store.data.updateOgame).getTime(),
                i = (t.getTime() - a) / 6048e5;
            (0 == a || i > 7) &&
                o.fetch(o.LOCALE, function (a) {
                    var i = {},
                        n = e.DOM.get("techs", a),
                        r = n.length > 0 && e.DOM.get("name", n[0]);
                    if (!1 !== r) {
                        for (var o = 0, s = r.length; o < s; o++) {
                            var l = r[o].getAttribute("id"),
                                d = r[o].textContent;
                            i[l] = d;
                        }
                        e.Store.set("techNames", i, !0), e.Store.set("updateOgame", t.toUTCString());
                    }
                    var u = {},
                        c = e.DOM.get("missions", a),
                        p = c.length > 0 && e.DOM.get("name", c[0]);
                    if (!1 !== p) {
                        for (o = 0, s = p.length; o < s; o++) {
                            var m = p[o].getAttribute("id"),
                                g = p[o].textContent;
                            u[m] = g;
                        }
                        e.Store.set("missionNames", u, !0), e.Store.set("updateOgame", t.toUTCString());
                    }
                });
        },
        planetDatabase: function () {
            if ("uvs" == e.Store.data.planetOption || "idb" == e.Store.data.planetOption) {
                var t = function (e) {},
                    a = function () {
                        console.warn("Fail dbTimeCheck");
                    };
                o.check(o.PLAYERS, function (i) {
                    if (200 === i.status) {
                        var n = i.getResponseHeader("Last-Modified"),
                            r = e.Store.data.updatePlanets;
                        (r == n && "" != r) ||
                            ("uvs" == e.Store.data.planetOption
                                ? new l({
                                      url: e.Store.data.serverUrl + "universeview.php",
                                      method: "post",
                                      data: { dbTimeCheck: !0, uni: e.Application.ogame.universe, secret: e.Store.data.serverCode, id: e.Application.ogame.playerId, dbDateCheck: n },
                                      response: "text",
                                      onReceived: t,
                                      onError: a,
                                  })
                                : e.Template.get(
                                      "notificationDBPlanetUpdate",
                                      function (t) {
                                          var a = e.Notifications.add(t.outerHTML, function () {
                                              e.Store.set("updatePlanets", n);
                                          });
                                          e.DOM.get("#uv_update_notification").addEventListener("click", function (t) {
                                              e.Notifications.remove(a), e.PageCom.GoogleAnalytics.sendEvent("notifications", "click", "db_planet_update");
                                          });
                                      },
                                      { text: e.Locale.dict.updateidb, update: e.Locale.dict.menu_updategal }
                                  ));
                    }
                });
            }
        },
        version: function () {
            e.Store.data.version != e.config.version &&
                e.Template.get(
                    "notificationUniverseViewVersion",
                    function (t) {
                        var a = e.Notifications.add(t.outerHTML, function () {
                            e.Store.set("version", e.config.version);
                        });
                        e.DOM.get("#uv_version_notification").addEventListener("click", function (t) {
                            e.Notifications.remove(a);
                        });
                    },
                    { updated: e.Locale.dict.uvupdated, versiontext: e.Locale.dict.version, version: e.config.version, updateinfo: e.Locale.dict.updateinfo, url: e.config.board }
                );
        },
        hello: function () {
            e.Store.data.hello != e.config.helloVersion && e.Store.set("hello", e.config.helloVersion);
        },
    };
    (e.Check = d),
        (e.Class = {
            add: function (e, t) {
                this[e] = t;
            },
        }),
        (e.ft = {});
    var u = {
        extend: function (e, t) {
            this[e] = t;
        },
    };
    (e.fn = u),
        (e.Galaxy = (function () {
            let t = !1,
                a = function () {
                    o.fetch(o.HIGHSCORE, function (t) {
                        e.Application.data.highScore = t;
                    });
                },
                i = function () {
                    let t = e.fn.systemGetInfo();
                    e.PageCom.Galaxy.location(t.galaxy, t.system),
                        "yes" === e.Store.data.features.galaxyRefresh && e.ft.RefreshClock.refresh(),
                        "yes" === e.Store.data.features.favourites && e.ft.Favourite.handleGalaxy(t.galaxy, t.system),
                        e.Application.data.AGO || (e.Style.improveGalaxy(), "yes" === e.Store.data.features.galaxyDebris && e.ft.GalaxyDebris.init(), "yes" === e.Store.data.features.galaxyRank && e.ft.GalaxyRank.init()),
                        t.planets.length > 0 && "yes" === e.Store.data.features.moonDestruction && e.ft.MoonDestruction.handleGalaxy(),
                        chrome.runtime.sendMessage({ action: "API", call: "universe:findAndUpdatePlanetsBySystemInfo", parameters: [t] }, function (e) {
                            n(e.players, e.galaxy, e.system);
                        });
                },
                n = function (t, a, i) {
                    for (let r in t) {
                        let o = "uv-player-" + r;
                        e.DOM.clear(".uv-t-player-" + r + " > .ListLinks .uv-player-planets"), e.DOM.clear(".uv-t-player-" + r + " > .ListLinks .uv-player-research"), e.DOM.clear(".uv-t-player-" + r + " > .ListLinks .uv-player-highscore");
                        var n = t[r].planets.sort(e.Helper.CoordinateSorter.run);
                        "yes" === e.Store.data.features.spreading && e.ft.Spreading.handleGalaxy("uv-t-player-" + r, o),
                            "yes" === e.Store.data.features.showPlanets && e.ft.PlayerPlanets.handle("." + o + " .uv-player-planets", n, a, i),
                            "yes" === e.Store.data.features.research && e.ft.Research.handle("." + o + " .uv-player-research", t[r].technologies, n.length),
                            "yes" === e.Store.data.features.militairy && e.ft.Militairy.handle("." + o + " .uv-player-highscore", r);
                    }
                };
            return {
                hit: function (n) {
                    t
                        ? i()
                        : ("yes" === e.Store.data.features.militairy && a(),
                          "yes" === e.Store.data.features.spreading && e.ft.Spreading.initGalaxy(),
                          "yes" === e.Store.data.features.galaxyRefresh && e.ft.RefreshClock.init(),
                          i(),
                          "yes" === e.Store.data.features.moonDestruction && e.ft.MoonDestruction.init(),
                          (t = !0));
                },
            };
        })()),
        (e.GoogleAnalytics = (function () {
            !(function (e) {
                if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
                else if ("function" == typeof define && define.amd) define([], e);
                else {
                    (void 0 !== a ? a : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).uuidv4 = e();
                }
            })(function () {
                return (function e(t, a, i) {
                    function n(o, s) {
                        if (!a[o]) {
                            if (!t[o]) {
                                var l = "function" == typeof require && require;
                                if (!s && l) return l(o, !0);
                                if (r) return r(o, !0);
                                var d = new Error("Cannot find module '" + o + "'");
                                throw ((d.code = "MODULE_NOT_FOUND"), d);
                            }
                            var u = (a[o] = { exports: {} });
                            t[o][0].call(
                                u.exports,
                                function (e) {
                                    var a = t[o][1][e];
                                    return n(a || e);
                                },
                                u,
                                u.exports,
                                e,
                                t,
                                a,
                                i
                            );
                        }
                        return a[o].exports;
                    }
                    for (var r = "function" == typeof require && require, o = 0; o < i.length; o++) n(i[o]);
                    return n;
                })(
                    {
                        1: [
                            function (e, t, a) {
                                for (var i = [], n = 0; n < 256; ++n) i[n] = (n + 256).toString(16).substr(1);
                                t.exports = function (e, t) {
                                    var a = t || 0,
                                        n = i;
                                    return (
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        "-" +
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        "-" +
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        "-" +
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        "-" +
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        n[e[a++]] +
                                        n[e[a++]]
                                    );
                                };
                            },
                            {},
                        ],
                        2: [
                            function (e, t, i) {
                                (function (e) {
                                    var a,
                                        i = e.crypto || e.msCrypto;
                                    if (i && i.getRandomValues) {
                                        var n = new Uint8Array(16);
                                        a = function () {
                                            return i.getRandomValues(n), n;
                                        };
                                    }
                                    if (!a) {
                                        var r = new Array(16);
                                        a = function () {
                                            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), (r[t] = (e >>> ((3 & t) << 3)) & 255);
                                            return r;
                                        };
                                    }
                                    t.exports = a;
                                }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : void 0 !== a ? a : {}));
                            },
                            {},
                        ],
                        3: [
                            function (e, t, a) {
                                var i = e("./lib/rng"),
                                    n = e("./lib/bytesToUuid");
                                t.exports = function (e, t, a) {
                                    var r = (t && a) || 0;
                                    "string" == typeof e && ((t = "binary" == e ? new Array(16) : null), (e = null));
                                    var o = (e = e || {}).random || (e.rng || i)();
                                    if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) for (var s = 0; s < 16; ++s) t[r + s] = o[s];
                                    return t || n(o);
                                };
                            },
                            { "./lib/bytesToUuid": 1, "./lib/rng": 2 },
                        ],
                    },
                    {},
                    [3]
                )(3);
            });
            return {
                getClientID: function () {
                    return null === e.Store.data.gaClientID && e.Store.set("gaClientID", uuidv4()), e.Store.data.gaClientID;
                },
            };
        })());
    var c = {
        extend: function (e, t) {
            this[e] = t;
        },
    };
    e.Helper = c;
    var p,
        m,
        v =
            ((p = {}),
            (m = { CZ: "CS", DE: "DE", DK: "DA", EN: "EN", ES: "ES", FR: "FR", HR: "HR", HU: "HU", IT: "IT", NL: "NL", PL: "PL", PT: "PT", RO: "RO", RU: "RU", SE: "SV", TR: "TR" }),
            {
                init: function () {
                    var t = e.Application.ogame.community.toUpperCase(),
                        a = m[t],
                        i = {};
                    a ? p[a] && ((i = p[a]), (this.active = a)) : (i = p.EN),
                        (i.fallback = p.EN),
                        (this.dict = new Proxy(i, {
                            get: function (e, t) {
                                return e[t] || e.fallback[t] || "[" + t + "]";
                            },
                        }));
                },
                add: function (e, t) {
                    p[e] = t;
                },
                dict: {},
                active: "EN",
            });
    e.Locale = v;
    var f = (function () {
        let t = null;
        var a = function () {
            var t = this.parentNode,
                a = t.dataset.feature;
            "yes" === e.Store.data.features[a] ? ((e.Store.data.features[a] = "no"), t.classList.remove("active")) : ((e.Store.data.features[a] = "yes"), t.classList.add("active")), e.Store.set("features", e.Store.data.features, !0);
        };
        const i = function () {
                const t = !this.classList.contains("active");
                !0 === t ? this.classList.add("active") : this.classList.remove("active"), e.Store.setByPath(this.getAttribute("data-option"), t);
            },
            r = function () {
                let t = parseInt(this.value);
                isNaN(t) && (t = this.getAttribute("data-default")), t < 0 && (t = 0), e.Store.setByPath(this.getAttribute("data-option"), t);
            },
            o = function () {
                n.body.removeChild(t), (t = null);
            };
        return {
            build: function () {
                var s = e.Locale.dict,
                    l = "";
                void 0 !== e.config.apps.website.communities[e.Application.ogame.community] && (l = e.config.apps.website.communities[e.Application.ogame.community]);
                var d = {
                    version: e.config.version,
                    UvUpdateServer: e.Store.data.serverUrl || "",
                    UvAccessServer: e.Store.data.serverCode || "",
                    wikiServer: e.Application.ogame.universe,
                    wikiLang: e.Application.ogame.language,
                    uvw_locale: l,
                    mission_1: e.Store.data.missionNames[1],
                    mission_2: e.Store.data.missionNames[2],
                    mission_3: e.Store.data.missionNames[3],
                    mission_4: e.Store.data.missionNames[4],
                    mission_5: e.Store.data.missionNames[5],
                    mission_6: e.Store.data.missionNames[6],
                    mission_7: e.Store.data.missionNames[7],
                    mission_8: e.Store.data.missionNames[8],
                    mission_9: e.Store.data.missionNames[9],
                    mission_15: e.Store.data.missionNames[15],
                    ship_202: e.Store.data.techNames[202],
                    ship_203: e.Store.data.techNames[203],
                    ship_218: e.Store.data.techNames[218],
                    ship_219: e.Store.data.techNames[219],
                };
                (d = e.Utils.merge(s, d)),
                    e.Template.get(
                        "menu",
                        function (s) {
                            if (!1 !== s) {
                                (t = s), n.body.appendChild(t);
                                for (const t in e.Store.data.features)
                                    if ("yes" === e.Store.data.features[t]) {
                                        const a = e.DOM.getOne('#UvFeatureMenu [data-feature="' + t + '"]');
                                        a && a.classList.add("active");
                                    }
                                e.DOM.get("#UvClearLocalStorage").onclick = function () {
                                    e.Store.del([
                                        "features",
                                        "hello",
                                        "planetOption",
                                        "quickSearch",
                                        "serverUrl",
                                        "serverCode",
                                        "spreading",
                                        "spreadingCurrent",
                                        "stats",
                                        "techNames",
                                        "updatePlayers",
                                        "updatePlanets",
                                        "version",
                                        "favourites",
                                        "ogameSettings",
                                        "eventNotification",
                                    ]),
                                        chrome.runtime.sendMessage({ action: "API", call: "universe:clearDatabase" }),
                                        e.PageCom.GoogleAnalytics.sendEvent("menu", "click", "storage_clear");
                                };
                                for (var l = e.DOM.getAll('input[name="UVGalaxyOption"]'), d = 0, u = l.length; d < u; d++)
                                    l[d].onchange = function () {
                                        for (var t = e.DOM.getOne('input[name="UVGalaxyOption"]:checked').value, a = e.DOM.getAll("#UvGeneralList > li"), i = 0, n = a.length; i < n; i++) a[i].classList.remove("selected");
                                        e.DOM.get("#UvGeneral" + t).classList.add("selected"), e.Store.set("planetOption", t), e.PageCom.GoogleAnalytics.sendEvent("menu", "change", t);
                                    };
                                var c = e.DOM.get(".UvUpdateGalaxy");
                                for (d = 0, u = c.length; d < u; d++)
                                    c[d].onclick = function () {
                                        e.PageCom.GoogleAnalytics.sendEvent("menu", "click", "db_planet_update");
                                    };
                                var p = e.DOM.getAll(".UvFeatureButton");
                                for (d = 0, u = p.length; d < u; d++) p[d].addEventListener("click", a);
                                const m = e.DOM.getAll(".feature-option-state-btn[data-option]");
                                for (let t = 0, a = m.length; t < a; t++) !0 === e.Store.getDataByPath(m[t].getAttribute("data-option")) && m[t].classList.add("active"), m[t].addEventListener("click", i);
                                const g = e.DOM.getAll(".feature-option-number[data-option]");
                                for (let t = 0, a = g.length; t < a; t++) (g[t].value = parseInt(e.Store.getDataByPath(g[t].getAttribute("data-option")))), g[t].addEventListener("keyup", r), g[t].addEventListener("mouseup", r);
                                const v = n.querySelectorAll("#uv-menu-background, #uv-menu-close");
                                for (let e = 0, t = v.length; e < t; e++) v[e].addEventListener("click", o);
                                e.PageCom.Tipped.create(".en-icon-mission, .uv-tipped-info", null, { hook: "topmiddle", radius: { size: 3 }, skin: "cloud" });
                            }
                        },
                        d
                    );
            },
            changeOption: a,
        };
    })();
    e.Menu = f;
    var h = {
        build: function (t) {
            var a = t,
                i = "";
            void 0 !== e.config.apps.website.communities[e.Application.ogame.community] && (i = e.config.apps.website.communities[e.Application.ogame.community]),
                e.Template.get(
                    "menuButton",
                    function (t) {
                        !1 !== t &&
                            (a.appendChild(t),
                            e.Utils.log("UniverseView Debug: HTML Added - Menu button"),
                            (e.DOM.get("#universeView").onclick = function () {
                                e.Menu.build(), e.PageCom.GoogleAnalytics.sendEvent("menu", "click", "open");
                            }));
                    },
                    { icon: e.Application.getPath("img/uv_icon.png"), uvw_locale: i }
                );
        },
    };
    e.MenuButton = h;
    var y,
        _,
        k,
        w,
        x,
        A =
            ((_ = 0),
            (k = []),
            {
                init: function () {
                    ((y = e.DOM.create("ul")).id = "uv-notifications"), document.body.appendChild(y);
                },
                add: function (t, a) {
                    return (
                        _++,
                        e.Template.get(
                            "notification",
                            function (t) {
                                var i = e.DOM.getOne(".btn-del", t);
                                i &&
                                    i.addEventListener("click", function (e) {
                                        w(this.parentNode.getAttribute("data-id"));
                                    }),
                                    void 0 !== a && (k[_] = a),
                                    y.appendChild(t),
                                    setTimeout(function () {
                                        t.classList.add("show");
                                    }, 100);
                            },
                            { content: t, id: _ }
                        ),
                        _
                    );
                },
                remove: (w = function (t) {
                    var a,
                        i = e.DOM.get("#uv-notification-" + t);
                    i &&
                        (i.classList.remove("show"),
                        void 0 !== (a = k[t]) && a.call(null),
                        setTimeout(function () {
                            i.parentNode.removeChild(i);
                        }, 500));
                }),
            });
    (e.Notifications = A),
        (e.Ogame = {
            canLoadSystem: (t, a, i) => {
                (n.getElementById("galaxy_input").value = t), (n.getElementById("system_input").value = a), e.PageCom.Galaxy.load(t, a, !0);
            },
        }),
        (e.PageCom =
            ((x = function (e, t, i) {
                a.postMessage({ context: "UniverseView", ID: e, action: t, content: i }, a.location.origin);
            }),
            {
                init: function () {
                    a.addEventListener("message", function (t) {
                        var i = t.data;
                        if (t.origin === a.location.origin && "UniverseView" == t.data.context && i.ID && i.action && i.content)
                            switch (i.ID) {
                                case "simulate":
                                    "eventfleet" == i.action && e.ft.Simulate.triggerSimulationButton(i.content.id, i.content.party);
                            }
                    });
                },
                Tipped: {
                    create: function (e, t, a) {
                        x("tipped", "create", { selector: e, text: t, options: a });
                    },
                    refresh: function (e) {
                        x("tipped", "refresh", { selector: e });
                    },
                },
                Galaxy: {
                    load: function (e, t, a) {
                        x("galaxy", "load", { galaxy: e, system: t, buildListCountdowns: a });
                    },
                    location: function (e, t) {
                        x("galaxy", "location", { galaxy: e, system: t });
                    },
                },
                JQuery: {
                    dialog: function (e, t) {
                        x("jquery", "dialog", { selector: e, options: t });
                    },
                    colorpicker: function (e, t) {
                        x("jquery", "colorpicker", { selector: e, defaultColor: t });
                    },
                },
                GoogleAnalytics: {
                    init: function (e, t, a) {
                        x("ga", "init", { code: e, domain: a, cid: t });
                    },
                    sendHeartbeat: function () {
                        x("ga", "pageview", {});
                    },
                    sendEvent: function (e, t, a) {
                        x("ga", "event", { cat: e, action: t, label: a });
                    },
                    sendPageView: function (e) {
                        x("ga", "pageview", { variables: e });
                    },
                },
                FleetDispatch: {
                    updateTarget: (e) => {
                        x("fleetDispatch", "setTarget", { type: e });
                    },
                },
            })),
        (e.Player = {
            saveResearch: function () {
                let t = {};
                if (e.Application.data.OGAMELEGACY) {
                    let a = e.DOM.getAll("#buttonz .detail_button");
                    for (let i = 0, n = a.length; i < n; i++) {
                        const n = a[i],
                            r = /\d+/.exec(e.DOM.getOne(".level", n).textContent);
                        r && r.length > 0 && (t[n.getAttribute("ref")] = r[0]);
                    }
                } else {
                    let a = e.DOM.getAll("#technologies .technology");
                    for (let e = 0, i = a.length; e < i; e++) {
                        const i = a[e].querySelector(".level"),
                            n = /\d+/.exec(i.getAttribute("data-bonus"));
                        let r = +i.getAttribute("data-value");
                        r >= 0 && (n.length > 0 && (r += +n[0]), (t[a[e].getAttribute("data-technology")] = r));
                    }
                }
                e.Store.set("playerResearch", e.Utils.merge(e.Store.data.playerResearch, t), !0);
            },
        }),
        (e.Store = (function () {
            const t = { ESPIONAGERAID_EXTRA_SMALLCARGO: 5, ESPIONAGERAID_EXTRA_LARGECARGO: 1, ESPIONAGERAID_EXTRA_REAPER: 2, ESPIONAGERAID_EXTRA_PATHFINDER: 2 };
            let a = {
                    planetOption: null,
                    serverUrl: null,
                    serverCode: null,
                    stats: null,
                    updatePlanets: null,
                    updatePlayers: null,
                    updateOgame: null,
                    version: null,
                    spreadingCurrent: null,
                    spreading: null,
                    features: null,
                    techNames: null,
                    techNamesReversed: {},
                    missionNames: null,
                    quickSearch: null,
                    hello: null,
                    favourites: null,
                    ogameSettings: null,
                    playerResearch: null,
                    eventNotification: null,
                    espionageRaid: null,
                    idleTimer: null,
                    gaClientID: null,
                },
                i = function () {
                    let e = { favs: [] };
                    (!a.spreadingCurrent || "" == a.spreadingCurrent || a.spreadingCurrent.length < 2) && n("spreadingCurrent", "Default"),
                        a.ogameSettings ||
                            ((a.ogameSettings = {
                                number: null,
                                language: null,
                                timezone: null,
                                domain: null,
                                version: null,
                                speed: 1,
                                speedFleet: 1,
                                galaxies: 9,
                                systems: 499,
                                acs: 1,
                                rapidFire: 1,
                                defToTF: 0,
                                debrisFactor: 0.3,
                                repairFactor: 0.7,
                                newbieProtectionLimit: 5e4,
                                newbieProtectionHigh: 1e4,
                                bonusFields: 0,
                                donutGalaxy: 1,
                                donutSystem: 1,
                            }),
                            n("ogameSettings", a.ogameSettings, !0)),
                        a.playerResearch ||
                            ((a.playerResearch = { 106: 0, 108: 0, 109: 0, 110: 0, 111: 0, 113: 0, 114: 0, 115: 0, 117: 0, 118: 0, 120: 0, 121: 0, 122: 0, 123: 0, 124: 0, 199: 0 }), n("playerResearch", a.playerResearch, !0)),
                        a.spreading || ((a.spreading = { Default: {} }), n("spreadingCurrent", "Default"), n("spreading", a.spreading, !0)),
                        (a.favourites && a.favourites.favs) || ((a.favourites = e), n("favourites", a.favourites, !0)),
                        (!a.quickSearch || ("A" != a.quickSearch && "P" != a.quickSearch)) && n("quickSearch", "P"),
                        a.planetOption || n("planetOption", "idb"),
                        a.eventNotification ||
                            ((a.eventNotification = {
                                returningEnabled: !0,
                                ownArriving: { 1: !0, 2: !0, 3: !0, 4: !0, 5: !0, 6: !1, 7: !0, 8: !0, 9: !0, 15: !0 },
                                ownReturning: { 1: !0, 2: !0, 3: !0, 4: !0, 5: !0, 6: !1, 7: !0, 8: !0, 9: !0, 15: !0 },
                                otherArriving: { 1: !0, 2: !0, 3: !0, 4: null, 5: !0, 6: !1, 7: null, 8: null, 9: !0, 15: null },
                                notificationOffset: { 1: 60, 2: 60, 3: 60, 4: 60, 5: 60, 6: 60, 7: 60, 8: 60, 9: 60, 15: 60 },
                                useComputerTime: !1,
                            }),
                            n("eventNotification", a.eventNotification, !0)),
                        a.idleTimer || ((a.idleTimer = { showSeconds: !0, expirationTime: 90 }), n("idleTimer", a.idleTimer, !0)),
                        a.espionageRaid ||
                            ((a.espionageRaid = { 202: t.ESPIONAGERAID_EXTRA_SMALLCARGO, 203: t.ESPIONAGERAID_EXTRA_LARGECARGO, 218: t.ESPIONAGERAID_EXTRA_REAPER, 219: t.ESPIONAGERAID_EXTRA_PATHFINDER }),
                            n("espionageRaid", a.espionageRaid, !0)),
                        void 0 === a.espionageRaid[218] && ((a.espionageRaid[218] = t.ESPIONAGERAID_EXTRA_REAPER), n("espionageRaid", a.espionageRaid, !0)),
                        a.features || (a.features = {}),
                        a.features.updateSystems || (a.features.updateSystems = "yes"),
                        a.features.showPlanets || (a.features.showPlanets = "yes"),
                        a.features.militairy || (a.features.militairy = "no"),
                        a.features.research || (a.features.research = "yes"),
                        a.features.quickSearch || (a.features.quickSearch = "yes"),
                        a.features.spreading || (a.features.spreading = "yes"),
                        a.features.galaxyRefresh || (a.features.galaxyRefresh = "yes"),
                        a.features.galaxyRank || (a.features.galaxyRank = "yes"),
                        a.features.galaxyDebris || (a.features.galaxyDebris = "yes"),
                        a.features.favourites || (a.features.favourites = "yes"),
                        a.features.moonDestruction || (a.features.moonDestruction = "yes"),
                        a.features.planetFields || (a.features.planetFields = "no"),
                        a.features.highScore || (a.features.highScore = "yes"),
                        a.features.fleetPage || (a.features.fleetPage = "yes"),
                        a.features.eventNotification || (a.features.eventNotification = "yes"),
                        a.features.idleTimer || (a.features.idleTimer = "yes"),
                        a.features.messagesRaid || (a.features.messagesRaid = "yes"),
                        n("features", a.features, !0);
                },
                n = function (e, t, i) {
                    (a[e] = t), i ? localStorage.setItem("UV_" + e, JSON.stringify(t)) : localStorage.setItem("UV_" + e, t);
                };
            const r = function (e, t, a) {
                const i = t.shift();
                "object" == typeof e[i] ? r(e[i], t, a) : (e[i] = a);
            };
            let o = function (e) {
                return localStorage.getItem("UV_" + e);
            };
            const s = function (e, t) {
                return e && void 0 !== e[t] ? e[t] : null;
            };
            let l = function (e) {
                if (Array.isArray(e)) for (let t = 0, a = e.length; t < a; t++) delete localStorage["UV_" + e[t]];
                else delete localStorage["UV_" + e];
            };
            return {
                init: function () {
                    e.Store.data.version != e.config.version && l("updateOgame"),
                        (a.planetOption = o("planetOption")),
                        (a.serverUrl = o("serverUrl")),
                        (a.serverCode = o("serverCode")),
                        (a.stats = o("stats")),
                        (a.updatePlanets = o("updatePlanets")),
                        (a.updatePlayers = o("updatePlayers")),
                        (a.updateOgame = o("updateOgame")),
                        (a.version = o("version")),
                        (a.spreadingCurrent = o("spreadingCurrent")),
                        (a.quickSearch = o("quickSearch")),
                        (a.hello = o("hello")),
                        (a.gaClientID = o("gaClientID")),
                        (a.ogameSettings = JSON.parse(o("ogameSettings"))),
                        (a.playerResearch = JSON.parse(o("playerResearch"))),
                        (a.techNames = JSON.parse(o("techNames")) || {}),
                        (a.missionNames = JSON.parse(o("missionNames")) || {}),
                        (a.spreading = JSON.parse(o("spreading"))),
                        (a.features = JSON.parse(o("features"))),
                        (a.favourites = JSON.parse(o("favourites"))),
                        (a.eventNotification = JSON.parse(o("eventNotification"))),
                        (a.espionageRaid = JSON.parse(o("espionageRaid"))),
                        (a.idleTimer = JSON.parse(o("idleTimer"))),
                        (a.techNamesReversed = e.Utils.reverseKeyValue(a.techNames)),
                        i();
                },
                set: n,
                setByPath: function (e, t) {
                    const i = e.split("."),
                        n = i.length,
                        o = i[0];
                    r(a, i, t), n > 1 || "object" == typeof t ? localStorage.setItem("UV_" + o, JSON.stringify(a[o])) : localStorage.setItem("UV_" + o, a[o]);
                },
                del: l,
                data: a,
                CONSTANTS: t,
                getDataByPath: function (e) {
                    return e.split(".").reduce(s, a);
                },
            };
        })()),
        (e.Style = (function () {
            const e = ["uv-skin-events", "uv-skin-galaxy", "uv-skin-messages"];
            return {
                init: function () {
                    for (let t = 0, a = e.length; t < a; t++) n.body.classList.add(e[t]);
                },
                improveGalaxy: function () {
                    const e = n.querySelectorAll(".row");
                    for (let t = 0, a = e.length; t < a; t++) {
                        const a = e[t];
                        a.querySelector(".microplanet.planetEmpty") && a.classList.add("uv-skin-g-empty"), a.querySelector(".vacation") && a.classList.add("uv-skin-g-vmode");
                    }
                },
            };
        })());
    var S = {
        get: function (e, t) {
            var a = t || document,
                i = /^./.exec(e);
            if (i)
                switch (i[0]) {
                    case ".":
                        return a.getElementsByClassName(e.substr(1));
                    case "#":
                        return a.getElementById(e.substr(1));
                    default:
                        return a.getElementsByTagName(e);
                }
        },
        getOne: function (e, t) {
            return (t || document).querySelector(e);
        },
        getAll: function (e, t) {
            return (t || document).querySelectorAll(e);
        },
        create: function (e) {
            return document.createElement(e);
        },
        text: function (e) {
            return document.createTextNode(e);
        },
        clear: function (t) {
            var a = e.DOM.getAll(t);
            if (a) for (var i = 0, n = a.length; i < n; i++) for (; a[i].firstChild; ) a[i].removeChild(a[i].firstChild);
        },
        remove: (e) => {
            let t = [].slice.call(n.querySelectorAll(e));
            if (t)
                for (; t.length > 0; ) {
                    let e = t[0];
                    e.parentNode.removeChild(e), e === t[0] && t.shift();
                }
        },
        fromHTML: function (e) {
            for (
                var t = /(?:\s+([a-zA-Z-]+)(?:=(?:"(.*?)"|'(.*?)'))?)/gm,
                    a = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
                    i = (e = e.replace(/&nbsp;/g, " ")).split(/(<[a-zA-Z1-9]+(?:\s+[a-zA-Z-]+(?:=(?:".*?"|'.*?'))?)*\s*\/?>|<\/[a-zA-Z1-9]+>)/gm),
                    n = document.createDocumentFragment(),
                    r = n,
                    o = 0,
                    s = i.length;
                o < s;
                o++
            )
                if (i[o].length > 0) {
                    var l = i[o].match(/^<(\/)?([a-zA-Z1-9]+)/);
                    if (l && l.length > 0)
                        if (void 0 === l[1]) {
                            for (var d = document.createElement(l[2]), u = []; null !== (u = t.exec(i[o])); ) {
                                var c = document.createAttribute(u[1]);
                                (void 0 === u[2] && void 0 === u[3]) || (c.value = u[2] || u[3]), d.setAttributeNode(c);
                            }
                            r.appendChild(d), -1 === a.indexOf(l[2]) && (r = d);
                        } else r = r.parentNode;
                    else r.appendChild(document.createTextNode(i[o]));
                }
            return n;
        },
        wait: function (t) {
            var i = t || {},
                n = "function" == typeof i.fail,
                r = null !== i.jquery && i.jquery,
                o = 0;
            if ("function" != typeof i.done || null === i.forId) {
                if (!n) return;
                i.fail("Make sure you define the done callback and forId!");
            }
            !(function t() {
                var s = !1;
                ((r && a.jQuery) || (!r && "complete" === document.readyState)) && (s = !0);
                var l = e.DOM.get("#" + i.forId);
                if (null === l)
                    if (s) {
                        if (!n) return;
                        i.fail("The id doesn't exist in this document!");
                    } else
                        setTimeout(function () {
                            t.call();
                        }, ++o);
                else i.done(l);
            })();
        },
        getGlobalOffset: function (e) {
            for (var t = 0, a = 0, i = 0, n = 0; e && "BODY" != e.nodeName; ) (t += e.offsetLeft), (a += e.offsetTop), (i += e.scrollLeft), (n += e.scrollTop), (e = e.parentNode);
            return { left: t, top: a, scrollLeft: i, scrollTop: n };
        },
    };
    (e.DOM = S),
        (e.Loader = {
            create: function (t) {
                var a = e.DOM.getOne(t),
                    i = ++e.Application.data.loaders,
                    n = e.DOM.create("div"),
                    r = e.DOM.create("div"),
                    o = e.DOM.create("img");
                return (
                    (o.src =
                        "data:image/gif;base64,R0lGODlhgACAAKIAAP///93d3bu7u5mZmQAA/wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAEACwCAAIAfAB8AAAD/0i63P4wygYqmDjrzbtflvWNZGliYXiubKuloivPLlzReD7al+7/Eh5wSFQIi8hHYBkwHUmD6CD5YTJLz49USuVYraRsZ7vtar7XnQ1Kjpoz6LRHvGlz35O4nEPP2O94EnpNc2sef1OBGIOFMId/inB6jSmPdpGScR19EoiYmZobnBCIiZ95k6KGGp6ni4wvqxilrqBfqo6skLW2YBmjDa28r6Eosp27w8Rov8ekycqoqUHODrTRvXsQwArC2NLF29UM19/LtxO5yJd4Au4CK7DUNxPebG4e7+8n8iv2WmQ66BtoYpo/dvfacBjIkITBE9DGlMvAsOIIZjIUAixliv9ixYZVtLUos5GjwI8gzc3iCGghypQqrbFsme8lwZgLZtIcYfNmTJ34WPTUZw5oRxdD9w0z6iOpO15MgTh1BTTJUKos39jE+o/KS64IFVmsFfYT0aU7capdy7at27dw48qdS7eu3bt480I02vUbX2F/JxYNDImw4GiGE/P9qbhxVpWOI/eFKtlNZbWXuzlmG1mv58+gQ4seTbq06dOoU6vGQZJy0FNlMcV+czhQ7SQmYd8eMhPs5BxVdfcGEtV3buDBXQ+fURxx8oM6MT9P+Fh6dOrH2zavc13u9JXVJb520Vp8dvC76wXMuN5Sepm/1WtkEZHDefnzR9Qvsd9+/wi8+en3X0ntYVcSdAE+UN4zs7ln24CaLagghIxBaGF8kFGoIYV+Ybghh841GIyI5ICIFoklJsigihmimJOLEbLYIYwxSgigiZ+8l2KB+Ml4oo/w8dijjcrouCORKwIpnJIjMnkkksalNeR4fuBIm5UEYImhIlsGCeWNNJphpJdSTlkml1jWeOY6TnaRpppUctcmFW9mGSaZceYopH9zkjnjUe59iR5pdapWaGqHopboaYua1qije67GJ6CuJAAAIfkEBQUABAAsCgACAFcAMAAAA/9Iutz+ML5Ag7w46z0r5WAoSp43nihXVmnrdusrv+s332dt4Tyo9yOBUJD6oQBIQGs4RBlHySSKyczVTtHoidocPUNZaZAr9F5FYbGI3PWdQWn1mi36buLKFJvojsHjLnshdhl4L4IqbxqGh4gahBJ4eY1kiX6LgDN7fBmQEJI4jhieD4yhdJ2KkZk8oiSqEaatqBekDLKztBG2CqBACq4wJRi4PZu1sA2+v8C6EJexrBAD1AOBzsLE0g/V1UvYR9sN3eR6lTLi4+TlY1wz6Qzr8u1t6FkY8vNzZTxaGfn6mAkEGFDgL4LrDDJDyE4hEIbdHB6ESE1iD4oVLfLAqPETIsOODwmCDJlv5MSGJklaS6khAQAh+QQFBQAEACwfAAIAVwAwAAAD/0i63P5LSAGrvTjrNuf+YKh1nWieIumhbFupkivPBEzR+GnnfLj3ooFwwPqdAshAazhEGUXJJIrJ1MGOUamJ2jQ9QVltkCv0XqFh5IncBX01afGYnDqD40u2z76JK/N0bnxweC5sRB9vF34zh4gjg4uMjXobihWTlJUZlw9+fzSHlpGYhTminKSepqebF50NmTyor6qxrLO0L7YLn0ALuhCwCrJAjrUqkrjGrsIkGMW/BMEPJcphLgDaABjUKNEh29vdgTLLIOLpF80s5xrp8ORVONgi8PcZ8zlRJvf40tL8/QPYQ+BAgjgMxkPIQ6E6hgkdjoNIQ+JEijMsasNY0RQix4gKP+YIKXKkwJIFF6JMudFEAgAh+QQFBQAEACw8AAIAQgBCAAAD/kg0PPowykmrna3dzXvNmSeOFqiRaGoyaTuujitv8Gx/661HtSv8gt2jlwIChYtc0XjcEUnMpu4pikpv1I71astytkGh9wJGJk3QrXlcKa+VWjeSPZHP4Rtw+I2OW81DeBZ2fCB+UYCBfWRqiQp0CnqOj4J1jZOQkpOUIYx/m4oxg5cuAaYBO4Qop6c6pKusrDevIrG2rkwptrupXB67vKAbwMHCFcTFxhLIt8oUzLHOE9Cy0hHUrdbX2KjaENzey9Dh08jkz8Tnx83q66bt8PHy8/T19vf4+fr6AP3+/wADAjQmsKDBf6AOKjS4aaHDgZMeSgTQcKLDhBYPEswoA1BBAgAh+QQFBQAEACxOAAoAMABXAAAD7Ei6vPOjyUkrhdDqfXHm4OZ9YSmNpKmiqVqykbuysgvX5o2HcLxzup8oKLQQix0UcqhcVo5ORi+aHFEn02sDeuWqBGCBkbYLh5/NmnldxajX7LbPBK+PH7K6narfO/t+SIBwfINmUYaHf4lghYyOhlqJWgqDlAuAlwyBmpVnnaChoqOkpaanqKmqKgGtrq+wsbA1srW2ry63urasu764Jr/CAb3Du7nGt7TJsqvOz9DR0tPU1TIA2ACl2dyi3N/aneDf4uPklObj6OngWuzt7u/d8fLY9PXr9eFX+vv8+PnYlUsXiqC3c6PmUUgAACH5BAUFAAQALE4AHwAwAFcAAAPpSLrc/m7IAau9bU7MO9GgJ0ZgOI5leoqpumKt+1axPJO1dtO5vuM9yi8TlAyBvSMxqES2mo8cFFKb8kzWqzDL7Xq/4LB4TC6bz1yBes1uu9uzt3zOXtHv8xN+Dx/x/wJ6gHt2g3Rxhm9oi4yNjo+QkZKTCgGWAWaXmmOanZhgnp2goaJdpKGmp55cqqusrZuvsJays6mzn1m4uRAAvgAvuBW/v8GwvcTFxqfIycA3zA/OytCl0tPPO7HD2GLYvt7dYd/ZX99j5+Pi6tPh6+bvXuTuzujxXens9fr7YPn+7egRI9PPHrgpCQAAIfkEBQUABAAsPAA8AEIAQgAAA/lIutz+UI1Jq7026h2x/xUncmD5jehjrlnqSmz8vrE8u7V5z/m5/8CgcEgsGo/IpHLJbDqf0Kh0ShBYBdTXdZsdbb/Yrgb8FUfIYLMDTVYz2G13FV6Wz+lX+x0fdvPzdn9WeoJGAYcBN39EiIiKeEONjTt0kZKHQGyWl4mZdREAoQAcnJhBXBqioqSlT6qqG6WmTK+rsa1NtaGsuEu6o7yXubojsrTEIsa+yMm9SL8osp3PzM2cStDRykfZ2tfUtS/bRd3ewtzV5pLo4eLjQuUp70Hx8t9E9eqO5Oku5/ztdkxi90qPg3x2EMpR6IahGocPCxp8AGtigwQAIfkEBQUABAAsHwBOAFcAMAAAA/9Iutz+MMo36pg4682J/V0ojs1nXmSqSqe5vrDXunEdzq2ta3i+/5DeCUh0CGnF5BGULC4tTeUTFQVONYAs4CfoCkZPjFar83rBx8l4XDObSUL1Ott2d1U4yZwcs5/xSBB7dBMBhgEYfncrTBGDW4WHhomKUY+QEZKSE4qLRY8YmoeUfkmXoaKInJ2fgxmpqqulQKCvqRqsP7WooriVO7u8mhu5NacasMTFMMHCm8qzzM2RvdDRK9PUwxzLKdnaz9y/Kt8SyR3dIuXmtyHpHMcd5+jvWK4i8/TXHff47SLjQvQLkU+fG29rUhQ06IkEG4X/Rryp4mwUxSgLL/7IqFETB8eONT6ChCFy5ItqJomES6kgAQAh+QQFBQAEACwKAE4AVwAwAAAD/0i63A4QuEmrvTi3yLX/4MeNUmieITmibEuppCu3sDrfYG3jPKbHveDktxIaF8TOcZmMLI9NyBPanFKJp4A2IBx4B5lkdqvtfb8+HYpMxp3Pl1qLvXW/vWkli16/3dFxTi58ZRcChwIYf3hWBIRchoiHiotWj5AVkpIXi4xLjxiaiJR/T5ehoomcnZ+EGamqq6VGoK+pGqxCtaiiuJVBu7yaHrk4pxqwxMUzwcKbyrPMzZG90NGDrh/JH8t72dq3IN1jfCHb3L/e5ebh4ukmxyDn6O8g08jt7tf26ybz+m/W9GNXzUQ9fm1Q/APoSWAhhfkMAmpEbRhFKwsvCsmosRIHx444PoKcIXKkjIImjTzjkQAAIfkEBQUABAAsAgA8AEIAQgAAA/VIBNz+8KlJq72Yxs1d/uDVjVxogmQqnaylvkArT7A63/V47/m2/8CgcEgsGo/IpHLJbDqf0Kh0Sj0FroGqDMvVmrjgrDcTBo8v5fCZki6vCW33Oq4+0832O/at3+f7fICBdzsChgJGeoWHhkV0P4yMRG1BkYeOeECWl5hXQ5uNIAOjA1KgiKKko1CnqBmqqk+nIbCkTq20taVNs7m1vKAnurtLvb6wTMbHsUq4wrrFwSzDzcrLtknW16tI2tvERt6pv0fi48jh5h/U6Zs77EXSN/BE8jP09ZFA+PmhP/xvJgAMSGBgQINvEK5ReIZhQ3QEMTBLAAAh+QQFBQAEACwCAB8AMABXAAAD50i6DA4syklre87qTbHn4OaNYSmNqKmiqVqyrcvBsazRpH3jmC7yD98OCBF2iEXjBKmsAJsWHDQKmw571l8my+16v+CweEwum8+hgHrNbrvbtrd8znbR73MVfg838f8BeoB7doN0cYZvaIuMjY6PkJGSk2gClgJml5pjmp2YYJ6dX6GeXaShWaeoVqqlU62ir7CXqbOWrLafsrNctjIDwAMWvC7BwRWtNsbGFKc+y8fNsTrQ0dK3QtXAYtrCYd3eYN3c49/a5NVj5eLn5u3s6e7x8NDo9fbL+Mzy9/T5+tvUzdN3Zp+GBAAh+QQJBQAEACwCAAIAfAB8AAAD/0i63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdArcQK2TOL7/nl4PSMwIfcUk5YhUOh3M5nNKiOaoWCuWqt1Ou16l9RpOgsvEMdocXbOZ7nQ7DjzTaeq7zq6P5fszfIASAYUBIYKDDoaGIImKC4ySH3OQEJKYHZWWi5iZG0ecEZ6eHEOio6SfqCaqpaytrpOwJLKztCO2jLi1uoW8Ir6/wCHCxMG2x7muysukzb230M6H09bX2Nna29zd3t/g4cAC5OXm5+jn3Ons7eba7vHt2fL16tj2+QL0+vXw/e7WAUwnrqDBgwgTKlzIsKHDh2gGSBwAccHEixAvaqTYcFCjRoYeNyoM6REhyZIHT4o0qPIjy5YTTcKUmHImx5cwE85cmJPnSYckK66sSAAj0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gwxZJAAA7"),
                    r.classList.add("sbl-loader"),
                    r.appendChild(o),
                    (n.id = "sbl-" + i),
                    n.classList.add("sbl-wrapper"),
                    n.appendChild(r),
                    a.appendChild(n),
                    i
                );
            },
            remove: function (t) {
                e.DOM.remove("#sbl-" + t);
            },
        });
    var z,
        C,
        F,
        P,
        E,
        O,
        L,
        j,
        D =
            ((z = {}),
            {
                init: function () {},
                get: function (t, a, i) {
                    for (
                        var n = t.split(";"),
                            r = [],
                            o = function (e, t) {
                                (r[n.indexOf(e)] = t), r.length === n.length && a.apply(null, r);
                            },
                            s = 0,
                            l = n.length;
                        s < l;
                        s++
                    ) {
                        var d = n[s];
                        o(d, e.DOM.fromHTML("undefined" !== i ? C(z[d], i) : z[d]).firstElementChild);
                    }
                },
                cache: function (e) {
                    z = e;
                },
                parse: (C = function (t, a) {
                    return t.call(e, a);
                }),
            });
    function U(e) {
        e.stopPropagation();
    }
    (e.Template = D),
        (e.Utils = {
            log: function (t) {
                !0 === e.config.debug && console.log(t);
            },
            timelineHit: function (t) {
                !0 === e.config.debug && console.timeStamp(t);
            },
            timeStart: function (t) {
                !0 === e.config.debug && console.time(t);
            },
            timeEnd: function (t) {
                !0 === e.config.debug && console.timeEnd(t);
            },
            clone: function (e) {
                var t = {};
                for (var a in e) t[a] = e[a];
                return t;
            },
            merge: function (e, t) {
                for (var a in t) e[a] = t[a];
                return e;
            },
            nodeListToArray: function (e) {
                for (var t = [], a = e.length; a--; t.unshift(e[a]));
                return t;
            },
            formatNumber: function (e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
            shortenNumber: function (e) {
                var t = ["", " K", " M", " G", " T", " P", " E", " Z", " Y"];
                if (e > 999) {
                    var a = Math.ceil(Math.floor(e / 1e3).toString().length / 3);
                    if (t[a]) return Math.floor(e / Math.pow(1e3, a)) + t[a];
                }
                return e;
            },
            countProperties: function (e) {
                let t = 0;
                for (i in e) t++;
                return t;
            },
            reverseKeyValue: function (e) {
                var t = {};
                for (let a in e) t[e[a]] = a;
                return t;
            },
            objectValue: function (e, t, a) {
                for (let i = 0, n = e.length; i < n; i++) if (e[i][t] === a) return i;
                return -1;
            },
            isInt: function (e) {
                var t = parseInt(e);
                return !isNaN(t);
            },
            invertColor: function (e) {
                var t = /rgba\((\d{1,3}),\s(\d{1,3}),\s(\d{1,3}),\s\d{1,3}\)/.exec(e),
                    a = /rgb\((\d{1,3}),\s(\d{1,3}),\s(\d{1,3})\)/.exec(e),
                    i = t || a;
                return (r = 0), (g = 0), (b = 0), null != i && ((r = 255 - i[1]), (g = 255 - i[2]), (b = 255 - i[3])), "#" + F(r) + F(g) + F(b);
            },
            rgbToHex: (F = function (e) {
                var t = e.toString(16);
                return 1 == t.length ? "0" + t : t;
            }),
            checkPage: function (e) {
                return a.location.href.match(new RegExp("page=" + e)) || a.location.href.match(new RegExp("page=ingame&component=" + e));
            },
        }),
        e.fn.extend("calculatePlanets", function (e) {
            return 1 + Math.floor((parseInt(e) + 1) / 2);
        }),
        e.fn.extend("getHomePlanet", function (e) {
            for (var t = 0, a = 0, i = e.length; a < i; a++) {
                var n = e[a].id;
                (0 == t || n < t) && "" != n && (t = n);
            }
            return (0 != t && "" != t) || (t = !1), t;
        }),
        e.fn.extend("loadFleetDispatch", function (t) {
            let i = "/game/index.php?page=ingame&component=fleetdispatch";
            e.Application.data.OGAMELEGACY && (i = "/game/index.php?page=fleet1");
            let n = [];
            for (const e in t) n.push(e + "=" + encodeURIComponent(t[e]));
            a.location = a.location.origin + i + "&" + n.join("&");
        }),
        e.fn.extend("loadGalaxy", function (t) {
            const i = t.dataset.coords.split(":");
            if (e.Utils.checkPage("galaxy")) e.Ogame.canLoadSystem(i[0], i[1]);
            else {
                let t = "/game/index.php?page=ingame&component=galaxy";
                e.Application.data.OGAMELEGACY && (t = "/game/index.php?page=galaxy"), (a.location = a.location.origin + t + "&galaxy=" + i[0] + "&system=" + i[1] + "&position=" + i[2]);
            }
        }),
        e.fn.extend("parsePlayerId", function (e) {
            var t = e.match(/(player\d+)/);
            return null == t ? "" : t[1];
        }),
        (e.fn.systemGetInfo = function () {
            let t = n.getElementById("galaxytable"),
                a = {},
                i = [],
                r = t.getElementsByClassName("row");
            for (let n = 0, o = r.length; n < o; n++) {
                let o = r[n],
                    s = o.getElementsByClassName("microplanet")[0],
                    l = o.querySelector(".playername .tooltipRel"),
                    d = o.querySelector(".allytag .tooltipRel"),
                    u = o.getElementsByClassName("moon")[0],
                    c = o.getElementsByClassName("position")[0].textContent,
                    p = l ? /player(\d+)/.exec(l.getAttribute("rel").trim())[1] : null,
                    m = l ? l.getAttribute("rel") : null;
                i.push({
                    id: s.dataset.planetId || null,
                    name: s.hasAttribute("rel") ? s.querySelector("#" + s.getAttribute("rel") + " h1 span").textContent.trim() : null,
                    coords: [t.dataset.galaxy, t.dataset.system, c].join(":"),
                    galaxy: t.dataset.galaxy,
                    system: t.dataset.system,
                    position: c,
                    moon: !(!u || !u.hasAttribute("rel")) && { id: u.dataset.moonId, name: u.getElementsByTagName("h1")[0].textContent.trim(), size: u.querySelector("#moonsize").textContent.trim().match(/(\d+)/)[1] },
                    pid: p,
                }),
                    null !== p &&
                        "99999" !== p &&
                        (void 0 === a[p] && (a[p] = { id: p, name: l.parentNode.querySelector("#" + m + " h1 span").textContent.trim(), alliance: d ? /alliance(\d+)/.exec(d.getAttribute("rel").trim())[1] : null }),
                        e.fn.systemPreparePlayer(p, m, o));
            }
            return { planets: i, players: a, galaxy: t.dataset.galaxy, system: t.dataset.system };
        }),
        (e.fn.systemPreparePlayer = function (t, a, i) {
            let n = i.querySelector("#" + a + " > .ListLinks");
            e.Template.get(
                "playerTooltipBase",
                function (e) {
                    n && (e.addEventListener("click", U, !1), n.parentNode.classList.add("uv-t-player-" + t), n.appendChild(e));
                },
                {
                    loading: e.Locale.dict.loadplanets,
                    loader: e.Application.getPath("img/loader.gif"),
                    class: "uv-player-" + t,
                    pclass: "uv-player-planets",
                    rclass: "uv-player-research",
                    hclass: "uv-player-highscore",
                    name: i.querySelector("#" + a + " > h1 > span").textContent.trim(),
                    pid: t,
                }
            );
        }),
        e.Helper.extend("CoordinateSorter", {
            run: function (e, t) {
                return (function (e, t) {
                    return e[0] > t[0] ? 1 : e[0] < t[0] ? -1 : e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : e[2] > t[2] ? 1 : e[2] < t[2] ? -1 : 0;
                })(
                    (e = e.coords.split(":").map(function (e) {
                        return parseInt(e);
                    })),
                    (t = t.coords.split(":").map(function (e) {
                        return parseInt(e);
                    }))
                );
            },
        }),
        e.Helper.extend("DataMapper", {
            uvsToIdb: function (e) {
                var t = e.UvInfo,
                    a = {};
                for (var i in t) {
                    a[i] = { data: [] };
                    for (var n = 0, r = t[i].planets.length; n < r; n++) {
                        var o = t[i].planets[n],
                            s = { id: o.id, coords: o.coords, moon: o.moonP, gal: o.galaxyP, sys: o.systemP, pos: o.positionP, pid: i };
                        a[i].data.push(s);
                    }
                }
                return a;
            },
        }),
        e.Class.add("Mutation", function (t) {
            var i = "function" == typeof (t = t || {}).onStart,
                n = "function" == typeof t.onFail,
                r = function (e) {
                    if (null == t.trueStyles) return !0;
                    for (attr in t.trueStyles) {
                        var a = t.trueStyles[attr];
                        if (e.style[attr] != a) return !1;
                    }
                    return !0;
                },
                o = function (e) {
                    if (null == t.falseStyles) return !0;
                    for (attr in t.falseStyles) {
                        var a = t.falseStyles[attr];
                        if (e.style[attr] == a) return !1;
                    }
                    return !0;
                };
            (this.options = t),
                (this.observe = function () {
                    if (void 0 !== t.page && null != t.page)
                        if ("function" == typeof t.onHit)
                            if (void 0 !== t.target && void 0 !== t.node)
                                if (void 0 === t.test || "function" == typeof t.test)
                                    if ((void 0 !== t.attribute && void 0 !== t.value) || void 0 !== t.test) {
                                        if (e.Utils.checkPage(t.page)) {
                                            i && t.onStart();
                                            var s = t.target,
                                                l = s.nodeType ? s : e.DOM.get(s),
                                                d = a.MutationObserver || a.WebKitMutationObserver || a.MozMutationObserver;
                                            if (d) {
                                                var u = new d(function (e, t) {
                                                    var a = t.options;
                                                    e.forEach(function (e) {
                                                        for (var t = e.addedNodes, i = 0, n = t.length; i < n; i++) {
                                                            var s = t[i];
                                                            if (s.nodeName == a.node.toUpperCase()) {
                                                                var l = !1;
                                                                if ("function" == typeof a.test) l = a.test.call(null, s);
                                                                else {
                                                                    var d = s.getAttribute(a.attribute);
                                                                    l = a.value instanceof RegExp ? a.value.test(d) : d == a.value;
                                                                }
                                                                l && r(s) && o(s) && a.onHit(s);
                                                            }
                                                        }
                                                    });
                                                });
                                                try {
                                                    (u.options = this.options), u.observe(l, { childList: !0 });
                                                } catch (t) {
                                                    8 == t.code ? e.Utils.log("The target you're trying to observe doesn't exist !") : e.Utils.log(t);
                                                }
                                            }
                                        }
                                    } else n && t.onFail("Please define your attribute & value (or use the test function instead)!");
                                else n && t.onFail("The test property should be a callable function, which return true or false!");
                            else n && t.onFail("Please define all required variables (target, node)!");
                        else n && t.onFail("You must defined the onHit callback function!");
                    else n && t.onFail("Please define the page you want to observe!");
                });
        }),
        (e.Class.Observer = function (e) {
            let t = "string" == typeof e ? n.querySelector(e) : e,
                a = [],
                i = [],
                r = [],
                o = [],
                s = [],
                l = [],
                d = [],
                u = (e, t) => {
                    e.call(null, t);
                };
            new MutationObserver((e) => {
                let t = {},
                    n = {},
                    c = {};
                for (let i = e.length; i--; )
                    for (let o = e[i].addedNodes.length; o--; )
                        if (1 === e[i].addedNodes[o].nodeType) {
                            for (let n = a.length; n--; ) e[i].addedNodes[o].id === a[n] && (t[n] = e[i].addedNodes[o]);
                            for (let t = r.length; t--; ) e[i].addedNodes[o].classList.contains(r[t]) && (n[t] = e[i].addedNodes[o]);
                            for (let t = s.length; t--; ) e[i].addedNodes[o].nodeName.toUpperCase() === s[t].toUpperCase() && (e[i].target.classList.contains(l[t]) || e[i].target.id === l[t]) && (c[t] = e[i].addedNodes[o]);
                        }
                for (let e in t) u(i[e], t[e]);
                for (let e in n) u(o[e], n[e]);
                for (let e in c) u(d[e], c[e]);
            }).observe(t, { childList: !0, subtree: !0 }),
                (this.listenToId = (e, t) => {
                    let r = n.getElementById(e);
                    r && u(t, r), a.push(e), i.push(t);
                }),
                (this.listenToClass = (e, t) => {
                    let a = n.getElementsByClassName(e);
                    if (a.length > 0) for (let e = a.length; e--; ) u(t, a[e]);
                    r.push(e), o.push(t);
                }),
                (this.listenToElement = (e, t, a) => {
                    let i = n.getElementsByClassName(t);
                    if (i.length > 0) for (let t = i.length; t--; ) i[t].nodeName.toUpperCase() === e.toUpperCase() && u(a, i[t]);
                    let r = n.getElementById(t);
                    r && r.nodeName.toUpperCase() === e.toUpperCase() && u(a, r), s.push(e), l.push(t), d.push(a);
                });
        }),
        (e.ft.Convert = (function () {
            let t = /(cr\-[a-z]{2}\-\d{1,3}\-[0-9a-z]{40})/,
                a = function (a) {
                    let i = t.exec(a.title)[1],
                        n = i.split("-")[1],
                        r = e.config.apps.ogotcha.url;
                    return void 0 !== e.config.apps.ogotcha.communities[n] && (r += e.config.apps.ogotcha.communities[n]), r + "?CR_KEY=" + i;
                };
            return {
                crRegex: t,
                hitFromMessages: function (t) {
                    let i = n.createElement("a");
                    (i.href = a(t)),
                        (i.target = "_blank"),
                        i.classList.add("uv-convert-ogotcha", "uv-element"),
                        i.addEventListener("click", function (t) {
                            e.PageCom.GoogleAnalytics.sendEvent("convert", "click", "ogotcha");
                        }),
                        t.parentNode.parentNode.appendChild(i);
                },
            };
        })()),
        (e.ft.EventNotification = (function () {
            const t = (t) => (void 0 !== e.Store.data.eventNotification.notificationOffset[t] ? e.Store.data.eventNotification.notificationOffset[t] : e.config.notifications.defaultOffset),
                a = (t, a, n) => {
                    if (2 === a) return !1;
                    const r = i(a, n);
                    return void 0 !== e.Store.data.eventNotification[r] && void 0 !== e.Store.data.eventNotification[r][t] && e.Store.data.eventNotification[r][t];
                },
                i = (e, t) => (0 === e ? (t ? "ownReturning" : "ownArriving") : "otherArriving"),
                n = (e) => {
                    chrome.runtime.sendMessage({ action: "events", data: e });
                };
            return {
                hitFromEventList: (i) => {
                    let r = {
                            events: {},
                            server: {
                                id: e.Application.ogame.community + e.Application.ogame.universeNumber,
                                community: e.Application.ogame.community,
                                universe: e.Application.ogame.universeNumber,
                                timezone: e.Store.data.ogameSettings.timezone,
                                locale: e.Locale.active,
                                useComputerTime: !0 === e.Store.data.eventNotification.useComputerTime,
                                dict: {
                                    title: e.Locale.dict.dnotification_title,
                                    arriving: [e.Locale.dict.dnotification_arriving_friendly, e.Locale.dict.dnotification_arriving_neutral, e.Locale.dict.dnotification_arriving_hostile],
                                    returning: e.Locale.dict.dnotification_returning,
                                    missions: e.Store.data.missionNames,
                                    open: e.Locale.dict.dnotification_open,
                                },
                            },
                        },
                        o = i.querySelectorAll(".eventFleet:not(.partnerInfo),.allianceAttack"),
                        s = 0;
                    for (let i = 0, n = o.length; i < n; i++) {
                        let n = o[i],
                            l = parseInt(n.getAttribute("data-mission-type")),
                            d = r.server.id + "-" + n.id,
                            u = e.Application.data.OGAMELEGACY ? n.querySelector(".countDown") : n.querySelector(".countDown span"),
                            c = 1,
                            p = "true" === n.getAttribute("data-return-flight");
                        if ((u && (u.classList.contains("friendly") ? (c = 0) : u.classList.contains("hostile") && (c = 2)), a(l, c, p))) {
                            const a = parseInt(n.getAttribute("data-arrival-time"));
                            r.events[d] = {
                                id: d,
                                type: l,
                                arrival: 1e3 * a - e.Application.getTimeStampDiff(),
                                arrivalOriginal: 1e3 * a,
                                returning: p,
                                elementID: n.id,
                                relation: c,
                                flightData: {
                                    originFleet: n.querySelector(".originFleet").textContent.trim(),
                                    originCoords: n.querySelector(".coordsOrigin").textContent.trim(),
                                    destFleet: n.querySelector(".destFleet").textContent.trim(),
                                    destCoords: n.querySelector(".destCoords").textContent.trim(),
                                },
                                offset: t(l),
                            };
                        }
                        s++;
                    }
                    s > 0 && n(r);
                },
            };
        })()),
        (e.ft.Favourite = (function () {
            var t = function (t, a) {
                var n = e.DOM.get(t),
                    r = e.DOM.create("li"),
                    o = e.DOM.create("span");
                o.classList.add("btn-del"),
                    o.addEventListener("click", function (t) {
                        i(this.parentNode.dataset.coords), t.stopPropagation(), e.PageCom.GoogleAnalytics.sendEvent("favourite", "click", "delete");
                    }),
                    (r.dataset.coords = a),
                    r.addEventListener("click", function () {
                        e.fn.loadGalaxy(this);
                    }),
                    r.appendChild(e.DOM.text(a)),
                    r.appendChild(o),
                    r.appendChild(e.ft.FleetPageTarget.getSetTargetButton(a, "favourite")),
                    n.appendChild(r);
            };
            let i = function (t) {
                    let a = e.Utils.objectValue(e.Store.data.favourites.favs, "coords", t);
                    a >= 0 && e.Store.data.favourites.favs.splice(a, 1), e.DOM.remove('#UvFavs li[data-coords="' + t + '"]'), e.Store.set("favourites", e.Store.data.favourites, !0);
                },
                r = function (a) {
                    !(function (a) {
                        let i = e.Store.data.favourites.favs;
                        -1 === e.Utils.objectValue(i, "coords", a) && (i.push({ coords: a }), e.Store.set("favourites", e.Store.data.favourites, !0), t("#UvFavs", a));
                    })(this.parentNode.dataset.coords),
                        a.stopPropagation(),
                        e.PageCom.GoogleAnalytics.sendEvent("favourite", "click", "add_favourite");
                },
                o = function () {
                    let t = n.createElement("div");
                    return "yes" === e.Store.data.features.favourites && (t.classList.add("uv-btn-add"), (t.title = e.Locale.dict.addtofavs), t.addEventListener("click", r)), t;
                };
            return {
                init: function (a) {
                    n.body.classList.add("uv-feature-favourite");
                    let i = e.Store.data.favourites.favs.sort(e.Helper.CoordinateSorter.run);
                    e.Template.get(
                        "favouriteButton;favouriteTooltip",
                        function (n, r) {
                            a.appendChild(n), a.appendChild(r), e.Utils.log("UniverseView Debug: HTML Added - Favourite");
                            for (let e = 0, a = i.length; e < a; e++) t("#UvFavs", i[e].coords);
                            s.create("UvFav", "UvFavList", { position: "right", open: "click" });
                        },
                        {}
                    );
                },
                handleGalaxy: function (t, i) {
                    let n = e.DOM.get(".position"),
                        r = /system=(\d{1,3})&position=(\d{1,2})/.exec(a.location.href);
                    for (let e = 0, a = n.length; e < a; e++) {
                        let a = n[e];
                        (a.style.cursor = "pointer"),
                            (a.dataset.coords = [t, i, a.textContent.trim()].join(":")),
                            a.appendChild(o()),
                            r && a.textContent.trim() === r[2] && i === r[1] && (a.classList.contains("UvFavSelected") || a.classList.add("UvFavSelected"));
                    }
                },
                getAddFavouriteButton: o,
            };
        })()),
        (e.ft.FleetPageTarget = (function () {
            const t = function (e) {
                    a(this.parentNode.getAttribute("data-coords"), this.getAttribute("data-type"));
                },
                a = (t, a, i) => {
                    const r = t.split(":"),
                        o = void 0 === a ? 1 : +a,
                        s = void 0 === i ? 1 : +i;
                    if (e.Utils.checkPage("fleet2")) {
                        let e = n.getElementById("galaxy");
                        (e.value = r[0]),
                            (n.getElementById("system").value = r[1]),
                            (n.getElementById("position").value = r[2]),
                            3 === o ? n.getElementById("mbutton").click() : 2 === o ? n.getElementById("dbutton").click() : n.getElementById("pbutton").click(),
                            e.dispatchEvent(new Event("change"));
                    } else
                        e.Utils.checkPage("fleetdispatch")
                            ? ((n.getElementById("galaxy").value = r[0]), (n.getElementById("system").value = r[1]), (n.getElementById("position").value = r[2]), e.PageCom.FleetDispatch.updateTarget(o))
                            : e.fn.loadFleetDispatch({ galaxy: r[0], system: r[1], position: r[2], type: o, mission: s });
                },
                i = () => {
                    const e = n.getElementById("continueToFleet2");
                    e && e.focus();
                };
            return {
                init: () => {
                    let a = (n.querySelector("#fleet2 .content .briefing") || n.querySelector("#inhalt .content .briefing")).parentNode;
                    e.Template.get(
                        "fleetPagePlanets",
                        function (i) {
                            const n = e.ft.PlanetList.getPlanets();
                            for (let a = 0, r = n.length; a < r; a++) {
                                const r = n[a];
                                e.Template.get(
                                    "fleetPagePlanet",
                                    function (e) {
                                        if (
                                            ((e.dataset.coords = r.coords),
                                            (e.dataset.name = r.name),
                                            e.querySelector(".uv-fleetpage-link-planet").addEventListener("click", t),
                                            e.querySelector(".uv-fleetpage-link-debris").addEventListener("click", t),
                                            !0 === r.moon)
                                        ) {
                                            let a = e.querySelector(".uv-fleetpage-link-moon");
                                            a.classList.add("exists"), a.addEventListener("click", t);
                                        }
                                        i.lastChild.appendChild(e);
                                    },
                                    { name: r.name, coords: r.coords }
                                );
                            }
                            a.insertBefore(i, a.lastChild);
                        },
                        { planets: n.getElementById("countColonies").textContent }
                    ),
                        setTimeout(i, 100);
                },
                setFleetTarget: a,
                getSetTargetButton: (t, i) => {
                    let r = n.createElement("div");
                    return (
                        "yes" === e.Store.data.features.fleetPage &&
                            ((r.dataset.coords = t),
                            (r.dataset.label = i),
                            r.classList.add("uv-btn-fleet"),
                            r.addEventListener("click", function (t) {
                                a(this.dataset.coords), t.stopPropagation(), e.PageCom.GoogleAnalytics.sendEvent("fleetpagetarget", "click", "select_target_" + this.dataset.label);
                            })),
                        r
                    );
                },
            };
        })()),
        (e.ft.GalaxyDebris = {
            init: function () {
                let t = e.DOM.getAll(".debris .tooltipRel");
                for (let a = 0, i = t.length; a < i; a++) {
                    let i = t[a].parentNode,
                        r = t[a],
                        o = /(\d+)/,
                        s = i.getElementsByClassName("debris-content"),
                        l = { metal: o.exec(s[0].textContent.replace(/\./g, ""))[0], crystal: o.exec(s[1].textContent.replace(/\./g, ""))[0] };
                    for (let t in l) {
                        let a = n.createElement("div"),
                            i = n.createTextNode(e.Utils.shortenNumber(l[t]));
                        a.appendChild(i), r.appendChild(a);
                    }
                    r.classList.add("uv-galaxy-debris", "uv-touched");
                }
                let a = n.querySelector(".expeditionDebrisSlotBox");
                if (a) {
                    let e = a.querySelector(".ListLinks");
                    e && ((e = e.cloneNode(!0)).classList.add("uv-element", "uv-galaxy-expo-debris"), a.insertBefore(e, a.querySelector("h3.title")));
                }
            },
        }),
        (e.ft.GalaxyRank = {
            init: function () {
                let e = n.querySelectorAll(".allytag, .playername");
                for (let t = 0, a = e.length; t < a; t++) {
                    let a = e[t],
                        i = a.querySelector(".rank a");
                    if (i) {
                        let e = i.cloneNode(!0);
                        e.classList.add("uv-galaxy-rank", "uv-element"), a.appendChild(e);
                    }
                }
            },
        }),
        (e.ft.HighScore =
            ((E = function () {
                for (var t = e.DOM.getAll("#stat_list_content #ranks tbody tr"), a = 0, i = t.length; a < i; a++) {
                    var n = t[a],
                        r = e.DOM.getOne(".sendMail", n);
                    if ((n.classList.add("uv-highscore-player"), r)) {
                        var o,
                            s = P.getElementById(r.getAttribute("data-playerid"));
                        s &&
                            null !== (o = s.getAttribute("status")) &&
                            (e.DOM.getOne(".name", n).appendChild(e.DOM.text("(" + o + ")")),
                            /v/.test(o) && n.classList.add("uv-highscore-vmode"),
                            /i/.test(o) && n.classList.add("uv-highscore-inactive-short"),
                            /I/.test(o) && n.classList.add("uv-highscore-inactive-long"));
                    }
                }
            }),
            {
                hit: function (e) {
                    e.hasAttribute("data-uv-hit") ||
                        (P
                            ? E()
                            : o.fetch(
                                  o.PLAYERS,
                                  function (e) {
                                      (P = e), E();
                                  },
                                  !0
                              ),
                        e.setAttribute("data-uv-hit", 1));
                },
            })),
        (e.ft.IdleTimer = (function () {
            const t = (t) => {
                    if (null !== e.Application.ogame.timeStamp) {
                        const i = (Date.now() + e.Application.getTimeStampDiff()) / 1e3;
                        let r = t.objects,
                            o = t.events;
                        for (const t in r) {
                            const s = r[t];
                            if (void 0 !== o[s.coords]) {
                                let e = o[s.coords].length;
                                for (; e--; ) {
                                    const n = o[s.coords][e];
                                    s.type === n.type && i >= n.timeStamp && ((s.timeStamp = n.timeStamp), a(t, s.type, s.coords, n.timeStamp), o[s.coords].splice(e, 1));
                                }
                            }
                            if (null !== s.timeStamp) {
                                const a = "moon" === s.type ? n.querySelector('a.moonlink[href*="' + t + '"] .uv-idletimer-timer') : n.querySelector("#planet-" + t + " .planetlink .uv-idletimer-timer");
                                if (a) {
                                    let t = i - s.timeStamp;
                                    const n = t < 0 ? 0 : t,
                                        r = Math.floor(n / 60),
                                        o = Math.floor(n - 60 * r),
                                        l = a.classList.contains("expired");
                                    if (r >= e.Store.data.idleTimer.expirationTime && e.Store.data.idleTimer.expirationTime > 0) l || a.classList.add("expired"), (a.dataset.idletimerTime = "");
                                    else {
                                        l && a.classList.remove("expired");
                                        let t = "" + r;
                                        e.Store.data.idleTimer.showSeconds && (t += ":" + (o < 10 ? "0" : "") + o), (a.dataset.idletimerTime = t);
                                    }
                                }
                            }
                        }
                    }
                },
                a = (e, t, a, i) => {
                    chrome.runtime.sendMessage({ action: "idleTimer:updateObject", data: { ID: e, type: t, coords: a, timeStamp: i } });
                },
                i = () => {
                    const t = n.querySelector(".feature-option-state-btn");
                    "yes" === e.Store.data.features.idleTimer
                        ? ((e.Store.data.features.idleTimer = "no"), t.classList.remove("active"), e.DOM.remove(".uv-idletimer-timer"))
                        : ((e.Store.data.features.idleTimer = "yes"), t.classList.add("active")),
                        e.Store.set("features", e.Store.data.features, !0);
                };
            return {
                init: (e, i, n, r) => {
                    a(e, i, n, r),
                        chrome.runtime.sendMessage({ action: "idleTimer:getData" }, (e) => {
                            t(e);
                        });
                },
                updateTimers: t,
                hitFromPlanetList: (t) => {
                    ((e) => {
                        let t = [];
                        const a = e.querySelectorAll('div[id^="planet-"]');
                        for (let e = 0, i = a.length; e < i; e++) {
                            const i = a[e].querySelector(".planetlink .planet-koords").textContent.trim().slice(1, -1),
                                n = /planet-(\d+)/.exec(a[e].id)[1];
                            if (n) {
                                t.push({ ID: n, type: "planet", coords: i, timeStamp: null });
                                const r = a[e].querySelector(".moonlink");
                                r && t.push({ ID: /&cp=(\d+)/.exec(r.href)[1], type: "moon", coords: i, timeStamp: null });
                            }
                        }
                        chrome.runtime.sendMessage({ action: "idleTimer:registerObjects", data: t });
                    })(t),
                        ((e) => {
                            let t = e.querySelectorAll(".moonlink, .planetlink");
                            for (let e = 0, a = t.length; e < a; e++) {
                                let a = n.createElement("span");
                                a.classList.add("uv-idletimer-timer", "uv-element", "expired"), (a.dataset.idletimerTime = ""), t[e].appendChild(a);
                            }
                        })(t),
                        ((t) => {
                            let a = n.createElement("div"),
                                r = n.createElement("span"),
                                o = n.createElement("div");
                            a.classList.add("uv-idletimer-toggle", "uv-element"),
                                o.classList.add("feature-option-state-btn"),
                                "yes" === e.Store.data.features.idleTimer && o.classList.add("active"),
                                r.appendChild(n.createTextNode(e.Locale.dict.idletimer_toggle_label)),
                                a.appendChild(o),
                                a.appendChild(r),
                                a.addEventListener("click", i),
                                t.parentNode.appendChild(a);
                        })(t);
                },
                hitFromEventList: (e) => {
                    const t = e.querySelectorAll(".eventFleet");
                    let a = {};
                    for (let e = 0, i = t.length; e < i; e++) {
                        const i = t[e],
                            n = "true" === i.getAttribute("data-return-flight"),
                            r = i
                                .querySelector(n ? ".coordsOrigin" : ".destCoords")
                                .textContent.trim()
                                .slice(1, -1);
                        void 0 === a[r] && (a[r] = []), a[r].push({ type: null !== i.querySelector((n ? ".originFleet" : ".destFleet") + " .moon") ? "moon" : "planet", timeStamp: parseInt(i.getAttribute("data-arrival-time")) });
                    }
                    chrome.runtime.sendMessage({ action: "idleTimer:updateEvents", data: a });
                },
            };
        })()),
        (e.ft.Militairy = {
            handle: (O = function (t, a, i) {
                if ("" != e.Application.data.highScore) {
                    var n = null;
                    try {
                        if (!(n = e.DOM.get("#" + a, e.Application.data.highScore))) throw "Damn you FireFox";
                    } catch (t) {
                        for (var r = e.DOM.get("player", e.Application.data.highScore), o = 0, s = r.length; o < s; o++)
                            if (r[o].getAttribute("id") == a) {
                                n = r[o];
                                break;
                            }
                    }
                    if (n) {
                        var l = { score: e.Utils.formatNumber(n.getAttribute("score")), shipcount: e.Utils.formatNumber(n.getAttribute("ships") || "0"), militairy: e.Locale.dict.militairy, ships: e.Locale.dict.ships };
                        e.Template.get(
                            "militairy",
                            function (i) {
                                for (var n = e.DOM.getAll(t), r = 0, o = n.length; r < o; r++) n[r].appendChild(i.cloneNode(!0));
                                e.PageCom.Tipped.refresh(".uv-t-player" + a);
                            },
                            l
                        );
                    }
                } else
                    (void 0 === i || i < 5) &&
                        setTimeout(function () {
                            O(t, a, ++i || 0);
                        }, 50);
            }),
        }),
        (e.ft.MoonDestruction =
            ((L = function () {
                var t = e.DOM.get("#uv_md_size").dataset.moonsize,
                    a = e.DOM.get("#uv_md_input").value,
                    i = j(parseInt(t), a);
                (e.DOM.get("#uv_md_moon").textContent = i.moon + " %"), (e.DOM.get("#uv_md_rips").textContent = i.rips + " %"), e.PageCom.GoogleAnalytics.sendEvent("moondestruction", "click", "calculate");
            }),
            (j = function (e, t) {
                var a = (100 - Math.sqrt(e)) * Math.sqrt(t),
                    i = Math.sqrt(e) / 2;
                return { moon: a.toFixed(2), rips: i.toFixed(2) };
            }),
            {
                init: function () {
                    var t = { coords: e.Locale.dict.coords, moonsize: e.Locale.dict.moonsize, rips: e.Locale.dict.rips, popchance: e.Locale.dict.moonpop, ripchance: e.Locale.dict.riploss, destroy: e.Locale.dict.popmoon };
                    e.Template.get(
                        "moonDestruction",
                        function (t) {
                            document.body.appendChild(t),
                                e.DOM.get("#uv_md_input").addEventListener("keyup", L),
                                e.DOM.get("#uv_md_start").addEventListener("click", function () {
                                    var t = e.DOM.get("#uv_md_co").textContent,
                                        a = e.DOM.get("#uv_md_input").value;
                                    (t = (t = t.substring(1, t.length - 1)).split(":")),
                                        e.PageCom.GoogleAnalytics.sendEvent("moondestruction", "click", "fleetpage"),
                                        e.fn.loadFleetDispatch({ galaxy: t[0], system: t[1], position: t[2], type: 3, mission: 9, am214: a });
                                });
                        },
                        t
                    );
                },
                handleGalaxy: function () {
                    for (var t = e.DOM.getAll(".row .moon .galaxyTooltip"), a = 0, i = t.length; a < i; a++) {
                        var n = t[a],
                            r = e.DOM.create("li"),
                            o = e.DOM.create("a"),
                            s = e.DOM.create("div"),
                            l = e.DOM.getOne(".ListLinks", n);
                        (o.dataset.moonsize = e.DOM.getOne("#moonsize", n).textContent),
                            (o.dataset.moonname = e.DOM.getOne("h1", n).textContent),
                            (o.dataset.coords = e.DOM.getOne("#pos-moon", n).textContent),
                            (o.style.cursor = "pointer"),
                            o.appendChild(e.DOM.text(e.Locale.dict.calcmd)),
                            (o.onclick = function () {
                                var t = this.dataset.moonsize,
                                    a = this.dataset.coords;
                                (e.DOM.get("#uv_md_size").dataset.moonsize = t),
                                    (e.DOM.get("#uv_md_size").textContent = t),
                                    (e.DOM.get("#uv_md_co").textContent = a),
                                    L(),
                                    e.PageCom.JQuery.dialog("#uv_md", { zIndex: 4e3, draggable: !0, title: e.Locale.dict.md + " : " + this.dataset.moonname }),
                                    e.PageCom.GoogleAnalytics.sendEvent("moondestruction", "click", "open");
                            }),
                            r.appendChild(o),
                            (s.className = "splitLine"),
                            l.appendChild(s),
                            l.appendChild(r);
                    }
                },
            })),
        (e.ft.PlanetList = (function () {
            let t = [],
                a = !1,
                i = function (a) {
                    for (let i = 0, r = a.children.length; i < r; i++) {
                        let r = a.children[i],
                            o = r.id.split("-")[1];
                        t.push({ id: o, name: r.querySelector(".planet-name").textContent, coords: /\d{1,2}:\d{1,3}:\d{1,2}/.exec(r.querySelector(".planet-koords").textContent)[0], moon: null !== r.querySelector(".moonlink") }),
                            "yes" === e.Store.data.features.planetFields && n(r);
                    }
                },
                n = function (t) {
                    let a = t.children[0],
                        i = /\((.*)?\d{1,3}(.*)?\/\d{2,3}\)/.exec(a.title);
                    if (i) {
                        let t = e.DOM.create("span");
                        t.classList.add("uv-planetlist-fields", "uv-element"), t.appendChild(e.DOM.fromHTML(i[0])), a.appendChild(t);
                    }
                };
            return {
                hit: function (e) {
                    !1 === a && ((a = !0), i(e));
                },
                getPlanets: function () {
                    return t;
                },
            };
        })()),
        (e.ft.PlayerPlanets = (function () {
            let t = function (t) {
                return e.Ogame.canLoadSystem(this.getAttribute("data-galaxy"), this.getAttribute("data-system"), t), t.preventDefault(), !1;
            };
            return {
                handle: function (a, i, r, o) {
                    let s = n.createElement("div"),
                        l = e.fn.getHomePlanet(i),
                        d = [];
                    s.classList.add("splitLine");
                    for (let t = 0, a = i.length; t < a; t++) {
                        let a = i[t].coords;
                        i[t].moon && (a += " (m)"), l && i[t].id === l && (a += " " + e.Locale.dict.hp);
                        let s = n.createElement("li"),
                            u = n.createElement("a");
                        (u.id = i[t].galaxy + "g" + i[t].system + "s" + i[t].position + "p"),
                            u.classList.add("uv_g_planet"),
                            u.setAttribute("data-galaxy", i[t].galaxy),
                            u.setAttribute("data-system", i[t].system),
                            i[t].galaxy === r && i[t].system === o && u.classList.add("uv_g_planet_active");
                        let c = t + 1 + ": " + a,
                            p = n.createTextNode(c);
                        u.appendChild(p), s.appendChild(u), d.push(s);
                    }
                    let u = n.querySelectorAll(a);
                    for (let e = 0, a = u.length; e < a; e++) {
                        let a = n.createElement("ul");
                        a.appendChild(s.cloneNode());
                        for (let e = 0, i = d.length; e < i; e++) {
                            let i = d[e].cloneNode(!0);
                            i.querySelector("a").addEventListener("click", t), a.appendChild(i);
                        }
                        u[e].appendChild(a);
                    }
                },
            };
        })()),
        (e.ft.QuickSearch = (function () {
            let t = function (t) {
                    let a,
                        i = "uv-q-box-" + t;
                    e.Template.get(
                        "loadingSmall",
                        function (e) {
                            a = e;
                        },
                        { loader: e.Application.getPath("img/loader.gif") }
                    ),
                        (this.element = n.getElementById(i)),
                        (this.clear = function () {
                            e.DOM.clear("#" + i);
                        }),
                        (this.fill = function (e) {
                            this.clear();
                            for (let t = 0, a = e.length; t < a; t++) this.element.appendChild(e[t]);
                        }),
                        (this.setLoader = function () {
                            this.fill([a]);
                        });
                },
                a = {},
                i = function () {
                    for (let e in a) a[e].clear();
                },
                r = function (t, i) {
                    a.second.clear(), a.third.clear();
                    let r = t.value;
                    if (r.length > 1)
                        if ((a.first.setLoader(), "P" === i)) u(r);
                        else {
                            p(
                                r,
                                [
                                    { tag: "name", value: r, exact: !1 },
                                    { tag: "tag", value: r, exact: !1 },
                                ],
                                "first"
                            );
                        }
                    else {
                        let t = n.createElement("li");
                        t.appendChild(n.createTextNode(e.Locale.dict.qscondition)), a.first.fill([t]);
                    }
                },
                s = function (e, t) {
                    let a = [];
                    for (let i = 0, n = e.length; i < n; i++) {
                        let n = !1,
                            r = e[i];
                        for (let e = 0, a = t.length; e < a; e++) {
                            let a = t[e];
                            if (new RegExp(a.exact ? "^" + a.value + "$" : a.value, "i").test(r.getAttribute(a.tag))) {
                                n = !0;
                                break;
                            }
                        }
                        n && a.push(r);
                    }
                    return a;
                },
                l = function (e, t) {
                    return e.sort(function (e, a) {
                        return (e = e.getAttribute(t).toLowerCase()) > (a = a.getAttribute(t).toLowerCase()) ? 1 : e < a ? -1 : 0;
                    });
                },
                d = function (e) {
                    let t = e.parentNode.children;
                    for (let e = 0, a = t.length; e < a; e++) t[e].classList.remove("selected");
                    e.classList.add("selected");
                },
                u = function (e) {
                    c("player", [{ tag: "name", value: e, exact: !1 }], "first");
                },
                c = function (t, i, r) {
                    a[r].setLoader(),
                        o.fetch(
                            o.PLAYERS,
                            function (o) {
                                let u = s(o.getElementsByTagName(t), i),
                                    c = [];
                                for (let t = 0, a = (u = l(u, "name")).length; t < a; t++) {
                                    let a = n.createElement("li"),
                                        i = u[t].hasAttribute("status") ? " (" + u[t].getAttribute("status") + ")" : "",
                                        r = n.createTextNode(u[t].getAttribute("name") + i),
                                        o = n.createElement("a");
                                    o.classList.add("uv-link-highscore"),
                                        (o.href = "index.php?page=highscore&searchRelId=" + u[t].getAttribute("id")),
                                        o.addEventListener("click", function (t) {
                                            t.stopPropagation(), e.PageCom.GoogleAnalytics.sendEvent("quicksearch", "click", "highscore_player");
                                        }),
                                        (a.dataset.pid = u[t].getAttribute("id")),
                                        (a.dataset.name = u[t].getAttribute("name")),
                                        a.addEventListener("click", function (t) {
                                            m.call(this, t), d(this), e.PageCom.GoogleAnalytics.sendEvent("quicksearch", "click", "player_planet");
                                        }),
                                        a.appendChild(r),
                                        a.appendChild(e.ft.Spreading.getAddPlayerButton()),
                                        a.appendChild(o),
                                        a.classList.add("uv-q-player-item"),
                                        c.push(a);
                                }
                                a[r].fill(c),
                                    e.PageCom.Tipped.create(".uv-q-player-item .uv-btn-add", e.Locale.dict.playertospreading, { hook: "topmiddle", radius: { size: 3 }, skin: "cloud" }),
                                    e.PageCom.Tipped.create(".uv-q-player-item .uv-link-highscore", e.Locale.dict.viewhighscore, { hook: "topmiddle", radius: { size: 3 }, skin: "cloud" });
                            },
                            !0
                        );
                },
                p = function (t, i, r) {
                    a[r].setLoader(),
                        o.fetch(
                            o.ALLIANCES,
                            function (t) {
                                let o = s(t.getElementsByTagName("alliance"), i),
                                    u = [];
                                for (let t = 0, i = (o = l(e.Utils.nodeListToArray(o), "tag")).length; t < i; t++) {
                                    let i = n.createElement("li"),
                                        r = n.createTextNode(o[t].getAttribute("tag") + " : " + o[t].getAttribute("name")),
                                        s = n.createElement("a");
                                    s.classList.add("uv-link-highscore", "alliance"),
                                        (s.href = "index.php?page=highscore&category=2&searchRelId=" + o[t].getAttribute("id")),
                                        s.addEventListener("click", function (t) {
                                            t.stopPropagation(), e.PageCom.GoogleAnalytics.sendEvent("quicksearch", "click", "highscore_alliance");
                                        }),
                                        (i.dataset.allianceid = o[t].getAttribute("id")),
                                        i.addEventListener("click", function (t) {
                                            var i;
                                            (i = this.dataset.allianceid),
                                                c("player", [{ tag: "alliance", value: i, exact: !0 }], "second"),
                                                d(this),
                                                a.third.clear(),
                                                e.PageCom.GoogleAnalytics.sendEvent("quicksearch", "click", "alliance_player");
                                        }),
                                        i.appendChild(r),
                                        i.appendChild(s),
                                        i.classList.add("uv-q-alliance-item"),
                                        u.push(i);
                                }
                                a[r].fill(u), e.PageCom.Tipped.create(".uv-q-alliance-item .uv-link-highscore", e.Locale.dict.viewhighscore, { hook: "rightmiddle", radius: { size: 3 }, skin: "cloud" });
                            },
                            !0
                        );
                },
                m = function (t) {
                    let i = "uv-q-box-first" === this.parentNode.id ? "second" : "third",
                        r = this.dataset.pid;
                    a[i].setLoader();
                    let o = {};
                    (o[r] = {}),
                        chrome.runtime.sendMessage({ action: "API", call: "universe:findPlanetsByPlayers", parameters: [o, null, null] }, function (t) {
                            let o = t.players[r].planets,
                                s = e.fn.getHomePlanet(o),
                                l = [];
                            o.sort(e.Helper.CoordinateSorter.run);
                            for (let t = 0, a = o.length; t < a; t++) {
                                let a = n.createElement("li"),
                                    i = o[t],
                                    r = t + 1 + ": " + i.coords;
                                i.moon && (r += " (m)"),
                                    s && i.id === s && (r += " " + e.Locale.dict.hp),
                                    (a.dataset.coords = i.coords),
                                    a.addEventListener("click", function () {
                                        e.fn.loadGalaxy(this), e.PageCom.GoogleAnalytics.sendEvent("quicksearch", "click", "planet");
                                    }),
                                    a.appendChild(n.createTextNode(r)),
                                    a.appendChild(e.ft.FleetPageTarget.getSetTargetButton(i.coords, "quicksearch")),
                                    "yes" === e.Store.data.features.favourites && a.appendChild(e.ft.Favourite.getAddFavouriteButton()),
                                    a.classList.add("uv-q-planet-item"),
                                    l.push(a);
                            }
                            a[i].fill(l), e.PageCom.Tipped.create(".uv-q-planet-item .uv-btn-add", e.Locale.dict.addtofavs, { hook: "rightmiddle", radius: { size: 3 }, skin: "cloud" });
                        });
                };
            return {
                init: function (o) {
                    n.body.classList.add("uv-feature-quicksearch");
                    let s = { search: e.Locale.dict.qsinfo, condition: e.Locale.dict.qscondition };
                    e.Template.get(
                        "quickSearch",
                        function (s) {
                            o.appendChild(s), e.Utils.log("UniverseView Debug: HTML Added - QuickSeach");
                            let l = n.getElementById("UvQsP"),
                                d = n.getElementById("UvQsA");
                            l.addEventListener("click", function () {
                                this.parentNode.classList.add("uv-q-search-player"),
                                    this.parentNode.classList.remove("uv-q-search-alliance"),
                                    e.Store.set("quickSearch", "P"),
                                    i(),
                                    e.PageCom.GoogleAnalytics.sendEvent("quicksearch", "click", "search_player");
                            }),
                                d.addEventListener("click", function () {
                                    this.parentNode.classList.add("uv-q-search-alliance"),
                                        this.parentNode.classList.remove("uv-q-search-player"),
                                        e.Store.set("quickSearch", "A"),
                                        i(),
                                        e.PageCom.GoogleAnalytics.sendEvent("quicksearch", "click", "search_alliance");
                                }),
                                "A" === e.Store.data.quickSearch ? d.parentNode.classList.add("uv-q-search-alliance") : l.parentNode.classList.add("uv-q-search-player"),
                                n.getElementById("uv_q_input").addEventListener("keyup", function () {
                                    r(this, e.Store.data.quickSearch);
                                }),
                                n.getElementById("uv_q_input").addEventListener("click", function (t) {
                                    n.getElementById("uv_q_result").classList.remove("uv-hide"), e.PageCom.GoogleAnalytics.sendEvent("quicksearch", "click", "open");
                                }),
                                n.querySelector("#uv-q-connect .btn-del").addEventListener("click", function () {
                                    n.getElementById("uv_q_result").classList.add("uv-hide");
                                }),
                                (a.first = new t("first")),
                                (a.second = new t("second")),
                                (a.third = new t("third"));
                        },
                        s
                    );
                },
                initOfficers: function (e) {
                    let t = e.getElementsByTagName("img");
                    for (let e = 0, a = t.length; e < a; e++) (t[e].height = "inherit"), (t[e].style.height = "inherit");
                    let a = e.getElementsByTagName("a");
                    for (let e = 0, t = a.length; e < t; e++)
                        (a[e].style.height = "21px"),
                            a[e].addEventListener("mouseover", function () {
                                (this.style.height = "32px"), (this.parentNode.style.height = "32px"), (this.parentNode.style.top = "26px");
                            }),
                            a[e].addEventListener("mouseout", function () {
                                (this.style.height = "21px"), (this.parentNode.style.height = "23px"), (this.parentNode.style.top = "37px");
                            });
                    (e.style.height = "23px"), (e.style.padding = "0 3px"), (e.style.left = "811px");
                },
            };
        })()),
        (e.ft.Raid = {
            hitEspionagePreview: function (t) {
                let a = t.querySelectorAll(e.Application.data.OGAMELEGACY ? '.msg_content .compacting .fright[title*="page=fleet1"]' : '.msg_content .compacting .fright[title*="component=fleetdispatch"]');
                for (let t = 0, i = a.length; t < i; t++)
                    if (a[t].title) {
                        let i = n.createElement("div"),
                            r = n.createElement("span");
                        r.classList.add("ctn", "ctn4"), r.appendChild(e.DOM.fromHTML(a[t].title.replace(/<br\/?>/g, " | ")));
                        const o = r.querySelectorAll("a");
                        for (let t = 0, a = o.length; t < a; t++) {
                            const a = /&am(\d+)=(\d+)/.exec(o[t].href);
                            if (a && a.length >= 3) {
                                if ("202" === a[1]) {
                                    const i = Math.ceil(parseInt(a[2]) / 2),
                                        s = n.createElement("a"),
                                        l = e.Store.data.espionageRaid[219];
                                    (s.href = o[t].href.replace(/am202=\d+/, "am219=" + (i + l))),
                                        s.appendChild(n.createTextNode(`${e.Store.data.techNames[219]}: ${e.Utils.formatNumber(i)}`)),
                                        s.setAttribute("data-extra-count", "+" + l),
                                        r.appendChild(s),
                                        r.appendChild(n.createTextNode(" | "));
                                    const d = Math.ceil(parseInt(a[2]) / 2),
                                        u = n.createElement("a"),
                                        c = e.Store.data.espionageRaid[218];
                                    (u.href = o[t].href.replace(/am202=\d+/, "am218=" + (d + c))),
                                        u.appendChild(n.createTextNode(`${e.Store.data.techNames[218]}: ${e.Utils.formatNumber(d)}`)),
                                        u.setAttribute("data-extra-count", "+" + c),
                                        r.appendChild(u);
                                }
                                (o[t].href = o[t].href.replace(/am\d+=\d+/, `am${a[1]}=${parseInt(a[2]) + e.Store.data.espionageRaid[a[1]]}`)), o[t].setAttribute("data-extra-count", "+" + e.Store.data.espionageRaid[a[1]]);
                            }
                        }
                        i.appendChild(r),
                            i.classList.add("compacting", "uv-element", "uv-raid-wrapper", "clearfix"),
                            e.Application.data.AGO ? a[t].parentNode.parentNode.appendChild(i) : a[t].parentNode.parentNode.insertBefore(i, a[t].parentNode.nextElementSibling);
                    }
            },
        }),
        (e.ft.RefreshClock = {
            refresh: function () {
                let t = n.getElementById("uv_g_r_clock");
                if (null !== t) {
                    e.DOM.clear("#uv_g_r_clock");
                    let a = n.querySelector(".OGameClock").textContent;
                    t.appendChild(n.createTextNode(a));
                }
            },
            init: function () {
                let t = e.DOM.getOne("#galaxyHeader form");
                if (t) {
                    let a = e.DOM.create("div");
                    (a.id = "uv_g_r_clock"), a.classList.add("uv-element"), t.appendChild(a);
                }
            },
        }),
        (e.ft.Research = (function () {
            let t = function (e) {
                    let t = {};
                    for (let a = 0, i = e.length; a < i; a++) {
                        let i = e[a];
                        t[i.className.match(/research(\d{3})/)[1]] = i.parentNode.parentNode.querySelector(".fright").textContent;
                    }
                    i(t);
                },
                a = function (t) {
                    let a = {};
                    for (let i = 0, n = t.length; i < n; i++) {
                        let n = t[i],
                            r = n.querySelector(".detail_list_txt").textContent;
                        null !== e.Store.data.techNamesReversed && void 0 !== e.Store.data.techNamesReversed[r] && (a[e.Store.data.techNamesReversed[r]] = n.querySelector(".fright").textContent);
                    }
                    i(a);
                },
                i = function (e) {
                    if (Object.keys(e).length > 0) {
                        let t = n.querySelector(".detail_txt span[class^=status_abbr_]").textContent.trim();
                        chrome.runtime.sendMessage({ action: "API", call: "universe:updatePlayerResearch", parameters: [t, e] });
                    }
                };
            return {
                init: function () {},
                hit: function (e) {
                    let i = n.querySelectorAll(".detail_list_el .research_image > img");
                    if (i.length > 0) t(i);
                    else {
                        let e = n.querySelectorAll('.detail_list[data-type="research"] li.detail_list_el');
                        e.length > 0 && a(e);
                    }
                },
                handle: function (t, a, i) {
                    e.Template.get(
                        "research",
                        function (e) {
                            let a = n.querySelectorAll(t);
                            for (let t = 0, i = a.length; t < i; t++) a[t].appendChild(e.cloneNode(!0));
                        },
                        {
                            count: i,
                            astro: e.fn.calculatePlanets(a[124]) || "?",
                            spio: a[106] || "?",
                            w: a[109] || "?",
                            s: a[110] || "?",
                            a: a[111] || "?",
                            c: a[115] || "?",
                            i: a[117] || "?",
                            h: a[118] || "?",
                            planets: e.Locale.dict.planets,
                            combat: e.Locale.dict.combat,
                            drives: e.Locale.dict.drives,
                            espio: e.Locale.dict.espionage,
                        }
                    );
                },
            };
        })()),
        (e.ft.Simulate = (function () {
            let t = 0,
                i = /(sr\-[a-z]{2}\-\d{1,3}\-[0-9a-z]{40})/,
                r = function (e) {
                    return "utm_source=ogame&utm_medium=universeview&utm_content=" + encodeURIComponent(e) + "&utm_campaign=simulate";
                },
                o = function (t) {
                    let n = i.exec(t.title)[1],
                        o = n.split("-")[1],
                        s = e.config.apps.trashsim.url;
                    return void 0 !== e.config.apps.trashsim.communities[o] && (s += e.config.apps.trashsim.communities[o]), s + "?SR_KEY=" + n + "&" + r("espionage message") + "#prefill=" + a.btoa(JSON.stringify(d(0)));
                },
                s = function (a, i) {
                    let n = {},
                        r = [],
                        o = e.Store.data.techNames,
                        s = /\d:\d{1,3}:\d{1,2}/,
                        l = function (e, a, i) {
                            let o = !1,
                                l = !1,
                                d = 0,
                                u = "uv-simulate-trashsim" + ++t,
                                c = {};
                            if (!1 === i) {
                                let e,
                                    t = new RegExp("(" + r.join("|") + '):</td>\\s+<td class="value">(\\d+(?:(?:\\.\\d{3})+)?)', "gm");
                                for (; (e = t.exec(a.title)); ) c[n[e[1]]] = { count: e[2].replace(/\./g, "") };
                            } else (c = i), (d = 1);
                            let p = s.exec(e.querySelector(".coordsOrigin").textContent),
                                m = s.exec(e.querySelector(".destCoords").textContent);
                            return (
                                p && (o = p[0]),
                                m && (l = m[0]),
                                (a.title = a.title.replace(
                                    /<\/div>\s*$/,
                                    '<div class="splitLine"></div><a href="#" id="' +
                                        u +
                                        '" class="uv-simulate-trashsim uv-element" data-acs="' +
                                        d +
                                        '" data-origin="' +
                                        o +
                                        '" data-destination="' +
                                        l +
                                        "\" data-fleet='" +
                                        JSON.stringify(c) +
                                        '\' onclick="universeview.actions.Simulate.triggerEventFleetSimulation(this, event);"><div class="uv-simulate-party" data-party="0"></div><div class="uv-simulate-party" data-party="1"></div></a></div>'
                                )),
                                { origin: o, destination: l, fleet: c }
                            );
                        };
                    if (o) {
                        for (let e in o) e > 200 && e < 300 && ((n[o[e]] = e), r.push(o[e]));
                        if (r.length > 0) {
                            let e = a.querySelectorAll("#eventContent tr.eventFleet, #eventContent tr.allianceAttack, #phalanxEventContent div.eventFleet, #phalanxEventContent div.partnerInfo"),
                                t = {},
                                n = {};
                            for (let a = 0, r = e.length; a < r; a++) {
                                let r = e[a].querySelector(i + " span"),
                                    o = e[a].classList.contains("partnerInfo");
                                if (r && r.title) {
                                    let i = e[a].querySelector('a[rel*="union"]');
                                    if (i) t[i.rel] = { fleetDetails: r, mission: e[a] };
                                    else {
                                        let t = l(e[a], r, !1);
                                        if (o) {
                                            let i = /(phalanx-)?union\d+/.exec(e[a].className)[0];
                                            n[i] || (n[i] = []), n[i].push(t);
                                        }
                                    }
                                }
                            }
                            for (let e in n) t[e] && l(t[e].mission, t[e].fleetDetails, n[e]);
                        }
                    }
                },
                l = function (t, i) {
                    let n = e.Application.ogame.community,
                        o = e.config.apps.trashsim.url,
                        s = 1 == i ? 0 : 1,
                        l = function (e, t, a) {
                            let n = { ships: e };
                            return (t = t.split(":")), (a = a.split(":")), ((0 == i && 3 === t.length) || (1 == i && 3 === a.length)) && (n.planet = { galaxy: t[0], system: t[1], position: t[2] }), n;
                        };
                    void 0 !== e.config.apps.trashsim.communities[n] && (o += e.config.apps.trashsim.communities[n]);
                    let u = d(s);
                    if (((u[i] = []), 1 == t.getAttribute("data-acs"))) {
                        let e = JSON.parse(t.getAttribute("data-fleet"));
                        for (let t = 0, a = e.length; t < a; t++) u[i].push(l(e[t].fleet, e[t].origin, e[t].destination));
                    } else u[i].push(l(JSON.parse(t.getAttribute("data-fleet")), t.getAttribute("data-origin"), t.getAttribute("data-destination")));
                    let c = new MouseEvent("click", { view: a, bubbles: !0, cancelable: !1 });
                    (t.href = o + "?" + r("event fleet") + "#prefill=" + a.btoa(JSON.stringify(u))), (t.target = "_blank"), t.dispatchEvent(c), e.PageCom.GoogleAnalytics.sendEvent("simulate", "click", "trashsim eventlist " + i);
                },
                d = function (t) {
                    let a = e.Store.data.ogameSettings,
                        i = e.Store.data.playerResearch,
                        n = {};
                    if (e.Application.ogame.planetCoords) {
                        let t = e.Application.ogame.planetCoords.split(":");
                        n.planet = { galaxy: t[0], system: t[1], position: t[2] };
                    }
                    if (i) {
                        let e = {};
                        for (let t in i) e[t] = { level: i[t] };
                        n.research = e;
                    }
                    let r = {};
                    return (
                        (r[t] = [n]),
                        a &&
                            (r.settings = {
                                speed_fleet: a.speedFleet,
                                galaxies: a.galaxies,
                                systems: a.systems,
                                rapid_fire: a.rapidFire,
                                def_to_tF: a.defToTF,
                                debris_factor: a.debrisFactor,
                                repair_factor: a.repairFactor,
                                donut_galaxy: a.donutGalaxy,
                                donut_system: a.donutSystem,
                            }),
                        r
                    );
                };
            return {
                srRegex: i,
                hitFromMessages: function (t) {
                    let a = n.createElement("a");
                    (a.href = o(t)),
                        (a.target = "_blank"),
                        a.classList.add("uv-simulate-trashsim", "uv-element"),
                        a.addEventListener("click", function (t) {
                            e.PageCom.GoogleAnalytics.sendEvent("simulate", "click", "trashsim");
                        }),
                        t.parentNode.parentNode.appendChild(a);
                },
                hitFromPhalanx: function (e) {
                    s(e, ".detailsFleet");
                },
                hitFromEventList: function (e) {
                    s(e, ".icon_movement");
                },
                eventFleetSimulation: l,
                triggerSimulationButton: function (e, t) {
                    l(n.getElementById(e), t);
                },
            };
        })()),
        (e.ft.Spreading = (function () {
            let t = 2,
                a = 2,
                i = { loader: 0, currentProfile: null, spreadingData: null, planets: {} },
                r = function () {
                    let r = n.getElementById("uv-s-wrapper");
                    if (r) r.classList.add("uv-s-active");
                    else {
                        let r = e.Utils.merge(e.Locale.dict, { color: "#161C22" });
                        e.Template.get(
                            "spreading",
                            function (r) {
                                r.querySelector("#uv-s-header span.btn-del").addEventListener("click", function (e) {
                                    r.classList.remove("uv-s-active");
                                }),
                                    r.querySelector("#uv-s-header #uv-s-add-wrapper").addEventListener("click", function (t) {
                                        v(e.Application.ogame.playerId, e.Application.ogame.playerName), e.PageCom.GoogleAnalytics.sendEvent("spreading", "click", "self");
                                    }),
                                    r.querySelector("#uv-spreading #uv-s-universe").addEventListener("click", function (t) {
                                        (i.currentProfile = "universe"), e.Store.set("spreadingCurrent", "universe"), u(), e.PageCom.GoogleAnalytics.sendEvent("spreading", "click", "universe");
                                    }),
                                    r.querySelector("#uv-spreading #uv-s-btn-newprofile").addEventListener("click", function (t) {
                                        s(), e.PageCom.GoogleAnalytics.sendEvent("spreading", "click", "profile_new");
                                    }),
                                    r.querySelector("#uv-spreading #uv-s-btn-delprofile").addEventListener("click", function (t) {
                                        l(), e.PageCom.GoogleAnalytics.sendEvent("spreading", "click", "profile_delete");
                                    }),
                                    r.querySelector("#uv-spreading #uv-s-profile").addEventListener("change", function (t) {
                                        d.call(this, t), e.PageCom.GoogleAnalytics.sendEvent("spreading", "change", "profile");
                                    }),
                                    r.querySelector("#uv-spreading #uv-s-invert").addEventListener("click", function (t) {
                                        let a = e.DOM.get("#uv-s-row-color"),
                                            i = e.Utils.invertColor(a.style.backgroundColor);
                                        k(i), (a.value = i), (a.style.backgroundColor = i), e.PageCom.GoogleAnalytics.sendEvent("spreading", "click", "invert");
                                    }),
                                    r.querySelector("#uv-spreading #uv-s-row-color").addEventListener("colorchange", function (t) {
                                        k(this.value), e.PageCom.GoogleAnalytics.sendEvent("spreading", "click", "color");
                                    });
                                let o = r.querySelector("#uv-s-rows");
                                for (let i = 1, r = e.Store.data.ogameSettings.galaxies; i <= r; i++) {
                                    let e = n.createElement("li");
                                    (e.id = "uv_s_g" + i),
                                        (e.style.width = 499 * t + "px"),
                                        (e.style.height = 15 * a + "px"),
                                        (e.dataset.galaxy = i),
                                        e.classList.add("uv-s-galaxy"),
                                        e.addEventListener("mousemove", function (e) {
                                            let t = "?:?:?";
                                            (t = e.target.classList.contains("uv-s-planet")
                                                ? e.target.dataset.galaxy + ":" + e.target.dataset.system + ":" + e.target.dataset.position
                                                : this.dataset.galaxy + ":" + (1 + Math.floor(e.layerX / 2)) + ":" + (1 + Math.floor(e.layerY / 2))),
                                                (n.getElementById("uv-s-position-coordinates").textContent = t);
                                        }),
                                        o.appendChild(e);
                                }
                                document.body.appendChild(r), r.classList.add("uv-s-active"), u(), e.PageCom.JQuery.colorpicker("#uv-s-row-color", "#161C22");
                            },
                            r
                        );
                    }
                    e.PageCom.GoogleAnalytics.sendEvent("spreading", "click", "open");
                },
                s = function () {
                    let t = n.getElementById("uv-s-newprofile").value;
                    t.length > 0 &&
                        ((n.getElementById("uv-s-newprofile").value = ""), (i.spreadingData[t] = {}), (i.currentProfile = t), e.Store.set("spreadingCurrent", i.currentProfile), e.Store.set("spreading", i.spreadingData, !0), u());
                },
                l = function () {
                    let t = n.getElementById("uv-s-profile"),
                        a = t[t.selectedIndex].value;
                    i.spreadingData[a] &&
                        (delete i.spreadingData[a], "Default" === a && (i.spreadingData.Default = {}), (i.currentProfile = "Default"), e.Store.set("spreadingCurrent", i.currentProfile), e.Store.set("spreading", i.spreadingData, !0), u());
                },
                d = function (t) {
                    let a = this[this.selectedIndex].value;
                    (i.currentProfile = a), e.Store.set("spreadingCurrent", i.currentProfile), "uv-s-profile" === this.id && ((n.getElementById("uv-s-noplayer").style.display = "block"), u());
                },
                u = function () {
                    (i.loader = e.Loader.create("#uv-spreading")),
                        (i.planets = {}),
                        (function () {
                            let t = !1;
                            for (let e in i.spreadingData) for (let a in i.spreadingData[e]) /player\d+/.test(a) && ((i.spreadingData[e][a.replace("player", "")] = i.spreadingData[e][a]), delete i.spreadingData[e][a], (t = !0));
                            t && e.Store.set("spreading", i.spreadingData, !0);
                        })(),
                        c();
                    let t = [],
                        a = "universe" === i.currentProfile;
                    if (a)
                        o.fetch(
                            o.HIGHSCORE,
                            function (e) {
                                let n = e.getElementsByTagName("player");
                                for (let e = 0, a = n.length; e < a; e++) t.push(n[e].id);
                                p(t, i.spreadingData[i.currentProfile], a);
                            },
                            !1
                        );
                    else {
                        for (let e in i.spreadingData[i.currentProfile]) t.push(e);
                        p(t, i.spreadingData[i.currentProfile], a);
                    }
                    m();
                },
                c = function () {
                    e.DOM.clear("#uv-spreading #uv-s-profile");
                    let t = n.getElementById("uv-s-profile"),
                        a = n.createElement("option");
                    (a.value = " - "), a.setAttribute("disabled", "disabled"), "universe" === i.currentProfile && a.setAttribute("selected", "selected"), t.appendChild(a);
                    for (let e in i.spreadingData) {
                        let a = n.createElement("option");
                        (a.textContent = e), (a.value = e), i.currentProfile === e && a.setAttribute("selected", "selected"), t.appendChild(a);
                    }
                },
                p = function (r, o, s) {
                    e.DOM.clear("#uv-spreading .uv-s-galaxy");
                    let l = {};
                    for (let e = 0, t = r.length; e < t; e++) l[r[e]] = {};
                    chrome.runtime.sendMessage({ action: "API", call: "universe:findPlanetsByPlayers", parameters: [l, null, null] }, function (l) {
                        -1 !== r.indexOf(e.Application.ogame.playerId) && (l.players[e.Application.ogame.playerId] = { planets: h() });
                        for (let e in l.players) {
                            let r = l.players[e].planets;
                            for (let i = 0, l = r.length; i < l; i++) {
                                let l = r[i],
                                    d = n.createElement("div");
                                (d.id = "uv-s-planet-" + l.id),
                                    d.classList.add("uv-s-planet"),
                                    d.classList.add("uv-s-planet-" + e),
                                    (d.dataset.galaxy = l.galaxy),
                                    (d.dataset.system = l.system),
                                    (d.dataset.position = l.position),
                                    (d.style.backgroundColor = s ? "#ff0" : o[e].color),
                                    (d.style.width = t + "px"),
                                    (d.style.height = a + "px"),
                                    (d.style.top = a * l.position - a + "px"),
                                    (d.style.left = t * l.system - t + "px"),
                                    n.getElementById("uv_s_g" + l.galaxy).appendChild(d);
                            }
                            s || (i.planets[e] = r);
                        }
                        e.Loader.remove(i.loader);
                    });
                },
                m = function () {
                    e.DOM.clear("#uv-spreading #uv-s-playerlist"), e.DOM.clear("#uv-s-planetlist");
                    let t = n.getElementById("uv-s-playerlist"),
                        a = 0,
                        r = i.spreadingData[i.currentProfile];
                    for (let o in r) {
                        let s = r[o],
                            l = { idx: ++a, pid: o, name: s.name, color: s.color };
                        e.Template.get(
                            "spreadingPlayer",
                            function (a) {
                                a.querySelector(".del").addEventListener("click", function (t) {
                                    f(this.parentNode.dataset.pid), e.PageCom.GoogleAnalytics.sendEvent("spreading", "click", "player_remove"), t.stopPropagation();
                                }),
                                    a.querySelector(".uv-s-playercolor").addEventListener("colorchange", function (t) {
                                        let a = this.parentNode.dataset.pid,
                                            r = this.value;
                                        (i.spreadingData[i.currentProfile][a].color = r), e.Store.set("spreading", i.spreadingData, !0);
                                        let o = n.getElementsByClassName("uv-s-planet-" + a);
                                        for (let e = 0, t = o.length; e < t; e++) o[e].style.backgroundColor = r;
                                    }),
                                    (a.id = "uv-s-" + o),
                                    (a.dataset.pid = o),
                                    a.addEventListener("click", g),
                                    t.appendChild(a),
                                    e.PageCom.JQuery.colorpicker("#uv-s-" + o + " .uv-s-playercolor", s.color);
                            },
                            l
                        );
                    }
                },
                g = function (t) {
                    (n.getElementById("uv-s-noplayer").style.display = "none"), e.DOM.clear("#uv-s-planetlist");
                    let a = n.querySelector("#uv-s-playerlist li.selected");
                    a && a.classList.remove("selected"), this.classList.add("selected");
                    let r = n.getElementById("uv-s-planetlist"),
                        o = this.dataset.pid,
                        s = i.planets[o];
                    for (let t = 0, a = s.length; t < a; t++) {
                        let a = n.createElement("li");
                        (a.textContent = t + 1 + ": " + s[t].coords),
                            (a.dataset.coords = s[t].coords),
                            (a.dataset.id = s[t].id),
                            a.addEventListener("click", function () {
                                e.fn.loadGalaxy(this);
                            }),
                            a.addEventListener("mouseenter", function (e) {
                                let t = n.getElementById("uv-s-planet-" + this.dataset.id);
                                t.classList.add("uv-s-detail"), (t.style.top = parseInt(t.style.top) - 3 + "px"), (t.style.left = parseInt(t.style.left) - 3 + "px");
                            }),
                            a.addEventListener("mouseleave", function (e) {
                                let t = n.getElementById("uv-s-planet-" + this.dataset.id);
                                t.classList.remove("uv-s-detail"), (t.style.top = parseInt(t.style.top) + 3 + "px"), (t.style.left = parseInt(t.style.left) + 3 + "px");
                            }),
                            r.appendChild(a);
                    }
                },
                v = function (t, a) {
                    "string" == typeof t &&
                        ("" !== i.currentProfile
                            ? (i.spreadingData[i.currentProfile][t] = { color: "#ffff00", name: a })
                            : (i.spreadingData.Default || (i.spreadingData.Default = {}), (i.spreadingData.Default[t] = { color: "#ffff00", name: a }), e.Store.set("spreadingCurrent", "Default")),
                        e.Store.set("spreading", i.spreadingData, !0)),
                        n.getElementById("uv-s-wrapper") && u();
                },
                f = function (t) {
                    (n.getElementById("uv-s-noplayer").style.display = "block"), e.DOM.clear("#uv-s-planetlist"), delete i.spreadingData[i.currentProfile][t], e.Store.set("spreading", i.spreadingData, !0), u();
                },
                h = function () {
                    let t = [],
                        a = n.getElementById("planetList").children;
                    for (let i = 0, n = a.length; i < n; i++) {
                        let n = a[i],
                            r = n.querySelector(".planet-koords").firstChild.nodeValue,
                            o = { coords: r.substring(1, r.length - 1), moon: null !== n.querySelector(".moonlink"), pid: e.Application.ogame.playerId, id: /planet-(\d+)/.exec(n.id)[1] },
                            s = o.coords.split(":");
                        (o.galaxy = s[0]), (o.system = s[1]), (o.position = s[2]), t.push(o);
                    }
                    return t;
                },
                y = function (t, a, i) {
                    let n = e.DOM.create("select");
                    (n.id = t), n.classList.add("dropdown", "currentlySelected", "w100"), n.addEventListener("change", d);
                    let r = e.DOM.create("option");
                    (r.value = ""), n.appendChild(r);
                    for (let t in a) {
                        let a = e.DOM.create("option");
                        (a.value = t), a.appendChild(e.DOM.text(t)), t === i && (a.selected = "selected"), n.appendChild(a);
                    }
                    return "" === i && (r.selected = "selected"), n;
                },
                _ = function (t) {
                    v(this.parentNode.dataset.pid, this.parentNode.dataset.name), e.PageCom.GoogleAnalytics.sendEvent("spreading", "click", "add_player"), t.stopPropagation();
                },
                b = function () {
                    let t = n.createElement("div");
                    return "yes" === e.Store.data.features.spreading && (t.classList.add("uv-btn-add"), (t.title = e.Locale.dict.playertospreading), t.addEventListener("click", _)), t;
                },
                k = function (e) {
                    let t = n.getElementsByClassName("uv-s-galaxy");
                    for (let a = 0, i = t.length; a < i; a++) t[a].style.backgroundColor = e;
                };
            return {
                init: function (t) {
                    n.body.classList.add("uv-feature-spreading");
                    let a = n.createElement("div");
                    (a.id = "uv-spreading-btn"), a.addEventListener("click", r), a.classList.add("uv-element"), t.appendChild(a), (i.currentProfile = e.Store.data.spreadingCurrent), (i.spreadingData = e.Store.data.spreading);
                },
                initGalaxy: function () {
                    let t = e.DOM.getOne("#inhalt");
                    if (t) {
                        let a = e.Store.data.spreadingCurrent,
                            i = e.Store.data.spreading,
                            n = e.DOM.create("div");
                        (n.id = "uv_s_g_profile"), n.appendChild(e.DOM.text(e.Locale.dict.currentprofilegal));
                        let r = y("uv_s_profile", i, a);
                        n.appendChild(r);
                        let o = e.DOM.create("div");
                        o.classList.add("ct_foot_row"), o.classList.add("uv_s_profile_wrapper"), o.appendChild(n), t.appendChild(o);
                    }
                },
                handleGalaxy: function (e, t) {
                    let a = n.getElementsByClassName(e);
                    for (let e = 0, i = a.length; e < i; e++) {
                        let i = a[e];
                        n.querySelector("." + t, i).appendChild(b());
                    }
                },
                getAddPlayerButton: b,
            };
        })()),
        e.Locale.add("CS", {
            addtofavs: "Přidat do oblíbených",
            calcmd: "Vypočítat šance na zničení měsíce",
            combat: "Boj",
            coords: "Souřadnice",
            currentprofile: "Nyní:",
            currentprofilegal: "Stávající profil: ",
            deleteprofile: "Odstranit",
            drives: "Pohony",
            espionage: "Špionáž",
            hp: "DP",
            idbnotexist: "IdexedDB nebyla nalezena v prohlížeči",
            loadplanets: "Načítání!",
            md: "Zničení měsíce",
            menu_api: "OGame API",
            menu_clear: "Obnovit",
            menu_extra: "Extra",
            menu_favouriteF: "Uložit souřadnice do oblíbených cílů přes záložku galaxie.",
            menu_fb: "Facebook stránka",
            menu_features: "Funkce",
            menu_fleetpageF: "Zobrazit planety na stránce vozového parku strana.",
            menu_general: "Obecné",
            menu_highscoreF: "Vylepšete statistiky.",
            menu_home: "Domovská stránka",
            menu_idb: "Databáze prohlížeče (Tuto možnost podporuje pouze Chrom +12 a Firefox +4.)",
            menu_militairyF: "Ukázat vlastní vojenské body a lodě v galaxii.",
            menu_moondestructF: "Kalkulačka šancí na zničení měsíce v záložce galaxie.",
            menu_offlinewiki: "Offline Wiki",
            menu_option: "Kterou možnost načítání souřadnic planety chceš použít?",
            menu_org: ".org fórum",
            menu_origin: "Origin fórum",
            menu_personal: "Osobní server",
            menu_planetF: "Ukázat vlastní planety v galaxii.",
            menu_planetfieldsF: "Zobrazit použité pole v seznamu planet.",
            menu_previewF: "Použít poslední verzi tohoto skriptu (odstraněno ve verzi 2.1.3).",
            menu_quicksearchF: "Povolit funkci rychlého hledání.",
            menu_refreshF: "Ukázat čas obnovy dat galaxie.",
            menu_remove: "Odstranit",
            menu_removeLocalS: "Resetovat všechna nastavení UniverseView na původní nastavení!",
            menu_removePlanetidb: "Odstranit databázi planet z tvého prohlížeče může pomoci zachránit planety! (Odstranění může pomoci, pokud program přestal pracovat.)",
            menu_removePlayeridb: "Odstranit databázi hráčů z tvého prohlížeče může zachránit výzkumy! (Odstranění může pomoci, pokud program přestal pracovat.)",
            menu_researchF: "Ukázat vlastní výzkumy v galaxii.",
            menu_setaccess: "Použít přístupový kód",
            menu_setserver: "Nastavit server",
            menu_spreadingF: "Povolit zobrazení rozšiřování planety.",
            menu_translation: "Překlady",
            menu_updateF: "Chceš aktualizovat informace solárního systému, když si je prohlížíš v galaxii? (Dostupné pouze k možnostem „Osobní server“ nebo „Databáze prohlížeče“.)",
            menu_updatebrowser: "Aktualizovat databázi prohlížeče.",
            menu_updategal: "Aktualizovat galaxii",
            menu_updateserver: "Aktualizovat databázi na vlastním severu.",
            menu_us: ".us fórum",
            menu_version: "Verze",
            menu_wiki: "Wikipedie skriptu",
            militairy: "Vojenství",
            moonpop: "Šance na zničení měsíce: ",
            moonsize: "Velikost měsíce",
            newprofile: "Nový",
            noidba: "Tvůj prohlížeč nepodporuje IndexedDB!",
            noidbb: "(možnost databáze prohlížeče UniverseView )",
            noidbc: "Pokud chceš používat tuto vlastnost, musíš si stáhnout:",
            noidbd: "Chrome verzi +12 nebo Firefox verzi +4",
            noplayers: "Žádní hráči!",
            noplayerselected: "Žádný hráč nevybrán!",
            ogotchaconvert: "Konvertováno s OGotcha",
            openuvmenu: "Otevřít UV menu",
            planets: "Planety",
            playertospreading: "Přidat hráče do rozšíření",
            popmoon: "Zničit měsíc",
            profilecondition: "Zadej prosím alespoň 2 písmena!",
            profileexists: "Tento profil již existuje!",
            profilenotexist: "Tento profil neexistuje!",
            qscondition: "Zadej alespoň 2 slova!",
            qsinfo: "Vyhledat hráče nebo alianci.",
            riploss: "Šance na zničení hvězdy smrti: ",
            rips: "Hvězd smrti: ",
            rowcolor: "Barva galaxie",
            searchally: "Vyhledat alianci",
            searchplayer: "Vyhledat hráče",
            ships: "Lodě",
            spreading_current: "Aktuální",
            spreading_delete: "Vymazat",
            spreading_galaxycolor: "Barva galaxie",
            spreading_invert: "Převrátit",
            spreading_new: "Nový",
            spreading_noplayer: "Žádný hráč nevybrán!",
            spreading_position: "Pozice",
            spreading_profileconfig: "Nastavení profilu",
            spreading_showuniverse: "Ukaž vesmír",
            spreading_title: "Rozšiřování hráče",
            spreading_yourself: "Přidat se",
            spreadingconfig: "Výběr profilu",
            spreadinguniverse: "Zobrazit vesmír",
            trashsimsimulate: "Simulovat v TrashSim",
            updatedatabase: "Aktualizovat galaxii",
            updatefailed: "Selhání, zkus to znovu!",
            updateidb: "Musíš aktualizovat databázi galaxie",
            updateinfo: "Aktualizovat informace",
            updatingdatabase: "... aktualizace galaxie ...",
            uvnotification: "UniverseView upozornění!",
            uvupdated: "UniverseView byl aktualizován!",
            version: "Verze",
            viewhighscore: "Zobrazit žebříček",
        }),
        e.Locale.add("DA", {
            addtofavs: "Tilføj til favoriter",
            calcmd: "Udregn Måneødelæggelse",
            combat: "Kamp",
            coords: "Koordinater",
            currentprofile: "Nuværende:",
            currentprofilegal: "Nuværende profil: ",
            deleteprofile: "Slet",
            drives: "Fremdrift",
            espionage: "Spionage",
            hp: "HP",
            idbnotexist: "IDB eksistere ikke i den her browser",
            loadplanets: "Indlæser!",
            md: "Måneødelæggelse",
            menu_api: "Ogame API's",
            menu_clear: "Gendan standardindstillinger",
            menu_extra: "Ekstra",
            menu_favouriteF: "Gem koordinaterne på dine yndligs mål med galakse siden.",
            menu_fb: "Facebook side",
            menu_features: "Funktioner",
            menu_fleetpageF: "Vis planet listen på flåde siden.",
            menu_general: "Generelt",
            menu_highscoreF: "Forbedrede statistikker.",
            menu_home: "Webside",
            menu_idb: "Browser database (Denne valgmulighed fungere kun i Chrome +12 og Firefox +4)",
            menu_militairyF: "Vis en spillers militær point og skibe i galakse.",
            menu_moondestructF: "Måne ødelæggelses kalkulator i galakse.",
            menu_offlinewiki: "Offline wiki",
            menu_option: "Hvilken valgmulighed vil du gerne bruge til at få planeternes koordinater?",
            menu_org: ".org forum",
            menu_origin: "Origin forum",
            menu_personal: "Personlig server",
            menu_planetF: "Vis en spillers planeter i galakse.",
            menu_planetfieldsF: "Vis brugte felter i planet listen.",
            menu_previewF: "Brug preview versionen af denne script (fjernet i opdatering 2.1.3).",
            menu_quicksearchF: "Aktiver hurtig søgnings funktion.",
            menu_refreshF: "Vis opdaterings tidspunktet for galaksens indhold.",
            menu_remove: "Fjern",
            menu_removeLocalS: "Nultil alle UniverseView værdier til standard!",
            menu_removePlanetidb: "Fjern planeternes database fra din browser, den bliver brugt til at gemme spillernes planeter! (Det hjælper at fjerne det når den er holdt op med at virke)",
            menu_removePlayeridb: "Fjern spillernes database fra din browser, den bliver brugt til at gemme spillernes forskning! (Det hjælper at fjerne det når den er holdt op med at virke)",
            menu_researchF: "Vis en spillers forskning i galakse.",
            menu_setaccess: "Brug adgangskode",
            menu_setserver: "Brug server",
            menu_spreadingF: "Aktiver spiller spreder funktionen.",
            menu_translation: "Oversættelser",
            menu_updateF: "Vil du gerne have at oplysningerne om solarsystemet bliver opdateret når de bliver vist i galakse? (Kun muligt med Browser database eller personlig server)",
            menu_updatebrowser: "Opdater databasen i din browser.",
            menu_updategal: "Opdater galakse",
            menu_updateserver: "Opdater databasen på din server.",
            menu_us: ".us forum",
            menu_version: "Version",
            menu_wiki: "UniverseView Wiki",
            militairy: "Militær",
            moonpop: "Chance for måneødelæggelse: ",
            moonsize: "Måne størrelse",
            newprofile: "Ny",
            noidba: "Din browser supportere ikke IndexedDB!",
            noidbb: "(UniverseView browser database valgmulighed)",
            noidbc: "Hvis du gerne vil bruge denne valgmulighed bliver du nød til at downloade:",
            noidbd: "Chrome version +12 eller Firefox version +4",
            noplayers: "Ingen spillere tilføjet!",
            noplayerselected: "Ingen spiller valgt!",
            ogotchaconvert: "Konverter med OGotcha",
            openuvmenu: "Åben Uv menu",
            planets: "Planeter",
            playertospreading: "Tilføj spiller til Spreder",
            popmoon: "Ødelægge måne",
            profilecondition: "Indtast venligst mindst 2 bogstaver!",
            profileexists: "Denne profil eksistere allerede!",
            profilenotexist: "Denne profil eksistere ikke!",
            qscondition: "Indtast mindst 2 bogstaver!",
            qsinfo: "Søg efter en spiller eller alliance.",
            riploss: "Chancen for dødstjernen mistes: ",
            rips: "Dødstjerner: ",
            rowcolor: "Galaksens farve",
            searchally: "Søg efter en alliance",
            searchplayer: "Søg efter en spiller",
            ships: "Skibe",
            spreading_current: "Nuværende",
            spreading_delete: "Slet",
            spreading_galaxycolor: "Galaksens farve",
            spreading_invert: "Omvende",
            spreading_new: "Ny",
            spreading_noplayer: "Ingen spiller valgt!",
            spreading_position: "Position",
            spreading_profileconfig: "Profil konfiguration",
            spreading_showuniverse: "Vis univers",
            spreading_title: "Spiller spreder",
            spreading_yourself: "Tilføj dig selv",
            spreadingconfig: "Profil konfiguration",
            spreadinguniverse: "Vis univers",
            trashsimsimulate: "Simuler med TrashSim",
            updatedatabase: "Opdater galakse",
            updatefailed: "Fejl, prøv igen!",
            updateidb: "Du skal opdatere galakse databasen",
            updateinfo: "Opdater informationer",
            updatingdatabase: "... opdater galakse ...",
            uvnotification: "UniverseView Notifikation!",
            uvupdated: "UniverseView er blevet opdateret!",
            version: "Version",
            viewhighscore: "Vis highscore",
        }),
        e.Locale.add("DE", {
            addtofavs: "zu Favoriten hinzufügen",
            calcmd: "Berechne Mondzerstörung",
            combat: "Kampf",
            coords: "Koordinaten",
            currentprofile: "Ausgewählt:",
            currentprofilegal: "Derzeitiges Profil: ",
            deleteprofile: "Löschen",
            drives: "Antriebe",
            espionage: "Spionage",
            hp: "HP",
            idbnotexist: "IDB existiert in diesem Browser nicht",
            loadplanets: "Lädt!",
            md: "Mondzerstörung",
            menu_api: "Ogame Api's",
            menu_clear: "Standard wiederherstellen",
            menu_extra: "Extras",
            menu_favouriteF: "Speichere die Koordinaten deiner bevorzugten Ziele über die Galaxieansicht.",
            menu_fb: "Facebook-Seite",
            menu_features: "Funktionen",
            menu_fleetpageF: "Zeige Planeten-Liste auf der Flotten-Seite.",
            menu_general: "Allgemein",
            menu_highscoreF: "Verbessere die Statistiken.",
            menu_home: "Homepage",
            menu_idb: "Browser Datenbank (Funktioniert nur mit Chrome +12 und Firefox +4)",
            menu_militairyF: "Militärpunkte und Schiffe des Spielers anzeigen.",
            menu_moondestructF: "Mondzerstörung-kalkulator in der Galaxieansicht.",
            menu_offlinewiki: "Offline wiki",
            menu_option: "Welche Option möchten Sie zum Beziehen der Planetenkoordinaten verwenden?",
            menu_org: ".org Forum",
            menu_origin: "Origin Forum",
            menu_personal: "Persönlicher Server",
            menu_planetF: "Spielerplaneten in Galaxie anzeigen.",
            menu_planetfieldsF: "Zeige die Anzahl der bebauten Felder in der Planetenliste.",
            menu_previewF: "Vorschau-Version des Scripts benutzen (Entfernt in Update 2.1.3).",
            menu_quicksearchF: "Schnellsuche aktivieren.",
            menu_refreshF: "Aktualisierungszeit der Galaxie-Inhalte anzeigen.",
            menu_remove: "Entfernen",
            menu_removeLocalS: "UniverseView auf Standardeinstellungen zurücksetzen!",
            menu_removePlanetidb: "Planetendatenbank, welche zum Speichern der Spielerplaneten verwendet wird, aus dem Browser löschen! (Mögliche Hilfe, wenn UniverseView nicht mehr funktioniert)",
            menu_removePlayeridb: "Forschungsdatenbank, welche zum Speichern von Spielerforschungen genutzt wird, aus Browser löschen! (Mögliche Hilfe, wenn UniverseView nicht mehr funktioniert)",
            menu_researchF: "Forschungen des Spielers in der Galaxie anzeigen.",
            menu_setaccess: "Zugangscode benutzen",
            menu_setserver: "Nutze Server",
            menu_spreadingF: "Ausbreitungs-Feature aktivieren.",
            menu_translation: "Übersetzungen",
            menu_updateF: "Möchten Sie die Informationen des gewählten Systems beim Aufruf updaten? (Nur möglich, wenn persönlicher Server oder Browserdatenbank genutzt wird.)",
            menu_updatebrowser: "Browserdatenbank updaten.",
            menu_updategal: "Galaxie updaten",
            menu_updateserver: "Eigene Serverdatenbank updaten.",
            menu_us: ".us Forum",
            menu_version: "Version",
            menu_wiki: "UniverseView Wiki",
            militairy: "Militär",
            moonpop: "Chance auf Mondzerstörung: ",
            moonsize: "Mondgröße",
            newprofile: "Neu",
            noidba: "Dein Browser unterstützt IndexedDB nicht!",
            noidbb: "(UniverseView Browser-Datenbank Optionen)",
            noidbc: "Wenn du diese Option nutzen möchtest, lade Folgendes herunter:",
            noidbd: "Chrome Version 12+ oder Firefox Version 4+",
            noplayers: "Kein Spieler hinzugefügt!",
            noplayerselected: "Kein Spieler ausgewählt!",
            ogotchaconvert: "Mit OGotcha konvertieren",
            openuvmenu: "Uv Menü öffnen",
            planets: "Planeten",
            playertospreading: "Spieler zur Aufteilung hinzufügen",
            popmoon: "Zerstöre den Mond",
            profilecondition: "Bitte mindestens 2 Buchstaben eingeben!",
            profileexists: "Dieses Profil existiert bereits!",
            profilenotexist: "Dieses Profil existiert nicht!",
            qscondition: "Bitte mindestens 2 Buchstaben eingeben!",
            qsinfo: "Spieler oder Allianz suchen.",
            riploss: "Chance auf Verlust der Todessterne: ",
            rips: "Todessterne: ",
            rowcolor: "Galaxie-Farbe",
            searchally: "Allianz suchen",
            searchplayer: "Spieler suchen",
            ships: "Schiffe",
            spreading_current: "Momentan",
            spreading_delete: "Löschen",
            spreading_galaxycolor: "Galaxiefarbe",
            spreading_invert: "Invertiere",
            spreading_new: "Neu",
            spreading_noplayer: "Kein Spieler ausgewählt!",
            spreading_position: "Position",
            spreading_profileconfig: "Profileinstellungen",
            spreading_showuniverse: "Zeige Universum",
            spreading_title: "Spielerverteilung",
            spreading_yourself: "Mich selbst hinzufügen",
            spreadingconfig: "Profil-Konfiguration",
            spreadinguniverse: "Zeige Universum",
            updatedatabase: "Galaxie-Update",
            updatefailed: "Fehler, bitte nochmal versuchen!",
            updateidb: "Die Galaxie-Datenbank muss geupdated werden",
            updateinfo: "Update-Information",
            updatingdatabase: "... Galaxie wird geupdated ...",
            uvnotification: "UniverseView Benachrichtigung!",
            uvupdated: "UniverseView wurde geupdated!",
            version: "Version",
            viewhighscore: "Highscore anzeigen",
        }),
        e.Locale.add("EL", {
            addtofavs: "Προσθήκη στα αγαπημένα",
            calcmd: "",
            combat: "Μάχη",
            coords: "Συντεταγμένες",
            currentprofile: "Τρέχων:",
            currentprofilegal: "Τρέχων profile: ",
            deleteprofile: "Διαγραφή",
            drives: "",
            espionage: "Κατασκοπεία",
            hp: "Αρχικός πλανήτης",
            idbnotexist: "",
            loadplanets: "Φόρτωση!",
            md: "Καταστροφή φεγγαριού",
            menu_api: "Ogame  Api's",
            menu_clear: "Επαναφέρτε τα προεπιλεγμένα",
            menu_extra: "",
            menu_favouriteF: "Αποθηκεύστε τις συντεταγμένες από τους αγαπημένους σας στόχους μέσω της σελίδας του γαλαξία.",
            menu_fb: "",
            menu_features: "Μελλοντικά",
            menu_fleetpageF: "Εμφάνισε λίστα πλανητών στην σελίδα πτήσεων στόλου.",
            menu_general: "Γενικά",
            menu_highscoreF: "Βελτίωση στατιστικών.",
            menu_home: "Αρχική σελίδα",
            menu_idb: "",
            menu_militairyF: "",
            menu_moondestructF: "",
            menu_offlinewiki: "Wiki εκτός σύνδεσης",
            menu_option: "",
            menu_org: "",
            menu_origin: "",
            menu_personal: "Προσωπικός server",
            menu_planetF: "Εμφανίστε για παίκτη τους πλανήτες του στον γαλαξία.",
            menu_planetfieldsF: "Εμφανίστε τα χρησιμοποιημένα πεδία στην λίστα των πλανητών.",
            menu_previewF: "",
            menu_quicksearchF: "",
            menu_refreshF: "",
            menu_remove: "Μετακινήστε",
            menu_removeLocalS: "Επαναφορά όλες τις τιμές του UniverseView στις προεπιλεγμένες τιμές!",
            menu_removePlanetidb: "",
            menu_removePlayeridb: "",
            menu_researchF: "Εμφάνισε για τον παίκτη τις έρευνες του στον γαλαξία.",
            menu_setaccess: "Χρησιμοποιήστε κωδικό πρόσβασης",
            menu_setserver: "Χρησιμοποίησε server",
            menu_spreadingF: "Ενεργοποίηση της εξάπλωση παίκτη.",
            menu_translation: "Μεταφράσεις",
            menu_updateF: "",
            menu_updatebrowser: "",
            menu_updategal: "Ενημέρωση γαλαξία",
            menu_updateserver: "Ενημερώστε την βάση δεδομένων του σύμπαντος σας.",
            menu_us: "",
            menu_version: "Έκδοση",
            menu_wiki: "UniverseView Wiki",
            militairy: "Στρατός",
            moonpop: "Πιθανότητα καταστροφής φεγγαριού: ",
            moonsize: "Μέγεθος φεγγαριού",
            newprofile: "Νέο",
            noidba: "Το πρόγραμμα περιήγησης σας δεν υποστηρίζει  IndexedDB!",
            noidbb: "",
            noidbc: "",
            noidbd: "Chrome έκδοση +12 ή Firefox έκδοση +4",
            noplayers: "Δεν προσθέθηκαν παίκτες!",
            noplayerselected: "Δεν επιλέχθηκε παίκτης!",
            ogotchaconvert: "Μετατροπή με OGatcha",
            openuvmenu: "",
            planets: "Πλανήτες",
            playertospreading: "",
            popmoon: "Καταστροφή φεγγαριού",
            profilecondition: "Παρακαλώ εισάγετε τουλάχιστον 2 γράμματα!",
            profileexists: "Αυτό το profile υπάρχει ήδη!",
            profilenotexist: "Αυτό το profile δεν υπάρχει!",
            qscondition: "Δώστε τουλάχιστον 2 γράμματα!",
            qsinfo: "",
            riploss: "Πιθανότητα να χαθεί το deathstar: ",
            rips: "Deathstars : ",
            rowcolor: "Χρώμα φόντου γαλαξία",
            searchally: "Ψάξτε συμμαχία",
            searchplayer: "Ψάξτε ένα παίκτη",
            ships: "Πλοία",
            spreading_current: "Τρέχων",
            spreading_delete: "Διαγραφή",
            spreading_galaxycolor: "",
            spreading_invert: "",
            spreading_new: "Νέο",
            spreading_noplayer: "",
            spreading_position: "Θέση",
            spreading_profileconfig: "",
            spreading_showuniverse: "Δείξτε σύμπαν",
            spreading_title: "Εξάπλωση παίκτη",
            spreading_yourself: "",
            spreadingconfig: "Επεξεργασία profile",
            spreadinguniverse: "Δείξτε σύμπαν",
            updatedatabase: "Ενημέρωση γαλαξία",
            updatefailed: "Αποτυχία, δοκιμάστε ξανά!",
            updateidb: "Πρέπει να ενημερώσετε την βάση δεδομένων του γαλαξία",
            updateinfo: "Ενημέρωση πληροφοριών",
            updatingdatabase: "",
            uvnotification: "",
            uvupdated: "To UniverseView έχει ενημερωθεί!",
            version: "Έκδοση",
            viewhighscore: "Προβολή υψηλότερης βαθμολογίας",
        }),
        e.Locale.add("EN", {
            addtofavs: "Add to favourites",
            calcmd: "Calculate Moon destruction",
            combat: "Combat",
            coords: "Coordinates",
            currentprofile: "Current:",
            currentprofilegal: "Current profile: ",
            deleteprofile: "Delete",
            drives: "Drives",
            espionage: "Espionage",
            hp: "HP",
            idbnotexist: "IDB doesn't exist in this browser",
            loadplanets: "Loading!",
            md: "Moon destruction",
            menu_api: "Ogame Api's",
            menu_clear: "Recover default",
            menu_extra: "Extra",
            menu_favouriteF: "Store the coordinates of your favourite targets via the galaxy page.",
            menu_fb: "Facebook page",
            menu_features: "Features",
            menu_fleetpageF: "Show planets list on the fleet page.",
            menu_general: "General",
            menu_highscoreF: "Improve statistics.",
            menu_home: "Homepage",
            menu_idb: "Browser database (This option only works in Chrome +12 and Firefox +4)",
            menu_militairyF: "Show a player his militairy points and ships in the galaxy.",
            menu_moondestructF: "Moon destruction calculator on the galaxy page.",
            menu_offlinewiki: "Offline wiki",
            menu_option: "Which option do you wan't to use to fetch planet coordinates?",
            menu_org: ".org board",
            menu_origin: "Origin board",
            menu_personal: "Personal server",
            menu_planetF: "Show a player his planets in the galaxy.",
            menu_planetfieldsF: "Show used fields in the planets list.",
            menu_previewF: "Use the preview version of this script (removed in update 2.1.3).",
            menu_quicksearchF: "Enable quicksearch feature.",
            menu_refreshF: "Show the refresh time of the galaxy content.",
            menu_remove: "Remove",
            menu_removeLocalS: "Reset all UniverseView values to the default values!",
            menu_removePlanetidb: "Remove the planets database from your browser, it is used to save players their planets! (Removing it could help when it has stopped working)",
            menu_removePlayeridb: "Remove the players database from your browser, it is used to save players their research! (Removing it could help when it has stopped working)",
            menu_researchF: "Show a player his research in the galaxy.",
            menu_setaccess: "Use passcode",
            menu_setserver: "Use server",
            menu_spreadingF: "Enable the player spreading feature.",
            menu_translation: "Translations",
            menu_updateF: "Do you want to update solarsystem information when viewing them in the galaxy? (Only possible with Browser database or personal server option)",
            menu_updatebrowser: "Update the database in your browser.",
            menu_updategal: "Update galaxy",
            menu_updateserver: "Update the database on your server.",
            menu_eventnotification: "Enable desktop notifications for your own fleet movement.",
            menu_galaxyRankF: "Show a player his rank in the galaxy.",
            menu_galaxyDebrisF: "Show the amount of debris in the galaxy instead of the icon.",
            menu_messagesraidF: "Add a quick loot link in the espionage reports.",
            menu_mr_menu_info: "Increase the number of cargo's to send by adding extra cargo's to anticipate on the ongoing resource production of your target.",
            menu_featuresCategoryGeneric: "Generic",
            menu_featuresCategoryGalaxy: "Galaxy",
            menu_featuresCategoryOther: "Other",
            menu_en_menu_info: "Enable and disable notifications for certain missions for your arriving fleet and returning fleet:",
            menu_en_menu_own_arriving: "Arriving fleet",
            menu_en_menu_own_arriving_info: "Your own fleet arriving at your planets or planets of other players.",
            menu_en_menu_own_returning: "Returning fleet",
            menu_en_menu_own_returning_info: "Your own fleet returning to your planets.",
            menu_en_menu_other_arriving: "Hostile/friendly fleet",
            menu_en_menu_other_arriving_info: "Fleet of hostile or friendly players arriving at your planets.",
            menu_en_menu_notification_offset: "Notification time offset",
            menu_en_menu_notification_offset_info: "The number of seconds to show the notification before a fleet arrives. The default value is 60 seconds before arrival.",
            menu_en_menu_pc_time: "Use your computers' time for the arrival timestamp in the desktop notification.<br>(Default is OGame server time)",
            menu_idletimer: "Enable an activity timer on your own planets list",
            menu_it_menu_info: "These timers keep track of when you last refreshed/visited your own planets/moons. This will enable you to idle much more efficiently.",
            menu_it_menu_show_seconds: "Show seconds on the timer.",
            menu_it_menu_expiration_time: "The number of minutes after which the timer should disappear. (Set to 0 to never hide it)",
            menu_us: ".us board",
            menu_version: "Version",
            menu_wiki: "UniverseView Wiki",
            militairy: "Militairy",
            moonpop: "Chance moon destruction: ",
            moonsize: "Moon size",
            newprofile: "New",
            noidba: "Your browser does not support IndexedDB!",
            noidbb: "(UniverseView browser database option)",
            noidbc: "If you want use this option you need to download:",
            noidbd: "Chrome version +12 or Firefox version +4",
            noplayers: "No players added!",
            noplayerselected: "No player selected!",
            ogotchaconvert: "Convert with OGotcha",
            trashsimsimulate: "Simulate with TrashSim",
            openuvmenu: "Open Uv menu",
            planets: "Planets",
            playertospreading: "Add player to Spreading",
            popmoon: "Destory moon",
            profilecondition: "Please enter at least 2 letters!",
            profileexists: "That profile already exists!",
            profilenotexist: "That profile doesn't exists!",
            qscondition: "Enter at least 2 letters!",
            qsinfo: "Search a player or alliance.",
            riploss: "Chance deathstar loss: ",
            rips: "Deathstars: ",
            rowcolor: "Galaxy color",
            searchally: "Search a alliance",
            searchplayer: "Search a player",
            ships: "Ships",
            spreading_current: "Current",
            spreading_delete: "Delete",
            spreading_galaxycolor: "Galaxy color",
            spreading_invert: "Invert",
            spreading_new: "New",
            spreading_noplayer: "No player selected!",
            spreading_position: "Position",
            spreading_profileconfig: "Profile configuration",
            spreading_showuniverse: "Show universe",
            spreading_title: "Player spreading",
            spreading_yourself: "Add yourself",
            spreadingconfig: "Profile configuration",
            spreadinguniverse: "Show universe",
            updatedatabase: "Update galaxy",
            updatefailed: "Failed, try again!",
            updateidb: "You need to update the galaxy database",
            updateinfo: "Update information",
            updatingdatabase: "... updating galaxy ...",
            uvnotification: "UniverseView Notification!",
            uvupdated: "UniverseView has been updated!",
            version: "Version",
            viewhighscore: "View highscore",
            dnotification_title: "{community} {universe} mission control",
            dnotification_arriving_friendly: "Your {mission} mission will arrive\n at {time}\n on {coords}",
            dnotification_arriving_neutral: "A {mission} mission will arrive\n at {time}\n on {coords}",
            dnotification_arriving_hostile: "! A HOSTILE {mission} mission will arrive\n at {time}\n on {coords}",
            dnotification_returning: "Your {mission} mission will return\n at {time}\n on {coords}",
            dnotification_open: "Go to {community} {universe}",
            idletimer_toggle_label: "Enabled or Disabled the activity timer",
        }),
        e.Locale.add("ES", {
            addtofavs: "Añadir a favoritos",
            calcmd: "Calcular destrucción de luna",
            combat: "Combate",
            coords: "Coordenadas",
            currentprofile: "Actual:",
            currentprofilegal: "Perfil actual: ",
            deleteprofile: "Eliminar",
            drives: "Motores",
            espionage: "Espionaje",
            hp: "PH",
            idbnotexist: "IDB no existe en este navegador",
            loadplanets: "¡Cargando!",
            md: "Destrucción de luna",
            menu_api: "Ogame API",
            menu_clear: "Recuperar las funciones por defecto",
            menu_extra: "Extra",
            menu_favouriteF: "Almacenar las coordenadas de tus objetivos favoritos a través de la página de Galaxia.",
            menu_fb: "Página Facebook",
            menu_features: "Funciones",
            menu_fleetpageF: "Mostrar la lista de planetas en la página de la flota.",
            menu_general: "General",
            menu_highscoreF: "Mejorar las estadísticas.",
            menu_home: "Página principal",
            menu_idb: "Navegar en la base de datos (Esta opción sólo funciona en Chrome +12 y FireFox +4)",
            menu_militairyF: "Mostrar los puntos militares y número de naves de un jugador en galaxia.",
            menu_moondestructF: "Calculadora de Destrucción de Luna en la página de Galaxia.",
            menu_offlinewiki: "Wiki Offline",
            menu_option: "¿Qué opción quieres utilizar para buscar coordenadas de planetas?",
            menu_org: "Foro .org",
            menu_origin: "Foro Origin",
            menu_personal: "Servidor personal",
            menu_planetF: "Mostrar los planetas de un jugador en la Galaxia.",
            menu_planetfieldsF: "Mostrar campos utilizados en la lista de planetas.",
            menu_previewF: "Usar la versión previa del script (eliminado en la versión 2.1.3).",
            menu_quicksearchF: "Activar la función de búsqueda rápida.",
            menu_refreshF: "Mostrar el tiempo de recarga del contenido de la galaxia.",
            menu_remove: "Eliminar",
            menu_removeLocalS: "¡Resetear todos los valores de UniverseView a los valores por defecto!",
            menu_removePlanetidb: "Eliminar la base de datos de planetas de tu navegador que se utiliza para guardar la lista de planetas (Eliminarlo puede ayudar a solucionar el problema si la función deja de funcionar)",
            menu_removePlayeridb:
                "Eliminar la base de datos de jugadores de tu navegador que se utiliza para guardar la información sobre las investigaciones de los jugadores (Eliminarlo puede ayudar a solucionar el problema si la función deja de funcionar)",
            menu_researchF: "Mostrar su clasificación de investigaciones en galaxia.",
            menu_setaccess: "Utilizar contraseña",
            menu_setserver: "Utilizar servidor",
            menu_spreadingF: "Activar la distribución de jugadores.",
            menu_translation: "Traducciones",
            menu_updateF: "¿Quieres actualizar la información de un sistema solar al visitarlo en galaxia? (Sólo disponible a través de la base de datos del navegador o con la opción de servidor propio)",
            menu_updatebrowser: "Actualizar la base de datos de tu navegador.",
            menu_updategal: "Actualizar galaxia",
            menu_updateserver: "Actualizar la base de datos de tu servidor.",
            menu_us: "Foro .us",
            menu_version: "Versión",
            menu_wiki: "Wiki de UniverseView",
            militairy: "Militar",
            moonpop: "Posibilidad de destruir la luna: ",
            moonsize: "Tamaño de la luna",
            newprofile: "Nuevo",
            noidba: "Tu navegador no soporta IndexedDB!",
            noidbb: "(Opción de base de datos del navegador para UniverseView)",
            noidbc: "Si quieres utilizar esta opción necesitas descargar:",
            noidbd: "Chrome versión +12 o Firefox versión +4",
            noplayers: "¡Ningún jugador añadido!",
            noplayerselected: "¡Ningún jugador seleccionado!",
            ogotchaconvert: "Convertido con OGotcha",
            openuvmenu: "Abrir el menú de Uv",
            planets: "Planetas",
            playertospreading: "Añadir jugador a la difusión",
            popmoon: "Destruir luna",
            profilecondition: "¡Por favor, introduce al menos 2 letras!",
            profileexists: "¡Ese perfil ya existe!",
            profilenotexist: "¡Ese perfil no existe!",
            qscondition: "¡Introduce al menos 2 letras!",
            qsinfo: "Buscar a un jugador o alianza.",
            riploss: "Posibilidad de perder las Estrellas de la Muerte: ",
            rips: "Estrellas de la Muerte: ",
            rowcolor: "Color de Galaxia",
            searchally: "Buscar una alianza",
            searchplayer: "Buscar a un jugador",
            ships: "Naves",
            spreading_current: "Actual",
            spreading_delete: "Borrar",
            spreading_galaxycolor: "Color de galaxia",
            spreading_invert: "Invertir",
            spreading_new: "Nuevo",
            spreading_noplayer: "¡Ningún jugador seleccionado!",
            spreading_position: "Posición",
            spreading_profileconfig: "Configuración del perfil",
            spreading_showuniverse: "Mostrar universo",
            spreading_title: "Detalles del jugador",
            spreading_yourself: "Añadir manualmente",
            spreadingconfig: "Configuración del Perfil",
            spreadinguniverse: "Mostrar universo",
            updatedatabase: "Actualizar galaxia",
            updatefailed: "¡Ha tenido lugar un error, vuelve a intentarlo!",
            updateidb: "Debes actualizar la base de datos de galaxia",
            updateinfo: "Información de la actualización",
            updatingdatabase: "Actualizando galaxia ...",
            uvnotification: "¡Notificación de UniverseView!",
            uvupdated: "¡UniverseView ha sido actualizado!",
            version: "Versión",
            viewhighscore: "Ver clasificación",
        }),
        e.Locale.add("FI", {}),
        e.Locale.add("FR", {
            addtofavs: "Ajouter aux favoris",
            calcmd: "Calculer les chances de destruction de lune",
            combat: "Combat",
            coords: "Coordonnées",
            currentprofile: "Actuellement :",
            currentprofilegal: "Profil actuel : ",
            deleteprofile: "Supprimer",
            drives: "Propulsion",
            espionage: "Espionnage",
            hp: "PM",
            idbnotexist: "IDB n'existe pas sur ce navigateur",
            loadplanets: "Chargement...",
            md: "Destruction de lune",
            menu_api: "APIs Ogame",
            menu_clear: "Restaurer les paramètres par défaut",
            menu_extra: "Extra",
            menu_favouriteF: "Enregistrer les coordonnées de vos cibles favorites dans la galaxie.",
            menu_fb: "Facebook",
            menu_features: "Options",
            menu_fleetpageF: "Voir la liste des planètes sur la page de la flotte.",
            menu_general: "Général",
            menu_highscoreF: "Améliorer les statistiques.",
            menu_home: "Page d'accueil",
            menu_idb: "Base de données du navigateur (Fonctionne uniquement avec Chrome 12+ et Firefox 4+)",
            menu_militairyF: "Voir les points militaires et les vaisseaux dans la galaxie.",
            menu_moondestructF: "Calculateur de destruction de lune dans la galaxie.",
            menu_offlinewiki: "Wiki hors-ligne",
            menu_option: "Quelle option voulez-vous utiliser pour trouver les coordonnées des planètes ?",
            menu_org: "Forum .org",
            menu_origin: "Forum Origin",
            menu_personal: "Serveur personnel",
            menu_planetF: "Voir les planètes du joueur dans la galaxie.",
            menu_planetfieldsF: "Montrer champs utilisés dans la liste des planètes.",
            menu_previewF: "Utiliser la version précédente du script (Version précédente: 1.4.0).",
            menu_quicksearchF: "Activer la barre de recherche rapide.",
            menu_refreshF: "Afficher le temps de rafraîchissement du contenu de la galaxie.",
            menu_remove: "Supprimer",
            menu_removeLocalS: "Remettre à zéro tous les enregistrements UniverseView.",
            menu_removePlanetidb: "Supprimer la base de données des planètes du navigateur, utilisée pour sauvegarder les planètes des joueurs. (La supprimer peut résoudre certains problèmes)",
            menu_removePlayeridb: "Supprimer la base de données des joueurs du navigateur, utilisée pour sauvegarder les recherches. (La supprimer peut résoudre certains problèmes )",
            menu_researchF: "Voir les recherches du joueur dans la galaxie.",
            menu_setaccess: "Utiliser mot de passe",
            menu_setserver: "Utiliser ce serveur",
            menu_spreadingF: "Activer le partage d'informations.",
            menu_translation: "Traduire",
            menu_updateF: "Voulez-vous mettre à jour le système solaire quand vous regardez la galaxie ? (Fonctionne seulement si la base de données est sur le navigateur ou sur un serveur personnel)",
            menu_updatebrowser: "Mettre à jour la base de données du navigateur.",
            menu_updategal: "Mettre à jour la galaxie",
            menu_updateserver: "Mettre à jour la base de données sur votre serveur.",
            menu_us: "Forum .us",
            menu_version: "Version",
            menu_wiki: "Wiki UniverseView",
            militairy: "Militaire",
            moonpop: "Probabilité de destruction de la lune : ",
            moonsize: "Taille de la lune",
            newprofile: "Nouveau",
            noidba: "Votre navigateur ne supporte pas IndexedDB !",
            noidbb: "(Options de la base de données UniverseView du navigateur)",
            noidbc: "Pour utiliser cette option vous devez télécharger :",
            noidbd: "Chrome 12+ ou Firefox 4+",
            noplayers: "Aucun joueur ajouté !",
            noplayerselected: "Aucun joueur sélectionné !",
            ogotchaconvert: "Convertir avec OGotcha",
            openuvmenu: "Ouvrir le menu Uv",
            planets: "Planètes",
            playertospreading: "Partager les informations du joueur",
            popmoon: "Détruire la lune",
            profilecondition: "Minimum 2 caractères !",
            profileexists: "Ce profil existe déjà !",
            profilenotexist: "Ce profil n'existe pas !",
            qscondition: "Minimum 2 caractères !",
            qsinfo: "Chercher un joueur ou une alliance.",
            riploss: "Probabilité de perte d'étoiles de la mort : ",
            rips: "Étoiles de la mort : ",
            rowcolor: "Couleur de la galaxie",
            searchally: "Chercher une alliance",
            searchplayer: "Chercher un joueur",
            ships: "Vaisseaux",
            spreading_current: "Actuel",
            spreading_delete: "Supprimer",
            spreading_galaxycolor: "Couleur galaxie",
            spreading_invert: "Inverser",
            spreading_new: "Nouveau",
            spreading_noplayer: "Aucun joueur sélectionné !",
            spreading_position: "Position",
            spreading_profileconfig: "Configuration du profil",
            spreading_showuniverse: "Afficher l'univers",
            spreading_title: "Partage d'informations",
            spreading_yourself: "Ajoutez-vous",
            spreadingconfig: "Configuration du profil",
            spreadinguniverse: "Afficher l'univers",
            updatedatabase: "Mettre à jour la galaxie",
            updatefailed: "Échec, veuillez réessayer.",
            updateidb: "Vous devez mettre à jour la base de données des galaxies",
            updateinfo: "Nouveautés",
            updatingdatabase: "... mise à jour de la galaxie ...",
            uvnotification: "Notification UniverseView !",
            uvupdated: "UniverseView a été mis à jour !",
            version: "Version",
            viewhighscore: "Meilleurs scores",
        }),
        e.Locale.add("HR", {
            addtofavs: "Dodaj u favorite",
            calcmd: "Izračunaj šansu za uništenje mjeseca",
            combat: "Bitka",
            coords: "Koordinate",
            currentprofile: "Trenutno:",
            currentprofilegal: "Trenutni profil: ",
            deleteprofile: "Obriši",
            drives: "Pogoni",
            espionage: "Špijunaža",
            hp: "GP",
            idbnotexist: "IDB ne postoji u ovom pregledniku",
            loadplanets: "Učitavanje!",
            md: "Uništenje mjeseca",
            menu_api: "OGame Api's",
            menu_clear: "Vrati na zadano",
            menu_extra: "Extra",
            menu_favouriteF: "Spremi koordinate svojih omiljenih meta koristeći pregled galaksije.",
            menu_fb: "Facebook stranica",
            menu_features: "Značajke",
            menu_fleetpageF: "Prikaži listu planeta na stranici flote.",
            menu_general: "Opći",
            menu_highscoreF: "Unaprijedi statistiku.",
            menu_home: "Početna stranica",
            menu_idb: "Baza podataka preglednika (Ova opcija radi samo na Chrome +12 i Firefox +4)",
            menu_militairyF: "Prikaži vojne bodove i brodove igrača u galaksiji.",
            menu_moondestructF: "Kalkulator za uništenje mjeseca na stranici galaksije.",
            menu_offlinewiki: "Offline wiki",
            menu_option: "Koju opciju želite koristiti za dobivanje koordinata planeta?",
            menu_org: ".org forum",
            menu_origin: "Origin forum",
            menu_personal: "Osobni server",
            menu_planetF: "Prikaži planete igrača u galaksiji.",
            menu_planetfieldsF: "Prikaži iskorištena polja u listi planeta.",
            menu_previewF: "Koristi prijašnju verziju ove skripte (uklonjeno u ažuriranju 2.1.3).",
            menu_quicksearchF: "Omogući značajku brzog pretraživanja.",
            menu_refreshF: "Prikaži vremensko osvježavanje sadržaja galaksije.",
            menu_remove: "Ukloni",
            menu_removeLocalS: "Resetiraj sve UniverseView vrijednosti na zadane vrijednosti!",
            menu_removePlanetidb: "Ukloni bazu podataka planeta iz svog preglednika, koristi se da bi igrač spremio svoje planete! (Ukljanjanje bi moglo pomoći kada bi prestalo raditi)",
            menu_removePlayeridb: "Uklonite bazu podataka igrača iz svojeg preglednika, koristi se za spremanje istraživanja igrača! (Uklanjanje bi moglo biti korisno ukoliko prestane raditi)",
            menu_researchF: "Prikaži istraživanja igrača u galaksiji.",
            menu_setaccess: "Koristi pristupni kod",
            menu_setserver: "Koristi server",
            menu_spreadingF: "Omogući značajku udaljenosti igrača.",
            menu_translation: "Prijevodi",
            menu_updateF: "Želite li ažurirati informacije o solarnim sistemima dok pregledavate galaksiju? (Moguće je samo sa bazom podataka preglednika ili opcijama osobnog servera)",
            menu_updatebrowser: "Ažuriraj bazu podataka na svom pregledniku.",
            menu_updategal: "Ažuriraj galaksiju",
            menu_updateserver: "Ažuriraj bazu podataka na svom serveru.",
            menu_us: ".us forum",
            menu_version: "Verzija",
            menu_wiki: "UniverseView wiki",
            militairy: "Vojni",
            moonpop: "Šansa za uništenje mjeseca: ",
            moonsize: "Veličina mjeseca",
            newprofile: "Novi",
            noidba: "Tvoj preglednik ne podržava IndexedDB!",
            noidbb: "(UniverseView opcija podataka preglednika)",
            noidbc: "Ako želiš koristiti ovu opciju moraš preuzeti:",
            noidbd: "CHrome verzija +12 ili Firefox verzija +4",
            noplayers: "Igrači nisu dodani!",
            noplayerselected: "Igrač nije odabran!",
            ogotchaconvert: "Konvertiraj sa OGotcha",
            openuvmenu: "Otvori Uv meni",
            planets: "Planete",
            playertospreading: "Dodaj igrača u prikazivanje udaljenosti",
            popmoon: "Uništi mjesec",
            profilecondition: "Molimo unesite barem 2 slova!",
            profileexists: "Profil već postoji!",
            profilenotexist: "Profil ne postoji!",
            qscondition: "Unesite najmanje 2 slova!",
            qsinfo: "Traži igrača ili savez.",
            riploss: "Šansa za uništenje zvijezde smrti: ",
            rips: "Zvijezda smrti ",
            rowcolor: "Boja galaksije",
            searchally: "Traži savez",
            searchplayer: "Traži igrača",
            ships: "Brodovi",
            spreading_current: "Trenutni",
            spreading_delete: "Obriši",
            spreading_galaxycolor: "Boja galaksije",
            spreading_invert: "Obrni",
            spreading_new: "Novi",
            spreading_noplayer: "Igrač nije odabran!",
            spreading_position: "Pozicija",
            spreading_profileconfig: "Upravljanje profilom",
            spreading_showuniverse: "Prikaži univerzum",
            spreading_title: "Udaljenost igrača",
            spreading_yourself: "Dodaj se",
            spreadingconfig: "Upravljanje profilom",
            spreadinguniverse: "Prikaži univerzum",
            trashsimsimulate: "Simuliraj sa TrashSim",
            updatedatabase: "Osvježi galaksiju",
            updatefailed: "Neuspješno, pokušaj ponovo!",
            updateidb: "Potrebno je ažuriranje baze podataka galaksije",
            updateinfo: "Informacije o ažuriranju",
            updatingdatabase: "... ažuriram galaksiju ...",
            uvnotification: "UniverseView obavijesti!",
            uvupdated: "UniverseView je ažuriran!",
            version: "Verzija",
            viewhighscore: "Pregled statistika",
        }),
        e.Locale.add("HU", {
            addtofavs: "Hozzáadás a kedvencekhez",
            calcmd: "Holdrombolás kiszámolása",
            combat: "Fegyver",
            coords: "Koordináták",
            currentprofile: "Jelenlegi:",
            currentprofilegal: "Jelenlegi profil: ",
            deleteprofile: "Törlés",
            drives: "Meghajtók",
            espionage: "Kémkedés",
            hp: "HP",
            idbnotexist: "A böngésződben az IDB nem létezik",
            loadplanets: "Töltés!",
            md: "Holdrombolás",
            menu_api: "Ogame Api-ja",
            menu_clear: "Alapértelmezett visszaállítása",
            menu_extra: "Extra",
            menu_favouriteF: "A kedvenc célpontjaid koordinátáinak mentése a galaxis fülön keresztül.",
            menu_fb: "Facebook oldal",
            menu_features: "Funkciók",
            menu_fleetpageF: "Mutassa a bolygók listáját a Flotta fülön.",
            menu_general: "Általános",
            menu_highscoreF: "Statisztikák megnövelése.",
            menu_home: "Kezdőoldal",
            menu_idb: "Böngésző adatbázis (Ez csak a Chrome 12+ illetve a Firefox 4+ verziókkal működik)",
            menu_militairyF: "A játékos katonai pontjainak és hajóinak megjelenítése galaxisnézetben.",
            menu_moondestructF: "Holdrombolás kalkulátor a galaxis oldalon.",
            menu_offlinewiki: "Offline Wiki",
            menu_option: "Melyik opciót akarod használni, hogy megszerezz bolygó koordinátákat?",
            menu_org: ".org fórum",
            menu_origin: "Origin fórum",
            menu_personal: "Személyi szerver",
            menu_planetF: "Játékosok bolygóinak mutatása galaxisnézetben.",
            menu_planetfieldsF: "Használt mezők megjelenítése a bolygók listáján.",
            menu_previewF: "Használd a szkript előnézeti verzióját (a 2.1.3-as frissítésben kiszedve).",
            menu_quicksearchF: "Gyorskeresés funkció engedélyezése.",
            menu_refreshF: "A galaxis tartalmának frissítési idejének megjelenítése.",
            menu_remove: "Eltávolítás",
            menu_removeLocalS: "Az összes UniverseView érték alapértelmezettre való visszaállítása!",
            menu_removePlanetidb: "Eltávolítja a bolygók adatbázisát a böngésződből, ezt a játékosok a bolygóik elmentésére szokták használni! (Ennek az eltávolítása segíthet, ha nem működik)",
            menu_removePlayeridb: "Eltávolítja a játékosok adatbázisát a böngésződből. Ez a játékosok kutatásainak mentésére használatos! (Ennek az eltávolítása segíthet, ha nem működik)",
            menu_researchF: "Játékosok kutatásainak megjelenítése galaxisnézetben.",
            menu_setaccess: "Számkód használata",
            menu_setserver: "Szerver használata",
            menu_spreadingF: "A funkció terjesztésének engedélyezése.",
            menu_translation: "Fordítások",
            menu_updateF: "Szeretnéd frissíteni a szolárrendszer információit amikor nézed azokat a galaxisban? (Csak böngészős adatbázissal, vagy személyes szerver opcióval használható)",
            menu_updatebrowser: "Adatbázis frissítése a böngésződben.",
            menu_updategal: "Galaxis frissítése",
            menu_updateserver: "Az adatbázis frissítése a szervereden.",
            menu_us: ".us fórum",
            menu_version: "Verzió",
            menu_wiki: "A UniverseView Wiki-je",
            militairy: "Katonai",
            moonpop: "Holdrombolás esélye: ",
            moonsize: "Hold mérete",
            newprofile: "Új",
            noidba: "A böngésződ nem támogatja az IndexedDB-t!",
            noidbb: "(böngésző UniverseView-adatbázis beállítása)",
            noidbc: "Ha szeretnéd használni ezt a funkciót, le kell töltened:",
            noidbd: "Chrome 12+, vagy Firefox 4+ verzió",
            noplayers: "Nem lett hozzáadva játékos!",
            noplayerselected: "Nincs játékos kiválasztva!",
            ogotchaconvert: "Konvertálás az OGotcha segítségével",
            openuvmenu: "Uv menü megnyitása",
            planets: "Bolygók",
            playertospreading: "Játékost ad hozzá a terjedéshez",
            popmoon: "Hold rombolása",
            profilecondition: "Legalább 2 karaktert gépelj be!",
            profileexists: "Ez a profil már létezik!",
            profilenotexist: "Ez a profil nem létezik!",
            qscondition: "Írj be legalább 2 karaktert!",
            qsinfo: "Játékos vagy szövetséges keresése.",
            riploss: "Halálcsillag elvesztésének esélye: ",
            rips: "Halálcsillagok: ",
            rowcolor: "Galaxis színe",
            searchally: "Szövetséges keresése",
            searchplayer: "Játékos keresése",
            ships: "Hajók",
            spreading_current: "Jelenlegi",
            spreading_delete: "Törlés",
            spreading_galaxycolor: "Galaxis színe",
            spreading_invert: "Invertálás",
            spreading_new: "Új",
            spreading_noplayer: "Nincs játékos kiválasztva!",
            spreading_position: "Pozíció",
            spreading_profileconfig: "Profil beállítások",
            spreading_showuniverse: "Az univerzum mutatása",
            spreading_title: "Játékos terjeszkedése",
            spreading_yourself: "Önmagad hozzáadása",
            spreadingconfig: "Profil beállítások",
            spreadinguniverse: "Az univerzum mutatása",
            trashsimsimulate: "Szimulálás a TrashSim szimulátorral",
            updatedatabase: "Galaxis frissítése",
            updatefailed: "Sikertelen, próbáld újra!",
            updateidb: "Frissítened kell a galaxis adatbázisát",
            updateinfo: "Információ frissítése",
            updatingdatabase: "... galaxis frissítése ...",
            uvnotification: "UniverseView Értesítés!",
            uvupdated: "A UniverseView frissítve lett!",
            version: "Verzió",
            viewhighscore: "Eredménytábla megjelenítése",
        }),
        e.Locale.add("IT", {
            addtofavs: "Aggiungi ai preferiti",
            calcmd: "Calcola distruzione luna",
            combat: "Militari",
            coords: "Coordinate",
            currentprofile: "Selezionato:",
            currentprofilegal: "Profilo corrente: ",
            deleteprofile: "Cancella",
            drives: "Motori",
            espionage: "Spionaggio",
            hp: "Madre",
            idbnotexist: "Il tuo browser non contiene un IDB",
            loadplanets: "Caricamento!",
            md: "Distruzione luna",
            menu_api: "API di Ogame",
            menu_clear: "Ripristina default",
            menu_extra: "Opzioni aggiuntive",
            menu_favouriteF: "Ricorda le coordinate dei tuoi target preferiti tramite la visuale galassia.",
            menu_fb: "Pagina Facebook",
            menu_features: "Opzioni",
            menu_fleetpageF: "Mostra la lista dei pianeti sulla pagina flotta.",
            menu_general: "Generale",
            menu_highscoreF: "Migliora la visuale classifica.",
            menu_home: "Pagina Principale",
            menu_idb: "Database del browser (questa opzione funziona solo con Chrome +12 e Firefox +4)",
            menu_militairyF: "Mostra il numero di navi e i punti militari di un giocatore in visuale galassia.",
            menu_moondestructF: "Calcolatore di distruzione lune nella visuale galassia.",
            menu_offlinewiki: "Wiki non in linea",
            menu_option: "Quale opzione vuoi usare per ottenere le coordinate dei pianeti?",
            menu_org: "Forum OGame.org",
            menu_origin: "Forum Origin",
            menu_personal: "Server personale",
            menu_planetF: "Mostra i pianeti di un giocatore in visuale galassia.",
            menu_planetfieldsF: "Mostra campi utilizzati nella lista pianeti.",
            menu_previewF: "Usa la versione di anteprima di questo script (rimosso nell update 2.1.3).",
            menu_quicksearchF: "Abilita opzione di ricerca rapida.",
            menu_refreshF: "Mostra l istante di agiornamento dela visuale galassia.",
            menu_remove: "Rimuovi",
            menu_removeLocalS: "Ripristina tutti i valori di UniverseView allo stato originale!",
            menu_removePlanetidb: "Cancella il database dei pianeti dal tuo browser, serve a salvare la posizione dei pianeti dei giocatori! (Cancellarlo potrebbe aiutare se ha smesso di funzionare)",
            menu_removePlayeridb: "Cancella il database dei giocatori dal tuo browser, serve a salvare le ricerche dei giocatori che ha effettuato! (Cancellarlo potrebbe aiutare se ha smesso di funzionare)",
            menu_researchF: "Mostra le ricerche di un giocatore in visuale galassia.",
            menu_setaccess: "Usa chiave di accesso",
            menu_setserver: "Usa server",
            menu_spreadingF: "Abilita l opzione distribuzione dei pianeti del giocatore.",
            menu_translation: "Traduzioni",
            menu_updateF: "Vuoi aggiornare le informazioni sui sistemi solari quando li visualizzi in galassia? (Possibile solo con le opzioni Server personale e Database del browser)",
            menu_updatebrowser: "Aggiorna il database sul tuo browser.",
            menu_updategal: "Aggiorna visuale galassia",
            menu_updateserver: "Aggiorna il database sul tuo server.",
            menu_us: "Forum OGame.us",
            menu_version: "Versione",
            menu_wiki: "UniverseView Wiki",
            militairy: "Militare",
            moonpop: "Percentuale di distruzione luna: ",
            moonsize: "Dimensione della luna",
            newprofile: "Nuovo",
            noidba: "Il tuo browser non supporta IndexedDB!",
            noidbb: "(opzione database del browser di UniverseView)",
            noidbc: "Se vuoi usare questa impostazione devi effettuare il download:",
            noidbd: "Chrome 12 o Firefox 4 e successive",
            noplayers: "Nessun giocatore aggiunto!",
            noplayerselected: "Nessun giocatore selezionato!",
            ogotchaconvert: "Converti con OGotcha",
            openuvmenu: "Apri il menù principale di Uv",
            planets: "Pianeti",
            playertospreading: "Aggiungi giocatore alla Distribuzione",
            popmoon: "Distruggi la luna",
            profilecondition: "Per favore, inserisci almeno 2 caratteri!",
            profileexists: "Quel profilo già esiste!",
            profilenotexist: "Quel profilo non esiste!",
            qscondition: "Inserisci almeno 2 caratteri!",
            qsinfo: "Cerca un giocatore o un alleanza.",
            riploss: "Percentuale di distruzione Morte Nera: ",
            rips: "Morti nere: ",
            rowcolor: "Colore dello sfondo",
            searchally: "Cerca un alleanza",
            searchplayer: "Cerca un giocatore",
            ships: "Navi",
            spreading_current: "Corrente",
            spreading_delete: "Cancella",
            spreading_galaxycolor: "Colore galassia",
            spreading_invert: "Inverti",
            spreading_new: "Nuovo",
            spreading_noplayer: "Nessun giocatore selezionato!",
            spreading_position: "Posizione",
            spreading_profileconfig: "Configurazione profilo",
            spreading_showuniverse: "Mostra universo",
            spreading_title: "Distribuzione dei giocatori",
            spreading_yourself: "Aggiungi te stesso",
            spreadingconfig: "Impostazioni profilo",
            spreadinguniverse: "Mostra universo",
            trashsimsimulate: "Simula con TrashSim",
            updatedatabase: "Aggiorna galassia",
            updatefailed: "Errore, prova ancora!",
            updateidb: "Devi aggiornare il database",
            updateinfo: "Informazioni sull' aggiornamento",
            updatingdatabase: "...aggiornamento visuale galassia...",
            uvnotification: "Notifica di UniverseView!",
            uvupdated: "UniverseView è stato aggiornato!",
            version: "Versione",
            viewhighscore: "Classifica",
        }),
        e.Locale.add("JA", {}),
        e.Locale.add("NL", {
            addtofavs: "Toevoegen aan favorieten",
            calcmd: "Bereken maan vernietiging",
            combat: "Gevecht",
            coords: "Coördinaten",
            currentprofile: "Huidig:",
            currentprofilegal: "Huidig profiel: ",
            deleteprofile: "Verwijder",
            drives: "Motoren",
            espionage: "Spionage",
            hp: "HP",
            idbnotexist: "IDB bestaat niet in deze browser",
            loadplanets: "Laden!",
            md: "Maan Vernietiging",
            menu_api: "Ogame Api's",
            menu_clear: "Herstel standaard",
            menu_extra: "Extra",
            menu_favouriteF: "Sla je favoriete doelwitten op via de melkweg.",
            menu_fb: "Facebook pagina",
            menu_features: "Functies",
            menu_fleetpageF: "Planeten lijst op de pagina vloot.",
            menu_general: "Algemeen",
            menu_highscoreF: "Verbetering van statistieken.",
            menu_home: "Home pagina",
            menu_idb: "Browser databank (Deze optie is alleen mogelijk in Chrome +12 en Firefox +4)",
            menu_militairyF: "Laat een speler zijn militaire punten en schepen zien in de melkweg.",
            menu_moondestructF: "Bereken maan vernietiging op de melkweg pagina.",
            menu_offlinewiki: "Offline wiki",
            menu_option: "Welke optie wilt u gebruiken om planeet coordinaten op te halen?",
            menu_org: ".org forum",
            menu_origin: "Origin forum",
            menu_personal: "Persoonlijk server",
            menu_planetF: "Laat een speler zijn planeten zien in de melkweg.",
            menu_planetfieldsF: "Toon gebruikte velden in de lijst met planeten.",
            menu_previewF: "Gebruik de preview versie van dit script (verwijderd in update 2.1.3).",
            menu_quicksearchF: "Gebruik de snelzoek functie.",
            menu_refreshF: "Laat de refresh tijd zien van de melkweg inhoud.",
            menu_remove: "Verwijder",
            menu_removeLocalS: "Herstel alle UniverseView waarden terug naar standaard de waarden!",
            menu_removePlanetidb: "Verwijder de planeten databank in je browser, deze wordt gebruikt om speler hun planeten op te slagen! (Dit kan helpen als deze niet meer werkt)",
            menu_removePlayeridb: "Verwijder de speler databank in je browser, deze wordt gebruikt om spelers hun onderzoeken op te slagen! (Dit kan helpen als deze niet meer werkt)",
            menu_researchF: "Laat een speler zijn onderzoek zien in de melkweg.",
            menu_setaccess: "Toegangscode gebruiken",
            menu_setserver: "Server gebruiken",
            menu_spreadingF: "Gebruik de speler spreidings functie.",
            menu_translation: "Vertalingen",
            menu_updateF: "Wil je zonnestelsel informatie bijwerken als je door de melkweg gaat? (Alleen mogelijk met de browser databank of persoonlijke server optie)",
            menu_updatebrowser: "Werk de databank in je browser bij.",
            menu_updategal: "Melkweg bijwerken",
            menu_updateserver: "Werk de databank op je server bij.",
            menu_us: ".us forum",
            menu_version: "Versie",
            menu_wiki: "UniverseView Wiki",
            militairy: "Militair",
            moonpop: "Kans maan vernietiging: ",
            moonsize: "Grootte maan",
            newprofile: "Nieuw",
            noidba: "Je browser ondersteund IndexedDB niet!",
            noidbb: "(UniverseView browser databank optie)",
            noidbc: "Als je deze optie wil gebruiken moet je het volgende downloaden:",
            noidbd: "Chrome versie +12 of Firefox versie +4",
            noplayers: "Geen spelers toegevoegd!",
            noplayerselected: "Geen speler geselecteerd!",
            ogotchaconvert: "Converteer met OGotcha",
            openuvmenu: "Open het Uv menu",
            planets: "Planeten",
            playertospreading: "Speler toevoegen aan spreiding",
            popmoon: "Vernietig maan",
            profilecondition: "Geef minstens 2 letters in, aub!",
            profileexists: "Dat profiel bestaat al!",
            profilenotexist: "Dat profiel bestaat niet!",
            qscondition: "Geef minstens 2 letters in!",
            qsinfo: "Zoek een speler of alliantie.",
            riploss: "Kans Sterren kapot: ",
            rips: "Ster des Doods: ",
            rowcolor: "Melkweg kleur",
            searchally: "Zoek een alliantie",
            searchplayer: "Zoek een speler",
            ships: "Schepen",
            spreading_current: "Huidig",
            spreading_delete: "Verwijderen",
            spreading_galaxycolor: "Melkweg kleur",
            spreading_invert: "Omkeren",
            spreading_new: "Nieuw",
            spreading_noplayer: "Geen speler geselecteerd!",
            spreading_position: "Positie",
            spreading_profileconfig: "Profiel configuratie",
            spreading_showuniverse: "Toon het universum",
            spreading_title: "Speler spreiding",
            spreading_yourself: "Voeg jezelf toe",
            spreadingconfig: "Profiel configuratie",
            spreadinguniverse: "Toon universum",
            updatedatabase: "Melkweg bijwerken",
            updatefailed: "Mislukt, probeer opnieuw!",
            updateidb: "Je moet de melkweg databank bijwerken",
            updateinfo: "Update informatie",
            updatingdatabase: "... melkweg bijwerken ...",
            uvnotification: "UniverseView Notificatie!",
            uvupdated: "UniverseView is bijgewerkt!",
            version: "Versie",
            viewhighscore: "Bekijk rang",
        }),
        e.Locale.add("NO", {}),
        e.Locale.add("PL", {
            addtofavs: "Dodaj do ulubionych",
            calcmd: "Wylicz zniszczenie księżyca",
            combat: "Walka",
            coords: "Współrzędne",
            currentprofile: "Profil: ",
            currentprofilegal: "Aktywny profil: ",
            deleteprofile: "Usuń",
            drives: "Napędy",
            espionage: "Tech. szpiegowska",
            hp: "Matka",
            idbnotexist: "IDB nie istnieje w tej przeglądarce",
            loadplanets: "Wczytywanie!",
            md: "Niszczenie księżyca",
            menu_api: "Ogame API",
            menu_clear: "Przywróć domyślne",
            menu_extra: "Extra",
            menu_favouriteF: "Zapisz współrzędne ulubionego celu za pomocą podglądu galaktyki.",
            menu_fb: "Facebook",
            menu_features: "Funkcje",
            menu_fleetpageF: "Pokazuj listę planet w zakładce Flota.",
            menu_general: "Ogólne",
            menu_highscoreF: "Ulepsz statystyki.",
            menu_home: "Strona główna",
            menu_idb: "Baza danych przeglądarki (Działa tylko z Chrome w wersji 12+ i Firefox 4+)",
            menu_militairyF: "Pokazuj punkty militarne i ilość statków danego gracza w podglądzie galaktyki.",
            menu_moondestructF: "Kalkulator niszczenia księżyca w podglądzie galaktyki.",
            menu_offlinewiki: "Offline wiki",
            menu_option: "Which option do you wan't to use to fetch planet coordinates?",
            menu_org: ".org board",
            menu_origin: "Origin board",
            menu_personal: "Prywatny serwer",
            menu_planetF: "Pokazuj listę planet danego gracza w podglądzie galaktyki.",
            menu_planetfieldsF: "Pokazuj wykorzystane pola planety na liście planet.",
            menu_previewF: "Use the preview version of this script (removed in update 2.1.3).",
            menu_quicksearchF: "Włącz funkcję szybkiego wyszukiwania.",
            menu_refreshF: "Pokazuj czas aktualnego podglądu galaktyki.",
            menu_remove: "Usuń",
            menu_removeLocalS: "Przywróc wszystkie domyślne ustawienia UniverseView!",
            menu_removePlanetidb: "Usuń bazę planet z przeglądarki - używane do zapisywania listy planet danego gracza! (Usunięcie może pomóc jeśli funkcja przestała działać.)",
            menu_removePlayeridb: "Usuń bazę graczy z przeglądarki - używane do zapisywania badań danego gracza! (Usunięcie może pomóc jeśli funkcja przestała działać.)",
            menu_researchF: "Pokazuj badania danego gracza w podlądzie galaktyki.",
            menu_setaccess: "Używaj kodu",
            menu_setserver: "Używaj serwera",
            menu_spreadingF: "Włącz funkcję podglądu zasiedlenia galaktyki.",
            menu_translation: "Tłumaczenia",
            menu_updateF: "Czy chcesz aktualizować informacje o galaktyce, gdy ją przeglądasz ? (Dostępny z przeglądarką bazy lub własnym serwerem.)",
            menu_updatebrowser: "Aktualizuj bazę danych w przeglądarce.",
            menu_updategal: "Aktualizuj galaktykę",
            menu_updateserver: "Aktualizuj bazę danych na własnym serwerze.",
            menu_eventnotification: "Aktywuj powiadomienia dla własnej floty.",
            menu_galaxyRankF: "Pokazuj ranking danego gracza w podglądzie galaktyki.",
            menu_galaxyDebrisF: "Pokazuj pole zniszczeń jako liczby zamiast ikony.",
            menu_messagesraidF: "Dodaj link do szybkiego farmienia w raportach szpiegowskich.",
            menu_featuresCategoryGeneric: "Ogólne",
            menu_featuresCategoryGalaxy: "Galaktyka",
            menu_featuresCategoryOther: "Inne",
            menu_en_menu_info: "Włącz lub wyłącz powiadomienia dla danego typu misji floty:",
            menu_en_menu_own_arriving: "Przybywająca flota",
            menu_en_menu_own_arriving_info: "Twoja flota przybywające na planety własne lub innych graczy.",
            menu_en_menu_own_returning: "Zawracająca flota",
            menu_en_menu_own_returning_info: "Twoja flota zawracająca/powracająca z misji.",
            menu_en_menu_other_arriving: "Wroga/przyjazna flota",
            menu_en_menu_other_arriving_info: "Wroga lub przyjazna flota przybywająca na Twoją planetę.",
            menu_en_menu_notification_offset: "Czas (w sekundach)",
            menu_en_menu_notification_offset_info: "Ile sekund przed przylotem pokazać powiadomienie (domyślnie 60 sekund).",
            menu_us: ".us board",
            menu_version: "Wersja",
            menu_wiki: "UniverseView Wiki",
            militairy: "Wojsko",
            moonpop: "Szansa na zniszczenie księżyca: ",
            moonsize: "Średnica księżyca",
            newprofile: "Nowy",
            noidba: "Twoja przeglądarka nie obsługuje IndexedDB!",
            noidbb: "(UniverseView browser database option)",
            noidbc: "Jeśli chcesz korzystać z tej funkcji pobierz:",
            noidbd: "Chrome w wersji 12+ lub Firefox w wersji 4+",
            noplayers: "Nie dodano żadnych graczy!",
            noplayerselected: "Nie wybrano żadnego gracza!",
            ogotchaconvert: "Konwertuj w OGotcha",
            trashsimsimulate: "Symuluj w TrashSim",
            openuvmenu: "Open Uv menu",
            planets: "Planety",
            playertospreading: "Dodaj gracza do podglądu zasiedlenia galaktyk.",
            popmoon: "Niszcz księżyc",
            profilecondition: "Wpisz przynajmniej 2 litery!",
            profileexists: "Taki profil już istnieje!",
            profilenotexist: "Ten profil nie istnieje!",
            qscondition: "Wpisz przynajmniej 2 litery!",
            qsinfo: "Wyszukaj gracza lub sojusz.",
            riploss: "Szansa na zniszczenie Gwiazdy Śmierci: ",
            rips: "Gwiazdy Śmierci: ",
            rowcolor: "Kolor galaktyki",
            searchally: "Wyszukaj sojusz",
            searchplayer: "Wyszukaj gracza",
            ships: "Statki",
            spreading_current: "Aktualnie",
            spreading_delete: "Usuń",
            spreading_galaxycolor: "Kolor galaktyki",
            spreading_invert: "Odwróć kolor",
            spreading_new: "Nowy",
            spreading_noplayer: "Nie wybrano żadnego gracza!",
            spreading_position: "Pozycja",
            spreading_profileconfig: "Profile",
            spreading_showuniverse: "Pokaż uniwersum",
            spreading_title: "Zasiedlenie uniwersum",
            spreading_yourself: "Dodaj siebie",
            spreadingconfig: "Profile",
            spreadinguniverse: "Pokaż uniwersum",
            updatedatabase: "Aktualizuj galaktykę",
            updatefailed: "Błąd, spróbuj ponownie!",
            updateidb: "Musisz zaktualizować bazę galaktyki",
            updateinfo: "Aktualizuj informacje",
            updatingdatabase: "... aktualizacja galaktyki ...",
            uvnotification: "Powiadomienie UniverseView !",
            uvupdated: "UniverseView zostało zaktualizowane!",
            version: "Wersja",
            viewhighscore: "Pokaż statystyki",
            dnotification_title: "{community} {universe} kontrola flot",
            dnotification_arriving_friendly: "Flota z misją {mission} dotrze \n o {time}\n na {coords}",
            dnotification_arriving_neutral: "Flota z misją {mission} dotrze \n o {time}\n na {coords}",
            dnotification_arriving_hostile: "!WROGA flota z misją {mission} dotrze \n o {time}\n na {coords}",
            dnotification_returning: "Flota z misją {mission} powróci \n o {time}\n na {coords}",
            dnotification_open: "Przejdź do {community} {universe}",
        }),
        e.Locale.add("BR", {
            addtofavs: "",
            calcmd: "",
            combat: "",
            coords: "Coordenadas",
            currentprofile: "Atual:",
            currentprofilegal: "",
            deleteprofile: "",
            drives: "",
            espionage: "Espionagem",
            hp: "",
            idbnotexist: "IDB não existe nesse navegador",
            loadplanets: "",
            md: "",
            menu_api: "",
            menu_clear: "Restaurar padrão",
            menu_extra: "",
            menu_favouriteF: "",
            menu_fb: "",
            menu_features: "Características",
            menu_fleetpageF: "",
            menu_general: "Geral",
            menu_highscoreF: "",
            menu_home: "Página Inicial",
            menu_idb: "",
            menu_militairyF: "",
            menu_moondestructF: "",
            menu_offlinewiki: "Wiki offline",
            menu_option: "",
            menu_org: "",
            menu_origin: "Fórum na Origin",
            menu_personal: "Servidor pessoal",
            menu_planetF: "Mostrar os planetas do jogador na galáxia.",
            menu_planetfieldsF: "Mostrar campos utilizados na lista de planetas.",
            menu_previewF: "",
            menu_quicksearchF: "",
            menu_refreshF: "Exibir o horário de carregamento do conteúdo da página galáxia.",
            menu_remove: "Remover",
            menu_removeLocalS: "",
            menu_removePlanetidb: "",
            menu_removePlayeridb: "",
            menu_researchF: "Mostrar pesquisas do jogado na galáxia.",
            menu_setaccess: "Utilizar senha",
            menu_setserver: "",
            menu_spreadingF: "",
            menu_translation: "",
            menu_updateF: "",
            menu_updatebrowser: "",
            menu_updategal: "",
            menu_updateserver: "",
            menu_us: "",
            menu_version: "Versão",
            menu_wiki: "",
            militairy: "",
            moonpop: "",
            moonsize: "Tamanho da Lua",
            newprofile: "",
            noidba: "Seu navegador não suporta IndexedDB!",
            noidbb: "(Opção de banco de dados UniverseView no navegador)",
            noidbc: "Se você quiser utilizar essa opção você precisa baixar:",
            noidbd: "Versão do Chrome +12 ou Firefox +4",
            noplayers: "Nenhum jogador adicionado!",
            noplayerselected: "",
            ogotchaconvert: "Converter com OGotcha",
            openuvmenu: "",
            planets: "",
            playertospreading: "",
            popmoon: "",
            profilecondition: "Por favor digite ao menos 2 letras!",
            profileexists: "Este perfil já existe!",
            profilenotexist: "",
            qscondition: "",
            qsinfo: "",
            riploss: "Chance de destruir Estrela da Morte: ",
            rips: "",
            rowcolor: "Cor da galáxia",
            searchally: "",
            searchplayer: "",
            ships: "Naves",
            spreading_current: "",
            spreading_delete: "",
            spreading_galaxycolor: "",
            spreading_invert: "",
            spreading_new: "",
            spreading_noplayer: "",
            spreading_position: "Posição",
            spreading_profileconfig: "",
            spreading_showuniverse: "",
            spreading_title: "",
            spreading_yourself: "",
            spreadingconfig: "Configuração do perfil",
            spreadinguniverse: "",
            updatedatabase: "Atualizar galáxia",
            updatefailed: "",
            updateidb: "",
            updateinfo: "Atualizar informação",
            updatingdatabase: "",
            uvnotification: "",
            uvupdated: "",
            version: "Versão",
            viewhighscore: "",
        }),
        e.Locale.add("PT", {
            addtofavs: "Adicionar aos favoritos",
            calcmd: "Calcular probabilidade de destruição de lua",
            combat: "Combate",
            coords: "Coordenadas",
            currentprofile: "Atual:",
            currentprofilegal: "Perfil actual. ",
            deleteprofile: "Apagar",
            drives: "Motores",
            espionage: "Espionagem",
            hp: "PH",
            idbnotexist: "IDB não existe neste navegador",
            loadplanets: "A carregar!",
            md: "Destruição de lua",
            menu_api: "Ogame Api's",
            menu_clear: "Recuperar padrão de origem",
            menu_extra: "Extras",
            menu_favouriteF: "Guarda as coordenadas dos teus alvos favoritos através da página da galáxia.",
            menu_fb: "Pagina do Facebook",
            menu_features: "Características",
            menu_fleetpageF: "Mostra a lista dos planetas na página da frota.",
            menu_general: "Geral",
            menu_highscoreF: "Melhorar estatísticas.",
            menu_home: "Página Inicial",
            menu_idb: "Base de dados do navegador (Esta opção só funciona no Chrome +12 e Firefox +4)",
            menu_militairyF: "Mostra os pontos militares e naves de um jogador na galáxia.",
            menu_moondestructF: "Calcular destruição de lua na página da galáxia.",
            menu_offlinewiki: "Wiki Offline",
            menu_option: "Que opções você quer usar para procurar as coordenadas de um planeta?",
            menu_org: ".org fórum",
            menu_origin: "Fórum Origin",
            menu_personal: "Servidor pessoal",
            menu_planetF: "Mostra os planetas de um jogador na galáxia.",
            menu_planetfieldsF: "Mostra os campos usados na lista de planetas.",
            menu_previewF: "Use a versão anterior deste script (removido na versão 2.1.3).",
            menu_quicksearchF: "Activar função pesquisa rápida.",
            menu_refreshF: "Mostra o tempo de actualização do conteúdo da galáxia.",
            menu_remove: "Remover",
            menu_removeLocalS: "Reiniciar todos os valores do UniverseView para os valores de origem!",
            menu_removePlanetidb: "Remove a base de dados dos planetas do teu navegador, é usar para salvar os planetas dos jogadores! (Remover pode ajudar quando deixa de trabalhar)",
            menu_removePlayeridb: "Remove a base de dados de jogadores do teu navegador, pode ser usados para salvar as pesquisas dos jogadores! (Remover pode ajudar quando deixa de trabalhar)",
            menu_researchF: "Mostra as pesquisas de um jogador na galáxia.",
            menu_setaccess: "Usar palavra-passe",
            menu_setserver: "Usar servidor",
            menu_spreadingF: "Activar a função de difusão de jogadores.",
            menu_translation: "Traduções",
            menu_updateF: "Quer actualizar a informação do sistema solar quando está a vê-lo na galáxia? (Só é possível com base de dados do navegador ou opção de servidor pessoal)",
            menu_updatebrowser: "Actualizar a base de dados no teu navegador.",
            menu_updategal: "Actualizar galáxia",
            menu_updateserver: "Actualizar a base de dados no teu servidor.",
            menu_us: ".us fórum",
            menu_version: "Versão",
            menu_wiki: "Wiki UniverseView",
            militairy: "Militar",
            moonpop: "Probabilidade de destruição de lua. ",
            moonsize: "Tamanho da Lua",
            newprofile: "Novo",
            noidba: "O seu navegador não suporta IndexedDB!",
            noidbb: "(opção da base de dados do UniverseView no navegador)",
            noidbc: "Se quiser usar esta opção terá de fazer a transferência:",
            noidbd: "Versão do Chrome +12 ou versão do Firefox +4",
            noplayers: "Não tem jogadores adicionados!",
            noplayerselected: "Nenhum jogador seleccionado!",
            ogotchaconvert: "Converter com o OGotcha",
            openuvmenu: "Abrir menu Uv",
            planets: "Planetas",
            playertospreading: "Adicionar jogador à difusão",
            popmoon: "Destruir lua",
            profilecondition: "Insira no mínimo 2 letras, por favor!",
            profileexists: "Este perfil já existe!",
            profilenotexist: "Este perfil não existe!",
            qscondition: "Adiciona pelo menos 2 letras!",
            qsinfo: "Procurar jogador ou aliança.",
            riploss: "Probabilidade de perder Estrela da Morte. ",
            rips: "Estrelas da Morte ",
            rowcolor: "Cor da galáxia",
            searchally: "Procurar Aliança",
            searchplayer: "Procurar jogador",
            ships: "Naves",
            spreading_current: "Actual",
            spreading_delete: "Apagar",
            spreading_galaxycolor: "Cor da galáxia",
            spreading_invert: "Inverter",
            spreading_new: "Novo",
            spreading_noplayer: "Nenhum jogador seleccionado!",
            spreading_position: "Posição",
            spreading_profileconfig: "Configuração de perfil",
            spreading_showuniverse: "Mostrar universo",
            spreading_title: "Distribuição dos Jogadores",
            spreading_yourself: "Adiciona-te a ti mesmo",
            spreadingconfig: "Configurar perfil",
            spreadinguniverse: "Mostrar universo",
            updatedatabase: "Actualizar galáxia",
            updatefailed: "Falhou, tente outra vez!",
            updateidb: "Precisas de actualizar a base de dados da galáxia",
            updateinfo: "Actualizar informação",
            updatingdatabase: "... a actualizar galaxia ...",
            uvnotification: "Notificações UniverseView!",
            uvupdated: "UniverseView foi actualizado!",
            version: "Versão",
            viewhighscore: "Ver Estatísticas",
        }),
        e.Locale.add("RO", {
            addtofavs: "Adaugă la favorite",
            calcmd: "Calculează şansa de distrugere a lunii",
            combat: "Luptă",
            coords: "Coordonate",
            currentprofile: "curent:",
            currentprofilegal: "Profilul actual: ",
            deleteprofile: "Şterge",
            drives: "Motoare",
            espionage: "Spionaj",
            hp: "Hp",
            idbnotexist: "IDB nu există in acest browser",
            loadplanets: "Se Încarcă!",
            md: "Distrugerea Lunii",
            menu_api: "Api-urile Ogame",
            menu_clear: "Recuperare standard",
            menu_extra: "Suplimentar",
            menu_favouriteF: "Depozitează coordonatele ţintelor tale preferate cu ajutorul paginii galaxiei.",
            menu_fb: "Pagina de facbook",
            menu_features: "Caracteristici",
            menu_fleetpageF: "Arată lista planetelor pe pagina flotei.",
            menu_general: "General",
            menu_highscoreF: "înbunătăţeşte statisticile.",
            menu_home: "Pagină de început",
            menu_idb: "Data de baza a browserului( Această opţiune merge în Chrome+12 şi Firefox+4)",
            menu_militairyF: "Arată-i unui jucător punctele sale militare şi navele din galaxie.",
            menu_moondestructF: "Calculatorul  distrugerii lunii pe pagina galaxiei.",
            menu_offlinewiki: "Wikiul offline",
            menu_option: "Ce opţiune vrei să foloseşti ca să obţii coordonatele planetare?",
            menu_org: "Baza de date .org",
            menu_origin: "tabel Origin",
            menu_personal: "Servăr personal",
            menu_planetF: "Arată unui jucător planetele sale în galaxie.",
            menu_planetfieldsF: "Arată câmpurile folosite in lista plannetelor.",
            menu_previewF: "Folosiţi versiunea de examinare a acestui script (Înlăturat în actualizarea 2.1.3).",
            menu_quicksearchF: "Activează Căutare rapidă.",
            menu_refreshF: "Arată timpul de reîmprospătare al conţinutului galaxiei.",
            menu_remove: "Înlătură",
            menu_removeLocalS: "Resetează toate valorile UniverseView la valorile iniţiale!",
            menu_removePlanetidb: "Înlătura  baza de date a planetelor din browserul dumneavoastră , este folosit ca să salveze planetele jucătorilor(înlăturarea acestuia ar putea ajuta tunci când acesta a încetat să mai funcţioneze)",
            menu_removePlayeridb: "Înlătură baza de date a jucătorilor din browserul dumneavoastră ,Este folosit să salveze cercetările jucătorilor!(Înlaturarea acestuia ar putea ajuta când a încetat să mai functioneze)",
            menu_researchF: "Arată-i unui jucător cercetările lui în galaxie.",
            menu_setaccess: "Folseşte parola",
            menu_setserver: "Foloseşte servărul",
            menu_spreadingF: "Iniţiază modul de împrăştiere a jucătorului.",
            menu_translation: "Traduceri",
            menu_updateF: "Vrei să actualizezi informaţiile sistemului solar când vizionezi galaxia? (Posibil doar cu baza de date a browserului sau opţiunile personale ale servărului)",
            menu_updatebrowser: "Actualizează baza de date a browserului dumneavoastră.",
            menu_updategal: "Actualizează galaxia",
            menu_updateserver: "Actualizează baza de date a servărului dumneavoastră.",
            menu_us: "tabelul .us",
            menu_version: "Versiune",
            menu_wiki: "Wikiul UniverseView",
            militairy: "Militar",
            moonpop: "Şansa ca luna sa fie distrusă: ",
            moonsize: "Dimensiunea lunii",
            newprofile: "Nou",
            noidba: "Browserul tău nu suportăa indexedDB!",
            noidbb: "(Opţiunele datei de bază  pentru browser UniverseView)",
            noidbc: "Dacă vrei să foloseşti aceasta opţiune va trebuii să descarci:",
            noidbd: "Versiune Chrome +12 sau versiune Firefox +4",
            noplayers: "Nici un jucător adăugat!",
            noplayerselected: "Nu este nici un jucător selectat!",
            ogotchaconvert: "Converteşte cu OGotcha",
            openuvmenu: "Deschide meniul Uv",
            planets: "Planete",
            playertospreading: "Adaugă jucător la împrăştiere",
            popmoon: "Distruge Luna",
            profilecondition: "Te rugăm introdu cel puţin 2 litere !",
            profileexists: "Acest profil există deja!",
            profilenotexist: "Acest profil nu există!",
            qscondition: "Introdu cel puţin 2 litere!",
            qsinfo: "Caută jucători sau alianţe.",
            riploss: "Şansa de pierdere a RIP: ",
            rips: "Stelele Morţii: ",
            rowcolor: "Culoarea Galaxiei",
            searchally: "Caută o alianţă",
            searchplayer: "Caută un jucător",
            ships: "Nave",
            spreading_current: "Curent",
            spreading_delete: "Şterge",
            spreading_galaxycolor: "Culoarea galaxiei",
            spreading_invert: "Inversare",
            spreading_new: "Nou",
            spreading_noplayer: "Nu există nici un jucător selectat!",
            spreading_position: "Poziţia",
            spreading_profileconfig: "Configuraţia profilului",
            spreading_showuniverse: "Arată universul",
            spreading_title: "Imprăştierea jucătorilor",
            spreading_yourself: "Adaugăte",
            spreadingconfig: "Configuraţia profilului",
            spreadinguniverse: "Arată universul",
            trashsimsimulate: "Simulează cu TrashSim",
            updatedatabase: "Actualizează galaxia",
            updatefailed: "A eşuat , încercă din nou!",
            updateidb: "Trebuie să îţi actualizezi baza de date a galaxiei",
            updateinfo: "Actualizează informaţia",
            updatingdatabase: "....Se actualizează galaxia...",
            uvnotification: "Notificaţiile UniverseView!",
            uvupdated: "UniverseView a fost actualizat!",
            version: "Versiune",
            viewhighscore: "Vizionează scorurile",
        }),
        e.Locale.add("RU", {
            addtofavs: "Добавить в избранное",
            calcmd: "Посчитать разрушение Луны",
            combat: "Боевые",
            coords: "Координаты",
            currentprofile: "Теперь:",
            currentprofilegal: "Текущий профиль: ",
            deleteprofile: "Удалить",
            drives: "Двигатели",
            espionage: "Шпионаж",
            hp: "НП",
            idbnotexist: "IDB не запущено в этом обозревателе",
            loadplanets: "Загрузка!",
            md: "Разрушение луны",
            menu_api: "Ogame Api's",
            menu_clear: "Восстановить по-умолчанию",
            menu_extra: "Дополнительно",
            menu_favouriteF: "Сохранять координаты ваших избранных целей через страницу галактики.",
            menu_fb: "Страница Facebook",
            menu_features: "Опции",
            menu_fleetpageF: "Показать список планет на странице флота.",
            menu_general: "Главная",
            menu_highscoreF: "Улучшить статистику.",
            menu_home: "Домашняя страница",
            menu_idb: "База данных обозревателя (Эта опция работает только в Chrome +12 и Firefox +4)",
            menu_militairyF: "Показать вооружение и корабли игрока в галактике.",
            menu_moondestructF: "Калькулятор разрушения луны на странице галактики.",
            menu_offlinewiki: "Wiki",
            menu_option: "Какой вариант вы хотите использовать для извлечения координат планеты?",
            menu_org: ".org портал",
            menu_origin: "Портал Origin",
            menu_personal: "Личный сервер",
            menu_planetF: "Показать игроку его планеты к галактике.",
            menu_planetfieldsF: "Показывать использованные поля в списке планет.",
            menu_previewF: "Использовать демо версию скрипта (удалено в 2.1.3).",
            menu_quicksearchF: "Включить опцию быстрого поиска.",
            menu_refreshF: "Показать время обновления галактики в контенте.",
            menu_remove: "Убрать",
            menu_removeLocalS: "Сбросить все переменные UniverseView к начальным!",
            menu_removePlanetidb: "Удалить базу данных планет из браузера, это нужно для сохранения игроками их планет! (Удаление может помочь, когда перестало работать)",
            menu_removePlayeridb: "Удалить базу данных игроков из браузера, это нужно для сохранения игроками их исследований! (Удаление может помочь, когда перестало работать)",
            menu_researchF: "Показать игроку его исследование в галактике.",
            menu_setaccess: "Использовать ключ доступа",
            menu_setserver: "Использовать сервер",
            menu_spreadingF: "Включить функцию распределения игроков.",
            menu_translation: "Переводы",
            menu_updateF: "Вы хотите обновлять солнечную систему когда просматриваете ее в галактике? (Возможно только с опциями базы данных обозревателя или персонального сервера)",
            menu_updatebrowser: "Обновить базу данных в вашем браузере.",
            menu_updategal: "Обновить галактику",
            menu_updateserver: "Обновить базу данных на вашем сервере.",
            menu_us: ".us портал",
            menu_version: "Версия",
            menu_wiki: "UniverseView Wiki",
            militairy: "Вооружение",
            moonpop: "Шанс разрушить луну: ",
            moonsize: "Размер луны",
            newprofile: "Новый",
            noidba: "Ваш обозреватель не поддерживает IndexedDB!",
            noidbb: "(Опции базы данных UniverseView обозревателя)",
            noidbc: "Если вы хотите использовать эту опцию, вам надо загрузить:",
            noidbd: "Chrome версия +12 или Firefox версия +4",
            noplayers: "Не добавлено игроков!",
            noplayerselected: "Не выбрано игроков!",
            ogotchaconvert: "Конвертировать в OGotcha",
            openuvmenu: "Открыть Uv меню",
            planets: "Планеты",
            playertospreading: "Добавить игрока в Распостроненность",
            popmoon: "Разрушить луну",
            profilecondition: "Пожалуйста введите минимум 2 символа!",
            profileexists: "Профиль уже создан!",
            profilenotexist: "Этого профиля не существует!",
            qscondition: "Введите минимум 2 буквы!",
            qsinfo: "Поиск игрока или альянс.",
            riploss: "Шанс потери Звезды Смерти: ",
            rips: "Звезда Смерти: ",
            rowcolor: "Цвета галактики",
            searchally: "Поиск альянса",
            searchplayer: "Поиск игрока",
            ships: "Корабли",
            spreading_current: "Текущая",
            spreading_delete: "Удалить",
            spreading_galaxycolor: "Цвета Галактики",
            spreading_invert: "Перевернуть",
            spreading_new: "Новое",
            spreading_noplayer: "Не выбрано игроков!",
            spreading_position: "Позиция",
            spreading_profileconfig: "Конфигурация профиля",
            spreading_showuniverse: "Показать вселенную",
            spreading_title: "Распространение игрока",
            spreading_yourself: "Добавить себя",
            spreadingconfig: "Конфигурация профиля",
            spreadinguniverse: "Показать вселенную",
            trashsimsimulate: "Симулировать в ThashSim",
            updatedatabase: "Обновить галактику",
            updatefailed: "Ошибка, повторите снова !",
            updateidb: "Вам надо обновить базу данных галактики",
            updateinfo: "Обновить информацию",
            updatingdatabase: "... Обновление Галактики ...",
            uvnotification: "Уведомления UniverseView!",
            uvupdated: "UniverseView  обновлено!",
            version: "Версия",
            viewhighscore: "Посмотреть очки",
        }),
        e.Locale.add("SK", {}),
        e.Locale.add("SL", {}),
        e.Locale.add("SV", {
            addtofavs: "Lägg till i favoriter",
            calcmd: "Kalkylera månförstörelse",
            combat: "Vapen",
            coords: "Koordinater",
            currentprofile: "Nuvarande:",
            currentprofilegal: "Nuvarande profil ",
            deleteprofile: "Radera",
            drives: "Motorer",
            espionage: "Spionage",
            hp: "HP",
            idbnotexist: "IDB finns inte i din webläsare",
            loadplanets: "Laddar!",
            md: "Månförstörelse",
            menu_api: "Ogame API",
            menu_clear: "Återställ standard",
            menu_extra: "Extra",
            menu_favouriteF: "Lagra koordinater för dina favoritmål via galaxvyn.",
            menu_fb: "Facebooksida",
            menu_features: "Funktioner",
            menu_fleetpageF: "Visa planetlistan på flottsidan.",
            menu_general: "Allmänt",
            menu_highscoreF: "Förbättra statistiken.",
            menu_home: "Hemsida",
            menu_idb: "Webläsardatabas (Fungerar endast i Chrome 12+ och Firefox 4+)",
            menu_militairyF: "Visa en spelares militärpoäng och skepp i Galaxvyn.",
            menu_moondestructF: "Månförstörelsekalkylator i galaxvyn.",
            menu_offlinewiki: "Offline wiki",
            menu_option: "Vilket alternativ vill du använda för att hämta planetkoordinater?",
            menu_org: ".org forum",
            menu_origin: "Originforumet",
            menu_personal: "Personlig server",
            menu_planetF: "Visa en spelares planeter i galaxvyn.",
            menu_planetfieldsF: "Visa använda fält planetlistan.",
            menu_previewF: "Använd förhandsversionen av det här scriptet (borttaget i uppdatering 2.1.3).",
            menu_quicksearchF: "Aktivera snabbsök.",
            menu_refreshF: "Visa uppdateringstiden i galaxvyn.",
            menu_remove: "Ta bort",
            menu_removeLocalS: "Återställ alla UniverseView-värden till standard!",
            menu_removePlanetidb: "Ta bort planetdatabasen från din webläsare. Den används för att spara spelares planeter! (Ta bort den kan hjälpa om det har slutat att fungera)",
            menu_removePlayeridb: "Ta bort spelardatabasen från din webläsare. Den används för att spara spelares forskning! (Ta bort den kan hjälpa om det har slutat att fungera)",
            menu_researchF: "Visa en spelares forskning i galaxvyn.",
            menu_setaccess: "Använd lösenord",
            menu_setserver: "Använd server",
            menu_spreadingF: "Aktivera funktionen planetspridning.",
            menu_translation: "Översättningar",
            menu_updateF: "Vill du uppdatera systemens information när du tittar i galaxen? (Endast tillgängligt om du använder webläsardatabas eller personlig server)",
            menu_updatebrowser: "Uppdatera databasen i din webläsare.",
            menu_updategal: "Uppdatera galaxen",
            menu_updateserver: "Uppdatera databasen på din server.",
            menu_us: ".us forum",
            menu_version: "Version",
            menu_wiki: "UniverseView Wiki",
            militairy: "Militärpoäng",
            moonpop: "Månförstörelsechans: ",
            moonsize: "Månstorlek",
            newprofile: "Ny",
            noidba: "Din webläsare stödjer inte Indexerad databas!",
            noidbb: "(Inställningar för UniverseView webläsardatabas)",
            noidbc: "Om du vill använda den här inställningen behöver du ladda ner:",
            noidbd: "Chrome version 12+ eller Firefox version 4+",
            noplayers: "Inga spelare tillagda!",
            noplayerselected: "Inga spelare valda!",
            ogotchaconvert: "Konvertera med OGotcha",
            openuvmenu: "Öppna UV-menyn",
            planets: "Planeter",
            playertospreading: "Lägg till spelare i spridningen",
            popmoon: "Förstör måne",
            profilecondition: "Fyll i minst 2 tecken!",
            profileexists: "Profilen finns redan!",
            profilenotexist: "Profilen finns inte!",
            qscondition: "Skriv minst 2 tecken!",
            qsinfo: "Sök spelare eller allians.",
            riploss: "Risk att förlora DS: ",
            rips: "Dödsstjärnor ",
            rowcolor: "Galaxfärg",
            searchally: "Sök allians",
            searchplayer: "Sök spelare",
            ships: "Skepp",
            spreading_current: "Nuvarande",
            spreading_delete: "Ta bort",
            spreading_galaxycolor: "Galaxfärg",
            spreading_invert: "Invertera",
            spreading_new: "Ny",
            spreading_noplayer: "Ingen spelare vald!",
            spreading_position: "Position",
            spreading_profileconfig: "Profilkonfiguration",
            spreading_showuniverse: "Visa universum",
            spreading_title: "Spelarspridning",
            spreading_yourself: "Lägg till dig själv",
            spreadingconfig: "Profilinställningar",
            spreadinguniverse: "Visa universum",
            updatedatabase: "Uppdatera galaxen",
            updatefailed: "Misslyckades, försök igen!",
            updateidb: "Du behöver uppdatera galaxdatabasen",
            updateinfo: "Information om uppdateringen",
            updatingdatabase: "... uppdaterar galaxvyn ...",
            uvnotification: "Meddelande från UniverseView!",
            uvupdated: "UniverseView har uppdaterats!",
            version: "Version",
            viewhighscore: "Visa topplista",
        }),
        e.Locale.add("TR", {
            addtofavs: "Favorilere ekle",
            calcmd: "Ay yok etme ihtimalini hesapla",
            combat: "Savaş",
            coords: "Koordinatlar",
            currentprofile: "Güncel:",
            currentprofilegal: "Geçerli profil: ",
            deleteprofile: "Sil",
            drives: "Sürücüler",
            espionage: "Casusluk",
            hp: "AG",
            idbnotexist: "IDB bu tarayıcıda mevcut değildir",
            loadplanets: "Yüklüyor!",
            md: "Ay yok etme",
            menu_api: "Ogame aplikasyonu",
            menu_clear: "Varsayılana geri döndür",
            menu_extra: "Ekstra",
            menu_favouriteF: "Galaksi sayfası üzerinden favori hedeflerinin koordinatları kaydet.",
            menu_fb: "Facebook Sayfası",
            menu_features: "Özellikler",
            menu_fleetpageF: "Filo sayfasında gezegenlerin listesini göster.",
            menu_general: "Genel",
            menu_highscoreF: "İstatistikleri iyileştir.",
            menu_home: "AnaSayfa",
            menu_idb: "Tarayıcı veritabanı (Bu özellik sadece Chrome +12 ve Firefox +4'te çalışır)",
            menu_militairyF: "Oyuncunun askeri puan ve gemileri galaksi üzerinde gösterilsin.",
            menu_moondestructF: "Galaksi sayfasındaki ay yok etme hesaplayıcısı.",
            menu_offlinewiki: "Çevrimdışı Wiki",
            menu_option: "Gezegen koordinatlarını getirmek için hangi özelliği kullanmak istiyorsunuz?",
            menu_org: ".org board",
            menu_origin: "Origin forum",
            menu_personal: "Kişisel server",
            menu_planetF: "Galakside oyuncu gezegenlerini göster.",
            menu_planetfieldsF: "Gezegenler listesinde kullanılan alanları göster.",
            menu_previewF: "Bu script'in bir önceki versiyonunu kullan (güncelleme 2.1.3'te silinmiştir).",
            menu_quicksearchF: "Hızlı arama özelliğini etkinleştir.",
            menu_refreshF: "Galaksi içeriğinin güncellenme zamanını göster.",
            menu_remove: "Kaldır",
            menu_removeLocalS: "Büyün UniverseView değerlerini başlangıç değerlerine resetle!",
            menu_removePlanetidb: "Gezegenlerin veri tabanını tarayıcıdan sil, bu özellik oyuncuların diğer gezegenlerinin kaydedilmesini sağlar! (Bu veritabanının silinmesi, çalışma durdurulduğu zaman faydalı olmaktadır)",
            menu_removePlayeridb: "Oyuncuların veri tabanını tarayıcınızdan silin, bu durum oyuncuların diğer araştırmalarını kaydetmek için kullanılır! (Veri tabanının silinmesi, çalışmayı durdurduğu zaman faydalı olmaktadır)",
            menu_researchF: "Galakside oyuncu araştırmalarını göster.",
            menu_setaccess: "Passcode kullan",
            menu_setserver: "Server'ı kullan",
            menu_spreadingF: "Oyuncu yayılma özelliğini etkinleştir.",
            menu_translation: "Çeviriler",
            menu_updateF: "Galakside gözüktüğünde, güneş sistemi bilgilerinin güncellenmesini ister misiniz? (Sadece tarayıcı veri tabanında veya kişisel server özelliğinde mümkündür)",
            menu_updatebrowser: "Tarayıcınızdaki veritabanını güncelleyin.",
            menu_updategal: "Galaksiyi güncelle",
            menu_updateserver: "Server'ınızın veri tabanını güncelleyin.",
            menu_us: ".us board",
            menu_version: "Versiyon",
            menu_wiki: "UniverseView Wiki",
            militairy: "Askeri",
            moonpop: "Ay yok etme ihtimali: ",
            moonsize: "Ay Büyüklüğü",
            newprofile: "Yeni",
            noidba: "Tarayıcınız IndexedDB'yi desteklememektedir!",
            noidbb: "(UniverseView tarayıcı veri tabanı ayarı)",
            noidbc: "Eğer bu özelliği kullanmak istiyorsanız indirmeniz gerekiyor:",
            noidbd: "Chrome versiyon +12 veya Firefox versiyon +4",
            noplayers: "Oyuncu eklenmedi!",
            noplayerselected: "Hiçbir oyuncu seçilmedi!",
            ogotchaconvert: "Ogatcha ile Dönüştür",
            openuvmenu: "Uv menüsünü aç",
            planets: "Gezegenler",
            playertospreading: "Oyuncuyu Yayılmaya ekle",
            popmoon: "Ayı yok et",
            profilecondition: "Lütfen en az 2 harf girin!",
            profileexists: "Bu profil zaten mevcut!",
            profilenotexist: "Bu profil mevcut değildir!",
            qscondition: "En az 2 harf giriniz!",
            qsinfo: "Oyuncu ya da ittifak ara.",
            riploss: "Ölüm yıldızının yok olma ihtimali: ",
            rips: "Ölüm yıldızları: ",
            rowcolor: "Galaksi Rengi",
            searchally: "İttifak ara",
            searchplayer: "Oyuncu ara",
            ships: "Gemiler",
            spreading_current: "Geçerli",
            spreading_delete: "Sil",
            spreading_galaxycolor: "Galaksi rengi",
            spreading_invert: "Ters çevir",
            spreading_new: "Yeni",
            spreading_noplayer: "Hiçbir oyuncu seçilmedi!",
            spreading_position: "Konum",
            spreading_profileconfig: "Profil yapılandırması",
            spreading_showuniverse: "Evreni göster",
            spreading_title: "Oyuncu yayılması",
            spreading_yourself: "Kendini ekle",
            spreadingconfig: "Profil Yapılandırması",
            spreadinguniverse: "Evreni göster",
            trashsimsimulate: "TrashSim ile Sim yap",
            updatedatabase: "Galaksiyi güncelle",
            updatefailed: "Başarısız, tekrar deneyiniz!",
            updateidb: "Galaksi veri tabanını güncellemeniz gerekiyor",
            updateinfo: "Bilgileri güncelle",
            updatingdatabase: "Galaksi yükleniyor.",
            uvnotification: "UniverseView Bildirimi!",
            uvupdated: "UniverseView güncellendi!",
            version: "Versiyon",
            viewhighscore: "Yüksek skorları göster",
        }),
        e.Locale.add("ZH", {
            loadplanets: "",
            qsinfo: "",
            qscondition: "",
            searchplayer: "",
            searchally: "",
            spreading_title: "",
            noplayers: "",
            spreadingconfig: "",
            currentprofile: "",
            deleteprofile: "",
            newprofile: "",
            profilecondition: "",
            noplayerselected: "",
            profilenotexist: "",
            profileexists: "",
            currentprofilegal: "",
            uvnotification: "",
            updateidb: "",
            openuvmenu: "",
            uvupdated: "",
            version: "",
            updateinfo: "",
            noidba: "",
            noidbb: "",
            noidbc: "",
            noidbd: "",
            idbnotexist: "",
            updatedatabase: "",
            updatefailed: "",
            updatingdatabase: "",
            militairy: "",
            ships: "",
            planets: "",
            combat: "",
            drives: "",
            espionage: "",
            spreading_yourself: "",
            hp: "",
            addtofavs: "",
            md: "",
            rips: "",
            moonpop: "",
            riploss: "",
            calcmd: "",
            moonsize: "",
            coords: "",
            popmoon: "",
            spreadinguniverse: "",
            rowcolor: "",
            playertospreading: "",
            viewhighscore: "",
            ogotchaconvert: "",
            spreading_noplayer: "",
            spreading_profileconfig: "",
            spreading_current: "",
            spreading_delete: "",
            spreading_new: "",
            spreading_position: "",
            spreading_showuniverse: "",
            spreading_galaxycolor: "",
            spreading_invert: "",
            menu_version: "",
            menu_wiki: "",
            menu_fb: "",
            menu_home: "",
            menu_origin: "",
            menu_org: "",
            menu_us: "",
            menu_translation: "",
            menu_offlinewiki: "",
            menu_general: "",
            menu_option: "",
            menu_personal: "",
            menu_setserver: "",
            menu_setaccess: "",
            menu_updategal: "",
            menu_updateserver: "",
            menu_api: "",
            menu_idb: "",
            menu_updatebrowser: "",
            menu_features: "",
            menu_planetF: "",
            menu_militairyF: "",
            menu_researchF: "",
            menu_updateF: "",
            menu_quicksearchF: "",
            menu_spreadingF: "",
            menu_previewF: "",
            menu_extra: "",
            menu_remove: "",
            menu_removePlayeridb: "",
            menu_removePlanetidb: "",
            menu_clear: "",
            menu_removeLocalS: "",
            menu_refreshF: "",
            menu_favouriteF: "",
            menu_moondestructF: "",
            menu_planetfieldsF: "",
            menu_highscoreF: "",
            menu_fleetpageF: "",
        }),
        e.Template.cache({
            favouriteButton: function (e) {
                return '<div id="UvFav" class="uv-element"></div>';
            },
            favouriteTooltip: function (e) {
                return '<div id="UvFavList" class="uv-element" style="display: block;"><ul id="UvFavs"></ul></div>';
            },
            fleetPagePlanet: function (e) {
                return `<li class="uv-fleetpage-planet clearfix">${e.name} <span class="uv-fleetpage-coords">${e.coords}</span><div class="uv-fleetpage-links clearfix" data-coords="${e.coords}"><span class="uv-fleetpage-link uv-fleetpage-link-planet" data-type="1"></span><span class="uv-fleetpage-link uv-fleetpage-link-moon" data-type="3"> </span><span class="uv-fleetpage-link uv-fleetpage-link-debris" data-type="2"></span></div></li>`;
            },
            fleetPagePlanets: function (e) {
                return `<div id="uv-fleetpage-planets" class="briefing border5px uv-element"><h2>${e.planets}</h2><ul id="uv-fleetpage-list"></ul></div>`;
            },
            loadingSmall: function (e) {
                return `<div class="uv_q_load" style="width: 16px; height: 16px; background: url(${e.loader});"></div>`;
            },
            menu: function (e) {
                return `<div id="uv-menu-wrapper"><div id="uv-menu-background"></div><div id="UvContent"><div id="uv-menu-close"></div><h1>UniverseView - <span id="UVvVersion" title="3.0.2">${e.version}</span></h1><div id="UvHelpButtons"><div><a target="_blank" href="https://universeview.be/${e.uvw_locale}"><button type="button" class="UvHelpButton">${e.menu_home}</button></a></div><div><a target="_blank" href="https://universeview.be/${e.uvw_locale}#features"><button type="button" class="UvHelpButton">${e.menu_features}</button></a></div><div><a target="_blank" href="https://www.facebook.com/UniverseView"><button type="button" class="UvHelpButton">${e.menu_fb}</button></a></div><div><a target="_blank" href="https://board.en.ogame.gameforge.com/index.php?thread/716794-universeview/"><button type="button" class="UvHelpButton">${e.menu_org}</button></a></div><div><a target="_blank" href="https://board.en.ogame.gameforge.com/index.php?thread/716794-universeview/"><button type="button" class="UvHelpButton">${e.menu_translation}</button></a></div><div><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" id="paypal"><input type="hidden" name="cmd" value="_s-xclick"> <input type="hidden" name="hosted_button_id" value="JELUS4KLSAADW"> <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online."> <img alt="" border="0" src="https://www.paypalobjects.com/nl_NL/i/scr/pixel.gif" width="1" height="1"></form></div></div><div class="clear"></div><h2>${e.menu_features}</h2><div><ul id="UvFeatureMenu"><li><h3>${e.menu_featuresCategoryGeneric}</h3><ul class="uv-feature-category"><li id="UvFQuickSearch" data-feature="quickSearch"><div class="UvFeatureButton"></div><p>${e.menu_quicksearchF}</p></li><li id="UvFSpreading" data-feature="spreading"><div class="UvFeatureButton"></div><p>${e.menu_spreadingF}</p></li><li id="UvFFavourites" data-feature="favourites"><div class="UvFeatureButton"></div><p>${e.menu_favouriteF}</p></li><li id="UvFPlanetFields" data-feature="planetFields"><div class="UvFeatureButton"></div><p>${e.menu_planetfieldsF}</p></li></ul></li><li><h3>${e.menu_featuresCategoryGalaxy}</h3><ul class="uv-feature-category"><li id="UvFPlanets" data-feature="showPlanets"><div class="UvFeatureButton"></div><p>${e.menu_planetF}</p></li><li id="UvFMilitairy" data-feature="militairy"><div class="UvFeatureButton"></div><p>${e.menu_militairyF}</p></li><li id="UvFResearch" data-feature="research"><div class="UvFeatureButton"></div><p>${e.menu_researchF}</p></li><li id="UvFGalaxyRefresh" data-feature="galaxyRefresh"><div class="UvFeatureButton"></div><p>${e.menu_refreshF}</p></li><li id="UvFGalaxyRank" data-feature="galaxyRank"><div class="UvFeatureButton"></div><p>${e.menu_galaxyRankF}</p></li><li id="UvFGalaxyDebris" data-feature="galaxyDebris"><div class="UvFeatureButton"></div><p>${e.menu_galaxyDebrisF}</p></li><li id="UvFMoonDestruct" data-feature="moonDestruction"><div class="UvFeatureButton"></div><p>${e.menu_moondestructF}</p></li></ul></li><li><h3>${e.menu_featuresCategoryOther}</h3><ul class="uv-feature-category"><li id="UvFHighScore" data-feature="highScore"><div class="UvFeatureButton"></div><p>${e.menu_highscoreF}</p></li><li id="UvFFleetPage" data-feature="fleetPage"><div class="UvFeatureButton"></div><p>${e.menu_fleetpageF}</p></li><li id="UvFMessagesRaid" data-feature="messagesRaid"><div class="UvFeatureButton"></div><p>${e.menu_messagesraidF}</p><div class="uv-feature-extra"><p class="uv-feature-extra-info">${e.menu_mr_menu_info}</p><ul class="feature-option-list"><li><div class="feature-option-label">${e.ship_202}</div><div class="feature-option-widget"><input type="number" min="0" value="5" class="feature-option-number" data-default="5" data-option="espionageRaid.202"></div></li><li><div class="feature-option-label">${e.ship_203}</div><div class="feature-option-widget"><input type="number" min="0" value="1" class="feature-option-number" data-default="1" data-option="espionageRaid.203"></div></li><li><div class="feature-option-label">${e.ship_218}</div><div class="feature-option-widget"><input type="number" min="0" value="2" class="feature-option-number" data-default="2" data-option="espionageRaid.218"></div></li><li><div class="feature-option-label">${e.ship_219}</div><div class="feature-option-widget"><input type="number" min="0" value="2" class="feature-option-number" data-default="2" data-option="espionageRaid.219"></div></li></ul></div></li><li id="UvFEventNotification" data-feature="eventNotification"><div class="UvFeatureButton"></div><p>${e.menu_eventnotification}</p><div class="uv-feature-extra"><p class="uv-feature-extra-info">${e.menu_en_menu_info}</p><ul class="feature-option-list"><li><div class="feature-option-label">${e.menu_en_menu_pc_time}</div><div class="feature-option-widget"><div class="feature-option-state-btn" data-option="eventNotification.useComputerTime"></div></div></li></ul><table id="en-table" class="feature-option-table"><thead><tr><td></td><th><div class="en-icon-mission en-icon-mission-15" title="${e.mission_15}"></div></th><th><div class="en-icon-mission en-icon-mission-7" title="${e.mission_7}"></div></th><th><div class="en-icon-mission en-icon-mission-8" title="${e.mission_8}"></div></th><th><div class="en-icon-mission en-icon-mission-3" title="${e.mission_3}"></div></th><th><div class="en-icon-mission en-icon-mission-4" title="${e.mission_4}"></div></th><th><div class="en-icon-mission en-icon-mission-6" title="${e.mission_6}"></div></th><th><div class="en-icon-mission en-icon-mission-5" title="${e.mission_5}"></div></th><th><div class="en-icon-mission en-icon-mission-1" title="${e.mission_1}"></div></th><th><div class="en-icon-mission en-icon-mission-2" title="${e.mission_2}"></div></th><th><div class="en-icon-mission en-icon-mission-9" title="${e.mission_9}"></div></th></tr></thead><tbody><tr data-mission-category="ownArriving"><td><span class="uv-tipped-info" title="${e.menu_en_menu_own_arriving_info}">${e.menu_en_menu_own_arriving}</span></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.15"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.7"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.8"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.3"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.4"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.6"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.5"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.1"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.2"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownArriving.9"></div></td></tr><tr data-mission-category="ownReturning"><td><span class="uv-tipped-info" title="${e.menu_en_menu_own_returning_info}">${e.menu_en_menu_own_returning}</span></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.15"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.7"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.8"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.3"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.4"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.6"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.5"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.1"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.2"></div></td><td><div class="feature-option-state-btn" data-option="eventNotification.ownReturning.9"></div></td></tr><tr><td><span class="uv-tipped-info" title="${e.menu_en_menu_notification_offset_info}">${e.menu_en_menu_notification_offset}</span></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.15"></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.7"></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.8"></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.3"></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.4"></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.6"></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.5"></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.1"></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.2"></td><td><input type="number" min="0" value="60" class="feature-option-number" data-default="60" data-option="eventNotification.notificationOffset.9"></td></tr></tbody></table></div></li><li id="UvFIdleTimer" data-feature="idleTimer"><div class="UvFeatureButton"></div><p>${e.menu_idletimer}</p><div class="uv-feature-extra"><p class="uv-feature-extra-info">${e.menu_it_menu_info}</p><ul class="feature-option-list"><li><div class="feature-option-label">${e.menu_it_menu_show_seconds}</div><div class="feature-option-widget"><div class="feature-option-state-btn" data-option="idleTimer.showSeconds"></div></div></li><li><div class="feature-option-label">${e.menu_it_menu_expiration_time}</div><div class="feature-option-widget"><input type="number" min="0" value="90" class="feature-option-number" data-default="90" data-option="idleTimer.expirationTime"></div></li></ul></div></li></ul></li></ul></div><h2>${e.menu_extra}</h2><div><ul id="UvExtraMenu"><li><button type="button" id="UvClearLocalStorage" class="UvExtraButton">${e.menu_clear}</button><p>${e.menu_removeLocalS}</p></li></ul></div><div class="c-left"></div><div class="c-right"></div></div></div>`;
            },
            menuButton: function (e) {
                return `<li class="uv-element"><span class="menu_icon"><a target="_blank" href="https://universeview.be/${e.uvw_locale}?utm_source=ogame&utm_medium=universeview&utm_content=planet%20click&utm_campaign=menuButton" id="universeViewLoad"><img src="${e.icon}" height="27px" width="27px"> </a></span><a class="menubutton" href="javascript:void(0);" target="_self" id="universeView"><span class="textlabel">UniverseView</span></a></li>`;
            },
            militairy: function (e) {
                return `<ul><div class="splitLine"></div><li>${e.militairy}: ${e.score}</li><li>${e.ships}: ${e.shipcount}</li></ul>`;
            },
            moonDestruction: function (e) {
                return `<div id="uv_md" data-moonsize="0" class="uv-element"><ul><li><div>${e.coords}</div><div id="uv_md_co"></div></li><li><div>${e.moonsize}</div><div id="uv_md_size"></div></li><li><div><label>${e.rips}</label></div><div><input class="textInput" id="uv_md_input" type="search"></div></li><li><div>${e.popchance}</div><div id="uv_md_moon"></div></li><li><div>${e.ripchance}</div><div id="uv_md_rips"></div></li></ul><div id="uv_md_start">${e.destroy}</div></div>`;
            },
            notification: function (e) {
                return `<li class="uv-notification" id="uv-notification-${e.id}" data-id="${e.id}"><span class="btn-del">&nbsp;</span><div class="uv-notification-content">${e.content}</div></li>`;
            },
            notificationDBPlanetUpdate: function (e) {
                return `<div><div>${e.text}</div><button type="button" id="uv_update_notification">${e.update}</button></div>`;
            },
            notificationUniverseViewVersion: function (e) {
                return `<div><div>${e.updated}<br>${e.versiontext}: ${e.version}</div><a href="${e.url}" target="_blank" id="uv_version_notification">${e.updateinfo}</a></div>`;
            },
            playerTooltipBase: function (e) {
                return `<div class="${e.class} uv-element" style="position: relative;" data-name="${e.name}" data-pid="${e.pid}"><div class="${e.pclass}"><img src="${e.loader}"></div><div class="${e.rclass}"><img src="${e.loader}"></div><div class="${e.hclass}"><img src="${e.loader}"></div></div>`;
            },
            quickSearch: function (e) {
                return `<div id="uv_quicksearch" class="uv-element"><div id="UvQsP" class="uv_q_img"></div><div id="UvQsA" class="uv_q_img"></div><input id="uv_q_input" class="textInput" type="search"><div id="uv_q_result" class="uv-hide"><div id="uv-q-connect"><span class="btn-del">&nbsp;</span></div><div id="uv-q-box" class="clearfix"><ul id="uv-q-box-first"><li>${e.search}</li><li>${e.condition}</li></ul><ul id="uv-q-box-second"></ul><ul id="uv-q-box-third"></ul></div></div></div>`;
            },
            research: function (e) {
                return `<ul><div class="splitLine"></div><li>${e.planets}: ${e.count} / ${e.astro}</li><li>${e.combat}: ${e.w} / ${e.s} / ${e.a}</li><li>${e.drives}: ${e.c} / ${e.i} / ${e.h}</li><li>${e.espio}: ${e.spio}</li></ul>`;
            },
            spreading: function (e) {
                return `<div id="uv-s-wrapper" class="uv-element"><div id="uv-s-header" class="clearfix"><h2>${e.spreading_title}</h2><div id="uv-s-add-wrapper"><div class="uv-btn-add"></div>${e.spreading_yourself}</div><span class="btn-del">&nbsp;</span></div><div id="uv-spreading"><div id="uv-s-info" class="clearfix"><div id="uv-s-playerbox" class="uv-s-header-box"><ul id="uv-s-playerlist"></ul></div><div id="uv-s-planetbox" class="uv-s-header-box"><div id="uv-s-noplayer">${e.spreading_noplayer}</div><ul id="uv-s-planetlist"></ul></div><div id="uv-s-config" class="uv-s-header-box"><h2>${e.spreading_profileconfig}</h2><div><div class="clearfix"><span>${e.spreading_current}:</span> <select id="uv-s-profile"><option disabled="disabled">&nbsp; - &nbsp;</option></select></div><input type="button" class="btn_blue" value="${e.spreading_delete}" id="uv-s-btn-delprofile"></div><div><input class="textInput" type="search" id="uv-s-newprofile"> <input type="button" class="btn_blue" value="${e.spreading_new}" id="uv-s-btn-newprofile"></div></div></div><ul id="uv-s-rows"></ul><div id="uv-s-options" class="clearfix"><div class="uv-s-left" id="uv-s-position-tracker">${e.spreading_position}: <span id="uv-s-position-coordinates">?:?:?</span></div><div class="uv-s-right" id="uv-s-universe"><input type="button" class="btn_blue" value="${e.spreading_showuniverse}"></div><div class="uv-s-right">${e.spreading_galaxycolor} : <input id="uv-s-row-color" value="${e.color}"> <input type="button" class="btn_blue" value="${e.spreading_invert}" id="uv-s-invert"></div></div></div><div id="uv-s-footer"></div></div>`;
            },
            spreadingPlayer: function (e) {
                return `<li>${e.idx}: ${e.name} <input class="uv-s-playercolor" value="${e.color}"><div class="del"></div></li>`;
            },
        }),
        chrome.runtime.sendMessage({ action: "launch" }, function (t) {
            (e.config = t.config), (n.documentElement.dataset.universeview = e.config.version), e.Application.launch();
        });
    var N = e.DOM.create("script");
    (N.textContent =
        '!function(e,t,a){var n,s,i;e.handlers={},e.actions={},e.sendMessage=function(e,t,n){a.postMessage({context:"UniverseView",ID:e,action:t,content:n},a.location.origin)},a.UV=!0,a.universeview={actions:e.actions},a.addEventListener("message",function(t){var n=t.data;if(t.origin===a.location.origin&&"UniverseView"==t.data.context&&n.ID&&n.action&&n.content){var s;switch(n.ID){case"tipped":s=e.handlers.Tipped;break;case"galaxy":s=e.handlers.Galaxy;break;case"jquery":s=e.handlers.JQuery;break;case"fleetDispatch":s=e.handlers.FleetDispatch;break;case"ga":s=e.handlers.GoogleAnalytics}s&&s.handle(n.action,n.content)}}),e.actions.Simulate={triggerEventFleetSimulation:function(t,a){return!(a instanceof MouseEvent&&(a.target.classList.contains("uv-simulate-party")&&e.sendMessage("simulate","eventfleet",{id:t.id,party:a.target.getAttribute("data-party")}),a.preventDefault(),1))}},e.handlers.FleetDispatch={handle:(e,t)=>{switch(e){case"setTarget":t=t,fleetDispatcher.updateTarget(),3===t.type?fleetDispatcher.setTargetType(fleetDispatcher.fleetHelper.PLANETTYPE_MOON):2===t.type?fleetDispatcher.setTargetType(fleetDispatcher.fleetHelper.PLANETTYPE_DEBRIS):fleetDispatcher.setTargetType(fleetDispatcher.fleetHelper.PLANETTYPE_PLANET),fleetDispatcher.updateTargetDropDowns(),fleetDispatcher.refresh(),fleetDispatcher.focusSubmitFleet2()}}},e.handlers.Galaxy=function(){const e=e=>{const t=JSON.parse(e);$("#galaxyContent").html(t.galaxy),$("galaxyContent").find("script").each(function(){$.globalEval($(this).text())}),tabletInitGalaxyDetails(),eventBDayInitGalaxy(),$("#galaxyLoading").hide(),preserveSystemOnPlanetChange&&$(".planetlink, .moonlink").querystring({galaxy:galaxy,system:system}),reloadResources(t.resources)},t=t=>{$("#galaxyLoading").show(),0!==t.galaxy.length&&$.isNumeric(+t.galaxy)||(t.galaxy=1),0!==t.system.length&&$.isNumeric(+t.system)||(t.system=1),$("#galaxy_input").val(t.galaxy),$("#system_input").val(t.system),t.buildListCountdowns&&$.each(buildListCountdowns,function(){timerHandler.removeCallback(this.timer)}),$.post(contentLink,{galaxy:t.galaxy,system:t.system},e)};var a;return{handle:(e,a)=>{switch(e){case"load":t(a);break;case"location":a=a,galaxy=a.galaxy,system=a.system}}}}(),e.handlers.GoogleAnalytics=(s=null,i=function(e){e=function(e){return e.v=1,e.tid=s.code,e.cid=s.cid,e.aip=1,e.dl=document.location.origin+document.location.pathname+document.location.search,e.dt=document.title,e.dh=document.querySelector("meta[name=ogame-universe]").getAttribute("content"),e.ul=navigator.language,e.sr=screen.width+"x"+screen.height,e.vp=a.innerWidth+"x"+a.innerHeight,e}(e);var t=new XMLHttpRequest;t.open("POST","https://www.google-analytics.com/collect",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send(function(e){var t=[];for(var a in e)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")}(e))},{handle:function(e,t){switch(e){case"init":!function(e){s=e}(t);break;case"event":!function(e){s&&i({t:"event",ec:e.cat,ea:e.action,el:e.label})}(t);break;case"pageview":!function(e){s&&(e.variables||(e.variables={}),e.variables.t="pageview",i(e.variables))}(t)}}}),e.handlers.JQuery={handle:function(e,t){switch(e){case"dialog":!function(e){$(e.selector).dialog(e.options)}(t);break;case"colorpicker":!function(e){$(e.selector).css("background-color",e.defaultColor).colorpicker({color:e.defaultColor,colorFormat:"#HEX",hsv:!1,showCancelButton:!1}).colorpicker("option","close",function(e,t){e.target.style.backgroundColor=t.formatted,e.target.value=t.formatted,e.target.dispatchEvent(new Event("colorchange"))})}(t)}}},e.handlers.Tipped={handle:function(e,t){switch(e){case"create":a=t,Tipped.create(a.selector,a.text,a.options);break;case"refresh":!function(e){Tipped.refresh(e.selector)}(t)}var a}}}({},0,window);'),
        (document.head || document.documentElement).appendChild(N),
        e.Application.preload(["quicksearch.gif", "spreading_but_small.gif", "uv_icon.png"]);
})({}, 0, window, document);
