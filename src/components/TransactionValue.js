export default function TransactionValue({ transaction }) {
  let value = "";
  const transactions = Object.entries(transaction);
  transactions.forEach((transaction) => {
    transaction.forEach((item) => {
      if (item.type === "u128") {
        value = item.value;
      }
    });
  });
  return <span>{value}</span>;
}
