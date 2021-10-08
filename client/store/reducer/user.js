import {CREATE_USER, GET_USER} from "../actions/types"


let initialState={
    User:{
        idusuario: "487c0fe0-2844-11ec-b00b-9fccee04d922",
        nombre: "lucas",
        apellidos: "Masello",
        mail: "jojo@gmail.com",
        hash: "10sdasd0",
        nickname: "asador",
        dni: "36796003",
        telefono: "333333333",
        foto: "https://resizer.glanacion.com/resizer/QYosWERuR5SeTgwoRdHrUsCGsa4=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/YTX5HGSBGVCRTLF4L7E47GKKKU.JPG",
        codigo_postal: "5000",
        cuentas: [
            {
                idcuentas: "48867020-2844-11ec-b00b-9fccee04d922",
                tipomoneda: "AR$",
                numerocuenta: 235095431068940,
                saldo: 0,
                alias: "jojo@gmail.com",
                
            }
        ]
    }
}

const userReducer= (state= initialState, {type, payload})=>{
    switch(type){

        case CREATE_USER:
            return {...state, User:payload};
        

        case GET_USER:
            return {...state,User:payload}





        default: return state;
    }
}


export default userReducer;    