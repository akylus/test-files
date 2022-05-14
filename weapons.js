function getFirstDigit(value) {
  let strValue = "" + value;
  return Number(strValue[0]);
}

function getDeadliestWeapon(weaponsArray) {
  weaponsArray = [611, 23400, 234];
  61, 12, 34, 00, 234;
  61, 12, 34, 23, 400;
  let finalScore = "";
  let nonZeroWeaponsArray = [];
  let zeroWeaponsArray = [];
  weaponsArray.forEach((weapon) => {
    if (weapon % 10 !== 0) {
      nonZeroWeaponsArray.push(weapon);
    } else {
      zeroWeaponsArray.push(weapon);
    }
  });
  let objArray = [];
  nonZeroWeaponsArray.forEach((weapon) => {
    objArray.push({
      firstDigit: getFirstDigit(weapon),
      value: weapon,
    });
  });
  let sortedObjArray = objArray.sort((a,b) => b.firstDigit - a.firstDigit)
  let sortedArray = sortedObjArray.map(val => val.value)

  let finalZeroWeaponsArray = zeroWeaponsArray.sort((a,b) => b-a)
  finalZeroWeaponsArray.forEach(val => {
    sortedArray.push(val)
  })
  return sortedArray;
}
