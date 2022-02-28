const { PUBLIC_KEY } = process.env;

const hre = require("hardhat");

async function burn(amount) {
    const CraigCoin = await hre.ethers.getContractFactory("CraigCoin");

    const craigCoin = await CraigCoin.attach("0x8898e15bd345e4481567e2c4663b9102e6b305dc"); 

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
