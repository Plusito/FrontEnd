function Text({ text, negrita, cursiva }) {
  if (negrita == true && cursiva == true) {
    return <p style={{ fontStyle: "italic", fontWeight: "bold" }}>{text}</p>;
  }

  if (negrita == false && cursiva == false) {
    return <p style={{ fontStyle: "none", fontWeight: "none" }}>{text}</p>;
  }

  if (negrita == true && cursiva == false) {
    return <p style={{ fontStyle: "none", fontWeight: "bold" }}>{text}</p>;
  }

  if (negrita == true && cursiva == true) {
    return <p style={{ fontStyle: "true", fontWeight: "none" }}>{text}</p>;
  }
}

export default Text;
