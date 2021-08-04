pragma solidity ^0.5.0;

contract Marketplace {
    struct Attribute {
        bytes32 catatan;
        bool purchased;
    }

    mapping(bytes32 => Attribute) records;

    constructor() public {}

    function record(
        bytes32 nama,
        bytes32 storageCapacity,
        bytes32 hardiskType,
        bytes32 hardiskVersion,
        bytes32 read,
        bytes32 write,
        bytes32 price,
        bytes32 catatan
    ) public {
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
        records[encryptedBytes].catatan = catatan;
        records[encryptedBytes].catatan = catatan;
        records[encryptedBytes].purchased = false;
    }
}
