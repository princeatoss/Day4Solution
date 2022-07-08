import axios from "axios";

export default async function getcompany(req,res){
  let body;
  let name=req.query.name
  const url=`${process.env.URL}`
  const data=`query($name:String!){
    company(name:$name){
    name
      id
  }
  }
  `
  const vars={"name":name}
  const gqlQuery = { "query": data,"variables": vars};
  const response= await axios.post(url,gqlQuery);
    body=response.data
    console.log(body)
  res.json(body)
}