alert(`Welcome To Snake , Water and Gun Game\n`+
`Choose S for Snake \nChoose W for Water \nChoose G for Gun `);

let user = prompt(`Enter S,W,or G`);
let cpuInput = Math.floor(Math.random() * 3);
let cpu = [`S`,`W`,`G`][cpuInput];

const match = (cpu , user) =>{
    if(cpu === user){
        return `Nobody WIn the match . This is Tie`;
    }
    else if (cpu === `S` && user === `W`) {
        return `cpu`;
    }
    else if (cpu === `S` && user === `G`) {
        return `user`;
    }
    else if (cpu === `G` && user === `W`) {
        return `user`;
    }
    else if (cpu === `G` && user === `S`) {
        return `cpu`;
    }
    else if (cpu === `W` && user === `G`) {
        return `cpu`;
    }
    else if (cpu === `W` && user === `S`) {
        return `user`;
    }
}
let result = match(cpu,user);
document.write(`CPU Choose : ${cpu} <br> USER Choose : ${user} <br> The Winner is ${result.toUpperCase()}`);