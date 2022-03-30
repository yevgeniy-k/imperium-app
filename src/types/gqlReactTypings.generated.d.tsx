/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
// @ts-nocheck
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Date: any;
  JSON: any;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['Int'];
  userId: Scalars['String'];
  currentRateQuoteId?: Maybe<Scalars['Int']>;
  nickname?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
  estimatedMonthlyBill: Scalars['String'];
  billCopyUrl?: Maybe<Scalars['String']>;
  currentRateExpiresAt?: Maybe<Scalars['DateTime']>;
  verified: Scalars['Boolean'];
  internalNotes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  currentRateQuote?: Maybe<RateQuote>;
};

export type AddressInput = {
  nickname?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
  estimatedMonthlyBill: Scalars['String'];
  billCopyUrl?: Maybe<Scalars['String']>;
};

export type AdminMetrics = {
  __typename?: 'AdminMetrics';
  userCount: Scalars['Int'];
};

export type AdminModifyAddressInput = {
  nickname?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  currentRateQuoteId?: Maybe<Scalars['Int']>;
  estimatedMonthlyBill?: Maybe<Scalars['String']>;
  currentRateExpiresAt?: Maybe<Scalars['DateTime']>;
  billCopyUrl?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  internalNotes?: Maybe<Scalars['String']>;
};

export type AdminModifyUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type ChangePasswordInput = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  newPasswordConfirmation: Scalars['String'];
};




export type LoginResponse = {
  __typename?: 'LoginResponse';
  user: User;
  token: Scalars['String'];
};

export type ModifyUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress?: Maybe<Address>;
  adminModifyAddress: Address;
  adminModifyRateQuotes?: Maybe<Scalars['Boolean']>;
  adminModifyUser: User;
  changePassword: Scalars['Boolean'];
  forgotPasswordRequest: Scalars['Boolean'];
  login: LoginResponse;
  modifyUser: User;
  ping: Scalars['String'];
  register: LoginResponse;
  requestRates?: Maybe<Scalars['Boolean']>;
  resetPassword: Scalars['Boolean'];
  selectQuote?: Maybe<Scalars['Boolean']>;
};


export type MutationAddAddressArgs = {
  userId?: Maybe<Scalars['String']>;
  addressInput: AddressInput;
};


export type MutationAdminModifyAddressArgs = {
  addressId: Scalars['Int'];
  modifyAddressInput: AdminModifyAddressInput;
};


export type MutationAdminModifyRateQuotesArgs = {
  rateQuoteInputs: Array<RateQuoteInput>;
};


export type MutationAdminModifyUserArgs = {
  userId?: Maybe<Scalars['String']>;
  modifyUserInput: AdminModifyUserInput;
};


export type MutationChangePasswordArgs = {
  userId?: Maybe<Scalars['String']>;
  changePasswordInput: ChangePasswordInput;
};


export type MutationForgotPasswordRequestArgs = {
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationModifyUserArgs = {
  userId?: Maybe<Scalars['String']>;
  modifyUserInput: ModifyUserInput;
};


export type MutationRegisterArgs = {
  userInput: UserInput;
};


export type MutationRequestRatesArgs = {
  addressId: Scalars['Int'];
};


export type MutationResetPasswordArgs = {
  resetPasswordToken: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationSelectQuoteArgs = {
  quoteId: Scalars['Int'];
};

export type Pagination = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  address: Address;
  addresses: Array<Address>;
  adminAddresses: Array<Address>;
  adminMetrics: AdminMetrics;
  adminUsers: Array<User>;
  me?: Maybe<LoginResponse>;
  rateRequests: Array<RateRequest>;
  version: Scalars['String'];
};


export type QueryAddressArgs = {
  addressId: Scalars['Int'];
};


export type QueryAddressesArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryAdminAddressesArgs = {
  pagination?: Maybe<Pagination>;
};


export type QueryAdminUsersArgs = {
  pagination?: Maybe<Pagination>;
};


export type QueryRateRequestsArgs = {
  addressId?: Maybe<Scalars['Int']>;
};

export type RateQuote = {
  __typename?: 'RateQuote';
  id: Scalars['Int'];
  rateRequestId: Scalars['Int'];
  rateCents: Scalars['Float'];
  companyName: Scalars['String'];
  duration: Scalars['String'];
  recommended: Scalars['Boolean'];
  fixed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
};

export type RateQuoteInput = {
  id: Scalars['Int'];
  rateRequestId: Scalars['Int'];
  rateCents: Scalars['Float'];
  companyName: Scalars['String'];
  duration: Scalars['String'];
  recommended?: Maybe<Scalars['Boolean']>;
  fixed?: Maybe<Scalars['Boolean']>;
};

export type RateRequest = {
  __typename?: 'RateRequest';
  id: Scalars['Int'];
  userId: Scalars['String'];
  addressId: Scalars['Int'];
  selectedRateQuoteId?: Maybe<Scalars['Int']>;
  expiresAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  selectedRateQuote?: Maybe<RateQuote>;
  rateQuotes: Array<RateQuote>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  fullName: Scalars['String'];
  phoneNumber: Scalars['String'];
  imageUrl: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  admin: Scalars['Boolean'];
  verified: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  addresses: Array<Address>;
};

export type UserInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AdminAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminAddressesQuery = (
  { __typename?: 'Query' }
  & { adminAddresses: Array<(
    { __typename?: 'Address' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'fullName'>
    )> }
    & GenericAddressFieldsFragment
  )> }
);

