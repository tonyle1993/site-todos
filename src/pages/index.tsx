import Footer from '../components/Footer';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

const App = () => {
  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  );
};

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

export default App;
