
    let jk= document.getElementById("in");
    let lowercase='abcdefghijklmnopqrstuvwxyz';
    let uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = '0123456789';
    let symbol='!@#$%&*+?';
    let total=lowercase+uppercase+number+symbol;
    const num=10;
    let i=0;
    let password='';
    function gg(){
        password='';
        i=0;
        while(num>i){
            password+=total[Math.floor(Math.random()*total.length)];
            i=i+1;
    }

    }

function gen_password(){
    gg();
    jk.value=password;

}
function copy(){
    jk.select();
    document.execCommand("copy");
}
