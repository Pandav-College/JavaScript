//Create Snake , Water and Gun Game in Javascript
// The Game should ask you to enter S, W or G. The computer should be able to
// randomly generate S,W or G and declare winner using alert. 

//Use alert prompt and confirm wherever neccessary
alert(`Welcome to Snake,Water or Gun Game\n`+
    `Enter S for Snake\n W for Water\nG for Gun`);

let user = prompt(`Please Enter Your Choice S,W or G`);
let cpuInput = Math.floor(Math.random() * 3);
let cpu = [`S`,`W`,`G`][cpuInput];
// console.log(cpuInput);

const match = (user,cpu) =>{
    if(user === cpu){
        return `Noboby Win. Match Tie`;
    }
    else if (cpu === `S` && user === `W`) {
        return `cpu`;
    }
    else if (cpu === `S` && user === `G`) {
        return `user`;
    }
    else if (cpu === `W` && user === `S`) {
        return `user`;
    }
    else if (cpu === `W` && user === `G`) {
        return `cpu`;
    }
    else if (cpu === `G` && user === `S`) {
        return `cpu`;
    }
    else if (cpu === `G` && user === `W`) {
        return `user`;
    }
}

let winner = match(user,cpu);
//log, alert , Display it in Html page
document.write(`CPU : ${cpu}<br> USER : ${user}<br>The Winner is : ${winner.toUpperCase()}`);

