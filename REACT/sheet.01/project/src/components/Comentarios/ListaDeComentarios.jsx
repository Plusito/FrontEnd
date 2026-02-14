import Cometario from "./Comentario";

function ListaDeComentarios({ list }) {
  return (
    <>
      {list.map((com) => (
        <Cometario
          autor={com.autor}
          fecha={com.fecha}
          contenido={com.contenido}
        />
      ))}
    </>
  );
}

export default ListaDeComentarios;
