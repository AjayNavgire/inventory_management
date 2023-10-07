import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../src/styles/product-form.css";
import { Form, FormGroup, Col, Row, Table } from "reactstrap";


const Products = () => {
  const [products, setProductItems] = useState([]);
  const [productName, setNewProductName] = useState('');
  const [productCategory, setNewItemCategory] = useState('');
  const [quantity, setNewItemQuantity] = useState('');
  const [unit, setNewItemUnit] = useState('');
  const [price, setNewItemPrice] = useState('');

  useEffect(() => {
    axios.get('/api/v1/products')
      .then((response) => {
        console.log("Get", response.data.products)
        setProductItems(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching product items:', error);
      });
  }, []);

  const handleAddItem = (e) => {
    e.preventDefault();
    axios.post('/api/v1//product/new',
      {
        name: productName,
        category: productCategory,
        quantity: quantity,
        unit: unit,
        price: price

      })
      .then((response) => {
        console.log("Post", response)
        setProductItems([...products, response.data.product]);
        setNewProductName('');
        setNewItemCategory('');
        setNewItemQuantity('');
        setNewItemUnit('');
        setNewItemPrice('');
      })
      .catch((error) => {
        console.error('Error adding product item:', error);
      });
  };

  return (
    <Row>
      <Col lg="6" className="mt-4 offset-lg-0">
        <div className="product-info ms-5">
          <h5 className="ms-4 mb-3 fw-bold ">Add Inventory </h5>
          <Form onSubmit={handleAddItem}>

            <FormGroup className="product__form d-inline-block  ms-4 mb-2">
              <h5>Name<span className='text-danger'>*</span></h5>
              <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setNewProductName(e.target.value)} required/>
            </FormGroup>

            <FormGroup className="product__form d-inline-block ms-4 mb-2">
              <h5>Category<span className='text-danger'>*</span></h5>
              <input type="text" placeholder="category" value={productCategory} onChange={(e) => setNewItemCategory(e.target.value)} required/>
            </FormGroup>

            <FormGroup className="product__form d-inline-block ms-4 mb-2">
              <h5>Quantity<span className='text-danger'>*</span></h5>
              <input type="number" placeholder="quantity" value={quantity} onChange={(e) => setNewItemQuantity(e.target.value)} required/>
            </FormGroup>

            <FormGroup className="product__form d-inline-block ms-4 mb-2">
              <h5>Unit<span className='text-danger'>*</span></h5>
              <input type="text" placeholder="unit" value={unit} onChange={(e) => setNewItemUnit(e.target.value)} required/>
            </FormGroup>

            <FormGroup className="product__form d-inline-block ms-4 mb-2">
              <h5>Price<span className='text-danger'>*</span></h5>
              <input type="number" placeholder="price" value={price} onChange={(e) => setNewItemPrice(e.target.value)} required/>
            </FormGroup>

            <div className="product__form d-inline-block ms-4 mb-4">
              <button type="submit">Add Product</button>
            </div>
          </Form>
        </div>
      </Col>


      <Col lg="5" className="mt-4">
        <div className="product_info ms-5">
          <h5 className="mb-4 fw-bold ">Inventory Table</h5>
          <Table striped bordered hover responsive className='product_info mt-1'>
            <thead className="product_info mt-1">
              <tr className='product__form'>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Units</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
};

export default Products;