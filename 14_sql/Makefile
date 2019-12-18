db-start:
	docker-compose -f docker-compose.mysql.yml up -d

db-end:
	docker-compose -f docker-compose.mysql.yml down -v

db-use:
	docker exec -it mysql mysql_jp -u root -p
