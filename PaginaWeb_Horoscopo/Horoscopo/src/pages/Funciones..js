import { Usuarios } from "./Registro";

//Funcion para buscar usuarios y retornarlos
export function buscarUsuarios(correo){
    let encontrado=false;
    for(var i=0; i < Usuarios.length; i++){
        for(var j=1; j  < Usuarios[0].length; j+=2){
            if(Usuarios[i][j] === correo){
                console.log("Hola, encontre al usuario " +Usuarios[i][j] );
                console.log("Sus datos son: " +Usuarios[i][0] +" "+Usuarios[i][1]+" "+Usuarios[i][2] );
                break;
            } 
        }
        if(encontrado){
            break;
            return true;//Encontro el usuario
        }
    }
    return false;
}