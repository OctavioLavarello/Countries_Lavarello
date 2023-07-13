import { useNavigate } from "react-router-dom";
import axios from "axios";

export default async function login (userData) {
   try {
      const navigate = useNavigate();
      const { nickname, email, password } = userData;
      const URL = '/login?';
      const { data } = await axios.get(URL + `name=${nickname}email=${email}&password=${password}`)
      const { access } = data;

      setAccess(data);
      access && navigate('/home');
   } catch (error) {
      window.alert("Login error");
   }
};