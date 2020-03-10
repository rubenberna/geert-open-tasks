import nextConnect from 'next-connect';
import axios from 'axios'

const handler = nextConnect();

const baseURL = process.env.baseURL
const api_key = process.env.api_key

handler.get( async (req, res) => {
  try {
    const  q = `
    {
      listOpenedTasks(size: 300){
        total,
        records{
          nodes{
            id,
            city,
            title,
            description,
            createdAt,
            clientName,
            clientProfileUrl,
            startAt,
            atAddress,
            categories{
              nodes{
                description
              }
            }
          }
        }
      }
    }
    `
    const body = JSON.stringify({ query: q })
    const {data} = await axios.post(baseURL, body, {
      headers: {
        "Content-Type": "application/json",
        "Api-Key": api_key,
        "referer": "https://api.taskbooker.be"
      },
    })
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json(data.data);
  } catch (e) {
    console.log('error :', e);
    res.json(e)
  }
})

export default handler
