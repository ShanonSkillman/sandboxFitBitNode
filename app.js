///
//What is OAuth? 

//Open Authorization is token-based authentication and authorization on the internet which allows end user's account information to have limited access by third party services without exposing their passwords

//What is OAuth 2.0?
//OAuth 2.0: 1) obtain token by asking user to grant access 2) using tokens to access protected resources

//Why user OAuth 2.0 vs. OAuth 1?
//OAuth 2: improved UX, OAuth1 access tokens could be stored for a year plus, now OAuth 2 has refresh tokens which can be "life time" aka refresh token allows new access token rather than have the user re-authorize your application

//Bearer Tokens
//cryptography-free authentication option, based on existing cookie authentication architecture, instead of sending signed requests and token sercrets - the token itself is used as a secret sent over HTTPS

//RESOURCES//
//https://www.npmjs.com/package/fitbit-node
//https://github.com/ShanonSkillman/sandboxFitBitNode
///https://hueniverse.com/introducing-oauth-2-0-b5681da60ce2
//https://dev.fitbit.com/apps/oauthinteractivetutorial?clientEncodedId=22DPLG&clientSecret=9abbcfe2328e76b77051967a2c8aa23c&redirectUri=https://www.google.com&applicationType=SERVER

var FitbitApiClient = require("fitbit-node");

const client = new FitbitApiClient({ clientId: "22DPLG", clientSecret: "9abbcfe2328e76b77051967a2c8aa23c", apiVersion: "1.2" })

// console.log("client", client)

// const url =
//     client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight', 'https://www.google.com', ["none"], ["FANTASTIC"])

// console.log("url", url)

const code = 'cbdfc17722bd31cdf0580326eab6af2bc9e29704'

// const getToken = client.getAccessToken(code, "https://www.google.com")
//     .then(token => {
//         console.log('token', token)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRQTEciLCJzdWIiOiI0Uk40TVkiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTU4NDE4NTA3LCJpYXQiOjE1NTgzODk3MDd9.4T9Lt5cIFiU9M8wPDwPa2HtRED20rzMXhODG1BUc5eY'

client.get('/profile.json', token)
    .then(results => {
        console.log('profile', results[0])
    })
    .catch(e => {
        console.log(e)
    })