export type AddressQueryVariables = Exact<{
  addressId: Scalars['Int'];
}>;


export type AddressQuery = (
  { __typename?: 'Query' }
  & { address: (
    { __typename?: 'Address' }
    & Pick<Address, 'internalNotes'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'fullName'>
    )> }
    & GenericAddressFieldsFragment
  ) }
);

export type AdminModifyRateQuotesMutationVariables = Exact<{
  rateQuoteInputs: Array<RateQuoteInput> | RateQuoteInput;
}>;


export type AdminModifyRateQuotesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'adminModifyRateQuotes'>
);

export type AdminMetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminMetricsQuery = (
  { __typename?: 'Query' }
  & { adminMetrics: (
    { __typename?: 'AdminMetrics' }
    & Pick<AdminMetrics, 'userCount'>
  ) }
);

export type AdminUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminUsersQuery = (
  { __typename?: 'Query' }
  & { adminUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'phoneNumber' | 'fullName' | 'admin' | 'verified' | 'createdAt'>
  )> }
);

export type RequestRatesMutationVariables = Exact<{
  addressId: Scalars['Int'];
}>;


export type RequestRatesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'requestRates'>
);

export type SelectQuoteMutationVariables = Exact<{
  quoteId: Scalars['Int'];
}>;


export type SelectQuoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'selectQuote'>
);

export type RegisterMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & CurrentUserFieldsFragment
    ) }
  ) }
);

export type GenericUserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'fullName' | 'email' | 'phoneNumber' | 'admin' | 'verified' | 'createdAt'>
  & { addresses: Array<(
    { __typename?: 'Address' }
    & GenericAddressFieldsFragment
  )> }
);

export type GenericAddressFieldsFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'id' | 'nickname' | 'userId' | 'street' | 'unit' | 'zipCode' | 'currentRateQuoteId' | 'estimatedMonthlyBill' | 'currentRateExpiresAt' | 'billCopyUrl' | 'verified' | 'createdAt'>
);

export type GenericRateRequestFieldsFragment = (
  { __typename?: 'RateRequest' }
  & Pick<RateRequest, 'id' | 'userId' | 'addressId' | 'selectedRateQuoteId' | 'createdAt' | 'expiresAt'>
  & { rateQuotes: Array<(
    { __typename?: 'RateQuote' }
    & Pick<RateQuote, 'id' | 'rateRequestId' | 'rateCents' | 'companyName' | 'duration' | 'recommended' | 'fixed' | 'createdAt'>
  )> }
);

export type CurrentUserFieldsFragment = (
  { __typename?: 'User' }
  & GenericUserFieldsFragment
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & CurrentUserFieldsFragment
    ) }
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & CurrentUserFieldsFragment
    ) }
  ) }
);

export type AdminModifyUserMutationVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  modifyUserInput: AdminModifyUserInput;
}>;


export type AdminModifyUserMutation = (
  { __typename?: 'Mutation' }
  & { adminModifyUser: (
    { __typename?: 'User' }
    & GenericUserFieldsFragment
  ) }
);

export type AdminModifyAddressMutationVariables = Exact<{
  addressId: Scalars['Int'];
  modifyAddressInput: AdminModifyAddressInput;
}>;


