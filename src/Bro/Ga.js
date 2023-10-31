import './CV.css';
export const Ga = () => {
  return (
    <div className="bg-[#CFD8DC] w-600">
      <h1 className="a text-3xl">CV Professionnel</h1>
      <hr />
      <div class="B" className='flex '>
        <img
          src='Images/ANA.jpeg'
          alt="Photo de profil"
          className="w-20 ml-5"/>
        <ul className=" ml-10">
          <li >
            <b>Nom:</b> Temlali
          </li>
          <li >
            <b>Prénom:</b> Abderrahmane
          </li>
          <li >
            <address>
              20 ans, célibataire marocain. N° 52/B, Hay Mesnana, Unité AL Inara,
              Tanger. 06.41.28.98.47
            </address>
          </li>
          <li >
            <b>Gmail:</b> <a href="mailto:abdotemlali2003@gmail.com">envoyez un message</a>
          </li>
        </ul>
      </div>
      <hr />
      <h2 className="text-2xl">Description de l'objectif professionnel</h2>
      <p>
        Je souhaite appliquer mes compétences techniques et mes connaissances en
        informatique afin de participer à des projets. Mon but est de créer des
        solutions technologiques et de travailler efficacement au sein
        d'équipes performantes.
      </p>
      <hr />
      <h2 className="text-2xl">Formation et diplômes</h2>
      <ul>
        <li>
          2023-2026: Cycle d'ingénieurs, à l'Ecole Mohammadia d'Ingénieurs à Rabat.
          <a href="https://moodle.emi.ac.ma/" target="_blank">
            lien de l'école
          </a>
        </li>
        <li>
          2021-2023: Classes préparatoires aux grandes écoles d'ingénieurs,
          filière MP, au lycée MOULAY ALHASSANE, à Tanger.
        </li>
        <li>
          2021: Baccalauréat, option Sciences mathématiques B, mention très bien,
          au lycée technique MOULAY youssef, à Tanger.
        </li>
      </ul>
      <hr />
      <h2 className="text-2xl">Compétences techniques</h2>
      <ul>
        <li>
          Programmation <progress value="98" max="100"></progress>
        </li>
        <details>
          Maîtrise de langages tels que Java, Python, C++, JavaScript, etc.{' '}
          <a href="https://www.youtube.com/watch?v=l10hhz0VJj4&t=692s" target="_blank">
            ha ljadid
          </a>
        </details>
        <li>
          Développement web <progress value="90" max="100"></progress>
        </li>
        <details>
          Compétence dans HTML5, CSS3, JavaScript, et des frameworks comme Angular
          ou React.
        </details>
        <li>
          Bases de données : <progress value="95" max="100"></progress>
        </li>
        <details>
          Connaissance des systèmes relationnels (SQL) et NoSQL (MongoDB, Cassandra,
          etc.)
        </details>
        <li>
          Architecture web<progress value="100" max="100"></progress>
        </li>
        <details>
          Expérience dans la conception de systèmes d'information et
          l'architecture microservices
        </details>
      </ul>
      <hr />
      <h2 className="text-2xl">Soft skills</h2>
      <ul>
        <li>Travail en équipe</li>
        <li>Communication</li>
        <li>Créativité</li>
        <li>Gestion du temps</li>
        <li>Adaptabilité</li>
        <li>Leadership</li>
        <li>Gestion du stress</li>
      </ul>
      <hr />
      <h2 className="text-2xl">Compétences linguistiques</h2>
      <ul>
        <li>français: maîtrise.</li>
        <li>Arabe: langue maternelle.</li>
        <li>Anglais: assez bon niveau.</li>
      </ul>
      <hr />
      </div>   
  );
}


