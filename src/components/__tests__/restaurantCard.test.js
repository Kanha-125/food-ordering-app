import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardmock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render restaurantCard  component with react props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("EatFit");

  expect(resName).toBeInTheDocument();
});