export type AdminModifyAddressMutation = (
  { __typename?: 'Mutation' }
  & { adminModifyAddress: (
    { __typename?: 'Address' }
    & GenericAddressFieldsFragment
  ) }
);

export type AddAddressMutationVariables = Exact<{
  addressInput: AddressInput;
}>;


export type AddAddressMutation = (
  { __typename?: 'Mutation' }
  & { addAddress?: Maybe<(
    { __typename?: 'Address' }
    & GenericAddressFieldsFragment
  )> }
);

export type AddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type AddressesQuery = (
  { __typename?: 'Query' }
  & { addresses: Array<(
    { __typename?: 'Address' }
    & GenericAddressFieldsFragment
  )> }
);

export type RateRequestsQueryVariables = Exact<{
  addressId?: Maybe<Scalars['Int']>;
}>;


export type RateRequestsQuery = (
  { __typename?: 'Query' }
  & { rateRequests: Array<(
    { __typename?: 'RateRequest' }
    & GenericRateRequestFieldsFragment
  )> }
);

export const GenericRateRequestFieldsFragmentDoc = gql`
    fragment GenericRateRequestFields on RateRequest {
  id
  userId
  addressId
  selectedRateQuoteId
  rateQuotes {
    id
    rateRequestId
    rateCents
    companyName
    duration
    recommended
    fixed
    createdAt
  }
  createdAt
  expiresAt
}
    `;
export const GenericAddressFieldsFragmentDoc = gql`
    fragment GenericAddressFields on Address {
  id
  nickname
  userId
  street
  unit
  zipCode
  currentRateQuoteId
  estimatedMonthlyBill
  currentRateExpiresAt
  billCopyUrl
  verified
  createdAt
}
    `;
export const GenericUserFieldsFragmentDoc = gql`
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
  addresses {
    ...GenericAddressFields
  }
}
    ${GenericAddressFieldsFragmentDoc}`;
export const CurrentUserFieldsFragmentDoc = gql`
    fragment CurrentUserFields on User {
  ...GenericUserFields
}
    ${GenericUserFieldsFragmentDoc}`;
export const AdminAddressesDocument = gql`
    query AdminAddresses {
  adminAddresses {
    ...GenericAddressFields
    user {
      id
      fullName
    }
  }
}
    ${GenericAddressFieldsFragmentDoc}`;
export type AdminAddressesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AdminAddressesQuery, AdminAddressesQueryVariables>, 'query'>;

    export const AdminAddressesComponent = (props: AdminAddressesComponentProps) => (
      <ApolloReactComponents.Query<AdminAddressesQuery, AdminAddressesQueryVariables> query={AdminAddressesDocument} {...props} />
    );
    
export type AdminAddressesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AdminAddressesQuery, AdminAddressesQueryVariables>
    } & TChildProps;
export function withAdminAddresses<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AdminAddressesQuery,
  AdminAddressesQueryVariables,
  AdminAddressesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AdminAddressesQuery, AdminAddressesQueryVariables, AdminAddressesProps<TChildProps, TDataName>>(AdminAddressesDocument, {
      alias: 'adminAddresses',
      ...operationOptions
    });
};

/**
 * __useAdminAddressesQuery__
 *
 * To run a query within a React component, call `useAdminAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminAddressesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AdminAddressesQuery, AdminAddressesQueryVariables>) {
        return ApolloReactHooks.useQuery<AdminAddressesQuery, AdminAddressesQueryVariables>(AdminAddressesDocument, baseOptions);
      }
export function useAdminAddressesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AdminAddressesQuery, AdminAddressesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AdminAddressesQuery, AdminAddressesQueryVariables>(AdminAddressesDocument, baseOptions);
        }
export type AdminAddressesQueryHookResult = ReturnType<typeof useAdminAddressesQuery>;
export type AdminAddressesLazyQueryHookResult = ReturnType<typeof useAdminAddressesLazyQuery>;
export type AdminAddressesQueryResult = ApolloReactCommon.QueryResult<AdminAddressesQuery, AdminAddressesQueryVariables>;
export const AddressDocument = gql`
    query Address($addressId: Int!) {
  address(addressId: $addressId) {
    ...GenericAddressFields
    internalNotes
    user {
      id
      fullName
    }
  }
}
    ${GenericAddressFieldsFragmentDoc}`;
export type AddressComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AddressQuery, AddressQueryVariables>, 'query'> & ({ variables: AddressQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AddressComponent = (props: AddressComponentProps) => (
      <ApolloReactComponents.Query<AddressQuery, AddressQueryVariables> query={AddressDocument} {...props} />
    );
    
export type AddressProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AddressQuery, AddressQueryVariables>
    } & TChildProps;
export function withAddress<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddressQuery,
  AddressQueryVariables,
  AddressProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AddressQuery, AddressQueryVariables, AddressProps<TChildProps, TDataName>>(AddressDocument, {
      alias: 'address',
      ...operationOptions
    });
};

/**
 * __useAddressQuery__
 *
 * To run a query within a React component, call `useAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressQuery({
 *   variables: {
 *      addressId: // value for 'addressId'
 *   },
 * });
 */
