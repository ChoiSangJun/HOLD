const days = moment().format('YYYY.MM.DD hh:mm');

$("#login").hide();
$("#twiter_login").hide();
$("#google_login").hide();
$("#face_login").hide();
$("#kakao_login").hide();
$("#naver_login").hide();

$("#naver_load").hide();
$("#kakao_load").hide();
$("#face_load").hide();
$("#google_load").hide();
$("#twiter_load").hide();
$("#naver_cancle").hide();
$("#naver_m").hide();
$("#kakao_cancle").hide();
$("#kakao_m").hide();
$("#face_cancle").hide();
$("#face_m").hide();
$("#google_cancle").hide();
$("#google_m").hide();
$("#twiter_cancle").hide();
$("#twiter_m").hide();


function loginMon(){
    $("#login").show();
    $("#sub").hide();
    $("#table").hide();
}

function loginCancle(){
    $("#login").hide();
    $("#sub").show();
    $("#table").show();
}

function loginNaver(){
    $("#login").hide();
    $("#main_turn").hide();
    $("#naver_login").show();
    $("#sub_turn").hide();
}

function loginKakao(){
    $("#login").hide();
    $("#main_turn").hide();
    $("#kakao_login").show();
    $("#sub_turn").hide();
}

function loginFace(){
    $("#login").hide();
    $("#main_turn").hide();
    $("#face_login").show();
    $("#sub_turn").hide();
}

function loginGoogle(){
    $("#login").hide();
    $("#main_turn").hide();
    $("#google_login").show();
    $("#sub_turn").hide();
}

function loginTwiter(){
    $("#login").hide();
    $("#main_turn").hide();
    $("#twiter_login").show()
    $("#sub_turn").hide();
}

function NaverCan(){
    $("#naver_load").hide();
    $("#naver_cancle").show();
}
function NAVERCHAN(){
    $("#naver_load").hide();
    $("#naver_m").show();
}

function KaCan(){
    $("#kakao_load").hide();
    $("#kakao_cancle").show();
}
function KaCHAN(){
    $("#kakao_load").hide();
    $("#kakao_m").show();
}

function FaCan(){
    $("#face_load").hide();
    $("#face_cancle").show();
}
function FaCHAN(){
    $("#face_load").hide();
    $("#face_m").show();
}

function GoCan(){
    $("#google_load").hide();
    $("#google_cancle").show();
}
function GoCHAN(){
    $("#google_load").hide();
    $("#google_m").show();
}

function TwCan(){
    $("#twiter_load").hide();
    $("#twiter_cancle").show();
}
function TwCHAN(){
    $("#twiter_load").hide();
    $("#twiter_m").show();
}

function LogOut(){
    $("#naver_load").hide();
    $("#naver_cancle").hide();
    $("#naver_m").hide();

    $("#kakao_load").hide();
    $("#kakao_cancle").hide();
    $("#kakao_m").hide();

    $("#face_load").hide();
    $("#face_cancle").hide();
    $("#face_m").hide();

    $("#google_load").hide();
    $("#google_cancle").hide();
    $("#google_m").hide();

    $("#twiter_load").hide();
    $("#twiter_cancle").hide();
    $("#twiter_m").hide();

    $("#table").show();
}

function LogOut1(){
    $("#naver_load").hide();
    $("#naver_cancle").hide();
    $("#naver_m").hide();

    $("#kakao_load").hide();
    $("#kakao_cancle").hide();
    $("#kakao_m").hide();

    $("#face_load").hide();
    $("#face_cancle").hide();
    $("#face_m").hide();

    $("#google_load").hide();
    $("#google_cancle").hide();
    $("#google_m").hide();

    $("#twiter_load").hide();
    $("#twiter_cancle").hide();
    $("#twiter_m").hide();

    $("#table").show();
}

function LogOut2(){
    $("#naver_load").hide();
    $("#naver_cancle").hide();
    $("#naver_m").hide();

    $("#kakao_load").hide();
    $("#kakao_cancle").hide();
    $("#kakao_m").hide();

    $("#face_load").hide();
    $("#face_cancle").hide();
    $("#face_m").hide();

    $("#google_load").hide();
    $("#google_cancle").hide();
    $("#google_m").hide();

    $("#twiter_load").hide();
    $("#twiter_cancle").hide();
    $("#twiter_m").hide();

    $("#table").show();
}

function LogOut3(){
    $("#naver_load").hide();
    $("#naver_cancle").hide();
    $("#naver_m").hide();

    $("#kakao_load").hide();
    $("#kakao_cancle").hide();
    $("#kakao_m").hide();

    $("#face_load").hide();
    $("#face_cancle").hide();
    $("#face_m").hide();

    $("#google_load").hide();
    $("#google_cancle").hide();
    $("#google_m").hide();

    $("#twiter_load").hide();
    $("#twiter_cancle").hide();
    $("#twiter_m").hide();

    $("#table").show();
}

