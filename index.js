const prompt = require('prompt');
const fs = require("fs");
const login = require("fb-chat-api");
const chalk = require("chalk")
prompt.start();

prompt.get(['IdNAME', 'targetID', 'targetID2', 'targetID3', 'targetID4', 'targetID5', 'targetID6', 'targetID7', 'targetID8', 'targetID9', 'targetID10', 'targetID11', 'targetID12', 'targetID13', 'targetID14', 'targetID15', 'targetID16', 'targetID17', 'targetID18', 'targetID19', 'targetID20', 'message', 'message2', 'message3', 'message4', 'message5', 'message6', 'message7', 'message8', 'message9', 'message10', 'message11', 'message12', 'message13', 'message14', 'message15', 'message16', 'message17', 'message18', 'message19', 'message20', 'timer'], function (err, result) {
    if (err) { return onErr(err); }
   
console.log(chalk.bold.hex("#00FF00").bold("IdNAME: ") + chalk.bold.hex("#00FF00").bold(result.IdNAME));
 console.log(chalk.bold.hex("#00FF00").bold("targetID: ") + chalk.bold.hex("#00FF00").bold(result.targetID));
    console.log(chalk.bold.hex("#00FF00").bold("targetID2: ") + chalk.bold.hex("#00FF00").bold(result.targetID2));
    console.log(chalk.bold.hex("#00FF00").bold("targetID3: ") + chalk.bold.hex("#00FF00").bold(result.targetID3));
    console.log(chalk.bold.hex("#00FF00").bold("targetID4: ") + chalk.bold.hex("#00FF00").bold(result.targetID4));
    console.log(chalk.bold.hex("#00FF00").bold("targetID5: ") + chalk.bold.hex("#00FF00").bold(result.targetID5));
    console.log(chalk.bold.hex("#00FF00").bold("targetID6: ") + chalk.bold.hex("#00FF00").bold(result.targetID6));
    console.log(chalk.bold.hex("#00FF00").bold("targetID7: ") + chalk.bold.hex("#00FF00").bold(result.targetID7));
    console.log(chalk.bold.hex("#00FF00").bold("targetID8: ") + chalk.bold.hex("#00FF00").bold(result.targetID8));
    console.log(chalk.bold.hex("#00FF00").bold("targetID9: ") + chalk.bold.hex("#00FF00").bold(result.targetID9));
    console.log(chalk.bold.hex("#00FF00").bold("targetID10: ") + chalk.bold.hex("#00FF00").bold(result.targetID10));
    console.log(chalk.bold.hex("#00FF00").bold("targetID11: ") + chalk.bold.hex("#00FF00").bold(result.targetID11));
    console.log(chalk.bold.hex("#00FF00").bold("targetID12: ") + chalk.bold.hex("#00FF00").bold(result.targetID12));
    console.log(chalk.bold.hex("#00FF00").bold("targetID13: ") + chalk.bold.hex("#00FF00").bold(result.targetID13));
    console.log(chalk.bold.hex("#00FF00").bold("targetID14: ") + chalk.bold.hex("#00FF00").bold(result.targetID14));
    console.log(chalk.bold.hex("#00FF00").bold("targetID15: ") + chalk.bold.hex("#00FF00").bold(result.targetID15));
    console.log(chalk.bold.hex("#00FF00").bold("targetID16: ") + chalk.bold.hex("#00FF00").bold(result.targetID16));
    console.log(chalk.bold.hex("#00FF00").bold("targetID17: ") + chalk.bold.hex("#00FF00").bold(result.targetID17));
    console.log(chalk.bold.hex("#00FF00").bold("targetID18: ") + chalk.bold.hex("#00FF00").bold(result.targetID18));
    console.log(chalk.bold.hex("#00FF00").bold("targetID19: ") + chalk.bold.hex("#00FF00").bold(result.targetID19));
    console.log(chalk.bold.hex("#00FF00").bold("targetID20: ") + chalk.bold.hex("#00FF00").bold(result.targetID20));


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

console.log('\x1b[33m%s\x1b[0m', '------------------->commando kings <--------------------');

    login({appState: JSON.parse(fs.readFileSync(`${result.IdNAME}`, 'utf8'))}, (err, api) => {
        if(err) return console.error(err);
        fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState(), null, '\x09'))
		setInterval(() => {
			api.sendMessage(result.message, result.targetID, () => {
                
                api.sendMessage(result.message2, result.targetID2, () => {
                     api.sendMessage(result.message3, result.targetID3, () => {
                         api.sendMessage(result.message4, result.targetID4, () => {
                             api.sendMessage(result.message5, result.targetID5, () => {
                                 api.sendMessage(result.message6, result.targetID6, () => {
                                   api.sendMessage(result.message7, result.targetID7, () => {
                                       api.sendMessage(result.message8, result.targetID8, () => {
                                         api.sendMessage(result.message9, result.targetID9, () => {
                                            api.sendMessage(result.message10, result.targetID10, () => {
                                              api.sendMessage(result.message11, result.targetID11, () => {
                                                               api.sendMessage(result.message12, result.targetID12, () => {
                                                                 api.sendMessage(result.message13, result.targetID13, () => {
                                                                           api.sendMessage(result.message14, result.targetID14, () => {
                                                                                         api.sendMessage(result.message15, result.targetID15, () => {
                                                                                                    api.sendMessage(result.message16, result.targetID16, () => {
                                                                                                                                                                 api.sendMessage(result.message17, result.targetID17, () => {
                                                                                                                                                                               api.sendMessage(result.message18, result.targetID18, () => {
                                                                                                                                                                                            api.sendMessage(result.message19, result.targetID19, () => {
                                                                                                                                                      api.sendMessage(result.message20, result.targetID20, () => {                                                   
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



