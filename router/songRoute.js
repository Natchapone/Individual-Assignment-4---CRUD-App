import express from 'express';
import SongController from '../controller/songController';

const router = express.Router();

router.get('/', SongController.getHomePage);
router.post('/song', SongController.addSong);
router.get('/song/:id/edit', SongController.editSong);
router.post('/song/:id/delete', SongController.deleteSong);
router.post('/song/:id/edit', SongController.updateSong);

export default router;
