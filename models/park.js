const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(name) {
  this.dinosaurs.push(name);
};

Park.prototype.removeDinosaur = function() {
  this.dinosaurs.pop();
};

Park.prototype.mostPopular = function() {
  let mostVisits = this.dinosaurs[0].guestsAttractedPerDay; // Should this be left undefined/null?
  let mostPopularDinosaur = this.dinosaurs[0]; // Should this be left undefined/null?
  for (let key in this.dinosaurs) {
    const currentVal = this.dinosaurs[key].guestsAttractedPerDay;
    if (currentVal > mostVisits) {
      mostPopularDinosaur = this.dinosaurs[key]
    };
  }
  return mostPopularDinosaur;
};

Park.prototype.findSpecies = function(species) {
  let foundDinosaurs = [];
  for (let key in this.dinosaurs) {
    if (this.dinosaurs[key].species === species) {
      foundDinosaurs.push(this.dinosaurs[key]);
    }
  }
  return foundDinosaurs;
};

Park.prototype.removeDinosaurSpecies = function (species) {
  newDinosaurs = []
  for (var i = 0;i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species !== species) {
      newDinosaurs.push(this.dinosaurs[i]);
    }
  }
  this.dinosaurs = newDinosaurs;
};

module.exports = Park;
