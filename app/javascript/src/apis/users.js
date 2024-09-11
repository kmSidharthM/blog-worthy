import axios from "axios";

const show = id => axios.get(`/users/${id}`);

const userApi = { show };
export default userApi;
