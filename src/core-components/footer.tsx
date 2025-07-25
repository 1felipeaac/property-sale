import { useEffect, useState } from "react";
import Icon from "../components/icon";
import GitIcon from "../assets/icons/github-logo.svg?react"
import AccessCounter from "./access-counter";

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
    <footer className="text-center py-1 mt-auto">
      <nav className="flex items-center justify-center gap-4">
        <Icon className="" svg={GitIcon}/>
        <a className="align-middle" href={user.html_url} target="_blank">
          {user.html_url}
        </a>
        <AccessCounter/>
      </nav>
    </footer>
  );
}
