export interface MenuItem {
    id: string;
    category: string;
    name: string;
    description?: string;
    image?: string;
    prices: {
        half?: number;
        full?: number;
        [key: string]: number | undefined;
    };
}

export const MENU_ITEMS: MenuItem[] = [
    {
        id: "nylon-khaman", category: "Appetizer", name: "Nylon Khaman", prices:
            { half: 50, full: 110 }, image: "/images/foods/Nylon-Khaman.jpg",
    },
    {
        id: "sabudana-vada", category: "Appetizer", name: "Sabudana Vada", prices:
            { half: 60, full: 130 }, image: "/images/foods/Sabudana-Vada.jpg",
    },
    {
        id: "lilva-kachori", category: "Appetizer", name: "Lilva Kachori", prices:
            { half: 65, full: 150 }, image: "/images/foods/Lilva-Kachori.jpg",
    }, {
        id: "khandvi-bites",
        category: "Appetizer", name: "Khandvi Bites", prices: {
            half: 50, full:
                100
        }, image: "/images/foods/Khandvi-bites.jpg",
    }, {
        id: "veg-puff",
        category: "Appetizer", name: "Veg Puff", prices: {
            half: 45, full:
                110
        }, image: "/images/foods/Veg-Puff.jpg",
    }, {
        id: "cheese-chutney-sandwich",
        category: "Appetizer", name: "Cheese Chutney Sandwich", prices: {
            half: 80,
            full: 180
        }, image: "/images/foods/Chutney-Sandwich.jpg",
    }, {
        id: "samosa-chaat",
        category: "Chaat", name: "Samosa Chaat", prices: {
            half: 80, full:
                170
        }, image: "/images/foods/Samosa-Chaat.jpg",
    },
    {
        id: "panipuri",
        category: "Chaat", name: "Pani Puri", prices: {
            half: 100, full:
                220
        }, image: "/images/foods/Pani-Puri.png",
    }, {
        id: "ragda-patties",
        category: "Chaat", name: "Ragda Patties", prices: {
            half: 70, full:
                150
        }, image: "/images/foods/Ragda-Patties.jpg",
    }, {
        id: "bhel-puri",
        category: "Chaat", name: "Bhel Puri", prices: {
            half: 60, full:
                120
        }, image: "/images/foods/Bhel-Puri.jpg",
    }, {
        id: "Dahi-Vada",
        category: "Chaat", name: "Dahi Vada", prices: {
            half: 60, full:
                120
        }, image: "/images/foods/Dahi-Vada.jpg",
    }, {
        id: "pav-bhaji",
        category: "Street foods", name: "Pav Bhaji", prices: {
            half: 100, full:
                220
        }, image: "/images/foods/Pav-Bhaji.jpg",
    }, {
        id: "daal-bati",
        category: "Street foods", name: "Daal Bati", prices: {
            half: 100, full:
                220
        }, image: "/images/foods/Dal-Baati.jpg",
    }, {
        id: "idly-sambhar",
        category: "Street foods", name: "Idly Sambhar", prices: {
            half: 80, full:
                170
        }, image: "/images/foods/Idli-Sambhar.jpg",
    }, {
        id: "paneer-lababdar",
        category: "Entrée", name: "Paneer Lababdar", prices: {
            half: 80, full:
                160
        }, image: "/images/foods/Paneer-Lababdar.jpg",
    }, {
        id: "paneer-bhurji",
        category: "Entrée", name: "Paneer Bhurji", prices: {
            half: 80, full:
                160
        }, image: "/images/foods/Paneer-Bhurji.jpg",
    }, {
        id: "palak-paneer",
        category: "Entrée", name: "Palak Paneer", prices: {
            half: 80, full:
                160
        }, image: "/images/foods/Palak-Paneer.jpg",
    }, {
        id: "undhiyu",
        category: "Entrée", name: "Undhiyu", prices: {
            half: 90, full:
                190
        }, image: "/images/foods/Undhiyu.jpg",
    }, {
        id: "kaala-chana",
        category: "Entrée", name: "Kaala Chana", prices: {
            half: 65, full:
                120
        }, image: "/images/foods/Kaala-Chana.jpg",
    }, {
        id: "gujarati-dal",
        category: "Entrée", name: "Gujarati Dal", prices: {
            half: 50, full:
                100
        }, image: "/images/foods/Gujarati-Daal.jpg",
    },
];
