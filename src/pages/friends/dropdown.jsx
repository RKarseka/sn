// import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const DropdownMenu = ({ pageSize, setPageSize }) => {
  const [state, setState] = useState([
    { vol: 10 },
    { vol: 25 },
    { vol: 50 },
    { vol: 100 },
  ]);
  const setActive = (activItem) =>
    setState((prev) =>
      prev.map(({ vol }) => ({ active: vol === activItem ? true : false, vol }))
    );

  useEffect(() => {
    setActive(pageSize);
  }, []);

  return (
    <>
      <DropdownButton
        size="sm"
        variant={'secondary'}
        onSelect={(event) => {
          const vol = state[event].vol;
          localStorage.setItem('pagesize', vol);
          setPageSize(vol);
          setActive(vol);
        }}
        title={pageSize}
      >
        {state.map(({ vol, active }, index) => (
          <Dropdown.Item key={vol} eventKey={index} active={active}>
            {vol}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
};
