! function(e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var s = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) i.d(n, s, function(t) {
                return e[t]
            }.bind(null, s));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 11)
}([function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = "[WebEmarsysSDK]",
        s = () => {},
        r = (e, t) => (...i) => {
            console[t](e, ...i)
        };
    const a = {
            trace: s,
            debug: s,
            info: s,
            warn: s,
            error: s,
            log: s
        },
        o = {
            NoopLogFn: s,
            enableLogger: function(e, t = n) {
                const i = ["trace", "debug", "info", "warn", "error", "log"];
                if (e)
                    for (const e of i) a[e] = r(t, e);
                else
                    for (const e of i) a[e] = s
            },
            SdkContext: n,
            SwContext: "[WebEmarsysSW]",
            Logger: a
        };
    t.default = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEVICE_REGISTRATION_STATUS_UNREGISTERED = t.DEVICE_REGISTRATION_STATUS_REGISTERED = t.KEY_DEVICE_REGISTRATION_STATUS = t.EVENT_ON_HIDE_NOTIFICATION_PERMISSION_DIALOG = t.EVENT_ON_SHOW_NOTIFICATION_PERMISSION_DIALOG = t.EVENT_ON_UPDATE_INBOX_MESSAGES = t.EVENT_ON_PUT_NEW_MESSAGE_TO_INBOX_STORE = t.EVENT_ON_PUSH_DELIVERY = t.EVENT_ON_SW_INIT_ERROR = t.EVENT_ON_PERMISSION_GRANTED = t.EVENT_ON_PERMISSION_DENIED = t.EVENT_ON_PERMISSION_PROMPT = t.EVENT_ON_UNSUBSCRIBE = t.EVENT_ON_SUBSCRIBE = t.EVENT_ON_READY = t.PERMISSION_PROMPT = t.PERMISSION_GRANTED = t.PERMISSION_DENIED = t.indexedDbVersion = t.indexedDbName = t.meCustomEvent = t.meOpen = t.meLogout = t.meLogin = t.lsKeyLastHiwd = t.lsKeyLastContactFieldId = t.lsKeyLastLoginToken = t.lsKeyLastLoginTime = t.dbKeyLoggingEnabled = t.dbKeyTimezone = t.dbKeyLanguage = t.dbKeyOsVersion = t.dbKeyDeviceModel = t.dbKeyApplicationVersion = t.dbKeyPlatform = t.dbKeyAutoSubscribe = t.dbKeyContactFieldValue = t.dbKeyContactFieldId = t.dbKeyPushToken = t.dbKeyServiceWorkerVersion = t.dbKeySdkVersion = t.dbKeyRefreshToken = t.dbKeyContactToken = t.dbKeyXClientState = t.dbKeyBrowserId = t.dbKeyInitParams = t.dbKeyLastPermissionStatus = t.dbKeyPushPackageServiceUrl = t.dbKeyWebsitePushId = t.dbKeyApplicationServerPublicKey = t.dbKeyServiceWorkerScope = t.dbKeyServiceWorkerUrl = t.dbKeyMeDeviceEventServiceApiBaseUrl = t.dbKeyMeClientServiceApiBaseUrl = t.dbKeyApplicationCode = t.dbKeyDefaultNotificationIcon = t.dbKeyDefaultNotificationTitle = t.applicationPassword = t.pushActionsProperty = t.pushImageProperty = t.pushIconProperty = t.pushLinkProperty = t.pushTitleProperty = t.loginOverloadProtectionTime = t.defaultApplicationVersion = t.defaultScope = t.defaultSafariPushPackageServiceUrl = t.defaultDeviceEventServiceApiBaseUrl = t.defaultClientServiceApiBaseUrl = void 0, t.defaultClientServiceApiBaseUrl = "https://me-client.eservice.emarsys.net/v3", t.defaultDeviceEventServiceApiBaseUrl = "https://mobile-events.eservice.emarsys.net/v3", t.defaultSafariPushPackageServiceUrl = "https://me-client.eservice.emarsys.net", t.defaultScope = "/", t.defaultApplicationVersion = "0.0.0", t.loginOverloadProtectionTime = 36e5, t.pushTitleProperty = "title", t.pushLinkProperty = "link", t.pushIconProperty = "icon", t.pushImageProperty = "image", t.pushActionsProperty = "actions", t.applicationPassword = "not-used", t.dbKeyDefaultNotificationTitle = "pushDefaultNotificationTitle", t.dbKeyDefaultNotificationIcon = "pushDefaultNotificationIcon", t.dbKeyApplicationCode = "emarsysApplicationCode", t.dbKeyMeClientServiceApiBaseUrl = "meClientServiceApiBaseUrl", t.dbKeyMeDeviceEventServiceApiBaseUrl = "meDeviceEventServiceApiBaseUrl", t.dbKeyServiceWorkerUrl = "serviceWorkerUrl", t.dbKeyServiceWorkerScope = "serviceWorkerScope", t.dbKeyApplicationServerPublicKey = "applicationServerPublicKey", t.dbKeyWebsitePushId = "websitePushId", t.dbKeyPushPackageServiceUrl = "pushPackageServiceUrl", t.dbKeyLastPermissionStatus = "lastPermissionStatus", t.dbKeyInitParams = "initParams", t.dbKeyBrowserId = "browserId", t.dbKeyXClientState = "xClientState", t.dbKeyContactToken = "contactToken", t.dbKeyRefreshToken = "refreshToken", t.dbKeySdkVersion = "sdkVersion", t.dbKeyServiceWorkerVersion = "serviceWorkerVersion", t.dbKeyPushToken = "pushToken", t.dbKeyContactFieldId = "contactFieldId", t.dbKeyContactFieldValue = "contactFieldValue", t.dbKeyAutoSubscribe = "autoSubscribe", t.dbKeyPlatform = "platform", t.dbKeyApplicationVersion = "applicationVersion", t.dbKeyDeviceModel = "deviceModel", t.dbKeyOsVersion = "osVersion", t.dbKeyLanguage = "language", t.dbKeyTimezone = "timezone", t.dbKeyLoggingEnabled = "loggingEnabled", t.lsKeyLastLoginTime = "emarsysWebpushLastLoginTime", t.lsKeyLastLoginToken = "emarsysWebpushLastLoginToken", t.lsKeyLastContactFieldId = "emarsysWebpushLastContactFieldId", t.lsKeyLastHiwd = "emarsysWebpushLastHwid", t.meLogin = "/users/login", t.meLogout = "/users/logout", t.meOpen = "/events/message_open", t.meCustomEvent = "/events/", t.indexedDbName = "EMARSYS_WEBPUSH_STORE", t.indexedDbVersion = 1, t.PERMISSION_DENIED = "denied", t.PERMISSION_GRANTED = "granted", t.PERMISSION_PROMPT = "default", t.EVENT_ON_READY = "onReady", t.EVENT_ON_SUBSCRIBE = "onSubscribe", t.EVENT_ON_UNSUBSCRIBE = "onUnsubscribe", t.EVENT_ON_PERMISSION_PROMPT = "onPermissionPrompt", t.EVENT_ON_PERMISSION_DENIED = "onPermissionDenied", t.EVENT_ON_PERMISSION_GRANTED = "onPermissionGranted", t.EVENT_ON_SW_INIT_ERROR = "onSWInitError", t.EVENT_ON_PUSH_DELIVERY = "onPushDelivery", t.EVENT_ON_PUT_NEW_MESSAGE_TO_INBOX_STORE = "onPutNewMessageToInboxStore", t.EVENT_ON_UPDATE_INBOX_MESSAGES = "onUpdateInboxMessages", t.EVENT_ON_SHOW_NOTIFICATION_PERMISSION_DIALOG = "onShowNotificationPermissionDialog", t.EVENT_ON_HIDE_NOTIFICATION_PERMISSION_DIALOG = "onHideNotificationPermissionDialog", t.KEY_DEVICE_REGISTRATION_STATUS = "registrationStatus", t.DEVICE_REGISTRATION_STATUS_REGISTERED = "registered", t.DEVICE_REGISTRATION_STATUS_UNREGISTERED = "unregistered"
}, function(e, t, i) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
            void 0 === n && (n = i), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[i]
                }
            })
        } : function(e, t, i, n) {
            void 0 === n && (n = i), e[n] = t[i]
        }),
        s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        r = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e) "default" !== i && Object.hasOwnProperty.call(e, i) && n(t, e, i);
            return s(t, e), t
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.toContactInfo = t.isValidPayload = t.payloadMessageDataProperties = t.checkDevice = t.isDeviceRegistered = t.urlB64ToString = t.urlB64ToUint8Array = t.getGlobal = t.getVersion = void 0;
    const a = r(i(3));

    function o(e) {
        const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/");
        return atob(t)
    }
    async function c(e) {
        if (!await e.getClientId()) return {
            exists: !1
        };
        const t = await e.getClientState();
        if (!t) return {
            exists: !1
        };
        const i = a.decode(t);
        if (!i) return {
            exists: !1
        };
        return {
            exists: !0,
            pushTokenExists: null !== (i.pushToken || null),
            identified: null !== (i.contactField || null)
        }
    }
    t.getVersion = function() {
        return "2.6.1"
    }, t.getGlobal = function() {
        return Function("return this")()
    }, t.urlB64ToUint8Array = function(e) {
        const t = o(e),
            i = new Uint8Array(t.length);
        for (let e = 0; e < t.length; ++e) i[e] = t.charCodeAt(e);
        return i
    }, t.urlB64ToString = function(e) {
        return o(e)
    }, t.isDeviceRegistered = async function(e) {
        const {
            exists: t,
            pushTokenExists: i
        } = await c(e);
        return t && (void 0 !== i && i)
    }, t.checkDevice = c, t.payloadMessageDataProperties = {
        id: "string",
        sid: "string",
        applicationCode: "string",
        notificationSettings: "object"
    }, t.isValidPayload = function(e) {
        if ("object" != typeof e) return !1;
        const i = e.messageData;
        return !!i && Object.keys(t.payloadMessageDataProperties).map((e => !!i[e] && typeof i[e] === t.payloadMessageDataProperties[e])).reduce(((e, t) => e && t), !0)
    }, t.toContactInfo = function(e) {
        if (void 0 !== e && 2 === Object.keys(e).length) return e
    }
}, function(e, t, i) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.decode = void 0;
    const s = i(2),
        r = n(i(0));
    t.decode = function(e, t) {
        const i = !0 === (t || {}).header ? 0 : 1;
        try {
            return JSON.parse(s.urlB64ToString(e.split(".")[i]))
        } catch (e) {
            return r.default.Logger.error("Error decoding token", e), null
        }
    }
}, function(e, t, i) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MEDeviceEventService = void 0;
    const s = n(i(0)),
        {
            Logger: r
        } = s.default,
        a = [200, 204];
    class o {
        constructor(e, t, i) {
            this.storage = i, this.baseUrl = e + "/apps", this.desRequest = t
        }
        async postEvents(e) {
            const t = await this.storage.getClientId();
            if (!t) return r.error("Error: No client ID set for the browser!"), {
                success: !1
            };
            const i = await this.storage.getContactToken();
            if (!i) return r.error("Error: No contact token set!"), {
                success: !1
            };
            const n = await this.storage.getClientState();
            if (!n) return r.error("Error: No client state set!"), {
                success: !1
            };
            const s = await this.apiEndpoint("client/events"),
                o = await this.desRequest.post(s, e, {
                    clientId: t,
                    clientState: n,
                    contactToken: i
                });
            if (a.includes(o.status)) return {
                success: !0,
                statusCode: o.status
            }; {
                const e = await o.json();
                return r.warn("Error posting events to device event service", o.status, JSON.stringify(e)), {
                    success: !1,
                    statusCode: o.status
                }
            }
        }
        async apiEndpoint(e) {
            const t = await this.storage.getAppCode();
            return `${this.baseUrl}/${t}/${e}`
        }
        static create(e, t, i) {
            return new o(e, t, i)
        }
    }
    t.MEDeviceEventService = o
}, function(e, t, i) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MEClientService = void 0;
    const s = n(i(0)),
        {
            Logger: r
        } = s.default;
    class a {
        constructor(e, t, i) {
            this.storage = i, this.baseUrl = e + "/apps", this.meClientServiceRequest = t
        }
        async storeClientDetails() {
            const e = await this.storage.getClientId();
            if (!e) return r.error("Error: No client ID set for the browser!"), !1;
            const t = await this.apiEndpoint("client"),
                i = await this.storage.getClientState(),
                n = await this.getClientDetails(),
                s = await this.meClientServiceRequest.post(t, n, {
                    clientId: e,
                    clientState: i
                });
            if (204 === s.status) return await this.saveClientState(s), !0; {
                const e = await s.json();
                return r.error("Error storing client info", s.status, JSON.stringify(e)), !1
            }
        }
        async linkClientToContact(e) {
            const t = await this.storage.getClientId();
            if (!t) return r.error("No client ID set for the browser"), !1;
            const i = await this.storage.getClientState();
            if (!i) return r.error(`No client state for client "${t}"!`), !1;
            const {
                anonymous: n,
                body: s
            } = this.toContactRequestBodyData(e), a = `${await this.apiEndpoint("client/contact")}${n?"?anonymous=true":""}`, o = await this.meClientServiceRequest.post(a, s, {
                clientId: t,
                clientState: i
            });
            if (200 === o.status) {
                await this.saveClientState(o);
                const e = await o.json();
                return e.contactToken && e.refreshToken ? (await Promise.all([this.storage.setContactToken(e.contactToken), this.storage.setRefreshToken(e.refreshToken)]), !0) : (r.error("At least one of the expected response parts missing!"), !1)
            } {
                const e = await o.json();
                return r.error("Error linking contact to client", o.status, JSON.stringify(e)), !1
            }
        }
        async generateAccessToken() {
            const e = await this.storage.getClientId();
            if (!e) return r.error("No client ID set for the browser"), !1;
            const t = await this.storage.getRefreshToken();
            if (!t) return r.error("Unable to refresh contact token as refreshtoken is missing!"), !1;
            const i = await this.storage.getClientState(),
                n = await this.apiEndpoint("client/contact-token"),
                s = {
                    refreshToken: t
                },
                a = await this.meClientServiceRequest.post(n, s, {
                    clientId: e,
                    clientState: i
                });
            if (200 === a.status) {
                const e = await a.json();
                return e.contactToken ? (await this.storage.setContactToken(e.contactToken), !0) : (r.error("ContactToken is not part of response body!"), !1)
            } {
                const e = await a.json();
                return r.log("Error refreshing the contact token", a.status, JSON.stringify(e)), !1
            }
        }
        async registerPushToken(e) {
            const t = await this.storage.getClientId();
            if (!t) return r.error("No client ID set for the browser"), !1;
            const i = await this.storage.getClientState();
            if (!i) return r.error(`No client state for client "${t}"!`), !1;
            const n = await this.storage.getContactToken();
            if (!n) return r.error("Unable to register subscription as contactToken is missing!"), !1;
            const s = await this.apiEndpoint("client/push-token"),
                a = {
                    pushToken: e
                },
                o = await this.meClientServiceRequest.put(s, a, {
                    clientId: t,
                    clientState: i,
                    contactToken: n
                });
            if (204 === o.status) return await this.saveClientState(o), !0; {
                const e = await o.json();
                return r.error("Error registering the subscription", o.status, JSON.stringify(e)), !1
            }
        }
        async removePushToken() {
            const e = await this.storage.getClientId();
            if (!e) return r.error("No client ID set for the browser"), !1;
            const t = await this.storage.getClientState();
            if (!t) return r.error(`No client state for client "${e}"!`), !1;
            const i = await this.storage.getContactToken();
            if (!i) return r.error("Unable to register subscription as contactToken is missing!"), !1;
            const n = await this.apiEndpoint("client/push-token"),
                s = await this.meClientServiceRequest.delete(n, {}, {
                    clientId: e,
                    clientState: t,
                    contactToken: i
                });
            if (204 === s.status) return await this.saveClientState(s), !0; {
                const e = await s.json();
                return r.error("Error removing a subscription", s.status, JSON.stringify(e)), !0
            }
        }
        async apiEndpoint(e) {
            const t = await this.storage.getAppCode();
            return `${this.baseUrl}/${t}/${e}`
        }
        async saveClientState(e) {
            const t = e.headers.get("x-client-state");
            t ? await this.storage.setClientState(t) : r.error("Error: X-Client-State not found in response header!")
        }
        async getClientDetails() {
            const e = await this.storage.getPlatform();
            if (e) {
                return {
                    platform: e,
                    applicationVersion: await this.storage.getApplicationVersion(),
                    deviceModel: await this.storage.getDeviceModel(),
                    osVersion: await this.storage.getOsVersion(),
                    sdkVersion: await this.storage.getSdkVersion(),
                    language: await this.storage.getLanguage(),
                    timezone: await this.storage.getTimezone()
                }
            }
            throw new Error("platform not found in storage!")
        }
        async getClientLinkOptions() {
            const e = await this.storage.getContactFieldId();
            if (void 0 !== e) {
                const t = await this.storage.getContactFieldValue();
                if (void 0 !== t) return {
                    contactInfo: {
                        contactFieldId: e,
                        contactFieldValue: t
                    }
                }
            }
            return {}
        }
        toContactRequestBodyData(e) {
            return e ? "openIdToken" in e ? {
                body: {
                    contactFieldId: e.fieldId,
                    openIdToken: e.openIdToken
                },
                anonymous: !1
            } : {
                body: {
                    contactFieldId: e.fieldId,
                    contactFieldValue: e.fieldValue
                },
                anonymous: !1
            } : {
                body: {},
                anonymous: !0
            }
        }
        static create(e, t, i) {
            return new a(e, t, i)
        }
    }
    t.MEClientService = a
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MEV3ApiRequest = void 0;
    const n = {
        "Content-Type": "application/json"
    };
    class s {
        constructor() {
            this.requestOrder = 0
        }
        post(e, t, i) {
            const n = this.createPostRequestInit(t, i);
            return fetch(e, n)
        }
        put(e, t, i) {
            const n = this.createPutRequestInit(t, i);
            return fetch(e, n)
        }
        delete(e, t, i) {
            const n = this.createDeleteRequestInit(t, i);
            return fetch(e, n)
        }
        createPostRequestInit(e, t) {
            return this.createRequestInit("POST", e, t)
        }
        createPutRequestInit(e, t) {
            return this.createRequestInit("PUT", e, t)
        }
        createDeleteRequestInit(e, t) {
            return this.createRequestInit("DELETE", e, t)
        }
        createRequestInit(e, t, i) {
            return {
                method: e,
                headers: this.buildHeaders(i),
                mode: "cors",
                cache: "default",
                body: JSON.stringify(t)
            }
        }
        buildHeaders(e) {
            const t = new Headers;
            return Object.keys(n).forEach((e => {
                t.append(e, n[e])
            })), t.append("x-client-id", e.clientId), e.clientState && t.append("x-client-state", e.clientState), e.contactToken && t.append("x-contact-token", e.contactToken), t.append("x-request-order", "" + this.requestOrder), this.requestOrder += 1, t
        }
        static create() {
            return new s
        }
    }
    t.MEV3ApiRequest = s
}, function(e, t, i) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
            void 0 === n && (n = i), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[i]
                }
            })
        } : function(e, t, i, n) {
            void 0 === n && (n = i), e[n] = t[i]
        }),
        s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        r = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e) "default" !== i && Object.hasOwnProperty.call(e, i) && n(t, e, i);
            return s(t, e), t
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MEWebPushDb = void 0;
    const a = r(i(1));
    class o {
        constructor(e) {
            this.indexDb = e
        }
        getDefaultNotificationTitle(e) {
            return this.indexDb.getDBValueOrDefault(a.dbKeyDefaultNotificationTitle, e)
        }
        getDefaultNotificationIcon(e) {
            return this.indexDb.getDBValueOrDefault(a.dbKeyDefaultNotificationIcon, e)
        }
        getHwId() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyBrowserId)
        }
        async getInitParams() {
            const e = await this.indexDb.getDBValueOrDefault(a.dbKeyInitParams);
            return e ? JSON.parse(e) : void 0
        }
        getMeClientServiceApiBaseUrl() {
            return this.indexDb.getDBValue(a.dbKeyMeClientServiceApiBaseUrl)
        }
        getMeDeviceEventServiceApiBaseUrl() {
            return this.indexDb.getDBValue(a.dbKeyMeDeviceEventServiceApiBaseUrl)
        }
        getClientId() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyBrowserId)
        }
        getClientState() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyXClientState)
        }
        getRefreshToken() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyRefreshToken)
        }
        getContactToken() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyContactToken)
        }
        async getAppCode() {
            return this.appCode || (this.appCode = await this.indexDb.getDBValueOrDefault(a.dbKeyApplicationCode)), this.appCode
        }
        async getWebsitePushId() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyWebsitePushId)
        }
        async getLastPermissionStatus() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyLastPermissionStatus)
        }
        async getApplicationServerPublicKey() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyApplicationServerPublicKey)
        }
        async getServiceWorkerUrl() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyServiceWorkerUrl)
        }
        async getServiceWorkerScope() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyServiceWorkerScope)
        }
        async getSdkVersion() {
            return this.indexDb.getDBValueOrDefault(a.dbKeySdkVersion)
        }
        async getServiceWorkerVersion() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyServiceWorkerVersion)
        }
        async getPushToken() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyPushToken)
        }
        async getContactFieldId() {
            const e = await this.indexDb.getDBValueOrDefault(a.dbKeyContactFieldId);
            return e ? Number(e) : void 0
        }
        async getContactFieldValue() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyContactFieldValue)
        }
        async getAutoSubscribe() {
            const e = await this.indexDb.getDBValueOrDefault(a.dbKeyAutoSubscribe);
            return "true" === (null == e ? void 0 : e.toLowerCase())
        }
        async getPushPackageServiceUrl() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyPushPackageServiceUrl)
        }
        async getPlatform() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyPlatform)
        }
        async getApplicationVersion() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyApplicationVersion)
        }
        async getDeviceModel() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyDeviceModel)
        }
        async getOsVersion() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyOsVersion)
        }
        async getLanguage() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyLanguage)
        }
        async getTimezone() {
            return this.indexDb.getDBValueOrDefault(a.dbKeyTimezone)
        }
        async getLoggingEnabled() {
            const e = await this.indexDb.getDBValueOrDefault(a.dbKeyLoggingEnabled);
            return "true" === (null == e ? void 0 : e.toLowerCase())
        }
        async setTimezone(e) {
            await this.indexDb.setDBValue(a.dbKeyTimezone, e)
        }
        async setLanguage(e) {
            await this.indexDb.setDBValue(a.dbKeyLanguage, e)
        }
        async setOsVersion(e) {
            await this.indexDb.setDBValue(a.dbKeyOsVersion, e)
        }
        async setDeviceModel(e) {
            await this.indexDb.setDBValue(a.dbKeyDeviceModel, e)
        }
        async setApplicationVersion(e) {
            await this.indexDb.setDBValue(a.dbKeyApplicationVersion, e)
        }
        async setPlatform(e) {
            await this.indexDb.setDBValue(a.dbKeyPlatform, e)
        }
        async setPushPackageServiceUrl(e) {
            await this.indexDb.setDBValue(a.dbKeyPushPackageServiceUrl, e)
        }
        async setAutoSubscribe(e) {
            await this.indexDb.setDBValue(a.dbKeyAutoSubscribe, "" + e)
        }
        async setContactFieldValue(e) {
            await this.indexDb.setDBValue(a.dbKeyContactFieldValue, e)
        }
        async setContactFieldId(e) {
            await this.indexDb.setDBValue(a.dbKeyContactFieldId, "number" == typeof e ? e.toString() : void 0)
        }
        async setMeClientServiceApiBaseUrl(e) {
            await this.indexDb.setDBValue(a.dbKeyMeClientServiceApiBaseUrl, e)
        }
        async setMeDeviceEventServiceApiBaseUrl(e) {
            await this.indexDb.setDBValue(a.dbKeyMeDeviceEventServiceApiBaseUrl, e)
        }
        async setPushToken(e) {
            await this.indexDb.setDBValue(a.dbKeyPushToken, e)
        }
        async setServiceWorkerVersion(e) {
            await this.indexDb.setDBValue(a.dbKeyServiceWorkerVersion, e)
        }
        async setSdkVersion(e) {
            await this.indexDb.setDBValue(a.dbKeySdkVersion, e)
        }
        async setLastPermissionStatus(e) {
            await this.indexDb.setDBValue(a.dbKeyLastPermissionStatus, e)
        }
        async setAppCode(e) {
            await this.indexDb.setDBValue(a.dbKeyApplicationCode, e), this.appCode = e
        }
        async setClientState(e) {
            await this.indexDb.setDBValue(a.dbKeyXClientState, e)
        }
        async setContactToken(e) {
            await this.indexDb.setDBValue(a.dbKeyContactToken, e)
        }
        async setRefreshToken(e) {
            await this.indexDb.setDBValue(a.dbKeyRefreshToken, e)
        }
        async setHwId(e) {
            await this.indexDb.setDBValue(a.dbKeyBrowserId, e)
        }
        async setDefaultNotificationIcon(e) {
            await this.indexDb.setDBValue(a.dbKeyDefaultNotificationIcon, e)
        }
        async setDefaultNotificationTitle(e) {
            await this.indexDb.setDBValue(a.dbKeyDefaultNotificationTitle, e)
        }
        async setServiceWorkerUrl(e) {
            await this.indexDb.setDBValue(a.dbKeyServiceWorkerUrl, e)
        }
        async setServiceWorkerScope(e) {
            await this.indexDb.setDBValue(a.dbKeyServiceWorkerScope, e)
        }
        async setApplicationServerPublicKey(e) {
            await this.indexDb.setDBValue(a.dbKeyApplicationServerPublicKey, e)
        }
        async setInitParams(e) {
            await this.indexDb.setDBValue(a.dbKeyInitParams, JSON.stringify(e))
        }
        async setWebsitePushId(e) {
            await this.indexDb.setDBValue(a.dbKeyWebsitePushId, e)
        }
        async setLoggingEnabled(e) {
            await this.indexDb.setDBValue(a.dbKeyLoggingEnabled, "" + e)
        }
        async clearAll() {
            await Promise.all([this.setAppCode(void 0), this.setClientState(void 0), this.setContactToken(void 0), this.setRefreshToken(void 0), this.setHwId(void 0), this.setDefaultNotificationIcon(void 0), this.setDefaultNotificationTitle(void 0), this.setServiceWorkerUrl(void 0), this.setServiceWorkerScope(void 0), this.setApplicationServerPublicKey(void 0), this.setSdkVersion(void 0), this.setServiceWorkerVersion(void 0), this.setInitParams(void 0), this.setWebsitePushId(void 0), this.setPushPackageServiceUrl(void 0), this.setLastPermissionStatus(void 0), this.setPushToken(void 0), this.setContactFieldId(void 0), this.setContactFieldValue(void 0), this.setAutoSubscribe(!1), this.setPlatform(void 0), this.setApplicationVersion(void 0), this.setDeviceModel(void 0), this.setTimezone(void 0), this.setLanguage(void 0), this.setOsVersion(void 0), this.setMeClientServiceApiBaseUrl(void 0), this.setMeDeviceEventServiceApiBaseUrl(void 0)])
        }
        static create(e) {
            return new o(e)
        }
    }
    t.MEWebPushDb = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.IndexDb = void 0;
    const n = i(1),
        s = "not_found";
    class r {
        constructor() {
            this.name = "keyValue"
        }
        setDBValue(e, t) {
            return this.openIndexDB().then((i => new Promise(((n, s) => {
                const r = i.transaction([this.name], "readwrite").objectStore(this.name).put({
                    key: e,
                    value: t
                });
                r.onsuccess = () => (this.indexedDBInstance = void 0, i.close(), n(e)), r.onerror = e => (this.indexedDBInstance = void 0, i.close(), s(e))
            }))))
        }
        async getDBValue(e) {
            let t;
            try {
                t = await this.openIndexDB()
            } catch (e) {
                throw e
            }
            return new Promise(((i, n) => {
                const r = t.transaction(this.name).objectStore(this.name).get(e);
                r.onsuccess = () => {
                    const {
                        result: e
                    } = r;
                    return e ? (this.indexedDBInstance = void 0, t.close(), i(e.value)) : (this.indexedDBInstance = void 0, t.close(), n(new Error(s)))
                }, r.onerror = e => (this.indexedDBInstance = void 0, t.close(), n(e))
            }))
        }
        async getDBValueOrDefault(e, t) {
            try {
                return await this.getDBValue(e)
            } catch (e) {
                if (e.message === s) return t;
                throw e
            }
        }
        openIndexDB() {
            return new Promise(((e, t) => {
                if (this.indexedDBInstance) return e(this.indexedDBInstance);
                const i = indexedDB.open(n.indexedDbName, n.indexedDbVersion);
                i.onsuccess = t => (this.indexedDBInstance = t.target.result, e(this.indexedDBInstance)), i.onerror = e => t(e), i.onupgradeneeded = e => {
                    e.target.result.createObjectStore("keyValue", {
                        keyPath: "key"
                    })
                }
            }))
        }
        static create() {
            return new r
        }
    }
    t.IndexDb = r
}, , , function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const n = i(12),
        s = i(7),
        r = i(8),
        a = s.MEWebPushDb.create(r.IndexDb.create()),
        o = n.EmarsysServiceWorker.create(a);
    self.addEventListener("push", (e => {
        o.onPush(e)
    })), 
    self.addEventListener("notificationclick", (e => o.onNotificationClick(e))), 
    // self.addEventListener("visibilitychange", (e => o.onNotificationVisibilityChange(e))), 
    self.addEventListener("install", (e => o.onInstall(e))), 
    self.addEventListener("pushsubscriptionchange", (e => o.onSubscriptionChange(e)))

    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
          // The tab has become visible so clear the now-stale Notification.
          e.notification.close();
        }
    });
}, function(e, t, i) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EmarsysServiceWorker = void 0;
    const s = n(i(0)),
        r = i(1),
        a = i(2),
        o = i(4),
        c = i(5),
        u = i(6),
        l = {
            success: !1
        };
    class d {
        constructor(e) {
            this.webPushDb = e
        }
        onInstall(e) {
            e.waitUntil(this.handleInstall())
        }
        onPush(e) {
            e.waitUntil(this._onPush(e))
        }
        onNotificationClick(e) {
            e.waitUntil(this._onNotificationClick(e))
        }
        onNotificationVisibilityChange(e) {
            e.waitUntil(this._onNotificationVisibilityChange(e))
        }
        onSubscriptionChange(e) {
            e.waitUntil(this._onSubscriptionChange())
        }
        async _onPush(e) {
            if (await this.setupLogging(), !("showNotification" in self.registration)) return void s.default.Logger.warn("Showing of notifications is not enabled");
            const t = e.data && e.data.json() ? e.data.json() : {};
            if (!a.isValidPayload(t)) return void s.default.Logger.warn("Invalid payload", t);
            const i = t.messageData.notificationSettings;
            return Promise.all([this.getNotificationOption(t, r.pushTitleProperty, (() => this.webPushDb.getDefaultNotificationTitle(""))), this.getNotificationOption(i, r.pushIconProperty, (() => this.webPushDb.getDefaultNotificationIcon(void 0))), this.getNotificationOption(i, r.pushImageProperty, (() => Promise.resolve(void 0))), this.getNotificationOption(i, r.pushActionsProperty, (() => Promise.resolve(void 0)))]).then((([e, i, n, s]) => this.showNotification(t.message, t, e, i, n, s ? this.createActionsFromActionButtons(s) : s)))
        }
        async _onNotificationClick(e) {
            await this.setupLogging(), s.default.Logger.debug("Notification clicked with Action: " + e.action), e.notification.close();
            const t = e.notification.data;
            if (!t.messageData.notificationSettings) return;
            let i = t.messageData.notificationSettings[r.pushLinkProperty];
            if (t.messageData.notificationSettings[r.pushActionsProperty]) {
                const n = t.messageData.notificationSettings[r.pushActionsProperty].find((t => t.id === e.action));
                n && (i = n.url)
            }
            const n = [];
            return i && (s.default.Logger.debug("Opening url: " + i), n.push(self.clients.openWindow(i))), n.push(this.reportOpen(t)), Promise.all(n)
        }
        async _onNotificationVisibilityChange(e) {
            if (document.visibilityState === 'visible') {
                await new Promise(resolve => setTimeout(resolve, 10000));
                e.notification.close();
            }
        }
        async _onSubscriptionChange() {
            try {
                await this.setupLogging(), s.default.Logger.debug("Subscription changed");
                const e = await this.getApplicationServerKey();
                if (s.default.Logger.debug("Got applicationServerKey", JSON.stringify(e)), !e) return void s.default.Logger.debug("Exiting registerNewSubscription");
                s.default.Logger.debug("Subscribing for new key");
                const t = await self.registration.pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: e
                });
                return s.default.Logger.debug("Registering new subscription", t), this.registerNewSubscription(t, !1)
            } catch (e) {
                s.default.Logger.error("onSubscriptionChange: registerSubscription", e)
            }
        }
        async registerNewSubscription(e, t = !1) {
            const i = await this.getMeClientService();
            if (!i) return void s.default.Logger.error("Unable to get the ME client service!");
            let n = await i.registerPushToken(JSON.stringify(e));
            n ? s.default.Logger.debug("Success register push token with backend") : t ? s.default.Logger.error("Unable to register expired subscription", e) : (n = await this.refreshContactToken(i), n ? (s.default.Logger.debug("Successful refreshed the contact token"), await this.registerNewSubscription(e, !0)) : s.default.Logger.error("Unable to register expired subscription", e))
        }
        async getApplicationServerKey() {
            try {
                const e = await this.webPushDb.getApplicationServerPublicKey();
                return e || s.default.Logger.error("application server key not set"), e
            } catch (e) {
                return void s.default.Logger.error("application server error", e)
            }
        }
        showNotification(e, t, i, n, s, r) {
            const a = {
                body: e,
                data: t,
                icon: n,
                image: s,
                actions: r,
                vibrate: [400, 100, 400],
                requireInteraction: true
            };
            return self.registration.showNotification(i, a)
        }
        getNotificationOption(e, t, i) {
            return e && e[t] ? Promise.resolve(e[t]) : i()
        }
        async handleInstall() {
            try {
                await this.setupLogging(), s.default.Logger.debug("Install handler"), s.default.Logger.debug("Storing service worker version", "2.6.1"), await this.webPushDb.setServiceWorkerVersion("2.6.1"), s.default.Logger.debug("Skipping waiting"), await self.skipWaiting(), s.default.Logger.debug("Install done")
            } catch (e) {
                s.default.Logger.error(e, "Install error!")
            }
        }
        async setupLogging() {
            const e = await this.webPushDb.getLoggingEnabled();
            s.default.enableLogger(e, s.default.SwContext)
        }
        async reportOpen(e) {
            var t;
            const i = await this.getDeviceEventService();
            if (i) try {
                s.default.Logger.debug("Reporting open to DES", e);
                const n = null === (t = null == e ? void 0 : e.messageData) || void 0 === t ? void 0 : t.sid,
                    r = n ? {
                        sid: n
                    } : void 0,
                    a = {
                        dnd: !0,
                        events: [{
                            type: "internal",
                            name: "push:click",
                            timestamp: (new Date).toISOString(),
                            attributes: r
                        }],
                        clicks: [],
                        viewedMessages: []
                    },
                    o = await i.postEvents(a);
                o.success || 401 !== o.statusCode || await this.retrySendAfterContactTokenRefresh(i, a)
            } catch (e) {
                s.default.Logger.error("Fatal error while reporting open!", e.message, e)
            } else s.default.Logger.error("Cannot report open! DES not initialized!", e)
        }
        async retrySendAfterContactTokenRefresh(e, t) {
            const i = await this.getMeClientService();
            if (!i) return s.default.Logger.error("Unable to get the ME client service!"), l;
            return await this.refreshContactToken(i) ? e.postEvents(t) : l
        }
        async refreshContactToken(e) {
            try {
                const t = await e.generateAccessToken();
                return t || s.default.Logger.error("refresh of access token failed"), t
            } catch (e) {
                return s.default.Logger.error("unable to refresh contact token", e), !1
            }
        }
        async getDeviceEventService() {
            try {
                if (!this.meDeviceEventService) {
                    const e = await this.webPushDb.getMeDeviceEventServiceApiBaseUrl();
                    this.meDeviceEventService = o.MEDeviceEventService.create(e, u.MEV3ApiRequest.create(), this.webPushDb)
                }
                return this.meDeviceEventService
            } catch (e) {
                s.default.Logger.error("Error initializing device event service!", e.message, e)
            }
        }
        async getMeClientService() {
            try {
                if (!this.meClientService) {
                    const e = await this.webPushDb.getMeClientServiceApiBaseUrl();
                    this.meClientService = c.MEClientService.create(e, u.MEV3ApiRequest.create(), this.webPushDb)
                }
                return this.meClientService
            } catch (e) {
                s.default.Logger.error("Error initializing client service!", e.message, e)
            }
        }
        createActionsFromActionButtons(e) {
            return e.map((e => ({
                action: e.id,
                title: e.title
            })))
        }
        static create(e) {
            return new d(e)
        }
    }
    t.EmarsysServiceWorker = d
}]);
//# sourceMappingURL=web-emarsys-service-worker.js.map
// {
//     "mode": "full",
//     "isActive": false
// }