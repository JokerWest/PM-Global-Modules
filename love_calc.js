// Mini Love Calc
var matchRatio = Math.floor(Math.random() * 100) + 1 ;
var name1 = prompt("Enter your name:");
var name2 = prompt("Enter your love interests name:");

if (matchRatio===100) {
    alert("You "+ name1 + " and " + name2 +  "are a perfect match." );
}
if (70 <= matchRatio && matchRatio < 100) {
    alert("You and " + name2 + " are very in love." );
}
if (50 <= matchRatio && matchRatio < 70) {
    alert("Your love score is " + matchRatio);
}
if (40 <= matchRatio && matchRatio < 50) {
    alert("You need to put in some effort,your score is " + matchRatio);
}
if(matchRatio < 40){
    alert(name1 + " and " + name2 +  " are a horrible match at " + matchRatio + " compatible" );
}