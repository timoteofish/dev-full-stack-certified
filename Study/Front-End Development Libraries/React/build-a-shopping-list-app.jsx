const { useState, useMemo, useCallback } = React;
const items = ["Apples", "Bananas", "Strawberries", "Blueberries", "Mangoes", "Pineapple", "Lettuce", "Broccoli", "Paper Towels", "Dish Soap"];
let prevToggleItem = null;
export const ShoppingList = () => {
  const [query, setQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const toggleItem = useCallback((item) => { setSelectedItems((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]); }, [setSelectedItems]);
  if (prevToggleItem !== toggleItem) { console.log("New toggleItem function"); prevToggleItem = toggleItem; } else { console.log("Current toggleItem function"); }
  const filteredItems = useMemo(() => { console.log("Filtering items..."); return items.filter((item) => item.toLowerCase().includes(query.toLowerCase())); }, [query]);
  return (<div className="container"><h1>Shopping List</h1><form><label htmlFor="search">Search for an item:</label><input value={query} onChange={(e) => setQuery(e.target.value)} type="search" id="search" placeholder="Search..." aria-describedby="search-description" /><p id="search-description">Type to filter the list below:</p><ul>{filteredItems.map((item) => { const isChecked = selectedItems.includes(item); return (<li key={item} style={{textDecoration: isChecked ? "line-through" : "none"}}><label><input type="checkbox" checked={isChecked} onChange={() => toggleItem(item)} />{item}</label></li>); })}</ul></form></div>);
};