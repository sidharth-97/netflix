function validate() {
    var mail=document.getElementById("text1").value;

    var regx=/^([a-zA-Z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(regx.test(mail)){
        alert("valid e mail");
        return true;
    }
    else{
        alert("enter a valid e mail");
        return false;
    }
}
function scrollToTop(){
    window.scrollTo(0,0)
}

function signIn(){
    alert("Try again later")
}