<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars(trim($_POST["name"]));
    $from = htmlspecialchars(trim($_POST["from"]));
    $to = htmlspecialchars(trim($_POST["to"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $date = htmlspecialchars(trim($_POST["date"]));
    $passengers = htmlspecialchars(trim($_POST["passengers"]));

    // Recipient email
    $recipient = "italcar80@gmail.com"; // Change this to your email address

    // Email subject
    $subject = "Новая заявка от $name";

    // Email message
    $message = "
    Имя: $name\n
    Откуда: $from\n
    Куда: $to\n
    Телефон: $phone\n
    Дата: $date\n
    Количество пассажиров: $passengers\n
    ";

    // Email headers
    $headers = "From: webmaster@example.com"; // Change this to a valid email address

    // Send the email
    if (mail($recipient, $subject, $message, $headers)) {
        $response = array("success" => true);
    } else {
        $response = array("success" => false);
    }

    echo json_encode($response);
} else {
    echo json_encode(array("success" => false, "error" => "Некорректный запрос."));
}
?>
