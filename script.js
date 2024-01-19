/*
https://abhiappmobiledeveloper.medium.com/free-api-huge-list-of-public-apis-for-developertesting-b9cf371282b3
https://wirefreethought.github.io/geodb-cities-api-docs/#tag/Geo/operation/getCountryUsingGET
http://geodb-cities-api.wirefreethought.com/faq
https://rapidapi.com/wirefreethought/api/geodb-cities
*/


const container = document.getElementById('output');
const input = document.getElementById('input')
const submit = document.getElementById('submit');
const clientId = '2d4f86e4d4f6486d8e93e522c08cc7ff';
const clientSecret = '402ca3f283c746d39a328033fb991363';
const redirectUri = 'https://henning-m.github.io/APItesting-public/';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';
const authorizationCode = 'https://accounts.spotify.com/authorize?response_type=code&client_id=YOUR_CLIENT_ID&scope=[]&redirect_uri=YOUR_REDIRECT_URI'


const requestBody = new URLSearchParams({
    grant_type: 'authorization_code',
    code: authorizationCode,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  });
  
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: requestBody,
  };
  
  await fetch(tokenEndpoint, fetchOptions)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('authToken', data);
      console.log(data);
    })
    .catch(error => console.error('Error:', error));







// async function getToken() {
//     const tokenRequest = new Request (tokenUrl, {
//         method: 'POST',
//         header: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: {
//             'grant_type': 'client_credentials',
//             'client_id': '2d4f86e4d4f6486d8e93e522c08cc7ff',
//             'client_secret': '402ca3f283c746d39a328033fb991363'
//         }
//         });
//     const tokenFeedback = await fetch(tokenRequest);
//     // const tokenData = await tokenFeedback.json();
//     console.log(tokenFeedback);
// }

// getToken();


// const url = 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg';

// async function getData () {
//     const request = new Request (url, {
//         headers: {
//             'Authorization': 'Bearer 1POdFZRZbvb...qqillRxMr2z'
//         }
//     })
//     const feedback = await fetch(request);
//     const data = await feedback.json();
//     console.log(data)
// }

// getData();




// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6c0b787da9msh1f06550e5c89c6bp16d2c9jsnc74ec1c48d1a',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };



// submit.addEventListener('click', () => {

//     // const inputToUse = input.value;

//     // Using fetch to save the retrieved data into a variable
//     const apiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/Germany'
//     let retrievedData; // Declare a variable to store the data
  
//     const response = fetch(url, options)
    
//     const result = response.code;

//     console.log(result)
// });


