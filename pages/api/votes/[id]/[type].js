import voteController from "../../../../server/components/votes/controller";

export default async function handler(req, res) {
  try {
    const { method, query } = req;
    console.log(`query`, query);
    let result;
    switch (method) {
      case "GET":
        result = await voteController.findAll();
        res.status(200).json(result);
        break;
      case "POST":
        result = await voteController.create(req.body);
        res.status(200).json(result);
        break;
      case "PUT":
        if (query.id && query.type) {
          result = await voteController.addVote(query.id, query.type);
          res.status(200).json(result);
        } else {
          res.status(400).end("Id and Type Are Required");
        }
        break;
      case "DELETE":
        result = await voteController.deleteById(req.body);
        res.status(200).json(result);
        break;
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    res.status(500).json({ error: e.message || "something went wrong" });
  }
}
