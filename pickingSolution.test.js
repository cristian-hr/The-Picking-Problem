const { expect } = require("chai")
const { articlePicking } = require("./pickingSolution")
const data = require("./pickingData.js")

const { scenario1, scenario2, scenario3, scenario4 } = data

describe("Picking Problem Test", () => {

    it("Should return [345048] in Scenario 1", () => {
        expect(articlePicking(scenario1)).to.deep.equal([345048])
    })

    it("Should return [790952, 103678, 788138, 802358] in Scenario 2", () => {
        expect(articlePicking(scenario2)).to.deep.equal([790952, 103678, 788138, 802358])
    })

    it("Should return [103678, 790952, 802358, 788138] in Scenario 3", () => {
        expect(articlePicking(scenario3)).to.deep.equal([103678, 790952, 802358, 788138])
    })

    it("Should return [790952, 103678, 802358, 562873] in Scenario 4", () => {
        expect(articlePicking(scenario4)).to.deep.equal([790952, 103678, 802358, 562873])
    })
})