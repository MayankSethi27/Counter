// var container=document.getElementById('btn');
// var current=document.getElementsByClassName('current');
// var next=document.getElementsByClassName('next');
// container.addEventListener('click',function(){
	

// 	var interval=setInterval(animates,1000);


// });
// function animates(){
// 	next.classList.add('animate');
// 	 setTimeout(function() {
// 	 	next.classList.remove('animate');
// 	 }, 500);
// }




var countInterval;

function startCounter(){
    var number=parseInt(document.getElementById("number").value);
    if(isNaN(number)){
        alert("Number is not listed");
        clearInterval(countInterval);
        return;
    }
    if(number<0 || number>9 ){
        alert("number is bounded not find in a range");
        clearInterval(countInterval);
        return;
    }
    var curr = document.querySelector(".counter .current");
    var next = document.querySelector(".counter .next");
    var count = 0;

        resetNumbers(curr,next);
        clearInterval(countInterval);


    countInterval=setInterval(function(){
        if(count==number){
        clearInterval(countInterval);
        alert("count number is get complete");
        return;
        }
        count++;
        increase(curr,next);
    },1000);
}
    function resetNumbers(curr,next){
                curr=0;
                next=1;
    }
    function increase(curr,next){
        next.classList.add("animate");
        setTimeout(function(){
            curr.innerText=next.innerText;
            next.classList.remove("animate");
            next.innerText=parseInt(next.innerText)+1;
        },500);
    }

