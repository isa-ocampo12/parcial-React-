import Banner from "../components/Banner";
import Principal from "../components/Principal";
import "./Home.css"
function Home(){
    return(
        <section className="home">
            <section className="columna">
                <Banner /> 
            </section>
            <section className="contenido">
                <Principal />
            </section>
        </section>
    )
}
export default Home