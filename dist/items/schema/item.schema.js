"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ItemSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    description: String
});
//# sourceMappingURL=item.schema.js.map