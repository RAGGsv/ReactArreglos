import React, { useState } from 'react';

const Arreglo = () => {
  const Lista = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5"];
  const [selectedTask, setSelectedTask] = useState("");
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);

  const handleTaskSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedTask(selectedValue);
    setIsSubmitButtonEnabled(selectedValue !== "");
  };

  const handleSubmit = () => {
    // Realiza alguna acción cuando se presiona el botón de submit
    // :D
    if (selectedTask) {
        const selectedTaskIndex = Lista.findIndex((tarea) => tarea === selectedTask);
        alert(`Índice: ${selectedTaskIndex}, Tarea seleccionada: ${selectedTask}`);
      } else {
        alert('Ninguna tarea seleccionada.');
      }
  };

  return (
    <div>
      <h2>Seleccionar Tarea</h2>
      <select name="selectA" id="selectA" value={selectedTask} onChange={handleTaskSelect}>
        <option value="">Selecciona una tarea</option>
        {Lista.map((tarea, index) => (
          <option key={index} value={tarea}>
            {tarea}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit} disabled={!isSubmitButtonEnabled}>
        Submit
      </button>
    </div>
  );
};

export default Arreglo;