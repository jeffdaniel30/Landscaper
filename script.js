console.log('attached')
dollars = 0
cmds = ["teeth", 'quit']

for (let i =0 ; i<100; i++) {
    var userCmd = prompt("Comamands: " + cmds.toString())
    console.log(userCmd)

    if (userCmd == "teeth"){
        dollars +=1
        console.log(`you chomped for $1`)
    } else if (userCmd == 'quit'){
        console.log('quitting!')
        break;
    } else if (userCmd == "buy-scissors"){
        dollars -=5 
        console.log('you bought scissors for -5$')
        cmds.push('scissor')
    } else if (userCmd == "scissor"){
        dollars +=5 
        console.log('you scissored for +5$')
    } else if (userCmd == "buy-push-lawnmower"){
        dollars -=25 
        console.log('you bought push lawnmower for -25$')
        cmds.push('push-lawnmower')
    } else if (userCmd == "push-lawnmower"){
        dollars +=25 
        console.log('you mowed for +$25')
    } else if (userCmd == "buy-fancy-lawnmower"){
        dollars -=250 
        console.log('you bought a fancy lawnmower for -250$')
        cmds.push('fancy-lawnmower')
    } else if (userCmd == "fancy-lawnmower"){
        dollars +=250 
        console.log('you bought mowed for +$250')
        // cmds.push('fancy-lawnmower')
    } else if (userCmd == "buy-team"){
        dollars -=500 
        console.log('you bought a team for $-500')
        cmds.push('team')
    } else if (userCmd == "team"){
        dollars +=500 
        console.log('your team mowed for +500$')
    } else {
            console.log("invalid command try again")
    } if (dollars >= 5 && cmds.indexOf("buy-scissors") < 0) {
        cmds.push("buy-scissors");
    } if ((dollars >= 25) && (cmds.indexOf("buy-push-lawnmower") < 0)) {
    cmds.push("buy-push-lawnmower")
    } if ((dollars >= 250) && (cmds.indexOf("buy-fancy-lawnmower") < 0)) {
        cmds.push("buy-fancy-lawnmower")
    } if ((dollars >= 500) && (cmds.indexOf("buy-team") < 0)) {
        cmds.push("buy-team")
    } if ((dollars >= 1000) && (cmds.indexOf("team") >= 0 )){
        prompt('you win go away')
    }

    console.log(`you have $${dollars}`)


}