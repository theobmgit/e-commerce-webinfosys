--
-- File generated with SQLiteStudio v3.2.1 on T7 Thg6 19 20:03:58 2021
--
-- Text encoding used: UTF-8
--
-- Table: Customer

USE webinfosys;

-- Table: ProductType

CREATE TABLE Customer (
	customer_id INT PRIMARY KEY NOT NULL,
    full_name	varchar(100) NOT NULL,
    house_no	int,
    district	varchar(50),
    province	varchar(50),
    mobile_number char(10)
);

CREATE TABLE ProductType (
    type_id   INT           PRIMARY KEY NOT NULL,
    type_name VARCHAR (256) 
);

CREATE TABLE Product (
    product_id   INT            PRIMARY KEY
                                NOT NULL,
    type_id      INT NOT NULL,
    product_name VARCHAR (64)   NOT NULL,
    price        FLOAT          NOT NULL,
    description  VARCHAR (2048),
    image        VARCHAR (1024),
    rating       INT,
    quantity     INT,
    CHECK (rating >= 1 AND 
           rating <= 5),
    CHECK (price >= 0),
    CHECK (quantity >= 0),
    FOREIGN KEY (
        type_id
    )
    REFERENCES ProductType (type_id) 
);

-- Table: CustomerOrder

CREATE TABLE CustomerOrder (
    order_id    INT          PRIMARY KEY
                             NOT NULL,
    customer_id INT          NOT NULL,
    total       FLOAT,
    discount    FLOAT,
    status      VARCHAR (10),
    FOREIGN KEY (
        customer_id
    )
    REFERENCES Customer (customer_id),
    CHECK (total >= 0),
    CHECK (discount <= 1 AND 
           discount >= 0) 
);


-- Table: OrderDetails

CREATE TABLE OrderDetails (
    order_id   INT NOT NULL,
    product_id INT NOT NULL,
    quantity   INT,
    CHECK (quantity >= 0),
    FOREIGN KEY (
        product_id
    )
    REFERENCES Product (product_id),
    FOREIGN KEY (
        order_id
    )
    REFERENCES CustomerOrder (order_id),
    PRIMARY KEY (
        order_id,
        product_id
    )
);

INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
						VALUES (
                            10,
                            'Other'
                        );

INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
                        VALUES (
                            9,
                            'Accessory'
                        );
INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
VALUES (
                            8,
                            'Tablet'
                        );

INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
                        VALUES (
                            7,
                            'Watch'
                        );

INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
                        VALUES (
                            6,
                            'Printer'
                        );

INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
                        VALUES (
                            5,
                            'PC'
                        );

INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
                        VALUES (
                            4,
                            'Laptop'
                        );

INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
                        VALUES (
                            3,
                            'Phone'
                        );

INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
                        VALUES (
                            2,
                            'Television'
                        );

INSERT INTO ProductType (
                            type_id,
                            type_name
                        )
                        VALUES (
                            1,
                            'Speaker'
                        );


