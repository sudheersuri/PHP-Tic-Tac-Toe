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
  //console.log(p)
  var i = e.target.innerHTML-1
  var str = (p) ? "X" : "O"
  data[i] = str
  e.target.innerHTML = str
  console.log(data)
});
