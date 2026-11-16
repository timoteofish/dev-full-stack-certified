
function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

function checkoutDevice(ledger, assetTag, borrower) {
  const newLedger = loadLedger(serializeLedger(ledger));

  if (!Object.hasOwn(newLedger, assetTag)) {
    return {
      ledger: newLedger,
      message: `Device ${assetTag} not found.`
    };
  }

  if (newLedger[assetTag].status === "CheckedOut") {
    return {
      ledger: newLedger,
      message: `Device ${assetTag} is already checked out.`
    };
  }

  newLedger[assetTag].borrower.name = borrower.name;
  newLedger[assetTag].borrower.email = borrower.email;
  newLedger[assetTag].status = "CheckedOut";

  return {
    ledger: newLedger,
    message: `Device ${assetTag} checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  const newLedger = loadLedger(serializeLedger(ledger));

  if (!Object.hasOwn(newLedger, assetTag)) {
    return {
      ledger: newLedger,
      message: `Device ${assetTag} not found.`
    };
  }

  newLedger[assetTag].borrower.name = "";
  newLedger[assetTag].borrower.email = "";
  newLedger[assetTag].dueDate = "";
  newLedger[assetTag].status = "CheckedIn";

  return {
    ledger: newLedger,
    message: `Device ${assetTag} checked in successfully.`
  };
}

function normalizeDate(date) {
  const [month, day, year] = date.split("/").map(Number);

  return year * 10000 + month * 100 + day;
}

function listOverdueDevices(ledger, today) {
  const todayValue = normalizeDate(today);

  return Object.values(ledger)
    .filter(device =>
      device.status === "CheckedOut" &&
      device.dueDate !== "" &&
      normalizeDate(device.dueDate) < todayValue
    )
    .sort((a, b) =>
      normalizeDate(a.dueDate) - normalizeDate(b.dueDate)
    );
}

console.log(listOverdueDevices(ledger, "03/15/2023"));  