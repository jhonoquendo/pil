# SWAPI

## Autor
Jhon Roy Oquendo Vizcarra

## Descripción
Esta prueba técnica consta de una arquitectura en AWS, donde se deben crear apis con servicio
API Gateway, Lambda y DynamoDB. Se crearon 2 endpoints GET uno para obtener todos los usuarios que se 
crean en base de datos, y otro endpoin para hacer una llamada externa a la API SWAPI y segun la respuesta
poder traducir el nombre de las propiedades y retornarlas.

Por último se agregó endpoint POST para la creación de usuarios utilizando DynamoDB como base de datos.


Para ejecutar este proyecto, sigue estos pasos:

1. Instala las dependencias del proyecto utilizando el siguiente comando:

   ```bash
   - npm install
   - npm run tsc:interface
   - serverless deploy
   ```

##Resumen:

Con esta implementación podemos tener expuesta 3 APIS que funcionan en la nube con el proveedor
AWS, permite que tengamos servicios con una alta disponibilidad.

##Arquitectura:

![Arquitectura](https://res.cloudinary.com/dxy4tmnt5/image/upload/v1714155014/softtek/vduxtjzw95ot0rspcy1h.png)