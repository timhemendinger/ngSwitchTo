// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export enum SwitchToFileType {
	Component = 'Component',
	Template = 'Template',
	Stylesheet = 'Stylesheet',
	Test = 'Test'
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

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

// This method is called when your extension is deactivated
export function deactivate() { }

async function switchContext(newContext: SwitchToFileType) {
	let currentFile = vscode.window.activeTextEditor?.document.fileName;
	let currentFileNoExtension: string;
	let switchToFilePath: string;

	if (currentFile && currentFile.indexOf('.spec.ts') > -1) {
		currentFileNoExtension = (<string>currentFile).replace(/\.spec.[^/.]+$/, '');
	} else {
		currentFileNoExtension = (<string>currentFile).replace(/\.[^/.]+$/, '');
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
