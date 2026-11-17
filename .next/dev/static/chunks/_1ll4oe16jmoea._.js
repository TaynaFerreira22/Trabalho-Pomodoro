(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/AppLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2f$TimerDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timer/TimerDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Presets$2f$PresetSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Presets/PresetSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tasks$2f$TaskPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Tasks/TaskPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/ConfirmDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePomodoroSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePomodoroSession.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Função de subscrição estática exigida pelo hook (não requer listeners ativos)
const subscreverVazio = ()=>()=>{};
function Home() {
    _s();
    // Retorna false durante o SSR/hidratação inicial e true após a montagem no navegador
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscreverVazio, {
        "Home.useSyncExternalStore[isMounted]": ()=>true
    }["Home.useSyncExternalStore[isMounted]"], {
        "Home.useSyncExternalStore[isMounted]": ()=>false
    }["Home.useSyncExternalStore[isMounted]"]);
    const [modalEncerrarAberto, setModalEncerrarAberto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePomodoroSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePomodoroSession"])();
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center text-slate-500 font-medium",
            children: "A carregar temporizador..."
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLayout"], {
                topBarSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Presets$2f$PresetSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetSelector"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 21
                }, this),
                timerSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-6 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2f$TimerDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimerDisplay"], {
                            tempoRestanteMs: session.tempoRestanteMs,
                            faseAtual: session.faseAtual,
                            cicloAtual: session.cicloAtual,
                            progressoPercentual: session.progressoPercentual
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-2",
                            children: [
                                session.status === "emAndamento" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: session.pausar,
                                    className: "px-5 py-2 font-medium bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-xs transition-colors",
                                    children: "Pausar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: session.iniciar,
                                    className: "px-5 py-2 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-xs transition-colors",
                                    children: session.status === "pausada" ? "Retomar" : "Iniciar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: session.pularFase,
                                    className: "px-4 py-2 font-medium border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 rounded-lg transition-colors",
                                    children: "Pular Fase"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: session.reiniciarCiclos,
                                    className: "px-4 py-2 font-medium border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 rounded-lg transition-colors",
                                    children: "Reiniciar Ciclos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setModalEncerrarAberto(true),
                                    className: "px-4 py-2 font-medium border border-red-300 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                    children: "Encerrar Sessão"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this),
                tasksSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tasks$2f$TaskPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskPanel"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 90,
                    columnNumber: 20
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmDialog"], {
                isOpen: modalEncerrarAberto,
                titulo: "Encerrar Sessão Ativa?",
                mensagem: "Deseja realmente encerrar a sessão de foco atual? Todo o progresso do ciclo em andamento será finalizado.",
                textoConfirmar: "Encerrar",
                aoConfirmar: ()=>{
                    session.encerrarSessao();
                    setModalEncerrarAberto(false);
                },
                aoCancelar: ()=>setModalEncerrarAberto(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Home, "hC7FhqZ7Uyl20lIWAvOvSRttW7A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePomodoroSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePomodoroSession"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/ConfirmDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmDialog",
    ()=>ConfirmDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ConfirmDialog = ({ isOpen, titulo, mensagem, textoConfirmar = "Confirmar", textoCancelar = "Cancelar", aoConfirmar, aoCancelar, variante = "perigo" })=>{
    _s();
    const botaoConfirmarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfirmDialog.useEffect": ()=>{
            if (!isOpen) return;
            botaoConfirmarRef.current?.focus();
            const lidarKeyDown = {
                "ConfirmDialog.useEffect.lidarKeyDown": (e)=>{
                    if (e.key === "Escape") {
                        e.preventDefault();
                        aoCancelar();
                    }
                }
            }["ConfirmDialog.useEffect.lidarKeyDown"];
            window.addEventListener("keydown", lidarKeyDown);
            return ({
                "ConfirmDialog.useEffect": ()=>window.removeEventListener("keydown", lidarKeyDown)
            })["ConfirmDialog.useEffect"];
        }
    }["ConfirmDialog.useEffect"], [
        isOpen,
        aoCancelar
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "dialog-title",
        "aria-describedby": "dialog-desc",
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border-2 border-slate-400 max-w-md w-full p-6 text-left shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "dialog-title",
                    className: "text-lg font-bold text-slate-900 mb-2",
                    children: titulo
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    id: "dialog-desc",
                    className: "text-sm text-slate-700 mb-6",
                    children: mensagem
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: aoCancelar,
                            className: "px-4 py-2 text-sm font-medium border border-slate-400 bg-slate-100 hover:bg-slate-200 text-slate-800",
                            children: textoCancelar
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: botaoConfirmarRef,
                            type: "button",
                            onClick: aoConfirmar,
                            className: `px-4 py-2 text-sm font-medium text-white ${variante === "perigo" ? "bg-red-700 hover:bg-red-800" : "bg-slate-800 hover:bg-slate-900"}`,
                            children: textoConfirmar
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ConfirmDialog, "jVCqkJbHCHJwZXyv3N3Jrifv0s4=");
_c = ConfirmDialog;
var _c;
__turbopack_context__.k.register(_c, "ConfirmDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Layout/AppLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLayout",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const AppLayout = ({ topBarSlot, timerSlot, tasksSlot })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-slate-300 bg-white p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold tracking-tight",
                            children: "Pomodoro — Gestão de Foco"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/AppLayout.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full sm:w-auto min-w-[280px]",
                            children: topBarSlot
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/AppLayout.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layout/AppLayout.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/AppLayout.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-6xl w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Temporizador de Foco",
                        className: "md:col-span-7 lg:col-span-8 flex flex-col items-center justify-center border border-slate-300 bg-white p-6 rounded",
                        children: timerSlot
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/AppLayout.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Painel de Tarefas",
                        className: "md:col-span-5 lg:col-span-4 w-full",
                        children: tasksSlot
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/AppLayout.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout/AppLayout.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout/AppLayout.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AppLayout;
var _c;
__turbopack_context__.k.register(_c, "AppLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Presets/PresetSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetSelector",
    ()=>PresetSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const PresetSelector = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-2 border border-slate-300 bg-white rounded text-sm text-slate-700",
        children: "[Pessoa 2: Seletor de Presets & Gestão]"
    }, void 0, false, {
        fileName: "[project]/src/components/Presets/PresetSelector.tsx",
        lineNumber: 3,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = PresetSelector;
var _c;
__turbopack_context__.k.register(_c, "PresetSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Tasks/TaskPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskPanel",
    ()=>TaskPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const TaskPanel = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        "aria-label": "Painel de Tarefas",
        className: "p-4 border border-slate-300 bg-white rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-bold text-base border-b pb-2 mb-3",
                children: "Painel de Tarefas"
            }, void 0, false, {
                fileName: "[project]/src/components/Tasks/TaskPanel.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-500",
                children: "[Pessoa 3: Lista de tarefas e ordenação fixa RN-10]"
            }, void 0, false, {
                fileName: "[project]/src/components/Tasks/TaskPanel.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Tasks/TaskPanel.tsx",
        lineNumber: 3,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = TaskPanel;
var _c;
__turbopack_context__.k.register(_c, "TaskPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Timer/TimerDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimerDisplay",
    ()=>TimerDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const TimerDisplay = ({ tempoRestanteMs, faseAtual, cicloAtual, progressoPercentual })=>{
    const totalSegundos = Math.max(0, Math.ceil(tempoRestanteMs / 1000));
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;
    const tempoFormatado = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
    const rotulosFase = {
        foco: "Foco",
        pausaCurta: "Pausa Curta",
        pausaLonga: "Pausa Longa"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-2 font-semibold text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 bg-slate-200 border border-slate-300 rounded",
                        children: [
                            "Fase: ",
                            rotulosFase[faseAtual]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Timer/TimerDisplay.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 bg-slate-200 border border-slate-300 rounded",
                        children: [
                            "Ciclo: ",
                            cicloAtual
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Timer/TimerDisplay.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timer/TimerDisplay.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-6xl md:text-8xl font-mono font-bold tracking-tight text-slate-900 my-4",
                "aria-live": "polite",
                "aria-label": `Tempo restante: ${tempoFormatado}`,
                children: tempoFormatado
            }, void 0, false, {
                fileName: "[project]/src/components/Timer/TimerDisplay.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md bg-slate-200 h-3 rounded overflow-hidden border border-slate-300",
                role: "progressbar",
                "aria-valuenow": progressoPercentual,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-700 h-full transition-all duration-200",
                    style: {
                        width: `${Math.min(100, Math.max(0, progressoPercentual))}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Timer/TimerDisplay.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Timer/TimerDisplay.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timer/TimerDisplay.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TimerDisplay;
var _c;
__turbopack_context__.k.register(_c, "TimerDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/usePomodoroSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePomodoroSession",
    ()=>usePomodoroSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/timeMath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/sessionStorage.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
// src/hooks/usePomodoroSession.ts
'use client';
;
;
;
function usePomodoroSession(opcoes) {
    _s();
    const [sessao, setSessao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tempoRestanteMs, setTempoRestanteMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [foiRetomadaAutomaticamente, setFoiRetomadaAutomaticamente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [erroPersistencia, setErroPersistencia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [carregado, setCarregado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const callbackFinalizarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(opcoes?.aoFinalizarFase);
    callbackFinalizarRef.current = opcoes?.aoFinalizarFase;
    /**
   * Helper interno para atualizar o estado em memória e sincronizar com o localStorage.
   */ const persistirEAtualizar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePomodoroSession.useCallback[persistirEAtualizar]": (novaSessao)=>{
            if (novaSessao === null) {
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removerSessaoStorage"])();
                setErroPersistencia(res.sucesso ? null : res.erro ?? 'Erro ao limpar sessão.');
                setSessao(null);
                setTempoRestanteMs(0);
                setFoiRetomadaAutomaticamente(false);
                return;
            }
            const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salvarSessaoStorage"])(novaSessao);
            setErroPersistencia(res.sucesso ? null : res.erro ?? 'Erro ao salvar sessão.');
            setSessao(novaSessao);
            setTempoRestanteMs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcularTempoRestanteMs"])(novaSessao));
        }
    }["usePomodoroSession.useCallback[persistirEAtualizar]"], []);
    /**
   * UC10: Restauração automática da sessão ao carregar/reabrir o navegador.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePomodoroSession.useEffect": ()=>{
            const resultado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carregarSessaoStorage"])();
            if (!resultado.sucesso) {
                // R-03: Estado corrompido detectado -> limpa armazenamento e reporta ao usuário
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removerSessaoStorage"])();
                setErroPersistencia(resultado.erro ?? 'Sessão anterior inválida foi descartada.');
                setCarregado(true);
                return;
            }
            if (!resultado.dados) {
                setCarregado(true);
                return;
            }
            const agora = Date.now();
            const { sessaoAtualizada } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recalcularSessaoPorTimestamp"])(resultado.dados, agora);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salvarSessaoStorage"])(sessaoAtualizada);
            setSessao(sessaoAtualizada);
            setTempoRestanteMs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcularTempoRestanteMs"])(sessaoAtualizada, agora));
            setFoiRetomadaAutomaticamente(sessaoAtualizada.status !== 'concluida');
            setCarregado(true);
        }
    }["usePomodoroSession.useEffect"], []);
    /**
   * Motor de contagem regressiva baseado em timestamps absolutos (RNF-03, R-02).
   * Executa a cada 250ms para manter precisão visual e detectar virada de fase sem drift.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePomodoroSession.useEffect": ()=>{
            if (!sessao || sessao.status !== 'emAndamento') return;
            const atualizarRelogio = {
                "usePomodoroSession.useEffect.atualizarRelogio": ()=>{
                    const agora = Date.now();
                    if (agora >= sessao.fimFasePrevistoEm) {
                        const faseAnterior = sessao.faseAtual;
                        const { sessaoAtualizada } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recalcularSessaoPorTimestamp"])(sessao, agora);
                        persistirEAtualizar(sessaoAtualizada);
                        // RN-13: Emite alerta sonoro ao fim de cada fase concluída
                        const proximaFase = sessaoAtualizada.status === 'concluida' ? null : sessaoAtualizada.faseAtual;
                        callbackFinalizarRef.current?.(faseAnterior, proximaFase);
                    } else {
                        setTempoRestanteMs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcularTempoRestanteMs"])(sessao, agora));
                    }
                }
            }["usePomodoroSession.useEffect.atualizarRelogio"];
            const intervalo = window.setInterval(atualizarRelogio, 250);
            return ({
                "usePomodoroSession.useEffect": ()=>window.clearInterval(intervalo)
            })["usePomodoroSession.useEffect"];
        }
    }["usePomodoroSession.useEffect"], [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC04 / UC09: Inicia uma nova sessão a partir de um preset.
   * Cria um snapshot imutável (RN-05) e substitui qualquer sessão anterior (RN-02).
   */ const iniciarSessao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePomodoroSession.useCallback[iniciarSessao]": (preset)=>{
            const agora = Date.now();
            const snapshot = {
                nome: preset.nome,
                tempoFocoMin: preset.tempoFocoMin,
                tempoPausaCurtaMin: preset.tempoPausaCurtaMin,
                ciclosAntesPausaLonga: preset.ciclosAntesPausaLonga,
                tempoPausaLongaMin: preset.tempoPausaLongaMin
            };
            const duracaoInicialMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])('foco', snapshot);
            const novaSessao = {
                id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `sessao-${agora}`,
                presetId: preset.id,
                snapshotPreset: snapshot,
                faseAtual: 'foco',
                cicloAtual: 1,
                status: 'emAndamento',
                inicioFaseEm: agora,
                fimFasePrevistoEm: agora + duracaoInicialMs,
                pausadaEm: null,
                tempoRestanteAoPausarMs: null,
                criadaEm: agora,
                atualizadaEm: agora
            };
            setFoiRetomadaAutomaticamente(false);
            persistirEAtualizar(novaSessao);
        }
    }["usePomodoroSession.useCallback[iniciarSessao]"], [
        persistirEAtualizar
    ]);
    /**
   * UC05 (RF-06): Pausa a sessão em andamento preservando o saldo exato em ms.
   */ const pausarSessao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePomodoroSession.useCallback[pausarSessao]": ()=>{
            if (!sessao || sessao.status !== 'emAndamento') return;
            const agora = Date.now();
            const restanteMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcularTempoRestanteMs"])(sessao, agora);
            const sessaoPausada = {
                ...sessao,
                status: 'pausada',
                pausadaEm: agora,
                tempoRestanteAoPausarMs: restanteMs,
                atualizadaEm: agora
            };
            persistirEAtualizar(sessaoPausada);
        }
    }["usePomodoroSession.useCallback[pausarSessao]"], [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC05 (RF-07): Retoma uma sessão pausada recalculando o novo fim da fase.
   */ const retomarSessao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePomodoroSession.useCallback[retomarSessao]": ()=>{
            if (!sessao || sessao.status !== 'pausada') return;
            const agora = Date.now();
            const saldoMs = sessao.tempoRestanteAoPausarMs ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])(sessao.faseAtual, sessao.snapshotPreset);
            const sessaoRetomada = {
                ...sessao,
                status: 'emAndamento',
                inicioFaseEm: agora,
                fimFasePrevistoEm: agora + saldoMs,
                pausadaEm: null,
                tempoRestanteAoPausarMs: null,
                atualizadaEm: agora
            };
            persistirEAtualizar(sessaoRetomada);
        }
    }["usePomodoroSession.useCallback[retomarSessao]"], [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC06 (RF-08 / RN-03): Avança manualmente para a próxima fase sem incrementar ciclos.
   */ const pularFase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePomodoroSession.useCallback[pularFase]": ()=>{
            if (!sessao || sessao.status === 'concluida') return;
            const agora = Date.now();
            const proxima = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcularProximaEtapa"])(sessao.faseAtual, sessao.cicloAtual, sessao.snapshotPreset, true // foiPulada = true -> RN-03 não incrementa ciclos
            );
            if (proxima.concluiuSessao) {
                persistirEAtualizar({
                    ...sessao,
                    status: 'concluida',
                    pausadaEm: null,
                    tempoRestanteAoPausarMs: 0,
                    atualizadaEm: agora
                });
                return;
            }
            const novaDuracaoMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])(proxima.fase, sessao.snapshotPreset);
            const manterPausada = sessao.status === 'pausada';
            const sessaoAvancada = {
                ...sessao,
                faseAtual: proxima.fase,
                cicloAtual: proxima.ciclo,
                inicioFaseEm: agora,
                fimFasePrevistoEm: agora + novaDuracaoMs,
                pausadaEm: manterPausada ? agora : null,
                tempoRestanteAoPausarMs: manterPausada ? novaDuracaoMs : null,
                atualizadaEm: agora
            };
            persistirEAtualizar(sessaoAvancada);
        }
    }["usePomodoroSession.useCallback[pularFase]"], [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC07 (RF-09 / RN-04): Zera os ciclos para 1 e volta para a fase de foco.
   * (A confirmação explícita é disparada pelo modal da Pessoa 4 antes de chamar esta função).
   */ const reiniciarCiclos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePomodoroSession.useCallback[reiniciarCiclos]": ()=>{
            if (!sessao) return;
            const agora = Date.now();
            const duracaoFocoMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])('foco', sessao.snapshotPreset);
            const manterPausada = sessao.status === 'pausada';
            const sessaoReiniciada = {
                ...sessao,
                faseAtual: 'foco',
                cicloAtual: 1,
                status: manterPausada ? 'pausada' : 'emAndamento',
                inicioFaseEm: agora,
                fimFasePrevistoEm: agora + duracaoFocoMs,
                pausadaEm: manterPausada ? agora : null,
                tempoRestanteAoPausarMs: manterPausada ? duracaoFocoMs : null,
                atualizadaEm: agora
            };
            persistirEAtualizar(sessaoReiniciada);
        }
    }["usePomodoroSession.useCallback[reiniciarCiclos]"], [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC08 / UC11 (RF-10 / RF-13 / RN-01): Encerra ou descarta a sessão ativa,
   * removendo-a do localStorage e liberando o preset para edição/exclusão.
   */ const encerrarOuDescartarSessao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePomodoroSession.useCallback[encerrarOuDescartarSessao]": ()=>{
            persistirEAtualizar(null);
        }
    }["usePomodoroSession.useCallback[encerrarOuDescartarSessao]"], [
        persistirEAtualizar
    ]);
    /**
   * Dados derivados prontos para consumo direto pela UI (Pessoa 4) e Presets (Pessoa 2).
   */ const dadosDerivados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePomodoroSession.useMemo[dadosDerivados]": ()=>{
            const duracaoTotalFaseMs = sessao ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])(sessao.faseAtual, sessao.snapshotPreset) : 0;
            const progressoPercentual = duracaoTotalFaseMs > 0 ? Math.min(100, Math.max(0, (duracaoTotalFaseMs - tempoRestanteMs) / duracaoTotalFaseMs * 100)) : 0;
            // RN-01: Enquanto houver sessão não concluída, o preset fica bloqueado para edição/exclusão
            const presetEmUsoId = sessao && sessao.status !== 'concluida' ? sessao.presetId : null;
            return {
                tempoFormatado: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatarTempoMMSS"])(tempoRestanteMs),
                duracaoTotalFaseMs,
                progressoPercentual,
                presetEmUsoId,
                temSessaoAtiva: sessao !== null && sessao.status !== 'concluida'
            };
        }
    }["usePomodoroSession.useMemo[dadosDerivados]"], [
        sessao,
        tempoRestanteMs
    ]);
    return {
        // Estado
        sessao,
        tempoRestanteMs,
        carregado,
        foiRetomadaAutomaticamente,
        erroPersistencia,
        ...dadosDerivados,
        // Ações (Casos de Uso)
        iniciarSessao,
        pausarSessao,
        retomarSessao,
        pularFase,
        reiniciarCiclos,
        encerrarSessao: encerrarOuDescartarSessao,
        descartarSessaoRetomada: encerrarOuDescartarSessao,
        limparErroPersistencia: ()=>setErroPersistencia(null)
    };
}
_s(usePomodoroSession, "3GYRz2jko8MsGGQ84peSx5i7QgY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/sessionStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/services/sessionStorage.ts
__turbopack_context__.s([
    "CHAVE_SESSAO_ATIVA",
    ()=>CHAVE_SESSAO_ATIVA,
    "carregarSessaoStorage",
    ()=>carregarSessaoStorage,
    "removerSessaoStorage",
    ()=>removerSessaoStorage,
    "salvarSessaoStorage",
    ()=>salvarSessaoStorage
]);
const CHAVE_SESSAO_ATIVA = 'pomodoro.sessaoAtiva';
/**
 * Valida estruturalmente se o objeto lido do localStorage é uma SessaoAtiva íntegra (R-03).
 */ function validarIntegridadeSessao(dado) {
    if (!dado || typeof dado !== 'object') return false;
    const s = dado;
    const fasesValidas = [
        'foco',
        'pausaCurta',
        'pausaLonga'
    ];
    const statusValidos = [
        'emAndamento',
        'pausada',
        'concluida'
    ];
    const temCamposBasicos = typeof s.id === 'string' && typeof s.presetId === 'string' && typeof s.faseAtual === 'string' && fasesValidas.includes(s.faseAtual) && typeof s.cicloAtual === 'number' && s.cicloAtual >= 1 && typeof s.status === 'string' && statusValidos.includes(s.status) && typeof s.inicioFaseEm === 'number' && typeof s.fimFasePrevistoEm === 'number';
    if (!temCamposBasicos) return false;
    const snap = s.snapshotPreset;
    const temSnapshotValido = !!snap && typeof snap === 'object' && typeof snap.nome === 'string' && typeof snap.tempoFocoMin === 'number' && typeof snap.tempoPausaCurtaMin === 'number' && typeof snap.ciclosAntesPausaLonga === 'number' && typeof snap.tempoPausaLongaMin === 'number';
    return temSnapshotValido;
}
function carregarSessaoStorage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(CHAVE_SESSAO_ATIVA);
        if (!raw) {
            return {
                sucesso: true,
                dados: null
            };
        }
        const parsed = JSON.parse(raw);
        if (!validarIntegridadeSessao(parsed)) {
            return {
                sucesso: false,
                dados: null,
                erro: 'Os dados da sessão salva estavam corrompidos ou inconsistentes.'
            };
        }
        return {
            sucesso: true,
            dados: parsed
        };
    } catch  {
        return {
            sucesso: false,
            dados: null,
            erro: 'Não foi possível ler os dados da sessão no armazenamento local.'
        };
    }
}
function salvarSessaoStorage(sessao) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(CHAVE_SESSAO_ATIVA, JSON.stringify(sessao));
        return {
            sucesso: true,
            dados: sessao
        };
    } catch  {
        return {
            sucesso: false,
            dados: null,
            erro: 'Falha ao salvar o progresso da sessão no navegador (Local Storage indisponível ou cheio).'
        };
    }
}
function removerSessaoStorage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.removeItem(CHAVE_SESSAO_ATIVA);
        return {
            sucesso: true,
            dados: null
        };
    } catch  {
        return {
            sucesso: false,
            dados: null,
            erro: 'Falha ao remover a sessão do armazenamento local.'
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/timeMath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/timeMath.ts
__turbopack_context__.s([
    "calcularProximaEtapa",
    ()=>calcularProximaEtapa,
    "calcularTempoRestanteMs",
    ()=>calcularTempoRestanteMs,
    "formatarTempoMMSS",
    ()=>formatarTempoMMSS,
    "obterDuracaoFaseMs",
    ()=>obterDuracaoFaseMs,
    "recalcularSessaoPorTimestamp",
    ()=>recalcularSessaoPorTimestamp
]);
const MS_POR_MINUTO = 60_000;
function obterDuracaoFaseMs(fase, snapshot) {
    switch(fase){
        case 'foco':
            return snapshot.tempoFocoMin * MS_POR_MINUTO;
        case 'pausaCurta':
            return snapshot.tempoPausaCurtaMin * MS_POR_MINUTO;
        case 'pausaLonga':
            return snapshot.tempoPausaLongaMin * MS_POR_MINUTO;
    }
}
function calcularTempoRestanteMs(sessao, agoraMs = Date.now()) {
    if (sessao.status === 'concluida') return 0;
    if (sessao.status === 'pausada') {
        return Math.max(0, sessao.tempoRestanteAoPausarMs ?? 0);
    }
    return Math.max(0, sessao.fimFasePrevistoEm - agoraMs);
}
function formatarTempoMMSS(ms) {
    const totalSegundos = Math.max(0, Math.ceil(ms / 1000));
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}
function calcularProximaEtapa(faseAtual, cicloAtual, snapshot, foiPulada) {
    const atingiuLimiteCiclos = cicloAtual >= snapshot.ciclosAntesPausaLonga;
    if (faseAtual === 'foco') {
        return {
            fase: atingiuLimiteCiclos ? 'pausaLonga' : 'pausaCurta',
            ciclo: cicloAtual,
            concluiuSessao: false
        };
    }
    if (faseAtual === 'pausaCurta') {
        return {
            fase: 'foco',
            // Se concluiu naturalmente, avança o ciclo; se pulou (RN-03), mantém o ciclo atual
            ciclo: foiPulada ? cicloAtual : cicloAtual + 1,
            concluiuSessao: false
        };
    }
    // Caso faseAtual === 'pausaLonga':
    // Fim da pausa longa encerra o bloco completo de ciclos previstos
    return {
        fase: 'foco',
        ciclo: cicloAtual,
        concluiuSessao: true
    };
}
function recalcularSessaoPorTimestamp(sessao, agoraMs = Date.now()) {
    // RN-06: Sessão pausada retorna pausada sem avanço automático
    if (sessao.status !== 'emAndamento') {
        return {
            sessaoAtualizada: sessao,
            houveTransicaoDeFase: false
        };
    }
    // Se a fase atual ainda não venceu, não há transição a fazer
    if (agoraMs < sessao.fimFasePrevistoEm) {
        return {
            sessaoAtualizada: sessao,
            houveTransicaoDeFase: false
        };
    }
    let faseCorrente = sessao.faseAtual;
    let cicloCorrente = sessao.cicloAtual;
    let inicioCorrente = sessao.inicioFaseEm;
    let fimCorrente = sessao.fimFasePrevistoEm;
    let statusCorrente = 'emAndamento';
    // Avança fase por fase até alcançar o timestamp atual ou concluir a sessão (RN-07)
    while(agoraMs >= fimCorrente && statusCorrente === 'emAndamento'){
        const proxima = calcularProximaEtapa(faseCorrente, cicloCorrente, sessao.snapshotPreset, false // Vencimento natural por tempo contabiliza o ciclo
        );
        if (proxima.concluiuSessao) {
            // RN-08: Todas as fases previstas venceram -> sessão encerrada como concluída
            statusCorrente = 'concluida';
            inicioCorrente = fimCorrente;
            break;
        }
        faseCorrente = proxima.fase;
        cicloCorrente = proxima.ciclo;
        inicioCorrente = fimCorrente;
        fimCorrente = inicioCorrente + obterDuracaoFaseMs(faseCorrente, sessao.snapshotPreset);
    }
    const sessaoAtualizada = {
        ...sessao,
        faseAtual: faseCorrente,
        cicloAtual: cicloCorrente,
        status: statusCorrente,
        inicioFaseEm: inicioCorrente,
        fimFasePrevistoEm: fimCorrente,
        pausadaEm: null,
        tempoRestanteAoPausarMs: null,
        atualizadaEm: agoraMs
    };
    return {
        sessaoAtualizada,
        houveTransicaoDeFase: true
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1ll4oe16jmoea._.js.map