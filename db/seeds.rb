users = [
  {
    email: 'johnsmith@test.com',
    password: '123password',
    password_confirmation: '123password'
  }
]

users.each do |attributes|
  User.create attributes
end

apartments = [
  {
    street: '1st street',
    city: 'Dallas',
    state: 'Texas',
    manager: 'Joe',
    email: 'Joe@test.com',
    price: '1000',
    bedrooms: 2,
    bathrooms: 2,
    pets: 'No pets'
  },
  {
    street: '2nd street',
    city: 'San Antonio',
    state: 'Texas',
    manager: 'Jane',
    email: 'Jane@test.com',
    price: '700',
    bedrooms: 1,
    bathrooms: 1,
    pets: '1 cat'
  },
  {
    street: '11 Broad',
    city: 'Philadelphia',
    state: 'PA',
    manager: 'Joe',
    email: 'Joe@test.com',
    price: '1400',
    bedrooms: 3,
    bathrooms: 2,
    pets: 'Yes'
  }
]

# first_user = User.first
first_user = User.where(email: 'johnsmith@test.com').first

apartments.each do |attributes|
  first_user.apartments.create attributes
end
