import axios from 'axios';



export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID xIuqxLOeTp6BteLA8flWgOb0-xH0k0RMluCZ2TlYT8A"
    }
});