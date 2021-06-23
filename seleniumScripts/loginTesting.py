# Script para testar a segurança do website
# neste script tenta-se aceder à conta administrativa do website
# inicialmente tenta-se umas credenciais tipicas nas administracoes (sem sucesso)
# posteriormente tenta-se as credenciais originais e funcionais (com sucesso)
# apresenta-se no output os erros da consola do browser de modo a perceber que o login falhou


import time
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
    contactos = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/nav/div/div[1]/a[3]/a"))
    )
    contactos.click()

    backoffice = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/section/div/div/div[2]/center/h3/span/a"))
    )
    backoffice.click()

    email = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/section/div[2]/div/form/div[1]/input"))
    )
    email.click()
    email.clear()
    email.send_keys("admin@admin.pt")

    passw = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/section/div[2]/div/form/div[2]/input"))
    )
    passw.click()
    passw.clear()
    passw.send_keys("admin")

    login = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/section/div[2]/div/form/button"))
    )
    login.click()

    time.sleep(5)

    for e in driver.get_log("browser"):
        print(e)

    email2 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/section/div[2]/div/form/div[1]/input"))
    )
    email2.click()
    email2.clear()
    email2.send_keys("some@some.some")

    passw2 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/section/div[2]/div/form/div[2]/input"))
    )
    passw2.click()
    passw2.clear()
    passw2.send_keys("some")

    login2 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/section/div[2]/div/form/button"))
    )
    login2.click()


except Exception as e:
    driver.quit()
    print(e.args)
