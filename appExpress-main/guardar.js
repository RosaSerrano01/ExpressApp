const fs = require('fs')
const  escribir =(_fullname,_email,_password)=>{

    fs.readFile('usersData.js',(err, data)=>{
        if(err){
            throw err
        }
        var datos_text = data.toString()
        var marca = 0

        for(var i = datos_text.length; i >= 0 ; i -- ){

            if(datos_text[i]=== "]" ){
                marca = i
                break
            }    
        
        }

        var corte = datos_text.slice(0,marca-1)
        var new_dato = ", \n { \n fullname:'"+_fullname+"', \n email:'"+_email+"', \n password:'"+_password+"' \n } " 
        var datos = corte+new_dato+"]; \n module.exports = { data }" 
        
        fs.writeFile('usersData.js',datos,(err)=>{
            if(err){
                throw err
            }
        })

        
    })

}

module.exports = {escribir}