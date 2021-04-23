import { useEffect } from "react";

function Mounstro({
    nombre, 
    debilidad, 
    vidas, 
    setVidas, 
    objeto, 
    setObjeto,
    carisma,
    setCarisma,
    belleza,
    setBelleza,
    fuerza,
    setFuerza,
    inteligencia,
    setInteligencia, 
    nivel
    }){
        useEffect(()=>{
            
            if (nombre === "Unitornio de fuego"){
                if (objeto > 0){
                    setVidas(vidas - 1)
                    setObjeto(objeto - 1)
                } else {
                    if (carisma > 0){
                        setCarisma(carisma >= 5 ? carisma - 5 : carisma - carisma)
                    } else {
                        setBelleza(belleza - 2)
                        setFuerza(fuerza - 2)
                        setInteligencia(inteligencia - 2)
                    }
                }
            } else if(nombre === "Burlon oscuro"){
                if (objeto > 0){
                    setVidas(vidas - 1)
                    setObjeto(objeto - 1)
                } else {
                    if (inteligencia > 0){
                        setInteligencia(inteligencia >= 5 ? inteligencia - 5 : inteligencia - inteligencia)
                    } else {
                        setBelleza(belleza - 2)
                        setFuerza(fuerza - 2)
                        setCarisma(carisma - 2)
                    }
                }
            } else if(nombre === "Lazy violenta"){
                if (objeto > 0){
                    setVidas(vidas - 1)
                    setObjeto(objeto - 1)
                } else {
                    if (belleza > 0){
                        setBelleza(belleza >= 5 ? belleza - 5 : belleza - belleza)
                    } else {
                        setInteligencia(inteligencia - 2)
                        setFuerza(fuerza - 2)
                        setCarisma(carisma - 2)
                    }
                }
            } else if(nombre === "Zombie electrico"){
                if (objeto > 0){
                    setVidas(vidas - 1)
                    setObjeto(objeto - 1)
                } else {
                    if (fuerza > 0){
                        setFuerza(fuerza >= 5 ? fuerza - 5 : fuerza - fuerza)
                    } else {
                        setInteligencia(inteligencia - 2)
                        setBelleza(belleza - 2)
                        setCarisma(carisma - 2)
                    }
                }
            } else {
                if (objeto === true){
                    setVidas(vidas - 1)
                    setObjeto(false)
                } else {
                    setFuerza(fuerza - 2)
                    setInteligencia(inteligencia - 2)
                    setBelleza(belleza - 2)
                    setCarisma(carisma - 2)
                }
            }
            
            
        }, [nivel])
        
        return (
        <>
        <h2>{nombre}</h2>
        <h4>{debilidad}</h4>
        <p>vidas: {vidas}</p>
        </>
        )
}

export default Mounstro;