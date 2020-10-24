export default async function handler(req, res) {
  const {
    query: { param },
    method
  } = req;

  switch (method) {
    case 'GET':
      // Get data from notion api
      if (param[0] === 'page' || param[0] === 'table' || param[0] === 'user') {
        const data = await fetch(
          `https://notion-api.splitbee.io/v1/${param[0]}/${param[1]}`
        ).then((res) => res.json());
        res.json(data);
      } else {
        res.json({});
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
