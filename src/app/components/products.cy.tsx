import React from 'react'
import { Products } from './products'

describe('Tests for the <Products /> component', () => {
  it('renders component', () => {
    cy.mount(<Products />)
  })
  // test that the component shows the correct header
   it('renders header', () => {
    cy.mount(<Products />)
    cy.get('h1').should('have.text', 'Products')
  })
  // test that the component shows a loading message
  it('shows loading message', () => {
    cy.mount(<Products />)
    cy.contains('Loading...').should('be.visible')
  })
  // test that the component renders the products
  it('renders at least one item', () => {
    cy.mount(<Products />)
    cy.get('li').should('have.length.gt', 0)
  })
  // test that the component renders the product title
  it('renders product title', () => {
    cy.mount(<Products />)
    cy.get('li').first().get('h2').should('exist').invoke('text').should('not.be.empty')
  })
  // test that the component renders the product details
  it('renders product details', () => {
    cy.mount(<Products />)
    cy.get('li') 
    .first() 
    .find('p')
    .should('have.length', 3)         
    .each(($p) => {                   
      cy.wrap($p)                     
        .invoke('text')               
        .should('not.be.empty');      
    });
  })
})