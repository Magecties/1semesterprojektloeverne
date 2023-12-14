CREATE VIEW "skraldedataalt" AS 
SELECT * from skrald
join skraldekategori
USING ("skralde_kat_id")
join farlighedsfaktor
USING ("farligfaktor_id")