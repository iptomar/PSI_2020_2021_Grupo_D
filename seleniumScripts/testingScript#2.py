# Script para testar o funcionamento normal do website
# neste script testa-se os botões da navbar

import time
from selenium import webdriver


PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("https://luiza-313312.nw.r.appspot.com/")
driver.maximize_window()

# no site da Luiza Andaluz clica-se no botão "Mapa" para aceder ao mapa
mapa = driver.find_element_by_xpath("/html/body/div/nav/div/div[1]/a[2]/a")
mapa.click()

time.sleep(5)

# no site da Luiza Andaluz clica-se no botão "Presidente"
presidente = driver.find_element_by_xpath("/html/body/div[1]/nav/div/div[1]/a[3]/a")
presidente.click()

time.sleep(5)

# no site da Luiza Andaluz clica-se no botão "Contactos"
presidente = driver.find_element_by_xpath("/html/body/div[1]/nav/div/div[2]/a/a")
presidente.click()

time.sleep(5)

driver.quit()
