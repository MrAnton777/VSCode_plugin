const vscode = require('vscode');

function activate(context) {
  const command = vscode.commands.registerCommand(
    'labProjectChecker.checkProject',
    async () => {
      const folders = vscode.workspace.workspaceFolders;

      if (!folders || folders.length === 0) {
        await vscode.window.showWarningMessage('Сначала откройте папку проекта.');
        return;
      }

      const folder = folders.length === 1
        ? folders[0]
        : await vscode.window.showWorkspaceFolderPick({
          placeHolder: 'Выберите проект для проверки'
        });

      if (!folder) return;

      // Следующий этап: загрузить требования и выполнить проверки.
      await vscode.window.showInformationMessage(
        `Lab Project Checker работает. Выбран проект: ${folder.name}. Проверки ещё не реализованы.`
      );
    }
  );

  context.subscriptions.push(command);
}

module.exports = { activate };
