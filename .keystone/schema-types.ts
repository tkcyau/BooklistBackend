type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type AuthorRelateToOneInput = {
  readonly create?: AuthorCreateInput | null;
  readonly connect?: AuthorWhereUniqueInput | null;
  readonly disconnect?: AuthorWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BookWhereInput = {
  readonly AND?: ReadonlyArray<BookWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BookWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly year?: Scalars['Int'] | null;
  readonly year_not?: Scalars['Int'] | null;
  readonly year_lt?: Scalars['Int'] | null;
  readonly year_lte?: Scalars['Int'] | null;
  readonly year_gt?: Scalars['Int'] | null;
  readonly year_gte?: Scalars['Int'] | null;
  readonly year_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly year_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly author?: AuthorWhereInput | null;
  readonly author_is_null?: Scalars['Boolean'] | null;
};

export type BookWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBooksBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'year_ASC'
  | 'year_DESC'
  | 'author_ASC'
  | 'author_DESC';

export type BookUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly year?: Scalars['Int'] | null;
  readonly author?: AuthorRelateToOneInput | null;
};

export type BooksUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BookUpdateInput | null;
};

export type BookCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly year?: Scalars['Int'] | null;
  readonly author?: AuthorRelateToOneInput | null;
};

export type BooksCreateInput = {
  readonly data?: BookCreateInput | null;
};

export type BookRelateToManyInput = {
  readonly create?: ReadonlyArray<BookCreateInput | null> | null;
  readonly connect?: ReadonlyArray<BookWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<BookWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type AuthorWhereInput = {
  readonly AND?: ReadonlyArray<AuthorWhereInput | null> | null;
  readonly OR?: ReadonlyArray<AuthorWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateOfBirth?: Scalars['String'] | null;
  readonly dateOfBirth_not?: Scalars['String'] | null;
  readonly dateOfBirth_contains?: Scalars['String'] | null;
  readonly dateOfBirth_not_contains?: Scalars['String'] | null;
  readonly dateOfBirth_starts_with?: Scalars['String'] | null;
  readonly dateOfBirth_not_starts_with?: Scalars['String'] | null;
  readonly dateOfBirth_ends_with?: Scalars['String'] | null;
  readonly dateOfBirth_not_ends_with?: Scalars['String'] | null;
  readonly dateOfBirth_i?: Scalars['String'] | null;
  readonly dateOfBirth_not_i?: Scalars['String'] | null;
  readonly dateOfBirth_contains_i?: Scalars['String'] | null;
  readonly dateOfBirth_not_contains_i?: Scalars['String'] | null;
  readonly dateOfBirth_starts_with_i?: Scalars['String'] | null;
  readonly dateOfBirth_not_starts_with_i?: Scalars['String'] | null;
  readonly dateOfBirth_ends_with_i?: Scalars['String'] | null;
  readonly dateOfBirth_not_ends_with_i?: Scalars['String'] | null;
  readonly dateOfBirth_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateOfBirth_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly book_every?: BookWhereInput | null;
  readonly book_some?: BookWhereInput | null;
  readonly book_none?: BookWhereInput | null;
};

export type AuthorWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortAuthorsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'dateOfBirth_ASC'
  | 'dateOfBirth_DESC'
  | 'book_ASC'
  | 'book_DESC';

export type AuthorUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly dateOfBirth?: Scalars['String'] | null;
  readonly book?: BookRelateToManyInput | null;
};

export type AuthorsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: AuthorUpdateInput | null;
};

export type AuthorCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly dateOfBirth?: Scalars['String'] | null;
  readonly book?: BookRelateToManyInput | null;
};

export type AuthorsCreateInput = {
  readonly data?: AuthorCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type BookListTypeInfo = {
  key: 'Book';
  fields: 'id' | 'title' | 'year' | 'author';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly year?: number | null;
    readonly author?: string | null;
  };
  inputs: {
    where: BookWhereInput;
    create: BookCreateInput;
    update: BookUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BookWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBooksBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BookListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BookListTypeInfo,
    BookListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BookListTypeInfo,
  BookListTypeInfo['fields']
>;

export type AuthorListTypeInfo = {
  key: 'Author';
  fields: 'id' | 'name' | 'dateOfBirth' | 'book';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly dateOfBirth?: string | null;
    readonly book?: string | null;
  };
  inputs: {
    where: AuthorWhereInput;
    create: AuthorCreateInput;
    update: AuthorUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: AuthorWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortAuthorsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type AuthorListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    AuthorListTypeInfo,
    AuthorListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  AuthorListTypeInfo,
  AuthorListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Book: BookListTypeInfo;
  readonly Author: AuthorListTypeInfo;
};
