export default function CheckBox({ title, status, index, checklists, checklistIndex }) {
  const checkEvent = (event) => {
    checklists[checklistIndex].lists[index].checked = event.target.checked
    localStorage.setItem("lists", encodeURI(JSON.stringify(checklists)))
  }

  return (
    <div style={{ marginBottom: ".6rem" }}>
      <label>
        <input type="checkbox" value={title} onChange={checkEvent} defaultChecked={status} style={{ marginRight: "10px" }} />
        { title }
      </label>
    </div>
  )
}