  
build:
	cd rokket_back && $(MAKE) build
	cd rokket_front && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down