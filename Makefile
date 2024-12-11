PACKAGE_MANAGER := pnpm

all: install 

install:
	$(PACKAGE_MANAGER) install

build:
	$(PACKAGE_MANAGER) run build

start:
	$(PACKAGE_MANAGER) run start

lint:
	$(PACKAGE_MANAGER) run lint

.PHONY: all install build start lint