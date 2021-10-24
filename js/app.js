function openNav() {
    document.getElementById("mySidenav").style.right = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.right = "-300px";
}

window.onscroll = function() {myFunction()};


function myFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").classList.add ("test");
} else {
    document.getElementById("myP").classList.remove ("test");
}
}

const counters = document.querySelectorAll('.counter');
const  speed = 300;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;
        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else{
            count.innerText=target;
        }
    }
    updateCount();
})




