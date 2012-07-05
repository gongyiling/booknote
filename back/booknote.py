import tornado.web
import tornado.ioloop
import tornado.httpserver
import logging

import svr_util

class BackHandler(tornado.web.RequestHandler):
	def get(self):
		self.write('hello, this is the back end')
	

if __name__ == '__main__':
	svr_util.daemonize()
	logging.basicConfig(level=logging.DEBUG, filename='/tmp/booknote.py.log')
	app = tornado.web.Application(handlers = [(r'/req', BackHandler)])
	httpserver = tornado.httpserver.HTTPServer(app)
	httpserver.listen(8080, '127.0.0.1')
	logging.info('start service on port 8080')
	tornado.ioloop.IOLoop.instance().start()


