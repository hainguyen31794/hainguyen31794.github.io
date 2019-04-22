
function list_rand(n){
    var limg = [];
    for(var i = 1; i < n+1; i++){
        limg.push(i);
    }
    limg = limg.concat(limg);
    var temp;
    for(var i = 0; i < 2*n; i++){
        let rand_choice = parseInt(Math.random()*2*n);
        temp = limg[i];
        limg[i] = limg[rand_choice];
        limg[rand_choice] = temp;
        }
    return limg;
}
var arr = list_rand(15);
var td = "";
var tr = 0;
for(var i= 0; i < 30; i++ ){
    if(tr === 0){
        td += "<tr> <td><img src='image/bg1.jpg'></td>";  
        tr+=1;
    }
    else if(tr === 9){
        td +="<td><img src='image/bg1.jpg'></td></tr>";
        tr = 0;
    }
    else{
        td+= "<td><img src='image/bg1.jpg'></td>";
        tr+=1;
    }
}

var table = document.getElementById("table");
table.innerHTML = td;


var table_td = document.querySelectorAll("td > img");


var arrevent = [];

function playGame(event){
    arrevent.push(event);
    var status1 = (event.path[2].rowIndex)*10+event.path[1].cellIndex ;
    var status0 = (arrevent[0].path[2].rowIndex)*10+arrevent[0].path[1].cellIndex ;
    event.target.src = 'image/'+ arr[status1] +'.jpg';
    window.setTimeout(function(){
        event.target.src = 'image/bg1.jpg';
    }, 1000);
    if(arrevent.length ==2){
        console.log(arr[status0],arr[status1]);
        if(arr[status0]==arr[status1] && status0 != status1){
            arrevent[0].target.hidden = true;
            arrevent[1].target.hidden = true;
        }
        arrevent = [];
    }


    
}
function check(){

}

for (let i of table_td){
    i.addEventListener('click', playGame)
}

