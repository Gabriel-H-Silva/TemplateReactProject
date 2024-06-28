import api from '../../../Services/api'; 

export const Login = async (data) => {
  try {
    const response = await api.post("api/auth/v1/login", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

