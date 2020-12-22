<?php
    $conn = new mysqli("localhost","root","","game");
    $datavar = $_REQUEST["data"];
    $result = 1;
    if($_REQUEST["type"]==2)
    {
    $query = "update tictactoe set latestvalue='$datavar' where id = 1";
    
  
    $result = $conn->query($query);
    $result = 1;   
    }
    $row="";
    
    if($result)
        {
                $query = "select latestvalue from tictactoe";
                $result = $conn->query($query);
                $row = $result->fetch_assoc();
                if($result)
                    echo json_encode(array("status"=>200,"result"=>$row["latestvalue"]));
                else
                    echo json_encode(array("status"=>500,"result"=>null));
                
        }
    else
                    echo json_encode(array("status"=>500,"result"=>null));
?>