export function useAddressQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AddressQuery, AddressQueryVariables>) {
        return ApolloReactHooks.useQuery<AddressQuery, AddressQueryVariables>(AddressDocument, baseOptions);
      }
export function useAddressLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AddressQuery, AddressQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AddressQuery, AddressQueryVariables>(AddressDocument, baseOptions);
        }
export type AddressQueryHookResult = ReturnType<typeof useAddressQuery>;
export type AddressLazyQueryHookResult = ReturnType<typeof useAddressLazyQuery>;
export type AddressQueryResult = ApolloReactCommon.QueryResult<AddressQuery, AddressQueryVariables>;
export const AdminModifyRateQuotesDocument = gql`
    mutation AdminModifyRateQuotes($rateQuoteInputs: [RateQuoteInput!]!) {
  adminModifyRateQuotes(rateQuoteInputs: $rateQuoteInputs)
}
    `;
export type AdminModifyRateQuotesMutationFn = ApolloReactCommon.MutationFunction<AdminModifyRateQuotesMutation, AdminModifyRateQuotesMutationVariables>;
export type AdminModifyRateQuotesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AdminModifyRateQuotesMutation, AdminModifyRateQuotesMutationVariables>, 'mutation'>;

    export const AdminModifyRateQuotesComponent = (props: AdminModifyRateQuotesComponentProps) => (
      <ApolloReactComponents.Mutation<AdminModifyRateQuotesMutation, AdminModifyRateQuotesMutationVariables> mutation={AdminModifyRateQuotesDocument} {...props} />
    );
    
export type AdminModifyRateQuotesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AdminModifyRateQuotesMutation, AdminModifyRateQuotesMutationVariables>
    } & TChildProps;
export function withAdminModifyRateQuotes<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AdminModifyRateQuotesMutation,
  AdminModifyRateQuotesMutationVariables,
  AdminModifyRateQuotesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AdminModifyRateQuotesMutation, AdminModifyRateQuotesMutationVariables, AdminModifyRateQuotesProps<TChildProps, TDataName>>(AdminModifyRateQuotesDocument, {
      alias: 'adminModifyRateQuotes',
      ...operationOptions
    });
};

/**
 * __useAdminModifyRateQuotesMutation__
 *
 * To run a mutation, you first call `useAdminModifyRateQuotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminModifyRateQuotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminModifyRateQuotesMutation, { data, loading, error }] = useAdminModifyRateQuotesMutation({
 *   variables: {
 *      rateQuoteInputs: // value for 'rateQuoteInputs'
 *   },
 * });
 */
export function useAdminModifyRateQuotesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AdminModifyRateQuotesMutation, AdminModifyRateQuotesMutationVariables>) {
        return ApolloReactHooks.useMutation<AdminModifyRateQuotesMutation, AdminModifyRateQuotesMutationVariables>(AdminModifyRateQuotesDocument, baseOptions);
      }
export type AdminModifyRateQuotesMutationHookResult = ReturnType<typeof useAdminModifyRateQuotesMutation>;
export type AdminModifyRateQuotesMutationResult = ApolloReactCommon.MutationResult<AdminModifyRateQuotesMutation>;
export type AdminModifyRateQuotesMutationOptions = ApolloReactCommon.BaseMutationOptions<AdminModifyRateQuotesMutation, AdminModifyRateQuotesMutationVariables>;
export const AdminMetricsDocument = gql`
    query AdminMetrics {
  adminMetrics {
    userCount
  }
}
    `;
export type AdminMetricsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AdminMetricsQuery, AdminMetricsQueryVariables>, 'query'>;

    export const AdminMetricsComponent = (props: AdminMetricsComponentProps) => (
      <ApolloReactComponents.Query<AdminMetricsQuery, AdminMetricsQueryVariables> query={AdminMetricsDocument} {...props} />
    );
    
