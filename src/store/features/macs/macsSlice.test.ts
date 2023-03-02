import { MacsStructure } from "../../../data/types";
import { loadMacsActionCreator, macsReducer } from "./macsSlice";

describe("Given a macsReducer function", () => {
  describe("When it receives an initial empty list and it is called with a loadMacsActionCreator", () => {
    test("Then it should return a list with two macs", () => {
      const initialMacsList: MacsStructure = [];

      const macs = [
        {
          id: "123213",
          productName: "Mac air Expensive",
          price: 1345,
          image: "mac_toguapoh.jpeg",
          isAvailable: true,
        },
        {
          id: "123215",
          productName: "Mac Intosh Posh",
          price: 2345,
          image: "macky.toguapoh",
          isAvailable: false,
        },
      ];

      const loadMacsAction = loadMacsActionCreator(macs);
      const expectedResult = macs;

      const newMacsList = macsReducer(initialMacsList, loadMacsAction);

      expect(newMacsList).toStrictEqual(expectedResult);
    });
  });
});
