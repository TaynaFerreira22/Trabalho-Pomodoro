module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AppLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/AppLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2f$TimerDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timer/TimerDisplay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Presets$2f$PresetSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Presets/PresetSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tasks$2f$TaskPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Tasks/TaskPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$ConfirmDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/ConfirmDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePomodoroSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePomodoroSession.ts [app-ssr] (ecmascript)");
"use client";
;
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
    // Retorna false durante o SSR/hidratação inicial e true após a montagem no navegador
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscreverVazio, ()=>true, ()=>false);
    const [modalEncerrarAberto, setModalEncerrarAberto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePomodoroSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePomodoroSession"])();
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center text-slate-500 font-medium",
            children: "A carregar temporizador..."
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AppLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppLayout"], {
                topBarSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Presets$2f$PresetSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetSelector"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 21
                }, this),
                timerSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-6 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2f$TimerDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimerDisplay"], {
                            tempoRestanteMs: session.tempoRestanteMs,
                            faseAtual: session.faseAtual,
                            cicloAtual: session.cicloAtual,
                            progressoPercentual: session.progressoPercentual
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-2",
                            children: [
                                session.status === "emAndamento" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: session.pausar,
                                    className: "px-5 py-2 font-medium bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-xs transition-colors",
                                    children: "Pausar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: session.iniciar,
                                    className: "px-5 py-2 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-xs transition-colors",
                                    children: session.status === "pausada" ? "Retomar" : "Iniciar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: session.pularFase,
                                    className: "px-4 py-2 font-medium border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 rounded-lg transition-colors",
                                    children: "Pular Fase"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: session.reiniciarCiclos,
                                    className: "px-4 py-2 font-medium border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 rounded-lg transition-colors",
                                    children: "Reiniciar Ciclos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                tasksSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Tasks$2f$TaskPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TaskPanel"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 90,
                    columnNumber: 20
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$ConfirmDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmDialog"], {
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
}),
"[project]/src/components/Common/ConfirmDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmDialog",
    ()=>ConfirmDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ConfirmDialog = ({ isOpen, titulo, mensagem, textoConfirmar = "Confirmar", textoCancelar = "Cancelar", aoConfirmar, aoCancelar, variante = "perigo" })=>{
    const botaoConfirmarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        botaoConfirmarRef.current?.focus();
        const lidarKeyDown = (e)=>{
            if (e.key === "Escape") {
                e.preventDefault();
                aoCancelar();
            }
        };
        window.addEventListener("keydown", lidarKeyDown);
        return ()=>window.removeEventListener("keydown", lidarKeyDown);
    }, [
        isOpen,
        aoCancelar
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "dialog-title",
        "aria-describedby": "dialog-desc",
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border-2 border-slate-400 max-w-md w-full p-6 text-left shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "dialog-title",
                    className: "text-lg font-bold text-slate-900 mb-2",
                    children: titulo
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    id: "dialog-desc",
                    className: "text-sm text-slate-700 mb-6",
                    children: mensagem
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: aoCancelar,
                            className: "px-4 py-2 text-sm font-medium border border-slate-400 bg-slate-100 hover:bg-slate-200 text-slate-800",
                            children: textoCancelar
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/ConfirmDialog.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/components/Layout/AppLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLayout",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const AppLayout = ({ topBarSlot, timerSlot, tasksSlot })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-slate-300 bg-white p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold tracking-tight",
                            children: "Pomodoro — Gestão de Foco"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/AppLayout.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-6xl w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Temporizador de Foco",
                        className: "md:col-span-7 lg:col-span-8 flex flex-col items-center justify-center border border-slate-300 bg-white p-6 rounded",
                        children: timerSlot
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/AppLayout.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
}),
"[project]/src/components/Presets/PresetSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetSelector",
    ()=>PresetSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const PresetSelector = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-2 border border-slate-300 bg-white rounded text-sm text-slate-700",
        children: "[Pessoa 2: Seletor de Presets & Gestão]"
    }, void 0, false, {
        fileName: "[project]/src/components/Presets/PresetSelector.tsx",
        lineNumber: 3,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/components/Tasks/TaskPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskPanel",
    ()=>TaskPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const TaskPanel = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        "aria-label": "Painel de Tarefas",
        className: "p-4 border border-slate-300 bg-white rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-bold text-base border-b pb-2 mb-3",
                children: "Painel de Tarefas"
            }, void 0, false, {
                fileName: "[project]/src/components/Tasks/TaskPanel.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/components/Timer/TimerDisplay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimerDisplay",
    ()=>TimerDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-2 font-semibold text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-6xl md:text-8xl font-mono font-bold tracking-tight text-slate-900 my-4",
                "aria-live": "polite",
                "aria-label": `Tempo restante: ${tempoFormatado}`,
                children: tempoFormatado
            }, void 0, false, {
                fileName: "[project]/src/components/Timer/TimerDisplay.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md bg-slate-200 h-3 rounded overflow-hidden border border-slate-300",
                role: "progressbar",
                "aria-valuenow": progressoPercentual,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/hooks/usePomodoroSession.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePomodoroSession",
    ()=>usePomodoroSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/timeMath.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/sessionStorage.ts [app-ssr] (ecmascript)");
// src/hooks/usePomodoroSession.ts
'use client';
;
;
;
function usePomodoroSession(opcoes) {
    const [sessao, setSessao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tempoRestanteMs, setTempoRestanteMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [foiRetomadaAutomaticamente, setFoiRetomadaAutomaticamente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [erroPersistencia, setErroPersistencia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [carregado, setCarregado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const callbackFinalizarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(opcoes?.aoFinalizarFase);
    callbackFinalizarRef.current = opcoes?.aoFinalizarFase;
    /**
   * Helper interno para atualizar o estado em memória e sincronizar com o localStorage.
   */ const persistirEAtualizar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((novaSessao)=>{
        if (novaSessao === null) {
            const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removerSessaoStorage"])();
            setErroPersistencia(res.sucesso ? null : res.erro ?? 'Erro ao limpar sessão.');
            setSessao(null);
            setTempoRestanteMs(0);
            setFoiRetomadaAutomaticamente(false);
            return;
        }
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["salvarSessaoStorage"])(novaSessao);
        setErroPersistencia(res.sucesso ? null : res.erro ?? 'Erro ao salvar sessão.');
        setSessao(novaSessao);
        setTempoRestanteMs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcularTempoRestanteMs"])(novaSessao));
    }, []);
    /**
   * UC10: Restauração automática da sessão ao carregar/reabrir o navegador.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const resultado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carregarSessaoStorage"])();
        if (!resultado.sucesso) {
            // R-03: Estado corrompido detectado -> limpa armazenamento e reporta ao usuário
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removerSessaoStorage"])();
            setErroPersistencia(resultado.erro ?? 'Sessão anterior inválida foi descartada.');
            setCarregado(true);
            return;
        }
        if (!resultado.dados) {
            setCarregado(true);
            return;
        }
        const agora = Date.now();
        const { sessaoAtualizada } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recalcularSessaoPorTimestamp"])(resultado.dados, agora);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sessionStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["salvarSessaoStorage"])(sessaoAtualizada);
        setSessao(sessaoAtualizada);
        setTempoRestanteMs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcularTempoRestanteMs"])(sessaoAtualizada, agora));
        setFoiRetomadaAutomaticamente(sessaoAtualizada.status !== 'concluida');
        setCarregado(true);
    }, []);
    /**
   * Motor de contagem regressiva baseado em timestamps absolutos (RNF-03, R-02).
   * Executa a cada 250ms para manter precisão visual e detectar virada de fase sem drift.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!sessao || sessao.status !== 'emAndamento') return;
        const atualizarRelogio = ()=>{
            const agora = Date.now();
            if (agora >= sessao.fimFasePrevistoEm) {
                const faseAnterior = sessao.faseAtual;
                const { sessaoAtualizada } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recalcularSessaoPorTimestamp"])(sessao, agora);
                persistirEAtualizar(sessaoAtualizada);
                // RN-13: Emite alerta sonoro ao fim de cada fase concluída
                const proximaFase = sessaoAtualizada.status === 'concluida' ? null : sessaoAtualizada.faseAtual;
                callbackFinalizarRef.current?.(faseAnterior, proximaFase);
            } else {
                setTempoRestanteMs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcularTempoRestanteMs"])(sessao, agora));
            }
        };
        const intervalo = window.setInterval(atualizarRelogio, 250);
        return ()=>window.clearInterval(intervalo);
    }, [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC04 / UC09: Inicia uma nova sessão a partir de um preset.
   * Cria um snapshot imutável (RN-05) e substitui qualquer sessão anterior (RN-02).
   */ const iniciarSessao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((preset)=>{
        const agora = Date.now();
        const snapshot = {
            nome: preset.nome,
            tempoFocoMin: preset.tempoFocoMin,
            tempoPausaCurtaMin: preset.tempoPausaCurtaMin,
            ciclosAntesPausaLonga: preset.ciclosAntesPausaLonga,
            tempoPausaLongaMin: preset.tempoPausaLongaMin
        };
        const duracaoInicialMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])('foco', snapshot);
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
    }, [
        persistirEAtualizar
    ]);
    /**
   * UC05 (RF-06): Pausa a sessão em andamento preservando o saldo exato em ms.
   */ const pausarSessao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!sessao || sessao.status !== 'emAndamento') return;
        const agora = Date.now();
        const restanteMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcularTempoRestanteMs"])(sessao, agora);
        const sessaoPausada = {
            ...sessao,
            status: 'pausada',
            pausadaEm: agora,
            tempoRestanteAoPausarMs: restanteMs,
            atualizadaEm: agora
        };
        persistirEAtualizar(sessaoPausada);
    }, [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC05 (RF-07): Retoma uma sessão pausada recalculando o novo fim da fase.
   */ const retomarSessao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!sessao || sessao.status !== 'pausada') return;
        const agora = Date.now();
        const saldoMs = sessao.tempoRestanteAoPausarMs ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])(sessao.faseAtual, sessao.snapshotPreset);
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
    }, [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC06 (RF-08 / RN-03): Avança manualmente para a próxima fase sem incrementar ciclos.
   */ const pularFase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!sessao || sessao.status === 'concluida') return;
        const agora = Date.now();
        const proxima = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcularProximaEtapa"])(sessao.faseAtual, sessao.cicloAtual, sessao.snapshotPreset, true // foiPulada = true -> RN-03 não incrementa ciclos
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
        const novaDuracaoMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])(proxima.fase, sessao.snapshotPreset);
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
    }, [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC07 (RF-09 / RN-04): Zera os ciclos para 1 e volta para a fase de foco.
   * (A confirmação explícita é disparada pelo modal da Pessoa 4 antes de chamar esta função).
   */ const reiniciarCiclos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!sessao) return;
        const agora = Date.now();
        const duracaoFocoMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])('foco', sessao.snapshotPreset);
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
    }, [
        sessao,
        persistirEAtualizar
    ]);
    /**
   * UC08 / UC11 (RF-10 / RF-13 / RN-01): Encerra ou descarta a sessão ativa,
   * removendo-a do localStorage e liberando o preset para edição/exclusão.
   */ const encerrarOuDescartarSessao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        persistirEAtualizar(null);
    }, [
        persistirEAtualizar
    ]);
    /**
   * Dados derivados prontos para consumo direto pela UI (Pessoa 4) e Presets (Pessoa 2).
   */ const dadosDerivados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const duracaoTotalFaseMs = sessao ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["obterDuracaoFaseMs"])(sessao.faseAtual, sessao.snapshotPreset) : 0;
        const progressoPercentual = duracaoTotalFaseMs > 0 ? Math.min(100, Math.max(0, (duracaoTotalFaseMs - tempoRestanteMs) / duracaoTotalFaseMs * 100)) : 0;
        // RN-01: Enquanto houver sessão não concluída, o preset fica bloqueado para edição/exclusão
        const presetEmUsoId = sessao && sessao.status !== 'concluida' ? sessao.presetId : null;
        return {
            tempoFormatado: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timeMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatarTempoMMSS"])(tempoRestanteMs),
            duracaoTotalFaseMs,
            progressoPercentual,
            presetEmUsoId,
            temSessaoAtiva: sessao !== null && sessao.status !== 'concluida'
        };
    }, [
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
}),
"[project]/src/services/sessionStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            sucesso: true,
            dados: null
        };
    }
    //TURBOPACK unreachable
    ;
}
function salvarSessaoStorage(sessao) {
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            sucesso: true,
            dados: sessao
        };
    }
    //TURBOPACK unreachable
    ;
}
function removerSessaoStorage() {
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            sucesso: true,
            dados: null
        };
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/utils/timeMath.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=_1oqag9cds53kk._.js.map