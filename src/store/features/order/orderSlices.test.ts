import { OrderedMac, Order } from "../../../data/types";
import { orderReducer } from "./orderSlice";
import { addToOrderActionCreator } from "./orderSlice";

describe("Given an orderSlice", () => {
  describe("When it receives a mac and it is called with addToOrder action", () => {
    test("Then it should return the updated order list with the ordered macs", () => {
      const newOrder = {
        id: "123",
        listOfProducts: [],
        customer: "Rouman",
        state: true,
      };
      const orderedMacCool: OrderedMac = {
        id: "123",
        productName: "Mac Cool",
        price: 12345,
        image: "toGuapod.jpg",
      };

      const addOrderedMacs = addToOrderActionCreator(orderedMacCool);
      const expectedResult = {
        id: "123",
        listOfProducts: [orderedMacCool],
        customer: "Rouman",
        state: true,
      };

      const obtainedResult: Order = orderReducer(newOrder, addOrderedMacs);
      expect(obtainedResult).toStrictEqual(expectedResult);
    });
  });
});
