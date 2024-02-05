import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        // Update the state with the fetched data
        setData(res[currency]);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        // You might want to handle errors by updating the state accordingly
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
