import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useCallback } from 'react';

interface FormDTO{
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface ModalEditFoodProps{
  setIsOpen: () => void;
  isOpen: boolean;
  handleUpdateFood: (data: FormDTO) => void;
  editingFood: FormDTO;
}

function ModalEditFood({setIsOpen, isOpen, handleUpdateFood, editingFood}: ModalEditFoodProps){
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data) => {
    handleUpdateFood(data);
    setIsOpen();
  }, [setIsOpen, handleUpdateFood]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
