import supabase from "./supabase";

export async function getCabins(){
let { data: cabin, error } = await supabase
.from('cabin')
.select('*')

if(error){
    console.error(error);
    throw new Error("Get cabin data failed");
}

return cabin;
}

export async function deleteCabins(id){
console.log("-----on delete cabins ----")
const { error } = await supabase
.from('cabin')
.delete()
.eq('id', id)

if(error){
    console.error(error);
    console.log("Unable to delete cabin.")
}
}
