import sys
import os

def daemonize():
	pid = os.fork()
	if pid != 0:
		sys.exit(0)
	sys.stdout.close()
	sys.stdin.close()
	sys.stderr.close()
	
