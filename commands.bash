# run this command to create an instance of PostgreSQL
docker run -d --name inventory-db -p 5433:5432 -e 'POSTGRES_PASSWORD=p@ss0rd42' postgres

# if you restart your computer, may need to restart the Docker container
docker start inventory-db