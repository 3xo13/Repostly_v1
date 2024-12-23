// warning: the order of elements in this object is crucial for the entire app

export const lebonCategories = {
    categories: [
        "Job",
        "Vehicles",
        "Real estate",
        "Vacation Rentals",
        "Electronic",
        "Home & Garden",
        "Family",
        "Fashion",
        "Hobbies",
        "Animals",
        "Professional equipment",
        "Services",
        "Miscellaneous"
    ],
    Job: {
        hasPostType: false,
        hasMixedTypes: false,
        postTypes: [],
        subCategories: [
            {
                title: "Job offers"
            }, {
                title: "Professional training"
            }
        ]
    },
    Vehicles: {
        hasPostType: true,
        hasMixedTypes: false,
        postTypes: [
            "offer", "request"
        ],
        subCategories: [
            {
                title: "Cars"
            }, {
                title: "Motorcycles"
            }, {
                title: "Caravans"
            }, {
                title: "Utilities"
            }, {
                title: "Boats"
            }, {
                title: "Auto equipment"
            }, {
                title: "Motorcycle equipment"
            }, {
                title: "Caravans equipment"
            }, {
                title: "Boats equipment"
            }
        ]
    },
    "Real estate": {
        hasPostType: true,
        hasMixedTypes: true,
        postTypes: [],
        subCategories: [
            {
                title: "Real estate sales",
                "post options": ["offer", "request"]
            }, {
                title: "Rentals",
                "post options": ["offer", "request"]
            }, {
                title: "Shared accommodation",
                "post options": ["offer", "request"]
            }, {
                title: "Offices & Shops",
                "post options": ["sale", "rental", "request"]
            }
        ]
    },
    "Vacation Rentals": {
        hasPostType: true,
        hasMixedTypes: false,
        postTypes: [
            "offer", "request"
        ],
        subCategories: [
            {
                title: "Seasonal rentals"
            }
        ]
    },
    "Electronic": {
        hasPostType: false,
        hasMixedTypes: false,
        postTypes: [],
        subCategories: [
            {
                title: "Computers"
            }, {
                title: "Computer accessories"
            }, {
                title: "Tablets & E-readers"
            }, {
                title: "Photo, audio & video"
            }, {
                title: "Phone accessories & Connected objects"
            }, {
                title: "Phones & Connected Objects"
            }, {
                title: "Consoles"
            }, {
                title: "Video games"
            }
        ]
    },
    "Home & Garden": {
        hasPostType: false,
        hasMixedTypes: false,
        postTypes: [],
        subCategories: [
            {
                title: "Furnishings"
            }, {
                title: "Stationery & School Supplies"
            }, {
                title: "Household appliances"
            }, {
                title: "Tableware"
            }, {
                title: "Decoration"
            }, {
                title: "Household linen"
            }, {
                title: "DIY"
            }, {
                title: "Garden & Plants"
            }
        ]
    },
    "Family": {
        hasPostType: false,
        hasMixedTypes: false,
        postTypes: [],
        subCategories: [
            {
                title: "Baby equipment"
            }, {
                title: "Children's furniture"
            }, {
                title: "Baby clothes"
            }
        ]
    },
    "Fashion": {
        hasPostType: false,
        hasMixedTypes: false,
        postTypes: [],
        subCategories: [
            {
                title: "Clothes"
            }, {
                title: "Shoes"
            }, {
                title: "Accessories & Luggage"
            }, {
                title: "Watches & Jewelry"
            }
        ]
    },
    "Hobbies": {
        hasPostType: false,
        hasMixedTypes: false,
        postTypes: [],
        subCategories: [
            {
                title: "Antiques"
            }, {
                title: "Collection"
            }, {
                title: "CD - Music"
            }, {
                title: "DVD - Movies"
            }, {
                title: "Musical instruments"
            }, {
                title: "Books"
            }, {
                title: "Modeling"
            }, {
                title: "Wines & Gastronomy"
            }, {
                title: "Games & Toys"
            }, {
                title: "Creative hobbies"
            }, {
                title: "Sports & Outdoors"
            }, {
                title: "Bikes"
            }, {
                title: "Bicycle equipment"
            }
        ]
    },
    "Animals": {
        hasPostType: true,
        hasMixedTypes: true,
        postTypes: [],
        subCategories: [
            {
                title: "Animals",
                "post options": ["offer", "request"]
            }, {
                title: "Animal accessories",
                "post options": ["offer"]
            }, {
                title: "Lost animals",
                "post options": ["offer", "request"]
            }
        ]
    },
    "Professional equipment": {
        hasPostType: false,
        hasMixedTypes: false,
        postTypes: [],
        subCategories: [
            {
                title: "Tractors"
            }, {
                title: "Agricultural equipment"
            }, {
                title: "Construction - Structural work site"
            }, {
                title: "Heavyweights"
            }, {
                title: "Handling - Lifting"
            }, {
                title: "Industrial equipment"
            }, {
                title: "Equipment for restaurants & hotels"
            }, {
                title: "Office Equipment & Supplies"
            }, {
                title: "Equipment for shops & markets"
            }, {
                title: "Medical equipment"
            }
        ]
    },
    "Services": {
        hasPostType: true,
        hasMixedTypes: false,
        postTypes: [
            "offer", "request"
        ],
        subCategories: [
            {
                title: 'Artists & Musicians'
            }, {
                title: 'Babysitting'
            }, {
                title: 'Events'
            }, {
                title: 'Personal services'
            }, {
                title: 'Animal Services'
            }, {
                title: 'Moving Services'
            }, {
                title: 'Electronic Repair Services'
            }, {
                title: 'Mechanical repair services'
            }, {
                title: 'Gardening & DIY services'
            }, {
                title: 'Event services'
            }, {
                title: 'Other services'
            }
        ]
    },
    "Others": {
        hasPostType: true,
        hasMixedTypes: false,
        postTypes: [
            "offer", "request"
        ],
        subCategories: [
            {
                title: "Others"
            }
        ]
    }
};
