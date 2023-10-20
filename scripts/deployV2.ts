import { ethers, upgrades } from "hardhat";

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
  const proxy = await upgrades.upgradeProxy('0x64cE0A355692e24018Cf6BD355036f778BCb87Ae', VendingMachineV2);
  await proxy.waitForDeployment()
  
  const proxyAddress = await proxy.getAddress()
  console.log('Proxy deployed to', proxyAddress);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
  console.log('Contract deployed to', implementationAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
