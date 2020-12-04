function enter_game(){
    var name1= document.getElementById("input_1").value;
     var name2= document.getElementById("input_2").value;
    localStorage.setItem("1_username", name1);
    localStorage.setItem("2_username", name2);
    window.location=game_page.html;
}