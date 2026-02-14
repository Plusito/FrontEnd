import Enlace from "./Enlace";

function Menu({ links }) {
  return (
    <>
      {links.map((e, i) => (
        <Enlace key={i} link={e.link} text={e.text} imge={e.imge} />
      ))}
    </>
  );
}

export default Menu;
