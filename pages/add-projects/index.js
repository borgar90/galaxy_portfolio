import { useState } from "react"
import { addProject } from "@/lib/api"

export default function AddProjectPage() {
  const [form, setForm] = useState({ title: "", description: "", image_url: "" })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addProject(form)
      setStatus("✅ Prosjekt lagt til!")
      setForm({ title: "", description: "", image_url: "" })
    } catch (err) {
      setStatus("❌ Feil: " + err.message)
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
          name="image_url"
          placeholder="Bilde-URL"
          value={form.image_url}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Lagre</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  )
}
