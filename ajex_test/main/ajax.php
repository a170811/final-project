<?php
$name = $_POST["name"];
$student_id = $_POST["student_id"];
sleep(2); # pretend to spend some processing time
echo "Hello, {$name} {$student_id}"; # no <h1> tag in comparison with get/post version
?>
