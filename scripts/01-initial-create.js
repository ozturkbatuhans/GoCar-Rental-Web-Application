const { DatabaseSync} = require("node:sqlite");

//burasi yeni olacak
//const db = new DatabaseSync("???");
const db = new DatabaseSync("./data/cars.db");

db.exec(`
    create table if not exists cars (
        id int primary key,
        type text,
        price int,
        imageUrl text,
        vehicleType text
    )
    `);

const insert = db.prepare("insert into cars (id, type, price, imageUrl, vehicleType) values (?,?,?, ?,?)");

insert.run(1, "BMW X1", 320, "/images/car1.png", "SUV");
insert.run(2, "BMW M2", 280, "/images/car2.png", "SUV");
insert.run(3, "Ford Explorer", 380, "/images/car3.png", "Sedan");
insert.run(4, "Ferrari", 500, "/images/car4.png", "Sport");
insert.run(5, "Mercedes-Benz", 275, "/images/car5.png", "SUV");
insert.run(6, "Sports car", 345, "/images/car6.png", "Sport");
insert.run(7, "Tesla", 1, "/images/car7.png", "SUV");
insert.run(10, "BMW X1", 323, "/images/car1.png", "SUV");
insert.run(20, "BMW M2", 281, "/images/car2.png", "SUV");
insert.run(30, "Ford Explorer", 390, "/images/car3.png", "Sedan");
insert.run(40, "Ferrari", 100, "/images/car4.png", "Sport");
insert.run(50, "Mercedes-Benz", 233, "/images/car5.png", "SUV");
insert.run(70, "Tesla", 11, "/images/car7.png", "SUV");
insert.run(100, "BMW X1", 333, "/images/car1.png", "SUV");
insert.run(200, "BMW M2", 210, "/images/car2.png", "SUV");
insert.run(300, "Ford Explorer", 390, "/images/car3.png", "Sedan");
insert.run(400, "Ferrari", 530, "/images/car4.png", "Sport");
insert.run(700, "Tesla", 101, "/images/car7.png", "SUV");
