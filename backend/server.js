"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SQLITE_PATH = exports.PORT = exports.APP_MODE = exports.API = void 0;
const PORT = 5414; // sala (r)
exports.PORT = PORT;
const API = "api";
exports.API = API;
const APP_MODE = "development"; // or 'production'
exports.APP_MODE = APP_MODE;
const SQLITE_PATH = "../Database";
exports.SQLITE_PATH = SQLITE_PATH;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IAppointmentFaker = void 0;
var _faker = require("@faker-js/faker");
var _crypto = require("crypto");
const IAppointmentFaker = () => {
  return {
    id: _faker.faker.number.int(),
    status: (0, _crypto.randomInt)(1, 4),
    patient_id: _faker.faker.number.int(),
    go_in: _faker.faker.date.future(),
    go_out: _faker.faker.date.future(),
    serial_number: _faker.faker.number.int(),
    tests: []
  };
};
exports.IAppointmentFaker = IAppointmentFaker;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IPatientFaker = void 0;
var _crypto = require("crypto");
var _faker = require("@faker-js/faker");
const IPatientFaker = () => {
  return {
    id: (0, _crypto.randomInt)(100),
    name: _faker.faker.person.fullName(),
    birth_day: _faker.faker.date.birthdate(),
    email: _faker.faker.internet.email()
  };
};
exports.IPatientFaker = IPatientFaker;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IProductFaker = void 0;
var _faker = require("@faker-js/faker");
var _crypto = require("crypto");
const IProductFaker = () => {
  return {
    name: _faker.faker.commerce.productName(),
    isFavorite: (0, _crypto.randomInt)(100) < 50
  };
};
exports.IProductFaker = IProductFaker;
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITestFaker = void 0;
const ITestFaker = () => {
  return {};
};
exports.ITestFaker = ITestFaker;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppointmentsController = void 0;
var _IAppointment = require("../Contracts/Models/IAppointment.js");
const AppointmentsController = {
  getAppointments(req, res) {
    let arr = [];
    for (let index = 0; index < 5; index++) {
      arr.push((0, _IAppointment.IAppointmentFaker)());
    }
    return res.status(200).json(arr);
  },
  getAppointmentStatuses(req, res) {
    let arr = [{
      id: 1,
      status: "success",
      description: "patient has attended this appointment."
    }, {
      id: 2,
      status: "waiting",
      description: "patient is waiting until appointment is due."
    }, {
      id: 3,
      status: "failed",
      description: "patient did not attend this appointment."
    }];
    return res.status(200).json(arr);
  }
};
exports.AppointmentsController = AppointmentsController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductController = void 0;
var _IProduct = require("../Contracts/Models/IProduct.js");
// implement secretary interface
const ProductController = {
  getProducts: function (req, res) {
    let arr = [];
    for (let index = 0; index < 5; index++) {
      arr.push((0, _IProduct.IProductFaker)());
    }
    return res.status(200).json(arr);
  },
  addProduct: function (req, res) {
    throw new Error("Function not implemented.");
  },
  deleteProduct: function (req, res) {
    throw new Error("Function not implemented.");
  }
};
exports.ProductController = ProductController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecretaryController = void 0;
var _IPatient = require("../Contracts/Models/IPatient.js");
// implement secretary interface
const SecretaryController = {
  // patient methods
  getPatients(req, res) {
    let patients = [];
    for (let i = 0; i < 5; i++) {
      const mockPatient = (0, _IPatient.IPatientFaker)();
      patients.push(mockPatient);
    }
    return res.status(200).json({
      patients
    });
  },
  addPatient(req, res) {
    return res.status(200).json({
      message: "patient was added successfully."
    });
  },
  deletePatient(req, res) {},
  updatePatient(req, res) {},
  // appointment methods
  makeAppointment(req, res) {},
  getAppointments(req, res) {},
  deleteAppointment(req, res) {},
  updateAppointment(req, res) {},
  // appointment status
  markAppointmentSuccess(req, res) {},
  markAppointmentFailed(req, res) {},
  markAppointmentWaiting(req, res) {}
};
exports.SecretaryController = SecretaryController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoItemController = void 0;
var _tslib = require("tslib");
var _User = require("../TypeORM/Entities/User.js");
// implement secretary interface
const TodoItemController = {
  getItems(req, res) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      const user = yield _User.User.find();
      return res.status(200).json(user);
    });
  },
  getRes(req, res) {
    return res.status(200).json(req.id);
  }
};
exports.TodoItemController = TodoItemController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SQLiteDataSource = void 0;
var _typeorm = require("typeorm");
var _User = require("./TypeORM/Entities/User.js");
var _TodoItem = require("./TypeORM/Entities/TodoItem.js");
var _CreateUserTable = require("./TypeORM/Migrations/1693811920876-CreateUserTable.js");
var _CreateTodoItemTable = require("./TypeORM/Migrations/1693811936730-CreateTodoItemTable.js");
const SQLiteDataSource = new _typeorm.DataSource({
  type: "sqlite",
  // with tauri should be: database: "../backend/Database/database.db",
  database: "./Database/database.db",
  entities: [_User.User, _TodoItem.TodoItem],
  migrations: [_CreateUserTable.CreateUserTable1693811920876, _CreateTodoItemTable.CreateTodoItemTable1693811936730],
  synchronize: true,
  logging: false // Disable logging (or set to true for debugging)
});
exports.SQLiteDataSource = SQLiteDataSource;
"use strict";

