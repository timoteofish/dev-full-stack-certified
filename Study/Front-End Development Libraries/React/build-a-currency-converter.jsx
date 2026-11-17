const { useState, useMemo } = React;
const rates = { USD: 1, EUR: 0.92, GBP: 0.78, JPY: 156.7 };

export function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const convertedAmounts = useMemo(() => {
    const result = {};
    for (const currency of Object.keys(rates)) {
      result[currency] = (Number(amount) / rates[fromCurrency]) * rates[currency];
    }
    return result;
  }, [amount, fromCurrency]);

  return (
    <main className="converter">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px; background: #101619; color: #edf5f1; font-family: system-ui, sans-serif; }
        .converter { width: 100%; max-width: 480px; padding: 32px; background: #1a2428; border: 1px solid #344348; border-radius: 24px; box-shadow: 0 24px 70px #0004; }
        .eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 3px; color: #a7e9bc; }
        h1 { font-size: 32px; letter-spacing: -1px; margin: 12px 0; }
        .intro, .note { color: #a7b7b3; line-height: 1.6; }
        label { display: block; font-size: 14px; margin: 22px 0 8px; }
        input, select { width: 100%; padding: 14px; border: 1px solid #4a5c60; border-radius: 10px; background: #10191c; color: #fff; font: inherit; }
        input:focus, select:focus { outline: 2px solid #a7e9bc; outline-offset: 3px; }
        .currencies { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .result { margin-top: 28px; padding: 24px; border-radius: 14px; background: #b7f4c9; color: #10271b; }
        .result span { display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; }
        output { display: block; margin-top: 8px; font-size: 34px; font-weight: 700; overflow-wrap: anywhere; }
        .note { font-size: 12px; margin-bottom: 0; }
      `}</style>
      <div className="eyebrow">CURRENCY DESK</div>
      <h1>Currency converter</h1>
      <p className="intro">A simple way to compare four currencies.</p>
      <label htmlFor="amount">Amount</label>
      <input id="amount" type="number" step="any" value={amount} onChange={(event) => setAmount(event.target.value)} />
      <div className="currencies">
        <div>
          <label htmlFor="from">From</label>
          <select id="from" value={fromCurrency} onChange={(event) => setFromCurrency(event.target.value)}>
            {Object.keys(rates).map((currency) => <option key={currency} value={currency}>{currency}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="to">To</label>
          <select id="to" value={toCurrency} onChange={(event) => setToCurrency(event.target.value)}>
            {Object.keys(rates).map((currency) => <option key={currency} value={currency}>{currency}</option>)}
          </select>
        </div>
      </div>
      <div className="result">
        <span>Converted amount</span>
        <output aria-live="polite">{convertedAmounts[toCurrency].toFixed(2)} {toCurrency}</output>
      </div>
      <p className="note">Fixed example rates for this demo. Not live exchange rates.</p>
    </main>
  );
}