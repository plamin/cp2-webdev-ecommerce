import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import SectionContainer from "../components/SectionContainer";


export default function Home() {
  const [reactRepos, setReactRepos] = useState([]);
  const [nodeRepos, setNodeRepos] = useState([]);
  const [pythonRepos, setPythonRepos] = useState([]);
  
  const API = import.meta.env.VITE_GITHUB_API;
  
  useEffect(() => {
    fetch(`${API}products/category/jewelery`)
      .then(res => res.json())
      .then(data => { setReactRepos(data) })
      .catch(err => console.error(err));

    fetch(`${API}products/category/men's clothing`)
      .then(res => res.json())
      .then(data => setNodeRepos(data))
      .catch(err => console.error(err));

    fetch(`${API}/products/category/electronics`)
      .then(res => res.json())
      .then(data => setPythonRepos(data))
      .catch(err => console.error(err));
  }, [API]);

  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Loja</h1>

      <SectionContainer title="Joalheria">
        <>
        {reactRepos.map(repo => (
          <RepoCard
            key={repo.id} // Identificador único de cada card para o React
            {...repo}
          />
        ))}
        </>
      </SectionContainer>

      <SectionContainer title="Roupa Masculina">
        <>
        {nodeRepos.map(repo => (
          <RepoCard
            key={repo.id}
            {...repo}
          />
        ))}
        </>
      </SectionContainer>

      <SectionContainer title="Eletrônicos">
        <>
        {pythonRepos.map(repo => (
          <RepoCard
            key={repo.id}
            {...repo}
          />
        ))}
        </>
      </SectionContainer>
    </div>
  );
}
