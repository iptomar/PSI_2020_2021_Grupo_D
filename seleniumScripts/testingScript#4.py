# Script para testar o funcionamento normal do website
# neste script testa-se a adição de uma nova experiência clicando no botão
# para além disso acrescenta-se também um conjunto de "keys" para testar a submissão do formulario

# Início de uma abordagem diferente com "try" e "except"


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("https://luiza-313312.nw.r.appspot.com/")
driver.maximize_window()

# no site da Luiza Andaluz clica-se no botão "Mapa" para aceder ao mapa
mapa = driver.find_element_by_xpath("/html/body/div/nav/div/div[1]/a[2]/a")
mapa.click()

try:
    # na página do mapa, clica-se no botão "Adicione a sua experiência"
    adic = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div/div[3]/button"))
    )
    adic.click()

    # adiciona-se um nome no formulário
    nome = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div[2]/form/div[2]/input"))
    )
    nome.click()
    nome.send_keys("Script de Selenium")

except Exception as e:
    driver.quit()
