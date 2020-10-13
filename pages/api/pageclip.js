import { sendForm } from '@/lib/pageclip';

export default async (req, res) => {
  // Return ke res next.js -> merubah ke json -> menunggu promises dari Sendform function yang diimport dari lib

  if (req.method === 'POST') {
    return res.json(
      // siapkan data req
      await sendForm(req).then((response) => {
        return response;
      })
    );
  }
  else {
    return res.json({})
  }
};
