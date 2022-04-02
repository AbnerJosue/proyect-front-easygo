import axios from "axios";

export const createdData = async (data) => {
    try {
        console.log(data)
        var config = {
            method: 'post',
            url: 'http://localhost:5000/postRequest',
            headers: {
                'Content-Type': 'application/json'
            },
            data:data
          };
          
        let response = await axios(config);
        console.log(response)
        return {
            data: response.data,
            error: null
        }
    } catch (error) {
        return {
            data:null,
            error: error
        }
    }
}