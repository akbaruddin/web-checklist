export default function CheckBox({ title }) {
  return (
    <div style={{ marginBottom: ".6rem" }}>
      <label>
        <input type="checkbox" style={{ marginRight: "10px" }} />
        { title }
      </label>
    </div>
  )
}