import { calculateBill } from "../../main/bill/calculateBill.js";
describe("calculateBill", () => {
  test("calculateBill returns a number", () => {
    const customer = "Dealer";
    const adAmount = 10;
    const enhancements = [];
    const actual = calculateBill(customer, adAmount, enhancements);
    expect(typeof actual).toBe("number");
  });
  test("calculateBill does not mutate given arguments", () => {
    const customer = "Dealer";
    const adAmount = 10;
    const enhancements = ["Ad Boost"];
    calculateBill(customer, adAmount, enhancements);
    expect(customer).toBe("Dealer");
    expect(adAmount).toBe(10);
    expect(enhancements).toStrictEqual(["Ad Boost"]);
  });

  test("calculateBill correctly calculates bill with no ads and no enhancements", () => {
    const customer = "Dealer";
    const adAmount = 0;
    const enhancements = [];
    const actual = calculateBill(customer, adAmount, enhancements);
    expect(actual).toBe(0);
  });

  test("calculateBill correctly calculates bill with ads but no enhancements", () => {
    const customer = "Private";
    const adAmount = 10;
    const enhancements = [];
    const actual = calculateBill(customer, adAmount, enhancements);
    expect(actual).toBe(200);
  });

  test("calculateBill correctly calculates bill with ads and multiple enhancements", () => {
    const customer = "Private";
    const adAmount = 10;
    const enhancements = ["Ad Boost", "Extra images", "Verified Profile"];
    const actual = calculateBill(customer, adAmount, enhancements);
    expect(actual).toBe(230);
  });


  // Tests for Activity 4/5, using the GWT testing convention with specific examples

  //YUNA CARS
  test("given a dealer has 20 adverts with one enhancement, when the month's bill is generated  then the total will be 1010", () => {
    const customer = "Dealer";
    const adAmount = 20;
    const enhancements = ["Change background colour"];
    const actual = calculateBill(customer, adAmount, enhancements);
    expect(actual).toBe(1010);
  });


//SUPER CAR MARKET
test("given a dealer has 1000 adverts with one enhancement, when the month's bill is generated then the total will be 50010", () => {
  const customer = "Dealer";
  const adAmount = 1000;
  const enhancements = ["Highlighted border"];
  const actual = calculateBill(customer, adAmount, enhancements);
  expect(actual).toBe(50010);
});

//KAYLIA
test("given a private dealer has 3 adverts with two enhancements, when the month's bill is generated then the total will be 70", () => {
  const customer = "Private";
  const adAmount = 3;
  const enhancements = ["Ad boost", "Virtual tour"];
  const actual = calculateBill(customer, adAmount, enhancements);
  expect(actual).toBe(80);
});

//JAN
test("given a private dealer has 1 adverts with one enhancement, when the month's bill is generated then the total will be 20", () => {
  const customer = "Private";
  const adAmount = 1;
  const enhancements = ["Extra images"];
  const actual = calculateBill(customer, adAmount, enhancements);
  expect(actual).toBe(30);
});

});
