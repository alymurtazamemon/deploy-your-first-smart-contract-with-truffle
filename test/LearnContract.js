const LearnContract = artifacts.require("LearnContract");

contract("Function: ", () => {
    let learnContract;

    beforeEach(async () => {
        learnContract = await LearnContract.new();
    });

    it("should print the name of deployer.", async () => {
        const result = await learnContract.getDeployer();
        assert.equal(result, "Ali Murtaza");
    });
});