export type AdminMetricsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AdminMetricsQuery, AdminMetricsQueryVariables>
    } & TChildProps;
export function withAdminMetrics<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AdminMetricsQuery,
  AdminMetricsQueryVariables,
  AdminMetricsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AdminMetricsQuery, AdminMetricsQueryVariables, AdminMetricsProps<TChildProps, TDataName>>(AdminMetricsDocument, {
      alias: 'adminMetrics',
      ...operationOptions
    });
};

/**
 * __useAdminMetricsQuery__
 *
 * To run a query within a React component, call `useAdminMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminMetricsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminMetricsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AdminMetricsQuery, AdminMetricsQueryVariables>) {
        return ApolloReactHooks.useQuery<AdminMetricsQuery, AdminMetricsQueryVariables>(AdminMetricsDocument, baseOptions);
      }
export function useAdminMetricsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AdminMetricsQuery, AdminMetricsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AdminMetricsQuery, AdminMetricsQueryVariables>(AdminMetricsDocument, baseOptions);
        }
export type AdminMetricsQueryHookResult = ReturnType<typeof useAdminMetricsQuery>;
export type AdminMetricsLazyQueryHookResult = ReturnType<typeof useAdminMetricsLazyQuery>;
export type AdminMetricsQueryResult = ApolloReactCommon.QueryResult<AdminMetricsQuery, AdminMetricsQueryVariables>;
export const AdminUsersDocument = gql`
    query AdminUsers {
  adminUsers {
    id
    email
    phoneNumber
    fullName
    admin
    verified
    createdAt
  }
}
    `;
export type AdminUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AdminUsersQuery, AdminUsersQueryVariables>, 'query'>;

    export const AdminUsersComponent = (props: AdminUsersComponentProps) => (
      <ApolloReactComponents.Query<AdminUsersQuery, AdminUsersQueryVariables> query={AdminUsersDocument} {...props} />
    );
    
export type AdminUsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AdminUsersQuery, AdminUsersQueryVariables>
    } & TChildProps;
export function withAdminUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AdminUsersQuery,
  AdminUsersQueryVariables,
  AdminUsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AdminUsersQuery, AdminUsersQueryVariables, AdminUsersProps<TChildProps, TDataName>>(AdminUsersDocument, {
      alias: 'adminUsers',
      ...operationOptions
    });
};

/**
 * __useAdminUsersQuery__
 *
 * To run a query within a React component, call `useAdminUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AdminUsersQuery, AdminUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<AdminUsersQuery, AdminUsersQueryVariables>(AdminUsersDocument, baseOptions);
      }
export function useAdminUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AdminUsersQuery, AdminUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AdminUsersQuery, AdminUsersQueryVariables>(AdminUsersDocument, baseOptions);
        }
export type AdminUsersQueryHookResult = ReturnType<typeof useAdminUsersQuery>;
export type AdminUsersLazyQueryHookResult = ReturnType<typeof useAdminUsersLazyQuery>;
export type AdminUsersQueryResult = ApolloReactCommon.QueryResult<AdminUsersQuery, AdminUsersQueryVariables>;
export const RequestRatesDocument = gql`
    mutation RequestRates($addressId: Int!) {
  requestRates(addressId: $addressId)
}
    `;
export type RequestRatesMutationFn = ApolloReactCommon.MutationFunction<RequestRatesMutation, RequestRatesMutationVariables>;
export type RequestRatesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RequestRatesMutation, RequestRatesMutationVariables>, 'mutation'>;

    export const RequestRatesComponent = (props: RequestRatesComponentProps) => (
      <ApolloReactComponents.Mutation<RequestRatesMutation, RequestRatesMutationVariables> mutation={RequestRatesDocument} {...props} />
    );
    
export type RequestRatesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RequestRatesMutation, RequestRatesMutationVariables>
    } & TChildProps;
export function withRequestRates<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RequestRatesMutation,
  RequestRatesMutationVariables,
  RequestRatesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RequestRatesMutation, RequestRatesMutationVariables, RequestRatesProps<TChildProps, TDataName>>(RequestRatesDocument, {
      alias: 'requestRates',
      ...operationOptions
    });
};

/**
 * __useRequestRatesMutation__
 *
 * To run a mutation, you first call `useRequestRatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestRatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestRatesMutation, { data, loading, error }] = useRequestRatesMutation({
 *   variables: {
 *      addressId: // value for 'addressId'
 *   },
 * });
 */
