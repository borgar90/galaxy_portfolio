import  supabase  from "@/lib/supabase"

export async function addProject({ title, description, image_url }) {
  const { data, error } = await supabase
    .from('projects')
    .insert([{ title, description, image_url }])

  if (error) throw new Error(error.message)
  return data
}