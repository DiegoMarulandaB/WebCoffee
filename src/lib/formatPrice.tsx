// export function formatPrice(price: number) {
//   const priceFormated = new Intl.NumberFormat("es-ES", {
//     style: "currency",
//     currency: "EUR",
//   });

//   const finalPrice = priceFormated.format(price);

//   return finalPrice;
// }


//!chat dolar

export function formatPrice(price: number) {
  const priceFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const finalPrice = priceFormatted.format(price);

  return finalPrice;
}
