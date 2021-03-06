import Pageclip from 'pageclip';
const pageclipAPIKey = `${process.env.PAGECLIP_API}`;
const pageclip = new Pageclip(pageclipAPIKey);

export const sendForm = async (req) => {
  return await pageclip.send('ContactForm', JSON.parse(req.body.data)).then((response) => {
    return response;
  });
};
