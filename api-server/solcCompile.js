//SyntaxError: Invalid or unexpected token 에러 > 메모장에 옮긴 뒤 복붙
const path = require("path");
const fs = require("fs");
const solc = require("solc");
​
// compile 할 solidity 파일명과 contract 이름
const fileName = "Xestate.sol";
const contractName = "Xestate";
​
const filePath = path.join(__dirname, "/../contracts/", fileName);
const contractCode = fs.readFileSync(filePath, "utf-8");
​
var input = {
  language: "Solidity",
  sources: {
    // 여기에 contract 파일명은 변수로 입력하면 안되고, string으로 입력해주세요.
    "Xestate.sol": { content: contractCode },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
​
// output에 compile된 결과물이 모두 들어있으니 구조체에 들어간 값 하나씩 확인하고 필요한 값 쓰면 됩니다.
var output = JSON.parse(solc.compile(JSON.stringify(input)));
​
// // contract 배포할 때 사용할 코드와 contract call 할 때 사용할 abi 입니다.
var deployCode =
  output.contracts[fileName][contractName]["evm"]["bytecode"]["object"];
var abi = output.contracts[fileName][contractName]["abi"];
​
