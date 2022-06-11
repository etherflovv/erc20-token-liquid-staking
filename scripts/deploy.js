async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("Bank");
    const token = await Token.deploy("xEtherFlow", "xETF", "0x2956540fb606180e37782657f683b15d7c633b79");
  
    console.log("Contract address:", token.address);
}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });