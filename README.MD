# Test Rokket MERN 

[![N|Solid](https://www.rokketlabs.com/assets/logos/horizontal-purple.svg)](https://nodesource.com/products/nsolid)

- **Nombre Del postulante**: Michel Araya
- **Cargo a postular**: Desarrollador FullStack

# Tareas
##### Backend
- GET: busca todos los artículos de la base de datos y devuélvelos.  &#10004;
- POST: crea un nuevo elemento, guárdalo en la base de datos y devuélvelo. &#10004;
- DELETE: borra un elemento específico y lo devuelve verdadero si tiene éxito. &#10004;

##### Frontend
- Aplicación de vista única.
- Permite al usuario ver todos los elementos de la base de datos (a través de una tabla o similar).  &#10004;
- Permite al usuario crear un nuevo elemento y ver la lista de elementos actualizada después de
insertándolo.  &#10004;
- Permite al usuario borrar un elemento específico haciendo clic en un botón de borrado  &#10004;

# Carpetas principales

  - **Rokket_back**: Carpeta contenedora con toda la logica entre la conexión con la base de datos no relacional MongoDB y creacion de endpoints para consumo del front.

  - **Rokket_front**: Carpeta contenedora con los componentes visuales e interaccion del cliente con estas vistas. 

# Rokket_back

### Paquetes utilizados

A continuación se exponen los paquetes que se usaron para esta parte del proyecto.

| Package | 
| ------ |
| Cors |
| Express | 
| Mongoose |
| Nodemon | 
| Babel |

Para levantar el servidor que esta en localhost:5000, primero que todo se debe instalar todas las dependencias y paquetes que se usaron para esta aplicacion.

```sh
$ cd rokket_back
$ npm install
```

Si no se tiene mongoDB instalado pues no se podra acceder a los modelos ni tampoco gestionarlos ya que necesitamos de esta tecnología para poder conectarla con el back-end.

Para levantar esta tecnologia debemos ir a la carpeta de mongoDB instalada en tu computador, en donde habra un archivo mongod.exe el cual debemos ejecutar para que inicie sus procesos.

Ahora con MongoDB compass podemos gestionar nuestra base de datos y ver las visualizaciones, será importante tenerlo ya que verificar si el back-end a podido interactuar con los modelos. Se debe crear la base de datos con nombre "rokket_models" y el nombre de la coleccion como "articles"

Cuando esta todo lo anterior instalado y ejecutado tenemos que ejecutar el siguiente comando.

```sh
$ npm start
```
Con esto el servidor estara levantado y conectado a mongoDB.

### Endpoints

Como en esta oportunidad solo se debe gestionar la coleccion de articulos.
| Accion | Descripción |
| ------ | ------ |
| GET '/articles' | Trae todo los articulos |
| POST '/articles' | Agrega un articulo |
| DELETE '/articles/:idArticle' | Elimina un articulo por el id del mismo |

Adicionalmente se uso postman para revisar los endpoints y analizar las distintas acciones que se requerian en esta aplicación.

# Rokket_front
### Paquetes utilizados

A continuación se exponen los paquetes que se usaron para esta parte del proyecto.

| Package | 
| ------ |
| Antdesign |
| Axios | 

Para levantar la parte del cliente solamente necesitamos instalar los paquetes/dependencias.

```sh
$ cd rokket_front
$ npm install
```
Luego de instalar los paquetes, se levanta el cliente.
```sh
$ npm start
```

# Instalacion de las imagenes y dockercompose 

Primero que nada debemos cambiar en la carpeta rokket_back, el index.js que esta en la raiz del proyecto, ya que necesitamos hacer un pequeño cambio para crear la imagen.

##### Originalmente para uso local
```
mongoose.connect('mongodb://localhost/rokket_models', {
    useUnifiedTopology: true
})
```
##### Para uso de imagen docker
```
mongoose.connect('mongodb://mongo:27017/rokket_models', {
    useUnifiedTopology: true
})
```

luego creamos la imagen del back-end primero posicionandonos en la carpeta raiz del repositorio

```
docker build -t "api-server" ./rokket_back/     
```

creamos la imagen del front-end
```
docker build -t "react-app" ./rokket_front/     
```

Finalmente al tener las dos imagenes creadas, ingresamos el siguiente comando 
```
docker-compose up  
```
y con eso se automatizará la ejecucion de estas carpetas.