require("tslib");
var _config = require("./config.js");
var _express = _interopRequireDefault(require("express"));
var _SecretaryController = require("./Controllers/SecretaryController.js");
var _ProductController = require("./Controllers/ProductController.js");
var _cors = _interopRequireDefault(require("cors"));
var _AppointmentsController = require("./Controllers/AppointmentsController.js");
var _datasrc = require("./datasrc.js");
var _TodoItemController = require("./Controllers/TodoItemController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
const router = _express.default.Router();
_datasrc.SQLiteDataSource.initialize().then(() => {
  console.log("DataSource initialized.");
}).catch(error => {
  console.log("error initializing DataSource:" + error);
});
app.use(_express.default.json());
app.use((0, _cors.default)());
router.get("/list_patients", _SecretaryController.SecretaryController.getPatients);
router.post("/add_patient", _SecretaryController.SecretaryController.addPatient);
router.get("/products", _ProductController.ProductController.getProducts);
router.get("/appointments", _AppointmentsController.AppointmentsController.getAppointments);
router.get("/appointment_statuses", _AppointmentsController.AppointmentsController.getAppointmentStatuses);
router.get("/test", _TodoItemController.TodoItemController.getItems);
router.get("/test2", _TodoItemController.TodoItemController.getRes);
app.use("/api", router);
app.listen(_config.PORT, () => {
  console.log(`now listening on port ${_config.PORT}`);
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockConfig = void 0;
var _faker = require("@faker-js/faker");
//
// !discontuned, use fakers inside Interface files instead
// 

const mockConfig = {
  primitiveValues: {
    xName: _faker.faker.person.fullName(),
    Date: _faker.faker.date.birthdate(),
    xEmail: _faker.faker.internet.email()
  }
};
exports.mockConfig = mockConfig;
"use strict";

var _util = require("../util");
var _config = require("../config");
// Update the path accordingly

describe("removeAllLeadingSlashes", () => {
  test("removes single leading slash", () => {
    const input = "/example";
    const result = (0, _util.removeAllLeadingSlashes)(input);
    expect(result).toBe("example");
  });
  test("handles input with no leading slashes", () => {
    const input = "example";
    const result = (0, _util.removeAllLeadingSlashes)(input);
    expect(result).toBe("example");
  });
  test("handles input with multiple leading slashes", () => {
    const input = "///example";
    const result = (0, _util.removeAllLeadingSlashes)(input);
    expect(result).toBe("example");
  });
});
describe("formatApiUrl", () => {
  test("formats URL correctly", () => {
    const input = "/some-path";
    const result = (0, _util.formatApiUrl)(input);
    expect(result).toBe(`${_config.API}/some-path`);
  });
  test("handles input with no leading slashes", () => {
    const input = "some-path";
    const result = (0, _util.formatApiUrl)(input);
    expect(result).toBe(`${_config.API}/some-path`);
  });
  test("handles input with multiple leading slashes", () => {
    const input = "///some-path";
    const result = (0, _util.formatApiUrl)(input);
    expect(result).toBe(`${_config.API}/some-path`);
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoItem = void 0;
var _tslib = require("tslib");
var _typeorm = require("typeorm");
let TodoItem = class TodoItem extends _typeorm.BaseEntity {};
exports.TodoItem = TodoItem;
(0, _tslib.__decorate)([(0, _typeorm.PrimaryGeneratedColumn)(), (0, _tslib.__metadata)("design:type", Number)], TodoItem.prototype, "id", void 0);
(0, _tslib.__decorate)([(0, _typeorm.Column)(), (0, _tslib.__metadata)("design:type", String)], TodoItem.prototype, "title", void 0);
(0, _tslib.__decorate)([(0, _typeorm.Column)({
  name: "owner_id"
}), (0, _tslib.__metadata)("design:type", Number)], TodoItem.prototype, "ownerId", void 0);
(0, _tslib.__decorate)([(0, _typeorm.ManyToOne)('User', 'TodoItem'), (0, _typeorm.JoinColumn)({
  name: "owner_id"
}), (0, _tslib.__metadata)("design:type", Object)], TodoItem.prototype, "owner", void 0);
exports.TodoItem = TodoItem = (0, _tslib.__decorate)([(0, _typeorm.Entity)()], TodoItem);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _tslib = require("tslib");
var _typeorm = require("typeorm");
let User = class User extends _typeorm.BaseEntity {};
exports.User = User;
(0, _tslib.__decorate)([(0, _typeorm.PrimaryGeneratedColumn)(), (0, _tslib.__metadata)("design:type", Number)], User.prototype, "id", void 0);
(0, _tslib.__decorate)([(0, _typeorm.Column)(), (0, _tslib.__metadata)("design:type", String)], User.prototype, "name", void 0);
(0, _tslib.__decorate)([(0, _typeorm.OneToMany)("TodoItem", "User"), (0, _tslib.__metadata)("design:type", Array)], User.prototype, "todoItems", void 0);
exports.User = User = (0, _tslib.__decorate)([(0, _typeorm.Entity)()], User);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserTable1693811920876 = void 0;
var _tslib = require("tslib");
var _typeorm = require("typeorm");
class CreateUserTable1693811920876 {
  up(queryRunner) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      yield queryRunner.createTable(new _typeorm.Table({
        name: "user",
        columns: [{
          name: "id",
          type: "integer",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        }, {
          name: "name",
          type: "varchar"
        }
        // Add more columns if necessary
        ]
      }));
    });
  }

  down(queryRunner) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      yield queryRunner.dropTable("user");
    });
  }
}
exports.CreateUserTable1693811920876 = CreateUserTable1693811920876;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTodoItemTable1693811936730 = void 0;
var _tslib = require("tslib");
var _typeorm = require("typeorm");
class CreateTodoItemTable1693811936730 {
  up(queryRunner) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      yield queryRunner.createTable(new _typeorm.Table({
        name: "todo_item",
        columns: [{
          name: "id",
          type: "integer",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        }, {
          name: "title",
          type: "varchar"
        }
        // Add more columns if necessary
        ]
      }));
      // Add a foreign key constraint to link the owner_id to the User table
      yield queryRunner.addColumn("todo_item", new _typeorm.TableColumn({
        name: "owner_id",
        type: "integer"
      }));
      yield queryRunner.createForeignKey("todo_item", new _typeorm.TableForeignKey({
        columnNames: ["owner_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE" // Specify the desired behavior on deletion
      }));
    });
  }

  down(queryRunner) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      // Drop the foreign key constraint first
      const table = yield queryRunner.getTable("todo_item");
      const foreignKey = table.foreignKeys.find(fk => fk.columnNames.includes("owner_id"));
      if (foreignKey) {
        yield queryRunner.dropForeignKey("todo_item", foreignKey);
      }
      // Drop the TodoItem table
      yield queryRunner.dropTable("todo_item");
    });
  }
}
exports.CreateTodoItemTable1693811936730 = CreateTodoItemTable1693811936730;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatApiUrl = void 0;
exports.removeAllLeadingSlashes = removeAllLeadingSlashes;
var _config = require("./config");
function removeAllLeadingSlashes(inputString) {
  let startIndex = 0;
  while (startIndex < inputString.length && inputString[startIndex] === "/") {
    startIndex++;
  }
  return inputString.substring(startIndex);
}
const formatApiUrl = url => {
  url = removeAllLeadingSlashes(url);
  return `${_config.API}/${url}`;
};
exports.formatApiUrl = formatApiUrl;
