
import React, { useState } from 'react';

const ArregloSelect = () => {
  const Lista = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5"];
  const [checkedItems, setCheckedItems] = useState(new Array(Lista.length).fill(0));
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);

  const handleCheckboxClick = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = updatedCheckedItems[index] === 0 ? 1 : 0;
    setCheckedItems(updatedCheckedItems);
    console.log(`Índice ${index} - Checkbox ${updatedCheckedItems[index] === 1 ? 'Marcado' : 'Desmarcado'}`);
    
    // Verificar si al menos un checkbox está marcado
    const isAnyCheckboxChecked = updatedCheckedItems.some(item => item === 1);
    setIsSubmitButtonEnabled(isAnyCheckboxChecked);
  };

  const handleSubmit = () => {
    // Realizar alguna acción cuando se presiona el botón de submit
    // :D
    const selectedCheckboxes = checkedItems
      .map((checked, index) => (checked ? `Índice ${index} - Tarea: ${Lista[index]}` : null))
      .filter(item => item !== null);

    if (selectedCheckboxes.length > 0) {
      alert(`Checkbox(s) seleccionado(s):\n${selectedCheckboxes.join("\n")}`);
    } else {
      alert('Ningún checkbox seleccionado.');
    }
  };

  return (
    <div>
      <h2>Listado de Tareas</h2>
      <ul>
        {Lista.map((tarea, index) => (
          <li key={index}>
            <span>Indice {index}</span>
            <span>Tarea: {tarea}</span>
            <input
              type="checkbox"
              checked={checkedItems[index] === 1}
              onChange={() => handleCheckboxClick(index)}
            />
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        disabled={!isSubmitButtonEnabled}
      >
        Submit
      </button>
    </div>
  );
};

export default ArregloSelect;

