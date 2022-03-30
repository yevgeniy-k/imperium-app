import gql from 'graphql-tag';

gql`
  fragment GenericUserFields on User {
    id
    firstName
    lastName
    fullName
    email
    phoneNumber
    admin
    verified
    createdAt
    addresses { ...GenericAddressFields }
  }

  fragment GenericAddressFields on Address {
    id nickname userId
    street unit zipCode 
    currentRateQuoteId
    estimatedMonthlyBill currentRateExpiresAt billCopyUrl
    verified
    createdAt
  }

  fragment GenericRateRequestFields on RateRequest {
    id userId addressId selectedRateQuoteId
    rateQuotes {
      id rateRequestId rateCents companyName duration recommended fixed createdAt
    }
    createdAt expiresAt
  }

  fragment CurrentUserFields on User {
    ...GenericUserFields
  }

  query Me {
    me {
      token
      user {
        ...CurrentUserFields
      }
    }
  }

  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...CurrentUserFields
      } 
    }
  }

  mutation AdminModifyUser($userId: String, $modifyUserInput: AdminModifyUserInput!) {
    adminModifyUser(modifyUserInput: $modifyUserInput, userId: $userId) {
      ...GenericUserFields
    }
  }

  mutation AdminModifyAddress($addressId: Int!, $modifyAddressInput: AdminModifyAddressInput!) {
    adminModifyAddress(modifyAddressInput: $modifyAddressInput, addressId: $addressId) {
      ...GenericAddressFields
    }
  }

  mutation AddAddress($addressInput: AddressInput!) {
    addAddress(addressInput: $addressInput) {
      ...GenericAddressFields
    }
  }

  query Addresses {
    addresses {
      ...GenericAddressFields
    }
  }

  query RateRequests($addressId: Int) {
    rateRequests(addressId: $addressId) {
      ...GenericRateRequestFields
    }
  }

`;