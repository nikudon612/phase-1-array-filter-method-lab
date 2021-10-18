function findMatching(drivers, string) {
  const passedDrivers = drivers.filter((element) => element === string);
  return drivers.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
  return passedDrivers;
}

function fuzzyMatch(drivers, string) {
  const length = string.length;
  const driverSpecific = drivers.filter(function (element) {
    return element.slice(0, 2) === string;
  });
  return driverSpecific;
}

function matchName(drivers, string) {
  return drivers.filter(function (hometown) {
    return hometown.name === string;
  });
}
