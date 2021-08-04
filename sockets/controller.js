const TicketControl = require("../models/ticket-control");


const ticketControl = new TicketControl();


const socketController = (socket) => {

    socket.emit( 'ultimo-ticket', ticketControl.ultimo );
    socket.emit( 'estado-actual', ticketControl.ultimosCuatro );

    socket.on('siguiente-ticket', ( payload, callback ) => {

        const siguiente = ticketControl.siguiente();
        callback(siguiente);

        //TODO: Notificar que hay un ticket pendiente
        socket.broadcast.emit('estado-actual', ticketControl.ultimosCuatro);

    })

    socket.on('atender-ticket', ({ escritorio }, callback ) => {
        /* console.log( payload ); */

        if( !escritorio ) {
            return callback({
                ok:false,
                msg:'El escritorio es obligatorio'
            });
        }

        const ticket = ticketControl.atenderTicket( escritorio );
        //TODO: notificar cambios de los ultimos 4
        socket.broadcast.emit('estado-actual', ticketControl.ultimosCuatro);
        if( !ticket){
            return callback({
                ok: false,
                msg: 'No hay tickets pendientes'
            });
        } else {
            callback({
                ok: true,
                ticket
            })
        }
    })

}



module.exports = {
    socketController
}
