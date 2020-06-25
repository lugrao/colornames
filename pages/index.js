import Layout from "../components/Layout";
import { useState } from "react";

export function App({ colores }) {
  const [modoOscuro, setModoOscuro] = useState(false);

  function manejarClick() {
    setModoOscuro(!modoOscuro);
  }

  return (
    <Layout>
      <img onClick={manejarClick} src={modoOscuro ? "/sol.svg" : "/luna.svg"} />
      <div className="contenedor">
        <header>
          <h2>cien colores random nombrados por gente random</h2>
          <p>
            <a href="https://colornames-feed.vercel.app/">recargá</a> la página
            para ir viendo los nuevos colores
          </p>
          <p>
            visitá <a href="https://colornames.org/">colornames.org</a>
          </p>
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
