
import string
import random
from selenium import webdriver
import time
from selenium.webdriver import ActionChains


class TestAndaluz():

    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(executable_path='D:\pythonProject\chromedriver.exe')
        self.driver.implicitly_wait(15)
        self.driver.get('https://luiza-313312.nw.r.appspot.com/')
        self.driver.maximize_window()

    def test_empty_cart(self):


        #carrega no botão mapa
        time.sleep(2)
        mapabotao = self.driver.find_element_by_xpath("/html/body/div[1]/nav/div/div[1]/a[2]/a")
        mapabotao.click()
        time.sleep(14)

        #carrega no botão "adicione a sua experiência"
        experienciabotao = self.driver.find_element_by_xpath("/html/body/div[1]/div/div/div[4]/button")
        experienciabotao.click()
        time.sleep(1)

        #função para gerar uma string aleatória
        def randomword(length):
            letters = string.ascii_lowercase
            return ''.join(random.choice(letters) for i in range(length))

        #escreve um nome aleatorio com 7 letras no "Introduza o seu Nome"
        nometexto = self.driver.find_element_by_xpath("/html/body/div[1]/div/div[2]/form/div[2]/input")
        nometexto.send_keys(randomword(7))
        time.sleep(1)

        # escreve um email aleatório no "Endereço de Email"
        emailtexto = self.driver.find_element_by_xpath("/html/body/div[1]/div/div[2]/form/div[3]/input")
        guardaremail = '' + randomword(7) + "@" + randomword(5) + ".com"
        emailtexto.send_keys(guardaremail)
        time.sleep(1)

        #escreve um texto com 60 letras aleatórias no "Conte-nos a sua História"
        historiatexto = self.driver.find_element_by_xpath("/html/body/div[1]/div/div[2]/form/div[4]/textarea")
        historiatexto.send_keys(randomword(60))
        time.sleep(1)

        #pressiona no mapa um ponto aleatório
        mapacarregar = self.driver.find_element_by_css_selector("#root > div > div")
        aux = ActionChains(self.driver)
        aux2 = random.uniform(-511, 525)
        aux3 = random.uniform(-302, 302)
        aux.move_to_element(mapacarregar).move_by_offset(aux2, aux3).click().perform()
        time.sleep(2)

        #carrega no botão "Publicar História!"
        submitcarregar = self.driver.find_element_by_xpath("/html/body/div[1]/div/div[2]/form/button")
        submitcarregar.click()
        time.sleep(3)

        #carrega no botão "Voltar para o Mapa"
        voltarcarregar = self.driver.find_element_by_xpath("/html/body/div[1]/div/div[2]/form/div[1]/button")
        voltarcarregar.click()
        time.sleep(2)

        #carrega no botão "Contactos"
        contactoscarregar = self.driver.find_element_by_xpath("//*[text()='Contactos']")
        contactoscarregar.click()
        time.sleep(1)

        #carrega no botão para aceder ao form do backoffice
        backoffcarregar = self.driver.find_element_by_xpath("/html/body/div[1]/section/div/div/div[1]/center/h3/span/a")
        backoffcarregar.click()
        time.sleep(1)

        #carrega no botão "Login" para aceder ao backoffice
        logincarregar = self.driver.find_element_by_xpath("/html/body/div[1]/section/div[2]/div/form/button")
        logincarregar.click()
        time.sleep(5)

        #procura um elemento com o texto igual ao do email
        teste = self.driver.find_element_by_xpath("//*[text()='" + guardaremail + "']")
        tabela = self.driver.find_elements_by_xpath("/html/body/div[1]/div/table/tbody/tr")
        numerolinhas = len(tabela) + 1

        for i in range(1, numerolinhas, 1):

            emailteste = self.driver.find_element_by_xpath("/html/body/div[1]/div/table/tbody/tr[" + str(i) + "]/td[2]")
            botaoteste = self.driver.find_element_by_xpath("/html/body/div[1]/div/table/tbody/tr[" + str(i) + "]/button[1]")

            #verifica se o tr = email
            if emailteste == teste:
                #carrega no tr com o id = "ui positive button"
                botaoteste.click()
                time.sleep(5)

        #carrega no botão "Mapa"
        mapabotao = self.driver.find_element_by_xpath("/html/body/div[1]/nav/div/div[1]/a[2]/a")
        mapabotao.click()
        time.sleep(20)

        #carrega no mapa o elemento que foi adicionado
        mapacarregar = self.driver.find_element_by_css_selector("#root > div > div")
        aux = ActionChains(self.driver)
        aux.move_to_element(mapacarregar).move_by_offset(aux2, aux3).click().perform()
        time.sleep(3)


    def teardown_method(self):
        time.sleep(3)
        self.driver.quit()