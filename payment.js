let text1=document.getElementById('text1');
let text2=document.getElementById('text2');
let text3=document.getElementById('text3');
let confirm=document.getElementById('confirm');
let refresh=document.getElementById('ref')
const mail = ()=>{
        text1.innerHTML="Thanks,Now Send Screenshot On The Number Above";
        text2.innerHTML="Have A Healthy Day"
};
const refreshing= ()=>{
        text1.innerHTML="";
        text2.innerHTML="";
        text3.innerHTML="";
}
confirm.addEventListener('click',mail);
refresh.addEventListener('click',refreshing);
