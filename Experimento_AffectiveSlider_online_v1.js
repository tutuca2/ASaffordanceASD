/********************************************** 
 * Experimento_Affectiveslider_Online_V1 *
 **********************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Experimento_AffectiveSlider_online_v1';  // from the Builder filename that created this script
let expInfo = {
    'participante': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Tela_inicialRoutineBegin());
flowScheduler.add(Tela_inicialRoutineEachFrame());
flowScheduler.add(Tela_inicialRoutineEnd());
flowScheduler.add(visao_geralRoutineBegin());
flowScheduler.add(visao_geralRoutineEachFrame());
flowScheduler.add(visao_geralRoutineEnd());
const instrucoesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instrucoesLoopBegin(instrucoesLoopScheduler));
flowScheduler.add(instrucoesLoopScheduler);
flowScheduler.add(instrucoesLoopEnd);


flowScheduler.add(Iniciar_treinamentoRoutineBegin());
flowScheduler.add(Iniciar_treinamentoRoutineEachFrame());
flowScheduler.add(Iniciar_treinamentoRoutineEnd());
const treinoLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(treinoLoopBegin(treinoLoopScheduler));
flowScheduler.add(treinoLoopScheduler);
flowScheduler.add(treinoLoopEnd);



flowScheduler.add(Iniciar_experimentoRoutineBegin());
flowScheduler.add(Iniciar_experimentoRoutineEachFrame());
flowScheduler.add(Iniciar_experimentoRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(engajamentoRoutineBegin());
flowScheduler.add(engajamentoRoutineEachFrame());
flowScheduler.add(engajamentoRoutineEnd());
flowScheduler.add(Tela_FinalRoutineBegin());
flowScheduler.add(Tela_FinalRoutineEachFrame());
flowScheduler.add(Tela_FinalRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Obrigado pela sua participação!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Obrigado pela sua participação!', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Conditions/instrucoes_tarefa.xlsx', 'path': 'Conditions/instrucoes_tarefa.xlsx'},
    {'name': 'Imagens_instrucoes/img_1.png', 'path': 'Imagens_instrucoes/img_1.png'},
    {'name': 'Imagens_instrucoes/img_2.png', 'path': 'Imagens_instrucoes/img_2.png'},
    {'name': 'Imagens_instrucoes/img_3.png', 'path': 'Imagens_instrucoes/img_3.png'},
    {'name': 'Imagens_instrucoes/img_4.png', 'path': 'Imagens_instrucoes/img_4.png'},
    {'name': 'Imagens_instrucoes/img_5.png', 'path': 'Imagens_instrucoes/img_5.png'},
    {'name': 'Imagens_instrucoes/img_6.png', 'path': 'Imagens_instrucoes/img_6.png'},
    {'name': 'Imagens_instrucoes/img_7.png', 'path': 'Imagens_instrucoes/img_7.png'},
    {'name': 'Imagens_instrucoes/img_8.png', 'path': 'Imagens_instrucoes/img_8.png'},
    {'name': 'Conditions/imagens_treino.xlsx', 'path': 'Conditions/imagens_treino.xlsx'},
    {'name': 'Treinamento/clipe de papel.png', 'path': 'Treinamento/clipe de papel.png'},
    {'name': 'Treinamento/caixa de presente branca.png', 'path': 'Treinamento/caixa de presente branca.png'},
    {'name': 'Treinamento/esmalte.png', 'path': 'Treinamento/esmalte.png'},
    {'name': 'Treinamento/rim.png', 'path': 'Treinamento/rim.png'},
    {'name': 'Treinamento/sabonete.png', 'path': 'Treinamento/sabonete.png'},
    {'name': 'Conditions/stimuli.xlsx', 'path': 'Conditions/stimuli.xlsx'},
    {'name': 'Estimulos/novelo de fio de costura.png', 'path': 'Estimulos/novelo de fio de costura.png'},
    {'name': 'Estimulos/caixa de óculos.png', 'path': 'Estimulos/caixa de óculos.png'},
    {'name': 'Estimulos/chave de carro simples.png', 'path': 'Estimulos/chave de carro simples.png'},
    {'name': 'Estimulos/barbeador sujo.png', 'path': 'Estimulos/barbeador sujo.png'},
    {'name': 'Estimulos/cubo mágico.png', 'path': 'Estimulos/cubo mágico.png'},
    {'name': 'Estimulos/carro de brinquedo pequeno.png', 'path': 'Estimulos/carro de brinquedo pequeno.png'},
    {'name': 'Estimulos/mamadeira média.png', 'path': 'Estimulos/mamadeira média.png'},
    {'name': 'Estimulos/cotonete.png', 'path': 'Estimulos/cotonete.png'},
    {'name': 'Estimulos/pote com mariposa.png', 'path': 'Estimulos/pote com mariposa.png'},
    {'name': 'Estimulos/copo de bebê.png', 'path': 'Estimulos/copo de bebê.png'},
    {'name': 'Estimulos/parafuso.png', 'path': 'Estimulos/parafuso.png'},
    {'name': 'Estimulos/intestino de galinha.png', 'path': 'Estimulos/intestino de galinha.png'},
    {'name': 'Estimulos/chocolate.png', 'path': 'Estimulos/chocolate.png'},
    {'name': 'Estimulos/mão humana dissecada 1.png', 'path': 'Estimulos/mão humana dissecada 1.png'},
    {'name': 'Estimulos/caixa de cigarro.png', 'path': 'Estimulos/caixa de cigarro.png'},
    {'name': 'Estimulos/lata de salgadinho.png', 'path': 'Estimulos/lata de salgadinho.png'},
    {'name': 'Estimulos/fruta podre.png', 'path': 'Estimulos/fruta podre.png'},
    {'name': 'Estimulos/fio dental.png', 'path': 'Estimulos/fio dental.png'},
    {'name': 'Estimulos/pimenta.png', 'path': 'Estimulos/pimenta.png'},
    {'name': 'Estimulos/caixa de fósforos.png', 'path': 'Estimulos/caixa de fósforos.png'},
    {'name': 'Estimulos/aranha.png', 'path': 'Estimulos/aranha.png'},
    {'name': 'Estimulos/otoscópio.png', 'path': 'Estimulos/otoscópio.png'},
    {'name': 'Estimulos/pote de tinta verde.png', 'path': 'Estimulos/pote de tinta verde.png'},
    {'name': 'Estimulos/bombom.png', 'path': 'Estimulos/bombom.png'},
    {'name': 'Estimulos/pintinho de brinquedo.png', 'path': 'Estimulos/pintinho de brinquedo.png'},
    {'name': 'Estimulos/moela.png', 'path': 'Estimulos/moela.png'},
    {'name': 'Estimulos/pão sujo.png', 'path': 'Estimulos/pão sujo.png'},
    {'name': 'Estimulos/escova de dentes rosa.png', 'path': 'Estimulos/escova de dentes rosa.png'},
    {'name': 'Estimulos/chinelo de bebê.png', 'path': 'Estimulos/chinelo de bebê.png'},
    {'name': 'Estimulos/tampa de metal.png', 'path': 'Estimulos/tampa de metal.png'},
    {'name': 'Estimulos/cadeado.png', 'path': 'Estimulos/cadeado.png'},
    {'name': 'Estimulos/relógio touchscreen.png', 'path': 'Estimulos/relógio touchscreen.png'},
    {'name': 'Estimulos/dentadura.png', 'path': 'Estimulos/dentadura.png'},
    {'name': 'Estimulos/lata de cerveja.png', 'path': 'Estimulos/lata de cerveja.png'},
    {'name': 'Estimulos/inseticida.png', 'path': 'Estimulos/inseticida.png'},
    {'name': 'Estimulos/rim.png', 'path': 'Estimulos/rim.png'},
    {'name': 'Estimulos/coração cortado.png', 'path': 'Estimulos/coração cortado.png'},
    {'name': 'Estimulos/olho de boi.png', 'path': 'Estimulos/olho de boi.png'},
    {'name': 'Estimulos/tampa de garrafa.png', 'path': 'Estimulos/tampa de garrafa.png'},
    {'name': 'Estimulos/maçã.png', 'path': 'Estimulos/maçã.png'},
    {'name': 'Estimulos/boneca grande.png', 'path': 'Estimulos/boneca grande.png'},
    {'name': 'Estimulos/esparadrapo.png', 'path': 'Estimulos/esparadrapo.png'},
    {'name': 'Estimulos/shampoo.png', 'path': 'Estimulos/shampoo.png'},
    {'name': 'Estimulos/bola de enfeite de natal.png', 'path': 'Estimulos/bola de enfeite de natal.png'},
    {'name': 'Estimulos/escova com cabelo.png', 'path': 'Estimulos/escova com cabelo.png'},
    {'name': 'Estimulos/barata.png', 'path': 'Estimulos/barata.png'},
    {'name': 'Estimulos/bloco de montar.png', 'path': 'Estimulos/bloco de montar.png'},
    {'name': 'Estimulos/cigarro queimado.png', 'path': 'Estimulos/cigarro queimado.png'},
    {'name': 'Estimulos/pregador de roupa marrom.png', 'path': 'Estimulos/pregador de roupa marrom.png'},
    {'name': 'Estimulos/pilha de moedas.png', 'path': 'Estimulos/pilha de moedas.png'},
    {'name': 'Estimulos/temporizador de cozinha.png', 'path': 'Estimulos/temporizador de cozinha.png'},
    {'name': 'Estimulos/mão humana.png', 'path': 'Estimulos/mão humana.png'},
    {'name': 'Estimulos/chiclete com cabelo.png', 'path': 'Estimulos/chiclete com cabelo.png'},
    {'name': 'Estimulos/coração.png', 'path': 'Estimulos/coração.png'},
    {'name': 'Estimulos/bolha de sabão.png', 'path': 'Estimulos/bolha de sabão.png'},
    {'name': 'Estimulos/esponja de cozinha.png', 'path': 'Estimulos/esponja de cozinha.png'},
    {'name': 'Estimulos/cola de papel.png', 'path': 'Estimulos/cola de papel.png'},
    {'name': 'Estimulos/pilha.png', 'path': 'Estimulos/pilha.png'},
    {'name': 'Estimulos/banana.png', 'path': 'Estimulos/banana.png'},
    {'name': 'Estimulos/gloss.png', 'path': 'Estimulos/gloss.png'},
    {'name': 'Estimulos/cebola.png', 'path': 'Estimulos/cebola.png'},
    {'name': 'Estimulos/cerebelo.png', 'path': 'Estimulos/cerebelo.png'},
    {'name': 'Estimulos/apontador.png', 'path': 'Estimulos/apontador.png'},
    {'name': 'Estimulos/fezes de animal.png', 'path': 'Estimulos/fezes de animal.png'},
    {'name': 'Estimulos/clipe de papel.png', 'path': 'Estimulos/clipe de papel.png'},
    {'name': 'Estimulos/escova de dentes suja.png', 'path': 'Estimulos/escova de dentes suja.png'},
    {'name': 'Estimulos/lápis rosa.png', 'path': 'Estimulos/lápis rosa.png'},
    {'name': 'Estimulos/fio dental pequeno.png', 'path': 'Estimulos/fio dental pequeno.png'},
    {'name': 'Estimulos/cacto.png', 'path': 'Estimulos/cacto.png'},
    {'name': 'Estimulos/caixa de presente marrom.png', 'path': 'Estimulos/caixa de presente marrom.png'},
    {'name': 'Estimulos/caneta chique.png', 'path': 'Estimulos/caneta chique.png'},
    {'name': 'Estimulos/laranja.png', 'path': 'Estimulos/laranja.png'},
    {'name': 'Estimulos/pata de galinha.png', 'path': 'Estimulos/pata de galinha.png'},
    {'name': 'Estimulos/carro de brinquedo grande.png', 'path': 'Estimulos/carro de brinquedo grande.png'},
    {'name': 'Estimulos/carregador de celular.png', 'path': 'Estimulos/carregador de celular.png'},
    {'name': 'Estimulos/chupeta.png', 'path': 'Estimulos/chupeta.png'},
    {'name': 'Estimulos/pasta de dente.png', 'path': 'Estimulos/pasta de dente.png'},
    {'name': 'Estimulos/mamadeira pequena.png', 'path': 'Estimulos/mamadeira pequena.png'},
    {'name': 'Estimulos/lapis preto.png', 'path': 'Estimulos/lapis preto.png'},
    {'name': 'Estimulos/mamadeira maior.png', 'path': 'Estimulos/mamadeira maior.png'},
    {'name': 'Estimulos/castanha.png', 'path': 'Estimulos/castanha.png'},
    {'name': 'Estimulos/chave de fenda.png', 'path': 'Estimulos/chave de fenda.png'},
    {'name': 'Estimulos/termômetro.png', 'path': 'Estimulos/termômetro.png'},
    {'name': 'Estimulos/lata de refrigerante.png', 'path': 'Estimulos/lata de refrigerante.png'},
    {'name': 'Estimulos/caixa de presente.png', 'path': 'Estimulos/caixa de presente.png'},
    {'name': 'Estimulos/ketchup.png', 'path': 'Estimulos/ketchup.png'},
    {'name': 'Estimulos/dedo esquelético.png', 'path': 'Estimulos/dedo esquelético.png'},
    {'name': 'Estimulos/dinossauro de brinquedo.png', 'path': 'Estimulos/dinossauro de brinquedo.png'},
    {'name': 'Estimulos/detergente.png', 'path': 'Estimulos/detergente.png'},
    {'name': 'Estimulos/chiclete.png', 'path': 'Estimulos/chiclete.png'},
    {'name': 'Estimulos/alho.png', 'path': 'Estimulos/alho.png'},
    {'name': 'Estimulos/taça quebrada.png', 'path': 'Estimulos/taça quebrada.png'},
    {'name': 'Estimulos/pote de coleta de fezes.png', 'path': 'Estimulos/pote de coleta de fezes.png'},
    {'name': 'Estimulos/fita adesiva verde.png', 'path': 'Estimulos/fita adesiva verde.png'},
    {'name': 'Estimulos/seringa com agulha.png', 'path': 'Estimulos/seringa com agulha.png'},
    {'name': 'Estimulos/lâmpada.png', 'path': 'Estimulos/lâmpada.png'},
    {'name': 'Estimulos/adaptador de tomada.png', 'path': 'Estimulos/adaptador de tomada.png'},
    {'name': 'Estimulos/frasco de remédio.png', 'path': 'Estimulos/frasco de remédio.png'},
    {'name': 'Estimulos/pacote de biscoito.png', 'path': 'Estimulos/pacote de biscoito.png'},
    {'name': 'Estimulos/orelha humana.png', 'path': 'Estimulos/orelha humana.png'},
    {'name': 'img_visao_geral.png', 'path': 'img_visao_geral.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'GUI/AS_intensity_cue.png', 'path': 'GUI/AS_intensity_cue.png'},
    {'name': 'GUI/AS_happy.png', 'path': 'GUI/AS_happy.png'},
    {'name': 'GUI/AS_unhappy.png', 'path': 'GUI/AS_unhappy.png'},
    {'name': 'GUI/AS_wideawake.png', 'path': 'GUI/AS_wideawake.png'},
    {'name': 'GUI/AS_sleepy.png', 'path': 'GUI/AS_sleepy.png'},
    {'name': 'GUI/AS_happy.png', 'path': 'GUI/AS_happy.png'},
    {'name': 'GUI/AS_intensity_cue.png', 'path': 'GUI/AS_intensity_cue.png'},
    {'name': 'GUI/AS_sleepy.png', 'path': 'GUI/AS_sleepy.png'},
    {'name': 'GUI/AS_unhappy.png', 'path': 'GUI/AS_unhappy.png'},
    {'name': 'GUI/AS_wideawake.png', 'path': 'GUI/AS_wideawake.png'},
    {'name': 'Estimulos/adaptador de tomada.png', 'path': 'Estimulos/adaptador de tomada.png'},
    {'name': 'Estimulos/alho.png', 'path': 'Estimulos/alho.png'},
    {'name': 'Estimulos/apontador.png', 'path': 'Estimulos/apontador.png'},
    {'name': 'Estimulos/aranha.png', 'path': 'Estimulos/aranha.png'},
    {'name': 'Estimulos/banana.png', 'path': 'Estimulos/banana.png'},
    {'name': 'Estimulos/barata.png', 'path': 'Estimulos/barata.png'},
    {'name': 'Estimulos/barbeador sujo.png', 'path': 'Estimulos/barbeador sujo.png'},
    {'name': 'Estimulos/bloco de montar.png', 'path': 'Estimulos/bloco de montar.png'},
    {'name': 'Estimulos/bola de enfeite de natal.png', 'path': 'Estimulos/bola de enfeite de natal.png'},
    {'name': 'Estimulos/bolha de sabão.png', 'path': 'Estimulos/bolha de sabão.png'},
    {'name': 'Estimulos/bombom.png', 'path': 'Estimulos/bombom.png'},
    {'name': 'Estimulos/boneca grande.png', 'path': 'Estimulos/boneca grande.png'},
    {'name': 'Estimulos/cacto.png', 'path': 'Estimulos/cacto.png'},
    {'name': 'Estimulos/cadeado.png', 'path': 'Estimulos/cadeado.png'},
    {'name': 'Estimulos/caixa de cigarro.png', 'path': 'Estimulos/caixa de cigarro.png'},
    {'name': 'Estimulos/caixa de fósforos.png', 'path': 'Estimulos/caixa de fósforos.png'},
    {'name': 'Estimulos/caixa de óculos.png', 'path': 'Estimulos/caixa de óculos.png'},
    {'name': 'Estimulos/caixa de presente marrom.png', 'path': 'Estimulos/caixa de presente marrom.png'},
    {'name': 'Estimulos/caixa de presente.png', 'path': 'Estimulos/caixa de presente.png'},
    {'name': 'Estimulos/caneta chique.png', 'path': 'Estimulos/caneta chique.png'},
    {'name': 'Estimulos/carregador de celular.png', 'path': 'Estimulos/carregador de celular.png'},
    {'name': 'Estimulos/carro de brinquedo grande.png', 'path': 'Estimulos/carro de brinquedo grande.png'},
    {'name': 'Estimulos/carro de brinquedo pequeno.png', 'path': 'Estimulos/carro de brinquedo pequeno.png'},
    {'name': 'Estimulos/castanha.png', 'path': 'Estimulos/castanha.png'},
    {'name': 'Estimulos/cebola.png', 'path': 'Estimulos/cebola.png'},
    {'name': 'Estimulos/cerebelo.png', 'path': 'Estimulos/cerebelo.png'},
    {'name': 'Estimulos/chave de carro simples.png', 'path': 'Estimulos/chave de carro simples.png'},
    {'name': 'Estimulos/chave de fenda.png', 'path': 'Estimulos/chave de fenda.png'},
    {'name': 'Estimulos/chiclete com cabelo.png', 'path': 'Estimulos/chiclete com cabelo.png'},
    {'name': 'Estimulos/chiclete.png', 'path': 'Estimulos/chiclete.png'},
    {'name': 'Estimulos/chinelo de bebê.png', 'path': 'Estimulos/chinelo de bebê.png'},
    {'name': 'Estimulos/chocolate.png', 'path': 'Estimulos/chocolate.png'},
    {'name': 'Estimulos/chupeta.png', 'path': 'Estimulos/chupeta.png'},
    {'name': 'Estimulos/cigarro queimado.png', 'path': 'Estimulos/cigarro queimado.png'},
    {'name': 'Estimulos/clipe de papel.png', 'path': 'Estimulos/clipe de papel.png'},
    {'name': 'Estimulos/cola de papel.png', 'path': 'Estimulos/cola de papel.png'},
    {'name': 'Estimulos/copo de bebê.png', 'path': 'Estimulos/copo de bebê.png'},
    {'name': 'Estimulos/coração cortado.png', 'path': 'Estimulos/coração cortado.png'},
    {'name': 'Estimulos/coração.png', 'path': 'Estimulos/coração.png'},
    {'name': 'Estimulos/cotonete.png', 'path': 'Estimulos/cotonete.png'},
    {'name': 'Estimulos/cubo mágico.png', 'path': 'Estimulos/cubo mágico.png'},
    {'name': 'Estimulos/dedo esquelético.png', 'path': 'Estimulos/dedo esquelético.png'},
    {'name': 'Estimulos/dentadura.png', 'path': 'Estimulos/dentadura.png'},
    {'name': 'Estimulos/detergente.png', 'path': 'Estimulos/detergente.png'},
    {'name': 'Estimulos/dinossauro de brinquedo.png', 'path': 'Estimulos/dinossauro de brinquedo.png'},
    {'name': 'Estimulos/escova com cabelo.png', 'path': 'Estimulos/escova com cabelo.png'},
    {'name': 'Estimulos/escova de dentes rosa.png', 'path': 'Estimulos/escova de dentes rosa.png'},
    {'name': 'Estimulos/escova de dentes suja.png', 'path': 'Estimulos/escova de dentes suja.png'},
    {'name': 'Estimulos/esparadrapo.png', 'path': 'Estimulos/esparadrapo.png'},
    {'name': 'Estimulos/esponja de cozinha.png', 'path': 'Estimulos/esponja de cozinha.png'},
    {'name': 'Estimulos/fezes de animal.png', 'path': 'Estimulos/fezes de animal.png'},
    {'name': 'Estimulos/fio dental pequeno.png', 'path': 'Estimulos/fio dental pequeno.png'},
    {'name': 'Estimulos/fio dental.png', 'path': 'Estimulos/fio dental.png'},
    {'name': 'Estimulos/fita adesiva verde.png', 'path': 'Estimulos/fita adesiva verde.png'},
    {'name': 'Estimulos/frasco de remédio.png', 'path': 'Estimulos/frasco de remédio.png'},
    {'name': 'Estimulos/fruta podre.png', 'path': 'Estimulos/fruta podre.png'},
    {'name': 'Estimulos/gloss.png', 'path': 'Estimulos/gloss.png'},
    {'name': 'Estimulos/inseticida.png', 'path': 'Estimulos/inseticida.png'},
    {'name': 'Estimulos/intestino de galinha.png', 'path': 'Estimulos/intestino de galinha.png'},
    {'name': 'Estimulos/ketchup.png', 'path': 'Estimulos/ketchup.png'},
    {'name': 'Estimulos/lâmpada.png', 'path': 'Estimulos/lâmpada.png'},
    {'name': 'Estimulos/lapis preto.png', 'path': 'Estimulos/lapis preto.png'},
    {'name': 'Estimulos/lápis rosa.png', 'path': 'Estimulos/lápis rosa.png'},
    {'name': 'Estimulos/laranja.png', 'path': 'Estimulos/laranja.png'},
    {'name': 'Estimulos/lata de cerveja.png', 'path': 'Estimulos/lata de cerveja.png'},
    {'name': 'Estimulos/lata de refrigerante.png', 'path': 'Estimulos/lata de refrigerante.png'},
    {'name': 'Estimulos/lata de salgadinho.png', 'path': 'Estimulos/lata de salgadinho.png'},
    {'name': 'Estimulos/maçã.png', 'path': 'Estimulos/maçã.png'},
    {'name': 'Estimulos/mamadeira maior.png', 'path': 'Estimulos/mamadeira maior.png'},
    {'name': 'Estimulos/mamadeira média.png', 'path': 'Estimulos/mamadeira média.png'},
    {'name': 'Estimulos/mamadeira pequena.png', 'path': 'Estimulos/mamadeira pequena.png'},
    {'name': 'Estimulos/mão humana dissecada 1.png', 'path': 'Estimulos/mão humana dissecada 1.png'},
    {'name': 'Estimulos/mão humana.png', 'path': 'Estimulos/mão humana.png'},
    {'name': 'Estimulos/moela.png', 'path': 'Estimulos/moela.png'},
    {'name': 'Estimulos/novelo de fio de costura.png', 'path': 'Estimulos/novelo de fio de costura.png'},
    {'name': 'Estimulos/olho de boi.png', 'path': 'Estimulos/olho de boi.png'},
    {'name': 'Estimulos/orelha humana.png', 'path': 'Estimulos/orelha humana.png'},
    {'name': 'Estimulos/otoscópio.png', 'path': 'Estimulos/otoscópio.png'},
    {'name': 'Estimulos/pacote de biscoito.png', 'path': 'Estimulos/pacote de biscoito.png'},
    {'name': 'Estimulos/pão sujo.png', 'path': 'Estimulos/pão sujo.png'},
    {'name': 'Estimulos/parafuso.png', 'path': 'Estimulos/parafuso.png'},
    {'name': 'Estimulos/pasta de dente.png', 'path': 'Estimulos/pasta de dente.png'},
    {'name': 'Estimulos/pata de galinha.png', 'path': 'Estimulos/pata de galinha.png'},
    {'name': 'Estimulos/pilha de moedas.png', 'path': 'Estimulos/pilha de moedas.png'},
    {'name': 'Estimulos/pilha.png', 'path': 'Estimulos/pilha.png'},
    {'name': 'Estimulos/pimenta.png', 'path': 'Estimulos/pimenta.png'},
    {'name': 'Estimulos/pintinho de brinquedo.png', 'path': 'Estimulos/pintinho de brinquedo.png'},
    {'name': 'Estimulos/pote com mariposa.png', 'path': 'Estimulos/pote com mariposa.png'},
    {'name': 'Estimulos/pote de coleta de fezes.png', 'path': 'Estimulos/pote de coleta de fezes.png'},
    {'name': 'Estimulos/pote de tinta verde.png', 'path': 'Estimulos/pote de tinta verde.png'},
    {'name': 'Estimulos/pregador de roupa marrom.png', 'path': 'Estimulos/pregador de roupa marrom.png'},
    {'name': 'Estimulos/relógio touchscreen.png', 'path': 'Estimulos/relógio touchscreen.png'},
    {'name': 'Estimulos/rim.png', 'path': 'Estimulos/rim.png'},
    {'name': 'Estimulos/seringa com agulha.png', 'path': 'Estimulos/seringa com agulha.png'},
    {'name': 'Estimulos/shampoo.png', 'path': 'Estimulos/shampoo.png'},
    {'name': 'Estimulos/taça quebrada.png', 'path': 'Estimulos/taça quebrada.png'},
    {'name': 'Estimulos/tampa de garrafa.png', 'path': 'Estimulos/tampa de garrafa.png'},
    {'name': 'Estimulos/tampa de metal.png', 'path': 'Estimulos/tampa de metal.png'},
    {'name': 'Estimulos/temporizador de cozinha.png', 'path': 'Estimulos/temporizador de cozinha.png'},
    {'name': 'Estimulos/termômetro.png', 'path': 'Estimulos/termômetro.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DATA);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participante"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Tela_inicialClock;
var text_tela_inicial;
var button_tela_inicial;
var visao_geralClock;
var textbox;
var image_visao_geral;
var button_visao_geral;
var Instrucoes_tarefaClock;
var text_instrucoes_tarefa;
var image_instrucoes_tarefa;
var button_instrucoes;
var Iniciar_treinamentoClock;
var text_iniciar_treinamento;
var button_iniciar_treinamento;
var trialClock;
var imageEstimulo;
var image_intensity_cue_Superior;
var slider_Valencia;
var AS_Sup_Direito;
var AS_Sup_Esquerdo;
var image_intensity_cue_Inferior;
var slider_Alerta;
var AS_Inf_Direito;
var AS_Inf_Esquerdo;
var button_proxima;
var tela_transicaoClock;
var text_2;
var Iniciar_experimentoClock;
var text_instrucao_final_1;
var button_iniciar;
var engajamentoClock;
var text_engajamento;
var sliderAtencao;
var button_engajamento;
var Tela_FinalClock;
var textFinal;
var button_salvar_resultados;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Tela_inicial"
  Tela_inicialClock = new util.Clock();
  text_tela_inicial = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_tela_inicial',
    text: 'Obrigado pela sua participação!\n \nA nossa pesquisa é sobre emoções. Vão aparecer várias fotos na tela. Nós desejamos saber como você se sente vendo cada foto.\n\nJunto com a foto, vão ter duas barrinhas com uma carinha de cada lado. Você tem que tocar/clicar na barrinha e arrastar o indicador para mostrar como você se sente vendo a foto.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_tela_inicial = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_tela_inicial',
    text: 'Prosseguir',
    fillColor: 'lightgrey',
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0.35, (- 0.35)],
    letterHeight: 0.04,
    size: [0.3, 0.15],
    ori: 0.0
    ,
    depth: -1
  });
  button_tela_inicial.clock = new util.Clock();
  
  // Initialize components for Routine "visao_geral"
  visao_geralClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: 'A tela do experimento será assim:',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.43], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: true,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  image_visao_geral = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_visao_geral', units : undefined, 
    image : 'img_visao_geral.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.38483, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  button_visao_geral = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_visao_geral',
    text: 'Prosseguir',
    fillColor: 'lightgrey',
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0.35, (- 0.4)],
    letterHeight: 0.04,
    size: [0.3, 0.15],
    ori: 0.0
    ,
    depth: -2
  });
  button_visao_geral.clock = new util.Clock();
  
  // Initialize components for Routine "Instrucoes_tarefa"
  Instrucoes_tarefaClock = new util.Clock();
  text_instrucoes_tarefa = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instrucoes_tarefa',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_instrucoes_tarefa = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_instrucoes_tarefa', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.25], 
    draggable: false,
    size : [1.0232108, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  button_instrucoes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_instrucoes',
    text: 'Prosseguir',
    fillColor: 'lightgrey',
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.2)],
    letterHeight: 0.04,
    size: [0.3, 0.15],
    ori: 0.0
    ,
    depth: -2
  });
  button_instrucoes.clock = new util.Clock();
  
  // Initialize components for Routine "Iniciar_treinamento"
  Iniciar_treinamentoClock = new util.Clock();
  text_iniciar_treinamento = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_iniciar_treinamento',
    text: 'Primeiro faremos um breve treinamento.\n\nAperte o botão abaixo quando estiver pronto para começar.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  button_iniciar_treinamento = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_iniciar_treinamento',
    text: 'Iniciar treinamento',
    fillColor: 'darkgrey',
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.2)],
    letterHeight: 0.03,
    size: [0.4, 0.2],
    ori: 0.0
    ,
    depth: -1
  });
  button_iniciar_treinamento.clock = new util.Clock();
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  imageEstimulo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageEstimulo', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.46), 0], 
    draggable: false,
    size : [0.9, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_intensity_cue_Superior = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_intensity_cue_Superior', units : undefined, 
    image : 'GUI/AS_intensity_cue.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.44, 0.25], 
    draggable: false,
    size : [0.6, 0.044],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  slider_Valencia = new visual.Slider({
    win: psychoJS.window, name: 'slider_Valencia',
    startValue: undefined,
    size: [0.59, 0.044], pos: [0.44, 0.2], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 1000],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('LightGray'), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color([0.6549, 0.6549, 0.6549]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  AS_Sup_Direito = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AS_Sup_Direito', units : undefined, 
    image : 'GUI/AS_happy.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.82, 0.23], 
    draggable: false,
    size : [0.14, 0.14],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  AS_Sup_Esquerdo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AS_Sup_Esquerdo', units : undefined, 
    image : 'GUI/AS_unhappy.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.06, 0.23], 
    draggable: false,
    size : [0.14, 0.14],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image_intensity_cue_Inferior = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_intensity_cue_Inferior', units : undefined, 
    image : 'GUI/AS_intensity_cue.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.44, 0], 
    draggable: false,
    size : [0.6, 0.044],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  slider_Alerta = new visual.Slider({
    win: psychoJS.window, name: 'slider_Alerta',
    startValue: undefined,
    size: [0.59, 0.044], pos: [0.44, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 1000],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('LightGray'), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color([0.6549, 0.6549, 0.6549]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  AS_Inf_Direito = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AS_Inf_Direito', units : undefined, 
    image : 'GUI/AS_wideawake.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.82, (- 0.02)], 
    draggable: false,
    size : [0.14, 0.14],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  AS_Inf_Esquerdo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AS_Inf_Esquerdo', units : undefined, 
    image : 'GUI/AS_sleepy.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.06, (- 0.02)], 
    draggable: false,
    size : [0.14, 0.14],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  button_proxima = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_proxima',
    text: 'Próxima',
    fillColor: [0.6549, 0.6549, 0.6549],
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0.44, (- 0.3)],
    letterHeight: 0.05,
    size: [0.3, 0.1],
    ori: 0.0
    ,
    depth: -9
  });
  button_proxima.clock = new util.Clock();
  
  // Initialize components for Routine "tela_transicao"
  tela_transicaoClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Iniciar_experimento"
  Iniciar_experimentoClock = new util.Clock();
  text_instrucao_final_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instrucao_final_1',
    text: 'Por favor, faça o experimento sozinho em um ambiente tranquilo e sem distrações. Você deve se concentrar e não fazer outras coisas durante o experimento. Então, se você precisa fazer algo antes de começar (como ir ao banheiro ou beber água), a hora é agora.\n\nQuando estiver pronto, aperte o botão abaixo para começar.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.4], draggable: false, height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  button_iniciar = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_iniciar',
    text: 'Iniciar experimento',
    fillColor: 'yellow',
    borderColor: 'red',
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.045,
    size: [0.6, 0.2],
    ori: 0.0
    ,
    depth: -1
  });
  button_iniciar.clock = new util.Clock();
  
  // Initialize components for Routine "engajamento"
  engajamentoClock = new util.Clock();
  text_engajamento = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_engajamento',
    text: 'Obigado por participar!\n\nComo foi a sua atenção durante o experimento?\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  sliderAtencao = new visual.Slider({
    win: psychoJS.window, name: 'sliderAtencao',
    startValue: undefined,
    size: [1.4, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["Muito ruim", "Um pouco ruim", "Moderada", "Boa", "Muito boa"], fontSize: 0.04, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color([0.6549, 0.6549, 0.6549]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  button_engajamento = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_engajamento',
    text: 'Salvar resultados',
    fillColor: [0.6549, 0.6549, 0.6549],
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, (- 0.35)],
    letterHeight: 0.04,
    size: [0.4, 0.16],
    ori: 0.0
    ,
    depth: -2
  });
  button_engajamento.clock = new util.Clock();
  
  // Initialize components for Routine "Tela_Final"
  Tela_FinalClock = new util.Clock();
  textFinal = new visual.TextStim({
    win: psychoJS.window,
    name: 'textFinal',
    text: 'Seus resultados serão salvos e baixados como um arquivo ".csv"\n\nPor favor envie esse arquivo ao pesquisador que te convidou a participar ou a Matheus Felippin:\n\nEmail: matheusfelippin@biof.ufrj.br\nou WhatsApp: (32) 98883-4300  ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_salvar_resultados = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_salvar_resultados',
    text: 'Terminar experimento',
    fillColor: [0.6549, 0.6549, 0.6549],
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, (- 0.35)],
    letterHeight: 0.04,
    size: [0.6, 0.2],
    ori: 0.0
    ,
    depth: -1
  });
  button_salvar_resultados.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var Tela_inicialMaxDurationReached;
var Tela_inicialMaxDuration;
var Tela_inicialComponents;
function Tela_inicialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Tela_inicial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Tela_inicialClock.reset();
    routineTimer.reset();
    Tela_inicialMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_tela_inicial to account for continued clicks & clear times on/off
    button_tela_inicial.reset()
    psychoJS.experiment.addData('Tela_inicial.started', globalClock.getTime());
    Tela_inicialMaxDuration = null
    // keep track of which components have finished
    Tela_inicialComponents = [];
    Tela_inicialComponents.push(text_tela_inicial);
    Tela_inicialComponents.push(button_tela_inicial);
    
    for (const thisComponent of Tela_inicialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Tela_inicialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Tela_inicial' ---
    // get current time
    t = Tela_inicialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_tela_inicial* updates
    if (t >= 0.0 && text_tela_inicial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_tela_inicial.tStart = t;  // (not accounting for frame time here)
      text_tela_inicial.frameNStart = frameN;  // exact frame index
      
      text_tela_inicial.setAutoDraw(true);
    }
    
    
    // *button_tela_inicial* updates
    if (t >= 0 && button_tela_inicial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_tela_inicial.tStart = t;  // (not accounting for frame time here)
      button_tela_inicial.frameNStart = frameN;  // exact frame index
      
      button_tela_inicial.setAutoDraw(true);
    }
    
    if (button_tela_inicial.status === PsychoJS.Status.STARTED) {
      // check whether button_tela_inicial has been pressed
      if (button_tela_inicial.isClicked) {
        if (!button_tela_inicial.wasClicked) {
          // store time of first click
          button_tela_inicial.timesOn.push(button_tela_inicial.clock.getTime());
          // store time clicked until
          button_tela_inicial.timesOff.push(button_tela_inicial.clock.getTime());
        } else {
          // update time clicked until;
          button_tela_inicial.timesOff[button_tela_inicial.timesOff.length - 1] = button_tela_inicial.clock.getTime();
        }
        if (!button_tela_inicial.wasClicked) {
          // end routine when button_tela_inicial is clicked
          continueRoutine = false;
          
        }
        // if button_tela_inicial is still clicked next frame, it is not a new click
        button_tela_inicial.wasClicked = true;
      } else {
        // if button_tela_inicial is clicked next frame, it is a new click
        button_tela_inicial.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_tela_inicial hasn't started / has finished
      button_tela_inicial.clock.reset();
      // if button_tela_inicial is clicked next frame, it is a new click
      button_tela_inicial.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Tela_inicialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Tela_inicialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Tela_inicial' ---
    for (const thisComponent of Tela_inicialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Tela_inicial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_tela_inicial.numClicks', button_tela_inicial.numClicks);
    psychoJS.experiment.addData('button_tela_inicial.timesOn', button_tela_inicial.timesOn);
    psychoJS.experiment.addData('button_tela_inicial.timesOff', button_tela_inicial.timesOff);
    // the Routine "Tela_inicial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var visao_geralMaxDurationReached;
var visao_geralMaxDuration;
var visao_geralComponents;
function visao_geralRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'visao_geral' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    visao_geralClock.reset();
    routineTimer.reset();
    visao_geralMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_visao_geral to account for continued clicks & clear times on/off
    button_visao_geral.reset()
    visao_geralMaxDuration = null
    // keep track of which components have finished
    visao_geralComponents = [];
    visao_geralComponents.push(textbox);
    visao_geralComponents.push(image_visao_geral);
    visao_geralComponents.push(button_visao_geral);
    
    for (const thisComponent of visao_geralComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function visao_geralRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'visao_geral' ---
    // get current time
    t = visao_geralClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // *image_visao_geral* updates
    if (t >= 0.0 && image_visao_geral.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_visao_geral.tStart = t;  // (not accounting for frame time here)
      image_visao_geral.frameNStart = frameN;  // exact frame index
      
      image_visao_geral.setAutoDraw(true);
    }
    
    
    // *button_visao_geral* updates
    if (t >= 3 && button_visao_geral.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_visao_geral.tStart = t;  // (not accounting for frame time here)
      button_visao_geral.frameNStart = frameN;  // exact frame index
      
      button_visao_geral.setAutoDraw(true);
    }
    
    if (button_visao_geral.status === PsychoJS.Status.STARTED) {
      // check whether button_visao_geral has been pressed
      if (button_visao_geral.isClicked) {
        if (!button_visao_geral.wasClicked) {
          // store time of first click
          button_visao_geral.timesOn.push(button_visao_geral.clock.getTime());
          // store time clicked until
          button_visao_geral.timesOff.push(button_visao_geral.clock.getTime());
        } else {
          // update time clicked until;
          button_visao_geral.timesOff[button_visao_geral.timesOff.length - 1] = button_visao_geral.clock.getTime();
        }
        if (!button_visao_geral.wasClicked) {
          // end routine when button_visao_geral is clicked
          continueRoutine = false;
          
        }
        // if button_visao_geral is still clicked next frame, it is not a new click
        button_visao_geral.wasClicked = true;
      } else {
        // if button_visao_geral is clicked next frame, it is a new click
        button_visao_geral.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_visao_geral hasn't started / has finished
      button_visao_geral.clock.reset();
      // if button_visao_geral is clicked next frame, it is a new click
      button_visao_geral.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of visao_geralComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function visao_geralRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'visao_geral' ---
    for (const thisComponent of visao_geralComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('button_visao_geral.numClicks', button_visao_geral.numClicks);
    psychoJS.experiment.addData('button_visao_geral.timesOn', button_visao_geral.timesOn);
    psychoJS.experiment.addData('button_visao_geral.timesOff', button_visao_geral.timesOff);
    // the Routine "visao_geral" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instrucoes;
function instrucoesLoopBegin(instrucoesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrucoes = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Conditions/instrucoes_tarefa.xlsx',
      seed: undefined, name: 'instrucoes'
    });
    psychoJS.experiment.addLoop(instrucoes); // add the loop to the experiment
    currentLoop = instrucoes;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstrucoe of instrucoes) {
      snapshot = instrucoes.getSnapshot();
      instrucoesLoopScheduler.add(importConditions(snapshot));
      instrucoesLoopScheduler.add(Instrucoes_tarefaRoutineBegin(snapshot));
      instrucoesLoopScheduler.add(Instrucoes_tarefaRoutineEachFrame());
      instrucoesLoopScheduler.add(Instrucoes_tarefaRoutineEnd(snapshot));
      instrucoesLoopScheduler.add(instrucoesLoopEndIteration(instrucoesLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instrucoesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instrucoes);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instrucoesLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var treino;
function treinoLoopBegin(treinoLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    treino = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Conditions/imagens_treino.xlsx',
      seed: undefined, name: 'treino'
    });
    psychoJS.experiment.addLoop(treino); // add the loop to the experiment
    currentLoop = treino;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTreino of treino) {
      snapshot = treino.getSnapshot();
      treinoLoopScheduler.add(importConditions(snapshot));
      treinoLoopScheduler.add(trialRoutineBegin(snapshot));
      treinoLoopScheduler.add(trialRoutineEachFrame());
      treinoLoopScheduler.add(trialRoutineEnd(snapshot));
      treinoLoopScheduler.add(tela_transicaoRoutineBegin(snapshot));
      treinoLoopScheduler.add(tela_transicaoRoutineEachFrame());
      treinoLoopScheduler.add(tela_transicaoRoutineEnd(snapshot));
      treinoLoopScheduler.add(treinoLoopEndIteration(treinoLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function treinoLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(treino);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function treinoLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Conditions/stimuli.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(tela_transicaoRoutineBegin(snapshot));
      trialsLoopScheduler.add(tela_transicaoRoutineEachFrame());
      trialsLoopScheduler.add(tela_transicaoRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Instrucoes_tarefaMaxDurationReached;
var Instrucoes_tarefaMaxDuration;
var Instrucoes_tarefaComponents;
function Instrucoes_tarefaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instrucoes_tarefa' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Instrucoes_tarefaClock.reset();
    routineTimer.reset();
    Instrucoes_tarefaMaxDurationReached = false;
    // update component parameters for each repeat
    text_instrucoes_tarefa.setText(texto_instrucao);
    image_instrucoes_tarefa.setImage(imagem_instrucao);
    // reset button_instrucoes to account for continued clicks & clear times on/off
    button_instrucoes.reset()
    Instrucoes_tarefaMaxDuration = null
    // keep track of which components have finished
    Instrucoes_tarefaComponents = [];
    Instrucoes_tarefaComponents.push(text_instrucoes_tarefa);
    Instrucoes_tarefaComponents.push(image_instrucoes_tarefa);
    Instrucoes_tarefaComponents.push(button_instrucoes);
    
    for (const thisComponent of Instrucoes_tarefaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instrucoes_tarefaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instrucoes_tarefa' ---
    // get current time
    t = Instrucoes_tarefaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instrucoes_tarefa* updates
    if (t >= 0.0 && text_instrucoes_tarefa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instrucoes_tarefa.tStart = t;  // (not accounting for frame time here)
      text_instrucoes_tarefa.frameNStart = frameN;  // exact frame index
      
      text_instrucoes_tarefa.setAutoDraw(true);
    }
    
    
    // *image_instrucoes_tarefa* updates
    if (t >= 0.0 && image_instrucoes_tarefa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_instrucoes_tarefa.tStart = t;  // (not accounting for frame time here)
      image_instrucoes_tarefa.frameNStart = frameN;  // exact frame index
      
      image_instrucoes_tarefa.setAutoDraw(true);
    }
    
    
    // *button_instrucoes* updates
    if (t >= 5.0 && button_instrucoes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_instrucoes.tStart = t;  // (not accounting for frame time here)
      button_instrucoes.frameNStart = frameN;  // exact frame index
      
      button_instrucoes.setAutoDraw(true);
    }
    
    if (button_instrucoes.status === PsychoJS.Status.STARTED) {
      // check whether button_instrucoes has been pressed
      if (button_instrucoes.isClicked) {
        if (!button_instrucoes.wasClicked) {
          // store time of first click
          button_instrucoes.timesOn.push(button_instrucoes.clock.getTime());
          // store time clicked until
          button_instrucoes.timesOff.push(button_instrucoes.clock.getTime());
        } else {
          // update time clicked until;
          button_instrucoes.timesOff[button_instrucoes.timesOff.length - 1] = button_instrucoes.clock.getTime();
        }
        if (!button_instrucoes.wasClicked) {
          // end routine when button_instrucoes is clicked
          continueRoutine = false;
          
        }
        // if button_instrucoes is still clicked next frame, it is not a new click
        button_instrucoes.wasClicked = true;
      } else {
        // if button_instrucoes is clicked next frame, it is a new click
        button_instrucoes.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_instrucoes hasn't started / has finished
      button_instrucoes.clock.reset();
      // if button_instrucoes is clicked next frame, it is a new click
      button_instrucoes.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instrucoes_tarefaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instrucoes_tarefaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instrucoes_tarefa' ---
    for (const thisComponent of Instrucoes_tarefaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('button_instrucoes.numClicks', button_instrucoes.numClicks);
    psychoJS.experiment.addData('button_instrucoes.timesOn', button_instrucoes.timesOn);
    psychoJS.experiment.addData('button_instrucoes.timesOff', button_instrucoes.timesOff);
    // the Routine "Instrucoes_tarefa" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Iniciar_treinamentoMaxDurationReached;
var Iniciar_treinamentoMaxDuration;
var Iniciar_treinamentoComponents;
function Iniciar_treinamentoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Iniciar_treinamento' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Iniciar_treinamentoClock.reset();
    routineTimer.reset();
    Iniciar_treinamentoMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_iniciar_treinamento to account for continued clicks & clear times on/off
    button_iniciar_treinamento.reset()
    Iniciar_treinamentoMaxDuration = null
    // keep track of which components have finished
    Iniciar_treinamentoComponents = [];
    Iniciar_treinamentoComponents.push(text_iniciar_treinamento);
    Iniciar_treinamentoComponents.push(button_iniciar_treinamento);
    
    for (const thisComponent of Iniciar_treinamentoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Iniciar_treinamentoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Iniciar_treinamento' ---
    // get current time
    t = Iniciar_treinamentoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_iniciar_treinamento* updates
    if (t >= 0.0 && text_iniciar_treinamento.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_iniciar_treinamento.tStart = t;  // (not accounting for frame time here)
      text_iniciar_treinamento.frameNStart = frameN;  // exact frame index
      
      text_iniciar_treinamento.setAutoDraw(true);
    }
    
    
    // *button_iniciar_treinamento* updates
    if (t >= 0 && button_iniciar_treinamento.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_iniciar_treinamento.tStart = t;  // (not accounting for frame time here)
      button_iniciar_treinamento.frameNStart = frameN;  // exact frame index
      
      button_iniciar_treinamento.setAutoDraw(true);
    }
    
    if (button_iniciar_treinamento.status === PsychoJS.Status.STARTED) {
      // check whether button_iniciar_treinamento has been pressed
      if (button_iniciar_treinamento.isClicked) {
        if (!button_iniciar_treinamento.wasClicked) {
          // store time of first click
          button_iniciar_treinamento.timesOn.push(button_iniciar_treinamento.clock.getTime());
          // store time clicked until
          button_iniciar_treinamento.timesOff.push(button_iniciar_treinamento.clock.getTime());
        } else {
          // update time clicked until;
          button_iniciar_treinamento.timesOff[button_iniciar_treinamento.timesOff.length - 1] = button_iniciar_treinamento.clock.getTime();
        }
        if (!button_iniciar_treinamento.wasClicked) {
          // end routine when button_iniciar_treinamento is clicked
          continueRoutine = false;
          
        }
        // if button_iniciar_treinamento is still clicked next frame, it is not a new click
        button_iniciar_treinamento.wasClicked = true;
      } else {
        // if button_iniciar_treinamento is clicked next frame, it is a new click
        button_iniciar_treinamento.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_iniciar_treinamento hasn't started / has finished
      button_iniciar_treinamento.clock.reset();
      // if button_iniciar_treinamento is clicked next frame, it is a new click
      button_iniciar_treinamento.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Iniciar_treinamentoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Iniciar_treinamentoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Iniciar_treinamento' ---
    for (const thisComponent of Iniciar_treinamentoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('button_iniciar_treinamento.numClicks', button_iniciar_treinamento.numClicks);
    psychoJS.experiment.addData('button_iniciar_treinamento.timesOn', button_iniciar_treinamento.timesOn);
    psychoJS.experiment.addData('button_iniciar_treinamento.timesOff', button_iniciar_treinamento.timesOff);
    // the Routine "Iniciar_treinamento" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    imageEstimulo.setImage(stimulus);
    slider_Valencia.reset()
    slider_Alerta.reset()
    // reset button_proxima to account for continued clicks & clear times on/off
    button_proxima.reset()
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(imageEstimulo);
    trialComponents.push(image_intensity_cue_Superior);
    trialComponents.push(slider_Valencia);
    trialComponents.push(AS_Sup_Direito);
    trialComponents.push(AS_Sup_Esquerdo);
    trialComponents.push(image_intensity_cue_Inferior);
    trialComponents.push(slider_Alerta);
    trialComponents.push(AS_Inf_Direito);
    trialComponents.push(AS_Inf_Esquerdo);
    trialComponents.push(button_proxima);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imageEstimulo* updates
    if (t >= 0.0 && imageEstimulo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageEstimulo.tStart = t;  // (not accounting for frame time here)
      imageEstimulo.frameNStart = frameN;  // exact frame index
      
      imageEstimulo.setAutoDraw(true);
    }
    
    
    // *image_intensity_cue_Superior* updates
    if (t >= 3 && image_intensity_cue_Superior.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_intensity_cue_Superior.tStart = t;  // (not accounting for frame time here)
      image_intensity_cue_Superior.frameNStart = frameN;  // exact frame index
      
      image_intensity_cue_Superior.setAutoDraw(true);
    }
    
    
    // *slider_Valencia* updates
    if (t >= 3 && slider_Valencia.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_Valencia.tStart = t;  // (not accounting for frame time here)
      slider_Valencia.frameNStart = frameN;  // exact frame index
      
      slider_Valencia.setAutoDraw(true);
    }
    
    
    // *AS_Sup_Direito* updates
    if (t >= 3 && AS_Sup_Direito.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AS_Sup_Direito.tStart = t;  // (not accounting for frame time here)
      AS_Sup_Direito.frameNStart = frameN;  // exact frame index
      
      AS_Sup_Direito.setAutoDraw(true);
    }
    
    
    // *AS_Sup_Esquerdo* updates
    if (t >= 3 && AS_Sup_Esquerdo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AS_Sup_Esquerdo.tStart = t;  // (not accounting for frame time here)
      AS_Sup_Esquerdo.frameNStart = frameN;  // exact frame index
      
      AS_Sup_Esquerdo.setAutoDraw(true);
    }
    
    
    // *image_intensity_cue_Inferior* updates
    if (t >= 3 && image_intensity_cue_Inferior.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_intensity_cue_Inferior.tStart = t;  // (not accounting for frame time here)
      image_intensity_cue_Inferior.frameNStart = frameN;  // exact frame index
      
      image_intensity_cue_Inferior.setAutoDraw(true);
    }
    
    
    // *slider_Alerta* updates
    if (t >= 3 && slider_Alerta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_Alerta.tStart = t;  // (not accounting for frame time here)
      slider_Alerta.frameNStart = frameN;  // exact frame index
      
      slider_Alerta.setAutoDraw(true);
    }
    
    
    // *AS_Inf_Direito* updates
    if (t >= 3 && AS_Inf_Direito.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AS_Inf_Direito.tStart = t;  // (not accounting for frame time here)
      AS_Inf_Direito.frameNStart = frameN;  // exact frame index
      
      AS_Inf_Direito.setAutoDraw(true);
    }
    
    
    // *AS_Inf_Esquerdo* updates
    if (t >= 3 && AS_Inf_Esquerdo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AS_Inf_Esquerdo.tStart = t;  // (not accounting for frame time here)
      AS_Inf_Esquerdo.frameNStart = frameN;  // exact frame index
      
      AS_Inf_Esquerdo.setAutoDraw(true);
    }
    
    
    // *button_proxima* updates
    if (((slider_Valencia.rating && slider_Alerta.rating)) && button_proxima.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_proxima.tStart = t;  // (not accounting for frame time here)
      button_proxima.frameNStart = frameN;  // exact frame index
      
      button_proxima.setAutoDraw(true);
    }
    
    if (button_proxima.status === PsychoJS.Status.STARTED) {
      // check whether button_proxima has been pressed
      if (button_proxima.isClicked) {
        if (!button_proxima.wasClicked) {
          // store time of first click
          button_proxima.timesOn.push(button_proxima.clock.getTime());
          // store time clicked until
          button_proxima.timesOff.push(button_proxima.clock.getTime());
        } else {
          // update time clicked until;
          button_proxima.timesOff[button_proxima.timesOff.length - 1] = button_proxima.clock.getTime();
        }
        if (!button_proxima.wasClicked) {
          // end routine when button_proxima is clicked
          continueRoutine = false;
          
        }
        // if button_proxima is still clicked next frame, it is not a new click
        button_proxima.wasClicked = true;
      } else {
        // if button_proxima is clicked next frame, it is a new click
        button_proxima.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_proxima hasn't started / has finished
      button_proxima.clock.reset();
      // if button_proxima is clicked next frame, it is a new click
      button_proxima.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_Valencia.response', slider_Valencia.getRating());
    psychoJS.experiment.addData('slider_Valencia.rt', slider_Valencia.getRT());
    psychoJS.experiment.addData('slider_Alerta.response', slider_Alerta.getRating());
    psychoJS.experiment.addData('slider_Alerta.rt', slider_Alerta.getRT());
    psychoJS.experiment.addData('button_proxima.numClicks', button_proxima.numClicks);
    psychoJS.experiment.addData('button_proxima.timesOn', button_proxima.timesOn);
    psychoJS.experiment.addData('button_proxima.timesOff', button_proxima.timesOff);
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tela_transicaoMaxDurationReached;
var tela_transicaoMaxDuration;
var tela_transicaoComponents;
function tela_transicaoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tela_transicao' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    tela_transicaoClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    tela_transicaoMaxDurationReached = false;
    // update component parameters for each repeat
    tela_transicaoMaxDuration = 2.0
    // keep track of which components have finished
    tela_transicaoComponents = [];
    tela_transicaoComponents.push(text_2);
    
    for (const thisComponent of tela_transicaoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function tela_transicaoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tela_transicao' ---
    // get current time
    t = tela_transicaoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > tela_transicaoMaxDuration) {
        tela_transicaoMaxDurationReached = true
        continueRoutine = false
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of tela_transicaoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tela_transicaoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tela_transicao' ---
    for (const thisComponent of tela_transicaoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (tela_transicaoMaxDurationReached) {
        tela_transicaoClock.add(tela_transicaoMaxDuration);
    } else {
        tela_transicaoClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Iniciar_experimentoMaxDurationReached;
var Iniciar_experimentoMaxDuration;
var Iniciar_experimentoComponents;
function Iniciar_experimentoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Iniciar_experimento' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Iniciar_experimentoClock.reset();
    routineTimer.reset();
    Iniciar_experimentoMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_iniciar to account for continued clicks & clear times on/off
    button_iniciar.reset()
    psychoJS.experiment.addData('Iniciar_experimento.started', globalClock.getTime());
    Iniciar_experimentoMaxDuration = null
    // keep track of which components have finished
    Iniciar_experimentoComponents = [];
    Iniciar_experimentoComponents.push(text_instrucao_final_1);
    Iniciar_experimentoComponents.push(button_iniciar);
    
    for (const thisComponent of Iniciar_experimentoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Iniciar_experimentoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Iniciar_experimento' ---
    // get current time
    t = Iniciar_experimentoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instrucao_final_1* updates
    if (t >= 0.0 && text_instrucao_final_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instrucao_final_1.tStart = t;  // (not accounting for frame time here)
      text_instrucao_final_1.frameNStart = frameN;  // exact frame index
      
      text_instrucao_final_1.setAutoDraw(true);
    }
    
    
    // *button_iniciar* updates
    if (t >= 4 && button_iniciar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_iniciar.tStart = t;  // (not accounting for frame time here)
      button_iniciar.frameNStart = frameN;  // exact frame index
      
      button_iniciar.setAutoDraw(true);
    }
    
    if (button_iniciar.status === PsychoJS.Status.STARTED) {
      // check whether button_iniciar has been pressed
      if (button_iniciar.isClicked) {
        if (!button_iniciar.wasClicked) {
          // store time of first click
          button_iniciar.timesOn.push(button_iniciar.clock.getTime());
          // store time clicked until
          button_iniciar.timesOff.push(button_iniciar.clock.getTime());
        } else {
          // update time clicked until;
          button_iniciar.timesOff[button_iniciar.timesOff.length - 1] = button_iniciar.clock.getTime();
        }
        if (!button_iniciar.wasClicked) {
          // end routine when button_iniciar is clicked
          continueRoutine = false;
          
        }
        // if button_iniciar is still clicked next frame, it is not a new click
        button_iniciar.wasClicked = true;
      } else {
        // if button_iniciar is clicked next frame, it is a new click
        button_iniciar.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_iniciar hasn't started / has finished
      button_iniciar.clock.reset();
      // if button_iniciar is clicked next frame, it is a new click
      button_iniciar.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Iniciar_experimentoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Iniciar_experimentoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Iniciar_experimento' ---
    for (const thisComponent of Iniciar_experimentoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Iniciar_experimento.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_iniciar.numClicks', button_iniciar.numClicks);
    psychoJS.experiment.addData('button_iniciar.timesOn', button_iniciar.timesOn);
    psychoJS.experiment.addData('button_iniciar.timesOff', button_iniciar.timesOff);
    // the Routine "Iniciar_experimento" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var engajamentoMaxDurationReached;
var engajamentoMaxDuration;
var engajamentoComponents;
function engajamentoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'engajamento' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    engajamentoClock.reset();
    routineTimer.reset();
    engajamentoMaxDurationReached = false;
    // update component parameters for each repeat
    sliderAtencao.reset()
    // reset button_engajamento to account for continued clicks & clear times on/off
    button_engajamento.reset()
    psychoJS.experiment.addData('engajamento.started', globalClock.getTime());
    engajamentoMaxDuration = null
    // keep track of which components have finished
    engajamentoComponents = [];
    engajamentoComponents.push(text_engajamento);
    engajamentoComponents.push(sliderAtencao);
    engajamentoComponents.push(button_engajamento);
    
    for (const thisComponent of engajamentoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function engajamentoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'engajamento' ---
    // get current time
    t = engajamentoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_engajamento* updates
    if (t >= 0.0 && text_engajamento.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_engajamento.tStart = t;  // (not accounting for frame time here)
      text_engajamento.frameNStart = frameN;  // exact frame index
      
      text_engajamento.setAutoDraw(true);
    }
    
    
    // *sliderAtencao* updates
    if (t >= 0.0 && sliderAtencao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderAtencao.tStart = t;  // (not accounting for frame time here)
      sliderAtencao.frameNStart = frameN;  // exact frame index
      
      sliderAtencao.setAutoDraw(true);
    }
    
    
    // *button_engajamento* updates
    if ((sliderAtencao.rating) && button_engajamento.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_engajamento.tStart = t;  // (not accounting for frame time here)
      button_engajamento.frameNStart = frameN;  // exact frame index
      
      button_engajamento.setAutoDraw(true);
    }
    
    if (button_engajamento.status === PsychoJS.Status.STARTED) {
      // check whether button_engajamento has been pressed
      if (button_engajamento.isClicked) {
        if (!button_engajamento.wasClicked) {
          // store time of first click
          button_engajamento.timesOn.push(button_engajamento.clock.getTime());
          // store time clicked until
          button_engajamento.timesOff.push(button_engajamento.clock.getTime());
        } else {
          // update time clicked until;
          button_engajamento.timesOff[button_engajamento.timesOff.length - 1] = button_engajamento.clock.getTime();
        }
        if (!button_engajamento.wasClicked) {
          // end routine when button_engajamento is clicked
          continueRoutine = false;
          
        }
        // if button_engajamento is still clicked next frame, it is not a new click
        button_engajamento.wasClicked = true;
      } else {
        // if button_engajamento is clicked next frame, it is a new click
        button_engajamento.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_engajamento hasn't started / has finished
      button_engajamento.clock.reset();
      // if button_engajamento is clicked next frame, it is a new click
      button_engajamento.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of engajamentoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function engajamentoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'engajamento' ---
    for (const thisComponent of engajamentoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('engajamento.stopped', globalClock.getTime());
    psychoJS.experiment.addData('sliderAtencao.response', sliderAtencao.getRating());
    psychoJS.experiment.addData('button_engajamento.numClicks', button_engajamento.numClicks);
    psychoJS.experiment.addData('button_engajamento.timesOn', button_engajamento.timesOn);
    psychoJS.experiment.addData('button_engajamento.timesOff', button_engajamento.timesOff);
    // the Routine "engajamento" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Tela_FinalMaxDurationReached;
var Tela_FinalMaxDuration;
var Tela_FinalComponents;
function Tela_FinalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Tela_Final' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Tela_FinalClock.reset();
    routineTimer.reset();
    Tela_FinalMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_salvar_resultados to account for continued clicks & clear times on/off
    button_salvar_resultados.reset()
    Tela_FinalMaxDuration = 15.0
    // keep track of which components have finished
    Tela_FinalComponents = [];
    Tela_FinalComponents.push(textFinal);
    Tela_FinalComponents.push(button_salvar_resultados);
    
    for (const thisComponent of Tela_FinalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Tela_FinalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Tela_Final' ---
    // get current time
    t = Tela_FinalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > Tela_FinalMaxDuration) {
        Tela_FinalMaxDurationReached = true
        continueRoutine = false
    }
    
    // *textFinal* updates
    if (t >= 0.0 && textFinal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textFinal.tStart = t;  // (not accounting for frame time here)
      textFinal.frameNStart = frameN;  // exact frame index
      
      textFinal.setAutoDraw(true);
    }
    
    
    // *button_salvar_resultados* updates
    if (t >= 3.0 && button_salvar_resultados.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_salvar_resultados.tStart = t;  // (not accounting for frame time here)
      button_salvar_resultados.frameNStart = frameN;  // exact frame index
      
      button_salvar_resultados.setAutoDraw(true);
    }
    
    if (button_salvar_resultados.status === PsychoJS.Status.STARTED) {
      // check whether button_salvar_resultados has been pressed
      if (button_salvar_resultados.isClicked) {
        if (!button_salvar_resultados.wasClicked) {
          // store time of first click
          button_salvar_resultados.timesOn.push(button_salvar_resultados.clock.getTime());
          // store time clicked until
          button_salvar_resultados.timesOff.push(button_salvar_resultados.clock.getTime());
        } else {
          // update time clicked until;
          button_salvar_resultados.timesOff[button_salvar_resultados.timesOff.length - 1] = button_salvar_resultados.clock.getTime();
        }
        if (!button_salvar_resultados.wasClicked) {
          // end routine when button_salvar_resultados is clicked
          continueRoutine = false;
          
        }
        // if button_salvar_resultados is still clicked next frame, it is not a new click
        button_salvar_resultados.wasClicked = true;
      } else {
        // if button_salvar_resultados is clicked next frame, it is a new click
        button_salvar_resultados.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_salvar_resultados hasn't started / has finished
      button_salvar_resultados.clock.reset();
      // if button_salvar_resultados is clicked next frame, it is a new click
      button_salvar_resultados.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Tela_FinalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Tela_FinalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Tela_Final' ---
    for (const thisComponent of Tela_FinalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('button_salvar_resultados.numClicks', button_salvar_resultados.numClicks);
    psychoJS.experiment.addData('button_salvar_resultados.timesOn', button_salvar_resultados.timesOn);
    psychoJS.experiment.addData('button_salvar_resultados.timesOff', button_salvar_resultados.timesOff);
    // the Routine "Tela_Final" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
