docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testnewgen/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testnewgen/app ../..
