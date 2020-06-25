import Layout from "../components/Layout";

export function App({ colores }) {
  return (
    <Layout>
      <h3>cien colores random nombrados por gente random</h3>
      <div className="texto">
        <p className="recargar">
          <i><a href="https://colornames-feed.vercel.app/">recargá</a> la página para ir viendo los nuevos colores</i>
        </p>
        <p className="colornames-org">
          visitá <a href="https://colornames.org/">colornames.org</a>
        </p>
      </div>

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
    </Layout>
  );
}

App.getInitialProps = async (ctx) => {
  const res = await fetch("https://colornames.org/fresh/json/");
  const json = await res.json();
  return { colores: json };
};

export default App;
