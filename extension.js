const vscode = require('vscode');

function activate(context) {
  const command = vscode.commands.registerCommand(
    'daylightProfiles.start',
    async () => {
      await vscode.window.showInformationMessage(
        'Daylight Profiles запущен. Переключение оформления пока не реализовано.'
      );
    }
  );

  context.subscriptions.push(command);
}

module.exports = { activate };
