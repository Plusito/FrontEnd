import "./App.css";
import ListaDeComentarios from "./components/Comentarios/ListaDeComentarios";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [massive, setMassive] = useState([
    {
      autor: "Daniel",
      fecha: "20.12.25",
      contenido: "I have a question about css border, how to do it correctly ?",
    },
    {
      autor: "Artem",
      fecha: "20.12.25",
      contenido:
        "Its easy, you just need to put in your classname: border: 1px black solid",
    },
    {
      autor: "Koko",
      fecha: "20.12.25",
      contenido: "Thanks you, I had the same question",
    },
  ]);

  function addComment() {
    const commentAuthor = "Daniel";
    const commentDate = new Date().toLocaleDateString("ru-RU");
    const commentText = text;

    setMassive([
      ...massive,
      {
        autor: commentAuthor,
        fecha: commentDate,
        contenido: commentText,
      },
    ]);

    setText("");
  }

  function deleteLastComment() {
    setMassive(massive.slice(0, -1));
  }

  return (
    <>
      <ListaDeComentarios list={massive} />
      <div id="CommentZone">
        <textarea
          id="inputComment"
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button onClick={addComment}>Add</button>
        <button onClick={deleteLastComment}>Delete Last Comment</button>
      </div>
    </>
  );
}

export default App;
