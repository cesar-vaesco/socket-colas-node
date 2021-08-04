
const path = require('path');
const fs = require('fs');

class Ticket{

    constructor ( numero, escritorio ) {

        this.numero = numero;
        this.escritorio = escritorio;
    }
}

class TicketControl {


    constructor () {
        this.hoy            = new Date().getDate();
        this.ultimo         = 0;
        this.tickets        = []; //
        this.ultimosCuatro  = [];

        this.init();
    }


    get toJson() {

        return {
            hoy: this.hoy,
            ultimo: this.ultimo,
            tickets: this.tickets,
            ultimosCuatro: this.ultimosCuatro
        }
    }

    init() {
        const { hoy,tickets,ultimo,ultimosCuatro }= require('../db/data.json');
        /* console.log(data); */

        if(hoy === this.hoy){

            this.tickets = tickets;
            this.ultimo  = ultimo;
            this.ultimosCuatro = ultimosCuatro;

        } else {
            //Es otro día
            this.guardarDB();
        }

    }

    guardarDB() {

        const dbPath = path.join(__dirname, '../db/data.json');
        fs.writeFileSync( dbPath, JSON.stringify( this.toJson ) ); //fs necesita la data convertida a string

    }

    siguiente(){

        this.ultimo += 1;
        const ticket = new Ticket( this.ultimo, null );
        this.tickets.push( ticket );

        this.guardarDB();

        return 'Ticket' + ticket.numero;
    }

    atenderTicket( escritorio ){

        //No tenemos tickets
        if( this.tickets.length === 0 ){
            return null;
        }

        const ticket = this.tickets.shift();
        ticket.escritorio = escritorio;

        this.ultimosCuatro.unshift( ticket );

        if( this.ultimosCuatro.length > 4 ){
            this.ultimosCuatro.splice( -1, 1 );
        }

        this.guardarDB();

        return ticket;
    }

}


module.exports = TicketControl;
