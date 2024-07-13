import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProgram.css';

const AddProgram = ({ addProgram }) => {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProgramId = await addProgram({ name, icon, description, instructions, downloadLink });
    if (newProgramId) {
      navigate(`/program/${newProgramId}`);
    } else {
      alert('Ошибка при добавлении программы. Попробуйте снова.');
    }
  };

  return (
    <div className="add-program">
      <h2>Добавить Программу</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Название</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Иконка (URL)</label>
          <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} required />
        </div>
        <div>
          <label>Описание</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Инструкции</label>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        </div>
        <div>
          <label>Ссылка для скачивания</label>
          <input type="text" value={downloadLink} onChange={(e) => setDownloadLink(e.target.value)} required />
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddProgram;
