import axios from 'axios';

const thisRepo = axios.create({
  baseURL: 'https://raw.githubusercontent.com/mtilda/recoil-comeback/main',
});

export default thisRepo;
