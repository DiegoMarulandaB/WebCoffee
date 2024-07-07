import { useCart } from "@/components/hooks/use-cart";
import { makePaymentRequest } from "@/page/api/payment";
import { loadStripe } from "@stripe/stripe-js";
import { formatPrice } from "@/lib/formatPrice";

// Mock dependencies
jest.mock("@/components/hooks/use-cart");
jest.mock("@/page/api/payment");
jest.mock("@stripe/stripe-js");
jest.mock("@/lib/formatPrice");

export const mockItems = [
  { id: 1, attributes: { price: 1000, name: "Coffee 1" } },
  { id: 2, attributes: { price: 2000, name: "Coffee 2" } },
];

beforeEach(() => {
  (useCart as unknown as jest.Mock).mockReturnValue({
    items: mockItems,
    removeAll: jest.fn(),
  });
  (makePaymentRequest.post as jest.Mock).mockResolvedValue({
    data: {
      stripeSession: {
        id: "sessionId",
      },
    },
  });
  (loadStripe as jest.Mock).mockResolvedValue({
    redirectToCheckout: jest.fn().mockResolvedValue({}),
  });
  (formatPrice as jest.Mock).mockImplementation(
    (price: number) => `$${(price / 100).toFixed(2)}`
  );
});
