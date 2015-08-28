FROM meteorhacks/meteord:onbuild

# Then you can build the docker image with:
# docker build -t deleurme/app .
#
# Then you can run your meteor image with
# docker run -d                                     \
#            -e ROOT_URL=http://yourapp.com         \
#            -e MONGO_URL=mongodb://url             \
#            -e MONGO_OPLOG_URL=mongodb://oplog_url \
#            -p 8080:80 deleurme/app

