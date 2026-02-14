function Cometario({ autor, fecha, contenido }) {
  return (
    <div className="comen">
      <div className="info">
        {" "}
        <div className="autor">{autor}</div>
        <div className="fecha">{fecha}</div>
      </div>

      <div className="contenido">{contenido}</div>
    </div>
  );
}

export default Cometario;
