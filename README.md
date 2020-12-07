# Aplicación de Pokemons

Aplicacion de pokemons creada con la api de pokedex con su api [pokeApi](https://pokeapi.co "pokeApi"). La aplicación se crea con Angular 8 y Angular Material.

## Arquitectura Usada
La arquitectura que se uso para la creación de esta aplicación fueron 4 carpetas las cuales son:

- **Components:** Carpeta que contiene todos los componentes de la aplicación separada por body  y header. En body estando los componetes de pokemon-list (Lista de los pokemons) y pokemon-detail (Detalles de un pokemon)

- **Modules:** Carpeta que contiene los modulos de la aplicación los cuales son pokemon y shared

- **Routings:** Carpeta que contiene las rutas de la aplicación tanto la ruta razi como la ruta de los pokemons

- **Services:** Carpeta que contiene los servicios que se usan en los componentes y que consumen las api de [pokeApi](https://pokeapi.co "pokeApi")

## Como usar el servicio
Descargar la aplicación, en la consola posicionarse en la carpeta del proyecto y ejecutar la setencia `ng serve` El proyecto corre por el puerto default de angular 4200.
En la aplicación se encontraran con la tabla de pokemons con la paginazación, al seleccionar un item de la tabla redirecciona al pokemon con sus detalles.
Para volver es necesario dar click en el logo de pokemon del header.
