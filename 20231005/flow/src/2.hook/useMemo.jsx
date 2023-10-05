import { useMemo, useState } from "react";

const Memo = () => {
  const [hardNumber, setHartdNumber] = useState(1);
  const [easyNumber, setEastNumber] = useState(1);

  const hardCalcuate = (number) => {
    console.log("Hard!");
    for (let i = 0; i < 99999999; i++) return number + 10000;
  };
  const easyCalcuate = (number) => {
    console.log("Easy!");
    return number + 1;
  };

  //   const hardSum = hardCalcuate(hardNumber);
  const hardSum = useMemo(() => {
    hardCalcuate(hardNumber);
  }, [hardNumber]);
  //hardNumber 실행시 랜더링이 됨 하드! 이지! 둘다나오고

  const easySum = easyCalcuate(easyNumber);
  // 얘만 클릭하면 이지만 나옴!
  return (
    <>
      <p>어려운 계산기</p>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHartdNumber(parseInt(e.target.value))}
      />
      <span>+ 10000 = {hardSum}</span>

      <p>쉬운 계산기</p>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEastNumber(parseInt(e.target.value))}
      />
      <span>+ 1 = {easySum}</span>
    </>
  );
};
export default Memo;
