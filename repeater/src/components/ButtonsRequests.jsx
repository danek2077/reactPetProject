import React from "react";

const ButtonsRequests = React.memo(({ setPagNumber, setList }) => {
  const [items, setItems] = React.useState([]);
  const btnSendRequest = React.useCallback(
    (i) => {
      setPagNumber(i);
      setList([]);
    },
    [setList, setPagNumber]
  );
  React.useEffect(() => {
    const forsetitems = [];
    for (let i = 0; i < 100; i = i + 10) {
      let number = 1;
      if (i !== 0) {
        number = i + 1;
      }
      forsetitems.push(
        <button onClick={() => btnSendRequest(i)} className="mr-2" key={i + 20}>
          {`${number} - ${i + 10}`}
        </button>
      );
      setItems(forsetitems);
    }
  }, [btnSendRequest]);

  return <div className="mb-10">{items}</div>;
});

export default ButtonsRequests;
