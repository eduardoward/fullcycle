FROM golang:latest as build

WORKDIR /app

COPY . .
RUN go env -w GO111MODULE=off
RUN go build -ldflags "-w -s" -o fullcycle .

FROM scratch

WORKDIR /app

COPY --from=build /app/fullcycle /app

CMD ["/app/fullcycle"]