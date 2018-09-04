const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function() {
    park = new Park('Jurassic', 10, [
      new Dinosaur('Aardonyx', 'carnivore', 90),
      new Dinosaur('Aardonyx', 'carnivore', 90),
      new Dinosaur('Dashanpusaurus', 'herbivore', 40),
      new Dinosaur('Jinfengopteryx', 'herbivore', 60)
    ])
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to add a dinosaur to its collection', function() {
    newDinosaur = new Dinosaur('T-Rex', 'carnivore', 150);
    park.addDinosaur(newDinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 5);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur();
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 3);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostPopular();
    assert.deepStrictEqual(actual, park.dinosaurs[0]);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.findSpecies('Aardonyx');
    assert.deepStrictEqual(actual, [park.dinosaurs[0], park.dinosaurs[1]]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.removeDinosaurSpecies('Aardonyx');
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 2);
  });

});
