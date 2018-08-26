import express from 'express';

import spotifyAuthenticate from '../../controllers/spotify/spotifyAuth';

const router = express.Router();

router.get('/authenticate', spotifyAuthenticate);

module.exports = router;
