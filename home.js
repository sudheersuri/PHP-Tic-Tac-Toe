var table = document.getElementById("tictactable")
var data = "123456789"

table.addEventListener("click", function (e) {
  //charan : take the input and generate array
  //disable or hide respective player
  //kartik : take this array and convert it into json format
  //kartik : post this json data to api
  //kartik : get the response
  if(e.target.innerHTML == "X" || e.target.innerHTML == "O"){
    return
  }
  var p = document.getElementsByName("player")[0].checked
  var i = e.target.innerHTML-1
  var str = (p) ? "X" : "O";
  data = data.split("");
  data[i] = str;
  data = data.join("");
  e.target.innerHTML = str;
  $.post("save_data.php", { data: clientSideData }, function (serverSideData, status) {
    table.rows[0].cells[0].innerHTML = serverSideData[0]
    table.rows[0].cells[1].innerHTML = serverSideData[1]
    table.rows[0].cells[2].innerHTML = serverSideData[2]
    table.rows[1].cells[0].innerHTML = serverSideData[3]
    table.rows[1].cells[1].innerHTML = serverSideData[4]
    table.rows[1].cells[2].innerHTML = serverSideData[5]
    table.rows[2].cells[0].innerHTML = serverSideData[6]
    table.rows[2].cells[1].innerHTML = serverSideData[7]
    table.rows[2].cells[2].innerHTML = serverSideData[8]
  });
  const game_over = () => {
    if ((data[0] == data[1] && data[1]== data[2]) ||
        (data[3] == data[4] && data[4]== data[5]) ||
        (data[6] == data[7] && data[7]== data[8]) ||
        (data[0] == data[3] && data[3]== data[6]) ||
        (data[1] == data[4] && data[4]== data[7]) ||
        (data[2] == data[5] && data[5]== data[8]) ||
        (data[0] == data[4] && data[4]== data[8]) ||
        (data[2] == data[4] && data[4]== data[6])) {
      return str;
    }
    else if(data.search("/\d+/g")){
      return "T";
    }
  };
  let x = game_over();
  alert(x == "T"? "Game Over": 
          x == "X" ? "P1 wins" : 
              "P2 wins")
});
