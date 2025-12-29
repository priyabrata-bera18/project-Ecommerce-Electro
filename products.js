// =============================
// PRODUCT DATABASE (DYNAMIC)
// =============================

// Only run if not already saved (prevents overwriting user cart and wishlist later)
if (!localStorage.getItem("allProducts")) {

    const allProducts = [
        {
            id: 1,
            title: "Apple iPhone 14",
            price: 45000,
            category: "Smartphones",
            brand: "Apple",
            colors: ["Black", "Red", "White"],
            sku: "APL-IP14",
            shortDesc: "Experience great performance with premium hardware at best price.",
            warranty: "1 Year Official Warranty",
            returnPolicy: "7 Days Replacement Policy",
            images: [
                "Assets/Images/pngegg (3).png",
                "https://themewagon.github.io/electro/img/product01.png",
                "https://themewagon.github.io/electro/img/product03.png"
            ]
        },
        {
            id: 2,
            title: "Sony Alpha A7 III",
            price: 82000,
            category: "Cameras",
            brand: "Sony",
            colors: ["Black", "White"],
            sku: "SNY-A7CAM",
            shortDesc: "Professional camera with 4K sensor quality and fast autofocus.",
            warranty: "1 Year Official Warranty",
            returnPolicy: "7 Days Replacement Policy",
            images: [
                "Assets/Images/pngegg.png",
                "https://themewagon.github.io/electro/img/product06.png",
                "https://themewagon.github.io/electro/img/product11.png"
            ]
        },
        {
            id: 3,
            title: "BoAt Rockerz 425",
            price: 1099,
            category: "Headphones",
            brand: "BoAt",
            colors: ["Black", "Red"],
            sku: "BOAT-425HD",
            shortDesc: "Deep bass and high comfort wireless audio experience.",
            warranty: "1 Year Official Warranty",
            returnPolicy: "7 Days Replacement Policy",
            images: [
                "Assets/Images/pngegg (2).png",
                "https://themewagon.github.io/electro/img/product05.png"
            ]
        },
        {
            id: 4,
            title: "Fastrack Limitless Watch",
            price: 1499,
            category: "SmartWatch",
            brand: "Fastrack",
            colors: ["Black", "Red", "White"],
            sku: "FAST-WATCH",
            shortDesc: "Smart fitness tracking with AMOLED screen and long battery.",
            warranty: "1 Year Official Warranty",
            returnPolicy: "7 Days Replacement Policy",
            images: [
                "Assets/Images/pngegg (1).png",
                "https://themewagon.github.io/electro/img/product04.png"
            ]
        },
        {
            id: 5,
            title: "HP Pavilion x360",
            price: 72000,
            category: "Laptops",
            brand: "HP",
            colors: ["Black", "Silver"],
            sku: "HP-X360-LPT",
            shortDesc: "Two-in-one powerful hybrid laptop with touch display.",
            warranty: "1 Year Official Warranty",
            returnPolicy: "7 Days Replacement Policy",
            images: [
                "https://themewagon.github.io/electro/img/shop01.png",
                "https://themewagon.github.io/electro/img/product09.png"
            ]
        },
        {
            id: 6,
            title: "Samsung Galaxy Buds",
            price: 4999,
            category: "Headphones",
            brand: "Samsung",
            colors: ["Black", "White"],
            sku: "SMG-BUDS",
            shortDesc: "Premium wireless earbuds with noise cancellation.",
            warranty: "1 Year Official Warranty",
            returnPolicy: "7 Days Replacement Policy",
            images: [
                "https://themewagon.github.io/electro/img/product08.png",
                "https://themewagon.github.io/electro/img/product02.png"
            ]
        },
        {
            id: 7,
            title: "Dell Gaming Laptop G15",
            price: 89000,
            category: "Laptops",
            brand: "Dell",
            colors: ["Black"],
            sku: "DLL-G15",
            shortDesc: "Ultimate gaming power with stunning performance.",
            warranty: "1 Year Official Warranty",
            returnPolicy: "7 Days Replacement Policy",
            images: [
                "https://themewagon.github.io/electro/img/product07.png"
            ]
        },
        {
            id: 8,
            title: "Canon EOS M50",
            price: 59999,
            category: "Cameras",
            brand: "Canon",
            colors: ["Black"],
            sku: "CANN-M50",
            shortDesc: "Crystal clear 4K video recording with compact body.",
            warranty: "1 Year Official Warranty",
            returnPolicy: "7 Days Replacement Policy",
            images: [
                "https://themewagon.github.io/electro/img/product10.png"
            ]
        },
        {
            id: 9,
            title: "Samsung S24 Ultra",
            price: 115000,
            category: "Smartphones",
            brand: "Samsung",
            colors: ["Black", "White", "Red"],
            sku: "SMG-S24UL",
            shortDesc: "Top-tier flagship smartphone with ultimate camera innovation.",
            warranty: "1 Year Official Warranty",
            returnPolicy: "7 Days Replacement Policy",
            images: [
                "https://themewagon.github.io/electro/img/product12.png"
            ]
        }
    ];

    localStorage.setItem("allProducts", JSON.stringify(allProducts));
}
