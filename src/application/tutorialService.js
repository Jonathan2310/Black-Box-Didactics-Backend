const tutorialRepo = require("../../src/infrastructure/repositories/tutorialRepo");

const tutorialService = {
  getAll: async () => {
    return await tutorialRepo.getAll();
  },

  create: async (tutorialData) => {
    return await tutorialRepo.create(tutorialData);
  },
};

module.exports = tutorialService;
