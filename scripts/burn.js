const { PUBLIC_KEY, CONTRACT_ADDRESS } = process.env;

const hre = require("hardhat");

async function burn(amount) {
    const CraigCoin = await hre.ethers.getContractFactory("CraigCoin");

    const craigCoin = await CraigCoin.attach(CONTRACT_ADDRESS); 

    console.log("Burning 10 CraigCoin...");

    await craigCoin.burn(PUBLIC_KEY, amount);

    console.log("Token Address:", craigCoin.address);
    console.log("Amount Burned:", amount);
}

const burnAmount = (10 * (10**18)).toString();

burn(burnAmount)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});
