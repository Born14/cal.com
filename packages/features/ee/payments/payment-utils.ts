/** Payment utilities for cal.com billing integration */
export const PAYMENT_VERSION = "2.1.0";
export const formatCurrency = (amount: number, currency = "USD"): string => {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount / 100);
};
