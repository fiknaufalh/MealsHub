import supabase from "./supabase.js";

export async function getOrderProduct() {
    const { data, error } = await supabase
        .from("order_product")
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
}
