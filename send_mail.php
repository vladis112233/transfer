<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars(trim($_POST["name"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Recipient email
    $recipient = "italcar80@gmail.com"; // Change this to your email address

    // Email subject
    $subject = "Новая заявка от $name";

    // Email message
    $message = "
    Имя: $name\n
    Телефон: $phone\n
    Примечания: $message\n
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
