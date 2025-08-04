import { useEffect, useState } from "react";
import Icon from "../components/icon";
import GitIcon from "../assets/icons/github-logo.svg?react"
import AccessCounter from "./access-counter";

interface GithubUser {
  name: string;
  email: string | null;
  html_url: string;
  avatar_url: string;
}

export default function Footer() {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/1felipeaac', {
      headers: {
        'User-Agent': 'property-sale',
      },
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Erro ao buscar dados do GitHub:', err));
  }, []);

  if (!user) return <footer>Carregando dados do GitHub...</footer>;

  return (
    <footer className="text-center py-1 mt-2 bg-black text-white">
      <nav className="flex items-center px-2.5">
        <div className="flex items-center gap-1">
          <Icon className="fill-white" svg={GitIcon}/>
          <a className="align-middle" href={user.html_url} target="_blank">
            {user.name}
          </a>
        </div>
        <AccessCounter/>
      </nav>
    </footer>
  );
}
