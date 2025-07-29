const db = require("../../config/db");
const Tutorial = require("../../domain/tutorial");

const tutorialRepo = {
  async getAll() {
    const [rows] = await db.query("SELECT * FROM tutoriales");
    return rows.map(
      (row) => new Tutorial(row.id, row.titulo, row.imgUrl, row.tutorialUrl)
    );
  },

  async create(tutorialData) {
    const { titulo, imgUrl, tutorialUrl } = tutorialData;
    const [result] = await db.query(
      "INSERT INTO tutoriales (titulo, imgUrl, tutorialUrl) VALUES (?, ?, ?)",
      [titulo, imgUrl, tutorialUrl]
    );
    return { id: result.insertId, ...tutorialData };
  },
};

module.exports = tutorialRepo;
