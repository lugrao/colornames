import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";

export function App({ colores }) {
  const [modoOscuro, setModoOscuro] = useState(false);

  function manejarClick() {
    setModoOscuro(!modoOscuro);
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
        {colores.map((color) => {
          return (
            <div className="color">
              <p className="color-name">{color.name}</p>
              <div
                className="color-hex"
                style={{ backgroundColor: "#" + color.hexCode }}
              ></div>
            </div>
          );
        })}
        <hr />
        <footer>
          <p>¡se terminaron los colores! </p>
          <p>
            {" "}
            <Link href="/">
              <a
              // href="https://ciencoloresnombrados.vercel.app/"
              >
                recargá
              </a>
            </Link>{" "}
            la página para ver si hay alguno nuevo
          </p>
          <p>o andá a contarle a tus nietos lo que viste</p>
        </footer>
      </div>

      {modoOscuro && (
        <style global jsx>{`
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
        `}</style>
      )}
    </Layout>
  );
}

App.getInitialProps = async (ctx) => {
  const res = await fetch("https://colornames.org/fresh/json/");
  const json = await res.json();
  return { colores: json };
};

export default App;
