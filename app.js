let objetos = {}; //Se declara variable con object vacio
let arrays = ["299.792.458 mt/s","300.000 km/s"]; //se da un contenido al array para ejemplo

addArrayProperty = (obj, key, arr) =>{
    obj[key] = arr; //se indica que obj tiene un array key y que equivalen a arr
    return arr;
   }
   
   //ejemplo
   addArrayProperty(objetos, 'Velocidad de la luz', arrays);
   console.log(objetos);