-- Table: Product

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        7001,
                        7,
                        'Galaxy Watch 3 Bluetooth',
                        6489643.0,
                        '‎Complete the Galaxy Watch3s unique look with a wide selection of watch faces that allow you to create your own style with over 40 impressive conversions. Quickly see useful information while accessing your favorite apps easily.‎',
                        'https://images.samsung.com/is/image/samsung/vn/galaxy-note20/gallery/vn-galaxy-watch3-r840-sm-r840nzkaxxv-frontmysticblack-275057838?$PD_SHOP_JPG$',
                        4,
                        25
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        7002,
                        7,
                        'Galaxy Watch Active 2',
                        4990005.0,
                        'Possessing 8 photodiodes on the back of the watch and a curved design that hugs your wrist, Galaxy Watch Active2 focuses on monitoring your health status. Healthcare monitors your heart rate and sends you a warning when your heart rate is lowered or above normal thresholds',
                        'https://images.samsung.com/is/image/samsung/vn-galaxy-watch-active2-r820-sm-r820nzkaxxv-frontblack-242972075?$PD_SHOP_JPG$',
						3,
                        50
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        7003,
                        7,
                        'Xiaomi Mi Watch Lite',
                        1390000.0,
                        'Not only famous for high-end smartphones, Xiaomi also affirms its name as well as its position by smart and modern models. ‎Xiaomi Mi Watch Lite‎‎‎ is the latest model of the company that attracts a large number of people interested by its impressive design, unique features especially the extremely attractive price',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/0/0/000_mi_watch_lite_1__1.jpg',
                        5,
                        50
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        7004,
                        7,
                        'Xiaomi Mi Watch',
                        2490000.0,
                        'Xiaomi is a brand that is no stranger to Vietnamese users. Xiaomi products are very well received by utility features, applying modern technology. Xiaomis first SmartWatch - ‎‎the Xiaomi Mi Watch‎‎ is no exception. This is a product carefully invested by Xiaomi in both features and design. The Xiaomi Mi Watch is rated as a formidable competitor in the smartwatch market, even with the Apple Watch',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/d/o/dong-ho-thong-minh-xiaomi-mi-watch-5.jpg',
                        3,
                        250
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        7005,
                        7,
                        'Apple Watch Series 6',
                        9350000.0,
                        'Most Apple Watch devotees want to own the latest 40mm ‎‎Apple Watch Series 6‎‎ in 2020 because it has been upgraded quite a bit in appearance and technology. Bring a completely new, more convenient look with a significant upgrade of functionality.‎',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/a/p/apple-watch-series-6-40mm_5.jpg',
                        4,
                        300
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        4001,
                        4,
                        'ASUS ROG Strix G',
                        21890000.0,
                        ' ‎Inspired by the BMW Designworks Team, Strix G blends form and functionality with the 3D Air Circulation Zone to create the most modern cooling system youve ever seen. The contrasting dorsal cross section on the finished surface is made of scratched aluminum, the asymmetrical umbrella stands out to ensure unlimited air flow around the back, where the scissor door hinges create additional air circulation space.',
                        'https://laptopworld.vn/media/product/6499_4731_asus_rog_strix_g_g531gd_anh2.jpg',
                        5,
                        100
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        4002,
                        4,
                        'Acer Aspire A315',
                        12990000.0,
                        '‎‎‎Acer laptop,‎‎ a familiar name trusted by Vietnamese users for a long time with computers from ordinary to high-end can be found in this brand. If you are looking for a ‎‎ ‎‎ ‎‎laptop product with‎‎ ‎‎ ‎‎ a decent configuration at a reasonable price, then ‎‎Acer Aspire A315-56-502X NX Laptop. HS5SV.00F ‎‎is a product that deserves attention.',
                        'https://phucanhcdn.com/media/product/41363_aspire_a315_56_ha1.jpg',
                        4,
                        50
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        4003,
                        4,
                        'Surface Laptop Go',
                        20500000.0,
                        'The new Surface Laptop Go Core i5 8GB SSD 128GB RAM is launched as a mid-range product, suitable for young users such as students. This is definitely a great device for you',
                        'https://vuongkhang.com/thumb/468-468/upload/2020/10/laptop-go/Ice-Blue/surface-laptop-go-ice-blue-2.jpg',
                        5,
                        25
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        4004,
                        4,
                        'MSI Modern 14 B10MW',
                        13790000.0,
                        'In appearance, MSI Modern 14 A10M inherits the design from the Prestige series with a modern and minimalist style with a scratched aluminum face and a submerged print logo. Whether you are a tough person will be attracted by the design of MSI Modern 14 at first sight.',
                        'https://laptopworld.vn/media/product/7446_msi_modern_14_b10mw_427vn_1.jp',
                        5,
                        30
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        4005,
                        4,
                        'Dell Inspiron 7405',
                        20599000.0,
                        'Dell - the famous brand from the United States in 2020 has launched the high-end laptop Dell Inspiron 7306 N3I5202W, this is a thin laptop product located in the laptop segment in the range of 25 to 35 million. Although the "reputation" is thin, the Inspiron 7306 has a solid masculine design.',
                        'https://laptopworld.vn/media/product/8235_dell_inspiron_7405.jpg',
                        5,
                        25
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        6001,
                        6,
                        'HP Laser Printer',
                        2250000.0,
                        '‎The HP Laser 107w is a high-performance‎‎ laser printer at an affordable price. Deliver high-quality prints with phone print capabilities ‎design. ‎‎With a compact and elegant design, you can place the printer anywhere in the office without wasting space, ensuring the aesthetics of the room‎',
                        'https://hoangminhoffice.com/wp-content/uploads/2020/07/hp-107a-1.jpg',
                        5,
                        50
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        6002,
                        6,
                        'Canon Printer LBP 113W',
                        3749000.0,
                        'Designed with compact size, elegant sophistication with minimalist black color, compact size, elegant to suit any working space. Support printing on many different paper sizes, paper materials such as B5, A5, A6, Legal, Letter, Statement, Executive, Plain, Heavy, Recycled,... helps you print a variety of document',
                        'https://anphat.com.vn/media/product/34243_37984_lbp_113w_ha1.jpg',
                        5,
                        50
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        6003,
                        6,
                        'Canon LBP162DW Laser',
                        5099000.0,
                        'The printer offers high performance with up to 28 ppm (A4) printing for fast, time-saving printing. Up to 600 x 600 dpi print resolution delivers sharp print‎',
                        'https://anphat.com.vn/media/product/28988_1e2d45dab6e242eab550a20f468b02de_lbp162dw_b2.png',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        6004,
                        6,
                        'Canon Laser Printer LBP6230DN',
                        4489000.0,
                        'Canon LBP6230DN‎‎ has a beautifully designed solid design suitable for office spaces, giving you high-quality black and white printing at a maximum resolution of 1,200 x 1,200dpi (equivalent).',
                        'https://anphat.com.vn/media/product/20375_canon_lbp_6230_dn_400x400_imae8vvyzrnznwgt.jpeg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        6005,
                        6,
                        'Canon Multifunction Printer MF3010',
                        3890000.0,
                        'Canon imageCLASS MF3010 is a compact all-in-one printer that integrates all printing, scanning, copying, ideal for home and small business office operations.',
                        'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/Canon-imageCLASS-MF3010-1.jpg',
                        5,
                        10
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        3001,
                        3,
                        N'Galaxy Note 20',
                        15898335.0,
                        '‎The Samsung Galaxy Note 20 is made from todays top premium materials, with meticulousness and superior processing quality, creating a better phone than you can imagine.‎',
                        'https://images.samsung.com/is/image/samsung/vn-galaxy-note20-n980-sm-n980fzggxxv-frontmysticgreen-320813642?$PD_SHOP_JPG$',
                        3,
                        15
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        3002,
                        3,
                        'iPhone 12 Pro 256GB',
                        28350000.0,
                        'Apples latest iPhone 2020 model is designed with a luxurious square frame that is loved by many users. In particular, the ‎‎genuine iPhone 12 Pro‎‎ 256GB VNA promises to be one of the ideal choices.‎',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_3__8.jpg',
                        5,
                        15
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        3003,
                        3,
                        'Samsung Galaxy A52',
                        8600000.0,
                        'The Samsung A52 features a blocky design with impressive thinness for a comfortable handheld feel. The corners are also gently curved to create softness for smartphones, creating a harmonious and elegant overall. There is a small change on this smartphone is the position of the rear camera cluster placed in the middle instead of in the right corner as usual.',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a52-26.jpg',
                        5,
                        10
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        3004,
                        3,
                        'Xiaomi Redmi Note 10',
                        4600000.0,
                        '‎To reschedule, this year Xiaomi continues to refresh its mid-range device collection with a new smartphone in the Redmi Note series, the device called ‎‎the Redmi Note 10‎‎. Xiaomi Redmi Note phones are already too hot, whether this new smartphone is enough to overshadow its predecessors',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-redmi-note-10_1.jpg',
                        5,
                        15
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        3005,
                        3,
                        'Nokia 5.4',
                        2990000.0,
                        'Make a better impression with Nokia 5.4. With a cluster of 4 48MP cameras for your creative breakthrough – with advanced video recording and cinematic effects, you can capture your world in great detail‎',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/nokia-5-4-xanh_1.png',
                        5,
                        10
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        2001,
                        2,
                        'Xiaomi Mi LED TV',
                        7490000.0,
                        'The most remarkable thing about the 43-inch Mi LED TV 4S product. it is the screen with a resolution of up to 4K, previously we only had Xiaomi Smart TV models of 43 inches with FullHD resolution',
                        'https://i0.wp.com/www.tivixiaomi.com/wp-content/uploads/2021/05/50-800x800-1.png?fit=800%2C800&ssl=1',
                        5,
                        15
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        2002,
                        2,
                        'Smart TV OLED LG 4K',
                        143900000.0,
                        'In the past, users preferred Full HD images for sharp image quality, nowadays, smart ‎‎TVs‎‎ 4K 77 inch 77C9PTA, with high resolution UHD 4k, give lively footage as real, allowing televisions to display 4 times the definition of regular Full HD televisions, bringing sharp images smooth with every detail, moving vividly as real.',
                        'https://s.meta.com.vn/Data/image/2020/07/10/smart-tivi-oled-lg-4k-77-inch-77c9pta-2.jpg',
                        5,
                        20
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        2003,
                        2,
                        'Smart Tivi QLED Samsung 4K 65 inch',
                        29990000.0,
                        '‎Smart TV ‎‎Samsung‎‎ QA65Q80TAKXXV has a borderless design with a luxurious metal frame that will be an impressive highlight for your space. Televisions have a slender but equally solid base, in addition, you can also hang tv walls extremely conveniently. Tv with large screen size 65 inches, suitable for installation in living room, common room, meeting room‎',
                        'https://s.meta.com.vn/Data/image/2020/06/29/smart-tivi-qled-samsung-4k-65-inch-qa65q80takxxv-sl1.jpg',
                        5,
                        15
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        2004,
                        2,
                        'TV Sony Android 4K 43 inch',
                        50990000.0,
                        '‎Sony‎‎ Android TV 43 inch KD-43X8500G/S possesses a modern, minimalist design with luxurious striking silver tones, bringing comfort to your space. Televisions with v-shaped stands can definitely stand on any flat surface, in addition you can also hang walls extremely convenient‎',
                        'https://s.meta.com.vn/Data/image/2020/11/12/tivi-sony-android-4k-43-inch-kd-43x8500g-s.jpg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        2005,
                        2,
                        'Android TV Sony 4K 43 inch',
                        10990000.0,
                        'Android TV Sony‎‎ has many applications pre-installed such as YouTube, Google Play, Netflix, web browsers. In addition, when using you can also download other applications such as ZingTV, Clip TV, FPT Play, Galaxy Play, VTVCab ON, Spotify, Nhaccuatui, meeting all entertainment needs such as listening to music, watching movies of users',
                        'https://s.meta.com.vn/Data/image/2020/06/02/android-tivi-sony-4k-43-inch-kd-43x7500h-g.jpg',
                        5,
                        30
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        1001,
                        1,
                        'Huawei Bluetooth Speaker',
                        350000.0,
                        '‎For music lovers, owning a bluetooth speaker to enjoy music anytime, anywhere. Therefore, bluetooth speakers ‎‎also‎‎ become popular and diverse models to be able to give users many choices. In particular, ‎‎the Huawei CM510 bluetooth speaker ‎‎with a youthful design, compact size is a great choice for you to enjoy the world of quality sound.‎',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/b/9/b9a06a74c26f07dfac76c982b91aea70.jpg',
                        4,
                        10
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        1002,
                        1,
                        'Energizer Bluetooth Speaker',
                        490000.0,
                        '‎If you are in need of a compact speaker for travel trips, Energizer Bluetooth Speaker will really be a good candidate.‎',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/p/0/p0144_20191224143213.png',
                        4,
                        10
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        1003,
                        1,
                        'Xiaomi Compact Speaker 2',
                        190000.0,
                        'The first plus for the Xiaomi Compact Speaker 2 ‎‎bluetooth‎‎ speaker is its extremely compact size. Specifically it is only equal to one egg with a light weight. Thereby, it makes it possible for users to bring this tiny speaker anywhere.',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/5/e/5e50511a90d261e90de2953a7a3553a3.jpg',
                        4,
                        15
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        1004,
                        1,
                        'Marshall Emberton Bluetooth Speaker',
                        3990000.0,
                        'Marshall Bluetooth Speakers‎‎ Emberton is the most compact mobile speaker line from the famous speaker brand from the UK, bringing outstanding sound quality, and a modern and luxurious design that affirms the style of users.‎',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/p/o/pos_desktop_emberton-1_blacknbrass.png',
                        4,
                        15
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        1005,
                        1,
                        'LG Xboom GO PL5',
                        1690000.0,
                        'Music is an integral part of life, helping you relax after stressful hours. Therefore, speakers are an accessory that helps you enjoy the music space in a better way. ‎‎LG XBOOM Go PL5‎‎ speaker with modern and fashion design along with high-class sound quality and many advanced sound technologies integrated will surely bring interesting experiences for you',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/2/4/2434_loa_di_dong_lg_xboom_go_pl5_songlongmedia___12_.jpg',
                        5,
                        10
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        5001,
                        5,
                        'Dell OPTIPLEX 9020',
                        8990000.0,
                        '‎‎The Dell OPTIPLEX‎ ‎‎9020‎‎ desktop is the Flagship in the series, belonging to the most classy OPTIPLEX product line that Dell makes for large businesses, governments, banks, stores or classroom - those are places that need computers running 24/7 continuously all year round with the most luxurious, comfortable, durable, powerful and stable',
                        'https://bizweb.dktcdn.net/thumb/1024x1024/100/306/444/products/bo-dell-9020-man-e2020h-2-9af76dcf-847c-4ab3-b62e-fec671e86d9f.jpg?v=1608170326093',
                        5,
                        10
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        5002,
                        5,
                        'Surface Studio 2',
                        150000000.0,
                        'According to technology experts, surface studio 2 Core i7 32GB RAM 2TB SSD is not a computer for dynamic numbers but on the contrary it is directed at people working in the field of creativity, design, art‎',
                        'https://vuongkhang.com/thumb/468-468/upload/Surface%20Studio%202/surface-studio-2-57.png',
                        4,
                        10
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        5003,
                        5,
                        'Dell Vostro 3671',
                        13990000.0,
                        'The Dell Vostro 3671-V579Y1W‎‎ desktop features a sturdy black case and a simple design. The gap has a fairly wide area on the side to increase the heat drainage capacity of the machine. The computer has a compact design suitable for many office spaces',
                        'https://bizweb.dktcdn.net/thumb/1024x1024/100/306/444/products/bo-dell-3671-man-22-3-ebe5e04f-fb99-4c4b-bfa8-c6e710d33563.jpg?v=1591354178387',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        5004,
                        5,
                        'PC HP All In One 22',
                        18399000.0,
                        'An ‎‎All in One‎‎ (AIO) computer not only saves you space, but also makes it easy to install and move. And the ‎‎PC HP All In One 22 computer product converges both versatile convenience and optimal performance for all jobs.',
                        'https://hanoicomputercdn.com/media/product/54515_hp_22_df0134d.jpg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        5005,
                        5,
                        'AIO Asus V241FAT',
                        12990000.0,
                        '‎The AIO ASUS V241FAT-BA042T is equipped with an Intel Core i3-8145U processor. Whiskey Lake 8th generation CPUs help you handle a multitude of office jobs such as data entry, text typing, software running, design, coding, etc. Accompanied by a 4GB DDR4 RAM bar that supports more efficient multi-task duty‎',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/m/a/may-tinh-all-in-one-asus-v241fat-ba042t-2.jpg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        8001,
                        8,
                        'iPad 10.2 2020 WiFi 32GB',
                        9600000.0,
                        '‎iPad is one of the leading tablet brands in the market, thanks to its prestige and commitment to the quality of products that the Apple Group brings to its customers globally. If you want to get an iPad that gives you an enjoyable experience, with a powerful processor and strong support from Apple Pencil, and a price of less than VND 10 ‎‎million, the iPad Gen 8 ‎‎that has just been launched this year is an impressive suggestion for you and suitable for you.',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/ipad-2020-gray_1.jpg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        8002,
                        8,
                        'Samsung Galaxy Tab S7',
                        15490000.0,
                        'It is rare for a manufacturer to maintain tablets that still run on Android operating systems like the manufacturer Samsung. It is also about a year since the Galaxy Tab S6 was unveiled, and most recently the Galaxy Tab S6 Lite, heard that it already knows the shortened version of the man. But surprisingly, we continue to see the launch of ‎‎Samsung Tab S7 tablets ‎‎with many worthwhile upgrades',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-tab-s7-1.jpg',
                        4,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        8003,
                        8,
                        'iPad Air 10.9 2020 4G 64GB',
                        17930000.0,
                        '‎The Apple iPad Air 10.9 2020 4G 64GB‎‎ is one of the latest Tablet models. With the changes in design and sophistication in each detail line, the product has attracted a large number of interested technology believers. Heres more detail about ‎‎Apples latest iPad ‎‎Air model.',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/ipad-air-2020-pink_5.jpg',
                        4,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        8004,
                        8,
                        'Kindle Paperwhite 4 Gen 10 8GB',
                        3090000.0,
                        '‎Are you a person who enjoys reading and wants to read your favorite books in your spare time? Now you do not have to carry a lot of heavy books anymore, when you have a modern and compact 8 GB ‎‎ ‎‎Kindle‎‎ PaperWhite Gen 4‎‎ reader.‎',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/m/a/may-doc-sach-kindle-paperwhite-4-gen-10-2019_2_.jpg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        8005,
                        8,
                        'iPad Pro 11 2020 WiFi 256GB',
                        23030000.0,
                        'After two years since the success of the iPad Pro 2018, Apple has just launched a new tablet model with improvements that promise to conquer users. Although the design is not much different from the convenience, the iPad Pro‎‎ 11 2020 will have significant upgrades in performance and camera. Especially, ‎‎iPad Pro 11 2020 WiFi 256GB‎‎ with good wifi connectivity, large storage capacity will give users a smooth experience',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple-ipad-pro-11-2020-wifi-256-gb-2.jpg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        9001,
                        9,
                        'Bluetooth Apple AirPods 2',
                        3350000.0,
                        'Recently, Apple has officially launched the ‎‎Airpods 2 headphones‎‎. This 2nd generation does not have much difference from the first generation in appearance, except for some details about beacon lights as well as the launch of additional versions of wireless charging and regular charging (wired charging). In addition, you can refer to the ‎‎Apple Airpods Pro‎‎, which is about to be launched in the near future‎',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/a/z/azaudio-tai-nghe-bluetooth-apple-airpod-2_2.jpg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        9002,
                        9,
                        'Apple Pencil 2',
                        3820000.0,
                        'Following the users support for the Apple Pencil, ‎‎the Apple accessory‎‎ went on to launch the second-generation Apple Pencil called ‎‎the Apple Pencil 2 stylus‎‎. Receiving the success of its predecessor and valuable upgrades, the Apple Pencil 2 touch pen deserves to be an indispensable technological toy accessory when the user is in possession of an iPad.',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/m/u/mu8f2.jpg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        9003,
                        9,
                        'Xiaomi Mi Home Security Camera',
                        820000.0,
                        '‎In modern times, the demand for security devices is increasing. ‎‎Mi Home Security 360 ‎‎camera is one of the outstanding products in ‎‎the line of security surveillance cameras‎‎ on the market today. Possessing a compact, elegant design, suitable for use in families, business stores, offices,... The device works gently and quietly, with perfect features to meet all user needs',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/3/c/3cdbfa34087d2335a0e6b9904e55969a.jpg',
                        5,
                        5
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        9004,
                        9,
                        'Apple AirTag',
                        750000.0,
                        'Airtag‎‎ is a small device integrated with Bluetooth technology used in searching for lost objects and equipment. Although there are many similar ‎‎products, Apples‎‎ ‎‎smart home accessories promise to be integrated with deeper technology, for users to experience even better activities of the device.',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/a/i/airtag-2_1.png',
                        4,
                        10
                    );

