## ADDED Requirements

### Requirement: ResponsePayload generic wrapper

The system SHALL provide a generic `ResponsePayload<T>` type in `src/types/api-response-types.ts` that wraps all API responses with status, optional data, optional error, and optional meta fields.

#### Scenario: Successful response with data

- **WHEN** the API returns data successfully
- **THEN** `ResponsePayload` SHALL contain `status` (number) and `data` (T)

#### Scenario: Error response

- **WHEN** the API returns an error
- **THEN** `ResponsePayload` SHALL contain `status` (number) and `error` (`ErrorPayload`)

#### Scenario: Paginated response

- **WHEN** the API returns paginated data
- **THEN** `ResponsePayload` SHALL contain `meta` (`MetaApiPayload`)

### Requirement: ErrorPayload type

The system SHALL provide an `ErrorPayload` interface with `message` (string) and `code` (string) fields.

#### Scenario: Error payload shape

- **WHEN** an `ErrorPayload` is created
- **THEN** it SHALL have fields `message: string` and `code: string`

### Requirement: MetaApiPayload type

The system SHALL provide a `MetaApiPayload` interface with pagination fields.

#### Scenario: Meta payload shape

- **WHEN** a `MetaApiPayload` is created
- **THEN** it SHALL have fields: `page` (number), `perPage` (number), `total` (number), `totalPages` (number)

### Requirement: ErrorCode union type

The system SHALL provide an `ErrorCode` union type with all possible error codes.

#### Scenario: ErrorCode values

- **WHEN** `ErrorCode` is used
- **THEN** it SHALL accept values: `"VALIDATION_ERROR"`, `"NOT_FOUND"`, `"UNAUTHORIZED"`, `"FORBIDDEN"`, `"INTERNAL_ERROR"`, `"CONFLICT"`, `"INVALID_CREDENTIALS"`, `"EMAIL_ALREADY_EXISTS"`, `"INVALID_PAYLOAD"`, `"USER_NOT_FOUND"`, `"USER_CREATION_ERROR"`, `"RESPONSE_PARSE_ERROR"`
