function Perfil({ imge, name, children }) {
  return (
    <>
      <img src={imge} />
      <h1>{name}</h1>
      <p>{children}</p>
    </>
  );
}

export default Perfil;
