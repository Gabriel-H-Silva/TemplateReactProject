import api from '../../../../../Services/api'; 

export const GetItem = async () => {
  try {
    const response = await api.get("");

    return "Falha na API";
  } catch (error) {
    console.error("Erro ao buscar item:", error);
    throw error;
  }
};

export const CreateItem = async (item) => {
  try {
    const response = await api.post("Rota aqui", item);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar item:", error);
    throw error;
  }
};

export const UpdateItem = async (itemId, itemUpdates) => {
  try {
    const response = await api.put(`Rota aqui/${itemId}`, itemUpdates);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar item:", error);
    throw error;
  }
};

export const DeleteItem = async (itemId) => {
  try {
    await api.delete(`Rota aqui/${itemId}`);
    return { success: true };
  } catch (error) {
    console.error("Erro ao deletar item:", error);
    throw error;
  }
};