pragma solidity ^0.5.6;

/*
  * storage variables *
  Count contract has 2 public storage variables.

  1) count - By default, count's value is 0,
             it could increase or decrease through `plus` or `minus` function.
  2) lastParticipant - lastParticipant is last person's address
                       who sent a transaction(called plus or minus) to Count contract.
  Count contract.

  * functions *
  Count contract has 2 public functions.
  1) plus - increase `count` storage variable by 1. (+1)
  2) minus - decrease `count` storage variable by 1. (-1)
 */

contract Xestate {
    
    // Room Structure
    struct Room {
        address registLessor; 
        string addr;
        uint32 deposit;
        uint32 monthlyPayment;
        uint8 progress;
        uint8 roomType;
        uint8 reported;
        mapping (address => Review) review;
    }
    
    // Review Structure
    struct Review {
        // address auth;
        uint8 stars;
        string reason;
    }
    
    // Lessor Structure
    struct Lessor {
        string name;
        uint32[] registRoom;
        mapping (address => Review) review;
        uint8[] reported;
    }
    
    // Lessee Structure
    struct Lessee {
        string name;
        uint32[] rentRoomList;
    }
    
    // All Room Array
    Room[] public rooms;
    
    // lessor Information by Address
    mapping (address => Lessor) public lessors;
    
    // Lessee Information by Address
    mapping (address => Lessee) public lessees;
    
    
    
    
    /*
        constant
    */
    
    // 임대인 상수
    uint8 constant LESSOR = 0;
    
    // 임차인 상수
    uint8 constant LESSEE = 1;
    
    // 
    uint8 constant ROOM_PROGRESS_BEFORE_RENT = 1;
    uint8 constant ROOM_PROGRESS_CONTRACTING = 2;
    uint8 constant ROOM_PROGRESS_RENTING = 4;




    
    /*
        Functions
    */
    
    // 회원 가입
    function Signup(uint8 _userType, string memory _userName) public returns(string memory) {
        // switch(_userType) {
        //     case LESSOR: {
                
        //     } break;
        //     case LESSEE: {
                
        //     } break;
        // }
        if(_userType == LESSEE) {
            
            // 기존 가입자 판별은 서버에서 하기 때문에 여기서 따로 하지 않는다
            Lessee memory _lessee = Lessee(_userName, new uint32[](0));
            lessees[msg.sender] = _lessee;
            return "lessee signup success";
        } else if (_userType == LESSOR) {
            Lessor memory _lessor = Lessor(_userName, new uint32[](0), new uint8[](0));
            lessors[msg.sender] = _lessor;
            return "lessor signup success";
        }
        return "signup failer";
    }

    // 매물 등록
    // /**
    // * @param {string} _addr 
    // * @param {uint32} _deposit
    // * @param {uint32} _monthly
    // * @param {uint8}  _progress
    // * @param {uint8}  _roomType
    // * @return {bool}  success
    // */
    function RegistRoom(string memory _addr, uint32 _deposit, uint32 _monthly, 
        uint8 _progress, uint8 _roomType) public returns(bool) {
        // require(bytes(lessors[msg.sender].name).length != 0 , "Lessor has not exist");
        Room memory _room = Room({
            registLessor: msg.sender,
            addr: _addr,
            deposit: _deposit,
            monthlyPayment: _monthly,
            progress: _progress,
            roomType: _roomType,
            reported: 0
        });
        rooms.push(_room);
        
        return true;
    }

    // 리뷰 등록
    function RegistReview(uint _roomId, uint8 _stars, string memory _reason) public returns(bool) {
        require(bytes(lessees[msg.sender].name).length != 0,"Lessee has not exist");
        Review memory _review = Review({
            stars: _stars,
            reason: _reason
        });
        rooms[_roomId].review[msg.sender] = _review;
    }
    
    // // lessor 체크
    // function _checkLessor() private view returns(bool) {
        
    // }
}