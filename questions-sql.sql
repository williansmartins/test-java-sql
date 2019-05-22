q23
Remove Row = delete from table where ...

q24 
Remove table = DROP table

q25
result should contain no duplicates and should be sorted
select distinct FIELD from TABLE order by FIELD

q26
Customer with no associated in orders
  SELECT Customers.CustomerName, Orders.OrderID
  FROM Customers
  LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
  ORDER BY Customers.CustomerName;

q27
SELECT A, B
from CUSTOMER
WHERE A like 'W%'
ORDER BY B, A

q28
Numbers of customers by city
The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions.
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);

q29
Primary Key 
=> it canot be a foreign key
=> it can have a data type like varchar
=> it can not contain any duplicate values

q30
SELECT products with category, if have not show null
  LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID



q31
Select numbers of product per product category
//??




