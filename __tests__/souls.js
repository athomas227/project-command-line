const fs = require('fs');
const souls = require("../data/souls")
const {
    addSoul,
    getAllSouls,
    getSoulByID,
    updateSoul,
    removeSoul,
    generateSouls,
    getRandomNum
  } = require("../src/souls");


  test('getAllSouls should return the souls array', () => {
    const allSouls = getAllSouls();
    expect(allSouls).toEqual(souls);
  });

  test('getSoulByID should return the soul with the specified ID', () => {
    const id = "Dd";
    const soul = getSoulByID(id);
    expect(soul.id).toBe(id);
  });