"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Ping the database
(0, db_1.default)();
//Every app based route will use the /api endpoint
app.use("/api", routes_1.default);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}...🚀🚀🚀`);
});
