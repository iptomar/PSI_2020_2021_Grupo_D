# Script para testar a segurança do website
# neste script adiciona-se uma história com sucesso com uma tentativa de "Mongo Injection"
# entra-se na conta administrativa e aceita-se a história adicionada
# verifica-se se ocorreu algum exploit ou erro na base de dados


import os
import time
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
    nome.send_keys("Script de Seguranca.")

    email = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div[2]/form/div[3]/input"))
    )
    email.click()
    email.send_keys("collection.delete_many({}) results = collection.find({}) for x in results:print(x)")

    texto = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div[2]/form/div[4]/textarea"))
    )
    texto.click()
    texto.send_keys("db.collection.delete_many({})")

    element = driver.find_element_by_css_selector("#root > div > div")
    ed = ActionChains(driver)
    ed.move_to_element(element).move_by_offset(-8.928487062665504, 13.227539062500002).click().perform()

    ficheiro = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div[2]/form/div[6]/input"))
    )
    ficheiro.send_keys(os.getcwd() + "\melao.png")

    submit = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div[2]/form/button"))
    )
    submit.click()

    time.sleep(5)

    contactos = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/nav/div/div[2]/a/a"))
    )
    contactos.click()

    backoffice = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div/h1/span/a"))
    )
    backoffice.click()

    login = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/section/div[2]/div/form/button"))
    )
    login.click()

    time.sleep(5)

    dashboard_id = driver.find_element(By.CLASS_NAME, "Dashboard")
    table_id = dashboard_id.find_element(By.XPATH, "/html/body/div/div/table")
    tableBody = table_id.find_elements(By.TAG_NAME, "tbody")

    for row in tableBody:
        allRows = row.find_elements(By.TAG_NAME, "tr")
        for tableData in allRows:
            tds = tableData.find_elements(By.TAG_NAME, "td")
            for eachData in tds:
                if eachData.text == "Script de Seguranca.":
                    print(eachData.text)
                    time.sleep(5)
                    aprove = tableData.find_element_by_tag_name("button")
                    aprove.click()
                    driver.refresh()

except Exception as e:
    driver.quit()
    print(e.args)
