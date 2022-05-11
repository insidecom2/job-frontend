export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    res.status(200).json({ status: true, data: { email: email } });
  } else {
    res.status(400);
  }
}
