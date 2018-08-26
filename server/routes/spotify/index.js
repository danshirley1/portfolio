import express from 'express';

import { spotifyAuthorize, spotifyAuthorizeCallback } from '../../controllers/spotify/spotifyAuth';

const router = express.Router();

router.get('/authorize', spotifyAuthorize);

router.get('/authorize-callback', spotifyAuthorizeCallback);

module.exports = router;