export function useRequestRatesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestRatesMutation, RequestRatesMutationVariables>) {
        return ApolloReactHooks.useMutation<RequestRatesMutation, RequestRatesMutationVariables>(RequestRatesDocument, baseOptions);
      }
export type RequestRatesMutationHookResult = ReturnType<typeof useRequestRatesMutation>;
export type RequestRatesMutationResult = ApolloReactCommon.MutationResult<RequestRatesMutation>;
export type RequestRatesMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestRatesMutation, RequestRatesMutationVariables>;
export const SelectQuoteDocument = gql`
    mutation SelectQuote($quoteId: Int!) {
  selectQuote(quoteId: $quoteId)
}
    `;
export type SelectQuoteMutationFn = ApolloReactCommon.MutationFunction<SelectQuoteMutation, SelectQuoteMutationVariables>;
export type SelectQuoteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SelectQuoteMutation, SelectQuoteMutationVariables>, 'mutation'>;

    export const SelectQuoteComponent = (props: SelectQuoteComponentProps) => (
      <ApolloReactComponents.Mutation<SelectQuoteMutation, SelectQuoteMutationVariables> mutation={SelectQuoteDocument} {...props} />
    );
    
export type SelectQuoteProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SelectQuoteMutation, SelectQuoteMutationVariables>
    } & TChildProps;
export function withSelectQuote<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SelectQuoteMutation,
  SelectQuoteMutationVariables,
  SelectQuoteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SelectQuoteMutation, SelectQuoteMutationVariables, SelectQuoteProps<TChildProps, TDataName>>(SelectQuoteDocument, {
      alias: 'selectQuote',
      ...operationOptions
    });
};

/**
 * __useSelectQuoteMutation__
 *
 * To run a mutation, you first call `useSelectQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSelectQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [selectQuoteMutation, { data, loading, error }] = useSelectQuoteMutation({
 *   variables: {
 *      quoteId: // value for 'quoteId'
 *   },
 * });
 */
export function useSelectQuoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SelectQuoteMutation, SelectQuoteMutationVariables>) {
        return ApolloReactHooks.useMutation<SelectQuoteMutation, SelectQuoteMutationVariables>(SelectQuoteDocument, baseOptions);
      }
export type SelectQuoteMutationHookResult = ReturnType<typeof useSelectQuoteMutation>;
export type SelectQuoteMutationResult = ApolloReactCommon.MutationResult<SelectQuoteMutation>;
export type SelectQuoteMutationOptions = ApolloReactCommon.BaseMutationOptions<SelectQuoteMutation, SelectQuoteMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($userInput: UserInput!) {
  register(userInput: $userInput) {
    token
    user {
      ...CurrentUserFields
    }
  }
}
    ${CurrentUserFieldsFragmentDoc}`;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    
export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>
    } & TChildProps;
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    token
    user {
      ...CurrentUserFields
    }
  }
}
    ${CurrentUserFieldsFragmentDoc}`;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    
export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>
    } & TChildProps;
export function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      ...CurrentUserFields
    }
  }
}
    ${CurrentUserFieldsFragmentDoc}`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const AdminModifyUserDocument = gql`
    mutation AdminModifyUser($userId: String, $modifyUserInput: AdminModifyUserInput!) {
  adminModifyUser(modifyUserInput: $modifyUserInput, userId: $userId) {
    ...GenericUserFields
  }
}
    ${GenericUserFieldsFragmentDoc}`;
export type AdminModifyUserMutationFn = ApolloReactCommon.MutationFunction<AdminModifyUserMutation, AdminModifyUserMutationVariables>;
export type AdminModifyUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AdminModifyUserMutation, AdminModifyUserMutationVariables>, 'mutation'>;

    export const AdminModifyUserComponent = (props: AdminModifyUserComponentProps) => (
      <ApolloReactComponents.Mutation<AdminModifyUserMutation, AdminModifyUserMutationVariables> mutation={AdminModifyUserDocument} {...props} />
    );
    
export type AdminModifyUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AdminModifyUserMutation, AdminModifyUserMutationVariables>
    } & TChildProps;
export function withAdminModifyUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AdminModifyUserMutation,
  AdminModifyUserMutationVariables,
  AdminModifyUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AdminModifyUserMutation, AdminModifyUserMutationVariables, AdminModifyUserProps<TChildProps, TDataName>>(AdminModifyUserDocument, {
      alias: 'adminModifyUser',
      ...operationOptions
    });
};

/**
 * __useAdminModifyUserMutation__
 *
 * To run a mutation, you first call `useAdminModifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminModifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminModifyUserMutation, { data, loading, error }] = useAdminModifyUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      modifyUserInput: // value for 'modifyUserInput'
 *   },
 * });
 */
