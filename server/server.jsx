const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi ({
        redirectUri: 'http://localhost:3000',
        clientId: '56f79d1a09c34459a7514616e29ec33c',
        clientSecret: 'c2d1739e7d194c528ceb4b235d04f993'
    })

spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
    })
})
.catch(() => {
    res.sendStatus(400)
})
})