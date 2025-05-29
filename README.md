
# DRON-ITSVC

Proyecto desarrollado para el Instituto Tecnológico Superior de Venustiano Carranza que permite visualizar los datos recolectados por un dron con sensores en pinos.

Este sistema permite subir, almacenar y visualizar los datos en formato JSON generados por el dron.

## Tecnologías utilizadas

- **HTML5** – Para la estructura de la interfaz de usuario.
- **CSS3** – Para los estilos visuales personalizados.
- **JavaScript (Vanilla)** – Para la lógica, carga y renderización dinámica de datos.
- **PHP** – Para el backend y manejo de archivos.
- **JSON** – Para estructurar los datos recolectados por el dron.
- **Git & GitHub** – Control de versiones y trabajo colaborativo.
- **XAMPP** – Para montar un servidor local.
- **Git Bash** – Terminal para la gestión de versiones.

---

##  Estructura del proyecto

```
/DRON-ITSVC/
│
├── index.html                 # Página principal
│
├── /assets/                  # Recursos estáticos
│   ├── /css/
│   │   └── styles.css
│   ├── /js/
│   │   ├── main.js
│   │   ├── api.js
│   │   └── utils.js
│   └── /img/
│
├── /backend/                 # Scripts PHP
│   ├── guardar-archivos.php
│   └── leer-archivos.php
│
├── /data/                    # Carpeta donde se almacenan los archivos subidos
│
└── README.md                 # Documentación del proyecto
```

---

## Funcionalidades implementadas

- Subida de archivos JSON generados por el módulo del dron.
- Lectura y renderización dinámica de los datos en la interfaz.
- Almacenamiento automático con nombre basado en la fecha del primer dato.
- Validación de archivos y errores de subida.
- Arquitectura por capas con separación de responsabilidades.

---

## Flujo de trabajo y colaboración

- Uso de ramas para el desarrollo de nuevas funcionalidades:
  ```bash
  git checkout -b feature/nueva-funcionalidad
  ```
- Subida de cambios:
  ```bash
  git add .
  git commit -m "Descripción del cambio"
  git push origin feature/nueva-funcionalidad
  ```
- Integración mediante Pull Request hacia la rama `desarrollo`.
- Fusión final en `main` tras revisión.

---

## Autoría

Desarrollado por:
- Teresa Itzel Guzmán Téllez
- Ángel Manuel Castillo Larios  
Estudiantes de 8vo semestre del ITSVC.

---
