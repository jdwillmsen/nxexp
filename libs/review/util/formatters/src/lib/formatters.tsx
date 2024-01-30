export const currencyFormat = (amount: number) => '$' + amount.toFixed(2);
export const ratingFormat = (rating: number | undefined) =>
  (rating === undefined ? '?' : rating.toFixed(0)) + '/5';
