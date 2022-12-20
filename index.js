const prompt = require('prompt');
const fs = require("fs");
const login = require("fca-unofficial");
const chalk = require("chalk")
prompt.start();

prompt.get(['targetID', 'message', 'message2', 'message3', 'message4', 'message5', 'message6', 'message7', 'message8', 'message9', 'message10', 'message11', 'message12', 'message13', 'message14', 'message15', 'message16', 'message17', 'message18', 'message19', 'message20', 'timer'], function (err, result) {
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
    console.log(chalk.bold.hex("#00FF00").bold("Send to message11: ") + chalk.bold.hex("#00FF00").bold(result.message11));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message12: ") + chalk.bold.hex("#00FF00").bold(result.message12));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message13: ") + chalk.bold.hex("#00FF00").bold(result.message13));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message14: ") + chalk.bold.hex("#00FF00").bold(result.message14));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message15: ") + chalk.bold.hex("#00FF00").bold(result.message15));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message16: ") + chalk.bold.hex("#00FF00").bold(result.message16));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message17: ") + chalk.bold.hex("#00FF00").bold(result.message17));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message18: ") + chalk.bold.hex("#00FF00").bold(result.message18));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message19: ") + chalk.bold.hex("#00FF00").bold(result.message19));
    console.log(chalk.bold.hex("#00FF00").bold("Send to message20: ") + chalk.bold.hex("#00FF00").bold(result.message20));


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
                                              api.sendMessage(result.message11, result.targetID, () => {
                                                 console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message11}`));
                                                   api.sendMessage(result.message12, result.targetID, () => {
                                                      console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message12}`));
                                                        api.sendMessage(result.message13, result.targetID, () => {
                                                           console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message13}`));
                                                              api.sendMessage(result.message14, result.targetID, () => {
                                                                  console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message14}`));
                                                                     api.sendMessage(result.message15, result.targetID, () => {
                                                                        console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message15}`));
                                                                           api.sendMessage(result.message16, result.targetID, () => {
                                                                               console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message16}`));
                                                                                  api.sendMessage(result.message17, result.targetID, () => {
                                                                                      console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message17}`));
                                                                                         api.sendMessage(result.message18, result.targetID, () => {
                                                                                             console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message18}`));
                                                                                                api.sendMessage(result.message19, result.targetID, () => {
                                                                                                    console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message19}`));
                                                                                                      api.sendMessage(result.message20, result.targetID, () => {
                                                                                                          console.log(chalk.bold.hex("#00FF00").bold(`Sent ${result.message20}`));
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
