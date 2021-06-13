# Script para testar o funcionamento normal do website
# neste script testa-se a adição de uma nova experiência clicando no botão

import time
from selenium import webdriver


PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("https://luiza-313312.nw.r.appspot.com/")
driver.maximize_window()

# no site da Luiza Andaluz clica-se no botão "Mapa" para aceder ao mapa
mapa = driver.find_element_by_xpath("/html/body/div/nav/div/div[1]/a[2]/a")
mapa.click()

# no site da Luiza Andaluz clica-se no botão "Mapa" para aceder ao mapa
exp = driver.find_element_by_xpath("/html/body/div[1]/div/div/div[3]/button")
exp.click()

time.sleep(5)

driver.quit()
