# Script de Selenium usado, inicialmente, para fazer Web Scapping ao site do IPT
# primeiro script feito de modo a treinar e aprender a ferramenta Selenium


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("http://www.ipt.pt/")
driver.maximize_window()

# no site do IPT clica-se no botão "INTERNACIONAL" para entrar no site antigo
internacional = driver.find_element_by_xpath("/html/body/nav[1]/div/ul/li[1]/span[2]/a")
internacional.click()

try:
    # dentro do site antigo, clica-se na ligação "Quem é quem"
    quem = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div[7]/div[1]/div[1]/ul/li[1]/a"))
    )
    quem.click()

    # no "Quem é quem" pesquisa-se o nome que queiramos
    pesquisa = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div[7]/div[2]/div[2]/h1[2]/input"))
    )
    pesquisa.click()
    pesquisa.send_keys("Paulo Santos")

    # quando os resultados forem apresentados carrega-se no primeiro
    pessoa = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "/html/body/div/div[7]/div[2]/div[2]/ul/li/a"))
    )
    pessoa.click()

except:
    driver.quit()

