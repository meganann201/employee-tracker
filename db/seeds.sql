INSERT INTO departments (name)
VALUES
('Engineering'),
('Sales'),
('Finance'),
('Management');

INSERT INTO roles (title, salary, department_id)
VALUES
('Customer Service', 40000, 2),
('Marketing', 50000, 2),
('Engineer', 100000, 1),
('Manager', 75000, 4),
('Accountant', 65000, 3),
('Digital Creator', 40000, 4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
('Megan', 'Campbell', 3),
('Eric', 'Rochford', 3),
('Ranger', 'Robert', 1),
('Sam', 'Smith', 4),
('Ryan', 'Reynolds', 5),
('Amy', 'Joe', 2);