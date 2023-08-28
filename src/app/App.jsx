import { useState } from "react";
import { AddForm } from "../components/AddForm/AddForm";
import { GifList } from "../components/GifList/GifList";
import "./App.css";
export const App = () => {
  const [fields, setFields] = useState(["Pikachu"]);

  const addField = (newField) => {
    for (let i = 0; i < fields.length; i++) {
      if (newField === fields[i]) return;
    }
    setFields([newField, ...fields]);
  };

  return (
    <>
      <h1 className="title-app">GIF search engine</h1>
      <AddForm onNewField={addField} />

      {fields.map((item) => (
        <GifList key={item} field={item} />
      ))}
    </>
  );
};
