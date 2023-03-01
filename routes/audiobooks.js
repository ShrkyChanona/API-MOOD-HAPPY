const { getAudioBooks,registAudioBook  } = require("../controllers/AudioBooksController");

const router = require("express").Router();

router.get('/', getAudioBooks);
router.post('/', registAudioBook);

module.exports = router