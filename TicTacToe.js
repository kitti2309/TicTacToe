var TicTacToe=[[1,2,1],
               [2,2,1],
               [2,1,1]];
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
   if(check[0]==val&& check[1] == val&&check[2] == val 
    ||check[3]==val&& check[4]== val&&check[5] == val
    ||check[6]==val&& check[7] == val&&check[8] == val
    ||check[0]==val&& check[3] == val&&check[6] == val
    ||check[1]==val&& check[4] == val&&check[7] == val
    ||check[2]==val&& check[5] == val&&check[8] == val
    ||check[0]==val&& check[4] == val&&check[8] == val
    ||check[2]==val&& check[4] == val&&check[6] == val){
      return true;
  }else{
       return false;
  }
    

}
 console.log(VerifyTicTacTeo(TicTacToe));    