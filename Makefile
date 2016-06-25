deploy:
	@git checkout master
	jekyll build && \
	git add -A && \
	git commit -m "update code" && \
	git checkout gh-pages && \
	git merge master && \ 
	git add -A && \
	git commit -m "deploy code" && \
	git push origin gh-pages && \
	git checkout master && \
	echo "deploy succeed" && \
	git push origin master && \
	echo "push code"
