import { useEffect, useState } from "react";
import Icon from "../components/icon";
import GitIcon from "../assets/icons/github-logo.svg?react"

export default function Footer() {
  const [user, setUser] = useState({
    html_url: "",
  });

  useEffect(()=>{
      async function fetchData(){
        const response = await fetch("https://api.github.com/users/1felipeaac");
        const data = await response.json()
          setUser({
            html_url: data.html_url
          });
        }
      fetchData();
    },[]);

  return (
    <footer className="my-5 md:my-10">
      <nav className="flex items-center justify-center gap-4">
        <Icon className="" svg={GitIcon}/>
        <p>{user.html_url}</p>
      </nav>
    </footer>
  );
}
