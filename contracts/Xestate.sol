pragma solidity ^0.5.6;
pragma experimental ABIEncoderV2;

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
        address[] reported; // 나중에 수정 필
        uint[] reviewIndex;
    }
    
    // Review Structure
    struct Review {
        address auth;
        uint roomIndex;
        uint8 stars;
        // string reason;
    }
    
    // Lessor Structure
    struct Lessor {
        string name;
        uint32[] registRoom;
        uint[] reviewIndex;
        uint8[] reported;
    }
    
    // Lessee Structure
    struct Lessee {
        string name;
        uint32[] rentRoomList;
    }
    
    // All Room Array
    mapping (uint => Room) public rooms;
    uint roomIndex;
    
    // All Review mapping
    mapping (uint => Review) public reviews;
    uint reviewIndex;
    
    // lessor Information by Address
    mapping (address => Lessor) public lessors;
    
    // Lessee Information by Address
    mapping (address => Lessee) public lessees;
    
    // wallet
    mapping (address => uint) public balanceOf;
    
    
    /*
        Token Setting
    */
    
    uint initialTokenNumber;
    uint XST;
    
    // orner
    address orner;
    
    
    
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

    //
    uint8 constant MAX_STARS = 5;


    
    /*
        Functions
    */
    
    constructor(uint _initNum) public {
        initialTokenNumber = _initNum;
        orner = msg.sender;
        balanceOf[msg.sender] = initialTokenNumber;
    }
    
    
    
    // 회원 가입
    /// 회원 가입을 위한 트랜잭션 입니다.
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
            Lessor memory _lessor = Lessor(_userName, new uint32[](0), new uint[](0), new uint8[](0));
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
    /// 매물을 등록하기 위한 트랜잭션 입니다.
    function RegistRoom(string memory _addr, uint32 _deposit, uint32 _monthly, 
        uint8 _progress, uint8 _roomType) public returns (bool) {
            
        // require(bytes(lessors[msg.sender].name).length != 0 , "Lessor has not exist");
        Room memory _room = Room({
            registLessor: msg.sender,
            addr: _addr,
            deposit: _deposit,
            monthlyPayment: _monthly,
            progress: _progress,
            roomType: _roomType,
            reported: new address[](0),
            reviewIndex: new uint[](0)
        });
        rooms[roomIndex++] = _room;
        
        return true;
    }

    // 리뷰 등록
    /// 리뷰를 등록하기 위한 트랜잭션 입니다.
    function RegistReview(uint _roomId, uint8 _stars) public returns (bool) {
        // require(bytes(lessees[msg.sender].name).length != 0,"Lessee has not exist");
        require(_stars <= MAX_STARS, "star too much");
        Review memory _review = Review({
            auth: msg.sender,
            roomIndex: _roomId,
            stars: _stars
        });
        
        rooms[_roomId].reviewIndex.push(reviewIndex);
        reviews[reviewIndex++] = _review;
    }
    
    // 매물 신고 // 수정
    function ReportRoom(uint _roomId) public returns (bool) {
        rooms[_roomId].reported.push(msg.sender);
    }
    
    // 매물 조회
    function GetRoom(uint _roomId) public view returns (Room memory) {
        return rooms[_roomId];
    }
    
    // 리뷰 조회
    function GetReviews(uint _roomId) public view returns (Review[] memory) {
        Room memory _room = rooms[_roomId];
        Review[] memory _reviews = new Review[](_room.reviewIndex.length);

        for (uint i = 0; i < _room.reviewIndex.length; i++) {
            _reviews[i] = reviews[_room.reviewIndex[i]];
        }
        
        return _reviews;
    }
    
    //
    function _tokenTransfer(address _from, address _to, uint _value) private returns (bool) {
        require(balanceOf[_from] >= _value, "your balance is too low");
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
    }
    
    // // lessor 체크
    // function _checkLessor() private view returns(bool) {
        
    // }
}