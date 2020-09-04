import {Room} from '../../model/room';
import {Lessor} from '../../model/lessor';


/**
 * 
 * response, reply 인 res 인자는 사용하지 않습니다.
 * fastify는 옵션으로 json 스키마를 검증하는 기능을 내장하고 있습니다.
 * 따라서 스키마 검증은 따로 작성합니다.
 * 서버 사이드 랜더링은 사용하지 않습니다. 
 * return은 json형식만 반환합니다.
 * 
 */



/**
 * 테스트용 코드
 * DB를 지우고 다시 시작했을 때, 매물이 하나도 없으니 예제 3개를 만들어서
 * 등록해주는 함수
 */
const createRoomList = async () => {
    try{
        const one = new Room({
            name: 'one', roomType: 1, address: '청계산', deposit: 1000,
            monthlyPayment: 10,
        });
        const two = new Room({
            name: 'two', roomType: 1, address: '정원', deposit: 1000,
            monthlyPayment: 10,
        });
        const three = new Room({
            name: 'three', roomType: 1, address: '집앞', deposit: 1000,
            monthlyPayment: 10,
        });
        await Room.Save(one);
        await Room.Save(two);
        await Room.Save(three);
        return true
    } catch (e) {
        console.log(e);
        return e;
    }
}

/**
 * 
 * @param {*} req request 요청 객체
 * @return {json} Room json 파일 형식
 */
const readRoom = async (req, res) => {
    try {

        // (디버그용) 등록된 매물이 없을 경우, 
        // 매물 3개를 임의 등록한다.
        const firstId = await Room.findByRoomId(0);
        if (firstId == undefined) {
            await createRoomList();
        }
        const room = await Room.findByRoomId(req.params.id);
        return room;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const readRoomList = async (req, res) => {
    try {
        const firstId = await Room.findByRoomId(0);
        if (firstId == undefined) {
            await createRoomList();
        }
        let page = req.query.page;
        let list = await Room.getRoomList(page);
        console.log(list);
        return list;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const createRoom = async (req, res) => {
    try {
        // 현재는 이름으로 찾아서 할당해준다
        // let Lessor = await Lessor.findByLessorName(req.body.LessorName);
        // if(Lessor == undefined) {
        //     console.log('브로커가 아니라서 매물 등록을 하지 못합니다 || ' + Lessor);
        //     return null;
        // }
        const newRoom = new Room({...req.body});
        return await Room.Save(newRoom);
    } catch (e) {
        console.log(e);
        return e;
    }
}

const deleteRoom = async (req, res) => {
    try {

    } catch (e) {
        
    }
}

const updateRoom = async (req, res) => {
    try {

    } catch (e) {
        
    }
}

const reportRoom = async (req, res) => {
    try {
        let room = await Room.findByRoomId(req.params.id);
        
        if (!room) return null;
        room.reported.push({reason: req.body.reason});
        return await Room.Save(room);
    } catch (e) {
        console.log(e);
        return e;
    }
}

export  {
    readRoom,
    createRoom,
    deleteRoom,
    updateRoom,
    readRoomList,
    reportRoom,
};