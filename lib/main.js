function main(){
    　

}

function compareNumber(answer,userInput){
      var ansArr  = changeToArr(answer);
      var userInputArr = changeToArr(userInput);
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

function changeToArr(num){
      var numArr = new Array();
      var temp;
      var cardi;
      for(var i=3;i>0;i--){
            var cardi=1;
            for(var j=i;j>0;j--){
                cardi *=10;
            }
            temp = Math.floor(num/cardi);
            numArr.push(temp);
            num-=temp*cardi;
      }
      numArr.push(num);
      return numArr;

}
module.exports = {main,changeToArr,compareNumber};
