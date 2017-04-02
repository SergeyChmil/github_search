type Info = {
  id:number,
  forks_count:number,
  name:string,
  description:string,
  stargazers_count:number,
  watchers_count:number,
  owner:Owner
}

type Owner = {
  avatar_url:string,
  login:string
}
