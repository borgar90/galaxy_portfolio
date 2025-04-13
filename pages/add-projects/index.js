import { useState } from "react"
import { addProject } from "@/lib/api" // eller "../lib/api" avhengig av struktur

export default function AddProjectPage() {
  const [form, setForm] = useState({ title: "", description: "" })
  const [status, setStatus] = useState(null)
  const [file, setFile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newProject = await addProject({
        title: form.title,
        description: form.description,
        file,
      })
      setStatus("Prosjektet ble lagt til!")
      console.log("✅ Lagt til:", newProject)
    } catch (error) {
      setStatus("⚠️ Feil: " + error.message)
      console.error("🚨 Feil:", error)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Legg til prosjekt</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Tittel"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Beskrivelse"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Lagre
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  )
}
