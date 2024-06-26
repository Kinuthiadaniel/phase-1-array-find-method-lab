// code your solution here
const records = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]


  function superbowlWin(records) {
    const win = records.find(record => record.result === "W");
    return win ? win.year : undefined;
}
console.log(superbowlWin(records));

function win(records){
  const winning = records.find((winner)=>winner.year === "2014");
  return winning? winning.result: undefined;
}
console.log(win(records));