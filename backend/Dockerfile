FROM maven:3.8-openjdk-17-slim

WORKDIR /backend

COPY pom.xml .

RUN mvn clean package

COPY . .

EXPOSE 8080

CMD ["spring-boot:","run"]

