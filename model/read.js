var UserSchema = new mongoose.Schema({
  userid: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  tel: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  useragreement: {type: Boolean, required: true},
});
var UserDetailSchema = new mongoose.Schema({
  userid: {type: String, required: true, unique: true},
  userrole: {
    merchant: {type: Boolean, required: true},
    consumer: {type: Boolean, required: true},
    rider: {type: Boolean, required: true},
  },
  userdetail: {
    name: {
      firstname: {type: String, required: true},
      lastname: {type: String, required: true},
    },
    idcardno: {type: String, required: true},
    lasercode: {type: String, required: true},
    address: {
      addr: {type: String, required: true},
      building: {type: String, required: true},
      moo: {type: String, required: true},
      road: {type: String, required: true},
      soi: {type: String, required: true},
      subdistrict: {type: String, required: true},
      district: {type: String, required: true},
      province: {type: String, required: true},
      postcode: {type: String, required: true},
    },
    telephone: {type: String, required: true},
    mobile: {type: String, required: true},
    imagepath: {type: Array, default: []},
    description: {type: String},
  },
  bankinfo: {
    accno: {type: String, required: true, default: '-'},
    accbank: {type: String, required: true, default: '-'},
  },
  wallet: {
    s_point: {type: Number, required: true, default: 0},
    b_point: {type: Number, required: true, default: 0},
    t_point: {type: Number, required: true, default: 0},
    e_credit: {type: Number, required: true, default: 0},
  },
  networkdetail: {
    upline: {
      u1: {type: String, required: true, default: '-'},
      u2: {type: String, required: true, default: '-'},
      u3: {type: String, required: true, default: '-'},
      u4: {type: String, required: true, default: '-'},
      u5: {type: String, required: true, default: '-'},
      u6: {type: String, required: true, default: '-'},
      u7: {type: String, required: true, default: '-'},
    },
    downline: {
      d1: {type: String, required: true, default: '-'},
      d2: {type: String, required: true, default: '-'},
      d3: {type: String, required: true, default: '-'},
      d4: {type: String, required: true, default: '-'},
      d5: {type: String, required: true, default: '-'},
      d6: {type: String, required: true, default: '-'},
      d7: {type: String, required: true, default: '-'},
    },
  },
  logdetail: {
    createddate: {type: Date, required: true},
    createdby: {type: String, required: true, default: 'SYSTEM'},
    updateddate: {type: Date, required: true},
    updatedby: {type: String, required: true, default: 'SYSTEM'},
  },
});

var ShopSchema = new mongoose.Schema({
  shopid: {type: String, required: true, unique: true},
  shopdetail: {
    merchantid: {type: String, required: true},
    name: {type: String, required: true},
    address: {
      addr: {type: String, required: true},
      building: {type: String, required: true},
      moo: {type: String, required: true},
      road: {type: String, required: true},
      soi: {type: String, required: true},
      subdistrict: {type: String, required: true},
      district: {type: String, required: true},
      province: {type: String, required: true},
      postcode: {type: String, required: true},
    },
    telephone: {type: String, required: true},
    mobile: {type: String, required: true},
    imagepath: {type: Array},
    description: {type: String},
    geolocation: {
      latitude: {type: String, required: true},
      longitude: {type: String, required: true},
    },
  },
  logdetail: {
    createddate: {type: Date, required: true},
    createdby: {type: String, required: true},
    updateddate: {type: Date, required: true},
    updatedby: {type: String, required: true},
  },
});

var FoodSchema = new mongoose.Schema({
  foodid: {type: String, required: true, unique: true},
  shopid: {type: String, required: true},
  name: {type: String, required: true},
  ingrediant: {type: Array, required: true},
  // ingrediant: {
  //     obj: { type: String, required: true },
  //     price: { type: Number, required: true },
  // },
  imgpath: {type: Array, required: true},
  stdprice: {type: Number, required: true},
});
