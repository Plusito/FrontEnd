function Enlace({ text, link, imge }) {
  return (
    <div className="link">
      <a className="text" href={link}>
        {imge && <img src={imge} alt={text} className="icon" />}
        {text}
      </a>
    </div>
  );
}

export default Enlace;