export function useAdminModifyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AdminModifyUserMutation, AdminModifyUserMutationVariables>) {
        return ApolloReactHooks.useMutation<AdminModifyUserMutation, AdminModifyUserMutationVariables>(AdminModifyUserDocument, baseOptions);
      }
export type AdminModifyUserMutationHookResult = ReturnType<typeof useAdminModifyUserMutation>;
export type AdminModifyUserMutationResult = ApolloReactCommon.MutationResult<AdminModifyUserMutation>;
export type AdminModifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<AdminModifyUserMutation, AdminModifyUserMutationVariables>;
export const AdminModifyAddressDocument = gql`
    mutation AdminModifyAddress($addressId: Int!, $modifyAddressInput: AdminModifyAddressInput!) {
  adminModifyAddress(modifyAddressInput: $modifyAddressInput, addressId: $addressId) {
    ...GenericAddressFields
  }
}
    ${GenericAddressFieldsFragmentDoc}`;
export type AdminModifyAddressMutationFn = ApolloReactCommon.MutationFunction<AdminModifyAddressMutation, AdminModifyAddressMutationVariables>;
export type AdminModifyAddressComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AdminModifyAddressMutation, AdminModifyAddressMutationVariables>, 'mutation'>;

    export const AdminModifyAddressComponent = (props: AdminModifyAddressComponentProps) => (
      <ApolloReactComponents.Mutation<AdminModifyAddressMutation, AdminModifyAddressMutationVariables> mutation={AdminModifyAddressDocument} {...props} />
    );
    
export type AdminModifyAddressProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AdminModifyAddressMutation, AdminModifyAddressMutationVariables>
    } & TChildProps;
export function withAdminModifyAddress<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AdminModifyAddressMutation,
  AdminModifyAddressMutationVariables,
  AdminModifyAddressProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AdminModifyAddressMutation, AdminModifyAddressMutationVariables, AdminModifyAddressProps<TChildProps, TDataName>>(AdminModifyAddressDocument, {
      alias: 'adminModifyAddress',
      ...operationOptions
    });
};

/**
 * __useAdminModifyAddressMutation__
 *
 * To run a mutation, you first call `useAdminModifyAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminModifyAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminModifyAddressMutation, { data, loading, error }] = useAdminModifyAddressMutation({
 *   variables: {
 *      addressId: // value for 'addressId'
 *      modifyAddressInput: // value for 'modifyAddressInput'
 *   },
 * });
 */
export function useAdminModifyAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AdminModifyAddressMutation, AdminModifyAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<AdminModifyAddressMutation, AdminModifyAddressMutationVariables>(AdminModifyAddressDocument, baseOptions);
      }
export type AdminModifyAddressMutationHookResult = ReturnType<typeof useAdminModifyAddressMutation>;
export type AdminModifyAddressMutationResult = ApolloReactCommon.MutationResult<AdminModifyAddressMutation>;
export type AdminModifyAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<AdminModifyAddressMutation, AdminModifyAddressMutationVariables>;
export const AddAddressDocument = gql`
    mutation AddAddress($addressInput: AddressInput!) {
  addAddress(addressInput: $addressInput) {
    ...GenericAddressFields
  }
}
    ${GenericAddressFieldsFragmentDoc}`;
export type AddAddressMutationFn = ApolloReactCommon.MutationFunction<AddAddressMutation, AddAddressMutationVariables>;
export type AddAddressComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddAddressMutation, AddAddressMutationVariables>, 'mutation'>;

    export const AddAddressComponent = (props: AddAddressComponentProps) => (
      <ApolloReactComponents.Mutation<AddAddressMutation, AddAddressMutationVariables> mutation={AddAddressDocument} {...props} />
    );
    
export type AddAddressProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddAddressMutation, AddAddressMutationVariables>
    } & TChildProps;
export function withAddAddress<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddAddressMutation,
  AddAddressMutationVariables,
  AddAddressProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddAddressMutation, AddAddressMutationVariables, AddAddressProps<TChildProps, TDataName>>(AddAddressDocument, {
      alias: 'addAddress',
      ...operationOptions
    });
};

