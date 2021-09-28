import { useEffect, useState } from 'react';

import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

interface Repository {
  id: number;
  name: string;
  description: string;
  link: string;
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((res) => res.json())
      .then((data) => {
        const newRepositories = [...data];

        newRepositories.map(({ id, name, description, html_url: link }) => ({
          id,
          name,
          description,
          link,
        }));

        setRepositories([...newRepositories]);
      });
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(({ id, name, description, link }) => (
          <RepositoryItem
            key={id}
            repository={{
              name,
              description,
              link,
            }}
          />
        ))}
      </ul>
    </section>
  );
}
