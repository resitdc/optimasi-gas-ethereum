pragma solidity ^0.5.0;

contract Marketplace {
    uint256 public productCount = 0;
    mapping(uint256 => Product) public productsOld;
    mapping(bytes32 => Attribute) public products;
    struct Attribute {
        bytes32 catatan;
        bool purchased;
    }

    struct Product {
        uint256 id;
        string nama;
        uint256 storageCapacity;
        string hardiskType;
        string hardiskVersion;
        uint256 read;
        uint256 write;
        uint256 price;
        string catatan;
        bool purchased;
    }

    event ProductCreated(
        uint256 id,
        string nama,
        uint256 storageCapacity,
        string hardiskType,
        string hardiskVersion,
        uint256 read,
        uint256 write,
        uint256 price,
        string catatan,
        bool purchased
    );

    constructor() public {}

    function bytes32ToStr(bytes32 _bytes32) public pure returns (string memory) {
        bytes memory bytesArray = new bytes(32);
        for (uint256 i; i < 32; i++) {
            bytesArray[i] = _bytes32[i];
            }
        return string(bytesArray);
    }

    function createProductOptimized(
        bytes32 nama,
        bytes32 storageCapacity,
        bytes32 hardiskType,
        bytes32 hardiskVersion,
        bytes32 read,
        bytes32 write,
        bytes32 price,
        bytes32 catatan
    ) public {
        productCount++;

        bytes32 encryptedBytes = keccak256(
            abi.encodePacked(
                nama,
                storageCapacity,
                hardiskType,
                hardiskVersion,
                read,
                write,
                price
            )
        );
        products[encryptedBytes].catatan = catatan;
        products[encryptedBytes].catatan = catatan;
        products[encryptedBytes].purchased = false;
        
        string memory _nama = bytes32ToStr(nama);
        uint256 _storageCapacity = uint256(storageCapacity);
        string memory _hardiskType = bytes32ToStr(hardiskType);
        string memory _hardiskVersion = bytes32ToStr(hardiskVersion);
        uint256 _read = uint256(read);
        uint256 _write = uint256(write);
        uint256 _price = uint256(price);
        string memory _catatan = bytes32ToStr(catatan);

        emit ProductCreated(
            productCount,
            _nama,
            _storageCapacity,
            _hardiskType,
            _hardiskVersion,
            _read,
            _write,
            _price,
            _catatan,
            false
        );
    }

    function createProduct(
        string memory nama,
        uint256 storageCapacity,
        string memory hardiskType,
        string memory hardiskVersion,
        uint256 read,
        uint256 write,
        uint256 price,
        string memory catatan
    ) public {
        require(price > 0);
        productCount++;

        productsOld[productCount] = Product(
            productCount,
            nama,
            storageCapacity,
            hardiskType,
            hardiskVersion,
            read,
            write,
            price,
            catatan,
            false
        );
        
        emit ProductCreated(
            productCount,
            nama,
            storageCapacity,
            hardiskType,
            hardiskVersion,
            read,
            write,
            price,
            catatan,
            false
        );

    }
}
