

// Comando para establecer la conexion

var socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion al servidor');
})

// Escuchar el evento estadoActual
socket.on('estadoActual', function(resp) {
    console.log(resp)
    label.text(resp.actual);
})

// Recibir mensaje del servidor
$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        label.text(siguienteTicket);
    });
});


