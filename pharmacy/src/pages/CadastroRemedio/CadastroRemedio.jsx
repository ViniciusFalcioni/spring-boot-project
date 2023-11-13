import React, { useState } from 'react';
import styled from 'styled-components';
import { adicionarRemedio } from '../../services/api';

// Estilos

const FormContainer = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #613F9D;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #613F9D;
  }
`;

const SucessPopup = styled.div`
    position: absolute;
    top: 25px;
    right: 40px;
    box-shadow: 0px 0px 0px 3px green;
    padding: 1em;
    background-color: #fff;
`


const CadastroRemedio = () => {
  const [remedio, setRemedio] = useState({
    nome: '',
    fabricante: '',
    preco: '',
    estoque: '',
    fotoUrl: ''
  });

  const [isCadastroSucesso, setIsCadastroSucesso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRemedio({ ...remedio, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', remedio.nome);
    formData.append('fabricante', remedio.fabricante);
    formData.append('preco', remedio.preco);
    formData.append('estoque', remedio.estoque);
    formData.append('fotoUrl', remedio.fotoUrl);

    try {
      const response = await adicionarRemedio(formData);
      console.log('Remédio cadastrado:', response);
      setIsCadastroSucesso(true);
      setRemedio({
        nome: '',
        fabricante: '',
        preco: '',
        estoque: '',
        fotoUrl: ''
      })
      setTimeout(() => {
        setIsCadastroSucesso(false);
      }, 3000) //Limpa mensagem de sucesso apos 3 segundos
    } catch (error) {
      console.error('Erro ao cadastrar remédio:', error);
    }
  };



  return (
    <FormContainer>
      {isCadastroSucesso && (
        <SucessPopup>
          Remédio cadastrado com sucesso!
        </SucessPopup>
      )}


      <Form onSubmit={handleSubmit}>
        <Label>Nome:</Label>
        <Input type="text" name="nome" value={remedio.nome} onChange={handleChange} />

        <Label>Fabricante:</Label>
        <Input type="text" name="fabricante" value={remedio.fabricante} onChange={handleChange} />

        <Label>Preço:</Label>
        <Input type="number" name="preco" value={remedio.preco} onChange={handleChange} />

        <Label>Estoque:</Label>
        <Input type="number" name="estoque" value={remedio.estoque} onChange={handleChange} />

        <Label>Foto URL:</Label>
        <Input type="text" name="fotoUrl" value={remedio.fotoUrl} onChange={handleChange} />


        <Button type="submit">Cadastrar Remédio</Button>
      </Form>
    </FormContainer>
  );
};

export default CadastroRemedio;
