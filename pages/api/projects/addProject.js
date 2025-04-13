import supabase from "@/lib/supabase";

// Norsk: Lagrer prosjektinfo til databasen
export async function addProject({ title, description, file }) {
  if (!title || !description || !file) {
    throw new Error("Title, description, and image file are required.");
  }

  // 1. Last opp bilde til Supabase Storage
  const fileName = `${Date.now()}-${file.name}`;
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("protfolio-project-photos")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) throw new Error(`Bildeopplasting feilet: ${uploadError.message}`);

  // 2. Lag URL til bildet
  const image_url = supabase
    .storage
    .from("protfolio-project-photos")
    .getPublicUrl(uploadData.path).data.publicUrl;

  // 3. Sett inn prosjektet i databasen
  const { data, error } = await supabase
    .from("projects")
    .insert([{ title, description, image_url }]);

  if (error) throw new Error(`Lagring feilet: ${error.message}`);
  return data;
}
