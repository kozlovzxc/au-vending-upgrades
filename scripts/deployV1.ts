import { ethers, upgrades } from "hardhat";

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.waitForDeployment();
  
  const proxyAddress = await proxy.getAddress()
  console.log('Proxy deployed to', proxyAddress);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
  console.log('Contract deployed to', implementationAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
