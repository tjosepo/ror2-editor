import React, { useState } from 'react';
import SaveInput from './save-input';
import AchievementList from './achievement-list';

export default function Controller() {
  const [savedata, setSavedata] = useState<XMLDocument>();

  console.log(savedata);
  return (
    <>
      <SaveInput setSavedata={setSavedata} />
      {savedata && <AchievementList savedata={savedata} setSavedata={setSavedata} />}
    </>
  );
}