function LogOut4(){
    $("#naver_load").hide();
    $("#naver_cancle").hide();
    $("#naver_m").hide();

    $("#kakao_load").hide();
    $("#kakao_cancle").hide();
    $("#kakao_m").hide();

    $("#face_load").hide();
    $("#face_cancle").hide();
    $("#face_m").hide();

    $("#google_load").hide();
    $("#google_cancle").hide();
    $("#google_m").hide();

    $("#twiter_load").hide();
    $("#twiter_cancle").hide();
    $("#twiter_m").hide();

    $("#table").show();
}

/*function dateToString(date) {
    const dateString = date.toISOString();
    const dateToString = dateString.substring(0, 10) + " " + dateString.substring(11, 19);
    return dateToString;
}*/

document.getElementById('naver_submit_button').onclick = function() {
    var ID = document.getElementById('id_').value;
    var pass = document.getElementById('pass_').value;
    if (ID === "asd1234" && pass === "1234") {
        $("#naver_login").hide();
        $("#main_turn").show();
        $("#sub").show();
        $("#naver_load").show();
        $("#sub_turn").show();
    }
    else {
        alert("로그인 실패!");
    }
}


document.getElementById('kakao_submit_button').onclick = function() {
    var ID1 = document.getElementById('id_1').value;
    var pass1 = document.getElementById('pass_1').value;
    if (ID1 === "ghost" && pass1 === "1234") {
        $("#kakao_login").hide();
        $("#main_turn").show();
        $("#sub").show();
        $("#kakao_load").show();
        $("#sub_turn").show();
    }
    else {
        alert("로그인 실패!");
    }
}

document.getElementById('face_submit_button').onclick = function() {
    var ID2 = document.getElementById('id_2').value;
    var pass2 = document.getElementById('pass_2').value;
    if (ID2 === "host" && pass2 === "1234") {
        $("#face_login").hide();
        $("#main_turn").show();
        $("#sub").show();
        $("#face_load").show();
        $("#sub_turn").show();
    }
    else {
        alert("로그인 실패!");
    }
}

document.getElementById('google_submit_button').onclick = function() {
    var ID3 = document.getElementById('id_3').value;
    var pass3 = document.getElementById('pass_3').value;
    if (ID3 === "load" && pass3 === "1234") {
        $("#google_login").hide();
        $("#main_turn").show();
        $("#sub").show();
        $("#google_load").show();
        $("#sub_turn").show();
    }
    else {
        alert("로그인 실패!");
    }
}

document.getElementById('twiter_submit_button').onclick = function() {
    var ID4 = document.getElementById('id_4').value;
    var pass4 = document.getElementById('pass_4').value;
    if (ID4 === "you" && pass4 === "1234") {
        $("#twiter_login").hide();
        $("#main_turn").show();
        $("#sub").show();
        $("#twiter_load").show();
        $("#sub_turn").show();
    }
    else {
        alert("로그인 실패!");
    }
}






var o = 0;
function add() {
    o++;
    console.log(o);
}

var y=0;
function add2() {
    y++;
    console.log(y);
}

var x=0;
function add3() {
    x++;
    console.log(x);
}

var z=0;
function add4() {
    z++;
    console.log(z);
}

var a=0;
function add5() {
    a++;
    console.log(a);
}


function NAVERDelet(){

    const sel2 = $("#sel2").val()
    $(`#naver_count${sel2}`).remove();
    $("#naver_cancle").hide();
    $("#naver_load").show();

}





function gogo(){
   
    add();
        const numDiv = document.createElement("option")
        numDiv.innerHTML = `${o}`
        numDiv.id = `d-${o}`
        $('#sel').append(numDiv);

    if(o>4){
        alert("도배는 불가능합니다!")
    }
    else{
    const dezi = document.createElement("div")
    dezi.id=`naver_count${o}`
    $("#sub").append(dezi);

    const dodo =document.createElement("div")
    dodo.id="naver_name"
    dezi.append(dodo);
    
    const JOJO = document.createElement("p")
    JOJO.id="naver_CO"
    JOJO.textContent = "naver닉넴";
    dodo.append(JOJO);
    
    
    const Fofo =document.createElement("div")
    Fofo.id="date"
    Fofo.innerText = days
    dezi.append(Fofo);
    /*const Fofo =document.createElement("div")
    const dateString = dateToString(new Date());
    Fofo.innerText = dateString
    dezi.append(Fofo);
*/
    
    /*const ZOZO = document.createElement("p")
    ZOZO.id=`time_j`
    ZOZO.textContent=today.getFullYear()+"."
    +eval(today.getMonth()+1)+"."
    +today.getDate()+" "+today.getHours()+":"
    +today.getMinutes()+":"+today.getSeconds();
    Fofo.append(ZOZO)*/
    
   
    const RORO =document.createElement("div")
    RORO.id=`naver_p${o}`
    dezi.append(RORO);


    const text = $("#texter").val();
    const p = document.createElement("p")
    p.id = `cs-${o}`
    p.textContent = text;
    RORO.append(p);
    }
}
function NCHANGE(){

    
    const sel2 = $("#sel2").val()
    $(`#cs-${sel2}`).remove();
    const text2 = $("#texter2").val();
    const c = document.createElement("p")
    c.id = `cs-${sel2}`
    c.textContent = text2;
    $(`#naver_p${sel2}`).append(c);
    $("#naver_load").show();
    $("#naver_m").hide();
}

