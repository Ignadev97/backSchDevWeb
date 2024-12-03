export const enviaTemplate = (remitente, mailContacto, asunto, mensaje) => {

    let template = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail recibido!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fff0f5;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #d63384;
            text-align: center;
        }

        div {
            background-color: #ffd1dc;
            border: 2px solid #d63384;
            border-radius: 10px;
            padding: 20px;
            margin-top: 20px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-bottom: 15px;
            font-size: 18px;
        }

        span, p {
            color: #d63384;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1> Alguien llenó el formulario desde la web schDev.com</h1>

    <div>
        <ul>
            <li> Remitente: <span>${remitente}</span> </li>
            <li> Mail de contacto: <span>${mailContacto}</span> </li>
            <li> Asunto: <p>${asunto}</p></li>
            <li> Mensaje: <p>${mensaje}</p> </li>
        </ul>
    </div>
</body>
</html>

`

return template
}