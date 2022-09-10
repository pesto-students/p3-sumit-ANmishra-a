
-- FIND THE ITEM WITH MINIMUM WEIGHT
SELECT 
MIN(ITEM_WEIGHT)
FROM ITEMS;

-- FIND THE DIFFERENT WAREHOUSES IN "PUNE"
SELECT W_NAME , c.city
FROM warehouse w
inner join cities c
on 
w.W_LOCATION = c.CITY_ID;

-- FIND THE DETAILS OF ITEM ORDERED BY A CUSTOMER "VIJAY" 
SELECT C.C_NAME 'CUSTOMER NAME',C.ADDR 'ADDERSS',CT.CITY,CT.STATE,O.O_DATE 'DATE',O.O_NO,OS.ITEM_NO,OS.QUANTITY
FROM ORDERS O
INNER JOIN CUSTOMER C
ON O.O_BY = C.C_NO
INNER JOIN CITIES CT
ON C.CU_CITY = CT.CITY_ID
INNER JOIN ORDER_SUMMERY OS
ON OS.O_NO = O.O_NO
WHERE C.C_NAME = 'VIJAY';

-- Find a Warehouse which has maximum stores.
SELECT *
FROM WAREHOUSE W
INNER JOIN STORES S
ON 
S.S_LOCATION_CITY = W.W_LOCATION; 
