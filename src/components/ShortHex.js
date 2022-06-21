export default function ShortHex({ hex }) {
  return (
    <>
      {hex.slice(0, 6)}...{hex.slice(-6)}
    </>
  );
}
