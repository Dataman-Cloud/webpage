# User

For register and login in.


## Start development ENV

* install npm
* npm install -g bower
* bower install
* cd user; `python3 -m http.server(port)`
* Visit http://localhost:8000

## Gulp build
* 在 Omega/user 目录下，执行 <code>docker run -it --rm --name my-running-script -v "$PWD":/usr/src/myapp -w /usr/src/myapp node:4.0 ./compress.sh</code> 命令
* 压缩成功后后在 user 目录下生成 build 目录，里面既是压缩后的文件.如要测试压缩的网页，需要修改 Nginx 容器脚本
  Omega/bin/start-nginx-container-for-site-dataman.sh 文件，将 omega-market 的挂在目录变为/user/build．并重新生成新的 omega-market　容器．
