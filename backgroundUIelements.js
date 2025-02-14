//board prescense 
let chaseCounter = 0;
let playerCounter =2;
let actionlist = [];
let action_counter =0;

function MovePlayer()
{
    action_counter += 1;
    playerCounter += 1;
    actionlist[action_counter] ="player count";
    Display();
}

function MoveChaser()
{
    action_counter += 1;
    chaseCounter += 1;
    actionlist[action_counter] ="move chaser"; 
    Display();
}

function undo()
{
    
    if(actionlist[action_counter] == "move chaser" && chaseCounter != 0)
    {
        chaseCounter -= 1;
        // loop through recreating actionlist
        let newCount = [];
        for(let i =0; i < action_counter;i++ ){
            newCount[i] = actionlist[i];
        }
        actionlist = newCount;
        action_counter -= 1;
        document.getElementById("3").innerText = action_counter.toString();
    }
    else if(playerCounter != 0)
    {
        
        playerCounter -= 1;
        // loop through recreating actionlist
        let newCount = [];
        for(let i =0; i < action_counter;i++ ){
            newCount[i] = actionlist[i];
        }
        actionlist = newCount;
        action_counter -= 1;
    }
    Display();
}

function Display(){
    let ir = "";
    for(let i =1;i<=7;i++)
    {
        const change = document.getElementById(i.toString());
        ir += i.toString();
        if(i < chaseCounter)
        {       
            change.src ="chase base.png";    
        }
        else if (i == chaseCounter)
        {
            change.src ="chase position.png";
        }
        else if(i== playerCounter)
        {
            change.src = "player position.png";
        }
        else if(i > playerCounter)
        {
            change.src ="normal unknown.png";
        }
        else{
            change.src ="normal behined.png";
        }

    }

}

Display();
