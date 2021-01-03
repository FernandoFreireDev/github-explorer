import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/27864320?s=460&u=ae5d7d4903140b0c6057f433ad93f9170a01ebc6&v=4"
            alt="Fernando Freire"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/27864320?s=460&u=ae5d7d4903140b0c6057f433ad93f9170a01ebc6&v=4"
            alt="Fernando Freire"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/27864320?s=460&u=ae5d7d4903140b0c6057f433ad93f9170a01ebc6&v=4"
            alt="Fernando Freire"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/27864320?s=460&u=ae5d7d4903140b0c6057f433ad93f9170a01ebc6&v=4"
            alt="Fernando Freire"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
