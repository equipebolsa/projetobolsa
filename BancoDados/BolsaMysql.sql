CREATE DATABASE bolsa;
USE bolsa;

CREATE TABLE empresa(
  idEmpresa INT  PRIMARY KEY AUTO_INCREMENT,
  nomeEmpresa VARCHAR(45) NOT NULL,
  cnpjEmpresa CHAR(18) UNIQUE NOT NULL,
  telefoneEmpresa VARCHAR(20)
);

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nomeUsuario VARCHAR(45) NOT NULL,
  emailUsuario VARCHAR(45) NOT NULL,
  senhaUsuario CHAR(128) NOT NULL,
  tipoUsuario VARCHAR(13) NOT NULL,
  CONSTRAINT CK_usuario_tipoUsuario CHECK(tipoUsuario IN ('Gestor', 'Técnico')),
  CONSTRAINT UK_usuario_emailUsuario UNIQUE(emailUsuario),
  fkEmpresa INT NOT NULL,
  CONSTRAINT FK_usuario_fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),  
  fkGestor INT,
  CONSTRAINT FK_usuario_fkGestor FOREIGN KEY (fkGestor) REFERENCES usuario (idUsuario)
) AUTO_INCREMENT = 10;

CREATE TABLE setor (
  idSetor INT PRIMARY KEY AUTO_INCREMENT,
  fkEmpresa INT NOT NULL,
  CONSTRAINT FK_setor_fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
  nomeSetor VARCHAR(45) NOT NULL,
  descricaoSetor VARCHAR(255) NULL  
);
CREATE TABLE servidor (
  idServidor INT PRIMARY KEY AUTO_INCREMENT,
  fkSetor INT NOT NULL,
  CONSTRAINT FK_servidor_fkSetor FOREIGN KEY (fkSetor) REFERENCES setor (idSetor),
  sistemaOperacional VARCHAR(45) NOT NULL,
  macAddress VARCHAR(45) NOT NULL,
  serialNumber VARCHAR(45) NOT NULL
);

CREATE TABLE componenteFisico  (
	idComponenteFisico  INT PRIMARY KEY AUTO_INCREMENT,
    fkServidor INT NOT NULL,
    CONSTRAINT FK_componenteFisico_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    tipoComponente VARCHAR(45) NOT NULL
);

CREATE TABLE metrica (
	idMetrica  INT PRIMARY KEY AUTO_INCREMENT,
	nomeMetrica VARCHAR(45) NOT NULL,
	unidadeMedida VARCHAR(255),
	isTupla CHAR(1) NOT NULL,
	CONSTRAINT CK_metrica_isTupla CHECK(isTupla IN ('1', '0'))
);

CREATE TABLE leitura (
  idLeitura INT PRIMARY KEY AUTO_INCREMENT,
  horarioLeitura DATETIME NOT NULL,
  valorLeitura VARCHAR(255) NOT NULL,
  fkComponenteFisico INT NOT NULL,
  CONSTRAINT FK_leitura_fkComponenteFisico FOREIGN KEY (fkComponenteFisico) REFERENCES componenteFisico (idComponenteFisico),
  fkMetrica INT NOT NULL,
  CONSTRAINT FK_leitura_fkMetrica FOREIGN KEY (fkMetrica) REFERENCES metrica (idMetrica)
);

