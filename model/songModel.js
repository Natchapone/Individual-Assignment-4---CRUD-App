import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
    filename: 'data.db',
    driver: sqlite3.Database
});

const SongModel = {
    getAllSongs: async () => {
        const db = await dbPromise;
        return await db.all('SELECT * FROM Song;');
    },

    addSong: async (songName) => {
        const db = await dbPromise;
        await db.run('INSERT INTO Song (name) VALUES (?);', songName);
    },

    updateSongName: async (id, updatedName) => {
        const db = await dbPromise;
        await db.run('UPDATE Song SET name = ? WHERE id = ?;', updatedName, id);
    },

    deleteSong: async (id) => {
        const db = await dbPromise;
        await db.run('DELETE FROM Song WHERE id = ?;', id);
    }
};

export default SongModel;
