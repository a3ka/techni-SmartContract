import { ethers } from "hardhat";

async function main() {
  const SuperMarioWorld = await ethers.getContractFactory(
    "SuperMarioWorldCollection"
  );
  const superMarioWorld = await SuperMarioWorld.deploy(
    "SuperMarioWorldCollection",
    "SPWC"
  );

  await superMarioWorld.deployed();

  console.log("SuperMarioWorld deployed to:", superMarioWorld.address);

  await superMarioWorld.mint(10000);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
