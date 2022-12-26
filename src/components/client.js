import axios from "axios";

const client = axios.create({baseURL: 'http://localhost:3001', });
//Nest 에 연결할 포트 번호 . 

// const client = axios.create({baseURL: 'http://43.201.43.202:4000'});

export default client;
