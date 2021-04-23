import './App.css';
import Mounstro from './componentes/mounstros/mounstros';
import { useState } from 'react';

function App() {

    let [numX, setNumX] = useState(Math.floor(Math.random() * 5))
    let [nivel, setNivel] =useState(0)
    let [cargando, setCargando] = useState(false)

    //--------- STATS
    let [carisma, setCarisma] = useState(25)
    let [belleza, setBelleza] = useState(25)
    let [fuerza, setFuerza] = useState(25)
    let [inteligencia, setInteligencia] = useState(25)

    //--------- OBJETOS
    let [globo, setGlobo] = useState(2)
    let [linterna, setLinterna] = useState(2)
    let [tijeras, setTijeras] = useState(2)
    let [estaca, setEstaca] = useState(2)
    let [espejo, setEspejo] = useState(true)

    //--------- VIDAS MOUNSTROS

    let [unitornioV, setUnitornioV] = useState(3)
    let [burlonV, setBurlonV] = useState(3)
    let [lazyV, setLazyV] = useState(3)
    let [zombieV, setZombieV] = useState(3)
    let [megastofelesV, setMegastofelesV] = useState(4)

    //---------- MOUNSTROS
    let mounstros = [
      <Mounstro 
        nombre="Unitornio de fuego"
        debilidad="Globo de agua"
        vidas={unitornioV}
        setVidas={setUnitornioV}
        objeto={globo}
        setObjeto={setGlobo}
        carisma={carisma}
        setCarisma={setCarisma}
        belleza={belleza}
        setBelleza={setBelleza}
        fuerza={fuerza}
        setFuerza={setFuerza}
        inteligencia={inteligencia}
        setInteligencia={setInteligencia}
        nivel={nivel}
      />,

      <Mounstro 
        nombre="Burlon oscuro"
        debilidad="Linterna"
        vidas={burlonV}
        setVidas={setBurlonV}
        objeto={linterna}
        setObjeto={setLinterna}
        carisma={carisma}
        setCarisma={setCarisma}
        belleza={belleza}
        setBelleza={setBelleza}
        fuerza={fuerza}
        setFuerza={setFuerza}
        inteligencia={inteligencia}
        setInteligencia={setInteligencia}
        nivel={nivel}
      />,

      <Mounstro 
        nombre="Lazy violenta"
        debilidad="Tijeras"
        vidas={lazyV}
        setVidas={setLazyV}
        objeto={tijeras}
        setObjeto={setTijeras}
        carisma={carisma}
        setCarisma={setCarisma}
        belleza={belleza}
        setBelleza={setBelleza}
        fuerza={fuerza}
        setFuerza={setFuerza}
        inteligencia={inteligencia}
        setInteligencia={setInteligencia}
        nivel={nivel}
      />,

      <Mounstro 
        nombre="Zombie electrico"
        debilidad="Estaca"
        vidas={zombieV}
        setVidas={setZombieV}
        objeto={estaca}
        setObjeto={setEstaca}
        carisma={carisma}
        setCarisma={setCarisma}
        belleza={belleza}
        setBelleza={setBelleza}
        fuerza={fuerza}
        setFuerza={setFuerza}
        inteligencia={inteligencia}
        setInteligencia={setInteligencia}
        nivel={nivel}
      />,

      <Mounstro 
        nombre="Megastofoles"
        debilidad="Espejo"
        vidas={megastofelesV}
        setVidas={setMegastofelesV}
        objeto={espejo}
        setObjeto={setEspejo}
        carisma={carisma}
        setCarisma={setCarisma}
        belleza={belleza}
        setBelleza={setBelleza}
        fuerza={fuerza}
        setFuerza={setFuerza}
        inteligencia={inteligencia}
        setInteligencia={setInteligencia}
        nivel={nivel}
      />
    ]

    
  function jugar(){
    setCargando(true)
    setTimeout(() => {
      setNumX(Math.floor(Math.random() * 5))
      setNivel(nivel + 1)
      setCargando(false)
    }, 1000);
  }  
  return (
    <div className="App">
      <div>
        heroina
        <p>carisma: {carisma}</p>
        <p>belleza: {belleza}</p>
        <p>fuerza: {fuerza}</p>
        <p>inteligencia :{inteligencia}</p>
        
        <p>globo: {globo}</p>
        <p>linterna: {linterna}</p>
        <p>tijeras: {tijeras}</p>
        <p>estaca :{estaca}</p>
        <p>espejo :{espejo ? "si" : "no"}</p>
      </div>
      <button onClick={jugar}>
        jugar
      </button>
      <div>
        {cargando ? "La heroina camina por un oscuro pasillo hacia la siguiente habitacion de las mazmorra..." : mounstros[numX]}
      </div>
      <p>nivel: {nivel}</p>
    </div>
  );
}

export default App;
