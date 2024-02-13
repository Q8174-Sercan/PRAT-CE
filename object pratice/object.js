console.log("Object")



const ogrencilerİsim =["ahmet","ismet","saffet"]
const ogrencilerSoyisim=["yılmaz","can","baki"]
const  ogrenciAdres = ["kadıköy","şeebinkarahisar","seferihisar"]

console.log(`${ogİsim[0]}  - ${ogrencilerSoyisim[0]} - ${ogrAdres[0]} `)




//********************************************************
//* JSON => Javascript Object Notation
//********************************************************

const people = [
    {
      isim: "Ahmet",
      soyİsim: "Yılmaz",
      kimlikNo: "123123341112",
      maas: 70000,
    },
    {
      isim: "Mehmet",
      soyİsim: "Ozturk",
      kimlikNo: "1696571112",
      maas: 50000,
    },
    {
      isim: "Canan",
      soyİsim: "Can",
      kimlikNo: "33344571112",
      maas: 90000,
    },
  ]
  
  const key = prompt(
    "Kisilerini hangi bilgisini ogrenmek istersiniz: isim, soyİsim,kimlikNo, maas?"
  )
  people.forEach((p) => console.log(p.isim))
  people.forEach((p) => console.log(p.maas))
  people.forEach((p) => console.log(p["kimlikNo"]))
  people.forEach((p) => console.log(p[key]))