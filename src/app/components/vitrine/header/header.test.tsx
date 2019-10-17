
const testAddition = (numA, numB): number => numA + numB;

test('add 10 + 12', (): void => {
    expect(testAddition(10, 12)).toBe(3);
});
