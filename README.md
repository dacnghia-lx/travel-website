# Project Coffee Shop Management Windows Form Application .NET

Coffee Shop Management - Website coffee managent for staff and admin users in shop.

## Overview
The Coffee Shop Management project is a comprehensive software solution designed to streamline and enhance the management of a coffee shop. Built using .NET WinForms, C#, Guna Framework, and integrated with SQL Server, this application provides a user-friendly interface for managing various aspects of a coffee shop business.

## Features

### 1. Admin Authentication and Authorization
- Secure login functionality for admin members to manage database in system.
- Role-based access control to ensure proper authorization levels.

### 2. Product Management
- Add, edit, or remove coffee and non-coffee products from the menu.
- Categorize products for easy navigation (e.g., coffee, tea, snacks).
- Set prices, manage inventory, and track stock levels.

### 3. Order Processing in Staff Role
- Create new orders and add items to them.
- Customize orders based on customer preferences (e.g., size, sugar level, milk type).
- Calculate and display the total amount for each order.

### 4. Sales and Reporting
- Record daily sales and generate reports.
- View sales analytics, including popular products and peak hours.
- Monitor inventory levels and receive low stock alerts.

### 5. Billing and Payment
- Generate and print bills for customers.
- Accept various payment methods (cash, credit card) and record transactions.
- Calculate and apply discounts or promotions.
  
## Technologies 🔧
- **Programming Language:** C#
- **User Interface Framework:** .NET WinForms, Guna Framework, LiveCharts
- **Data Access Technology:** ADO .NET.
- **Database:** Mircosoft SQL Server
- **Version Control:** Git, Github
- **Integrated Development Environment (IDE):** Visual Studio 2022

## Screenshots 📸
<img width="1906" height="1065" alt="image" src="https://github.com/user-attachments/assets/e54950df-5e1d-418d-ba63-0c25507a6f16" />
<img width="1908" height="1064" alt="image" src="https://github.com/user-attachments/assets/a18ab7be-dd2c-4a58-bb6c-725ea95ab895" />
<img width="1916" height="1068" alt="image" src="https://github.com/user-attachments/assets/3fade488-995a-43f4-95d9-e292125b8f4d" />
<img width="1900" height="1068" alt="image" src="https://github.com/user-attachments/assets/898111fa-a268-4bf4-93ed-b95e736f0169" />
<img width="1903" height="1070" alt="image" src="https://github.com/user-attachments/assets/e93337d5-7c2f-4504-b891-9a657900d5bc" />
<img width="1910" height="1068" alt="image" src="https://github.com/user-attachments/assets/3d4e6c19-f2e9-47e1-bf46-211f2aeeda35" />

## Installation ✔️
Before you get started, you need to install the following prerequisites:

- [Visual Studio 2022](https://visualstudio.microsoft.com/vs). - IDE for develop application using .NET Framework of C#.
- [.NET Framework 4.6](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net46).
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) - a software product with the primary function of storing and retrieving.

Then, you can proceed with the project setup:

1. Clone the repository from [GitHub Repo](https://github.com/hoigreen/project-coffee-shop-management-ado-dotnet/).
```bash
# Clone on method HTTPS
git clone https://github.com/hoigreen/project-coffee-shop-management-ado-dotnet.git


# Clone on method SSH
git clone git@github.com:hoigreen/project-coffee-shop-management-ado-dotnet.git
```

2. Open the project in Visual Studio.
3. Attach database file from project to Mircosoft SQL Server
 - Go to folder /database in project.
 - Copy 2 file with extensions is ".mdf" and ".ldf" to \DATA in your device path at:
   ```bash
   "C:\Program Files\Microsoft SQL Server\<Version MSSQL>\MSSQL\DATA\"
 - Attach database into SQL Server.
4. Copy file Global.cs.example with new name is "Global.cs".
5. Configure the database connection settings in the application to file Global.cs.
6. Build, run and debug the application.

Goodluck. 🍀🍀🍀

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## About our team 🤝:
1.Backend Developer:
- Lê Hải Nam

2.Frontend Developer
- Nguyễn Đắc Tuấn Nghĩa
