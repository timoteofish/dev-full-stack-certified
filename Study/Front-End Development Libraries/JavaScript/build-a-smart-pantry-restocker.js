
function parseShipment(rawData) {
  const shipment = [];
  const seenSKUs = new Set();

  for (const line of rawData) {
    const [sku, name, qty, expires, zone = "general"] =
      line.split("|").map(value => value.trim());

    if (seenSKUs.has(sku)) {
      continue;
    }

    seenSKUs.add(sku);

    shipment.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone: zone || "general"
    });
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (const item of shipment) {
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else if (pantry.some(p => p.sku === item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({
      type,
      item
    });
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone || "general";

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  return JSON.parse(JSON.stringify(pantry));
}

// Example data
const pantry = [
  {
    sku: "A001",
    name: "Rice",
    qty: 10,
    expires: "2027-01-01",
    zone: "dry"
  }
];

const rawData = [
  "A001|Rice|5|2027-02-01|dry",
  "B002|Milk|3|2027-01-15|cold",
  "C003|Bread|0|2027-01-10",
  "A001|Rice|8|2027-03-01|dry"
];

const clonedPantry = clonePantry(pantry);
const shipment = parseShipment(rawData);
const actions = planRestock(clonedPantry, shipment);
const groupedActions = groupByZone(actions);

console.log(groupedActions);
