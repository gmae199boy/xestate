import fetch from 'node-fetch';
import { caver, ABI_JSON, ADDRESS } from '../../../caver';

const createAccount = async() => {
    try {

        // POST /v2/account
        let kasFetch = await fetch("https://wallet-api.beta.klaytn.io/v2/account", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // "X-Krn": "krn:1001:wallet:GC1:account:rp1",
                "X-Krn": "krn:1001:wallet:126:account:default",
                "Authorization": process.env.BASIC,
            },
            // timeout: 10,
        });
        return await kasFetch.json();
    } catch (e) {
        console.log(e);
        return e;
    }
}

const readAccount = async() => {
    try {

    } catch (e) {
        console.log(e);
        return e;
    }
}

const registRoomTransaction = async(_addr, _deposit, _monthly, _state, _roomType) => {
    try {
        const SC = new caver.klay.Contract(ABI_JSON, ADDRESS);
        const encodeABI = SC.methods.RegistRoom(
            _addr,
            _deposit.toString(),
            _monthly.toString(),
            _state.toString(),
            _roomType.toString()
        ).encodeABI();

        const body = {   
            "from": "0xcea46724a61a972439fa3dCd7476f7756c83Ea8b",
            "value": "0x0",
            "to": ADDRESS,
            "input": encodeABI,
            "submit": true,
        };

        // POST /v2/tx/contract/execute

        let kasFetch = await fetch("https://wallet-api.beta.klaytn.io/v2/tx/contract/execute", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Authorization": process.env.BASIC,
              "Content-Type": "application/json",
              "X-Krn": "krn:1001:wallet:126:account:default"
            },
          });
          return await kasFetch.json();
    } catch (e) {
        console.log(e);
        return e;
    }
        // let SC = new caver.klay.Contract(ABI_JSON, ADDRESS);
        // let BCResult = await SC.methods.RegistRoom(
        //     req.body.address,
        //     req.body.deposit,
        //     req.body.monthlyPayment,
        //     req.body.state,
        //     req.body.roomType,
        // ).send({
        //     from: '0x1C314C6A895E2242FAAE8FAa96E93b428AD8EDD1',
        //     gas: '3000000',
        // });
        // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ' + BCResult);
}

export {
    createAccount,
    readAccount,
    registRoomTransaction,
};