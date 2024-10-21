document.querySelectorAll(".btn").forEach(function(item){
    item.onclick=function(){
        document.querySelector("#demo").style.color=item.dataset.color;
    }
})