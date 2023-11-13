import React, { useState } from 'react';
import styled from 'styled-components';


// Estilos do popup
const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 400px; /* Largura do popup */
`;

const PopupBlock = styled.div`
display: flex;
flex-direction: column;
gap: 0.5em;
`
const Buttons = styled.button`
background-color: #613F9D;
padding: 1em;
color: #fff;
border: none;
border-radius: 0.5em;
margin: 0.5em;
`

// Componente do popup de edição
const EditPopup = ({ remedio, onClose, onSave }) => {
    const [editedRemedio, setEditedRemedio] = useState(remedio);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedRemedio({ ...editedRemedio, [name]: value });
    };

    const handleSave = () => {
        onSave(editedRemedio);
        onClose();
    };

    return (
        <PopupContainer>
            <PopupContent>
                <h2>Editar Remédio</h2>
                <PopupBlock>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={editedRemedio.nome}
                        onChange={handleChange}
                    />
                </PopupBlock>

                <PopupBlock>
                    <label htmlFor="fabricante">Fabricante:</label>
                    <input
                        type="text"
                        id="fabricante"
                        name="fabricante"
                        value={editedRemedio.fabricante}
                        onChange={handleChange}
                    />
                </PopupBlock>

                <PopupBlock>
                    <label htmlFor="preco">Preço:</label>
                    <input
                        type="number"
                        id="preco"
                        name="preco"
                        value={editedRemedio.preco}
                        onChange={handleChange}
                    />
                </PopupBlock>

                <PopupBlock>
                    <label htmlFor="estoque">Estoque:</label>
                    <input
                        type="number"
                        id="estoque"
                        name="estoque"
                        value={editedRemedio.estoque}
                        onChange={handleChange}
                    />
                </PopupBlock>

                <PopupBlock>

                    <label htmlFor="fotoUrl">Foto URL:</label>
                    <input
                        type="text"
                        id="fotoUrl"
                        name="fotoUrl"
                        value={editedRemedio.fotoUrl}
                        onChange={handleChange}
                    />
                </PopupBlock>

                <Buttons onClick={handleSave}>Salvar</Buttons>
                <Buttons onClick={onClose}>Cancelar</Buttons>
            </PopupContent>
        </PopupContainer>
    );
};

export default EditPopup;
