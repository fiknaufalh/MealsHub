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
exports.getPayment = void 0;
const supabase_js_1 = __importDefault(require("./supabase.js"));
function getPayment() {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, error } = yield supabase_js_1.default
            .from("payment")
            .select("*")
            // Filters
            .eq("column", "Equal to")
            .gt("column", "Greater than")
            .lt("column", "Less than")
            .gte("column", "Greater than or equal to")
            .lte("column", "Less than or equal to")
            .like("column", "%CaseSensitive%")
            .ilike("column", "%CaseInsensitive%")
            .is("column", null)
            .in("column", ["Array", "Values"])
            .neq("column", "Not equal to");
        if (error) {
            console.log(error);
            throw new Error("Order could not be loaded.");
        }
        return data;
    });
}
exports.getPayment = getPayment;
