import Barras from "./Barras"
import Circulo from "./Circulo"
import Cuadrado from "./Cuadrado"


function Banner(){
    return(
        <main className="barrasCirculo">
            <Barras />
            <Cuadrado />
            <Cuadrado />
            <Circulo />
        </main>
    )
}
export default Banner