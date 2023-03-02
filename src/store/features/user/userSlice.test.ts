import {
  selectMacActionCreator,
  unselectMacActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userSlice", () => {
  const macAir = {
    id: "12",
    productName: "Mac air Expensive",
    price: 1345,
    image: "mac_toguapoh.jpeg",
    isAvailable: true,
  };
  const macIntosh = {
    id: "15",
    productName: "Mac Intosh Posh",
    price: 2345,
    image: "macky.toguapoh",
    isAvailable: false,
  };
  const initalMacsList = [macAir, macIntosh];

  describe("When it receives and list with two macs and it is called with a selectMac action to select the mac with id '12'", () => {
    test("Then, it should return a list with only the mac which id is '12'", () => {
      const selectMacsAction = selectMacActionCreator(macAir.id);
      const expectedResult = [macAir];

      const newMacsList = userReducer(initalMacsList, selectMacsAction);
      expect(newMacsList).toStrictEqual(expectedResult);
    });
  });

  describe("When it receives and list with two macs and it is called with an unselectMac action to unselect the mac with id '12'", () => {
    test("Then, it should return a list with only the mac which id it is not '12'", () => {
      const selectMacsAction = unselectMacActionCreator(macAir.id);
      const expectedResult = [macIntosh];

      const newMacsList = userReducer(initalMacsList, selectMacsAction);
      expect(newMacsList).toStrictEqual(expectedResult);
    });
  });
});