function KaDelet(){

    const sel3 = $("#sel3").val()
    $(`#kakao_count${sel3}`).remove();
    $("#kakao_cancle").hide();
    $("#kakao_load").show();

}

function IOIO(){

    add2();
    const numDiv = document.createElement("option")
        numDiv.innerHTML = `${y}`
        numDiv.id = `d-${y}`
        $('#sel3').append(numDiv);

    if(y>4){
        alert("도배는 불가능합니다!")
    }
    else{
    const dezie = document.createElement("div")
    dezie.id=`kakao_count${y}`
    $("#sub").append(dezie);

    const dodod =document.createElement("div")
    dodod.id="kakao_name"
    dezie.append(dodod);
    
    const JOJOj = document.createElement("p")
    JOJOj.id="kakao_CO"
    JOJOj.textContent = "kakao닉넴";
    dodod.append(JOJOj);
    
    
    const Fofo =document.createElement("div")
    Fofo.id="date1"
    Fofo.innerText = days
    dezie.append(Fofo);    
   
    const ROROr =document.createElement("div")
    ROROr.id=`kakao_p${y}`
    dezie.append(ROROr);


    const text = $("#texter3").val();
    const p = document.createElement("p")
    p.id = `cs-${y}`
    p.textContent = text;
    ROROr.append(p);
    }
}
function KCHANGE(){

    const sel4 = $("#sel4").val()
    $(`#cs-${sel4}`).remove();
    const text4 = $("#texter4").val();
    const c = document.createElement("p")
    c.id = `cs-${sel4}`
    c.textContent = text4;
    $(`#kakao_p${sel4}`).append(c);
    $("#kakao_load").show();
    $("#kakao_m").hide();
}

function FaDelet(){

    const sel3 = $("#sel5").val()
    $(`#face_count${sel3}`).remove();
    $("#face_cancle").hide();
    $("#face_load").show();

}

function IOIOI(){

    add3();
    const numDiv = document.createElement("option")
        numDiv.innerHTML = `${x}`
        numDiv.id = `d-${x}`
        $('#sel5').append(numDiv);

    if(x>4){
        alert("도배는 불가능합니다!")
    }
    else{
    const dezie = document.createElement("div")
    dezie.id=`face_count${x}`
    $("#sub").append(dezie);

    const dodod =document.createElement("div")
    dodod.id="face_name"
    dezie.append(dodod);
    
    const JOJOj = document.createElement("p")
    JOJOj.id="face_CO"
    JOJOj.textContent = "face닉넴";
    dodod.append(JOJOj);
    
    
    const Fofo =document.createElement("div")
    Fofo.id="date2"
    Fofo.innerText = days
    dezie.append(Fofo);    
   
    const ROROr =document.createElement("div")
    ROROr.id=`face_p${x}`
    dezie.append(ROROr);


    const text = $("#texter5").val();
    const p = document.createElement("p")
    p.id = `cs-${x}`
    p.textContent = text;
    ROROr.append(p);
    }
}
function FCHANGE(){

    const sel6 = $("#sel6").val()
    $(`#cs-${sel6}`).remove();
    const text6 = $("#texter6").val();
    const c = document.createElement("p")
    c.id = `cs-${sel6}`
    c.textContent = text6;
    $(`#face_p${sel6}`).append(c);
    $("#face_load").show();
    $("#face_m").hide();
}

function GoDelet(){

    const sel7 = $("#sel7").val()
    $(`#google_count${sel7}`).remove();
    $("#google_cancle").hide();
    $("#google_load").show();

}

