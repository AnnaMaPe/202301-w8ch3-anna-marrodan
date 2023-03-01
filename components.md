# DATA

## Product

- id
- product name
- price
- image
- isAvailable

## Order

- id
- list of products
- customer
- state (enum)
  - ready to be dispatched
  - dispatched

## Customer

- id
- name
- address
- email
- isLogged

# DATA MODIFICATIONS

## Product

- load products
- set isAvailable
- unset isAvailable

## Order

- add selected product
- delete selected product
- set order state to ready
- set order state to dispatched

## Customer

- create new user
- modify user
- set isLogged
- unset is Logged
