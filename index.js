const axios = require('axios');
require('dotenv').config();

let baseUrl = process.env.TATA_BASE_URL;
let authToken = process.env.AUTH_TOKEN;


const getAllTemplates = () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${baseUrl}/templates?limit=10`,
        headers: {
            'Authorization': authToken
        }
    };

    axios.request(config)
        .then((response) => {
            const jsonString = JSON.stringify(response.data); // This converts the data to a JSON string
            const jsonObject = JSON.parse(jsonString);
            console.log(jsonObject);
        })
        .catch((error) => {
            console.log(error);
        });
}

const sendMessages = () => {
    let data = JSON.stringify({
        "to": "8700685675",
        "type": "template",
        "template": {
            "name": "techworks_status",
            "language": {
                "code": "en"
            },
            "components": [
                {
                    "type": "body",
                    "parameters": [
                        {
                            "type": "text",
                            "text": "Hello HITESH,\nThanks for reaching out to Techworks."
                        }
                    ]
                }
            ]
        }
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseUrl}/whatsapp-cloud/messages`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

    // let txt = "Region Wise Status:\nWest : 20 (Active) / 100 (Inactive)\nNorth : 20 (Active) / 100 (Inactive)\nEast : 20 (Active) / 100 (Inactive)\nSouth : 20 (Active) / 100 (Inactive)"
    // console.log(txt);
}

const SendTxtCall = () => {
    const url = `${baseUrl}/whatsapp-cloud/messages`;
    const headers = {
        'accept': 'application/json',
        'Authorization': authToken,
        'Content-Type': 'application/json'
    };
    const data = {
        to: '+919205830129',
        type: 'template',
        source: 'external',
        template: {
            name: 'techworks_status',
            language: {
                code: 'en'
            },
            components: [
                {
                    type: 'body',
                    parameters: [
                        {
                            type: 'text',
                            text: 'RAHUL'
                        }
                    ]
                }
            ]
        }
    };

    axios.post(url, data, { headers })
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
        });

}

SendTxtCall();