function IOIOIO(){

    add4();
    const numDiv = document.createElement("option")
        numDiv.innerHTML = `${z}`
        numDiv.id = `d-${z}`
        $('#sel7').append(numDiv);

    if(z>4){
        alert("도배는 불가능합니다!")
    }
    else{
    const dezie = document.createElement("div")
    dezie.id=`google_count${z}`
    $("#sub").append(dezie);

    const dodod =document.createElement("div")
    dodod.id="google_name"
    dezie.append(dodod);
    
    const JOJOj = document.createElement("p")
    JOJOj.id="google_CO"
    JOJOj.textContent = "google닉넴";
    dodod.append(JOJOj);
    
    
    const Fofo =document.createElement("div")
    Fofo.id="date3"
    Fofo.innerText = days
    dezie.append(Fofo);    
   
    const ROROr =document.createElement("div")
    ROROr.id=`google_p${z}`
    dezie.append(ROROr);


    const text = $("#texter7").val();
    const p = document.createElement("p")
    p.id = `cs-${z}`
    p.textContent = text;
    ROROr.append(p);
    }
}
function GCHANGE(){

    const sel8 = $("#sel8").val()
    $(`#cs-${sel8}`).remove();
    const text8 = $("#texter8").val();
    const c = document.createElement("p")
    c.id = `cs-${sel8}`
    c.textContent = text8;
    $(`#google_p${sel8}`).append(c);
    $("#google_load").show();
    $("#google_m").hide();
}

function TwDelet(){

    const sel9 = $("#sel9").val()
    $(`#twiter_count${sel9}`).remove();
    $("#twiter_cancle").hide();
    $("#twiter_load").show();

}

function IOIOIOI(){

    add5();
    const numDiv = document.createElement("option")
        numDiv.innerHTML = `${a}`
        numDiv.id = `d-${a}`
        $('#sel9').append(numDiv);

    if(a>4){
        alert("도배는 불가능합니다!")
    }
    else{
    const dezie = document.createElement("div")
    dezie.id=`twiter_count${a}`
    $("#sub").append(dezie);

    const dodod =document.createElement("div")
    dodod.id="twiter_name"
    dezie.append(dodod);
    
    const JOJOj = document.createElement("p")
    JOJOj.id="twiter_CO"
    JOJOj.textContent = "twiter닉넴";
    dodod.append(JOJOj);
    
    
    const Fofo =document.createElement("div")
    Fofo.id="date4"
    Fofo.innerText = days
    dezie.append(Fofo);    
   
    const ROROr =document.createElement("div")
    ROROr.id=`twiter_p${a}`
    dezie.append(ROROr);


    const text = $("#texter9").val();
    const p = document.createElement("p")
    p.id = `cs-${a}`
    p.textContent = text;
    ROROr.append(p);
    }
}
function TCHANGE(){

    const sel10 = $("#sel10").val()
    $(`#cs-${sel10}`).remove();
    const text10 = $("#texter10").val();
    const c = document.createElement("p")
    c.id = `cs-${sel10}`
    c.textContent = text10;
    $(`#twiter_p${sel10}`).append(c);
    $("#twiter_load").show();
    $("#twiter_m").hide();
}


$(document).ready(function(){
    $("#table").click(loginMon);
    $("#cancle1").click(loginCancle);
    $("#naver").click(loginNaver);
    $("#kakao").click(loginKakao);
    $("#face").click(loginFace);
    $("#google").click(loginGoogle);
    $("#twiter").click(loginTwiter);

    $("#btn_naver").click(gogo);
    $("#btn_naver_del").click(NaverCan);
    $("#btn_naver_del2").click(NAVERDelet);
    $("#btn_naver_m").click(NAVERCHAN);
    $("#btn_naver_m2").click(NCHANGE);

    $("#btn_kakao").click(IOIO);
    $("#btn_kakao_del").click(KaCan);
    $("#btn_kakao_del2").click(KaDelet);
    $("#btn_kakao_m").click(KaCHAN);
    $("#btn_kakao_m2").click(KCHANGE);

    $("#btn_face").click(IOIOI);
    $("#btn_face_del").click(FaCan);
    $("#btn_face_del2").click(FaDelet);
    $("#btn_face_m").click(FaCHAN);
    $("#btn_face_m2").click(FCHANGE);

    $("#btn_google").click(IOIOIO);
    $("#btn_google_del").click(GoCan);
    $("#btn_google_del2").click(GoDelet);
    $("#btn_google_m").click(GoCHAN);
    $("#btn_google_m2").click(GCHANGE);

    $("#btn_twiter").click(IOIOIOI);
    $("#btn_twiter_del").click(TwCan);
    $("#btn_twiter_del2").click(TwDelet);
    $("#btn_twiter_m").click(TwCHAN);
    $("#btn_twiter_m2").click(TCHANGE);

    $("#logout").click(LogOut);
    $("#logout1").click(LogOut1);
    $("#logout2").click(LogOut2);
    $("#logout3").click(LogOut3);
    $("#logout4").click(LogOut4);
})
