
let count=0;
function increment(){
console.log("button clicked");
count+=1;
document.getElementById("count").innerText= count;
console.log(count);

}
console.log("save-El")
function save(){
    console.log("saved");
    let save=count;
    console.log(save);
  
    let countStr= count +" - "
    document.getElementById("save-El").textContent += countStr;
document.getElementById("count").innerText=0;
count=0;
}
