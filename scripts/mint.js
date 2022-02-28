const { PUBLIC_KEY, CONTRACT_ADDRESS } = process.env;

const hre = require("hardhat");

async function mint(amount) {
    const CraigCoin = await hre.ethers.getContractFactory("CraigCoin");

    const craigCoin = await CraigCoin.attach(CONTRACT_ADDRESS); 

    console.log("Minting 100 CraigCoin...");
    
    await craigCoin.mint(PUBLIC_KEY, amount);

    console.log("Token Address:", craigCoin.address);
    console.log("Amount Minted:", amount);
}

const mintAmount = (100 * (10**18)).toString();

mint(mintAmount)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});
