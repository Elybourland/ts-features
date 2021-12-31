interface Reportable {
  summary(): string;
};

// Can use any types in the interface definition
// You can also express functions as well

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const beverage = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(beverage);

// interfaces acts as a gatekeeper to 'some function'
// Objects must satisfy the interface to work with 'some function'