<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $from = htmlspecialchars($_POST['from']);
    $to = htmlspecialchars($_POST['to']);
    $date = htmlspecialchars($_POST['date']);
    $passengers = htmlspecialchars($_POST['passengers']);

    $to_email = 'grachev01112000@gmail.com'; // замените на свой email
    $subject = 'Новая анкета';
    $message = "Имя: $name\nОткуда: $from\nКуда: $to\nДата: $date\nКоличество пассажиров: $passengers";
    $headers = 'From: noreply@example.com'; // замените на нужный email отправителя

    if (mail($to_email, $subject, $message, $headers)) {
        echo 'Сообщение отправлено успешно.';
    } else {
        echo 'Ошибка при отправке сообщения.';
    }
} else {
    echo 'Некорректный метод запроса.';
}
?>
