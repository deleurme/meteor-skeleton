# Comprehensive Application Build System.
# 
#                  |         
#  __ `__ \   _` | |  /  _ \ 
#  |   |   | (   |   <   __/ 
# _|  _|  _|\__,_|_|\_\\___| 
#                            
# 
APP = app

# default test port
PORT = 9393 
GOPTIONS = --base web --gruntfile web/Gruntfile.js

.PHONY: man
man:
	pandoc -s -t man README.md -o $(APP).1

.PHONY: install
install:
	cp $(APP).1 /usr/local/share/man/man1
	cp bin/$(APP) /usr/local/bin 

.PHONY: clean
clean:
	@rm tags 
	@rm cscope
	@rm *.1

