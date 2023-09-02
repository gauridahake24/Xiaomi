use xiaomi;

insert into ware_house(dispatch_id, part_id, required_quantity, source_warehouse, warehouse_quantity)
values (-1, 1, 2147483646, "North", 50),
(-2, 2, 2147483646, "North", 50),
(-3, 3, 2147483646, "North", 50),
(-4, 4, 2147483646, "North", 50),
(-5, 5, 2147483646, "North", 50);

insert into service_cen(part_id, part_name, Available_quantity, Required_quantity, warehouse_location, priority)
values (1, "battery", 50, 0, "North", "low"),
(2, "lens", 50, 0, "North", "low"), 
(3, "charger", 50, 0, "North", "low"), 
(4, "screen", 50, 0, "North", "low"), 
(5, "microphone", 50, 0, "North", "low");

DELIMITER //
CREATE TRIGGER set_priority
BEFORE INSERT ON service_cen
FOR EACH ROW
BEGIN
  IF new.Available_quantity BETWEEN 0 AND 15 THEN
    SET new.priority = 'high';
  END IF;
  
  IF new.Available_quantity BETWEEN 15 AND 25 THEN
    SET new.priority = 'medium';
  END IF;
  
  IF new.Available_quantity > 25 THEN
    SET new.priority = 'low';
  END IF;
END;
//

DELIMITER //
CREATE TRIGGER set_quantity
BEFORE INSERT ON ware_house
FOR EACH ROW
BEGIN
  SET NEW.warehouse_quantity = (SELECT W.warehouse_quantity FROM ware_house W WHERE NEW.part_id = W.part_id LIMIT 1);
END;
//


