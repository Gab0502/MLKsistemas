import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BsBag } from "react-icons/bs";


const fetchProducts = async (): Promise<any> => {
  try {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
};

const fetchAndSaveProducts = async (): Promise<any> => {
  try {
    const { products } = await fetchProducts(); // Extract the 'products' array
    console.log('Dados da API:', products);
    // Do additional operations if needed with 'products'
    return products;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    // Handle error if necessary
    throw error;
  }
};

const App: React.FC = () => {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAndSaveProducts();
        setDados(result);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        // Handle error if necessary
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className='loja'>
        {dados && dados.length > 0 && dados.map((item: any, indice: number) => (
          
            <div key={indice} className='card'>
              <img src={item.photo} alt="" />
              <div className='nameAndprice'>
                <div className='name'><p>{item.name}</p></div>
                <div className='price'><p>{item.price}</p></div>
              </div>
              <p>{item.description}</p>
              <button> <BsBag/> Comprar</button>
            </div>
          

        ))}
      </section>
      <Footer />
    </>
  );
};

export default App;