INSERT INTO Product (
                        product_id,
                        type_id,
                        product_name,
                        price,
                        description,
                        image,
                        rating,
                        quantity
                    )
                    VALUES (
                        9005,
                        9,
                        'Apple Airpods Max',
                        12290000.0,
                        'Until now, Apple has only launched a series of small-sized headphones, the Airpods. Understanding the needs of Apple users has launched a new product ‎‎that is Airpods Max‎‎ with many convenient features such as noise protection accompanied by excellent sound quality',
                        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/a/p/apple-airpods-max-2.jpg',
                        4,
                        10
                    );


-- Table: Supplier
CREATE TABLE Supplier (
    supplier_id   VARCHAR (256) PRIMARY KEY
                                NOT NULL,
    supplier_name VARCHAR (256) NOT NULL,
    phone         VARCHAR (16) 
);

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1007',
                         'Dell',
                         '0123456782'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1006',
                         'Asus',
                         '0123456783'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1005',
                         'Samsung',
                         '0123456784'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1004',
                         'Apple',
                         '0123456785'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1003',
                         'HP',
                         '0123456786'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1002',
                         'Brother',
                         '0123456787'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1001',
                         'Canon',
                         '0123456788'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1000',
                         'Citizen',
                         '0123456789'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1013',
                         'Acer',
                         '0123456776'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1012',
                         'LG',
                         '0123456777'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1011',
                         'Sony',
                         '0123456778'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1010',
                         'Huawei',
                         '0123456779'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1009',
                         'Oppo',
                         '0123456780'
                     );

INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1008',
                         'Xiaomi',
                         '0123456781'
                     );
INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1014',
                         'Microsoft',
                         '0125346718'
                     );
INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1015',
                         'MSI',
                         '0125436718'
                     );
INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1016',
                         'Nokia',
                         '0125436798'
                     );
INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1017',
                         'Energizer',
                         '0125463789'
                     );
INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1018',
                         'Marshall',
                         '0124567389'
                     );
INSERT INTO Supplier (
                         supplier_id,
                         supplier_name,
                         phone
                     )
                     VALUES (
                         'S1019',
                         'Amazon',
                         '0124563987'
                     );

-- Table: SupplierProduct

CREATE TABLE SupplierProduct (
    supplier_id VARCHAR (256) NOT NULL,
    product_id  INT NOT NULL,
    PRIMARY KEY (
        supplier_id,
        product_id
    ),
    FOREIGN KEY (
        supplier_id
    )
    REFERENCES Supplier (supplier_id),
    FOREIGN KEY (
        product_id
    )
    REFERENCES Product (product_id) 
);


INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1005',
                                7001
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1005',
                                7002
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1008',
                                7003
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1008',
                                7004
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1004',
                                7005
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1006',
                                4001
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1013',
                                4002
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1014',
                                4003
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1015',
                                4004
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1007',
                                4005
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1003',
                                6001
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1001',
                                6002
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1001',
                                6003
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1001',
                                6004
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1001',
                                6005
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1005',
                                3001
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1004',
                                3002
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1005',
                                3003
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1008',
                                3004
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1016',
                                3005
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1008',
                                2001
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1012',
                                2002
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1005',
                                2003
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1011',
                                2004
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1011',
                                2005
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1010',
                                1001
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1017',
                                1002
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1008',
                                1003
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1018',
                                1004
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1012',
                                1005
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1007',
                                5001
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1014',
                                5002
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1007',
                                5003
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1003',
                                5004
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1006',
                                5005
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1004',
                                8001
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1005',
                                8002
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1004',
                                8003
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1019',
                                8004
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1004',
                                8005
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1004',
                                9001
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1004',
                                9002
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1008',
                                9003
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1004',
                                9004
                            );
