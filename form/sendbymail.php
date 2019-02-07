<?php

include_once('PHPMailer/class.phpmailer.php');
include_once('PHPMailer/class.smtp.php');

if (isset($_POST['email'])) {
    
    if (!isset($_POST['name']) || !isset($_POST['phone']) || !isset($_POST['email'])) {
        echo'<script type="text/javascript">
                alert("Favor diligencie todos los datos.");
                window.history.back();
             </script>';
        return false;
    }
    
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465;
    /*
        En configuracion del gmail remitente->Seguridad->Permitir aplicaciones no seguras->activar
    */
    $mail->Username ='remitente@gmail.com';
    $mail->Password = 'claveremitente'; 
    
    $message = "";
    $to = "destinatario@gmail.com";
    $subject = 'Formulario de contacto';
    
    $message = "Detalles del formulario de contacto: <br>";
    $message .= "Nombre: " . $_POST['name'] . "<br>";
    $message .= "Teléfono: " . $_POST['phone'] . "<br>";
    $message .= "E-mail: " . $_POST['email'] . "<br>";
    $message .= "Sugerencias: " . $_POST['messageSuggestion'] . "<br>";
    
    $mail->AddAddress($to);
    $mail->Subject = $subject;
    $mail->Body = $message;
    $mail->MsgHTML($message);
    
    if($mail->Send()){
        echo '<script type="text/javascript">
                console.log("Enviado Correctamente");
                window.location = "index.html"
             </script>';
    }else{
        echo '<script type="text/javascript">
                console.log("NO ENVIADO, intentar de nuevo");
             </script>';
    }
}
?>
