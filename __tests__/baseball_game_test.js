var {sumOfScores} = require("../baseball_game/index");

describe("Should return the sum of all the scores on the record", () => {

    test("[5, 2, C, D, +] should return 30", () => {
        var result = sumOfScores(d);
        expect(result).toEqual(30);
    });  

    test("[5, -2, 4, C, D, 9, +, +] should return 27", () => {
        var result = sumOfScores(d);
        expect(result).toEqual(27);
    });  

    test("[1] should return 1", () => {
        var result = sumOfScores(d);
        expect(result).toEqual(1);
    });  

});
