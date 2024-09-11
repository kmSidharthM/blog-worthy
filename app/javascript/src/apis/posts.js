import axios from "axios";

const fetch = () => axios.get("/posts");

const create = payload => axios.post("/posts", payload);

const show = slug => axios.get(`/posts/${slug}`);

const postApi = { fetch, create, show };
export default postApi;
