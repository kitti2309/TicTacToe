var TicTacToe=[[1,2,2],
               [2,1,1],
               [2,2,1]];
function VerifyTicTacTeo(TicTacToe){
    let check =[];
    TicTacToe.forEach(x => {
     for(let i of x ){
        check.push(i)
     }
    });
    var index = check.indexOf(0);
    
    let x = checkcondition(check,1);
    let o = checkcondition(check,2);
    
    if(x == true && o == false){return "X Win";}
    else if(o == true && x == false){return "O Win";}
    else if(o == true && x == true ){return "Draw";}
    else if(o == false && x == false && index == -1 ){return("Draw")}
    else if(o == false && x == false && index != -1 ){
        return null
    }
  
  
}
function checkcondition(check,val){
  var Win = [{x:0,y:1,z:2},{x:3,y:4,z:5},{x:6,y:7,z:8},
  			{x:0,y:3,z:6},{x:1,y:4,z:7},{x:2,y:5,z:8},
            {x:0,y:4,z:8},{x:2,y:4,z:6}];
              var  res = false; 
       for(var i of Win){
       if(check[i.x] == val&&check[i.y]==val&&check[i.z]==val)
         {
          res = true; 
         }
           
       } 
       return res
}

 console.log(VerifyTicTacTeo(TicTacToe));   