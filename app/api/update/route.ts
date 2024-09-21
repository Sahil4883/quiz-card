import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const { id, updatedTask } = req.body;

    if (!id || !updatedTask) {
      return res
        .status(400)
        .json({ error: "Missing task id or updated task data" });
    }

    // Here you would typically update the task in your database
    // For example:
    // const result = await updateTaskInDatabase(id, updatedTask);

    return res.status(200).json({ message: "Task updated successfully" });
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
