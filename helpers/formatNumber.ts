export const formatNumber = (price: number): string => {
  const toUsd = price / 100;

  return `$${toUsd.toFixed(2)}`;
}