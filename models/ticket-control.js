
const path = require('path');
const fs = require('fs');

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
}


module.exports = TicketControl;
