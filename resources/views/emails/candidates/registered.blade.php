<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<style>
@import url(https://fonts.bunny.net/css?family=abeezee:400|figtree:300);
body {
    background: gray;
}
* {
font-family: 'Figtree', sans-serif;
}
</style>
</head>
<body>
<div style="text-align: center; padding: 2em; background: white; max-width: 50vw; margin: auto; border-radius: 15px;">
    <img src="http://servisolutionssys.com/images/logo.svg" width="100">
    <h1 style="font-size: 28px">
        Candidato Registrado
    </h1>
    <p>
        El candidato {{ $firstName }} {{ $lastName }}, con teléfono
        {{ $phone }}, se registra para la vacante de {{ $position }}.
    <p>
</div>
</body>
</html>
