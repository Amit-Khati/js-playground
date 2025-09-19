// ----------------Project4:Choose Your Own Adventure---------------
const prompt=require("prompt-sync")();
const answer=prompt("Would you like to play (y/n)?");

if (answer.toLowerCase()==="y"){
    const answer2=prompt("Would you like to go left or right (left/right)?");
    if (answer2.toLowerCase()==="left"){
        console.log("Oops! you went left and fall of a bridge! You lost!")
    }else if(answer2.toLowerCase()==="right"){
        console.log("Nice you went right and approached a bridge...")
        const answer3=prompt("Would you like to cross the bridge, or turn around and find another way (cross/turn)?")
        if (answer3.toLowerCase()==="cross"){
            console.log("You crossed the bridge and reached the end of the game!")
        }else if(answer3.toLowerCase()==="turn"){
            console.log("You turn back and trip on a log and hurt your leg. You lose!")
        }else{
            console.log("You jumped off the bridge and get swept in the river.")
        }
    }else{
        console.log("Shit you went somewhere else where an unknown creature ate you.")
    }
}else{
    console.log("That's too bad.")
}
