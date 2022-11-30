var database = require("../database/config")





function  listarDados(id) {
    var instrucao = `SELECT * FROM metricaView WHERE fkServidor = 1 AND parametroAtivo = ${id} ORDER BY horarioLeitura DESC LIMIT 50;`;
    var instrucao2 = `SELECT TOP  25 horarioLeitura,valorLeitura,parametro.fkMetrica FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    INNER JOIN servidor ON parametro.fkServidor = idServidor
    WHERE parametro.fkServidor = 1 AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao,instrucao2);
}

function listarMaquinas(id) {
    var instrucao = `SELECT * FROM leitura WHERE idEmpresa = ${id};`
    return database.select(instrucao);
}

function leiturasCpuPercent(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 1 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 1 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasCpuPercentTempoReal(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 1 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 1 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasDiscoPercent(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 4 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 4 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}


function leiturasRamPercent(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 3 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 3 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasDiscoPercentTempoReal(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 4 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 4 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}
function leiturasRamPercentTempoReal(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 3 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 3 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasDiscoGb(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 2 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 2 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasDiscoGbTempoReal(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 2 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 2 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasLeitura(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 5 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 5 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasLeituraTempoReal(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 5 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 5 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasEscrita(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 6 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 6 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}


function leiturasEscritaTempoReal(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 6 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 6 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasSwapPercent(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 7 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 25;`;
    var instrucao2 = `SELECT TOP 25 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 7 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}

function leiturasSwapPercentTempoReal(id) {
    var instrucao1 = `SELECT * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 7 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC LIMIT 1;`;
    var instrucao2 = `SELECT TOP 1 * FROM leitura 
    INNER JOIN componentefisico ON fkComponenteFisico = idComponenteFisico 
    INNER JOIN parametro ON parametro.fkComponenteFisico = idComponenteFisico 
    WHERE leitura.fkMetrica = 7 AND parametro.fkServidor = ${id} AND parametroAtivo = 1 ORDER BY horarioLeitura DESC;`;
    return database.select(instrucao1,instrucao2);
}


module.exports = {
    listarMaquinas,
    listarDados,
    leiturasCpuPercentTempoReal,
    leiturasDiscoPercentTempoReal,
    leiturasRamPercentTempoReal,
    leiturasDiscoGbTempoReal,
    leiturasLeituraTempoReal,
    leiturasEscritaTempoReal,
    leiturasSwapPercentTempoReal,
    leiturasCpuPercent,
    leiturasDiscoPercent,
    leiturasRamPercent,
    leiturasDiscoGb,
    leiturasLeitura,
    leiturasSwapPercent,
    leiturasEscrita
};