// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CHECKLISTS from "../../components/Checklist.json";

export default (req, res) => {
  const newChecklists = CHECKLISTS.map(checklist => {
    const lists = checklist.lists.map(list => list.title);

    return {
      "title": checklist.title,
      "lists": lists
    }
  })

  res.statusCode = 200
  res.json(newChecklists)
}
