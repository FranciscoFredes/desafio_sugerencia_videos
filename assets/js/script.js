// IIFE (Expresión de Función Invocada Inmediatamente) que encapsula la lógica de inyectar y mostrar contenido
let iifeGlobal = (() => {
    let inyectarTodo = (url, id) => {
      const videoId = document.getElementById(id);
      videoId.setAttribute("src", url);
      videoId.style.display = "block";
    };  
    return {
      mostrarTodo: (url, id) => inyectarTodo(url, id),
    };
  })();
  
  // Definición de la clase Multimedia para manejar la URL
  class Multimedia {
    constructor(url) {
      this.url = url;      
    }    
    // Getter para obtener la URL
    getUrl (){
      return this.url;
    }    
    
  }
    // Definición de la clase Reproductor que hereda de Multimedia
  class Reproductor extends Multimedia{
    constructor(url, id){
      super(url);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      this.id = id; 
    } 
    // Método para establecer el inicio del video
    setInicio(tiempo) {
      // Modifica la URL del video para iniciar en un tiempo específico
      document.getElementById(this.id).setAttribute("src", `${this.url}?start=${tiempo}`);
    }
    playMultimedia(){
      iifeGlobal.mostrarTodo(this.url, this.id);
    }  
  }
  // Crear instancias de Reproductor para reproducir diferentes videos
  let playMusica = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "musica");
  playMusica.playMultimedia();
  playMusica.setInicio(200);  
  
  let playPelicula = new Reproductor( "https://www.youtube.com/embed/5PSNL1qE6VY", "peliculas" );
  playPelicula.playMultimedia();
  
  let playSerie = new Reproductor( "https://www.youtube.com/embed/5PSNL1qE6VY", "series"  );
  playSerie.playMultimedia();