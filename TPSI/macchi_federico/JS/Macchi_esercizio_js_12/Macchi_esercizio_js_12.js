function Animale(specie, colore, taglia){
  this.specie = specie;
  this.colore = colore;
  this.taglia = taglia;

  this.suono = function() {
      console.log("emetto un verso");
  };

  this.mangia = function() {
      console.log("sto mangiando");
  };

  this.enumera = function() {
      console.log(Object.keys(this));
  };
};


function Automobile(marca, colore, anno){
  this.marca = marca;
  this.colore = colore;
  this.anno = anno;

  this.accensione = function() {
      console.log("mi accendo");
  };

  this.retro = function() {
      console.log("retro");
  };

  this.enumera = function() {
      console.log(Object.keys(this));
  };
};



function Poligono(lati, area, perimetro){
  this.lati = lati;
  this.area = area;
  this.perimetro = perimetro;

  this.area = function() {
      console.log(`la mia area è: `, area);
  };

  this.perimetro = function() {
      console.log(`il mio perimetro è: `, perimetro);
  };

  this.enumera = function() {
      console.log(Object.keys(this));
  };
};


let animale = new Animale('cane', 'marrone', 'media')
let auto = new Automobile('marca1', 'nero', '2000')
let poligono = new Poligono('5', '20', '15')


animale.suono();
animale.mangia();
animale.enumera();

auto.accensione();
auto.retro();
auto.enumera();

poligono.area();
poligono.perimetro();
poligono.enumera();