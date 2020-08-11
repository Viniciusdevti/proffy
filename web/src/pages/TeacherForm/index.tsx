import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';


function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrível que você quer dar aulas" 
      description= "O primeiro passo é preencher os campos "
      />
      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome completo"  />
          <Input name="avatar" label="Avatar"  />
          <Input name="whatsapp" label="whatsapp"  />
          <textarea name="bio" />
        </fieldset>
        </main>
      
    </div>
  );
}

export default TeacherForm;