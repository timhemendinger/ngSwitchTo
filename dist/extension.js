/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = exports.CurrentFileType = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
var CurrentFileType;
(function (CurrentFileType) {
    CurrentFileType["Component"] = "Component";
    CurrentFileType["Template"] = "Template";
    CurrentFileType["Stylesheet"] = "Stylesheet";
    CurrentFileType["Test"] = "Test";
})(CurrentFileType = exports.CurrentFileType || (exports.CurrentFileType = {}));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
async function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "ngswitchto" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('ngswitchto.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        let currentFile = vscode.window.activeTextEditor?.document.fileName;
        console.log(currentFile);
        if (currentFile && currentFile.indexOf('.spec.ts') > -1) {
            switchContext(CurrentFileType.Test);
        }
        else {
            // switchContext();
        }
        context.subscriptions.push(disposable);
    });
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
async function switchContext(fileType) {
    if (fileType === CurrentFileType.Test) {
    }
    else {
    }
    let currentFile = vscode.window.activeTextEditor?.document.fileName;
    let currentFileNoExtension = currentFile.replace(/\.[^/.]+$/, '');
    let path = vscode.Uri.file(currentFileNoExtension + '.scss');
    await vscode.commands.executeCommand("vscode.openFolder", path, {
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