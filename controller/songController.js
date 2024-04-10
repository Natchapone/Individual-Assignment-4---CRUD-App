import SongModel from '../model/songModel';

const SongController = {
    getHomePage: async (req, res) => {
        try {
            const songs = await SongModel.getAllSongs();
            res.render('home', { songs });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    addSong: async (req, res) => {
        try {
            const { songName } = req.body;
            await SongModel.addSong(songName);
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    editSong: async (req, res) => {
        try {
            const { id } = req.params;
            res.render('editSong', { songId: id });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    updateSong: async (req, res) => {
        try {
            const { id } = req.params;
            const { updatedSongName } = req.body;
            await SongModel.updateSongName(id, updatedSongName);
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    deleteSong: async (req, res) => {
        try {
            const { id } = req.params;
            await SongModel.deleteSong(id);
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
};

export default SongController;