CREATE TABLE alerta (
  idAlerta INT PRIMARY KEY AUTO_INCREMENT,
  tipoAlerta VARCHAR(45),
  fkLeitura INT NOT NULL,
  CONSTRAINT FK_alerta_fkAlerta FOREIGN KEY (fkLeitura) REFERENCES leitura (idLeitura)
 );

 CREATE TABLE parametro(
   fkComponenteFisico INT NOT NULL,
  CONSTRAINT FK_parametro_fkComponenteFisico FOREIGN KEY (fkComponenteFisico) REFERENCES componenteFisico (idComponenteFisico),
  fkMetrica INT NOT NULL,
  CONSTRAINT FK_parametro_fkMetrica FOREIGN KEY (fkMetrica) REFERENCES metrica (idMetrica),
  fkServidor INT NOT NULL,
  CONSTRAINT FK_parametro_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
  PRIMARY KEY(fkComponenteFisico, fkMetrica,fkServidor),
  parametroAtivo BOOLEAN NOT NULL
 );
 
  -- Projeto Individual: Gustavo Antonio
 CREATE TABLE rede(
	idRede INT PRIMARY KEY AUTO_INCREMENT,
    fkServidor INT NOT NULL,
    CONSTRAINT FK_rede_fkServidor FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    tipoConexao CHAR(15) NOT NULL,
	CONSTRAINT CK_rede_tipoConexao CHECK(tipoConexao IN ('Wi-Fi', 'Ethernet')),
    address VARCHAR(45)    
 );
  CREATE TABLE dadosRede(
	idDadosRede INT PRIMARY KEY AUTO_INCREMENT,
    fkRede INT NOT NULL,
    CONSTRAINT FK_dadosRede_fkRede FOREIGN KEY (fkRede) REFERENCES rede (idRede),
    packetsRecv INT,
    packetsSent INT,
    bytesSent DECIMAL(7,2),
    bytesRecv DECIMAL(7,2),
	horarioLeitura DATETIME NOT NULL
 );
 -- Projeto Individual: Gustavo Antonio
 
 -- Inserir
INSERT INTO empresa VALUES(NULL,"SPTECH","802.996.720-93","(63) 2430-8532");
INSERT INTO usuario VALUES(NULL,"URUBU","urubu@gmail.com","123","Gestor",1,NULL);
INSERT INTO setor VALUES(NULL,1,"SETOR1","Destinado Aos Computadores da Região de São Paulo");

INSERT INTO metrica VALUES(NULL,'Porcentagem De Uso Da CPU','%','0');
INSERT INTO metrica VALUES(NULL,'Memória De Uso Do DISCO','GB','0');
INSERT INTO metrica VALUES(NULL,'Porcentagem De Uso Da RAM','%','0');
INSERT INTO metrica VALUES(NULL,'Porcentagem De Uso Do DISCO','%','0');
INSERT INTO metrica VALUES(NULL,'Quantidade De Leitura Por Segundo','s','0');
INSERT INTO metrica VALUES(NULL,'Quantidade De Escrita Por Segundo','s','0');
INSERT INTO metrica VALUES(NULL,'Porcentagem De Uso Da Memória Virtual','%','0');
INSERT INTO metrica VALUES(NULL,'Temperatura Da CPU em C°','C°','0');

CREATE VIEW leituraView AS SELECT 
    nomeEmpresa,
    fkEmpresa,
    nomeSetor,
    idServidor,
    fkComponenteFisico,
    fkMetrica,
    tipoComponente,
	horarioLeitura,

    valorLeitura,
    unidadeMedida
FROM
    leitura
INNER JOIN componenteFisico ON idComponenteFisico =  fkComponenteFisico
INNER JOIN servidor ON idServidor = fkServidor
INNER JOIN setor ON idSetor = fkSetor
INNER JOIN empresa ON fkEmpresa = idEmpresa
INNER JOIN metrica ON fKMetrica = idMetrica;


CREATE VIEW redeView AS SELECT 
	packetsSent,
    packetsRecv,
    bytesSent,
    bytesRecv,
    horarioLeitura,
    fkServidor
FROM dadosrede
    INNER JOIN rede ON fkRede = idRede;
SELECT * from parametro INNER JOIN servidor ON fkServidor = idServidor WHERE idServidor = 1 AND parametroAtivo = 1;
 
SELECT horarioLeitura,valorLeitura,parametro.fkMetrica FROM leitura 
INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
INNER JOIN servidor ON parametro.fkServidor = idServidor
WHERE parametro.fkServidor = 3 AND parametroAtivo = 1 ORDER BY horarioLeitura asc;

