import './App.css';
import './api';
import service from './api';
import { useState } from 'react';
import React from 'react';

function App() {
  const [services, setServices] = useState(service);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showOnlySelected, setShowOnlySelected] = useState(false);

  const handleAddService = (section, index) => {
    const updatedServices = { ...services };
    updatedServices[section][index].val++;
    setTotalPrice(totalPrice + updatedServices[section][index].price);
    setServices(updatedServices);
  };

  const selectedServices = Object.keys(services).reduce(
    (accumulator, currentSection) => {
      const selectedSectionServices = services[currentSection].filter(
        (service) => service.val > 0
      );
      if (selectedSectionServices.length > 0) {
        accumulator[currentSection] = selectedSectionServices;
      }
      return accumulator;
    },
    {}
  );

  const handleRemoveService = (section, index) => {
    const updatedServices = { ...services };
    if (updatedServices[section][index].val > 0) {
      updatedServices[section][index].val--;
    }
    setTotalPrice(
      totalPrice > 0
        ? totalPrice - updatedServices[section][index].price
        : totalPrice
    );
    setServices(updatedServices);
  };

  const handleResetService = (section, index) => {
    const updatedServices = { ...services };
    setTotalPrice(
      totalPrice -
        updatedServices[section][index].price *
          updatedServices[section][index].val
    );
    updatedServices[section][index].val = 0;

    setServices(updatedServices);
  };

  const print = () => {
    const accordions = document.querySelectorAll('.accordion-collapse');
    accordions.forEach((e) => {
      e.classList.add('show');
    });
    setServices(selectedServices);
    setTimeout(() => {
      window.print();
    }, 0);
  };

  return (
    <>
      {Object.keys(services).map((section, index) => {
        return (
          <div key={index} className='accordion' id={`accordion-${index}`}>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded='true'
                  aria-controls={`collapse-${index}`}
                >
                  {section}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className='accordion-collapse collapse'
                data-bs-parent={`#accordion-${index}`}
              >
                <div className='accordion-body'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>Код услуги</th>
                        <th scope='col'>№</th>
                        <th scope='col'>Перечень услуг</th>
                        <th scope='col'>Цена</th>
                        <th scope='col'>Количество</th>
                        <th scope='col' className='del'>
                          Управление
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {services[section].map((elem, index) => (
                        <tr
                          className={elem.val > 0 ? 'table-success' : ''}
                          key={elem.code}
                        >
                          <th scope='row'>{elem.code}</th>
                          <td>{index + 1}</td>
                          <td>{elem.description}</td>
                          <td>{elem.price}</td>
                          <td className='text-center'>{elem.val}</td>
                          <td className='del'>
                            <button
                              type='button'
                              className='btn btn-primary me-2'
                              onClick={() => handleAddService(section, index)}
                            >
                              +
                            </button>
                            <button
                              type='button'
                              className='btn btn-primary me-2'
                              onClick={() =>
                                handleRemoveService(section, index)
                              }
                            >
                              -
                            </button>
                            <button
                              type='button'
                              className='btn btn-danger '
                              onClick={() => handleResetService(section, index)}
                            >
                              Очистить
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <p className='text-end'>Общая сумма: {totalPrice} руб. </p>
      <button className='del btn btn-warning m-1' onClick={print}>
        Печать
      </button>
    </>
  );
}

export default App;
