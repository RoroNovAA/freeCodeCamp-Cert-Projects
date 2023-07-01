function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
      { name: "PENNY", value: 0.01 },
      { name: "NICKEL", value: 0.05 },
      { name: "DIME", value: 0.1 },
      { name: "QUARTER", value: 0.25 },
      { name: "ONE", value: 1 },
      { name: "FIVE", value: 5 },
      { name: "TEN", value: 10 },
      { name: "TWENTY", value: 20 },
      { name: "ONE HUNDRED", value: 100 }
    ];
  
    let changeDue = cash - price;
    let change = [];
    let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);
  
    if (totalCID < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    if (totalCID === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    for (let i = cid.length - 1; i >= 0; i--) {
      const currencyName = cid[i][0];
      const currencyValue = currencyUnits.find(unit => unit.name === currencyName).value;
      let currencyAvailable = cid[i][1];
      let currencyCount = 0;
  
      while (changeDue >= currencyValue && currencyAvailable > 0) {
        changeDue -= currencyValue;
        changeDue = changeDue.toFixed(2);
        currencyAvailable -= currencyValue;
        currencyAvailable = currencyAvailable.toFixed(2);
        currencyCount++;
      }
  
      if (currencyCount > 0) {
        change.push([currencyName, currencyValue * currencyCount]);
      }
    }
  
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change };
  }
  
  
  checkCashRegister(
    19.5,
    20,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]
  );
  