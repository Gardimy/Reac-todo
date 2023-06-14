import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';

const TodoApp = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TodosLogic />
      <Modal />
    </>
  );
};
export default TodoApp;
