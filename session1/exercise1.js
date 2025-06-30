/**
 * Pseudocode area of rectangle
 * 1. define variable and value
 * const length = 5
 * const width = 3 
 * 
 * 2. Search the area
 * areaRectangle = length * width
 * 
 * 3. print area
 * console.log(areaRectangle)
 * 
 */

const length = 5;
const width = 3;

let areaRectangle = length * width; //luas persegi panjang = p*l

console.log(areaRectangle);

/**
 * Pseudocode perimeter of rectangle
 * 1. Define variable and value
 * const length = 5
 * const width = 3 
 * 
 * 2. search the perimeter
 * perimeter = 2 * (length * width
 * 
 * 3. print the result
 * console.log(perimeter) 
 */
let perimeter = 2 * (length + width); //keliling persegi panjang = 2 * (p+l)

console.log(perimeter); 

/**
 * Pseudocode Diameter, circumference, and area of a circle
 * 1. Define the variable and value
 * const radius = 5;
 * conts pi = 3.14;
 * 
 * 2. search the Diameter, circumference, and area
 * let diameter = 2*radius;
 * let circumference = 2*pi*radius
 * let area = pi * (radius**2)
 * 
 * 3. print the result
 * result = `diameter = ${diameter}, circumference = ${circumference}, area = ${area}`
 * console.log(result);
 */

const radius = 5;
const pi = Math.PI;
 
const diameter = 2*radius; //diameter = 2*r
let circumference = 2*pi*radius //keliling = 2*pi*r
let area = pi * (radius**2) //luar = pi * r * r

circumference = circumference.toFixed(4); //toFixed untuk membatasi jumlah angka di belakang koma
area = area.toFixed(3);
  
let resultCircle = `diameter = ${diameter}, circumference = ${circumference}, area = ${area}`
console.log(resultCircle);

/**
 * Pseudocode find angles of triangle if two angles are given
 * 1. define the variable and value
 * angle1 = 80
 * angle2 = 65
 * 
 * 2. search the third angle
 * angle = 180 - (angle1+angle2)
 * 
 * 3. print the result
 * console.log(angle)
 * 
 */

const angle1 = 80;
const angle2= 65;

let angle = 180 - (angle1 + angle2); //total sudut segitiga = 180

console.log(angle);

/**
 * Pseudocode convert days to years, months, and days
 * 1. define variable and value
 * let day = 400;
 * const year = 365;
 * const month = 30;
 * 
 * 2. search year and sisaHari
 * tahun = day/year
 * 
 * 3. search month
 * bulan = sisaHari / month
 * 
 * 4. search day
 * hari = sisaHari % month
 * 
 * 5. print result
 * resultDate = `${tahun} year, ${bulan} month, ${hari} day`;
 * console.log(resultDate);
 */
let day = 400;
const year = 365;
const month = 30;

let tahun = day / year; //cari berapa tahun
tahun = Math.trunc(tahun); // Math.trunc() -> menghilangkan angka di belakang koma

let sisaHari = day % year; //mencari sisa hari setelah menghitung tahun

let bulan = sisaHari / month;
bulan = Math.trunc(bulan);

let hari = sisaHari % month;

resultDate = `${tahun} year, ${bulan} month, ${hari} day`;

console.log(resultDate);

/**
 * Pseudocode to get differecne between dates in day
 * 1. define variable and value
 * const date1 = new Date(2022-01-20) 
 * const date2 = new Date(2022-01-22)
 * const dayInMs = 24 * 3600 * 1000
 * 
 * 2. serach the days
 * let day1 = date1.getTime();
 * let day2 = date2.getTime();
 * 
 * 3. search the difference
 * let days = day1 - day2 
 * 
 * 4. search days
 * difference = days/dayInMs
 * 
 * 5. print result 
 * console.log(difference)
 * 
 */

const date1 = new Date("2022-01-20"); 
const date2 = new Date("2022-01-25");

let day1 = date1.getTime(); //konversi menjadi millisecond semenjak epoch (1970-01-01 00:00:00)
let day2 = date2.getTime();

let dayInMs = 24 * 3600 * 1000; //sehari dalam millisecond

let diffInMs = day2 - day1; //perbedaan dalam milisecond

let differecne = diffInMs / dayInMs; // selisih hari = selisih hari dalam milisecond / sehari dalam milisecond
differecne = Math.abs(differecne);
console.log(differecne);



