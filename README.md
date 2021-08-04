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
