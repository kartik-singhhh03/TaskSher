export const stripeConfig = {
  products: [
    {
      id: 'prod_Sa4WGPZE2cvKNP',
      name: 'TaskSher Saas',
      description: 'Automation tool',
      priceId: 'price_1ReuN6FsCcBbd2XUE5ajVe9t',
      mode: 'subscription' as const,
      price: 29.00,
      currency: 'USD',
      interval: 'month' as const,
    },
  ],
} as const;

export type Product = typeof stripeConfig.products[number];