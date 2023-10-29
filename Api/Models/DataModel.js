class DataModel {
  constructor(scriptResult) {
    this.scriptResult = scriptResult;
  }
}

module.exports = DataModel;

function ItemModel(hesap_kodu, borc) {
  this.hesap_kodu = hesap_kodu;
  this.borc = borc;
  this.hesap_kodlari = hesap_kodu.split(",");
}

module.exports = ItemModel;
