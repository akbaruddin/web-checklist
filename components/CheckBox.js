export default function CheckBox({ title }) {
  return (
    <div>
      <label>
        <input type="checkbox" />
        { title }
      </label>
    </div>
  )
}