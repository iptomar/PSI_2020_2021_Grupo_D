# Script para testar o funcionamento normal do website
# neste script tenta-se a adição de uma nova coordenada no mapa com sucesso


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

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

    nome = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div[2]/form/div[2]/input"))
    )
    nome.click()
    nome.send_keys("Script de Selenium.")

    email = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div[2]/form/div[3]/input"))
    )
    email.click()
    email.send_keys("script@selenium.com")

    texto = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div[2]/form/div[4]/textarea"))
    )
    texto.click()
    texto.send_keys("Isto é um teste de Selenium.")

    element = driver.find_element_by_css_selector("#root > div > div")
    ed = ActionChains(driver)
    ed.move_to_element(element).move_by_offset(-8.928487062665504, 13.227539062500002).click().perform()


except Exception as e:
    driver.quit()
