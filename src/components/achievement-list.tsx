import React from 'react';

export default function AchievementList({savedata, setSavedata }: {savedata: XMLDocument, setSavedata: React.Dispatch<XMLDocument> }) {
  const coins = savedata.querySelector('coins')!.innerHTML;
  const achievementsList = savedata.querySelector('achievementsList')!.innerHTML.split(' ');
  const stats = savedata.querySelector('stats')!;
  const unlocks = [...stats.querySelectorAll('unlock')].map((unlock: Element) => unlock.innerHTML);

  const changeCoins = (value: string) => {
    savedata.querySelector('coins')!.innerHTML = value;
  }

  return (
    <div className="form-group row">
      <label htmlFor="coins" className="col-sm-2 col-form-label">Coins</label>
      <div className="col-sm-10">
        <input type="number" className="form-control" id="coins" defaultValue={coins} min="0" onChange={(e) => changeCoins(e.target.value)} />
      </div>
    </div>
  );
}