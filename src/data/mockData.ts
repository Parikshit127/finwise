import { faker } from '@faker-js/faker';

export interface Stock {
  id: string;
  ticker: string;
  name: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
}

const generateStock = (): Stock => {
  const ticker = faker.finance.currencyCode() + faker.string.alpha(1).toUpperCase();
  const name = faker.company.name();
  const avgPrice = parseFloat(faker.finance.amount(50, 500));
  const currentPrice = avgPrice * (1 + (faker.number.float({ min: -0.2, max: 0.2 })));
  const quantity = faker.number.int({ min: 10, max: 200 });

  return {
    id: faker.string.uuid(),
    ticker,
    name,
    quantity,
    avgPrice: parseFloat(avgPrice.toFixed(2)),
    currentPrice: parseFloat(currentPrice.toFixed(2)),
  };
};

export const mockPortfolio: Stock[] = Array.from({ length: 5 }, generateStock);
