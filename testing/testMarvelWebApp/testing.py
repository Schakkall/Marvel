''' Docstring: Testing with the selenium WebDriver '''
from time import sleep
from selenium import webdriver

browser = webdriver.Firefox()
browser.get('http://localhost:3000')

while True:
    sleep(10)
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    print('scrolled')

#browser.quit()
