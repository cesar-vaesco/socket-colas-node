# Socket Colas - Web Server

Ejecutar el comando ```npm install``` para reconstruir los modulos de node

- 1.- Inicializando proyecto
    -  Instalacion de dependencias: "cors","dotenv","express","socket.io"
    -  Usando estructura prevía
- 2.- Clase para centralizar la lógica de los tickets
    - Se crea el modelo de la data (JSON)
    - Se crea la clase TicketControl
      - Se inicializa al iniciarce el programa a la par del controller
      - En la clase del controller se instancia un objeto de la clase TicketControl
- 3.- Modelo - Siguiente y atender nuevo ticket
    - En el archivo ticket-control se crea:
      - Clase Ticket
      - La lógica para atender el siguiente ticket
      - La lógica para atender un ticket
- 4.-  Socket: Siguiente Ticket
    - Se ignora la carga de data.json por parte de nodemon
    - Se agrega la librería e socket.io a nuevo-ticket.html
    - Se agregan los eventos para escuchar y emitir la creación de un nuevo ticket en nuevo-ticket.js
    - En el controlador del socket,se configua la escucha del siguiente ticket y se emite la información del último ticket
- 5.- Preparar pantalla de escritorio
    - Mostrar información donde se muestre en pantalla el número de escritorio y el ticket
    - Se crean los eventos y las referencias html
- 6.- Socket: Atender un ticket
    - Se pone a la escucha a la app por medio de sockets para identificar si existen ticktes por atender
- 7.- Mostrar cola tickets en pantalla
    - Configurar selectores para mostrar información sobre ticket atendido y en que mesa se genera la atención
    - Se configura el controller para que este a la escucha del estado actual de los ultimos 4 tickets atendidos
- 8.- Tickets pendientes por atender
    - Se reo el evento que permite mostrar que en todos los escritorios los tickets por atender
