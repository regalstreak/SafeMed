import web3 from "./getWeb3";
import Factory from "./build/Factory.json";

const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface), "0xe297f99147f33ba11f98d84f575094a6b3a138e6"
);

export default instance;
