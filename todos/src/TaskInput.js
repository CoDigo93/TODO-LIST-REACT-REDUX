import React ,{useState} from 'react';

export default function TaskInput({onSubmit}){
    const [item, setItem] = useState('');
    
    // CAPTURA O VALOR INSERIDO NO INPUT E ATUALIZA A VARIAVEL 'item' DESSE ESTADO COM ESSE VALOR
    function setNewTask({target}){
        setItem(target.value);
  
      }

      // IMPEDE QUE A PAGINA SEJA RECARREGADA APÓS O SUBMIT;
      // REALIZA O SUBMIT DO FORM PASSANDO O VALOR QUE FOI INSERIDO NO INPUT 
      // E ESTÁ GUARDADO NA VARIAVEL 'item' DO ESTADO PARA SER ACESSADO PELA FUNCTION 'handleChange' NO COMPONENTE 'App';
      // LIMPA O CAMPO DO INPUT
    function submit(event){
        event.preventDefault();
        onSubmit(item);

        setItem('');
    }

    return(
      <>
        <form onSubmit={submit}>     
          <input type="text"
                placeholder="Adicione uma tarefa"
                value={item}
                onChange={setNewTask}>
                
          </input>
        <button type='submit'>Adicionar</button>
      </form>
      </>
    )
  }