# DRON-ITSVC
<<<<<<< HEAD

Este proyecto es una interfaz web diseñada para recibir, procesar y mostrar información proveniente de un medidor de pinos. Los datos incluyen altura del árbol, ubicación mediante coordenadas, fecha, hora e ID único del árbol. Toda la información se recibe en formato JSON y se visualiza mediante una interfaz construida con HTML, CSS y JavaScript.

=======
<<<<<<< HEAD
Proyecto de Dron medidor de pinos para el Instituto Tecnologico Superior de Venustiano Carranza, se encuentra aqui el diseño web para la muestra de los valores arrojados del  modulo creado con sensores
-El modelo del proyecto es una arquitectura por capas donde se dividira en responsabilidades conforme a el JSON proporcionado por el modulo
=======
>>>>>>> 838bc4ea7342c2d58c386fb59268d481bc45b2e0
---

## 📁 Estructura del Proyecto

```
/medidor-pinos/
│
├── index.html                 # Página principal de la aplicación
│
├── /assets/                  # Archivos estáticos
│   ├── /css/
│   │   └── styles.css        # Estilos personalizados
│   ├── /js/
│   │   ├── main.js           # Código principal JS (inicio, eventos, lógica general)
│   │   ├── api.js            # Funciones para obtener y procesar JSON
│   │   └── utils.js          # Utilidades (validación, conversión de datos, etc.)
│   └── /img/
│       └── (imágenes si se utilizan)
│
├── /data/
│   └── sample.json           # Datos de muestra proporcionados por el medidor
│
├── /components/
│   └── treeCard.html         # Fragmentos HTML reutilizables (por ejemplo, tarjetas de árboles)
│
└── /docs/
    └── README.md             # Documentación del proyecto
```

---

## Cómo clonar el proyecto la parte del frontend

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/medidor-pinos.git
   cd medidor-pinos
   ```

2. Abre el archivo `index.html` con tu navegador web.

> Este proyecto no requiere servidor backend, pero puedes usar extensiones como "Live Server" en VSCode o servidores locales como `http-server` para mejor experiencia de desarrollo.

---

##  Tecnologías utilizadas

- **HTML5** – Estructura semántica del sitio
- **CSS3** – Estilos visuales personalizados
- **JavaScript (Vanilla)** – Lógica, carga de datos y renderizado dinámico
- **JSON** – Formato estructurado para los datos del medidor

---

##  Funcionalidades

- Carga y visualización de información de árboles en tiempo real desde un archivo JSON
- Componentes reutilizables para la presentación (ej. tarjetas de árbol)
- Interfaz modular y organizada
- Preparado para trabajar con ramas y colaboraciones en equipo

---

## Buenas prácticas y flujo de trabajo en equipo

- Trabaja en ramas específicas para nuevas funcionalidades:
  ```bash
  git checkout -b feature/mi-funcionalidad
  ```
- Sube tu rama al repositorio:
  ```bash
  git push -u origin feature/mi-funcionalidad
  ```
- Al finalizar, haz un Pull Request hacia la rama `desarrollo`
- Siempre sincronízate antes de comenzar con:
  ```bash
  git pull origin desarrollo
  ```

---

## Autoría

Proyecto desarrollado por el equipo de desarrollo de **ITSVC Alumnos: Teresa Itzel Guzman Tellez y Angel Manuel Castillo Larios de 8vo Semestre**.

<<<<<<< HEAD
---
=======
---
>>>>>>> 45c5f0a (Creación de archivos y estructura de proyecto/ Creación de readme con documentación MARKDOWN)
>>>>>>> 838bc4ea7342c2d58c386fb59268d481bc45b2e0
