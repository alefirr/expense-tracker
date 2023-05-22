"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
// import cors from 'cors';
// import fileUpload from 'express-fileupload';
const app = (0, express_1.default)();
dotenv_1.default.config();
// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
// DB Connection
// app.use(cors());
// app.use(fileUpload());
app.use(express_1.default.json());
app.use(express_1.default.static('uploads'));
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });
// app.listen(PORT, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
// });
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xncg2h5.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
        app.listen(PORT, () => console.log(`Connected to database, starting server on port ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
});
connectToDatabase();
