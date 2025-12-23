let count=0;
function increment(){
console.log("button clicked");
count+=1;
document.getElementById("count").innerText= count;
console.log(count);
}

function save(){
    console.log("saved");
    let save=count;
    console.log(save);
}