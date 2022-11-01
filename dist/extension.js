/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = exports.SwitchToFileType = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
var SwitchToFileType;
(function (SwitchToFileType) {
    SwitchToFileType["Component"] = "Component";
    SwitchToFileType["Template"] = "Template";
    SwitchToFileType["Stylesheet"] = "Stylesheet";
    SwitchToFileType["Test"] = "Test";
})(SwitchToFileType = exports.SwitchToFileType || (exports.SwitchToFileType = {}));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
async function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let templateDisposable = vscode.commands.registerCommand('ngswitchto.template', () => {
        switchContext(SwitchToFileType.Template);
        context.subscriptions.push(templateDisposable);
    });
    let componentDisposable = vscode.commands.registerCommand('ngswitchto.component', () => {
        switchContext(SwitchToFileType.Component);
        context.subscriptions.push(componentDisposable);
    });
    let stylesheetDisposable = vscode.commands.registerCommand('ngswitchto.stylesheet', () => {
        switchContext(SwitchToFileType.Stylesheet);
        context.subscriptions.push(stylesheetDisposable);
    });
    let testDisposable = vscode.commands.registerCommand('ngswitchto.unittest', () => {
        switchContext(SwitchToFileType.Test);
        context.subscriptions.push(testDisposable);
    });
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
async function switchContext(newContext) {
    let currentFile = vscode.window.activeTextEditor?.document.fileName;
    let currentFileNoExtension;
    let switchToFilePath;
    if (currentFile && currentFile.indexOf('.spec.ts') > -1) {
        currentFileNoExtension = currentFile.replace(/\.spec.[^/.]+$/, '');
    }
    else {
        currentFileNoExtension = currentFile.replace(/\.[^/.]+$/, '');
    }
    switch (newContext) {
        case SwitchToFileType.Component:
            switchToFilePath = currentFileNoExtension + '.ts';
            break;
        case SwitchToFileType.Template:
            switchToFilePath = currentFileNoExtension + '.html';
            break;
        case SwitchToFileType.Stylesheet:
            switchToFilePath = currentFileNoExtension + '.scss';
            break;
        case SwitchToFileType.Test:
            switchToFilePath = currentFileNoExtension + '.spec.ts';
            break;
    }
    let file = vscode.Uri.file(switchToFilePath);
    await vscode.commands.executeCommand("vscode.openFolder", file, {
        forceNewWindow: false,
    });
}


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map