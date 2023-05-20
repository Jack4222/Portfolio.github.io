var fade = document.getElementsByClassName("")

var scr =[1,0,0]
function foo(perms){
    console.log("works")
    if(perms == "about"){

        document.getElementById('abo').style.display = "flex";document.getElementById('pro').style.display = "none";document.getElementById('con').style.display = "none";
    }
    else if(perms == "projects"){
        document.getElementById('abo').style.display = "none";document.getElementById('pro').style.display = "grid";document.getElementById('con').style.display = "none";
    }
    
}

function enter(bop){
    document.getElementById('t'+bop).style.display= "flex"
}

function leave(pob){
    document.getElementById('t'+pob).style.display= "none"
}