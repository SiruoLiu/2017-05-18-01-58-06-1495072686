module.exports = function main(scoreStr) {
  // Write your cade here
  var scores=scoreStr.split("");
  var arrLength=scores.length;
  var sum=0;
  for(var i=0;i<arrLength;i++){    
      sum+=parseInt(scores[i])       
      }
  return 0;
};
