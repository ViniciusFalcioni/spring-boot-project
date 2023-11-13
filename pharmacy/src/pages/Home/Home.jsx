import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { listarRemedios, deletarRemedio, editarRemedio } from '../../services/api';
import EditPopup from '../../components/EditPopup';

const ListaContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`;

const Cabecalho = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 2px solid #333;
  background-color: #f0f0f0;
`;

const CabecalhoItem = styled.span`
  font-weight: bold;
  text-align: center;
`;

const ImagemCabecalho = styled(CabecalhoItem)`
  flex: 0 0 100px; // Largura fixa para a coluna da imagem
`;

const TextoCabecalho = styled(CabecalhoItem)`
  flex: 1; // Colunas de texto com largura flexível
`;

const RemedioItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

const Imagem = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 0 auto;
`;

const Informacao = styled.span`
  flex: 1;
  text-align: center;
`;

const Acao = styled.button`
    background-color: #613F9D;
    border: none;
    color: #fff;
    padding: 1em;
    margin: 0.25em;
    border-radius: 0.5em;
    cursor: pointer;
`;

const DeletePopup = styled.div`
    position: absolute;
    top: 25px;
    right: 40px;
    box-shadow: 0px 0px 0px 3px red;
    padding: 1em;
    background-color: #fff;
`

const SucessPopup = styled(DeletePopup)`
      box-shadow: 0px 0px 0px 3px green;
`;

const Home = () => {
  const [remedios, setRemedios] = useState([]);
  const [selectedRemedio, setSelectedRemedio] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setisEdit] = useState(false);

  useEffect(() => {
    listarRemedios()
      .then((remediosData) => {
        setRemedios(remediosData);
      })
      .catch((error) => {
        console.error('Erro ao obter remédios:', error);
      });
  }, []);

  const handleEdit = (remedio) => {
    setSelectedRemedio(remedio);
    setIsEditPopupOpen(true);
  };


  const handleDelete = async (remedioId) => {
    try {
      await deletarRemedio(remedioId);
      // Após deletar o remédio, atualize a lista de remédios
      const updatedRemedios = remedios.filter((remedio) => remedio.id !== remedioId);
      setRemedios(updatedRemedios);
      setIsDelete(true);
      setTimeout(() => {
        setIsDelete(false);
      }, 3000) //Limpa mensagem de sucesso apos 3 segundos
    } catch (error) {
      console.error('Erro ao deletar remédio:', error);
    }
  };


  const handleSaveRemedio = async (editedRemedio) => {
    try {
      await editarRemedio(editedRemedio.id, editedRemedio);
      setSelectedRemedio(null);
      setIsEditPopupOpen(false);
      setisEdit(true);
      setTimeout(() => {
        setisEdit(false);
      }, 3000) //Limpa mensagem de sucesso apos 3 segundos
    } catch (error) {
      console.error('Erro ao editar remédio:', error);
    }
  };


  return (
    <ListaContainer>
      {isDelete && (
        <DeletePopup>
          Remédio removido com sucesso!
        </DeletePopup>
      )}
      {isEdit && (
        <SucessPopup>
          Remédio atualizado com sucesso!
        </SucessPopup>
      )}

      <Cabecalho>
        <ImagemCabecalho>Foto</ImagemCabecalho>
        <TextoCabecalho>Nome</TextoCabecalho>
        <TextoCabecalho>Fabricante</TextoCabecalho>
        <TextoCabecalho>Estoque</TextoCabecalho>
        <TextoCabecalho>Preço</TextoCabecalho>
        <TextoCabecalho>Ações</TextoCabecalho>
      </Cabecalho>
      {remedios.map((remedio) => (
        <RemedioItem key={remedio.id}>
          <Imagem src={remedio.fotoUrl} alt={remedio.nome} />
          <Informacao>{remedio.nome}</Informacao>
          <Informacao>{remedio.fabricante}</Informacao>
          <Informacao>{remedio.estoque}</Informacao>
          <Informacao>R$ {remedio.preco.toFixed(2)}</Informacao>
          <Informacao>
            <Acao onClick={() => handleEdit(remedio)}>Editar</Acao>
            <Acao onClick={() => handleDelete(remedio.id)}>Remover</Acao>
            {isEditPopupOpen && selectedRemedio && (
              <EditPopup
                remedio={selectedRemedio}
                onClose={() => {
                  setSelectedRemedio(null);
                  setIsEditPopupOpen(false);
                }}
                onSave={(editedRemedio) => {
                  handleSaveRemedio(editedRemedio);
                }}
              />

            )}

          </Informacao>
        </RemedioItem>
      ))}
    </ListaContainer>
  );
};

export default Home;
