import { useState } from "react";
import { AddForm } from "../components/AddForm";
import { GifList } from "../components/GifList";
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
      <h1>GIF search engine</h1>
      <AddForm onNewField={addField} />

      {fields.map((item) => (
        <GifList key={item} field={item} />
      ))}
    </>
  );
};
