import { useState } from "react";
import { AddCategory } from "./components/";
import { GiftGrid } from "./components/";

export function GifExpertApp() {
  const [categories, setCategories] = useState(["Goku"]);

  const onAddCategory = (newCategory) => {
    //comprueba si al menos un elemento del array cumple con la condición
    if (
      categories.some(
        (category) => category.toUpperCase() === newCategory.toUpperCase()
      )
    )
      return;
    const agregar = [newCategory, ...categories];
    setCategories(agregar);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
}