INSERT INTO SupplierProduct (
                                supplier_id,
                                product_id
                            )
                            VALUES (
                                'S1004',
                                9005
                            );

-- Index: CustomerIndex


CREATE INDEX CustomerIndex ON Customer (
    province
);


-- Index: CustomerOrderIdx


CREATE INDEX CustomerOrderIdx ON CustomerOrder (
    customer_id,
    status
);


-- Index: ProductIndex


CREATE INDEX ProductIndex ON Product (
    product_name,
    price,
    rating
);


-- Index: ProductTypeIdx


CREATE INDEX ProductTypeIdx ON ProductType (
    type_name
);


-- Index: SupplierIndex


CREATE INDEX SupplierIndex ON Supplier (
    supplier_name
);


-- View: ProductView
DROP VIEW IF EXISTS ProductView;
CREATE VIEW ProductView AS
    SELECT product_name,
           description,
           rating,
           quantity,
           price
      FROM Product;

/* cập nhật hàng trong kho sau khi đặt hàng hoặc cập nhật */
DROP TRIGGER IF EXISTS trg_PlaceOrder;
CREATE TRIGGER trg_PlaceOrder AFTER INSERT ON OrderDetails 
FOR EACH ROW
	UPDATE Product
	SET Product.quantity = Product.quantity - NEW.quantity
		WHERE NEW.product_id = Product.product_id;

/* cập nhật hàng trong kho sau khi cập nhật đặt hàng */
DROP TRIGGER IF EXISTS trg_UpdatePlaceOrder;
CREATE TRIGGER trg_UpdatePlaceOrder AFTER UPDATE ON OrderDetails 
FOR EACH ROW
   UPDATE Product SET quantity = quantity - NEW.quantity + OLD.quantity
   WHERE OLD.product_id = Product.product_id
   AND NEW.product_id = Product.product_id;


/* cập nhật hàng trong kho sau khi hủy đặt hàng */
DROP TRIGGER IF EXISTS trg_CancelPlaceOrder;
CREATE TRIGGER trg_CancelPlaceOrder AFTER DELETE ON OrderDetails 
FOR EACH ROW 
	UPDATE Product
	SET quantity = quantity + OLD.quantity
    WHERE OLD.product_id = Product.product_id;
