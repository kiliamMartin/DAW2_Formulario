import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid'
import { Car } from '../interfaces/car';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  CarsList: Car[] = [
    {id:nanoid(),make:"Mazda",model:"Miata MX-5",year:1995,VIN:"1G4GF5G3XFF566694"},
    {id:nanoid(),make:"Subaru",model:"Legacy",year:2002,VIN:"SCFFDAAE9AG231939"},
    {id:nanoid(),make:"Mitsubishi",model:"Mirage",year:1989,VIN:"WBAYF8C52ED840141"},
    {id:nanoid(),make:"Dodge",model:"Ram 1500 Club",year:1998,VIN:"WAUDF68E65A348113"},
    {id:nanoid(),make:"MINI",model:"MINI",year:2002,VIN:"JTHBK1GG0D1792077"},
    {id:nanoid(),make:"Honda",model:"CR-X",year:1985,VIN:"1C4AJWAG3FL970044"},
    {id:nanoid(),make:"Pontiac",model:"Sunbird",year:1984,VIN:"WAUVT68E94A780299"},
    {id:nanoid(),make:"Honda",model:"Insight",year:2005,VIN:"JTDKN3DU1B0073941"},
    {id:nanoid(),make:"Nissan",model:"Xterra",year:2000,VIN:"2T1KU4EE5CC700129"},
    {id:nanoid(),make:"Toyota",model:"Matrix",year:2011,VIN:"JM1CW2BL3F0621241"},
    {id:nanoid(),make:"Lexus",model:"IS",year:2003,VIN:"SCBZB25E51C994939"},
    {id:nanoid(),make:"Chrysler",model:"Crossfire",year:2005,VIN:"JH4KB2F50AC765807"},
    {id:nanoid(),make:"Pontiac",model:"Grand Prix",year:1974,VIN:"KNAGM4AD2B5022399"},
    {id:nanoid(),make:"Studebaker",model:"Avanti",year:1963,VIN:"3N1CE2CP3FL971091"},
    {id:nanoid(),make:"Nissan",model:"Xterra",year:2000,VIN:"WAUMK78K49A738625"},
    {id:nanoid(),make:"Buick",model:"Coachbuilder",year:1993,VIN:"JA32U2FU5FU066921"},
    {id:nanoid(),make:"Mitsubishi",model:"Chariot",year:1992,VIN:"JTEBU5JR4E5031958"},
    {id:nanoid(),make:"Buick",model:"Rainier",year:2007,VIN:"WAUKH78E66A166551"},
    {id:nanoid(),make:"GMC",model:"Yukon",year:2003,VIN:"1G6DJ5EG9A0224437"},
    {id:nanoid(),make:"Buick",model:"Terraza",year:2006,VIN:"WA1WYBFE7AD611617"},
    {id:nanoid(),make:"Acura",model:"Legend",year:1995,VIN:"WBAYF4C51DD210229"},
    {id:nanoid(),make:"Mercedes-Benz",model:"W126",year:1983,VIN:"JTEBU5JRXA5971613"},
    {id:nanoid(),make:"Mazda",model:"Navajo",year:1994,VIN:"5FRYD3H6XGB175433"},
    {id:nanoid(),make:"Saturn",model:"VUE",year:2007,VIN:"JTDBT4K35B4212127"},
    {id:nanoid(),make:"Maserati",model:"Quattroporte",year:2012,VIN:"1C3CDFCBXED506795"},
    {id:nanoid(),make:"MINI",model:"Clubman",year:2010,VIN:"KM8NU4CC6CU959788"},
    {id:nanoid(),make:"Ford",model:"F250",year:1993,VIN:"3D73Y3HLXBG901256"},
    {id:nanoid(),make:"Subaru",model:"Justy",year:1987,VIN:"3D7LP2ET7BG209036"},
    {id:nanoid(),make:"Mercury",model:"Tracer",year:1997,VIN:"1G4HP57M69U324320"},
    {id:nanoid(),make:"Lincoln",model:"MKZ",year:2010,VIN:"2G4GS5GX9E9003108"},
    {id:nanoid(),make:"Aptera",model:"Typ-1",year:2009,VIN:"WBALZ3C52CD786860"},
    {id:nanoid(),make:"Lexus",model:"GS",year:2010,VIN:"JH4CW2H55DC560199"},
    {id:nanoid(),make:"Toyota",model:"Camry",year:1999,VIN:"1FTEW1CF1FK595218"},
    {id:nanoid(),make:"GMC",model:"Safari",year:1996,VIN:"WA1DGAFE9DD462099"},
    {id:nanoid(),make:"Mitsubishi",model:"Starion",year:1989,VIN:"1D7RV1CT9BS392820"},
    {id:nanoid(),make:"Chrysler",model:"New Yorker",year:1993,VIN:"2G4GS5EV7D9892121"},
    {id:nanoid(),make:"BMW",model:"M3",year:2012,VIN:"1C4NJCBA8DD014401"},
    {id:nanoid(),make:"BMW",model:"3 Series",year:1993,VIN:"WAULD64B24N850797"},
    {id:nanoid(),make:"Mitsubishi",model:"Diamante",year:2005,VIN:"1G6AJ5SX3D0278375"},
    {id:nanoid(),make:"Toyota",model:"Corolla",year:1992,VIN:"1G6DZ67A080206488"},
    {id:nanoid(),make:"Mercedes-Benz",model:"S-Class",year:2002,VIN:"3C3CFFER6FT227649"},
    {id:nanoid(),make:"Lincoln",model:"MKS",year:2009,VIN:"WAUAGAFD8DN311858"},
    {id:nanoid(),make:"Suzuki",model:"Equator",year:2012,VIN:"JTEBU5JR4B5183119"},
    {id:nanoid(),make:"Volkswagen",model:"Type 2",year:1988,VIN:"2G61P5S30D9196606"},
    {id:nanoid(),make:"Buick",model:"Skylark",year:1995,VIN:"1FMEU3BE7AU097804"},
    {id:nanoid(),make:"Suzuki",model:"X-90",year:1996,VIN:"1J4PR4GK9AC793697"},
    {id:nanoid(),make:"Ford",model:"E-Series",year:2012,VIN:"1VWAP7A30EC800608"},
    {id:nanoid(),make:"Honda",model:"Accord",year:1994,VIN:"2G4WS52J051029903"},
    {id:nanoid(),make:"Chrysler",model:"Town & Country",year:2002,VIN:"1G4GA5GC7BF765680"},
    {id:nanoid(),make:"Pontiac",model:"GTO",year:2006,VIN:"1FTMF1CW3AF842526"},
    {id:nanoid(),make:"Mitsubishi",model:"Montero Sport",year:1999,VIN:"WA1LFAFP6BA741122"},
    {id:nanoid(),make:"Porsche",model:"Boxster",year:2013,VIN:"WAUEV74F08N467848"},
    {id:nanoid(),make:"Mercedes-Benz",model:"CLK-Class",year:2003,VIN:"JN1AZ4EH0FM453989"},
    {id:nanoid(),make:"Mazda",model:"MX-3",year:1993,VIN:"1FTKR1AD2AP791398"},
    {id:nanoid(),make:"Audi",model:"R8",year:2010,VIN:"WVWED7AJ8CW807085"},
    {id:nanoid(),make:"Toyota",model:"Prius",year:2004,VIN:"3D73Y3HL0AG475382"},
    {id:nanoid(),make:"Hyundai",model:"Sonata",year:1998,VIN:"JN8AZ2KR5ET223422"},
    {id:nanoid(),make:"Pontiac",model:"Grand Prix",year:1999,VIN:"WAUHF78P88A285450"},
    {id:nanoid(),make:"Plymouth",model:"Neon",year:1997,VIN:"ML32A3HJ4EH460018"},
    {id:nanoid(),make:"Ford",model:"Lightning",year:1994,VIN:"JTDKTUD30ED877373"},
    {id:nanoid(),make:"Acura",model:"RDX",year:2010,VIN:"SCBFT7ZA6EC057415"},
    {id:nanoid(),make:"Oldsmobile",model:"Silhouette",year:1999,VIN:"WAUGL98E48A498619"},
    {id:nanoid(),make:"Honda",model:"Pilot",year:2012,VIN:"WVWGD7AJ9EW908292"},
    {id:nanoid(),make:"Mitsubishi",model:"Galant",year:2001,VIN:"SAJWA1CB7BL686812"},
    {id:nanoid(),make:"Chevrolet",model:"Suburban 2500",year:2009,VIN:"WAUKF98E88A320598"},
    {id:nanoid(),make:"Buick",model:"LeSabre",year:1989,VIN:"YV1672MK3B2967782"},
    {id:nanoid(),make:"Hyundai",model:"Azera",year:2012,VIN:"WUAW2AFC7FN560379"},
    {id:nanoid(),make:"Acura",model:"TSX",year:2007,VIN:"1G6AC5S37F0584764"},
    {id:nanoid(),make:"Toyota",model:"Highlander",year:2002,VIN:"WAUAVAFA9AN395910"},
    {id:nanoid(),make:"Saab",model:"9-3",year:2010,VIN:"1FTNF1E89AK927977"},
    {id:nanoid(),make:"Cadillac",model:"STS",year:2008,VIN:"WBAUP7C50AV061458"},
    {id:nanoid(),make:"Ford",model:"F250",year:1996,VIN:"WA1WMAFE2CD909629"},
    {id:nanoid(),make:"Mercury",model:"Capri",year:1993,VIN:"YV4902DZ7E2264918"},
    {id:nanoid(),make:"GMC",model:"Vandura 1500",year:1993,VIN:"JN1CV6FE3AM053258"},
    {id:nanoid(),make:"Lotus",model:"Exige",year:2012,VIN:"WA1YD54B03N116154"},
    {id:nanoid(),make:"Volkswagen",model:"Jetta",year:1997,VIN:"WAUEFBFLXAN135604"},
    {id:nanoid(),make:"Hyundai",model:"Veracruz",year:2010,VIN:"WAUJT58E73A600227"},
    {id:nanoid(),make:"Nissan",model:"Titan",year:2009,VIN:"1G4PR5SK4C4914230"},
    {id:nanoid(),make:"Infiniti",model:"M",year:2009,VIN:"SALWG2VF8FA335193"},
    {id:nanoid(),make:"BMW",model:"X5",year:2010,VIN:"3C6LD4AT8CG039959"},
    {id:nanoid(),make:"Oldsmobile",model:"Ciera",year:1996,VIN:"WAUEFAFL7CN612910"},
    {id:nanoid(),make:"Mazda",model:"MPV",year:2000,VIN:"ZFBCFADH5FZ502060"},
    {id:nanoid(),make:"Suzuki",model:"Sidekick",year:1995,VIN:"WBA3K5C58EF948935"},
    {id:nanoid(),make:"Mitsubishi",model:"Chariot",year:1985,VIN:"WAUWGBFC8EN914880"},
    {id:nanoid(),make:"Pontiac",model:"Bonneville",year:1986,VIN:"1G6AJ1R32F0269553"},
    {id:nanoid(),make:"Toyota",model:"Tundra",year:2002,VIN:"WA1C8BFP8DA168940"},
    {id:nanoid(),make:"Hyundai",model:"Accent",year:1999,VIN:"WBA3A9G59DN111782"},
    {id:nanoid(),make:"Jaguar",model:"XJ Series",year:1999,VIN:"JTDZN3EU1D3297628"},
    {id:nanoid(),make:"Chevrolet",model:"Tracker",year:2000,VIN:"JTDJTUD36ED095056"},
    {id:nanoid(),make:"Dodge",model:"Ram Van 1500",year:2001,VIN:"1G6DL5ED0B0554100"},
    {id:nanoid(),make:"Infiniti",model:"G",year:2009,VIN:"KNADH4A33B6710677"},
    {id:nanoid(),make:"Ford",model:"Taurus",year:1998,VIN:"1FMNE1BW6AD351299"},
    {id:nanoid(),make:"Suzuki",model:"Sidekick",year:1994,VIN:"3D4PH6FV6AT671712"},
    {id:nanoid(),make:"Volvo",model:"XC70",year:2005,VIN:"1C3CDZAB0EN581472"},
    {id:nanoid(),make:"Pontiac",model:"Trans Sport",year:1995,VIN:"3N1AB6AP0AL675013"},
    {id:nanoid(),make:"BMW",model:"3 Series",year:2005,VIN:"WBAWL13519P072373"},
    {id:nanoid(),make:"Toyota",model:"Matrix",year:2010,VIN:"1GYS3DEF3BR265508"},
    {id:nanoid(),make:"Mazda",model:"Protege",year:1999,VIN:"1GYUKJEF1AR825163"},
    {id:nanoid(),make:"Dodge",model:"Aspen",year:1976,VIN:"YV1902AH5E1982689"},
    {id:nanoid(),make:"Lamborghini",model:"Murciélago",year:2008,VIN:"KMHEC4A40EA899462"}
  ];

  constructor() { }

  getCars(){
    return this.CarsList.slice();
  }

  deleteCar(id:string){
    console.log(this.CarsList.slice().length)
    for (let index = 0; index < this.CarsList.slice().length; index++) {
      if (this.CarsList.slice()[index].id === id){
          this.CarsList.splice(index,1)
          console.log("works")
          console.log(this.CarsList.slice().length)
      }
      
    }
  }
}
