layoutimport React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/51270707?s=460&u=e105c56f2c85baa9196811b779311d867a158d60&v=4"
          alt="Vinicius Alexandre"
        />
        <div>
          <strong>Vinicius Alexandre</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
       Professor de química do ensino médio. 
        <br />
        <br />
        Apaixonado por tecnologia e ideias.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;