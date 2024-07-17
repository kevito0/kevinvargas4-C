let count = 0;

function cc(card) {
if(card >= 2 && card <= 6){
    count++;
}else if(card === 10 || card === "J" || card === "Q" || card === "K" || card === "A"){
    count--;
}else if(count > 0){
    return count + " Bet";
}else if(count <= 0){
    return count + " Hold";
}

return "Change Me";

}
cc(2); cc(3); cc(4); cc(5); cc(6);