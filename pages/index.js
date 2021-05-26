import Layout from "../components/Layout"
import { useState } from "react"

function App({ colores }) {
  const [modoOscuro, setModoOscuro] = useState(false)

  function manejarClick() {
    setModoOscuro(!modoOscuro)
  }

  return (
    <Layout>
      <img
        onClick={manejarClick}
        src={modoOscuro ? "/sol.svg" : "/luna.svg"}
        alt={modoOscuro ? "modo-diurno" : "modo-nocturno"}
      />
      <div className="contenedor">
        <header>
          <h2>cien colores random nombrados por gente random</h2>
          <p>
            la gente le pone nombre a los colores en{" "}
            <a href="https://colornames.org/">colornames.org</a>
          </p>
          <p>estos son los últimos 100 que nombraron:</p>
        </header>
        {colores.map((color, index) => {
          return (
            <div className="color" key={index}>
              <p className="color-name">{color.name}</p>
              <div
                className="color-hex"
                style={{ backgroundColor: "#" + color.hexCode }}
              ></div>
            </div>
          )
        })}
        <hr />
        <footer>
          <p>¡se terminaron los colores! </p>
          <p>
            {" "}
            <a href="/">recargá</a> la página para ver si hay alguno nuevo
          </p>
          <p>o andá a contarle a tus nietos lo que viste</p>
        </footer>
      </div>

      {modoOscuro && (
        <style global jsx>
          {`
            body {
              transition: background-color 0.2s ease, color 0.2s ease;
              background-color: black;
              color: white;
            }
            a {
              color: greenyellow;
              transition: color 0.2s ease;
            }
            a:visited {
              color: green;
              transition: color 0.2s ease;
            }

            .en-vivo label {
              color: #dfdfdf;
            }
          `}
        </style>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://colornames.org/fresh/json/")
    const colores = await res.json()
    console.log(typeof colores)
    return { props: { colores } }
  } catch (error) {
    console.log("Hubo un error.")
    console.error(error)
  }
}

export default App
