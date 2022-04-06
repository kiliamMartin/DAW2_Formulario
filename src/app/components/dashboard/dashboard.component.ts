import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//import { MatTableDataSource } from '@angular/material/table';
import { Car } from 'src/app/interfaces/car';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  CarsList: Car[] = [
    {id:1,make:"Mazda",model:"Miata MX-5",year:1995,VIN:"1G4GF5G3XFF566694"},
    {id:2,make:"Subaru",model:"Legacy",year:2002,VIN:"SCFFDAAE9AG231939"},
    {id:3,make:"Mitsubishi",model:"Mirage",year:1989,VIN:"WBAYF8C52ED840141"},
    {id:4,make:"Dodge",model:"Ram 1500 Club",year:1998,VIN:"WAUDF68E65A348113"},
    {id:5,make:"MINI",model:"MINI",year:2002,VIN:"JTHBK1GG0D1792077"},
    {id:6,make:"Honda",model:"CR-X",year:1985,VIN:"1C4AJWAG3FL970044"},
    {id:7,make:"Pontiac",model:"Sunbird",year:1984,VIN:"WAUVT68E94A780299"},
    {id:8,make:"Honda",model:"Insight",year:2005,VIN:"JTDKN3DU1B0073941"},
    {id:9,make:"Nissan",model:"Xterra",year:2000,VIN:"2T1KU4EE5CC700129"},
    {id:10,make:"Toyota",model:"Matrix",year:2011,VIN:"JM1CW2BL3F0621241"},
    {id:11,make:"Lexus",model:"IS",year:2003,VIN:"SCBZB25E51C994939"},
    {id:12,make:"Chrysler",model:"Crossfire",year:2005,VIN:"JH4KB2F50AC765807"},
    {id:13,make:"Pontiac",model:"Grand Prix",year:1974,VIN:"KNAGM4AD2B5022399"},
    {id:14,make:"Studebaker",model:"Avanti",year:1963,VIN:"3N1CE2CP3FL971091"},
    {id:15,make:"Nissan",model:"Xterra",year:2000,VIN:"WAUMK78K49A738625"},
    {id:16,make:"Buick",model:"Coachbuilder",year:1993,VIN:"JA32U2FU5FU066921"},
    {id:17,make:"Mitsubishi",model:"Chariot",year:1992,VIN:"JTEBU5JR4E5031958"},
    {id:18,make:"Buick",model:"Rainier",year:2007,VIN:"WAUKH78E66A166551"},
    {id:19,make:"GMC",model:"Yukon",year:2003,VIN:"1G6DJ5EG9A0224437"},
    {id:20,make:"Buick",model:"Terraza",year:2006,VIN:"WA1WYBFE7AD611617"},
    {id:21,make:"Acura",model:"Legend",year:1995,VIN:"WBAYF4C51DD210229"},
    {id:22,make:"Mercedes-Benz",model:"W126",year:1983,VIN:"JTEBU5JRXA5971613"},
    {id:23,make:"Mazda",model:"Navajo",year:1994,VIN:"5FRYD3H6XGB175433"},
    {id:24,make:"Saturn",model:"VUE",year:2007,VIN:"JTDBT4K35B4212127"},
    {id:25,make:"Maserati",model:"Quattroporte",year:2012,VIN:"1C3CDFCBXED506795"},
    {id:26,make:"MINI",model:"Clubman",year:2010,VIN:"KM8NU4CC6CU959788"},
    {id:27,make:"Ford",model:"F250",year:1993,VIN:"3D73Y3HLXBG901256"},
    {id:28,make:"Subaru",model:"Justy",year:1987,VIN:"3D7LP2ET7BG209036"},
    {id:29,make:"Mercury",model:"Tracer",year:1997,VIN:"1G4HP57M69U324320"},
    {id:30,make:"Lincoln",model:"MKZ",year:2010,VIN:"2G4GS5GX9E9003108"},
    {id:31,make:"Aptera",model:"Typ-1",year:2009,VIN:"WBALZ3C52CD786860"},
    {id:32,make:"Lexus",model:"GS",year:2010,VIN:"JH4CW2H55DC560199"},
    {id:33,make:"Toyota",model:"Camry",year:1999,VIN:"1FTEW1CF1FK595218"},
    {id:34,make:"GMC",model:"Safari",year:1996,VIN:"WA1DGAFE9DD462099"},
    {id:35,make:"Mitsubishi",model:"Starion",year:1989,VIN:"1D7RV1CT9BS392820"},
    {id:36,make:"Chrysler",model:"New Yorker",year:1993,VIN:"2G4GS5EV7D9892121"},
    {id:37,make:"BMW",model:"M3",year:2012,VIN:"1C4NJCBA8DD014401"},
    {id:38,make:"BMW",model:"3 Series",year:1993,VIN:"WAULD64B24N850797"},
    {id:39,make:"Mitsubishi",model:"Diamante",year:2005,VIN:"1G6AJ5SX3D0278375"},
    {id:40,make:"Toyota",model:"Corolla",year:1992,VIN:"1G6DZ67A080206488"},
    {id:41,make:"Mercedes-Benz",model:"S-Class",year:2002,VIN:"3C3CFFER6FT227649"},
    {id:42,make:"Lincoln",model:"MKS",year:2009,VIN:"WAUAGAFD8DN311858"},
    {id:43,make:"Suzuki",model:"Equator",year:2012,VIN:"JTEBU5JR4B5183119"},
    {id:44,make:"Volkswagen",model:"Type 2",year:1988,VIN:"2G61P5S30D9196606"},
    {id:45,make:"Buick",model:"Skylark",year:1995,VIN:"1FMEU3BE7AU097804"},
    {id:46,make:"Suzuki",model:"X-90",year:1996,VIN:"1J4PR4GK9AC793697"},
    {id:47,make:"Ford",model:"E-Series",year:2012,VIN:"1VWAP7A30EC800608"},
    {id:48,make:"Honda",model:"Accord",year:1994,VIN:"2G4WS52J051029903"},
    {id:49,make:"Chrysler",model:"Town & Country",year:2002,VIN:"1G4GA5GC7BF765680"},
    {id:50,make:"Pontiac",model:"GTO",year:2006,VIN:"1FTMF1CW3AF842526"},
    {id:51,make:"Mitsubishi",model:"Montero Sport",year:1999,VIN:"WA1LFAFP6BA741122"},
    {id:52,make:"Porsche",model:"Boxster",year:2013,VIN:"WAUEV74F08N467848"},
    {id:53,make:"Mercedes-Benz",model:"CLK-Class",year:2003,VIN:"JN1AZ4EH0FM453989"},
    {id:54,make:"Mazda",model:"MX-3",year:1993,VIN:"1FTKR1AD2AP791398"},
    {id:55,make:"Audi",model:"R8",year:2010,VIN:"WVWED7AJ8CW807085"},
    {id:56,make:"Toyota",model:"Prius",year:2004,VIN:"3D73Y3HL0AG475382"},
    {id:57,make:"Hyundai",model:"Sonata",year:1998,VIN:"JN8AZ2KR5ET223422"},
    {id:58,make:"Pontiac",model:"Grand Prix",year:1999,VIN:"WAUHF78P88A285450"},
    {id:59,make:"Plymouth",model:"Neon",year:1997,VIN:"ML32A3HJ4EH460018"},
    {id:60,make:"Ford",model:"Lightning",year:1994,VIN:"JTDKTUD30ED877373"},
    {id:61,make:"Acura",model:"RDX",year:2010,VIN:"SCBFT7ZA6EC057415"},
    {id:62,make:"Oldsmobile",model:"Silhouette",year:1999,VIN:"WAUGL98E48A498619"},
    {id:63,make:"Honda",model:"Pilot",year:2012,VIN:"WVWGD7AJ9EW908292"},
    {id:64,make:"Mitsubishi",model:"Galant",year:2001,VIN:"SAJWA1CB7BL686812"},
    {id:65,make:"Chevrolet",model:"Suburban 2500",year:2009,VIN:"WAUKF98E88A320598"},
    {id:66,make:"Buick",model:"LeSabre",year:1989,VIN:"YV1672MK3B2967782"},
    {id:67,make:"Hyundai",model:"Azera",year:2012,VIN:"WUAW2AFC7FN560379"},
    {id:68,make:"Acura",model:"TSX",year:2007,VIN:"1G6AC5S37F0584764"},
    {id:69,make:"Toyota",model:"Highlander",year:2002,VIN:"WAUAVAFA9AN395910"},
    {id:70,make:"Saab",model:"9-3",year:2010,VIN:"1FTNF1E89AK927977"},
    {id:71,make:"Cadillac",model:"STS",year:2008,VIN:"WBAUP7C50AV061458"},
    {id:72,make:"Ford",model:"F250",year:1996,VIN:"WA1WMAFE2CD909629"},
    {id:73,make:"Mercury",model:"Capri",year:1993,VIN:"YV4902DZ7E2264918"},
    {id:74,make:"GMC",model:"Vandura 1500",year:1993,VIN:"JN1CV6FE3AM053258"},
    {id:75,make:"Lotus",model:"Exige",year:2012,VIN:"WA1YD54B03N116154"},
    {id:76,make:"Volkswagen",model:"Jetta",year:1997,VIN:"WAUEFBFLXAN135604"},
    {id:77,make:"Hyundai",model:"Veracruz",year:2010,VIN:"WAUJT58E73A600227"},
    {id:78,make:"Nissan",model:"Titan",year:2009,VIN:"1G4PR5SK4C4914230"},
    {id:79,make:"Infiniti",model:"M",year:2009,VIN:"SALWG2VF8FA335193"},
    {id:80,make:"BMW",model:"X5",year:2010,VIN:"3C6LD4AT8CG039959"},
    {id:81,make:"Oldsmobile",model:"Ciera",year:1996,VIN:"WAUEFAFL7CN612910"},
    {id:82,make:"Mazda",model:"MPV",year:2000,VIN:"ZFBCFADH5FZ502060"},
    {id:83,make:"Suzuki",model:"Sidekick",year:1995,VIN:"WBA3K5C58EF948935"},
    {id:84,make:"Mitsubishi",model:"Chariot",year:1985,VIN:"WAUWGBFC8EN914880"},
    {id:85,make:"Pontiac",model:"Bonneville",year:1986,VIN:"1G6AJ1R32F0269553"},
    {id:86,make:"Toyota",model:"Tundra",year:2002,VIN:"WA1C8BFP8DA168940"},
    {id:87,make:"Hyundai",model:"Accent",year:1999,VIN:"WBA3A9G59DN111782"},
    {id:88,make:"Jaguar",model:"XJ Series",year:1999,VIN:"JTDZN3EU1D3297628"},
    {id:89,make:"Chevrolet",model:"Tracker",year:2000,VIN:"JTDJTUD36ED095056"},
    {id:90,make:"Dodge",model:"Ram Van 1500",year:2001,VIN:"1G6DL5ED0B0554100"},
    {id:91,make:"Infiniti",model:"G",year:2009,VIN:"KNADH4A33B6710677"},
    {id:92,make:"Ford",model:"Taurus",year:1998,VIN:"1FMNE1BW6AD351299"},
    {id:93,make:"Suzuki",model:"Sidekick",year:1994,VIN:"3D4PH6FV6AT671712"},
    {id:94,make:"Volvo",model:"XC70",year:2005,VIN:"1C3CDZAB0EN581472"},
    {id:95,make:"Pontiac",model:"Trans Sport",year:1995,VIN:"3N1AB6AP0AL675013"},
    {id:96,make:"BMW",model:"3 Series",year:2005,VIN:"WBAWL13519P072373"},
    {id:97,make:"Toyota",model:"Matrix",year:2010,VIN:"1GYS3DEF3BR265508"},
    {id:98,make:"Mazda",model:"Protege",year:1999,VIN:"1GYUKJEF1AR825163"},
    {id:99,make:"Dodge",model:"Aspen",year:1976,VIN:"YV1902AH5E1982689"},
    {id:100,make:"Lamborghini",model:"Murciélago",year:2008,VIN:"KMHEC4A40EA899462"}
  ];



  displayedColumns: string[] = ['id', 'make', 'model', 'year', 'VIN', 'actions'];
  dataSource = new MatTableDataSource(this.CarsList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor() { }

  


  ngOnInit(): void {
  }

}
