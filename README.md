# Practica 2 - Jukebox (Reproductor de Musica)

Proyecto desarrollado para la asignatura **Desarrollo Web en Entorno Cliente** (DAW).

Consiste en una aplicacion web interactiva que funciona como reproductor de musica utilizando JavaScript nativo y la libreria **Howler.js** para la gestion de audio.

---

## Funcionalidades implementadas

- **Carga dinamica de canciones:** Carga de lista de reproduccion mediante peticion `fetch()` a un archivo local `songs.json`.
- **Reproduccion interactiva:**
  - Boton principal de Play / Pause.
  - Seleccion e inicio inmediato de cualquier cancion directamente desde la lista.
  - Actualizacion automatica de metadatos (titulo, artista y caratula) de la pista activa.
- **Gestion de audio eficiente:** Uso de Howler.js con la opcion `html5: true` para optimizar el streaming de las pistas mp3 y liberar memoria al cambiar de cancion.
- **Interfaz adaptable:** Diseño responsive en modo oscuro con barra de desplazamiento interna para listas largas de reproduccion.

---

## Tecnologias utilizadas

- **HTML5:** Estructura semantica del reproductor.
- **CSS3:** Estilos personalizados en modo oscuro y maquetacion con Flexbox.
- **JavaScript (ES6+):** Logica de manipulacion del DOM, funciones asincronas (`async/await`) y eventos.
- **Howler.js (v2.2.4):** Libreria externa para el control y reproduccion de audio Web.

---

## Estructura del proyecto

```text
jukebox/
├── assets/
│   ├── audio/       # Archivos de sonido (.mp3)
│   └── images/      # Caratulas de los albumes (.jpg)
├── data/
│   └── songs.json   # Base de datos local con las canciones
├── js/
│   └── app.js       # Logica principal en JS
├── index.html       # Estructura HTML
├── styles.css       # Hojas de estilo CSS
└── README.md
```

---

## Instrucciones para ejecutar el proyecto

1. Clonar el repositorio o descargar el codigo fuente:
   ```bash
   git clone https://github.com/Checa2004/ACT2-DESARROLLO-CLIENTE.git
   ```
2. Dado que el proyecto realiza una peticion `fetch()` local para cargar el archivo `songs.json`, es necesario ejecutarlo a traves de un servidor local para evitar bloqueos por politicas CORS del navegador.
3. Se recomienda usar la extension **Live Server** de Visual Studio Code:
   - Abrir el proyecto en VS Code.
   - Hacer clic derecho sobre `index.html`.
   - Seleccionar **Open with Live Server**.
