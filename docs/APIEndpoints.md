# Project & Portfolio 

* **API Design**
* **Christian Wright**
* **September 10, 2023**


# Asset Management

## Retrieve All IT Assets

- **Endpoint:** `GET /api/assets`
- **Description:** Retrieve a list of all IT assets.
- **Response:** JSON array containing asset objects.

## Retrieve Specific IT Asset

- **Endpoint:** `GET /api/assets/{assetId}`
- **Description:** Retrieve details of a specific IT asset.
- **Parameters:** `assetId` (path parameter)
- **Response:** JSON object containing asset details.

## Create New IT Asset

- **Endpoint:** `POST /api/assets`
- **Description:** Create a new IT asset.
- **Request:** JSON object containing asset details.
- **Response:** JSON object confirming the creation.

## Update Specific IT Asset

- **Endpoint:** `PUT /api/assets/{assetId}`
- **Description:** Update details of a specific IT asset.
- **Parameters:** `assetId` (path parameter)
- **Request:** JSON object containing updated asset details.
- **Response:** JSON object confirming the update.

## Delete Specific IT Asset

- **Endpoint:** `DELETE /api/assets/{assetId}`
- **Description:** Delete a specific IT asset.
- **Parameters:** `assetId` (path parameter)
- **Response:** JSON object confirming the deletion.

# Employee Management

## Retrieve All Employees

- **Endpoint:** `GET /api/employees`
- **Description:** Retrieve a list of all employees.
- **Response:** JSON array containing employee objects.

## Retrieve Specific Employee

- **Endpoint:** `GET /api/employees/{employeeId}`
- **Description:** Retrieve details of a specific employee.
- **Parameters:** `employeeId` (path parameter)
- **Response:** JSON object containing employee details.

## Create New Employee Record

- **Endpoint:** `POST /api/employees`
- **Description:** Create a new employee record.
- **Request:** JSON object containing employee details.
- **Response:** JSON object confirming the creation.

## Update Specific Employee

- **Endpoint:** `PUT /api/employees/{employeeId}`
- **Description:** Update details of a specific employee.
- **Parameters:** `employeeId` (path parameter)
- **Request:** JSON object containing updated employee details.
- **Response:** JSON object confirming the update.

## Delete Specific Employee Record

- **Endpoint:** `DELETE /api/employees/{employeeId}`
- **Description:** Delete a specific employee record.
- **Parameters:** `employeeId` (path parameter)
- **Response:** JSON object confirming the deletion.
