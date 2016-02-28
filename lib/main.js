
function compareNumber(answer,userInput){
      var ansArr  = answer.toString().split("");
      var userInputArr = userInput.toString().split("");
      var result;
      var A_num=0;
      var B_num=0;
      var locationRight = false;
      for(var i=0;i<userInputArr.length;i++){
            for(var j=0;j<ansArr.length;j++){
                  if(userInputArr[i]==ansArr[j]){
                      if(i==j){
                          A_num++;
                      }else{
                          B_num++;
                      }
                  }
            }
      }
      result = A_num+'A'+B_num+'B';
      return result;
}

function answerGenerator(){
      var answer=0;
      var numRanArr = new Array();
      for(var i=4;i>0;i--){
          var numRandom;
          while(true){
                numRandom = Math.floor(Math.random()*10);
                if(i==4&&numRandom==0){
                   continue;
                }
                    var continue_flag = false;

                    for(var j=0;j<numRanArr.length;j++){
                        if(numRandom==numRanArr[j]){
                            continue_flag = true;
                            break;
                        }
                    }
                    if(continue_flag==true){
                         continue;
                    }else if(continue_flag==false){
                         break;
                    }
              }
           numRanArr.push(numRandom);
            var cardi =1;
            for(var j=i-1;j>0;j--){
                cardi *= 10;
            }
            answer+=numRandom*cardi;
      }
      return answer;
}

function guess(userInput){
       var answer = this.answerGenerator();
      var result = this.compareNumber(answer,userInput);
       console.log(result);
}

module.exports = {compareNumber,answerGenerator,guess};
