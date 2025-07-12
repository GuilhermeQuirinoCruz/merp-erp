# podman build -t db-merp ./database
# podman run --name db-merp -p 5432:5432 --env-file .env -d db-merp
FROM postgres:latest

WORKDIR /db
COPY ./merp.sql /docker-entrypoint-initdb.d/

EXPOSE 5432