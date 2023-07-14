/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTS=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_eyeColor,_shiftType,_bling) {
        const NFT={
            "name":_name,
            "eyeColor":_eyeColor,
            "shiftType":_shiftType,
            "bling":_bling
        }
        NFTS.push(NFT);
        console.log("Minted :\t\t"+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTS.length;i++){
        console.log("Name :\t\t\t"+NFTS[i].name);
        console.log("EyeColor :\t\t"+NFTS[i].eyeColor);
        console.log("ShiftType :\t\t"+NFTS[i].shiftType);
        console.log("Bling :\t\t\t"+NFTS[i].bling);
        console.log();
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("total NFTS = ",NFTS.length);
}

// call your functions below this line


mintNFT("Madhav","Brown","T-Shirt","braclet");
mintNFT("Sunil", "Red", "Shirt", "Diamond Necklace");
mintNFT("Ashutosh Jha", "Purple", "Jeans", "Silver Ring");
listNFTs();
getTotalSupply();

