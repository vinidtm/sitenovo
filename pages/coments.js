// pages/comments.js

import React, { useState } from 'react';

const initialComments = [
  { id: 1, name: 'Nome 1', text: 'Este é um comentário fictício para teste.' },
  { id: 2, name: 'Nome 2', text: 'Outro comentário fictício para teste.' },
];

export default function Comments() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ name: '', text: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = comments.length + 1;
    setComments([...comments, { ...newComment, id: newId }]);
    setNewComment({ name: '', text: '' });
  };

  return (
    <div>
      <h1>Seu Site</h1>

      {/* Comentários fictícios */}
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p>{comment.name}: {comment.text}</p>
        </div>
      ))}

      {/* Formulário para adicionar comentários reais */}
      <h2>Deixe um Comentário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={newComment.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="text"
          placeholder="Seu Comentário"
          value={newComment.text}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