/**
 * __useAddAddressMutation__
 *
 * To run a mutation, you first call `useAddAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAddressMutation, { data, loading, error }] = useAddAddressMutation({
 *   variables: {
 *      addressInput: // value for 'addressInput'
 *   },
 * });
 */
export function useAddAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddAddressMutation, AddAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<AddAddressMutation, AddAddressMutationVariables>(AddAddressDocument, baseOptions);
      }
export type AddAddressMutationHookResult = ReturnType<typeof useAddAddressMutation>;
export type AddAddressMutationResult = ApolloReactCommon.MutationResult<AddAddressMutation>;
export type AddAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<AddAddressMutation, AddAddressMutationVariables>;
export const AddressesDocument = gql`
    query Addresses {
  addresses {
    ...GenericAddressFields
  }
}
    ${GenericAddressFieldsFragmentDoc}`;
export type AddressesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AddressesQuery, AddressesQueryVariables>, 'query'>;

    export const AddressesComponent = (props: AddressesComponentProps) => (
      <ApolloReactComponents.Query<AddressesQuery, AddressesQueryVariables> query={AddressesDocument} {...props} />
    );
    
export type AddressesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AddressesQuery, AddressesQueryVariables>
    } & TChildProps;
export function withAddresses<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddressesQuery,
  AddressesQueryVariables,
  AddressesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AddressesQuery, AddressesQueryVariables, AddressesProps<TChildProps, TDataName>>(AddressesDocument, {
      alias: 'addresses',
      ...operationOptions
    });
};

/**
 * __useAddressesQuery__
 *
 * To run a query within a React component, call `useAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAddressesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AddressesQuery, AddressesQueryVariables>) {
        return ApolloReactHooks.useQuery<AddressesQuery, AddressesQueryVariables>(AddressesDocument, baseOptions);
      }
export function useAddressesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AddressesQuery, AddressesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AddressesQuery, AddressesQueryVariables>(AddressesDocument, baseOptions);
        }
export type AddressesQueryHookResult = ReturnType<typeof useAddressesQuery>;
export type AddressesLazyQueryHookResult = ReturnType<typeof useAddressesLazyQuery>;
export type AddressesQueryResult = ApolloReactCommon.QueryResult<AddressesQuery, AddressesQueryVariables>;
export const RateRequestsDocument = gql`
    query RateRequests($addressId: Int) {
  rateRequests(addressId: $addressId) {
    ...GenericRateRequestFields
  }
}
    ${GenericRateRequestFieldsFragmentDoc}`;
export type RateRequestsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RateRequestsQuery, RateRequestsQueryVariables>, 'query'>;

    export const RateRequestsComponent = (props: RateRequestsComponentProps) => (
      <ApolloReactComponents.Query<RateRequestsQuery, RateRequestsQueryVariables> query={RateRequestsDocument} {...props} />
    );
    
export type RateRequestsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<RateRequestsQuery, RateRequestsQueryVariables>
    } & TChildProps;
export function withRateRequests<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RateRequestsQuery,
  RateRequestsQueryVariables,
  RateRequestsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, RateRequestsQuery, RateRequestsQueryVariables, RateRequestsProps<TChildProps, TDataName>>(RateRequestsDocument, {
      alias: 'rateRequests',
      ...operationOptions
    });
};

/**
 * __useRateRequestsQuery__
 *
 * To run a query within a React component, call `useRateRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRateRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRateRequestsQuery({
 *   variables: {
 *      addressId: // value for 'addressId'
 *   },
 * });
 */
export function useRateRequestsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RateRequestsQuery, RateRequestsQueryVariables>) {
        return ApolloReactHooks.useQuery<RateRequestsQuery, RateRequestsQueryVariables>(RateRequestsDocument, baseOptions);
      }
export function useRateRequestsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RateRequestsQuery, RateRequestsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RateRequestsQuery, RateRequestsQueryVariables>(RateRequestsDocument, baseOptions);
        }
export type RateRequestsQueryHookResult = ReturnType<typeof useRateRequestsQuery>;
export type RateRequestsLazyQueryHookResult = ReturnType<typeof useRateRequestsLazyQuery>;
export type RateRequestsQueryResult = ApolloReactCommon.QueryResult<RateRequestsQuery, RateRequestsQueryVariables>;