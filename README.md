# CRUD_Springboot_Angular

This repository contains a full-stack CRUD (Create, Read, Update, Delete) application built with Spring Boot for the backend and Angular with Angular Material for the frontend. This project demonstrates a simple and scalable architecture for managing user entities.

## Key Features

- **RESTful API**: Developed using Spring Boot.
- **Database Management**: Integrated with MySQL.
- **Frontend**: Designed with Angular and styled with Angular Material.
- **Form Validation**: Ensures user-friendly interactions and validations.
- **CRUD Operations**: Fully integrated Create, Read, Update, and Delete functionalities.

## Getting Started

### Prerequisites

- Java 11 or higher
- Node.js and npm
- MySQL

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/votre_nom_utilisateur/CRUD_Springboot_Angular.git
   cd CRUD_Springboot_Angular
2. **Backend Setup**

- Navigate to the backend directory:
```bash
cd demo
```
Update src/main/resources/application.properties with your database credentials. 

```
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Build and run the Spring Boot application:
```
- Build and run the Spring Boot application:
```
./mvnw spring-boot:run
```

3. **Frontend Setup**

- Navigate to the frontend directory:
```
cd ../frontend
```
- Install dependencies:
```
npm install
```
- Start the Angular application:
```
ng serve
```
4. **Access the Application**

- The backend API will be running at http://localhost:8081.
- The Angular frontend will be available at http://localhost:4200.


## Usage
- Create: Add new users via the form.
- Read: View the list of users.
- Update: Modify existing user details.
- Delete: Remove users from the list.
## Contributing
Feel free to fork the repository, submit issues, and open pull requests for improvements.


## Acknowledgments
- Spring Boot
- Angular
- Angular Material
- MySQL
