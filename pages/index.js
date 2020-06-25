import Layout from "../components/Layout";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function App({ colores }) {
  console.log(colores);

  return (
    <Layout>
            <p className="recargar"><i>recargá la página para ir viendo los nuevos colores</i></p>
      {colores.map((color) => {
        return (
          <div className="color">
            <p className="color-name">{color.name}</p>{" "}
            <div
              className="color-hex"
              style={{ backgroundColor: "#" + color.hexCode }}
            ></div>
          </div>
        );
      })}
    </Layout>
  );
}

App.getInitialProps = async (ctx) => {
  const res = await fetch("https://colornames.org/fresh/json/");
  const json = await res.json();
  return { colores: json };
};

export default App;
