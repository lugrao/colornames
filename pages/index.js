import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import useSwr from "swr";

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://colornames.org/fresh/json/";
// const fetcher = (url) =>
//   fetch(url)
//     .then((response) => response.text())
//     .then((contents) => console.log(contents))
//     .catch(() =>
//       console.log("Can’t access " + url + " response. Blocked by browser?")
//     );

// const fetcher = (url) => fetch(url).then((res) => res.json());

export function App({ dataInicial }) {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [enVivo, setEnVivo] = useState(true);
  const [colores, setColores] = useState(dataInicial);
  // const { data, error, revalidate } = useSwr(proxyurl + url, fetcher, {
  //   refreshInterval: 1,
  // });

  // useEffect(() => {
  //   if (data) {
  //     setColores(data);
  //     console.log(data)
  //   }
  // }, [data]);

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
          {/* <div className="en-vivo">
            <label for="en-vivo">en vivo</label>
            <input
              type="checkbox"
              id="en-vivo"
              name="en-vivo"
              checked={enVivo}
              onClick={() => {
                setEnVivo(!enVivo);
              }}
            />
          </div> */}
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
            <a href="/">recargá</a> la página para ver si hay alguno nuevo
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

          .en-vivo label {
            color: #dfdfdf;
          }
        `}</style>
      )}
    </Layout>
  );
}

App.getInitialProps = async (ctx) => {
  const res = await fetch("https://colornames.org/fresh/json/");
  const json = await res.json();
  return { dataInicial: json };
};

export default App;
