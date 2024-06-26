// import { useCart } from "@/components/hooks/use-cart";
// import { makePaymentRequest } from "@/page/api/payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { formatPrice } from "@/lib/formatPrice";

// // Mock dependencies
// jest.mock("@/components/hooks/use-cart");
// jest.mock("@/page/api/payment");
// jest.mock("@stripe/stripe-js");
// jest.mock("@/lib/formatPrice");

// export const mockItems = [
//   { id: 1, attributes: { price: 1000, name: "Coffee 1" } },
//   { id: 2, attributes: { price: 2000, name: "Coffee 2" } },
// ];

// beforeEach(() => {
//   (useCart as unknown as jest.Mock).mockReturnValue({
//     items: mockItems,
//     removeAll: jest.fn(),
//   });
//   (makePaymentRequest.post as jest.Mock).mockResolvedValue({
//     data: {
//       stripeSession: {
//         id: "sessionId",
//       },
//     },
//   });
//   (loadStripe as jest.Mock).mockResolvedValue({
//     redirectToCheckout: jest.fn().mockResolvedValue({}),
//   });
//   (formatPrice as jest.Mock).mockImplementation(
//     (price: number) => `$${(price / 100).toFixed(2)}`
//   );
// });


//! chat 0 bueno

// import { useCart } from "@/components/hooks/use-cart";
// import { makePaymentRequest } from "@/page/api/payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { formatPrice } from "@/lib/formatPrice";

// // Mock dependencies
// jest.mock("@/components/hooks/use-cart");
// jest.mock("@/page/api/payment");
// jest.mock("@stripe/stripe-js");
// jest.mock("@/lib/formatPrice");

// import { mockItems } from "@/mock/mock"; // Importar mockItems desde otro archivo si es necesario

// beforeEach(() => {
//   (useCart as jest.MockedFunction<typeof useCart>).mockReturnValue({
//     items: mockItems,
//     removeAll: jest.fn(),
//   });

//   (makePaymentRequest.post as jest.Mock).mockResolvedValue({
//     data: {
//       stripeSession: {
//         id: "sessionId",
//       },
//     },
//   });

//   (loadStripe as jest.Mock).mockResolvedValue({
//     redirectToCheckout: jest.fn().mockResolvedValue({}),
//   });

//   (formatPrice as jest.Mock).mockImplementation(
//     (price: number) => `$${(price / 100).toFixed(2)}`
//   );
// });


//! chat 00 bueno pero con error

// import { useCart } from "@/components/hooks/use-cart";
// import { makePaymentRequest } from "@/page/api/payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { formatPrice } from "@/lib/formatPrice";
// import { mockItems } from "@/mock/mock"; // Asegúrate de ajustar la ruta según la ubicación real

// // Mock dependencies
// jest.mock("@/components/hooks/use-cart");
// jest.mock("@/page/api/payment");
// jest.mock("@stripe/stripe-js");
// jest.mock("@/lib/formatPrice");

// beforeEach(() => {
//   (useCart as jest.MockedFunction<typeof useCart>).mockReturnValue({
//     items: mockItems,
//     removeAll: jest.fn(),
//   });

//   (makePaymentRequest.post as jest.Mock).mockResolvedValue({
//     data: {
//       stripeSession: {
//         id: "sessionId",
//       },
//     },
//   });

//   (loadStripe as jest.Mock).mockResolvedValue({
//     redirectToCheckout: jest.fn().mockResolvedValue({}),
//   });

//   (formatPrice as jest.Mock).mockImplementation(
//     (price: number) => `$${(price / 100).toFixed(2)}`
//   );
// });


//! chat importaciones

// import { useCart } from "@/components/hooks/use-cart";
// import { makePaymentRequest } from "@/page/api/payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { formatPrice } from "@/lib/formatPrice";
// // import { mockItems } from "././src/mock/mock"; // Asegúrate de ajustar la ruta según la ubicación real

// // Mock dependencies
// jest.mock("@/components/hooks/use-cart");
// jest.mock("@/page/api/payment");
// jest.mock("@stripe/stripe-js");
// jest.mock("@/lib/formatPrice");

// beforeEach(() => {
//   (useCart as jest.MockedFunction<typeof useCart>).mockReturnValue({
//     items: mockItems,
//     removeAll: jest.fn(),
//   });

//   (makePaymentRequest.post as jest.Mock).mockResolvedValue({
//     data: {
//       stripeSession: {
//         id: "sessionId",
//       },
//     },
//   });

//   (loadStripe as jest.Mock).mockResolvedValue({
//     redirectToCheckout: jest.fn().mockResolvedValue({}),
//   });

//   (formatPrice as jest.Mock).mockImplementation(
//     (price: number) => `$${(price / 100).toFixed(2)}`
//   );
// });


//! chat 1 no tan bueno

// const { useCart } = require("@/components/hooks/use-cart");
// const { makePaymentRequest } = require("@/page/api/payment");
// const { loadStripe } = require("@stripe/stripe-js");
// const { formatPrice } = require("@/lib/formatPrice");

// // Mock dependencies
// jest.mock("@/components/hooks/use-cart");
// jest.mock("@/page/api/payment");
// jest.mock("@stripe/stripe-js");
// jest.mock("@/lib/formatPrice");

// const mockItems = [
//   { id: 1, attributes: { price: 1000, name: "Coffee 1" } },
//   { id: 2, attributes: { price: 2000, name: "Coffee 2" } },
// ];

// beforeEach(() => {
//   useCart.mockReturnValue({
//     items: mockItems,
//     removeAll: jest.fn(),
//   });
//   makePaymentRequest.post.mockResolvedValue({
//     data: {
//       stripeSession: {
//         id: "sessionId",
//       },
//     },
//   });
//   loadStripe.mockResolvedValue({
//     redirectToCheckout: jest.fn().mockResolvedValue({}),
//   });
//   formatPrice.mockImplementation((price) => `$${(price / 100).toFixed(2)}`); // Especificación explícita del tipo de price como number
// });

// module.exports = {
//   mockItems,
// };


//!chat 8383494

// setupTest.ts

// Importar jest-dom para extensiones de expectativas
// import '@testing-library/jest-dom/extend-expect';

// // Configurar Jest para trabajar con TypeScript y permitir el uso de módulos ES6
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
