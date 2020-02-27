class Product{
    id: number;
    name: String;
    price: number;
    description: String;
    img: String;
    link: String;
  
    constructor(id: number, name: String, price: number, description: String, img:String, link:String){
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.img = img;
      this.link = link;
    }
  }
  
  class Mobile extends Product{
    constructor(id:number, name: String, price: number, description: String, img:String, link:String){
      super(id,name, price, description,img,link);
    }
  } 
  
  class Laptop extends Product{
    constructor(id:number, name: String, price: number, description: String, img:String, link:String){
      super(id,name, price, description,img,link);
    }
  }
  
  
  export const mobiles = [
    new Mobile(1,'СМАРТФОН APPLE IPHONE 7 32GB ROSE GOLD',164890,'A large phone with one of the best screens','assets/img/1.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_7_rose_gold_32_gb'),
    new Mobile(2,'СМАРТФОН APPLE IPHONE 11 PRO 64GB SPACE GREY', 384890, 'A large phone with one of the best screens', 'assets/img/2.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_11_64gb_black_mwlt2_77_2121' ),
    new Mobile(3,'СМАРТФОН APPLE IPHONE 11 PRO 64GB SPACE GREY',549890,'A large phone with one of the best screens','assets/img/3.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_11_pro_64gb_space_grey_mwc22_77_2141'),
    new Mobile (4,'СМАРТФОН APPLE IPHONE 11 PRO 64GB SPACE GREY',604890,'A large phone with one of the best screens','assets/img/4.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_11_pro_max_64gb_midnight_green_mwhh2_77_2157'),
    new Mobile (5,'СМАРТФОН APPLE IPHONE 8 64GB GOLD', 254890, 'A large phone with one of the best screens', 'assets/img/5.jpg', 'https://www.sulpak.kz/g/smartfon_apple__iphone8_64gb_gold'),
    new Mobile(6,'СМАРТФОН APPLE IPHONE 7 32GB BLACK', 164890, 'A large phone with one of the best screens', 'assets/img/6.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_7_black_32_gb'),
    new Mobile(7,'СМАРТФОН APPLE IPHONE 7 32GB GOLD', 164890,'A large phone with one of the best screens', 'assets/img/7.jpg', 'https://www.sulpak.kz/g/smartfon_apple_iphone_7_gold_32_gb'),
    new Mobile(8,'СМАРТФОН APPLE IPHONE 7 32GB SILVER', 164890, 'A large phone with one of the best screens', 'assets/img/8.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_7_silver_32_gb'),
  
  ];
  
  export const laptops = [
    new Laptop(9,'НОУТБУК APPLE MACBOOK AIR 13″ I5 1.8/8GB/128SSD SILVER (MQD32)', 409990, 'Powerful Laptop', 'assets/img/l_1.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_air_13_mqd32rua'),
    new Laptop(10,'НОУТБУК APPLE MACBOOK PRO 13″ I5 2.3/8/128GB SILVER (MPXR2)', 399990, 'Powerful Laptop', 'assets/img/l_3.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_pro_13_mpxr2_silver__a1708'),
    new Laptop(11,'НОУТБУК APPLE MACBOOK PRO 13" I5 2.3/8/128GB SPACE GRAY (MPXQ2)', 399990, 'Powerful Laptop', 'assets/img/l_3.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_pro_with_retina_display_mpxq2_space_gray'),
    new Laptop(12,'НОУТБУК APPLE MACBOOK 12″ CORE M3 1.1/8/256SSD SPACE GRAY (MLH72)', 441590, 'Powerfu; Laptop', 'assets/img/l_4.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12_dyujmov_mlh72_space_gray'),
    new Laptop(13,'НОУТБУК APPLE MACBOOK 12″ CORE M3/ 8.0GB / 256GB SSD GOLD (MLHE2)',446290, 'Powerful Laptop', 'assets/img/l_5.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12__gold_mlhe2'),
    new Laptop(14,'НОУТБУК APPLE MACBOOK PRO 13" I5 2.3/8/128GB SPACE GRAY (MPXQ2)', 399990, 'Powerful Laptop', 'assets/img/l_6.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_pro_with_retina_display_mpxq2_space_gray'),
    new Laptop(15,'НОУТБУК APPLE MACBOOK 12″ I5/512GB/1.3GHZ SPACE GREY (MNYG2)', 496790,'Powerful Laptop', 'assets/img/l_7.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12_space_grey_1_3ghz_mnyg2'),
    new Laptop(16,'НОУТБУК APPLE MACBOOK 12″ I5/512GB/1.3GHZ SPACE GREY (MNYG2)', 496790,'Powerful Laptop', 'assets/img/l_8.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12_space_grey_1_3ghz_mnyg2')
  
  ];
  
  export const products = [
        new Mobile(17,'СМАРТФОН APPLE IPHONE 7 32GB ROSE GOLD',164890,'A large phone with one of the best screens','assets/img/1.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_7_rose_gold_32_gb'),
        new Mobile(18,'СМАРТФОН APPLE IPHONE 11 PRO 64GB SPACE GREY', 384890, 'A large phone with one of the best screens', 'assets/img/2.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_11_64gb_black_mwlt2_77_2121' ),
        new Mobile(19,'СМАРТФОН APPLE IPHONE 11 PRO 64GB SPACE GREY',549890,'A large phone with one of the best screens','assets/img/3.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_11_pro_64gb_space_grey_mwc22_77_2141'),
        new Mobile (20,'СМАРТФОН APPLE IPHONE 11 PRO 64GB SPACE GREY',604890,'A large phone with one of the best screens','assets/img/4.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_11_pro_max_64gb_midnight_green_mwhh2_77_2157'),
        new Mobile (21,'СМАРТФОН APPLE IPHONE 8 64GB GOLD', 254890, 'A large phone with one of the best screens', 'assets/img/5.jpg', 'https://www.sulpak.kz/g/smartfon_apple__iphone8_64gb_gold'),
        new Mobile(22,'СМАРТФОН APPLE IPHONE 7 32GB BLACK', 164890, 'A large phone with one of the best screens', 'assets/img/6.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_7_black_32_gb'),
        new Mobile(23,'СМАРТФОН APPLE IPHONE 7 32GB GOLD', 164890,'A large phone with one of the best screens', 'assets/img/7.jpg', 'https://www.sulpak.kz/g/smartfon_apple_iphone_7_gold_32_gb'),
        new Mobile(24,'СМАРТФОН APPLE IPHONE 7 32GB SILVER', 164890, 'A large phone with one of the best screens', 'assets/img/8.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_7_silver_32_gb'),
        new Laptop(25,'НОУТБУК APPLE MACBOOK AIR 13″ I5 1.8/8GB/128SSD SILVER (MQD32)', 409990, 'Powerful Laptop', 'assets/img/l_1.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_air_13_mqd32rua'),
        new Laptop(26,'НОУТБУК APPLE MACBOOK PRO 13″ I5 2.3/8/128GB SILVER (MPXR2)', 399990, 'Powerful Laptop', 'assets/img/l_3.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_pro_13_mpxr2_silver__a1708'),
        new Laptop(27,'НОУТБУК APPLE MACBOOK PRO 13" I5 2.3/8/128GB SPACE GRAY (MPXQ2)', 399990, 'Powerful Laptop', 'assets/img/l_3.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_pro_with_retina_display_mpxq2_space_gray'),
        new Laptop(28,'НОУТБУК APPLE MACBOOK 12″ CORE M3 1.1/8/256SSD SPACE GRAY (MLH72)', 441590, 'Powerfu; Laptop', 'assets/img/l_4.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12_dyujmov_mlh72_space_gray'),
        new Laptop(29,'НОУТБУК APPLE MACBOOK 12″ CORE M3/ 8.0GB / 256GB SSD GOLD (MLHE2)',446290, 'Powerful Laptop', 'assets/img/l_5.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12__gold_mlhe2'),
        new Laptop(30,'НОУТБУК APPLE MACBOOK PRO 13" I5 2.3/8/128GB SPACE GRAY (MPXQ2)', 399990, 'Powerful Laptop', 'assets/img/l_6.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_pro_with_retina_display_mpxq2_space_gray'),
        new Laptop(31,'НОУТБУК APPLE MACBOOK 12″ I5/512GB/1.3GHZ SPACE GREY (MNYG2)', 496790,'Powerful Laptop', 'assets/img/l_7.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12_space_grey_1_3ghz_mnyg2'),
        new Laptop(32,'НОУТБУК APPLE MACBOOK 12″ I5/512GB/1.3GHZ SPACE GREY (MNYG2)', 496790,'Powerful Laptop', 'assets/img/l_8.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12_space_grey_1_3ghz_mnyg2')
  
  ];
  
    
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */