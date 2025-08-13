# VAEP TRANSITION TOOLKIT
Esta dependencia está diseñada para facilitar la transición en la consulta de datos de VAEP 1 a VAEP 2

Esta dependencia es agnostica de framework porque lo que se puede utilizar en cualquier proyecto JS

Para evitar errores inesperados lo ideal es desactivar la conexión con la base de datos de firestore

## Instalación
```
npm i vaep-transition-toolkit
```

## Uso
Si estás extrayendo la información como se hacía en la versión original de VAEP entonces debes cambiar esto (módulo QAHandlers):
```
const fetchPreguntasRespuesta = async () => {
      const q = query(...)
      return items;
    };

const fetchPreguntasOpcionMultiple = async () => {
      const q = query(...);
      return items;
    };

    const preguntasRespuestas = await fetchPreguntasRespuesta();
    const preguntasOpcionMultiple = await fetchPreguntasOpcionMultiple();
```

Por esto, sin remplazar el demás código de la función fetchPreguntasRespuesta
```
import { getQuestions } from 'vaep-transition-toolkit'
// Más código
const themes = 'MIRA EXPLICACIÓN ABAJO'
const [ preguntasRespuestas, preguntasOpcionMultiple ] = await getQuestions(themes)
```

Los themes vienen como params en la forma
"http://www.inakidev.com/?themes=686f265ab90c32f573f9b3a4&themes=686f265ab90c32f573f9b3a4". Así que en función del framework utilizado debes leer los valores recibidos y transformalo a un string que represente los valores de los ids separados por ',' ejemplo: '686f265ab90c32f573f9b3a4,686f265ab90c32f573f9b3a4' este string es el que se pasará como argumento a la función getQuestions