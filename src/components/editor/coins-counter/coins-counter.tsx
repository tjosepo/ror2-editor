import "./coins-counter.scss";

interface Props {
  savedata: XMLDocument;
}

export default function CoinsCounter({ savedata }: Props) {
  const coins = savedata.querySelector("coins")!.innerHTML;

  const changeCoins = (value: string) => {
    savedata.querySelector("coins")!.innerHTML = value;
  };

  return (
    <div className="coins-counter">
      <label htmlFor="coins" className="label">
        Lunar Coins
      </label>
      <input
        type="number"
        className="form-control"
        id="coins"
        defaultValue={coins}
        min="0"
        onChange={(e) => changeCoins(e.target.value)}
      />
    </div>
  );
}
