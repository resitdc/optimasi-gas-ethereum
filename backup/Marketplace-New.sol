pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint256 public productCount = 0;
    mapping(bytes32 => Attribute) public products;

    struct Attribute {
        bytes32 catatan;
        address payable owner;
        bool purchased;
    }

    mapping(bytes32 => Attribute) records;

    struct Product {
        uint256 id;
        string name;
        uint256 price;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        bytes32 catatan,
        address payable owner,
        bool purchased
    );

    event ProductCreatedNonOptimized(
        uint256 id,
        string name,
        uint256 price,
        address payable owner,
        bool purchased
    );

    event ProductCreatedOptimized(
        bytes32 id,
        bytes32 name,
        bytes32 price,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        bytes32 catatan,
        address payable owner,
        bool purchased
    );

    constructor() public {
        name = "ETH Marketplace";
    }

    // function record(
    //     bytes32 nama,
    //     bytes32 jk,
    //     bytes32 almt,
    //     bytes32 nohp,
    //     bytes32 email,
    //     bytes32 catatan,
    //     uint256 expiredtime
    // ) public {
    //     bytes32 encryptedBytes = keccak256(
    //         abi.encodePacked(nama, jk, almt, nohp, email)
    //     );
    //     records[encryptedBytes].catatan = catatan;
    //     records[encryptedBytes].expiredTime = expiredTime;
    // }

    // function createProductNonOptimized(string memory _name, uint256 _price)
    //     public
    // {
    //     // Require a valid name
    //     require(bytes(_name).length > 0);
    //     // Require a valid price
    //     require(_price > 0);
    //     // Increment product count
    //     productCount++;
    //     // Create the product
    //     products[productCount] = Product(
    //         productCount,
    //         _name,
    //         _price,
    //         msg.sender,
    //         false
    //     );
    //     // Trigger an event
    //     emit ProductCreated(productCount, _name, _price, msg.sender, false);
    // }

    function createProduct(
        bytes32 _name,
        bytes32 _price,
        bytes32 _catatan
    ) public {
        bytes32 encryptedBytes = keccak256(abi.encodePacked(_name, _price));

        products[encryptedBytes].catatan = _catatan;
        products[encryptedBytes].owner = msg.sender;
        products[encryptedBytes].purchased = false;
        emit ProductCreated(_catatan, msg.sender, false);
    }

    // function purchaseProduct(uint256 _id) public payable {
    //     // Fetch the product
    //     Product memory _product = products[_id];
    //     // Fetch the owner
    // address payable _seller = _product.owner;
    //     // Make sure the product has a valid id
    //     require(_product.id > 0 && _product.id <= productCount);
    //     // Require that there is enough Ether in the transaction
    //     require(msg.value >= _product.price);
    //     // Require that the product has not been purchased already
    //     require(!_product.purchased);
    //     // Require that the buyer is not the seller
    // require(_seller != msg.sender);
    //     // Transfer ownership to the buyer
    //     _product.owner = msg.sender;
    //     // Mark as purchased
    //     _product.purchased = true;
    //     // Update the product
    //     products[_id] = _product;
    //     // Pay the seller by sending them Ether
    //     address(_seller).transfer(msg.value);
    //     // Trigger an event
    //     emit ProductPurchased(
    //         productCount,
    //         _product.name,
    //         _product.price,
    //         msg.sender,
    //         true
    //     );
    // }

    function purchaseProduct(
        bytes32 _name,
        bytes32 _price,
        bytes32 _catatan
    ) public payable {
        bytes32 encryptedBytes = keccak256(abi.encodePacked(_name, _price));
        products[encryptedBytes].purchased = true;

        address payable _seller = products[encryptedBytes].owner;
        require(_seller != msg.sender);
        address(_seller).transfer(msg.value);
        // Trigger an event
        emit ProductPurchased(_catatan, msg.sender, true);
    }
}
