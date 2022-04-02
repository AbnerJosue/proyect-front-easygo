import axios from "axios";

export const getData = async () => {
    try {
        var config = {
            method: 'get',
            url: 'http://localhost:5000/getRequest',
            headers: {
                'Content-Type': 'application/json'
            },
          };
          
        let response = await axios(config);
        return {
            data:response.data,
            error: null
        }
    } catch (error) {
        return{
            data: null,
            error:error.message
        }
    }
}