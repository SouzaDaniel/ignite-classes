interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    link: string;
  };
}

export default function RepositoryItem({
  repository: { name, description, link },
}: RepositoryItemProps) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={link} target="_blank" rel="noreferrer">
        Acessar repositório
      </a>
    </li>
  );
}
