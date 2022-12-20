const prompt = require('prompt');
const fs = require("fs");
const login = require("fca-unofficial");
const chalk = require("chalk")
prompt.start();

prompt.get(['targetID', 'message', 'message2', 'message3', 'message4', 'message5', 'message6', 'message7', 'message8', 'message9', 'message10', 'timer'], function (err, result) {
    if (err) { return onErr(err); }
    console.log(chalk.bold.hex("#00FF00").bold("targetID: ") + chalk.bold.hex("#00FF00").bold(result.targetID));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message: ") + chalk.bold.hex("#00FF00").bold(result.message));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message2: ") + chalk.bold.hex("#00FF00").bold(result.message2));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message3: ") + chalk.bold.hex("#00FF00").bold(result.message3));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message4: ") + chalk.bold.hex("#00FF00").bold(result.message4));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message5: ") + chalk.bold.hex("#00FF00").bold(result.message5));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message6: ") + chalk.bold.hex("#00FF00").bold(result.message6));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message7: ") + chalk.bold.hex("#00FF00").bold(result.message7));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message8: ") + chalk.bold.hex("#00FF00").bold(result.message8));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message9: ") + chalk.bold.hex("#00FF00").bold(result.message9));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message10: ") + chalk.bold.hex("#00FF00").bold(result.message10));

    console.log(chalk.bold.hex("#00FF00").bold("Send per ") + chalk.bold.hex("#00FF00").bold(`${result.timer} second`));
    login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
        if(err) return console.error(err);
        fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState(), null, '\x09'))
		setInterval(() => {
			api.sendMessage(result.message, result.targetID, () => {
                console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message}`));
                api.sendMessage(result.message2, result.targetID, () => {
                    console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message2}`));
                    api.sendMessage(result.message3, result.targetID, () => {
                        console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message3}`));
                        api.sendMessage(result.message4, result.targetID, () => {
                            console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message4}`));
                            api.sendMessage(result.message5, result.targetID, () => {
                                console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message5}`));
                               api.sendMessage(result.message6, result.targetID, () => {
                                  console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message6}`));
                                  api.sendMessage(result.message7, result.targetID, () => {
                                      console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message7}`));
                                    api.sendMessage(result.message8, result.targetID, () => {
                                        console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message8}`));
                                       api.sendMessage(result.message9, result.targetID, () => {
                                           console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message9}`));
                                          api.sendMessage(result.message10, result.targetID, () => {
                                             console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message10}`));
                            })
                        })
                    })
                })
            })
        })
    })
 })
      })
   })
                
		}, `${result.timer}000`);
	});
});

function onErr(err) {
    console.log(err);
    return 1;
}
process.on('unhandledRejection', (err, p) => {});
