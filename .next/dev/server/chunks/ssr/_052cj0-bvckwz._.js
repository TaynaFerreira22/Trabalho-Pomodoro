module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/app/teste-timer/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePomodoroSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePomodoroSession.ts [app-ssr] (ecmascript)");
// src/app/page.tsx
// Página temporária criada apenas para teste e validação do motor temporal (Pessoa 1)
'use client';
;
;
// Preset fictício apenas para testar o início da sessão sem depender da Pessoa 2
const PRESET_TESTE = {
    id: 'preset-teste-1',
    nome: 'Estudo Rápido (Teste)',
    tempoFocoMin: 1,
    tempoPausaCurtaMin: 1,
    ciclosAntesPausaLonga: 2,
    tempoPausaLongaMin: 2,
    criadoEm: Date.now(),
    atualizadoEm: Date.now()
};
function HomePage() {
    const { sessao, tempoFormatado, progressoPercentual, carregado, foiRetomadaAutomaticamente, erroPersistencia, iniciarSessao, pausarSessao, retomarSessao, pularFase, reiniciarCiclos, encerrarSessao, descartarSessaoRetomada } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePomodoroSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePomodoroSession"])({
        // Apenas para teste: simula o disparo do alerta sonoro da Pessoa 2
        aoFinalizarFase: (faseConcluida, proximaFase)=>{
            console.log(`Fase concluída: ${faseConcluida} -> Próxima: ${proximaFase ?? 'Fim'}`);
        }
    });
    if (!carregado) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6",
            children: "Carregando sessão..."
        }, void 0, false, {
            fileName: "[project]/src/app/teste-timer/page.tsx",
            lineNumber: 44,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto max-w-md space-y-4 p-6 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-bold",
                children: "Teste do Motor Pomodoro (Pessoa 1)"
            }, void 0, false, {
                fileName: "[project]/src/app/teste-timer/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            erroPersistencia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded bg-red-100 p-2 text-sm text-red-700",
                children: erroPersistencia
            }, void 0, false, {
                fileName: "[project]/src/app/teste-timer/page.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            foiRetomadaAutomaticamente && sessao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded bg-amber-100 p-3 text-sm text-amber-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Sessão retomada automaticamente após recarregar a página."
                    }, void 0, false, {
                        fileName: "[project]/src/app/teste-timer/page.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: descartarSessaoRetomada,
                        className: "mt-2 rounded bg-amber-700 px-3 py-1 text-white",
                        children: "Descartar sessão retomada"
                    }, void 0, false, {
                        fileName: "[project]/src/app/teste-timer/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/teste-timer/page.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            !sessao ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>iniciarSessao(PRESET_TESTE),
                className: "rounded bg-blue-600 px-4 py-2 text-white",
                children: "Iniciar Sessão de Teste (1 min)"
            }, void 0, false, {
                fileName: "[project]/src/app/teste-timer/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Fase: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: sessao.faseAtual
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/teste-timer/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/teste-timer/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Ciclo: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            sessao.cicloAtual,
                                            " / ",
                                            sessao.snapshotPreset.ciclosAntesPausaLonga
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/teste-timer/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/teste-timer/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Status: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: sessao.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/teste-timer/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/teste-timer/page.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/teste-timer/page.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-5xl font-mono font-bold",
                        children: tempoFormatado
                    }, void 0, false, {
                        fileName: "[project]/src/app/teste-timer/page.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 w-full overflow-hidden rounded bg-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-blue-600 transition-all",
                            style: {
                                width: `${progressoPercentual}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/teste-timer/page.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/teste-timer/page.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 pt-2",
                        children: [
                            sessao.status === 'emAndamento' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: pausarSessao,
                                className: "rounded bg-yellow-500 px-3 py-1 text-white",
                                children: "Pausar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/teste-timer/page.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            sessao.status === 'pausada' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: retomarSessao,
                                className: "rounded bg-green-600 px-3 py-1 text-white",
                                children: "Retomar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/teste-timer/page.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            sessao.status !== 'concluida' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: pularFase,
                                        className: "rounded bg-indigo-600 px-3 py-1 text-white",
                                        children: "Pular Fase"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/teste-timer/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: reiniciarCiclos,
                                        className: "rounded bg-gray-600 px-3 py-1 text-white",
                                        children: "Reiniciar Ciclos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/teste-timer/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/teste-timer/page.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: encerrarSessao,
                                className: "rounded bg-red-600 px-3 py-1 text-white",
                                children: "Encerrar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/teste-timer/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/teste-timer/page.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/teste-timer/page.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/teste-timer/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
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

//# sourceMappingURL=_052cj0-bvckwz._.js.map