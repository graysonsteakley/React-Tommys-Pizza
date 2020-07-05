import React, {useState} from 'react'
import styled from 'styled-components'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'

const OrderContainer = styled.div`

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
    margin: 2rem;

`;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );


export default function Order() {
    return (
        <OrderContainer>
            <Dropdown >
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Add Pizza
                </Dropdown.Toggle>
            
                <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item eventKey="1">Cheese</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Pepperoni</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                    BBQ Chicken
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">Little Italy</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </OrderContainer>
    )
}


